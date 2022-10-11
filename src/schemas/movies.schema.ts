import { Field, InputType, ObjectType } from "@nestjs/graphql";
import * as mongoose from "mongoose";
import { Document } from "mongoose";

export const MoviesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    year: Number,
    genres: [String],
});

@ObjectType()
export class Movie extends Document {
    @Field()
    id: number;

    @Field()
    title: string;

    @Field()
    year: number;

    @Field()
    genres: string[];
}

@InputType()
export class CreateMovieInput {
    @Field()
    id: number;

    @Field()
    title: string;

    @Field()
    year: number;

    @Field()
    genres: string[];
}