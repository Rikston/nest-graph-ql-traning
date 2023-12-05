import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePhotoInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  albumId?: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  thumbnailUrl?: string;
}
