import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    album: null,

    showForm: false,

    newSong: null,

    genres: null,

    artists: null,

    store: service(),

    init() {
        this._super(...arguments);

        this.set('genres', this.store.findAll('genre'));
        this.set('artists', this.store.findAll('artist'));
        this.set('newSong', {
            title: undefined
        });
    },

    actions: {
        toggleForm() {
            this.toggleProperty('showForm');
        },

        addSong() {
            const selectGenreId = document.getElementById('selectGenre');
            const selectGenre = this.get('genres').findBy('id', selectGenreId.options[selectGenreId.selectedIndex].value);
            let song = this.store.createRecord('song', {
                title: this.get('newSong.title'),
                album: this.get('album'),
                genre: selectGenre
            });

            song.save();
            this.set(this.get('newSong.title', undefined));
            this.toggleProperty('showForm');
        }
    }
});
