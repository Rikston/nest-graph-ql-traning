export const albums = (album, args, { dataSources }, info) => {
    return dataSources.albumsAPI.getAlbums();
}

export const album = (album, args, {dataSources}, info) => {
    return dataSources.albumsAPI.getAlbumById(args.id);
}
