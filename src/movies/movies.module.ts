import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { MoviesController } from './movies.controller';
import { MoviesProviders } from './movies.providers';
import { MovieResolver } from './movies.resolver';
import { MoviesService } from './movies.service';

@Module({
    imports: [DatabaseModule],
    controllers: [MoviesController],
    //providers: [MoviesService],
    providers: [MovieResolver, MoviesService, ...MoviesProviders],
})
export class MoviesModule {}
