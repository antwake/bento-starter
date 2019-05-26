<template>
  <div class="article-action-bar">
    <input
      placeholder="article name..."
      class="article-name-input"
      type="text"
      :value="articleNameToCreate"
      @input="setArticleNameToCreate($event.target.value)"
      @keypress.enter="triggerAddArticleAction"
    />
    <div
      :class="{ disabled: articleCreationPending }"
      class="create-article-btn"
      @click="triggerAddArticleAction"
    >
      add article
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: mapState('articles', [
    'articleNameToCreate',
    'articleCreationPending'
  ]),
  methods: {
    ...mapMutations('articles', ['setArticleNameToCreate']),
    ...mapActions('articles', ['triggerAddArticleAction'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.article-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .article-name-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .create-article-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>
