import {
  Constructor,
} from '@loopback/context';

import {property} from '@loopback/repository';

export function AddCategoryPropertyMixin<T extends Constructor<any>>(superClass: T) {

  class MixedModel extends superClass {

    @property({
      type: 'string',
      required: true,
    })
    category: string;

    constructor(...args: any[]) {
      super(...args);
    }

  }

  return MixedModel;
}
