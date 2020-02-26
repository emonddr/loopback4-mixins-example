import {model, property} from '@loopback/repository';
import {AddCategoryPropertyMixin} from '../mixins/categoryPropertyMixin';
import {BaseModel} from './baseModel';

@model()
export class Book extends AddCategoryPropertyMixin(
  BaseModel,
) {

  constructor(data?: Partial<Book>) {
    super(data);
  }

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



}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
