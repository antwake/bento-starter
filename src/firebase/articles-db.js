import GenericDB from './generic-db'

export default class ArticlesDB extends GenericDB {
  constructor() {
    super('articles')
  }

  // Here you can extend ItemsDB with custom methods
}
