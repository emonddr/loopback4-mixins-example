import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';

import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';


import {Book} from '../models';
import {BookRepository} from '../repositories';

import {FindByTitleControllerMixin, FindByTitleControllerMixinOptions} from '../mixins/find-by-title-controller-mixin';
import {Constructor} from '@loopback/core';

const options: FindByTitleControllerMixinOptions = {
  basePath: '/books',
  modelClass: Book,
};

export class BookController extends FindByTitleControllerMixin<Book, Constructor<Object>>(
  Object, options,
) {

  constructor(
    @repository(BookRepository)
    public repository: BookRepository,
  ) {
    super();
  }

  @post('/books', {
    responses: {
      '200': {
        description: 'Book model instance',
        content: {'application/json': {schema: getModelSchemaRef(Book)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Book, {
            title: 'NewBook',
            exclude: ['id'],
          }),
        },
      },
    })
    book: Omit<Book, 'id'>,
  ): Promise<Book> {
    return this.repository.create(book);
  }

  @get('/books/count', {
    responses: {
      '200': {
        description: 'Book model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Book)) where?: Where<Book>,
  ): Promise<Count> {
    return this.repository.count(where);
  }

  @get('/books', {
    responses: {
      '200': {
        description: 'Array of Book model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Book, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Book)) filter?: Filter<Book>,
  ): Promise<Book[]> {
    return this.repository.find(filter);
  }

  @patch('/books', {
    responses: {
      '200': {
        description: 'Book PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Book, {partial: true}),
        },
      },
    })
    book: Book,
    @param.query.object('where', getWhereSchemaFor(Book)) where?: Where<Book>,
  ): Promise<Count> {
    return this.repository.updateAll(book, where);
  }

  @get('/books/{id}', {
    responses: {
      '200': {
        description: 'Book model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Book, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Book)) filter?: Filter<Book>
  ): Promise<Book> {
    return this.repository.findById(id, filter);
  }

  @patch('/books/{id}', {
    responses: {
      '204': {
        description: 'Book PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Book, {partial: true}),
        },
      },
    })
    book: Book,
  ): Promise<void> {
    await this.repository.updateById(id, book);
  }

  @put('/books/{id}', {
    responses: {
      '204': {
        description: 'Book PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() book: Book,
  ): Promise<void> {
    await this.repository.replaceById(id, book);
  }

  @del('/books/{id}', {
    responses: {
      '204': {
        description: 'Book DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.repository.deleteById(id);
  }

}



