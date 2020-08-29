<template>
  <div class="admin">
    <header id="admin_header">
      <nav class="navbar navbar-light bg-white navbar__border">
        <div>Product Ｍanagement</div>
      </nav>
    </header>
    <router-view />
    <footer class="footer mt-auto text-center">
      <p>***僅個人練習使用．不做商業用途***</p>
      <p style="font-size: .875rem;">
        js作品實戰班-2020夏季-第六週作業
        <br />Cover template for
        <a href="https://getbootstrap.com/">Bootstrap</a>
        <br />
      </p>
    </footer>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       token: '',
//     };
//   },
//   methods: {
//     getToken() {
//       const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
//       this.$http
//         .post(api, this.user)
//         .then((response) => {
//           const { token } = response.data;
//           console.log({ token });
//         });
//     },
//   },
//   created() {
//     this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`; // 將token做為預設值發送
//     this.getToken();
//   },
// };
</script>

<style lang="scss">
#admin_header .navbar__border {
  border-bottom: 1px solid black;
}
#admin_header .navbar__border div {
  font-size: 1.25rem;
  padding: 5px 0;
  margin: 0 auto;
}
</style>
