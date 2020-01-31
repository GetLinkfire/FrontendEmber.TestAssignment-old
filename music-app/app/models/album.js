import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({

    name: attr('string'),

    cover: attr('string'),

    songs: hasMany('song')
});
