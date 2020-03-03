import {DefaultCrudRepository} from '@loopback/repository';
import {Book, BookRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {FindByTitleRepositoryMixin} from '../mixins/find-by-title-repository-mixin';
import {Constructor} from '@loopback/core';

export class BookRepository extends FindByTitleRepositoryMixin<
  Book,
  Constructor<
    DefaultCrudRepository<Book, typeof Book.prototype.id, BookRelations>
  >
>(DefaultCrudRepository) {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Book, dataSource);
  }
}
