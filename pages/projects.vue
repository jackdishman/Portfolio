<template>

  <section class="p-5 mt-5">
    <h3 class="text-3xl handwriting tracking-wide text-center">Projects</h3>

    <ContentCard 
      title="SPODS"
      dateRange="In Development"
      imgURL="spods.png"
      :bulletPoints="[
        'Social Platform Organizational Domain System',
        'Spods is a link in bio tool to help users consolidate all their online accounts for one contact page.',
        'Designed, developed and deployed a Single-Page Application (SPA) to display and graph metrics from social media platforms including Facebook, LinkedIn, Spotify, Snapchat, Twitter and Instagram using OAuth protocols for authorization.',
        'Implemented technologies: Vue.js, TailwindCSS, D3.js, Express.js, Axios.js, MongoDB, Heroku, and Git.'
      ]"
    />

    <article class="p-5 text-right sm:text-center">
        <a class="p-4 border-2 border-blue-500 bg-blue-300 rounded-full hover:bg-blue-500" href="https://www.spods.app/jackdishman">View my SPODS profile</a>
      </article>

  </section>
</template>

<script>
import ContentCard from '~/components/ContentCard';

export default {
  components: {
    ContentCard
  }
};
</script>
