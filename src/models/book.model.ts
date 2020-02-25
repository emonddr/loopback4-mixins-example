import {Entity, model, property} from '@loopback/repository';
import {addCategoryPropertyMixin} from '../mixins/categoryPropertyMixin';


class TempBook extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  isbn: string;


  constructor(data?: Partial<TempBook>) {
    super(data);
  }
}


@model()
export class Book extends addCategoryPropertyMixin(
  TempBook,
) {

  constructor(data?: Partial<Book>) {
    super(data);
  }


}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = TempBook & BookRelations;
