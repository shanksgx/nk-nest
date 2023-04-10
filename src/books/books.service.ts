import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    return 'This action adds a new book';
  }

  findAll() {
    return [
      {
        exampleField: 1
      },
      {
        exampleField: 2
      },
      {
        exampleField: 3
      }
    ]
  }
}
