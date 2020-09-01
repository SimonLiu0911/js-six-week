<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-white navbar__border">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-nav__position">
            <li
              id="about"
              class="nav-item mr-2 ml-2"
              :class="{ 'active': current === 'about'}"
              @click="current = 'about'"
            >
              <router-link class="nav-link" to="/">ABOUT</router-link>
            </li>
            <li
              id="shop"
              class="nav-item mr-2 ml-2"
              :class="{ 'active': current === 'shop'}"
              @click="current = 'shop'"
            >
              <router-link class="nav-link" to="/shop">SHOP</router-link>
            </li>
            <li
              id="faq"
              class="nav-item mr-2 ml-2"
              :class="{ 'active': current === 'faq'}"
              @click="current = 'faq'"
            >
              <router-link class="nav-link" to="/FAQ">FAQ</router-link>
            </li>
            <li
              id="admin"
              class="nav-item mr-2 ml-2"
              :class="{ 'active': current === 'admin'}"
              @click="current = 'admin'"
            >
              <router-link class="nav-link" to="/admin/login">ADMIN</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer mt-auto text-center">
      <p>***僅個人練習使用．不做商業用途***</p>
      <p style="font-size: .875rem;">
        js作品實戰班-2020夏季-第六週作業
        <br />
        圖面來源：
        <a href="https://unsplash.com">Unsplash</a>
        <br />Cover template for
        <a href="https://getbootstrap.com/">Bootstrap</a>
        <br />
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      current: 'about',
    };
  },
};
</script>

<style lang="scss">
.navbar__border {
  border-bottom: 1px solid black;
}
.navbar-nav__position {
  margin: 0 auto;
}
#full__frame__camera .container .category .camera__category__title {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  width: 33.3333%;
  margin-left: -20px;
}
#full__frame__camera .container .category .camera__category__content {
  font-size: 13px;
  display: inline-block;
}
.footer{

}
</style>
