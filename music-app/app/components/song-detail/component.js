import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: 'tr',

    song: null,

    songToEdit: null,

    showForm: false,

    store: service(),

    artistNames: undefined,

    init() {
        this._super(...arguments);
        this.set('artistNames', this.getArtistsNames(this.get('song.artists')));
        this.set('songToEdit', {
            title: undefined
        });
    },

    getArtistsNames(artists) {
        let names = '';

        if (artists && artists.length) {
            artists.forEach((artist) => {
                names = `${names}, ${artist.name}`;
            });
            names = names.slice(0, -2);
        }

        return names;
    },

    actions: {
        toggleForm() {
            this.toggleProperty('showForm');
        },

        updateSong() {
            const titleToUpdate = this.get('songToEdit.title');
            const selectGenreId = document.getElementById('selectGenre');
            const selectGenre = this.get('genres').findBy('id', selectGenreId.options[selectGenreId.selectedIndex].value);

            this.store.findRecord('song', this.get('song.id')).then(function(songToUpdate) {
                songToUpdate.title = titleToUpdate;
                songToUpdate.genre = selectGenre;
               
                songToUpdate.save();
            });
            this.set('songToEdit.title', null);
            this.toggleProperty('showForm');
        }
    }
});
