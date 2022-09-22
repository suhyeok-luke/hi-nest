import { Controller, Get, Param, Post, Delete, Put, Patch, Body, Query } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies') //url의 entry point 컨트롤
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}
    
    @Get()
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get(':id') // 얘 밑에 있으면 다 Get의 param을 id로 인식함
    getOne(@Param('id') movieId: string) : Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData)
    }

    @Delete(":id")
    remove(@Param('id') movieId: string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }

    
}
