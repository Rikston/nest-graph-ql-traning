import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field(() => Int, { nullable: true })
  userId: number;

  @Field()
  title: string;
}
