<template>
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
</template>

<script>
  export default {}
</script>