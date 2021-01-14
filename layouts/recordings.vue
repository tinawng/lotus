<template>
  <div>
    <ClientOnly>
      <ScreenDebug />
    </ClientOnly>

    <Nuxt />
    
    <div class="divider-container">
      <div class="divider" />
    </div>
    <div class="bookmark-container">
      <span class="bookmark">REVIEWING</span>
    </div>
    
    <Logo
      class="absolute bottom-0 right-0 m-8 xl:m-12"
      width="4vw"
      height="4vw"
      color="brand-gray"
      border_width="3px"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.bookmark-container {
  @apply absolute right-0;
  top: 20rem;
  @screen xl {
    top: 26rem;
  }
  @apply m-8 xl:m-12;
  @apply transform rotate-90 origin-top-right;
}

.divider-container {
  @apply absolute top-0 right-0;
  @apply h-1.5 w-full;
  @apply mt-8 xl:mt-12 px-8 xl:px-12;
}
.divider {
  @apply h-full w-full;
  @apply bg-brand-gray;
}
</style>