<template>
  <div>
    <p v-if="articles === null" class="infos-label">Loading...</p>
    <p v-if="articles && !articles.length" class="infos-label">
      You don't have any article yet
    </p>
    <article-item
      v-for="(article, index) in articles"
      :key="article.id"
      class="article-row"
      :index="index"
      :is-article-deletion-pending="isArticleDeletionPending(article.id)"
      :disable-actions="!networkOnLine"
      :data="article"
      @deleteArticle="deleteArticle"
    ></article-item>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { ArticleItem },
  computed: {
    ...mapGetters('articles', ['isArticleDeletionPending']),
    ...mapState('articles', ['articles']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: mapActions('articles', ['deleteArticle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.article-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
