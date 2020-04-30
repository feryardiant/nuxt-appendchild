<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <hr />
    <component :is="component" />
  </div>
</template>

<script>
export default {
  props: {
    filePath: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      title: '',
      description: '',
      component: null
    }
  },

  created() {
    try {
      const md = require(`~/entries/${this.filePath}.md`)

      this.title = md.attributes.title
      this.description = md.attributes.description
      this.component = md.vue.component
    } catch (e) {
      this.$nuxt.error({
        statusCode: 404,
        message: "Couldn't find page"
      })
    }
  },

  head() {
    return {
      title: this.title
    }
  }
}
</script>
