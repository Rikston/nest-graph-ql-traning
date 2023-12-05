import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities';
import { Repository } from 'typeorm';
import { CreatePhotoInput, UpdatePhotoInput } from './dto';
import { Album } from '../albums/entities';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photosRepository: Repository<Photo>,
    @InjectRepository(Album) private albumRepository: Repository<Album>
  ) {}

  findAll(): Promise<Photo[]> {
    return this.photosRepository.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number): Promise<Photo | Error> {
    try {
      return await this.photosRepository.findOneOrFail({ where: { id } });
    } catch (e) {
      return new Error(`Photo with Id: ${id} - doesn't exist 🤝`);
    }
  }

  async findByAlbumId(albumId: number): Promise<Photo[]> {
    return this.photosRepository.find({ where: { albumId } });
  }

  async create(createPhotoInput: CreatePhotoInput): Promise<Photo | Error> {
    try {
      await this.albumRepository.findOneOrFail({ where: { id: createPhotoInput.albumId } });
      return await this.photosRepository.save(createPhotoInput);
    } catch (e) {
      return new Error("Album doesn't exists");
    }
  }

  async update(id, updatePhotoInput: UpdatePhotoInput): Promise<Photo | Error> {
    try {
      const photoToUpdate = await this.photosRepository.findOneOrFail({ where: { id } });
      return this.photosRepository.save({ ...photoToUpdate, ...updatePhotoInput });
    } catch (error) {
      return new Error('🫣🫣🫣🫣🫣🫣🫣');
    }
  }

  async remove(id: number): Promise<Photo | Error> {
    try {
      const photo = await this.photosRepository.findOneOrFail({ where: { id } });
      await this.photosRepository.remove(photo);
      return Promise.resolve({ ...photo, id });
    } catch (error) {
      return error;
    }
  }
}
