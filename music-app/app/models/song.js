import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import DS from 'ember-data';
export default Model.extend({

    name: attr(),

    //album: DS.belongsTo('album'),

    //genre: belongsTo('genre', { inverse: 'id', async: false }),

    //artits: hasMany('artist', { inverse: 'id', async: false })


});
