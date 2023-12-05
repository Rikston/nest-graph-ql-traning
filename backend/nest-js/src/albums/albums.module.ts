import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './entities';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { Photo } from '../photos/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Album, Photo])],
  providers: [AlbumsService, AlbumsResolver],
})
export class AlbumsModule {}
