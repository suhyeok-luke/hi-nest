import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateMovieInput } from 'src/schemas/movies.schema';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Resolver('Movie')
export class MovieResolver{
    constructor(private moviesService: MoviesService) {}

    @Query(() => [Movie])
    async getAll(){
        return this.moviesService.getAll();
    }

    @Mutation(() => Movie)
    async addMovies(@Args('movie') movie: CreateMovieInput){
        return await this.moviesService.addMovies(movie);
    }
}