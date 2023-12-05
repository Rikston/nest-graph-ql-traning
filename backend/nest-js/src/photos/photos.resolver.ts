import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Photo } from './entities';
import { PhotosService } from './photos.service';
import { CreatePhotoInput, UpdatePhotoInput } from './dto';

@Resolver(() => Photo)
export class PhotosResolver {
  constructor(private photosService: PhotosService) {}

  @Query(() => [Photo], { name: 'photos' })
  async findAll(): Promise<Photo[]> {
    return this.photosService.findAll();
  }

  @Query(() => Photo, { name: 'photo' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Photo | Error> {
    return this.photosService.findOne(id);
  }

  @Query(() => [Photo], { name: 'photosByAlbumId' })
  async findByAlbumId(@Args('albumId', { type: () => Int }) albumId: number): Promise<Photo[]> {
    return this.photosService.findByAlbumId(albumId);
  }

  @Mutation(() => Photo)
  async createPhoto(@Args('createPhotoInput') createPhotoInput: CreatePhotoInput): Promise<Photo | Error> {
    return this.photosService.create(createPhotoInput);
  }

  @Mutation(() => Photo)
  async updatePhoto(@Args('updatePhotoInput') updatePhotoInput: UpdatePhotoInput): Promise<Photo | Error> {
    return this.photosService.update(updatePhotoInput.id, updatePhotoInput);
  }

  @Mutation(() => Photo)
  async removePhoto(@Args('id', { type: () => Int }) id: number): Promise<Photo | Error> {
    try {
      return this.photosService.remove(id);
    } catch (e) {
      return new Error('WTF');
    }
  }
}
