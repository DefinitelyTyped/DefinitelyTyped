import Ember from 'ember';
import {
    UnwrapComputedPropertySetters,
    UnwrapComputedPropertyGetters,
    UnwrapComputedPropertySetter,
    UnwrapComputedPropertyGetter,
} from '@ember/object/-private/types';
import { assertType } from '../lib/assert';

class Example1 extends Ember.Object.extend({
    firstName: '',
    lastName: '',
    allNames: Ember.computed('fullName', function () {
        return [this.fullName];
    }) as Ember.ComputedProperty<string[]>,
    fullName: Ember.computed('firstName', 'lastName', function () {
        // tslint:disable-next-line:no-unnecessary-type-assertion
        return `${this.firstName} ${this.lastName}` as string;
    }),
}) {}

declare const unwrappedGetters1: UnwrapComputedPropertyGetters<Example1>;
unwrappedGetters1.firstName; // $ExpectType string
unwrappedGetters1.lastName; // $ExpectType string
unwrappedGetters1.fullName; // $ExpectType string
unwrappedGetters1.allNames; // $ExpectType string[]

declare const unwrappedSetters1: UnwrapComputedPropertySetters<Example1>;
unwrappedSetters1.firstName; // $ExpectType string
unwrappedSetters1.lastName; // $ExpectType string
unwrappedSetters1.fullName; // $ExpectType string
unwrappedSetters1.allNames; // $ExpectType string[]

class Example2 extends Ember.Object.extend({
    allNames: Ember.computed('fullName', function () {
        return [this.fullName + ''];
    }),
    fullName: Ember.computed('firstName', 'lastName', function () {
        // tslint:disable-next-line:no-unnecessary-type-assertion
        return `${this.firstName} ${this.lastName}` as string;
    }),
}) {
    firstName = '';
    lastName = '';
    foo() {
        this.fullName; // $ExpectType ComputedProperty<string, string>
        this.allNames; // $ExpectType ComputedProperty<string[], string[]>
        this.firstName; // $ExpectType string
        this.lastName; // $ExpectType string

        this.get('fullName').split(','); // $ExpectType string[]
        this.get('allNames')[0]; // $ExpectType string
        this.get('firstName').split(','); // $ExpectType string[]
        this.get('lastName').split(','); // $ExpectType string[]
    }
}
const ex2 = new Example2();

declare const unwrappedGetters2: UnwrapComputedPropertyGetters<typeof ex2>;
assertType<string>(unwrappedGetters2.firstName); // $ExpectType string
assertType<string>(unwrappedGetters2.lastName); // $ExpectType string
assertType<string>(unwrappedGetters2.fullName); // $ExpectType string
assertType<string[]>(unwrappedGetters2.allNames); // $ExpectType string[]

declare const unwrappedSetters2: UnwrapComputedPropertySetters<typeof ex2>;
assertType<string>(unwrappedSetters2.firstName); // $ExpectType string
assertType<string>(unwrappedSetters2.lastName); // $ExpectType string
assertType<string>(unwrappedSetters2.fullName); // $ExpectType string
assertType<string[]>(unwrappedSetters2.allNames); // $ExpectType string[]

ex2.fullName; // $ExpectType ComputedProperty<string, string>
ex2.allNames; // $ExpectType ComputedProperty<string[], string[]>
ex2.firstName; // $ExpectType string

type UnwStringSet = UnwrapComputedPropertySetter<string>; // $ExpectType string
type UnwStringGet = UnwrapComputedPropertyGetter<string>; // $ExpectType string
// $ExpectType string
type UnwCpStringSet1 = UnwrapComputedPropertySetter<Ember.ComputedProperty<string>>;
// $ExpectType string
type UnwCpStringGet1 = UnwrapComputedPropertyGetter<Ember.ComputedProperty<string>>;
// $ExpectType string
type UnwCpStringSet2 = UnwrapComputedPropertySetter<Ember.ComputedProperty<string, string>>;
// $ExpectType string
type UnwCpStringGet2 = UnwrapComputedPropertyGetter<Ember.ComputedProperty<string, string>>;
// $ExpectType string
type UnwCpStringSet3 = UnwrapComputedPropertySetter<Ember.ComputedProperty<number, string>>;
// $ExpectType number
type UnwCpStringGet3 = UnwrapComputedPropertyGetter<Ember.ComputedProperty<number, string>>;
// $ExpectType number
type UnwCpStringSet4 = UnwrapComputedPropertySetter<Ember.ComputedProperty<string, number>>;
// $ExpectType string
type UnwCpStringGet4 = UnwrapComputedPropertyGetter<Ember.ComputedProperty<string, number>>;
