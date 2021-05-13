<template>
  <div>
    <section class="flex flex-col items-center relative bg-black h-screen">
      <article class="fixed bottom-0 mb-64 lg:mb-20">
        <Nametag name="Jack Dishman" />
      </article>
      <article>
        <img src="../static/images/me.png" class="max-h-screen rounded-full" alt="Handsome picture of myself" />
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