import ArticlesDB from '@/firebase/articles-db'

export default {
  /**
   * Fetch articles of current loggedin user
   */
  getArticles: async ({ commit }) => {
    const articleDb = new ArticlesDB()

    const articles = await articleDb.readAll()
    commit('setArticles', articles)
  },

  /**
   * Create a article for current loggedin user
   */
  createArticle: async ({ commit }, article) => {
    const articleDb = new ArticlesDB()

    commit('setArticleCreationPending', true)
    const createdArticle = await articleDb.create(article)
    commit('addArticle', createdArticle)
    commit('setArticleCreationPending', false)
  },

  /**
   * Create a new article for current loggedin user and reset article name input
   */
  triggerAddArticleAction: ({ dispatch, state, commit }) => {
    if (state.articleNameToCreate === '') return

    const article = { name: state.articleNameToCreate }
    commit('setArticleNameToCreate', '')
    dispatch('createArticle', article)
  },

  /**
   * Delete a user article from its id
   */
  deleteArticle: async ({ commit, getters }, articleId) => {
    if (getters.isArticleDeletionPending(articleId)) return

    const articlesDb = new ArticlesDB()

    commit('addArticleDeletionPending', articleId)
    await articlesDb.delete(articleId)
    commit('removeArticleById', articleId)
    commit('removeArticleDeletionPending', articleId)
  }
}
