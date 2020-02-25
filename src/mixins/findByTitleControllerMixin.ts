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

export interface FindByTitleControllerMixinParms {

  basePath: string;
  modelClass: Constructor<{}>;
  modelClassName: string;
}

export function FindByTitleControllerMixin<M extends Model, T extends Constructor<any>>(superClass: T, parms: FindByTitleControllerMixinParms) {


  class MixedController extends superClass implements FindByTitleInterface<M> {

    constructor(...args: any[]) {
      super(...args);
    }

    @get(parms.basePath + '/findByTitle/{title}', {
      responses: {
        '200': {
          description: `Array of ${parms.modelClassName} model instances`,
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: getModelSchemaRef(parms.modelClass, {includeRelations: true}),
              },
            },
          },
        },
      },
    })
    async findByTitle(
      @param.path.string('title') title: string,
    ): Promise<[M]> {

      let foundItems = await this.repository.findByTitle(title);

      return foundItems;
    }


  }

  return MixedController;
}

