<template>
  <div class="mb-20 sm:mb-0 emoji-cursor">
    <div class="flex flex-col items-center">
      <header
        class="md:ml-32 flex flex-col items-center fixed top-0 text-xl tracking-widest bg-white opacity-75 border-b border-l border-r border-black rounded-br rounded-bl px-2 z-50"
      >
        <nuxt-link to="/" class="handwriting">www.jackdishman.com</nuxt-link>
      </header>
    </div>

    <section class="flex flex-row justify-between">
      <article class="md:mt-10 md:mt-5 md:ml-5 hidden sm:block handwriting">
        <nuxt-link to="/work" class="handwriting block py-2">Work</nuxt-link>
        <nuxt-link to="/projects" class="handwriting block py-2">Projects</nuxt-link>
        <nuxt-link to="/education" class="handwriting block py-2"
          >Education</nuxt-link
        >
        <a
          href="https://twitter.com/jackdishman"
          target="_blank"
          class="handwriting block py-2"
        >
          Twitter
        </a>
        <a
          href="https://github.com/jackdishman"
          target="_blank"
          class="handwriting block py-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jackdishman"
          target="_blank"
          class="handwriting block py-2"
        >
          LinkedIn
        </a>
      </article>

      <div v-if="isMobileMenuOpen" @click="toggleMobileNav()">
        <nuxt class="w-full md:w-2/3 opacity-50" />
      </div>
      <nuxt v-else class="w-full md:w-2/3" />
      <nav class="fixed bottom-0 sm:hidden w-full">
        <!-- Mobile Nav is OPEN -->
        <ul
          v-if="isMobileMenuOpen"
          class="border-t-2 border-blue-600 bg-blue-300 text-center h-60  text-3xl"
          @click="toggleMobileNav()"
        >
          <nuxt-link to="/work"
            ><li class="h-16 align-middle py-2 handwriting">Work</li></nuxt-link
          >
          <nuxt-link to="/projects"
            ><li
              class="h-16 align-middle py-2 handwriting border-t border-blue-500"
            >
              Projects
            </li></nuxt-link
          >
          <nuxt-link to="/education"
            ><li
              class="h-16 align-middle py-2 handwriting border-t border-blue-500"
            >
              Education
            </li></nuxt-link
          >
          <li
            class="h-16 align-middle py-2 handwriting border-t border-blue-500 pt-5"
          >
            <div class="flex flex-row justify-around items-center">
              <a href="https://twitter.com/jackdishman" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
              </a>
              <a href="https://github.com/jackdishman" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/jackdishman" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </li>
        </ul>

        <!-- Mobile Nav is CLOSED -->
        <div v-else class="mb-5 ml-5">
          <button
            class="p-2 border border-black rounded-full  bg-blue-300"
            @click="toggleMobileNav()"
          >
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
.emoji-cursor {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>"),
    auto;
}
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
