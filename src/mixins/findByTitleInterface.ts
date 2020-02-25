import {Model} from '@loopback/repository';

export interface FindByTitleInterface<M extends Model> {
  findByTitle(title: string): Promise<(M)[]>
}
