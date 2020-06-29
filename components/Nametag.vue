<template>
  <section class="bg-red-600 pb-3 w-48 border rounded-lg text-center animate__animated animate__flipInX animate__delay-2s">
    <article class="text-white">
      <h2 class="text-xl tracking-widest">HELLO</h2>
      <h4 class="text-xs pb-1">My name is</h4>
    </article>
    <article class="bg-white">
      <h1 class="text-2xl handwriting py-3">{{ this.$props.name }}</h1>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss">

</style>