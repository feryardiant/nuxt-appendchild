<template>
  <div class="container">
    <div class="links">
      <nuxt-link class="link" to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/lorem-ipsum">Lorem Ipsum</nuxt-link>
      <nuxt-link class="link" to="/posts">All posts</nuxt-link>
    </div>

    <nuxt class="content" />
  </div>
</template>

<style lang="postcss">
html {
  @apply font-sans text-lg text-gray-800 box-border antialiased;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

*,
*:before,
*:after {
  @apply box-border m-0;
}

.container {
  @apply min-h-screen justify-center items-center text-center mx-auto;
}

.links, .content {
  @apply flex w-full clear-both;
}

.link {
  @apply inline-flex;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
</style>
