import { Field, InputType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreatePhotoInput {
  @Field(() => Int)
  albumId: number;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  thumbnailUrl: string;
}
