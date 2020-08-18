<template>
  <div>
    <h1 class="text-3xl handwriting tracking-wide text-blue-500 text-center">{{ this.$props.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>