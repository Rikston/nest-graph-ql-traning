import { RESTDataSource } from "@apollo/datasource-rest";

export class PhotosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPhotos() {
    return this.get('photos');
  }

  async getPhoto(id: number) {
    return this.get(`photos/${id}`);
  }

  async photosInAlbum(albumId: number) {
    return this.get(`photos?albumId=${albumId}`);
  }
}
