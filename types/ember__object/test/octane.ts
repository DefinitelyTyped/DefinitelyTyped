import { action, computed, default as EmberObject } from '@ember/object';
import {
    alias,
    and,
    bool,
    collect,
    deprecatingAlias,
    empty,
    equal,
    filter,
    filterBy,
    gt,
    gte,
    intersect,
    lt,
    lte,
    map,
    mapBy,
    match,
    max,
    min,
    none,
    not,
    notEmpty,
    oneWay,
    or,
    readOnly,
    reads,
    setDiff,
    sort,
    sum,
    union,
    uniq,
    uniqBy,
} from '@ember/object/computed';

function customMacro(message: string) {
    return computed(() => {
        return [message, message];
    });
}

// Native class syntax
class Foo extends EmberObject {
    declare firstName: string;
    declare lastName: string;

    @action // $ExpectError
    bar!: string;

    @computed('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @computed('firstName', 'lastName') // $ExpectError
    declare badFullName: string;

    @computed('fullName', function (this: Foo) {
        return this.fullName.toUpperCase();
    })
    declare bigFullName: string;

    @customMacro('hi')
    declare hiTwice: string[];

    @action
    foo() {}
}

// Computed property macros

class Bar extends EmberObject {
    declare firstName: string;
    declare last: string;

    declare values: number[];

    @alias declare aliasTest0: string; // $ExpectError
    @alias() declare aliasTest1: string; // $ExpectError
    @alias('firstName') declare aliasTest2: string;

    @and declare andTest0: boolean; // $ExpectError
    @and() declare andTest1: boolean;
    @and('firstName') declare andTest2: boolean;
    @and('firstName', 'lastName') declare andTest3: boolean;

    @bool declare boolTest0: boolean; // $ExpectError
    @bool() declare boolTest1: boolean; // $ExpectError
    @bool('firstName') declare boolTest2: boolean;

    @collect declare collectTest0: any; // $ExpectError
    @collect() declare collectTest1: any;
    @collect('firstName') declare collectTest2: any;

    @deprecatingAlias declare deprecatingAliasTest0: string; // $ExpectError
    @deprecatingAlias() declare deprecatingAliasTest1: string; // $ExpectError
    @deprecatingAlias('firstName') declare deprecatingAliasTest2: string; // $ExpectError
    @deprecatingAlias('firstName', { id: 'deprecate-everything', until: 'v5.0.0' })
    declare deprecatingAliasTest3: string;

    @empty declare emptyTest0: boolean; // $ExpectError
    @empty() declare emptyTest1: boolean; // $ExpectError
    @empty('firstName') declare emptyTest2: boolean;

    @equal declare equalTest0: boolean; // $ExpectError
    @equal() declare equalTest1: boolean; // $ExpectError
    @equal('firstName') declare equalTest2: boolean; // $ExpectError
    @equal('firstName', 'lastName') declare equalTest3: boolean;

    @filter declare filterTest1: string[]; // $ExpectError
    @filter() declare filterTest2: string[]; // $ExpectError
    @filter('firstName') declare filterTest3: string[]; // $ExpectError
    @filter('firstName', Boolean) declare filterTest4: string[];
    @filter('firstName', 'secondName', x => x) declare filterTest5: string[]; // $ExpectError
    @filter('firstName', ['secondName'], Boolean) declare filterTest6: string[];

    @filterBy declare filterByTest1: any[]; // $ExpectError
    @filterBy() declare filterByTest2: any[]; // $ExpectError
    @filterBy('firstName') declare filterByTest3: any[]; // $ExpectError
    @filterBy('firstName', 'id') declare filterByTest4: any[];

    @gt declare gtTest1: boolean; // $ExpectError
    @gt() declare gtTest2: boolean; // $ExpectError
    @gt('firstName') declare gtTest3: boolean; // $ExpectError
    @gt('firstName', 3) declare gtTest4: boolean;

    @gte declare gteTest1: boolean; // $ExpectError
    @gte() declare gteTest2: boolean; // $ExpectError
    @gte('firstName') declare gteTest3: boolean; // $ExpectError
    @gte('firstName', 3) declare gteTest4: boolean;

    @intersect declare intersectTest1: any; // $ExpectError
    @intersect() declare intersectTest2: any;
    @intersect('firstName') declare intersectTest3: any;
    @intersect('firstName', 'lastName') declare intersectTest4: any;

    @lt declare ltTest1: boolean; // $ExpectError
    @lt() declare ltTest2: boolean; // $ExpectError
    @lt('firstName') declare ltTest3: boolean; // $ExpectError
    @lt('firstName', 3) declare ltTest4: boolean;

    @lte declare lteTest1: boolean; // $ExpectError
    @lte() declare lteTest2: boolean; // $ExpectError
    @lte('firstName') declare lteTest3: boolean; // $ExpectError
    @lte('firstName', 3) declare lteTest4: boolean;

    @map declare mapTest1: string[]; // $ExpectError
    @map() declare mapTest2: string[]; // $ExpectError
    @map('firstName') declare mapTest3: string[]; // $ExpectError
    @map('firstName', x => x) declare mapTest4: string[];

    @mapBy declare mapByTest1: any[]; // $ExpectError
    @mapBy() declare mapByTest2: any[]; // $ExpectError
    @mapBy('firstName') declare mapByTest3: any[]; // $ExpectError
    @mapBy('firstName', 'id') declare mapByTest4: any[];

    @match declare matchTest1: boolean; // $ExpectError
    @match() declare matchTest2: boolean; // $ExpectError
    @match('firstName') declare matchTest3: boolean; // $ExpectError
    @match('firstName', 'abc') declare matchTest4: boolean; // $ExpectError
    @match('firstName', /\s+/) declare matchTest5: boolean;

    @max declare maxTest1: number; // $ExpectError
    @max() declare maxTest2: number; // $ExpectError
    @max('values') declare maxTest3: number;
    @max('values', 'a') declare maxTest4: number; // $ExpectError

    @min declare minTest1: number; // $ExpectError
    @min() declare minTest2: number; // $ExpectError
    @min('values') declare minTest3: number;
    @min('values', 'a') declare minTest4: number; // $ExpectError

    @none declare noneTest1: number; // $ExpectError
    @none() declare noneTest2: number; // $ExpectError
    @none('values') declare noneTest3: number;
    @none('values', 'a') declare noneTest4: number; // $ExpectError

    @not declare notTest1: number; // $ExpectError
    @not() declare notTest2: number; // $ExpectError
    @not('values') declare notTest3: number;
    @not('values', 'a') declare notTest4: number; // $ExpectError

    @notEmpty declare notEmptyTest1: boolean; // $ExpectError
    @notEmpty() declare notEmptyTest2: boolean; // $ExpectError
    @notEmpty('firstName') declare notEmptyTest3: boolean;
    @notEmpty('firstName', 'a') declare notEmptyTest4: boolean; // $ExpectError

    @oneWay declare oneWayTest1: boolean; // $ExpectError
    @oneWay() declare oneWayTest2: boolean; // $ExpectError
    @oneWay('firstName') declare oneWayTest3: boolean;
    @oneWay('firstName', 'b') declare oneWayTest4: boolean; // $ExpectError

    @or declare orTest1: boolean; // $ExpectError
    @or() declare orTest2: boolean;
    @or('firstName') declare orTest3: boolean;
    @or('firstName', 'lastName') declare orTest4: boolean;

    @readOnly declare readOnlyTest1: boolean; // $ExpectError
    @readOnly() declare readOnlyTest2: boolean; // $ExpectError
    @readOnly('firstName') declare readOnlyTest3: boolean;

    @reads declare readsTest1: boolean; // $ExpectError
    @reads() declare readsTest2: boolean; // $ExpectError
    @reads('firstName') declare readsTest3: boolean;
    @reads('firstName', 'a') declare readsTest4: boolean; // $ExpectError

    @setDiff declare setDiffTest1: number; // $ExpectError
    @setDiff() declare setDiffTest2: number; // $ExpectError
    @setDiff('values') declare setDiffTest3: number; // $ExpectError
    @setDiff('values', 'otherThing') declare setDiffTest4: number;
    @setDiff('values', 'otherThing', 'a') declare setDiffTest5: number; // $ExpectError

    @sort declare sortTest1: number; // $ExpectError
    @sort() declare sortTest2: number; // $ExpectError
    @sort('values') declare sortTest3: number; // $ExpectError
    @sort('values', 'id') declare sortTest4: number;
    @sort('values', 'id', 'a') declare sortTest5: number; // $ExpectError
    @sort('values', (a: number, b: number) => a - b) declare sortTest6: number;
    @sort('values', ['id'], (a: number, b: number) => a - b) declare sortTest7: number;
    @sort('values', 'id', (a, b) => a - b) declare sortTest8: number; // $ExpectError
    @sort(['id'], (a, b) => a - b) declare sortTest9: number; // $ExpectError

    @sum declare sumTest1: number; // $ExpectError
    @sum() declare sumTest2: number; // $ExpectError
    @sum('values') declare sumTest3: number;

    @union declare unionTest1: any; // $ExpectError
    @union() declare unionTest2: any;
    @union('firstName') declare unionTest3: any;
    @union('firstName', 'lastName') declare unionTest4: any;

    @uniq declare uniqTest1: number; // $ExpectError
    @uniq() declare uniqTest2: number; // $ExpectError
    @uniq('values') declare uniqTest3: number;

    @uniqBy declare uniqByTest1: number; // $ExpectError
    @uniqBy() declare uniqByTest2: number; // $ExpectError
    @uniqBy('values') declare uniqByTest3: number; // $ExpectError
    @uniqBy('values', 'id') declare uniqByTest4: number;
}
