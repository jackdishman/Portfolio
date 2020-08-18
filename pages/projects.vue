<template>

  <section class="p-5 mt-5">
    <PageHeader title="Projects" />
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

    <ContentCard
      title="Office Navigation"
      dateRange="Summer 2018"
      imgURL="office-nav.jpg"
      secondImgURL="office-nav2.jpg"
      imgSize="large"
      :bulletPoints="[
        'Developed an office navigation tool utilizing React/Redux to improve communication & collaboration alongside a team of seven interns.',
        'Organized tech timeline and delegated development tasks.'

      ]"
    />

    <ContentCard 
      title="Dishman Law"
      dateRange="2015-Present"
      imgURL="Dishman-Law.jpg"
      secondImgURL="Dishman-Law-2.jpg"
      :bulletPoints="[
        'Developed, host and maintain the official website for Dishman Law',
        'Perform Search Engine Optimizations, digital marketing campaigns using social media, and Google Business analytics'
      ]"
      imgSize="large"
    />
    <article class="p-5 text-right sm:text-center">
      <a class="p-4 border-2 border-blue-500 bg-blue-300 rounded-full hover:bg-blue-500" href="http://www.employment-labor-lawyer.com/">Visit Dishman Law</a>
    </article>

  </section>
</template>

<script>
import ContentCard from '~/components/ContentCard';
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    ContentCard,
    PageHeader
  }
};
</script>
