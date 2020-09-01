<template>
  <div class="productsmanagement">
    <div class="product_management container">
      <Loading :active.sync="isLoading"></Loading>
      <div class="mt-5 clearfix">
        <button
          class="btn btn-outline-dark rounded-0 float-right"
          type="button"
          @click="openModal('new', 0)"
        >NEW PRODUCT</button>
        <button
          class="btn btn-dark rounded-0 float-left"
          type="button"
          @click="signout"
        >SIGN OUT</button>
      </div>
      <table class="table mt-3">
        <thead>
          <tr>
            <th width="50">#</th>
            <th width="120">Product</th>
            <th>Sort</th>
            <th width="120">Price</th>
            <th width="150">Discount Price</th>
            <th width="100">Active</th>
            <th width="150">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ item.origin_price }}</td>
            <td class="text-right">{{ item.price }}</td>
            <td>
              <input
                type="checkbox"
                :id="`switch-${index}`"
                class="switch"
                v-model="item.enabled"
                @click="patchItem(item)"
              />
              <label class="slider" :for="`switch-${index}`"></label>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-dark btn-sm rounded-0"
                  @click="openModal('edit', item)"
                >Edit</button>
                <button
                  class="btn btn-outline-danger btn-sm rounded-0"
                  @click="openModal('delete', item)"
                  :disabled="deleteBtn === item.id"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    v-if="deleteBtn === item.id"
                  ></span>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <Pagination :pages="pagination" @update="getProducts"></Pagination>

      <!-- New Product Modal -->
      <div
        id="newproductModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Newproductmodal @upload="getProducts"></Newproductmodal>
      </div>

      <!-- Edit Product Modal -->
      <div
        id="productModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Productmodal :temp-product="tempProduct" @update="getProducts"></Productmodal>
      </div>

      <!-- Delete Product Modal -->
      <div
        id="delProductModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Delproductmodal
          :temp-product="tempProduct"
          :delete-btn="deleteBtn"
          @update="getProducts"
          @unactiveloading="unactiveloading"
        ></Delproductmodal>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination.vue';
import Newproductmodal from '../../components/admin/Newproductmodal.vue';
import Productmodal from '../../components/admin/Productmodal.vue';
import Delproductmodal from '../../components/admin/Delproductmodal.vue';

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      lockingBtn: '',
      deleteBtn: '',
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
    };
  },
  props: ['token'],
  components: {
    Pagination,
    Newproductmodal,
    Productmodal,
    Delproductmodal,
  },
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      //  GET api/{uuid}/admin/ec/products
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`;
      this.$http.get(url).then((response) => {
        this.products = response.data.data;
        this.pagination = response.data.meta.pagination;
        if (this.tempProduct.id) {
          this.tempProduct = {
            imageUrl: [],
          };
          $('#productModal').modal('hide');
        }
        this.isLoading = false;
      });
    },
    openModal(isNew, item) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
      switch (isNew) {
        case 'new':
          $('#newproductModal').modal('show');
          break;
        case 'edit':
          this.isLoading = true;
          this.lockingBtn = item.id;
          this.$http.get(url).then((response) => {
            this.tempProduct = response.data.data;
            $('#productModal').modal('show');
            this.isLoading = false;
          });
          break;
        case 'delete':
          this.deleteBtn = item.id;
          $('#delProductModal').modal('show');
          this.tempProduct = { ...item };
          break;
        default:
          break;
      }
    },
    patchItem(item) {
      // PATCH api/{uuid}/admin/ec/product/{id}
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
      this.$http.patch(url, {
        enabled: !item.enabled,
      }).then((response) => {
        console.log(response.data.data.enabled);
      });
    },
    unactiveloading() {
      this.deleteBtn = '';
    },
    signout() {
      document.cookie = 'myToken=;expires=;';
      this.$router.push('/admin/login');
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.getProducts();
  },
  mounted() {
    this.getProducts();
    $('#delProductModal').on('hidden.bs.modal', () => {
      this.deleteBtn = '';
    });
  },
};
</script>

<style lang="scss">
/* Switch Style */
.switch {
  position: absolute;
  left: -9999px;
}
.slider {
  position: relative;
  display: block;
  width: 3.5em;
  height: 1.5em;
  cursor: pointer;
  border-radius: 0.75em;
  transition: 350ms;
  background: #ddd;
}
.slider:after {
  position: absolute;
  content: "";
  width: 1em;
  height: 1em;
  top: 0.25em;
  left: 0.25em;
  border-radius: 0.75em;
  transition: width 200ms ease-out, height 300ms 50ms ease-in,
    top 300ms 50ms ease-in, left 250ms 50ms ease-in, background 300ms ease-in,
    box-shadow 300ms ease-in;
  background: #f2f2f2;
  box-shadow: 0 0 0 1.5em #f2f2f2 inset;
}
.switch:checked + .slider::after {
  width: 2em;
  height: 1.5em;
  top: 0;
  left: 1.5em;
  background: #4c6;
  box-shadow: 0 0 0 0 #f2f2f2 inset;
}

/* Checkbox Style */
.styled-checkbox {
  position: absolute;
  opacity: 0;
}
.styled-checkbox + label {
  position: relative;
  cursor: pointer;
  padding: 0;
}
.styled-checkbox + label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 20px;
  height: 20px;
  background: gray;
}
.styled-checkbox:hover + label:before {
  background: #f35429;
}
.styled-checkbox:focus + label:before {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
}
.styled-checkbox:checked + label:before {
  background: #f35429;
}
.styled-checkbox:checked + label:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 13px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>
