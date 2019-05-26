<template>
  <div class="page-wrapper">
    <h1 class="articles-page-title">Articles page</h1>
    <article-list class="article-list"></article-list>
    <add-article v-if="networkOnLine"></add-article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleList from '@/components/ArticleList'
import AddArticle from '@/components/AddArticle'

export default {
  components: { ArticleList, AddArticle },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.articles-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.article-list {
  margin: 20px 0;
}
</style>
