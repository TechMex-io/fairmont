<template>
  <div>
    <primary-nav :scrolled="scrolled" />
    <site-header :title="siteTitle" />
    <main role="main">

      <about />
      <amenities />
      <comfort />
    </main>
    <site-footer />
  </div>
</template>

<script>

import PrimaryNav from '~/components/Nav';
import SiteHeader from '~/components/Header';
import About from '~/components/About';
import Amenities from '~/components/Amenities';
import Comfort from '~/components/Comfort';
import SiteFooter from '~/components/Footer';

export default {
  data() {
    return {
      siteTitle: 'The Fairmont Condominiums',
      scrolled: false
    }
  },
  components: {
    PrimaryNav,
    SiteHeader,
    About,
    Amenities,
    Comfort,
    SiteFooter
  },
  methods: {
    handleScroll() {
      var navHeight = document.querySelector('.primary-nav').offsetHeight;
      var headerHeight = document.querySelector('.site-header').offsetHeight;
      var scrollPosition = window.scrollY;

      if (scrollPosition >= (headerHeight)/2) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  },
  created() {
    
  }
}
</script>

