<template>
  <section>
    <div class="flex-vertical-center-x">
      <Logo width="10rem" height="10rem" />
      <div class="title mt-8">LoTUS</div>
      <h3 class="mt-2">audio comparison tool</h3>
    </div>

    <form
      :action="backend_url + '/auth/login'"
      method="POST"
      v-on:submit.prevent="onSubmit"
    >
      <p class="mb-12">
        <input v-model="login" type="text" name="login" placeholder="email" />
      </p>
      <p class="mb-6">
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="password"
        />
      </p>

      <p class="text-right">
        <input class="button-square" style="line-height: 1.25" type="submit" value=">" />
      </p>
    </form>
  </section>
</template>

<script>
export default {
  layout: "login",

  computed: {
    backend_url() {
      return process.env.BACKEND_URL;
    },
  },
  data: () => ({
    login: "",
    password: "",
    err: false,
  }),

  methods: {
    async onSubmit() {
      try {
        // 🥅 Handle error
        this.$http.onError((error) => {
          if (error.statusCode == 401) {
            this.err = true;
          }
        });
        // 🚀 Submit login infos
        const { token, user } = await this.$http.$post("/auth/login", {
          name: this.login.toLowerCase(),
          password: this.password,
        });
        // 🗃️ Store token & user datas
        this.$store.commit("auth/setToken", token);
        this.$store.commit("auth/setUser", user);
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply w-1/4;
  height: 36vw;
  @apply z-10;
  @apply ml-auto;
  margin-right: 25%;
  @apply flex flex-col justify-between;
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
