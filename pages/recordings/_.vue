<template>
  <div class="container">
    <div class="mt-8">
      <h1 class="mb-4 pl-8 xl:pl-12 title font-bold uppercase">
        {{ album_infos.title }}
      </h1>
      <h5>{{ album_infos.description }}</h5>
    </div>
    <div class="samples-container bg-black">
      <div class="w-2/5 h-1/2 border border-brand-black"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "recordings",
  middleware: "authenticated",

  async asyncData({ $http, params }) {
    const _id = params.pathMatch;
    const album_infos = await $http.$get("/album/" + _id);
    // 🥅 Catch 404

    return { album_infos };
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen min-w-full;
  @apply flex flex-col;

  padding-left: calc(2rem + 7vw);
  padding-right: calc(2rem + 7vw + 2rem);
  padding-top: 5vw;
  padding-bottom: 5vw;

  @screen xl {
    padding-left: calc(3rem + 7vw);
    padding-right: calc(3rem + 7vw + 3rem);
  }
}

.title {
  font-family: "Poppins ExtraLight";
  @apply text-3xl xl:text-4xl;
}

.samples-container {
  height: 25vw;
  @apply mt-12;
}
</style>