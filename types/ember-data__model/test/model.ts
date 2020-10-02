import { computed } from '@ember/object';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import DS, { ChangedAttributes } from 'ember-data';
import RSVP from 'rsvp';

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        user: InstanceType<typeof User>;
        person: Person;
        human: Human;
    }
}

class Person extends Model.extend({
    firstName: attr(),
    lastName: attr(),
    title: attr({ defaultValue: 'The default' }),
    title2: attr({ defaultValue: () => 'The default' }),

    fullName: computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
}) {}

const User = Model.extend({
    username: attr('string'),
    email: attr('string'),
    verified: attr('boolean', { defaultValue: false }),
    canBeNull: attr('boolean', { allowNull: true }),
    createdAt: attr('date', {
        defaultValue() {
            return new Date();
        },
    }),
    mother: belongsTo('person'),
    father: belongsTo('person'),
    friends: hasMany('human'),
});

class Human extends Model {
    @attr() age: number;
    @belongsTo('human') mother: Human;
    // We should remove the direct use of `DS.PromiseManyArray` by creating and
    // exporting a type which represents `HasMany<Person>`.
    @hasMany('person') children: DS.PromiseManyArray<Person>;
}

const user = User.create({ username: 'dwickern' });
user.get('id'); // $ExpectType string
user.get('username'); // $ExpectType string
user.get('verified'); // $ExpectType boolean
user.get('createdAt'); // $ExpectType Date

user.serialize();
user.serialize({ includeId: true });
user.serialize({ includeId: true });

const attributes: ChangedAttributes = user.changedAttributes();

user.rollbackAttributes(); // $ExpectType void

let destroyResult: RSVP.Promise<typeof user>;
destroyResult = user.destroyRecord();
destroyResult = user.destroyRecord({});
destroyResult = user.destroyRecord({ adapterOptions: {} });
destroyResult = user.destroyRecord({ adapterOptions: { waffles: 'are yummy' } });

user.deleteRecord(); // $ExpectType void

user.unloadRecord(); // $ExpectType void

let jsonified: object;
jsonified = user.toJSON();
jsonified = user.toJSON({ includeId: true });

let reloaded: RSVP.Promise<typeof user>;
reloaded = user.reload();
reloaded = user.reload({});
reloaded = user.reload({ adapterOptions: {} });
reloaded = user.reload({ adapterOptions: { fastAsCanBe: 'yessirree' } });
