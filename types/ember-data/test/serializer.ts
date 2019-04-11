import Ember from 'ember';
import DS from 'ember-data';

interface Dict<T> {
    [key: string]: T | null | undefined;
}

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

class Message extends DS.Model.extend({
    title: DS.attr(),
    body: DS.attr(),

    author: DS.belongsTo('user'),
    comments: DS.belongsTo('comment')
}) {}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'message-for-serializer': Message;
    }
}

interface CustomSerializerOptions {
    includeId: boolean;
}

const SerializerUsingSnapshots = DS.RESTSerializer.extend({
    serialize(snapshot: DS.Snapshot<'message-for-serializer'>, options: CustomSerializerOptions) {
        let json: any = {
            POST_TTL: snapshot.attr('title'),
            POST_BDY: snapshot.attr('body'),
            POST_CMS: snapshot.hasMany('comments', { ids: true })
        };

        if (options.includeId) {
            json.POST_ID_ = snapshot.id;
        }

        return json;
    }
});

DS.Serializer.extend({
    serialize(snapshot: DS.Snapshot<'message-for-serializer'>, options: {}) {
        let json: Dict<any> = {
            id: snapshot.id
        };

        // $ExpectType void
        snapshot.eachAttribute((key, attribute) => {
            json[key] = snapshot.attr(key);
        });

        // $ExpectType void
        snapshot.eachRelationship((key, relationship) => {
            if (relationship.kind === 'belongsTo') {
                json[key] = snapshot.belongsTo(key, { id: true });
            } else if (relationship.kind === 'hasMany') {
                json[key] = snapshot.hasMany(key, { ids: true });
            }
        });

        return json;
    },
});
