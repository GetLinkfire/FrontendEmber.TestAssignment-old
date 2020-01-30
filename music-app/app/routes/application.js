import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        const mierda = this.store.findAll('album');

        return mierda.then((data) => {
            return data;
        });
    }
})