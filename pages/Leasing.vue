<template>
  <div>
    <main role="main">
      <section class="py-6 purchase">
        <div class="container sm:w-4/5 mx-auto">
          <h2 class="text-center uppercase text-4xl mb-4 mt-8 border-after border-after-center">Units For Lease</h2>
          <div class="md:flex justify-center content-center flex-wrap">
            <div class="leading-normal font-light md:w-1/2 md:pl-24 px-8 mb-4">
              <h3>No Availability</h3>
            </div>
            <p class="leading-normal font-light md:w-1/2 px-8">
              Thank you for your interest in the Fairmont Condominiums. We currently do have any units for lease. Please continue to check our site for listings as this is our most current information and will always reflect current availability. 
            </p>
          </div>
        </div>
      </section>

      <section class="my-4 amenities">
        <div class="container mx-auto px-8">

          <div class="sm:flex flex-wrap">
            <div class="sm:w-1/2 sm:pr-4 mb-8">
              <img src="~/static/fairmontbuilding.jpg" alt="" class="shadow-lg rounded" srcset="">
            </div>
            <div class="sm:w-1/2 sm:pl-4 mb-8">
              <img src="~/static/fairmontbuilding2.jpg" alt="" class="shadow-lg rounded" srcset="">
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


    <footer class="bg-orange-fairmont-dark py-8">
      <div class="container mx-auto py-8 opacity-75 font-thin">
        <h2>The Fairmont</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, expedita laborum. Deleniti facere impedit eveniet ex quod iste, illum laudantium blanditiis dolor explicabo doloribus magni architecto exercitationem quas maxime saepe.</p>
        <p>Expedita, sapiente iure? Omnis ea repellat quae at earum excepturi eius nam dolorem eum ipsum, possimus quam saepe, laboriosam nulla. Hic, iusto? Cumque facilis totam temporibus architecto aspernatur tempore inventore.</p>
        <p>Dolore, minima? Quia ad soluta quod a, consequatur, quisquam voluptate doloribus neque molestias harum asperiores deleniti necessitatibus beatae perferendis dicta. Dolor eligendi, illo ab sint consectetur fugiat ea quisquam asperiores.</p>
        <p>Nobis odio asperiores libero minima nisi quae necessitatibus quaerat nesciunt doloremque, voluptatibus tempore sed assumenda molestias fugit, consequatur aut eos ipsum! Exercitationem adipisci facere ducimus dolor fugiat omnis dolorum deleniti.</p>
        <p>Placeat minus sapiente, amet unde dolores, ad aliquid culpa aspernatur ducimus atque quae sit porro delectus illum id ullam temporibus repudiandae autem necessitatibus mollitia laborum enim. Doloremque magni necessitatibus cum!</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {}
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




