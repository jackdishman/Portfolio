<template>
  <section class="pt-5">
      <article class="flex flex-row justify-center">
        <img :src="require(`../assets/images/${imgURL}`)" :alt="'Image of ' + this.$props.imgURL" class="h-12 md:h-16 px-5" />
        <span v-if="this.$props.secondImgURL">
          <h4 class="handwriting text-4xl inline align-middle">x</h4>
          <img :src="require(`../assets/images/${secondImgURL}`)" :alt="'Image of ' + this.$props.secondImgURL" class="h-12 md:h-16 px-5 inline align-top" />
        </span>
      </article>
      <article class="">
        <h3 class="text-lg font-bold">{{ this.$props.title }}<span class="text-xs block md:inline md:float-right p-1">{{ this.$props.dateRange }}</span></h3>
        <ul class="border-l border-red-500 border-dashed p-1">
          <li v-for="(desc, index) in this.$props.bulletPoints" :key="index" class="py-1">
            <span class="text-red-500">-</span>
            {{ desc }}
          </li>
        </ul>
      </article>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    dateRange: String,
    bulletPoints: Array,
    imgURL: String,
    secondImgURL: String
  }
}
</script>