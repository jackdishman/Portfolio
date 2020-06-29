<template>
  <div>
    <section class="flex flex-col items-center relative">
      <article class="absolute bottom-0 mb-10">
        <Nametag name="Jack Dishman" />
      </article>
      <article>
        <img src="../static/images/me-1.png" class="max-h-screen" alt="Handsome picture of myself" />
      </article>

      
    </section>
  </div>
</template>

<script>
import Nametag from "~/components/Nametag";
export default {
  components: {
    Nametag,
  }
};
</script>

<style lang="scss">

</style>