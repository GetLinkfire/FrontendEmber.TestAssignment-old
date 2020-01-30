import { Factory, association, trait, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Song title ${i}`;
    },

    //album: association(),

    /*genre: trait({
        afterCreate(song, server) {
            server.create('genre');
        }
    })*/

});
