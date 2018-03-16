<template>
  <nav class="fixed pin-t w-full z-10 py-4 primary-nav" :class="{'bg-orange-fairmont-light shadow-md': scrolled}">
    <div class="container mx-auto">
      <ul class="md:w-1/3 mx-auto sm:ml-auto sm:mr-0 flex list-reset content-around justify-around">
        <li><nuxt-link class="no-underline uppercase pb-1 text-sm border-orange-lighter hover:text-orange-lighter hover:border-grey-light text-white" to="/leasing" :class="{'border-b-2': !scrolled}">Lease</nuxt-link></li>
        <li><nuxt-link class="no-underline uppercase pb-1 text-sm border-orange-lighter hover:text-orange-lighter hover:border-grey-light text-white" to="/purchasing" :class="{'border-b-2': !scrolled}">Purchase</nuxt-link></li>
        <li><nuxt-link class="no-underline uppercase pb-1 text-sm border-orange-lighter hover:text-orange-lighter hover:border-grey-light text-white" to="/contact" :class="{'border-b-2': !scrolled}">Contact</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['scrolled']
  }
</script>