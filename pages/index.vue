<template>
  <div class="container">
    <section style="margin-left: -11vw">
      <Logo
        width="38vw"
        height="38vw"
        color="brand-gray"
        border_width="1.2vw"
      />
    </section>

    <section class="aa">
      <div class="flex-vertical-center-x">
        <Logo width="10rem" height="10rem" />
        <div class="title mt-8">LoTUS</div>
        <h3 class="mt-2">audio comparing tool</h3>
      </div>

      <form
        id="app"
        @submit="checkForm"
        action="https://vuejs.org/"
        method="post"
        class="w-2/3"
      >
        <p>
          <input
            id="login"
            v-model="login"
            type="text"
            name="login"
            placeholder="email"
          />
        </p>
        <p>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="password"
          />
        </p>

        <p class="text-right">
          <input class="button-square" type="submit" value=">" />
        </p>
      </form>
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: "",
  }),
};
</script>

<style scoped>
.container {
  @apply min-h-screen;
  @apply flex items-center;
}
section {
  @apply flex-grow;
}
.aa {
  height: 36vw;
  @apply flex flex-col items-center justify-between;
}

.title {
  display: block;
  @apply text-7xl;
  letter-spacing: 1rem;
  margin-right: -1rem;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
