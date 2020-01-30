import { Model, hasMany, faker } from 'ember-cli-mirage';

export default Model.extend({
    songs: hasMany('song')
});
