import {
  Constructor,
} from '@loopback/context';

import {Model} from '@loopback/repository';
import {FindByTitleInterface} from './findByTitleInterface';

/*
 * This function adds a new method 'findByTitle' to a repository class
 * where 'M' is a model and 'R' is DefaultCrudRepository
 */
export function FindByTitleRepositoryMixin<M extends Model, R extends Constructor<any>>(superClass: R) {

  return class extends superClass implements FindByTitleInterface<M> {

    async findByTitle(title: string): Promise<(M)[]> {
      const titleFilter = {
        where: {
          title: title
        }
      };
      return await this.find(titleFilter);
    }
  }
}
