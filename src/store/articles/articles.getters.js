export default {
  /**
   * Check if a article has deletion pending
   */
  isArticleDeletionPending: state => articleId =>
    state.articleDeletionPending.includes(articleId)
}
