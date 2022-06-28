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

    // @ts-expect-error
    @action
    bar!: string;

    @computed('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // @ts-expect-error
    @computed('firstName', 'lastName')
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

    // @ts-expect-error
    @alias declare aliasTest0: string;
    // @ts-expect-error
    @alias() declare aliasTest1: string;
    @alias('firstName') declare aliasTest2: string;

    // @ts-expect-error
    @and declare andTest0: boolean;
    @and() declare andTest1: boolean;
    @and('firstName') declare andTest2: boolean;
    @and('firstName', 'lastName') declare andTest3: boolean;

    // @ts-expect-error
    @bool declare boolTest0: boolean;
    // @ts-expect-error
    @bool() declare boolTest1: boolean;
    @bool('firstName') declare boolTest2: boolean;

    // @ts-expect-error
    @collect declare collectTest0: any;
    @collect() declare collectTest1: any;
    @collect('firstName') declare collectTest2: any;

    // @ts-expect-error
    @deprecatingAlias declare deprecatingAliasTest0: string;
    // @ts-expect-error
    @deprecatingAlias() declare deprecatingAliasTest1: string;
    // @ts-expect-error
    @deprecatingAlias('firstName') declare deprecatingAliasTest2: string;
    @deprecatingAlias('firstName', { id: 'deprecate-everything', until: 'v5.0.0' })
    declare deprecatingAliasTest3: string;

    // @ts-expect-error
    @empty declare emptyTest0: boolean;
    // @ts-expect-error
    @empty() declare emptyTest1: boolean;
    @empty('firstName') declare emptyTest2: boolean;

    // @ts-expect-error
    @equal declare equalTest0: boolean;
    // @ts-expect-error
    @equal() declare equalTest1: boolean;
    // @ts-expect-error
    @equal('firstName') declare equalTest2: boolean;
    @equal('firstName', 'lastName') declare equalTest3: boolean;

    // @ts-expect-error
    @filter declare filterTest1: string[];
    // @ts-expect-error
    @filter() declare filterTest2: string[];
    // @ts-expect-error
    @filter('firstName') declare filterTest3: string[];
    @filter('firstName', Boolean) declare filterTest4: string[];
    // @ts-expect-error
    @filter('firstName', 'secondName', x => x) declare filterTest5: string[];
    @filter('firstName', ['secondName'], Boolean) declare filterTest6: string[];

    // @ts-expect-error
    @filterBy declare filterByTest1: any[];
    // @ts-expect-error
    @filterBy() declare filterByTest2: any[];
    // @ts-expect-error
    @filterBy('firstName') declare filterByTest3: any[];
    @filterBy('firstName', 'id') declare filterByTest4: any[];

    // @ts-expect-error
    @gt declare gtTest1: boolean;
    // @ts-expect-error
    @gt() declare gtTest2: boolean;
    // @ts-expect-error
    @gt('firstName') declare gtTest3: boolean;
    @gt('firstName', 3) declare gtTest4: boolean;

    // @ts-expect-error
    @gte declare gteTest1: boolean;
    // @ts-expect-error
    @gte() declare gteTest2: boolean;
    // @ts-expect-error
    @gte('firstName') declare gteTest3: boolean;
    @gte('firstName', 3) declare gteTest4: boolean;

    // @ts-expect-error
    @intersect declare intersectTest1: any;
    @intersect() declare intersectTest2: any;
    @intersect('firstName') declare intersectTest3: any;
    @intersect('firstName', 'lastName') declare intersectTest4: any;

    // @ts-expect-error
    @lt declare ltTest1: boolean;
    // @ts-expect-error
    @lt() declare ltTest2: boolean;
    // @ts-expect-error
    @lt('firstName') declare ltTest3: boolean;
    @lt('firstName', 3) declare ltTest4: boolean;

    // @ts-expect-error
    @lte declare lteTest1: boolean;
    // @ts-expect-error
    @lte() declare lteTest2: boolean;
    // @ts-expect-error
    @lte('firstName') declare lteTest3: boolean;
    @lte('firstName', 3) declare lteTest4: boolean;

    // @ts-expect-error
    @map declare mapTest1: string[];
    // @ts-expect-error
    @map() declare mapTest2: string[];
    // @ts-expect-error
    @map('firstName') declare mapTest3: string[];
    @map('firstName', x => x) declare mapTest4: string[];

    // @ts-expect-error
    @mapBy declare mapByTest1: any[];
    // @ts-expect-error
    @mapBy() declare mapByTest2: any[];
    // @ts-expect-error
    @mapBy('firstName') declare mapByTest3: any[];
    @mapBy('firstName', 'id') declare mapByTest4: any[];

    // @ts-expect-error
    @match declare matchTest1: boolean;
    // @ts-expect-error
    @match() declare matchTest2: boolean;
    // @ts-expect-error
    @match('firstName') declare matchTest3: boolean;
    // @ts-expect-error
    @match('firstName', 'abc') declare matchTest4: boolean;
    @match('firstName', /\s+/) declare matchTest5: boolean;

    // @ts-expect-error
    @max declare maxTest1: number;
    // @ts-expect-error
    @max() declare maxTest2: number;
    @max('values') declare maxTest3: number;
    // @ts-expect-error
    @max('values', 'a') declare maxTest4: number;

    // @ts-expect-error
    @min declare minTest1: number;
    // @ts-expect-error
    @min() declare minTest2: number;
    @min('values') declare minTest3: number;
    // @ts-expect-error
    @min('values', 'a') declare minTest4: number;

    // @ts-expect-error
    @none declare noneTest1: number;
    // @ts-expect-error
    @none() declare noneTest2: number;
    @none('values') declare noneTest3: number;
    // @ts-expect-error
    @none('values', 'a') declare noneTest4: number;

    // @ts-expect-error
    @not declare notTest1: number;
    // @ts-expect-error
    @not() declare notTest2: number;
    @not('values') declare notTest3: number;
    // @ts-expect-error
    @not('values', 'a') declare notTest4: number;

    // @ts-expect-error
    @notEmpty declare notEmptyTest1: boolean;
    // @ts-expect-error
    @notEmpty() declare notEmptyTest2: boolean;
    @notEmpty('firstName') declare notEmptyTest3: boolean;
    // @ts-expect-error
    @notEmpty('firstName', 'a') declare notEmptyTest4: boolean;

    // @ts-expect-error
    @oneWay declare oneWayTest1: boolean;
    // @ts-expect-error
    @oneWay() declare oneWayTest2: boolean;
    @oneWay('firstName') declare oneWayTest3: boolean;
    // @ts-expect-error
    @oneWay('firstName', 'b') declare oneWayTest4: boolean;

    // @ts-expect-error
    @or declare orTest1: boolean;
    @or() declare orTest2: boolean;
    @or('firstName') declare orTest3: boolean;
    @or('firstName', 'lastName') declare orTest4: boolean;

    // @ts-expect-error
    @readOnly declare readOnlyTest1: boolean;
    // @ts-expect-error
    @readOnly() declare readOnlyTest2: boolean;
    @readOnly('firstName') declare readOnlyTest3: boolean;

    // @ts-expect-error
    @reads declare readsTest1: boolean;
    // @ts-expect-error
    @reads() declare readsTest2: boolean;
    @reads('firstName') declare readsTest3: boolean;
    // @ts-expect-error
    @reads('firstName', 'a') declare readsTest4: boolean;

    // @ts-expect-error
    @setDiff declare setDiffTest1: number;
    // @ts-expect-error
    @setDiff() declare setDiffTest2: number;
    // @ts-expect-error
    @setDiff('values') declare setDiffTest3: number;
    @setDiff('values', 'otherThing') declare setDiffTest4: number;
    // @ts-expect-error
    @setDiff('values', 'otherThing', 'a') declare setDiffTest5: number;

    // @ts-expect-error
    @sort declare sortTest1: number;
    // @ts-expect-error
    @sort() declare sortTest2: number;
    // @ts-expect-error
    @sort('values') declare sortTest3: number;
    @sort('values', 'id') declare sortTest4: number;
    // @ts-expect-error
    @sort('values', 'id', 'a') declare sortTest5: number;
    @sort('values', (a: number, b: number) => a - b) declare sortTest6: number;
    @sort('values', ['id'], (a: number, b: number) => a - b) declare sortTest7: number;
    // @ts-expect-error
    @sort('values', 'id', (a, b) => a - b) declare sortTest8: number;
    // @ts-expect-error
    @sort(['id'], (a, b) => a - b) declare sortTest9: number;

    // @ts-expect-error
    @sum declare sumTest1: number;
    // @ts-expect-error
    @sum() declare sumTest2: number;
    @sum('values') declare sumTest3: number;

    // @ts-expect-error
    @union declare unionTest1: any;
    @union() declare unionTest2: any;
    @union('firstName') declare unionTest3: any;
    @union('firstName', 'lastName') declare unionTest4: any;

    // @ts-expect-error
    @uniq declare uniqTest1: number;
    // @ts-expect-error
    @uniq() declare uniqTest2: number;
    @uniq('values') declare uniqTest3: number;

    // @ts-expect-error
    @uniqBy declare uniqByTest1: number;
    // @ts-expect-error
    @uniqBy() declare uniqByTest2: number;
    // @ts-expect-error
    @uniqBy('values') declare uniqByTest3: number;
    @uniqBy('values', 'id') declare uniqByTest4: number;
}
