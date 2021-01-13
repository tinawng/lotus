<template>
  <div class="button-container group">
    <div class="shaft" />
    <span class="arrow">></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.button-container {
  @apply relative;
  @apply w-14 h-6;
  @apply border border-brand-black hover:bg-brand-black;
  transition: background .2s;
}
.button-container:active {
  @apply bg-brand-deepblack text-brand-gray;
}
.shaft {
  @apply absolute top-1/2 right-0;
  @apply w-full group-hover:w-1/2;
  @apply h-px bg-brand-black group-hover:bg-brand-white;
  transition: all .2s;
  margin-right: 25%;
}
.arrow {
  @apply absolute right-3;
  @apply h-6;
  @apply text-xl text-right leading-6 group-hover:text-brand-white;
}
</style>