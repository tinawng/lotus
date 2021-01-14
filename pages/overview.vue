<template>
  <div class="container">
    <section>
      <div>
        <h4>Welcome back,</h4>
        <h4><b>Samuel</b></h4>
        <br />
        <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
      </div>
      <div>
        <h4>Upload Recording</h4>
        <h4>See Statistics</h4>
        <h4>Manage Users</h4>
        <h4>Settings</h4>
        <h4>Logout</h4>
      </div>
    </section>
    <section v-for="album in albums" :key="album.title">
      <div class="flex">
        <h1>01</h1>
        <h6 class="ml-2">NEW</h6>
      </div>
      <divider />
      <h2>{{ album.title }}</h2>
      <h5>{{ album.description }}</h5>
      <div class="flex justify-between items-center">
        <h4 class="leading-normal">{{ album.tracks_nb }} samples</h4>
        <NuxtLink :to="'/recordings/' + album._id">
          <button class="button-square">></button>
        </NuxtLink>
      </div>
    </section>
    <section>
      <div class="mt-auto flex justify-between">
        <h4 class="mt-auto">see more</h4>
        <arrow-button />
      </div>
    </section>
  </div>
</template>

<script>
import Divider from "~/components/Divider.vue";
export default {
  layout: "overview",
  middleware: "authenticated",

  async asyncData({ $http }) {
    const albums = await $http.$get("/album/");
    albums.length = albums.length > 4 ? 4 : albums.length;

    await Promise.all(
      albums.map(async (album) => {
        album.description =
          album.description.length > 80
            ? album.description.slice(0, 80) + "..."
            : album.description;
        album.tracks_nb = (await $http.$get("/track/" + album._id)).length;
        return album;
      })
    );

    return { albums };
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen min-w-full flex flex-wrap items-stretch;

  padding-left: calc(2rem + 7vw + 2rem);
  padding-right: calc(2rem + 7vw + 2rem);
  padding-top: 5vw;
  padding-bottom: 5vw;

  @screen xl {
    padding-left: calc(3rem + 7vw + 3rem);
    padding-right: calc(3rem + 7vw + 3rem);
  }
}

section {
  @apply w-1/2 lg:w-1/3;
  height: 38vh;
  padding-right: calc(33% / 4);
  @apply pt-10;
  @apply flex flex-col justify-between;
}
</style>