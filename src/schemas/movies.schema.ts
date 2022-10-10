import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from "mongoose";
import { Document } from "mongoose";

export const MoviesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    year: Number,
    genres: [String],
});

export class Movie extends Document {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field()
    year: number;

    @Field()
    genres: string[];
}