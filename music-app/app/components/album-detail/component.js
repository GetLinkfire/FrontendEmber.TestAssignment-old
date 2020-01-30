import Component from '@ember/component';

export default Component.extend({

    updateAlbum() {

    },

    actions: {
        addSong() {
            let song = this.store.createRecord('song', {
                title: this.get('title'),
                genre: this.get('genre')
            });

            song.save();

            let album = this.store.findRecord('album', this.get('album.id')).then(function(data) {
                data.songs.push(song);
            });

            album.save();
        },
        updateSong(selectedSong) {
            let song = this.store.findRecord('song', selectedSong).then(function(songToUpdate) {
                //songToUpdate
            });

            album.save();
        },

        searchByText(textToSearch) {
            this.set('albumsToShow', this.get('albums').filterBy('name', textToSearch)); 
        }
    }
});
