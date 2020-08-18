<template>
  <div>
    <section class="mt-10">
      
      <article>
        <PageHeader title="FastSpring Pop-up Storefront !!!" />
      </article>

      <!-- This is the container for the Products Page -->
      <article class="flex flex-row justify-around pt-10">
        <!-- Product 1: Basic Website -->
        <div class="flex flex-col justify-center w-32">
          <h2 class="text-xl text-blue-500 text-center" data-fsc-item-path="basic-website" data-fsc-item-display></h2>
          <img src="../assets/images/basic-website.png" alt="Logo of Basic Website" class="w-32 h-32">
          <span data-fsc-item-path="basic-website" data-fsc-item-price class="text-center text-xl"></span>
          <button data-fsc-item-path="basic-website" data-fsc-item-path-value="basic-website" data-fsc-action="Add, Checkout" class="border-2 rounded-full border-blue-900 bg-blue-500 px-2 block">
            <span data-fsc-item-path="basic-website" data-fsc-item-description-action class="text-white spods">Buy Now</span>
          </button>
        </div>

        <!-- Product 2: Premium Website -->
        <div class="flex flex-col justify-center w-32">
          <h2 class="text-xl text-blue-500 text-center" data-fsc-item-path="premium-website" data-fsc-item-display></h2>
          <img src="../assets/images/premium-website.png" alt="Logo of Premium Website" class="w-32 h-32">
          <span data-fsc-item-path="premium-website" data-fsc-item-price class="text-center text-xl"></span>
          <button data-fsc-item-path="premium-website" data-fsc-item-path-value="premium-website" data-fsc-action="Add, Checkout" class="border-2 rounded-full border-blue-900 bg-blue-500 px-2 block">
            <span data-fsc-item-path="premium-website" data-fsc-item-description-action class="text-white spods">Buy Now</span>
          </button>
        </div>

      </article>



    </section>
  </div>
</template>


<script>
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    PageHeader
  },

};
</script>
