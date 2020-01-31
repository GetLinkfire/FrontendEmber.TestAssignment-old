import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({

    title: DS.attr(),

    album: DS.belongsTo('album'),

    genre: DS.belongsTo('genre', { inverse: null }),

    artists: DS.hasMany('artist', { inverse: null })
});
