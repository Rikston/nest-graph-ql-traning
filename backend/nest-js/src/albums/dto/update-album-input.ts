import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateAlbumInput } from './create-album-input';

@InputType()
export class UpdateAlbumInput extends CreateAlbumInput {
  @Field(() => Int)
  id: number;
}
