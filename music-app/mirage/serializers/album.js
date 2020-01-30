import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data.attributes.amount = payload.data.attributes.cost.amount;
        payload.data.attributes.currency = payload.data.attributes.cost.currency;
    
        delete payload.data.attributes.cost;
    
        return super.normalizeResponse(...arguments);
      }
});
