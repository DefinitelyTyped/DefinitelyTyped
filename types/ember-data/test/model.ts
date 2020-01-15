import Ember from 'ember';
import DS, { ChangedAttributes } from 'ember-data';
import { assertType } from "./lib/assert";
import RSVP from 'rsvp';

const Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    title: DS.attr({ defaultValue: "The default" }),
    title2: DS.attr({ defaultValue: () => "The default" }),

    fullName: Ember.computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    })
});

const User = DS.Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    verified: DS.attr('boolean', { defaultValue: false }),
    canBeNull: DS.attr('boolean', { allowNull: true }),
    createdAt: DS.attr('date', {
        defaultValue() { return new Date(); }
    })
});

const user = User.create({ username: 'dwickern' });
assertType<string>(user.get('id'));
assertType<string>(user.get('username'));
assertType<boolean>(user.get('verified'));
assertType<Date>(user.get('createdAt'));

user.serialize();
user.serialize({ includeId: true });
user.serialize({ includeId: true });

const attributes: ChangedAttributes = user.changedAttributes();

user.rollbackAttributes(); // $ExpectType void

let destroyResult: RSVP.Promise<typeof user>;
destroyResult = user.destroyRecord();
destroyResult = user.destroyRecord({});
destroyResult = user.destroyRecord({ adapterOptions: {}});
destroyResult = user.destroyRecord({ adapterOptions: { waffles: 'are yummy' }});

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
