<template>
  <div class="modal-dialog modal-xl novalidate text-left" role="document">
    <Loading :active.sync="isLoading"></Loading>
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <h5 id="exampleModalLabel" class="modal-title">UpLoad New Product</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="NewimageUrl">Image URL</label>
              <input
                id="NewimageUrl"
                type="text"
                class="form-control"
                v-model="NewProduct.imageUrl[0]"
                placeholder="請輸入圖片連結"
                required
              />
            </div>
            <img class="img-fluid" alt />
          </div>
          <img class="img-fluid" alt />
          <div class="col-sm-8">
            <div class="form-group">
              <label for="NewProductTitle">Title</label>
              <input
                id="NewProductTitle"
                type="text"
                class="form-control"
                v-model="NewProduct.title"
                placeholder="請輸入標題"
                required
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="Newcategory">Category</label>
                <input
                  id="Newcategory"
                  type="text"
                  class="form-control"
                  v-model="NewProduct.category"
                  placeholder="請輸入分類"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">Unit</label>
                <input
                  id="unit"
                  type="unit"
                  class="form-control"
                  v-model="NewProduct.unit"
                  placeholder="請輸入單位"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="origin_price">Price</label>
                <input
                  id="origin_price"
                  type="number"
                  class="form-control"
                  v-model="NewProduct.origin_price"
                  placeholder="請輸入原價"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="price">Selling Price</label>
                <input
                  id="price"
                  type="number"
                  class="form-control"
                  v-model="NewProduct.price"
                  placeholder="請輸入售價"
                  required
                />
              </div>
            </div>
            <hr />
            <div class="form-group">
              <label for="description">Product Description</label>
              <textarea
                id="description"
                type="text"
                class="form-control"
                v-model="NewProduct.description"
                placeholder="請輸入產品描述"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea
                id="description"
                type="text"
                class="form-control"
                v-model="NewProduct.content"
                placeholder="請輸入說明內容"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="styled-checkbox"
                  id="new_is_enabled"
                  type="checkbox"
                  v-model="NewProduct.enabled"
                />
                <label class="styledLabel" for="new_is_enabled">Enabled</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger rounded-0"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-outline-dark rounded-0"
            @click="uploadProduct"
          >
            UpLoad
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Newproductmodel',
  data() {
    return {
      NewProduct: {
        imageUrl: [],
      },
      disabledBtn: '',
      isLoading: false,
    };
  },
  methods: {
    uploadProduct() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      // POST api/{uuid}/admin/ec/product
      this.$http.post(url, this.NewProduct).then((response) => {
        $('#newproductModal').modal('hide');
        this.$emit('upload');
        console.log(response);
      });
    },
  },
  created() {
    this.$emit('upload');
  },
};
</script>
