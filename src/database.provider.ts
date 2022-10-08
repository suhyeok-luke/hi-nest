import * as mongoose from 'mongoose';

const DATABASE_NAME = 'GraphQL';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(`mongodb://127.0.0.1/${DATABASE_NAME}`),
    },
];