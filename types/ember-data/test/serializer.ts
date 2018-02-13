import Ember from 'ember';
import DS from 'ember-data';

const JsonApi = DS.JSONAPISerializer.extend({});

const Customized = DS.JSONAPISerializer.extend({
    serialize(snapshot: DS.Snapshot<'user'>, options: {}) {
        const lookup = snapshot.belongsTo('username');
        let json: any = this._super(...Array.from(arguments));

        json.data.attributes.cost = {
            amount: json.data.attributes.amount,
            currency: json.data.attributes.currency
        };

        return json;
    },
    normalizeResponse(store: DS.Store, primaryModelClass: DS.Model, payload: any, id: string|number, requestType: string) {
        payload.data.attributes.amount = payload.data.attributes.cost.amount;
        payload.data.attributes.currency = payload.data.attributes.cost.currency;

        delete payload.data.attributes.cost;

        return this._super(...Array.from(arguments));
    }
});

const EmbeddedRecordMixin = DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        author: {
            serialize: false,
            deserialize: 'records'
        },
        comments: {
            deserialize: 'records',
            serialize: 'ids'
        }
    }
});
