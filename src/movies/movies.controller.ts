import { Controller, Get, Param, Post, Delete, Put, Patch, Body, Query, Req, Res } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies') //url의 entry point 컨트롤
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}
    
    /*@Get()
    async getAll() : Promise<Movie[]> {
        return this.moviesService.getAll();
    }*/

    /*@Get('search')
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get(':id') // 얘 밑에 있으면 다 Get의 param을 id로 인식함
    getOne(@Param('id') movieId: number) : Movie {
        console.log(typeof movieId)
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO){
        return this.moviesService.create(movieData)
    }

    @Delete(":id")
    remove(@Param('id') movieId: number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO){
        return this.moviesService.update(movieId, updateData);
    }*/

    
}
