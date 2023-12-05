import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Album } from './entities';
import { AlbumsService } from './albums.service';
import { UpdateAlbumInput } from './dto';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private albumsService: AlbumsService) {}

  @Query(() => [Album], { name: 'albums' })
  findAll(): Promise<Album[]> {
    return this.albumsService.findAll();
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args('id') id: number): Promise<Album> {
    return this.albumsService.findOne(id);
  }

  @Mutation(() => Album)
  createAlbum(@Args('title') title: string, @Args('userId', { type: () => Int, nullable: true }) userId?: number) {
    return this.albumsService.create(title, userId);
  }

  @Mutation(() => Album)
  updateAlbum(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput): Promise<Album> {
    return this.albumsService.update(updateAlbumInput.id, updateAlbumInput);
  }

  @Mutation(() => Album)
  removeAlbum(@Args('id', { type: () => ID }) id): Promise<Album> {
    return this.albumsService.remove(id);
  }
}
