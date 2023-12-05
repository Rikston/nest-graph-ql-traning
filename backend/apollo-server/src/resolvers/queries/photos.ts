export const photos = (photo, args, {dataSources}) => {
  return dataSources.photosAPI.getPhotos();
};

export const photo = (photo, args, {dataSources}) => {
  return dataSources.photosAPI.getPhoto(args.id);
};

export const photosInAlbum = (_, {albumId}, {dataSources}) => {
  return dataSources.photosAPI.photosInAlbum(albumId);
};
