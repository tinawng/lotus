<template>
  <div class="button-container group">
    <div class="shaft" />
    <span>></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.button-container {
  @apply relative;
  @apply w-16 h-4;
  @apply border border-brand-black hover:bg-brand-black;
  transition: background .2s;
}

.shaft {
  @apply absolute top-1/2 right-0;
  @apply w-full group-hover:w-1/2;
  @apply h-px bg-brand-black group-hover:bg-brand-white;
  transition: all .2s;
}
</style>