<template>
  <div class="min-h-screen flex items-center">
    <ClientOnly>
      <ScreenDebug />
    </ClientOnly>

    <Logo
      class="absolute z-0"
      style="left: -22vh"
      width="78vh"
      height="78vh"
      color="brand-gray"
      border_width="1.2vw"
    />

    <div class="divider" />

    <div class="bookmark-container">
      <span class="bookmark">LOGIN</span>
    </div>

    <Nuxt />
  </div>
</template>

<style lang="postcss">
.divider {
  @apply absolute bottom-0 right-0;
  @apply h-1.5 w-2/3;
  @apply m-8 xl:m-12;
  @apply bg-brand-gray;
}
.bookmark-container {
  @apply absolute right-0;
  bottom: 12rem;
  @screen xl {
    bottom: 15.5rem;
  }
  @apply m-8 xl:m-12;
  @apply transform -rotate-90 origin-bottom-right;
}
</style>
