import {model, property} from '@loopback/repository';
import {AddCategoryPropertyMixin} from '../mixins/categoryPropertyMixin';
import {BaseModel} from './baseModel';


@model()
export class Note extends AddCategoryPropertyMixin(BaseModel) {
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
