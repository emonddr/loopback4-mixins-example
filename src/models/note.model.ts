import {Entity, model, property} from '@loopback/repository';
import {addCategoryPropertyMixin} from '../mixins/categoryPropertyMixin';



class TempNote extends Entity {
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


  constructor(data?: Partial<TempNote>) {
    super(data);
  }
}

@model()
export class Note extends addCategoryPropertyMixin(
  TempNote,
) {

  constructor(data?: Partial<Note>) {
    super(data);
  }


}


export interface NoteRelations {
  // describe navigational properties here
}

export type NoteWithRelations = Note & NoteRelations;
