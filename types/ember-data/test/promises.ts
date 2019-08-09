import DS from 'ember-data';
import { assertType } from "./lib/assert";

declare const store: DS.Store;

class Person extends DS.Model {
    firstName = DS.attr();
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        person: Person;
    }
}

const promiseFind = store.findRecord("person", 1);

promiseFind.content; // $ExpectType Person | undefined

promiseFind.get("firstName");
