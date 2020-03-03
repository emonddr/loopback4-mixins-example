import {Constructor} from '@loopback/context';
import {property, Entity} from '@loopback/repository';

export function AddCategoryPropertyMixin<T extends Constructor<Entity>>(
  superClass: T,
) {
  class MixedModel extends superClass {
    @property({
      type: 'string',
      required: true,
    })
    category: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
    }
  }
  return MixedModel;
}

