
import {FindByTitleRepositoryMixin} from '../mixins/findByTitleRepoMixin';
import {DefaultCrudRepository} from '@loopback/repository';
import {Note, NoteRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Constructor} from '@loopback/core';

export class NoteRepository extends FindByTitleRepositoryMixin<Note, Constructor<DefaultCrudRepository<
  Note,
  typeof Note.prototype.id,
  NoteRelations
>>>(
  DefaultCrudRepository,
) {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Note, dataSource);
  }
}
