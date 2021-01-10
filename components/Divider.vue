<template functional>
  <div class="border-style"></div>
</template>

<script>
</script>

<style lang="postcss" scoped>
.border-style {
  width: 2.4rem;
  border-bottom: 2px solid;
  @screen xl {
    width: 3.25rem;
    border-bottom: 3px solid;
  }
  @apply border-brand-black;
}
</style>