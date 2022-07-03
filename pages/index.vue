<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <app-post
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  head: {
    title: `Главная | ${process.env.appName}`,
    meta: [
      { hid: 'homepage', name: 'description', content: 'Блог с интересными статьями по психологии' },
      { hid: 'homepage', name: 'keywords', content: 'статьи по психологии, статьи психологии, интересные статьи по психологии, интересные статьи, интересные статьи эзотерика, интересные посты, посты психология' }
    ]
  },
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetch')
    return {posts}
  },
  components: {
    AppPost
  }
}
</script>

<style>

</style>
