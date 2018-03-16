<template>
  <div>
    <primary-nav :scrolled="scrolled" />
    <main role="main">
      <section class="py-8 mt-8 purchase">
        <div class="container sm:w-4/5 mx-auto">
          <h2 class="text-center uppercase text-4xl mb-4 mt-8 border-after border-after-center">Units For Sale</h2>
        </div>
      </section>
      <section class="purchase">
        <div class="container sm:w-4/5 mx-auto">
          <div class="md:flex justify-center content-center flex-wrap">
              <p class="leading-normal font-light md:w-1/2 px-8 mb-4">
                The Fairmont Condominium Association
                <br>
                1800 N. Stanton
                <br>
                El Paso, TX  79902
                <br>
                <a href="" class="button button-black mt-4 inline-block">Request an Appointment</a>
              </p>
            <div class="leading-normal font-light md:w-1/2 md:pl-24 px-8 mb-4">
              <h3>Unit #606 - For Sale</h3>
              <h3>1 Bedroom/1 Bath</h3>
              <h3>878.21 square feet</h3>
              <h3>Sales Price - $85,000</h3>
              <h3>By appointment only.</h3>
            </div>
          </div>
        </div>
      </section>

      
      
      
      
      
      
      
      

      <section class="my-4 amenities">
        <div class="container mx-auto px-8">

          <div class="sm:flex flex-wrap md:pb-8">
          
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Living Room and Entrance  1.jpg" alt="" class="shadow-lg rounded" srcset="">
            
            </div>
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Living & Dining Room 2.jpg" alt="" class="shadow-lg rounded" srcset="">
            
            </div>
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Living Room & Dining Room 3.jpg" alt="" class="shadow-lg rounded" srcset="">
            
            </div>
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Kitchen 4.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Hallway 5.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <div class="relative overflow-hidden shadow-lg rounded w-full h-full">
                <img src="~/static/Unit 606 - Bathroom 6.jpg" alt="" class="absolute pin-t h-full img-center" srcset="">
              </div>
            </div>
            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Bedroom 7.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>

            <div class="sm:w-1/2 sm:px-4 mb-8">
              <img src="~/static/Unit 606 - Balcony View 8.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
        
          </div>
        </div>
      </section>
      
      

      <section class="relative comfort">
        <!-- <div class="absolute pin bg-black opacity-75 overlay"></div> -->
        <div class="container py-8 mx-auto relative">
          <div class="w-4/5 md:w-3/5 mx-auto py-4 lg:h-64 text-white">
            <h2 class="text-center uppercase text-4xl mb-4 mt-8 border-after border-after-center">Comfort &amp; Elegance</h2>
            <h3 class="font-sans font-thin leading-normal text-lg px-8">Our condominiums are perfect for those individuals seeking a relatively maintenance-free lifestyle in a secure and elegant community.</h3>
          </div>
        </div>
      </section>
    </main>


    <site-footer />


  </div>
</template>

<script>
import PrimaryNav from '~/components/Nav';
import SiteFooter from '~/components/Footer';

export default {
  data() {
    return {
      scrolled: true
    }
  },
  components: {
    PrimaryNav,
    SiteFooter
  }
}
</script>

<style scoped>

.img-center {
  left: 50%;
  transform: translateX(-50%);
}
</style>


