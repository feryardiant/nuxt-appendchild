<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { basename } from 'path'

const getPosts = () => {
  const resolve = require.context('~/entries/posts/', false, /\.md$/)

  return resolve.keys().map((key) => {
    const { attributes, meta } = resolve(key)
    const post = {
      title: attributes.title,
      description: attributes.description,
      slug: basename(meta.resourcePath, '.md')
    }

    post.path = `posts/${post.slug}`

    return post
  })
}

export default {
  asyncData() {
    return {
      posts: getPosts()
    }
  }
}
</script>
