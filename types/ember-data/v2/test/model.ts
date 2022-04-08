import Ember from 'ember';
import DS, { ChangedAttributes } from 'ember-data';
import { assertType } from './lib/assert';

const Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    title: DS.attr({ defaultValue: 'The default' }),
    title2: DS.attr({ defaultValue: () => 'The default' }),

    fullName: Ember.computed('firstName', 'lastName', function () {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
});

const User = DS.Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    verified: DS.attr('boolean', { defaultValue: false }),
    canBeNull: DS.attr('boolean', { allowNull: true }),
    createdAt: DS.attr('date', {
        defaultValue() {
            return new Date();
        },
    }),
});

const user = User.create({ username: 'dwickern' });
assertType<string>(user.get('id'));
assertType<string>(user.get('username'));
assertType<boolean>(user.get('verified'));
assertType<Date>(user.get('createdAt'));

user.serialize();
user.serialize({ includeId: true });
user.serialize({ includeId: true });

const attributes = user.changedAttributes();
assertType<ChangedAttributes>(attributes);
