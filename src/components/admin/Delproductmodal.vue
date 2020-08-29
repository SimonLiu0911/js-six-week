<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 id="exampleModalLabel" class="modal-title">
          <span>Delete</span>
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="cancelloadingcircle()"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-left">
        If delete
        <strong class="text-danger">{{ tempProduct.title }}</strong>, it can't recovery.
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-dark rounded-0"
          data-dismiss="modal"
          @click="cancelloadingcircle()"
        >Cancel
        </button>
        <button
        type="button"
        class="btn btn-outline-danger rounded-0"
        @click="delProduct"
        >
        Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['tempProduct'],
  methods: {
    delProduct() {
      // DELETE api/{uuid}/admin/ec/product/{id}
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        this.$emit('update');
        console.log(response.status);
      });
      $('#delProductModal').modal('hide');
    },
    cancelloadingcircle() {
      this.$emit('unactiveloading');
    },
  },
  created() {
    // this.$nextTick(() => {
    //   $('#productModal').on('hidden.bs.modal', (event) => {
    //     console.log(event);
    //     this.lockingBtn = '';
    //   });
    // });
  },
};
</script>
