import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities';
import { Repository } from 'typeorm';
import { UpdateAlbumInput } from './dto';
import { Photo } from '../photos/entities';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album) private albumRepository: Repository<Album>,
    @InjectRepository(Photo) private photoRepository: Repository<Photo>
  ) {}

  async findAll(): Promise<Album[]> {
    return this.albumRepository.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number): Promise<Album> {
    return this.albumRepository.findOne({ where: { id }, order: { id: 'DESC' } });
  }

  async create(title: string, userId?: number): Promise<Album> {
    return this.albumRepository.save({ title, userId });
  }

  async update(id, updateAlbumInput: UpdateAlbumInput): Promise<Album> {
    const album = this.albumRepository.findOne({ where: { id } });
    return this.albumRepository.save({ ...album, ...updateAlbumInput });
  }

  async remove(id: number): Promise<Album> {
    const album: Album = await this.albumRepository.findOne({ where: { id } });
    const photosOfAlbum = await this.photoRepository.find({ where: { albumId: id } });
    await this.albumRepository.remove(album);
    await this.photoRepository.remove(photosOfAlbum);

    return Promise.resolve({ ...album, id });
  }
}
