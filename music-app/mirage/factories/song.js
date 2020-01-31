import { Factory, association, trait, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({

    title(i) {
        return `Song title ${i+1}`;
    },

    afterCreate(song, server) {
        const genres = server.schema.genres.all();
        const randomGenre = genres.models[Math.floor(Math.random() * genres.length)];
        const artists = server.schema.artists.all();
        const selectedArtists = artists.filter((artist) =>
            Math.floor(Math.random() * 2) % 2 === 0
        );

        song.update({ genre: randomGenre, artists: selectedArtists });
    }
});
