<template>
  <div class="container">
    <section>
      <h4>Welcome back,</h4>
      <h4><b>Samuel</b></h4>
      <br />
      <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
    </section>
    <section>
      <h4>Welcome back,</h4>
      <h4><b>Samuel</b></h4>
      <br />
      <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
    </section>
    <section>
      <h4>Welcome back,</h4>
      <h4><b>Samuel</b></h4>
      <br />
      <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
    </section>
    <section>
      <h4>Welcome back,</h4>
      <h4><b>Samuel</b></h4>
      <br />
      <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
    </section>
    <section>
      <h4>Welcome back,</h4>
      <h4><b>Samuel</b></h4>
      <br />
      <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
    </section>
    <section>
      <h4>Welcome back,</h4>
      <h4><b>Samuel</b></h4>
      <br />
      <h4>There's <b>4 new recordings</b> waiting for you to review</h4>
    </section>
  </div>
</template>

<script>
export default {
  layout: "overview",
  middleware: "authenticated",
};
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen min-w-full flex flex-wrap items-stretch;

  padding-left: calc(2rem + 7vw + 2rem);
  padding-right: calc(2rem + 7vw + 2rem);
  padding-top: 7vw;
  padding-bottom: 7vw;

  @screen xl {
    padding-left: calc(3rem + 7vw + 3rem);
    padding-right: calc(3rem + 7vw + 3rem);
    padding-top: 7vw;
    padding-bottom: 7vw;
  }
}

section {
  @apply w-1/3;
  padding-right: calc(33% / 4);
}
</style>