import Component from '@ember/component';

export default Component.extend({

    albums: [],

    albumsToShow: [],

    sortByNameAsc: true,

    sortByIdAsc: true,

    textToSearch: '',

    init() {
        this._super(...arguments);
        this.set('albumsToShow', this.get('albums'));
    },

    actions: {
        sort(sortParam) {
            const albums = this.get('albums');
            if (sortParam === 'id') {
                if (this.get('sortByIdAsc')) {
                    albums.sortBy('id');
                } else {
                    albums.sortBy('id').reverse();
                }
                this.toggleProperty('sortByIdAsc');
            }
            console.log('eeeeeh');
        },

        searchByText(textToSearch) {
            this.set('albumsToShow', this.get('albums').filter((album) => album.name.toLowerCase().includes(textToSearch.toLowerCase())));
        }
    }
});
