<template>

  <section class="p-5 mt-5">
    <PageHeader title="I graduated from ..." />

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
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    ContentCard,
    PageHeader
  }
};
</script>
