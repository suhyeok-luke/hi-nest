import { Query, Resolver } from '@nestjs/graphql'
import { MoviesService } from './movies.service';

@Resolver('Movie')
export class MovieResolver{
    constructor(private moviesService: MoviesService) {}

    @Query(() => [])
    async getAll(){
        return this.moviesService.getAll();
    }
}