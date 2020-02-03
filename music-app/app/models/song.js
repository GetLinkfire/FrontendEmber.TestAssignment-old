import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({

    title: attr(),

    album: belongsTo('album'),

    genre: belongsTo('genre', { inverse: null }),

    artists: hasMany('artist', { inverse: null })
});
