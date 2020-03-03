import {model, property} from '@loopback/repository';
import {AddCategoryPropertyMixin} from '../mixins/category-property-mixin';
import {BaseEntity} from './base-entity';


@model()
export class Note extends AddCategoryPropertyMixin(BaseEntity) {
  constructor(data?: Partial<Note>) {
    super(data);
  }

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  content?: string;

}


export interface NoteRelations {
  // describe navigational properties here
}

export type NoteWithRelations = Note & NoteRelations;
