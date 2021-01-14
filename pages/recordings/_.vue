<template>
  <div class="container">
    <section class="title-container">
      <h1 class="mb-4 pl-8 xl:pl-12 title font-bold uppercase">
        {{ album_infos.title }}
      </h1>
      <h5>{{ album_infos.description }}</h5>
    </section>
    <section class="samples-container">
      <div class="sample-frame">
        <h1>REF</h1>
        <divider />
        <h5>This is your reference sample.</h5>
      </div>
      <div class="sample-frame">
        <h1>01</h1>
        <divider class="ml-auto" />
        <h5>Rate this sample.</h5>
      </div>
      <div class="samples-nav">
        <div class="flex">
          <h4>sample:</h4>
          <h4
            class="ml-12"
            v-for="(track, index) in tracks"
            :key="track._id"
            @click="selected_sample_a = index"
          >
            <transition name="fade">
              <span v-show="selected_sample_a == index">></span>
            </transition>
            <span v-if="track.is_reference">ref</span>
            <span v-else>0{{ index }}</span>
          </h4>
        </div>
        <div class="flex">
          <h4>sample:</h4>
          <h4
            v-for="(track, index) in tracks"
            :key="track._id"
            @click="selected_sample_b = index"
          >
            <transition name="fade">
              <span v-show="selected_sample_b == index" class="ml-12 -mr-12"
                >></span
              >
            </transition>
            <span v-show="!track.is_reference" class="ml-12">0{{ index }}</span>
          </h4>
        </div>
      </div>
    </section>
    <section class="controls-container">
      <h2>global controls...</h2>
    </section>
  </div>
</template>

<script>
import Divider from "~/components/Divider.vue";
export default {
  components: { Divider },
  layout: "recordings",
  middleware: "authenticated",

  async asyncData({ $http, params }) {
    const _id = params.pathMatch;
    const album_infos = await $http.$get("/album/" + _id);
    // 🥅 Catch 404

    var tracks = await $http.$get("/track/" + _id);
    tracks = tracks.sort((a, b) => {
      if (a.is_reference) return -1;
      if (b.is_reference) return 1;
      return 0;
    });

    return { album_infos, tracks };
  },

  data: () => ({
    selected_sample_a: 0,
    selected_sample_b: 1,
  }),

  methods: {},
};
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen min-w-full;
  @apply flex flex-col justify-between;

  padding-left: calc(2rem + 7vw);
  padding-right: calc(1rem + 7vw);
  padding-top: 7vw;
  padding-bottom: 3vw;

  @screen xl {
    padding-left: calc(7vw);
    padding-right: calc(2rem + 7vw);
  }
}

.title-container {
  @apply ml-12;
}
.title {
  font-family: "Poppins ExtraLight";
  @apply text-3xl xl:text-4xl;
}

.samples-container {
  @apply mt-12;
  @apply flex flex-wrap;
}
.sample-frame {
  @apply h-72;
  width: calc(50% - 0.5rem);
  @apply py-14 px-12;
  @apply border border-brand-black;
  @apply flex flex-col justify-between;
}
.sample-frame:nth-of-type(1) {
  @apply mr-2;
}
.sample-frame:nth-of-type(2) {
  @apply ml-2;
  @apply items-end;
}
.samples-nav {
  @apply w-full;
  @apply mt-2;
  @apply flex justify-between;
}

.controls-container {
  @apply mt-12;
  @apply flex-grow;
}
</style>