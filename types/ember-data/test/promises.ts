import ArrayProxy from '@ember/array/proxy';
import DS from 'ember-data';
import RSVP from 'rsvp';

import { assertType } from './lib/assert';

declare const store: DS.Store;

class Person extends DS.Model {
    firstName = DS.attr();
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        person: Person;
    }
}

const promiseFind = store.findRecord('person', 1);

promiseFind.content; // $ExpectType Person | undefined

promiseFind.get('firstName');

let promiseArray = DS.PromiseArray.create({ promise: RSVP.Promise.resolve([1]) });

let promiseObject = DS.PromiseObject.create({ promise: RSVP.Promise.resolve({ value: 1 }) });

let promiseObjectNull = DS.PromiseObject.create({ promise: RSVP.Promise.resolve(null) });

declare const objectOrNull: { value: number } | null;
let promiseObjectValueOrNull = DS.PromiseObject.create({ promise: RSVP.Promise.resolve(objectOrNull) });

let promiseManyArray = DS.PromiseManyArray.create({ promise: store.findAll('person') });
assertType<RSVP.Promise<ArrayProxy<DS.Model>>>(promiseManyArray.promise);
