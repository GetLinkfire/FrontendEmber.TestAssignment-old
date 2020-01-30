export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
 let songs = server.createList('song', 80);
 let albums = server.createList('album', 10);

 let song = 0;
 albums.forEach((album) => {
   album.songs = songs.slice(song, song + 5);
   song = song + 5;
 })
 //server.createList('artist', 20);
 //server.createList('genre', 8);
 //server.createList('songs', 88);
  /*for (let i = 0; i < 10; i++) {
    let album = server.create('album');
    let numberOfSongs = Math.floor(Math.random() + 7) + 4;

    server.createList('song', numberOfSongs, { album });
  }*/
}
