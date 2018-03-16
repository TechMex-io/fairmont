<template>
  <header class="h-screen content-center flex-wrap relative bg-center bg-fixed bg-cover bg-no-repeat flex content-center flex-wrap bg-grey-lighter h-48 site-header" @click="handleScroll()">
    <div class="absolute pin bg-orange-fairmont opacity-50 overlay"></div>
      <div class="relative container mx-auto px-6">
        <div class="md:w-1/2 h-auto text-white text-shadow-all hero-text">
          <div class="relative h-auto">
            <h1 class="text-4xl md:text-6xl leading-tight">{{title}}</h1>
            <h2 class="uppercase font-normal font-sans opacity-75 my-4">El Paso, Texas</h2>
            <h3 class="font-normal font-sans leading-normal mb-8">Located in El Paso's Westside Rim Area Neighborhood on the corner of Rim and Stanton</h3>
            <a href="#about" class="button button-white">Learn More</a>
          </div>
        </div>
      </div>
      <div class="w-full"></div>
  </header>
</template>

<script>
  export default {
    props: ['title']
  }
</script>