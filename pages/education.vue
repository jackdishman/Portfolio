<template>

  <section class="p-5 mt-5">
    <h3 class="text-3xl handwriting tracking-wide text-center">I graduated from ...</h3>

    <ContentCard 
      title="B.S. Computer Science & Mathematics"
      dateRange="September 2015 - June 2019"
      imgURL="scu.png"
      :bulletPoints="[
        'Santa Clara University Class of 2019',
        'Radio Talk Show Host on 103.3 FM',
        'BroncoHack 2018'
      ]"
    />

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
