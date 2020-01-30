export default function() {

  this.namespace = '';

  this.get('/albums', function(schema, request) {
    //return schema.albums.all();
    let albums = schema.albums.all();
  let json = this.serialize(albums);

  //json.meta.size = albums.length;

  return json;
  });
  this.get('/albums/:id');
  /*this.get('/albums/:id/songs', (schema, request) => {
    let album = schema.albums.find(request.params.id);

    return album.songs;
  })*/

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
