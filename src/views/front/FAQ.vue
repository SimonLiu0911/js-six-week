<template>
  <div class="faq">
    <div class="needHelp mb-3">
      <p class="h1">Need Help?</p>
      <p class="mb-0 pt-4">
        <a href="mailto:milkjhang@hotmail.com" class="email_link">milkjhang@hotmail.com</a>
      </p>
      <p>We're here to help. Contact us anytime.</p>
    </div>
    <ul class="nav justify-content-center mb-3">
      <li class="nav-item">
        <a
        class="nav-link text-dark"
        href="#"
        @click.prevent="changeView('general')"
        >
          GENERAL
        </a>
      </li>
      <li class="nav-item">
        <a
        class="nav-link text-dark"
        href="#"
        @click.prevent="changeView('discountcode')"
        >
          DISCOUNT CODE
        </a>
      </li>
    </ul>
    <component :is="view"></component>
  </div>
</template>

<script>
import General from '../../components/front/FAQ_general.vue';
import Discountcode from '../../components/front/FAQ_discountcode.vue';

export default {
  data() {
    return {
      view: 'general',
    };
  },
  components: { General, Discountcode },
  methods: {
    changeView(viewName) {
      this.view = viewName;
    },
  },
};
</script>

<style lang="scss">
.needHelp {
  background-color: rgba(0, 0, 0, 0.04);
  width: 100%;
  padding: 40px 0;
}
.email_link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.4);
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
}
</style>
