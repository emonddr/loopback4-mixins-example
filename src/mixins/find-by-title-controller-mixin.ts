import {
  Constructor,
} from '@loopback/context';
import {Entity} from '@loopback/repository';
import {FindByTitle} from './find-by-title-interface';
import {
  param,
  get,
  getModelSchemaRef
} from '@loopback/rest';

export interface FindByTitleControllerMixinOptions {
  basePath: string;
  modelClass: typeof Entity;
}

export function FindByTitleControllerMixin<
  E extends Entity,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Constructor<any>
>(superClass: T, options: FindByTitleControllerMixinOptions) {
  class MixedController extends superClass implements FindByTitle<E> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
    }

    @get(`${options.basePath}/findByTitle/{title}`, {
      responses: {
        '200': {
          description: `Array of ${options.modelClass.modelName} model instances`,
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: getModelSchemaRef(options.modelClass, {
                  includeRelations: true,
                }),
              },
            },
          },
        },
      },
    })
    async findByTitle(@param.path.string('title') title: string): Promise<[E]> {
      return this.repository.findByTitle(title);
    }
  }

  return MixedController;
}
