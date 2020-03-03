import {
  Constructor,
} from '@loopback/context';

import {Entity,CrudRepository,Where} from '@loopback/repository';
import {FindByTitle} from './find-by-title-interface';

/*
 * This function adds a new method 'findByTitle' to a repository class
 * where 'E' is a model which extends Entity
 *
 * @typeParam E - Model class which extends Entity
 */

export function FindByTitleRepositoryMixin<
  E extends Entity & {title: string},
  R extends Constructor<CrudRepository<E>>
>(superClass: R) {
  class MixedRepository extends superClass implements FindByTitle<E> {
    async findByTitle(title: string): Promise<E[]> {
      const where = {title} as Where<E>;
      const titleFilter = {where};
      return this.find(titleFilter);
    }
  }
  return MixedRepository;
}