<template>
  <div class="button-container group">
    <div class="shaft" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 490.8">
      <path
        d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
	l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
	c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
      />
      <path
        d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
	L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667
	c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.button-container {
  @apply relative;
  @apply w-16 h-4;
  @apply border-r border-brand-black hover:bg-brand-black;
  transition: background .2s;
}

.shaft {
  @apply absolute top-1/2 right-0;
  @apply w-full group-hover:w-1/2;
  @apply h-px bg-brand-black group-hover:bg-brand-white;
  transition: all .2s;
}

svg {
  height: 100%;
  @apply ml-auto;
}
path {
  @apply fill-brand-black group-hover:fill-brand-white;
  transition: fill .2s;
}
</style>