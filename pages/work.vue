<template>
  <section class="p-5 mt-5">
    <article class="pb-3">
      <PageHeader title="Work Experience" />
    </article>

    <ContentCard
      title="Associate Software Development Engineer"
      dateRange="July 2019 - Present"
      imgURL="ps.png"
      secondImgURL="altria.png"
      :bulletPoints="
        [
          'Transformed creative visual designs into front-end web consumable form (HTML, CSS, JavaScript) and developed modular components for platform enhancements, bugfixes and ADA testing using WCAG design principles.',
          'Collaborated with Client and Creatives to finalize project scope and feasibility in an Agile Development Workflow using Scrum principles that maximized business value by saving time while improving the quality of deliverables.',
          'Developed a Server-Side Rendered Web Component Visualization Tool to reduce steps of pre-production testing for style guide and component updates using Vuex state management, Axios Async HTTP, TailwindCSS.',
          'Authored & published site experience fragments and emails using Adobe Experience Manager (AEM) and Adobe Target for audience segmentations to reach an audience of more than three million users.',
          'Increased Test Case to cover more than 75% code coverage for components using Karma Mocha and Chai.',
          'Improved front-end developer onboarding process by compiling a training guide using Markdown files.',
        ]
      "
    />

    <ContentCard 
      title="Technical Intern" 
      dateRange="July 2018 - September 2018" 
      imgURL="ps.png"
      secondImgURL="jp-chase.png"
      :bulletPoints="
        [
        'Developed an office navigation tool utilizing React/Redux to improve communication & collaboration alongside a team of seven interns.',
        'Organized tech timeline and delegated tasks.',
        'Contributed to bugfixes for JPMorgan & Chase Account.',
        'Accepted a full-time offer upon completion of Internship.'
        ] 
      " 
    />

  </section>
</template>
<script>

import ContentCard from '~/components/ContentCard';
import PageHeader from '~/components/PageHeader';
export default {
  data () { 
    return {
    }
  },
  components: {
    PageHeader,
    ContentCard
  }
};
</script>