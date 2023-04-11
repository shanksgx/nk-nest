import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    BooksModule,
  ],
})
export class AppModule {}
