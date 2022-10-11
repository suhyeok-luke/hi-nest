import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { CreateMovieInput, Movie } from '../schemas/movies.schema';

@Injectable()
export class MoviesService {
    //private movies : Movie[] = [];

    constructor(
        @Inject('MOVIES_MODEL')
        private moviesModel: Model<Movie>
    ) {}

    async getAll(): Promise<Movie[]> {
        return this.moviesModel.find().exec();
    }

    async addMovies(movie: CreateMovieInput): Promise<Movie> {
        return this.moviesModel.create(movie);
    }

    /*getOne(id: number): Movie {
        //console.log(typeof id);
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData: CreateMovieDTO){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id:number, updateData: UpdateMovieDTO){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }*/
}
