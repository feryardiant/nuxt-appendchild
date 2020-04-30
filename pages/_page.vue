<template>
  <div>
    <Content :file-path="filePath" ></Content>
  </div>
</template>

<script>
import Content from '~/components/Content'

export default {
  components: {
    Content
  },

  asyncData({ params }) {
    return {
      filePath: params.page
    }
  }
}
</script>
