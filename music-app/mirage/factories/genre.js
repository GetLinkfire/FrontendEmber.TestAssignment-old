import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Genre name ${i+1}`;
    }
});
