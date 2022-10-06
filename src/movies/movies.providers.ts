import { connection, Connection } from "mongoose";
import { MoviesSchema } from "src/schemas/movies.schema";

export const MoviesProviders = [
    {
        provide: 'MOVIES_MODEL',
        useFactory: (connection: Connection) => connection.model('Movies', MoviesSchema, 'Movies'),
        inject: ['DATABASE_CONNECTION'],
    },
];