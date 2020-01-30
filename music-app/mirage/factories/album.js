import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Album title ${i}`;
    }/*,

    afterCreate(album, server) {
        album.songs = server.createList('song', 2);
    }*/
});
