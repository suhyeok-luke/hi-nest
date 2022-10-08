import { ObjectType, Field, Int } from '@nestjs/graphql';
import internal from 'stream';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
@ObjectType()
export class Movie {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  genres: string[];
}