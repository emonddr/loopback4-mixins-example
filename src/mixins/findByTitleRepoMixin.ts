import {
  Constructor,
} from '@loopback/context';

import {Model} from '@loopback/repository';
import {FindByTitleInterface} from './findByTitleInterface';

export function FindByTitleRepositoryMixin<M extends Model, T extends Constructor<any>>(superClass: T) {

  return class extends superClass implements FindByTitleInterface<M> {

    async findByTitle(title: string): Promise<(M)[]> {
      const titleFilter = {
        where: {
          title: title
        }
      };
      const foundItems = await this.find(titleFilter);
      return foundItems;
    }
  }
}
