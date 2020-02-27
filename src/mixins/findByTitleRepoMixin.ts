import {
  Constructor,
} from '@loopback/context';

import {Model,CrudRepository,Where} from '@loopback/repository';
import {FindByTitleInterface} from './findByTitleInterface';

/*
 * This function adds a new method 'findByTitle' to a repository class
 * where 'M' is a model and 'R' is DefaultCrudRepository
 */
export function FindByTitleRepositoryMixin<M extends Model & {title: string}, R extends Constructor<CrudRepository<M>>>(superClass: R) {

  return class extends superClass implements FindByTitleInterface<M> {

    async findByTitle(title: string): Promise<(M)[]> {
      const where = {title} as Where<M>;
      const titleFilter = {where};
      return await this.find(titleFilter);
    }
  }
}
