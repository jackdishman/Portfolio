<template>
  <section class="pt-5">

      <article class="flex flex-row justify-center flex-no-wrap">
        <img v-if="this.$props.imgSize === 'normal'" :src="require(`../assets/images/${imgURL}`)" :alt="'Image of ' + this.$props.imgURL" class="h-12 md:h-16 px-5" />
        <img v-else-if="this.$props.imgSize === 'large'" :src="require(`../assets/images/${imgURL}`)" :alt="'Image of ' + this.$props.imgURL" class="h-24 md:h-32" />
        <h4 v-if="this.$props.secondImgURL" class="handwriting text-4xl align-middle px-2">x</h4>
        <img v-if="this.$props.secondImgURL && this.$props.imgSize === 'normal'" :src="require(`../assets/images/${secondImgURL}`)" :alt="'Image of ' + this.$props.secondImgURL" class="h-12 md:h-16 px-5 inline align-top" />
        <img v-else-if="this.$props.secondImgURL && this.$props.imgSize === 'large'" :src="require(`../assets/images/${secondImgURL}`)" :alt="'Image of ' + this.$props.secondImgURL" class="h-24 md:h-32 inline align-top" />
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
    secondImgURL: String,
    imgSize: {
      type: String,
      default: 'normal'
    }
  }
}
</script>