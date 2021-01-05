<template>
  <div class="container">
    <Logo
      class="absolute z-0"
      style="left: -22vh"
      width="78vh"
      height="78vh"
      color="brand-gray"
      border_width="1.2vw"
    />

    <section class="w-1/2 z-10 ml-auto">
      <div class="flex-vertical-center-x">
        <Logo width="10rem" height="10rem" />
        <div class="title mt-8">LoTUS</div>
        <h3 class="mt-2">audio comparison tool</h3>
      </div>

      <form
        class="w-2/3"
        :action="backend_url + '/auth/login'"
        method="POST"
        v-on:submit.prevent="onSubmit"
      >
        <p>
          <input v-model="login" type="text" name="login" placeholder="email" />
        </p>
        <p>
          <input
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
    </section>
  </div>
</template>

<script>
export default {
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
.container {
  @apply min-h-screen;
  @apply flex items-center;
}
section {
  height: 36vw;
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
