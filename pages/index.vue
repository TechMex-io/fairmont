<template>
  <div>
    <nav class="fixed pin-t w-full z-10 py-4 site-nav" :class="{'bg-orange-fairmont-light shadow-md': scrolled}">
      <div class="container mx-auto">
        <ul class="md:w-1/3 mx-auto sm:ml-auto sm:mr-0 flex list-reset content-around justify-around">
          <li><a class="no-underline uppercase pb-1 text-sm border-orange-lighter hover:text-orange-lighter hover:border-grey-light text-white" href="#" :class="{'border-b-2': !scrolled}">Lease</a></li>
          <li><a class="no-underline uppercase pb-1 text-sm border-orange-lighter hover:text-orange-lighter hover:border-grey-light text-white" href="#" :class="{'border-b-2': !scrolled}">Purchase</a></li>
          <li><a class="no-underline uppercase pb-1 text-sm border-orange-lighter hover:text-orange-lighter hover:border-grey-light text-white" href="#" :class="{'border-b-2': !scrolled}">Contact</a></li>
        </ul>
      </div>
    </nav>
    <header class="h-screen content-center flex-wrap relative bg-center bg-fixed bg-cover bg-no-repeat flex content-center flex-wrap bg-grey-lighter h-48 site-header" @click="handleScroll()">
      <div class="absolute pin bg-orange-fairmont opacity-50 overlay"></div>
        <div class="relative container mx-auto px-6">
          <div class="md:w-1/2 h-auto text-white text-shadow-all hero-text">
            <div class="relative h-auto">
              <h1 class="text-4xl md:text-6xl leading-tight">{{siteTitle}}</h1>
              <h2 class="uppercase font-normal font-sans opacity-75 my-4">El Paso, Texas</h2>
              <h3 class="font-normal font-sans leading-normal mb-8">Located in El Paso's Westside Rim Area Neighborhood on the corner of Rim and Stanton</h3>
              <a href="#about" class="button button-white">Learn More</a>
            </div>
          </div>
        </div>
        <div class="w-full"></div>
    </header>
    
    <main role="main">
      <section class="mb-24 py-32 about">
        <a name="about"></a>
        <div class="container sm:w-4/5 mx-auto">
          <h2 class="text-center uppercase text-4xl mb-4 mt-8 border-after border-after-center">About the Fairmont</h2>
          <div class="md:flex justify-center content-center flex-wrap">
            <p class="leading-normal font-light md:w-1/2 px-8 mb-8">
              The Fairmont Condominiums provide a one of a kind high rise living lifestyle for those individuals seeking a relatively maintenance-free lifestyle in a secure and elegant community. Our 11 story building was converted from luxury apartments to condominiums in 1979, is governed by a board of condominium owners and is managed by  FPM Management, L.L.C. Floorplans include One, Two and Three Bedrooms condominiums as well as Studios and Penthouses. 
            </p>
            <p class="leading-normal font-light md:w-1/2 px-8">
              The North / South orientation of our building provides condominiums on either side of our building unique panoramic view of the City of El Paso, the Franklin Mountain and Juarez, Mexico. We are conveniently located in central El Paso on the corner of Rim Road and Stanton Street. Our location provides easy access to I-10, Downtown, Science Road, Hospitals, and is within walking distance to the University of Texas at El Paso (UTEP), Tom Lea Park and the Kern Place restaurants.
            </p>
            
          </div>
          <!-- <div class="w-4/5 md:w-3/5 mx-auto py-4 lg:h-64">
            <p class="leading-normal font-light">
              The Fairmont Condominiums is an 11 story high rise Condominium, the only one of its kind in El Paso. Converted from luxury apartments to condos in 1979, The Fairmont offers Studios, One , Two and Three-Bedroom as well as Penthouses for sale or for lease. Located in El Paso's Westside Rim Area Neighborhood on the corner of Rim and Stanton, The Fairmont boasts beautiful panoramic views of the City of E Paso, the Franklin Mountains, as well as Juarez, Mexico. Fairmont living provides close and easy access to I-10, Downtown, Hospitals, and is within walking distance to the University of Texas at El Paso (UTEP). These condominiums are perfect for those individuals seeking a relatively maintenance-free lifestyle in a secure and elegant community.
            </p>
          </div> -->
        </div>
      </section>


      <section class="my-8 py-8 amenities">
        <div class="container mx-auto px-8">

          <div class="sm:flex py-8 mb-24">
            <div class="sm:w-1/2 mb-8">
              <img src="~/static/fairmontbuilding.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pl-8">
              <h3 class="text-3xl mb-4 border-after border-after-left">Living</h3>
              <ul class="pl-4">
                <li class="mb-2">Floor to ceiling windows and sliding doors to patio</li>
                <li class="mb-2">Covered patios for each unit, (XX sq ft - xx sq ft)</li>
                <li class="mb-2">2 elevators</li>
                <li class="mb-2">HVAC maintained by building</li>
                <li class="mb-2">Resident choice for cable and internet provider</li>
                <li class="mb-2">Public wifi available on 1st floor lobby and guest rooms</li>
                <li class="mb-2">Pet-friendly</li>
              </ul>
              <!-- <p class="leading-normal font-thin text-grey-dark">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus fugiat reprehenderit magni asperiores assumenda laudantium quos alias voluptatem qui vel ipsa ut nihil animi, nobis minima at tempore beatae corrupti!
              </p> -->
            </div>
          </div>

          <div class="sm:flex py-8 my-24">
            <div class="sm:w-1/2 sm:pr-8 mb-8">
              <h3 class="text-3xl mb-4 border-after border-after-left">Community</h3>
              <ul class="pl-4">
                <li class="mb-2">Pool &amp; outdoor lounge area</li>
                <li class="mb-2">Gym &amp; Sauna</li>
                <li class="mb-2">Party Room available for rent (XX sq ft)</li>
                <li class="mb-2">2 Guest Suites, double queen beds, available for rent</li>
                <li class="mb-2">On site laundry facility</li>
              </ul>
            </div>
            <div class="sm:w-1/2">
              <img src="~/static/fairmontbuilding.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
          </div>



          <div class="sm:flex py-8 my-24">
            <div class="sm:w-1/2 mb-8">
              <img src="~/static/fairmontbuilding.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pl-8">
              <h3 class="text-3xl mb-4 border-after border-after-left">Security</h3>
              <ul class="pl-4">
                <li class="mb-2">24 hour locked entry doors</li>
                <li class="mb-2">Voice &amp; video communication and entry access control from units</li>
                <li class="mb-2">Video monitoring</li>
                <li class="mb-2">Secure parking areas for residence</li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      <section class="relative bg-top comfort">
        <div class="absolute pin bg-black opacity-25 md:invisible overlay"></div>
        <div class="container py-8 mx-auto relative">
          <div class="w-4/5 md:w-3/5 mx-auto py-4 lg:h-64 text-white">
            <h2 class="text-center uppercase text-4xl mb-4 mt-8 border-after border-after-center">Comfort &amp; Elegance</h2>
            <h3 class="font-sans font-thin leading-normal text-lg px-8 text-shadow">Our condominiums are perfect for those individuals seeking a relatively maintenance-free lifestyle in a secure and elegant community.</h3>
          </div>
        </div>
      </section>
    </main>


    <footer class="bg-grey-lightest py-8">
      <div class="container mx-auto py-8 px-8 opacity-75 font-thin text-center md:text-left">
        <div class="md:flex text-orange-fairmont">
          <div class="md:w-2/5 mb-8">
            <img src="~/static/fairmont-logo.png" alt="Fairmont logo" class="md:w-1/2 mb-4">
            <p class="leading-normal">
              PM Management, LLC
              <br>
              1800 N. Stanton St.
              <br>
              El Paso, TX
              <br>
              915.533.6908
              <br>
              <a href="mailto:office@thefairmontcondominiums.com" class="text-orange-fairmont">office@thefairmontcondominiums.com</a>
            </p>
          </div>
          <div class="md:w-1/5 mb-8">
            <nav class="footer-nav">
              <p class="uppercase text-sm font-bold mb-4">Site Navigation</p>
              <ul class="list-reset">
                <li class="pb-4"><a class="text-orange-fairmont" href="#">Lease</a></li>
                <li class="pb-4"><a class="text-orange-fairmont" href="#">Purchase</a></li>
                <li class="pb-4"><a class="text-orange-fairmont" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="md:w-2/5">
            <p class="uppercase text-sm font-bold mb-4">Map</p>            
            <a href="https://www.google.com/maps/place/Fairmont+Condominiums/@31.7715045,-106.4989188,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x86e75856d58c9aaf:0xb1778702da544be9!2sFairmont+Condominiums!8m2!3d31.7715!4d-106.4967248!3m4!1s0x86e75856d58c9aaf:0xb1778702da544be9!8m2!3d31.7715!4d-106.4967248?hl=en-US">
              <img src="~/static/footer-map.png" alt="Map of Fairmont in El Paso" class="shadow-md">
            </a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  data() {
    return {
      siteTitle: 'The Fairmont Condominiums',
      scrolled: false
    }
  },
  methods: {
    handleScroll() {
      var navHeight = document.querySelector('.site-nav').offsetHeight;
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

<style scoped>
a {
  transition: color .3s, border-color .45s;
}
header {
  background-image: url('~/static/fairmontbuilding2.jpg');
  background-position-y: bottom;
}
.text-shadow {
  text-shadow: 2px 2px 8px rgba(0,0,0,.93);
}
.text-shadow-all * {
  text-shadow: 2px 2px 8px rgba(0,0,0,.93);
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
  margin: 1rem auto 2rem;
}

.border-after-left:after {
  margin: .25rem 0;
}
</style>

