<template>
  <div class="cart">
    <div class="row justify-content-center my-2">
      <div class="col-md-8">
        <div class="text-right mb-3">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm rounded-0"
            @click="removeAllCartItem()"
          >
          Delete All
          </button>
        </div>
        <table class="table text-center">
          <thead>
            <th>Commodity</th>
            <th width="150px">Qty</th>
            <th>Price for Each</th>
            <th>Unit</th>
            <th>Delete</th>
          </thead>
          <tbody v-if="cart.length">
            <tr v-for="item in cart" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">
                <div class="input-group bg-light">
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-dark"
                      type="button"
                      @click="quantityUpdata(item.product.id, item.quantity - 1)"
                      :disabled="item.quantity === 1"
                    >-</button>
                  </div>
                  <input
                    id="inlineFormInputGroupUsername"
                    type="text"
                    class="form-control text-center"
                    :value="item.quantity"
                    @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
                  />
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-dark"
                      type="button"
                      @click="quantityUpdata(item.product.id, item.quantity + 1)"
                    >+</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ item.product.price | thousandth }}</td>
              <td class="align-middle">{{ item.product.unit }}</td>
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm rounded-0"
                  @click="removeCartItem(item.product.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="totalcart">
          <div class="totalcart__table">
            <table class="border-bottom">
              <tbody>
                <tr>
                  <th width="150px">Subtotal</th>
                  <td>
                    <span>{{ cartTotal | thousandth }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              class="btn btn-dark btn-block rounded-0 mt-2"
              @click="goingCheckout"
            >CHECKOUT</button>
          </div>
        </div>
        <span class="clearBoth"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  filters: {
    thousandth(num) {
      const parts = num.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    },
  },
  props: ['cart', 'cartTotal'],
  methods: {
    removeCartItem(id) {
      // DELETE api/{uuid}/ec/shopping/{pid}
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(url).then((response) => {
        alert(response.data.message);
        this.$emit('getcart');
      });
    },
    removeAllCartItem() {
      // DELETE api/{uuid}/ec/shopping/all/product
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url).then((response) => {
        console.log(response.data.message);
        this.$emit('getcart');
      });
    },
    quantityUpdata(id, num) {
      const data = {
        product: id,
        quantity: num,
      };
      // PATCH api/{uuid}/ec/shopping
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.patch(url, data).then(() => {
        this.$emit('getcart');
      });
    },
    goingCheckout() {
      // GET api/{uuid}/ec/shopping
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((response) => {
        if (response.data.data.length === 0) {
          alert('Please choose at least one commodity!');
        } else {
          this.$router.push('checkout');
        }
      });
    },
  },
  created() {
    this.$emit('getcart');
  },
};
</script>

<style lang="scss">
#totalcart {
  float: right;
}
#totalcart .totalcart__table {
  font-size: 30px;
}
.clearBoth {
  clear: both;
}
#totalcart .totalcart__table .border-bottom {
  border-color: black !important;
}
</style>
