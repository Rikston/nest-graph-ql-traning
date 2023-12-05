import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities';
import { PhotosService } from './photos.service';
import { PhotosResolver } from './photos.resolver';
import { Album } from '../albums/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, Album])],
  providers: [PhotosService, PhotosResolver],
})
export class PhotosModule {}
