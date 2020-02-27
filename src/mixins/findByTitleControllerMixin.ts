import {
  Constructor,
} from '@loopback/context';
import {Model} from '@loopback/repository';
import {FindByTitleInterface} from './findByTitleInterface';
import {
  param,
  get,
  getModelSchemaRef
} from '@loopback/rest';

export interface FindByTitleControllerMixinOptions {

  basePath: string;
  modelClass: typeof Model;
}

export function FindByTitleControllerMixin<M extends Model, T extends Constructor<any>>(superClass: T, options: FindByTitleControllerMixinOptions) {


  class MixedController extends superClass implements FindByTitleInterface<M> {

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
                items: getModelSchemaRef(options.modelClass, {includeRelations: true}),
              },
            },
          },
        },
      },
    })
    async findByTitle(
      @param.path.string('title') title: string,
    ): Promise<[M]> {
      return await this.repository.findByTitle(title);
    }
  }

  return MixedController;
}

