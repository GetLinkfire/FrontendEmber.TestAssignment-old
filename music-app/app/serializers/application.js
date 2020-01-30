import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
    serialize(snapshot, options) {
        let json = super.serialize(...arguments);

        return json;
    }

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        return super.normalizeResponse(...arguments);
    }
}