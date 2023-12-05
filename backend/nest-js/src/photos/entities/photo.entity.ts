import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Photo {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  albumId: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column()
  thumbnailUrl: string;
}
