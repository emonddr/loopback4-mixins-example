import {DefaultCrudRepository} from '@loopback/repository';
import {Book, BookRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Constructor} from '@loopback/core';
import {FindByTitleRepositoryMixin} from '../mixins/findByTitleRepoMixin';

export class BookRepository extends FindByTitleRepositoryMixin<Book, Constructor<DefaultCrudRepository<
Book,
  typeof Book.prototype.id,
  BookRelations
>>>(
  DefaultCrudRepository,
) {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Book, dataSource);
    console.log("");
    //console.log(JSON.stringify(this));
  }
}
