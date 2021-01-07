<template>
  <div> 
    <ClientOnly>
      <ScreenDebug />
    </ClientOnly>

    <Logo
      class="absolute m-8 xl:m-12"
      width="7vw"
      height="7vw"
      color="brand-gray"
    />

    <Nuxt/>
    
    <div class="bookmark-container">
      <span class="bookmark">OVERVIEW</span>
    </div>

    <div class="divider-container">
      <div class="divider" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>

.bookmark-container {
  @apply absolute right-0;
  bottom: 19rem;
  @screen xl {
    bottom: 25rem;
  }
  @apply m-8 xl:m-12;
  @apply transform -rotate-90 origin-bottom-right;
}

.divider-container {
  @apply absolute bottom-0 right-0;
  @apply h-1.5 w-full;
  @apply mb-8 xl:mb-12 px-8 xl:px-12;
}
.divider {
  @apply h-full w-full;
  @apply bg-brand-gray;
}
</style>