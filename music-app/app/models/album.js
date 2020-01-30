import Model, { attr, hasMany } from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({

    name: attr('string'),

    cover: attr(),

    songs: hasMany('song')
});
