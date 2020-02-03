import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Album title ${i+1}`;
    },
    
    afterCreate(album, server) {
        album.update({ songs: server.createList('song', Math.floor(Math.random() * 10) + 3) });
    }
});
