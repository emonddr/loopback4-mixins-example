import {Entity} from '@loopback/repository';

export interface FindByTitle<E extends Entity> {
  findByTitle(title: string): Promise<E[]>;
}
