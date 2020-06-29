<template>
  <div class="mb-20 sm:mb-0">
    <div class="flex flex-col items-center">
      <header
        class="md:ml-12 flex flex-col items-center fixed top-0 text-xl tracking-widest bg-white opacity-75 border-b border-l border-r border-black rounded-br rounded-bl px-2 z-50"
      >
        <nuxt-link to="/" class="handwriting">www.jackdishman.com</nuxt-link>
      </header>
    </div>
    <section class="flex flex-row justify-between">

      <article class="md:mt-10 md:mt-5 md:ml-5">
        <div class="hidden sm:block">
          <nuxt-link to="/work" class="handwriting">Work</nuxt-link>
        </div>
        <div class="hidden sm:block">
          <nuxt-link to="/projects" class="handwriting">Projects</nuxt-link>
        </div>
        <div class="hidden sm:block">
          <nuxt-link to="/education" class="handwriting">Education</nuxt-link>
        </div>
      </article>



      <div v-if="isMobileMenuOpen"  @click="toggleMobileNav()">
        <nuxt class="w-full md:w-2/3 opacity-50" />
      </div>
      <nuxt v-else class="w-full md:w-2/3" />
      <nav class="fixed bottom-0 sm:hidden w-full" @click="toggleMobileNav()">
          <!-- Mobile Nav is OPEN -->
            <ul v-if="isMobileMenuOpen" class="border-t-2 border-blue-600 bg-blue-300 text-center h-48  text-3xl">
              <nuxt-link to="/work"><li class="h-16 align-middle py-2 handwriting">Work</li></nuxt-link>
              <nuxt-link to="/projects"><li class="h-16 align-middle py-2 handwriting border-t border-blue-500">Projects</li></nuxt-link>
              <nuxt-link to="/education"><li class="h-16 align-middle py-2 handwriting border-t border-blue-500">Education</li></nuxt-link>
            </ul>
      
          <!-- Mobile Nav is CLOSED -->
          <div v-else class="mb-5">
            <button class="ml-5 p-2 border border-black rounded-full  bg-blue-300">
              <Compass class="w-12 h-12" />
            </button>
          </div>
        
      </nav>
      <div class="hidden sm:block"></div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Compass from "~/components/Compass";

export default {
  components: {
    Compass
  },
  computed: mapState(["isMobileMenuOpen", "CHANGETAB"]),
  methods: {
    toggleMobileNav() {
      this.$store.commit("TOGGLEMOBILEMENU");
    }
  }
};
</script>

<style>
.handwriting {
  font-family: "Permanent Marker", cursive;
}

* {
  font-family: "Roboto";
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
