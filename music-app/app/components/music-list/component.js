import Component from '@ember/component';

export default Component.extend({

    albums: null,

    albumsToShow: null,

    textToSearch: '',

    init() {
        this._super(...arguments);
        this.set('albumsToShow', this.get('albums'));
    },

    actions: {
        searchByText(textToSearch) {
            this.set('albumsToShow', this.get('albums').filter((album) => album.name.toLowerCase().includes(textToSearch.toLowerCase())));
        }
    }
});
