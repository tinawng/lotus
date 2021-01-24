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
      <audio
        v-show="false"
        ref="player"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3"
      ></audio>
      <div class="control-progress">
        <svg
          v-if="!player_is_playing"
          class="play-icon"
          viewBox="0 0 24 24"
          @click="play"
        >
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
        <svg v-else class="play-icon" viewBox="0 0 24 24" @click="pause">
          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
        </svg>
        <div class="progress-bar">
          <div ref="progress-bar-done" class="progress-bar-done" />
          <div ref="progress-thumb" class="progress-thumb" />
        </div>
      </div>
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
    player_is_playing: false,
  }),
  computed: {
    reversedMessage: () => {
      // return this.message.split('').reverse().join('')
    },
  },

  mounted() {
    let self = this;
    // let dom_el = this.$refs["player-" + track._id][0];
    // dom_el.addEventListener("playing", function (e) {
    //   self.getPlayer(track).is_playing = true;
    // });
    // dom_el.addEventListener("play", function (e) {
    //   self.getPlayer(track).is_playing = true;
    // });
    // dom_el.addEventListener("pause", function (e) {
    //   self.getPlayer(track).is_playing = false;
    // });

    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
    var player = this.$refs["player"];
    player.ontimeupdate = () => {
      var time_stamp = (player.currentTime / player.duration) * 100;
      this.$refs["progress-thumb"].style.left = time_stamp + "%";
      this.$refs["progress-bar-done"].style.width = time_stamp + "%";
    };
    player.onplay = () => {
      self.player_is_playing = true;
    };
    player.onpause = () => {
      self.player_is_playing = false;
    };
    player.onended = () => {
      self.player_is_playing = false;
    };
  },

  methods: {
    play() {
      var player = this.$refs["player"];
      player.play();
    },
    pause() {
      var player = this.$refs["player"];
      player.pause();
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen min-w-full;
  @apply flex flex-col justify-between;

  padding-left: calc(2rem + 6vw);
  padding-right: calc(1rem + 7vw);
  padding-top: 7vw;
  padding-bottom: 3vw;

  @screen xl {
    padding-left: calc(6vw);
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
  width: calc(50% - 1.5rem);
  @apply py-14 px-12;
  @apply border border-brand-black;
  @apply flex flex-col justify-between;
}
.sample-frame:nth-of-type(1) {
  @apply mr-6;
  /* @apply border-2; */
}
.sample-frame:nth-of-type(2) {
  @apply ml-6;
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
.control-progress {
  @apply relative;
  @apply h-16 w-2/3;
  @apply px-6;
  @apply border border-brand-black;
  @apply flex items-center;
}
.play-icon {
  @apply h-11 w-11;
  @apply mr-6;
}
.progress-bar {
  @apply relative;
  @apply h-px w-full;
  @apply bg-brand-black;
}
.progress-thumb {
  @apply absolute -bottom-3;
  @apply h-6 w-0.5;
  @apply bg-brand-black;
}
.progress-bar-done {
  @apply absolute -bottom-px;
  height: 3px;
  @apply bg-brand-black;
}
</style>