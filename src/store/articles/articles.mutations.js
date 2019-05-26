export default {
  /* Article input name */
  setArticleNameToCreate: (state, articleNameToCreate) =>
    (state.articleNameToCreate = articleNameToCreate),

  /* Articles */
  setArticles: (state, articles) => (state.articles = articles),
  addArticle: (state, article) => state.articles.push(article),
  removeArticleById: (state, articleId) => {
    const index = state.articles.findIndex(article => article.id === articleId)
    state.articles.splice(index, 1)
  },

  /* Articles deletion */
  addArticleDeletionPending: (state, articleId) =>
    state.articleDeletionPending.push(articleId),
  removeArticleDeletionPending: (state, articleId) => {
    const index = state.articles.findIndex(article => article.id === articleId)
    state.articleDeletionPending.splice(index, 1)
  },

  /* Article creation */
  setArticleCreationPending: (state, value) =>
    (state.articleCreationPending = value)
}
