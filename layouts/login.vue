<template>
  <div class="min-h-screen flex items-center">
    <Logo
      class="absolute z-0"
      style="left: -22vh"
      width="78vh"
      height="78vh"
      color="brand-gray"
      border_width="1.2vw"
    />

    <div class="absolute bottom-0 m-12 right-0 h-1.5 w-2/3 bg-brand-gray"></div>

    <span
      class="absolute m-12 right-0 bottom transform -rotate-90 origin-bottom-right bookmark"
    >
      LOGIN
    </span>

    <Nuxt />
  </div>
</template>

<style lang="postcss">
.bottom {
  bottom: 15.5rem;
}
</style>
