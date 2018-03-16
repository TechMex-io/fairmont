<template>
  <div>
    <primary-nav :scrolled="scrolled"/>
    <main role="main">
      <section class="py-8 mt-8 purchase">
        <div class="container sm:w-4/5 mx-auto">
          <h2 class="text-center uppercase text-4xl mb-4 mt-8 border-after border-after-center">Units For Lease</h2>
          <div class="md:flex justify-center content-center flex-wrap">
            <div class="leading-normal font-light md:w-1/2 md:pl-24 px-8 mb-4">
              <h3>Unit #904</h3>
              <h3>1 Bedroom/1 Bath</h3>
              <h3>770.36 square feet</h3>
              <h3>Monthly Rent  - $950.00</h3>
              <h3>By appointment only.</h3>
            </div>
            <div class="leading-normal font-light md:w-1/2 px-8">
              <p class="mb-4">
                The Fairmont Condominium Association
                <br>
                1800 N. Stanton
                <br>
                El Paso, TX  79902
              </p>

              <p>
                Leases managed by FPM Management, L.L.C.
                <br>
                1800 N. Stanton
                <br>
                El Paso, TX  79902
                <br>
                <a href="" class="button button-black mt-4 inline-block">Request an Appointment</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <section class="my-4 amenities">
        <div class="container mx-auto px-8">










          <div class="sm:flex flex-wrap">
            <div class="sm:w-1/2 sm:pr-4 mb-8">
              <img src="~/static/Unit_904__Living_Room_1.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pl-4 mb-8">
              <img src="~/static/Unit_904__Dining_Room_2.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pr-4 mb-8">
              <img src="~/static/Unit_904__Kitchen_3.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pl-4 mb-8">
              <img src="~/static/Unit_904__Bedroom_4.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pl-4 mb-8">
              <img src="~/static/Unit_904_Balcony_View_5.jpg" alt="" class="shadow-lg rounded" srcset="">
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
header {
  background-image: url('~/static/fairmontbuilding2.jpg');
  background-position-y: bottom;
}
.hero-text {
  text-shadow: 1px 2px 8px rgba(0,0,0,.3);
}
main {
  background: repeating-linear-gradient(
    to right,
    #fff,
    #fff 60px,
    #f7f7f7 60px,
    #f7f7f7 61px
);
}
.comfort {
  background-image: url('~/static/epskyline.jpg');
}

.border-after:after {
  background-color: rgb(189, 106, 5);
  content: '';
  display: block;
  height: 3px;
  width: 10%;
}

.border-after-center:after {
  margin: 2rem auto;
}

.border-after-left:after {
  margin: .25rem 0;
}
</style>




