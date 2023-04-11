import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    console.log(createBookInput);
    return {
      exampleField: 5,
    };
  }

  findAll() {
    return [
      {
        exampleField: 1,
      },
      {
        exampleField: 2,
      },
      {
        exampleField: 3,
      },
    ];
  }
}
