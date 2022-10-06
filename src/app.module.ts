import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    typePaths: ['./**/*.graphql'],
    driver: ApolloDriver,
  }),
  MoviesModule,
],
  //imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
