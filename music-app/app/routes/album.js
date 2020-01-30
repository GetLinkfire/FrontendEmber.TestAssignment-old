import Route from '@ember/routing/route';

export default Route.extend({
    model(transition) {
        return this.store.findRecord('album', transition.id);
    }
})