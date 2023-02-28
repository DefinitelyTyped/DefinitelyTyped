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
    firstName: string;
    lastName: string;

    // @ts-expect-error
    @action
    bar: string;

    @computed('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // @ts-expect-error
    @computed('firstName', 'lastName')
    badFullName: string;

    @computed('fullName', function (this: Foo) {
        return this.fullName.toUpperCase();
    })
    bigFullName: string;

    @customMacro('hi')
    hiTwice: string[];

    @action
    foo() {}
}

// Computed property macros

class Bar extends EmberObject {
    firstName: string;
    last: string;

    values: number[];

    // @ts-expect-error
    @alias aliasTest0: string;
    // @ts-expect-error
    @alias() aliasTest1: string;
    @alias('firstName') aliasTest2: string;

    // @ts-expect-error
    @and andTest0: boolean;
    @and() andTest1: boolean;
    @and('firstName') andTest2: boolean;
    @and('firstName', 'lastName') andTest3: boolean;

    // @ts-expect-error
    @bool boolTest0: boolean;
    // @ts-expect-error
    @bool() boolTest1: boolean;
    @bool('firstName') boolTest2: boolean;

    // @ts-expect-error
    @collect collectTest0: any;
    @collect() collectTest1: any;
    @collect('firstName') collectTest2: any;

    // @ts-expect-error
    @deprecatingAlias deprecatingAliasTest0: string;
    // @ts-expect-error
    @deprecatingAlias() deprecatingAliasTest1: string;
    @deprecatingAlias('firstName') deprecatingAliasTest2: string;

    // @ts-expect-error
    @empty emptyTest0: boolean;
    // @ts-expect-error
    @empty() emptyTest1: boolean;
    @empty('firstName') emptyTest2: boolean;

    // @ts-expect-error
    @equal equalTest0: boolean;
    // @ts-expect-error
    @equal() equalTest1: boolean;
    // @ts-expect-error
    @equal('firstName') equalTest2: boolean;
    @equal('firstName', 'lastName') equalTest3: boolean;

    // @ts-expect-error
    @filter filterTest1: string[];
    // @ts-expect-error
    @filter() filterTest2: string[];
    // @ts-expect-error
    @filter('firstName') filterTest3: string[];
    @filter('firstName', x => x) filterTest4: string[];
    // @ts-expect-error
    @filter('firstName', 'secondName', x => x) filterTest5: string[];
    @filter('firstName', ['secondName'], x => x) filterTest6: string[];

    // @ts-expect-error
    @filterBy filterByTest1: any[];
    // @ts-expect-error
    @filterBy() filterByTest2: any[];
    // @ts-expect-error
    @filterBy('firstName') filterByTest3: any[];
    @filterBy('firstName', 'id') filterByTest4: any[];

    // @ts-expect-error
    @gt gtTest1: boolean;
    // @ts-expect-error
    @gt() gtTest2: boolean;
    // @ts-expect-error
    @gt('firstName') gtTest3: boolean;
    @gt('firstName', 3) gtTest4: boolean;

    // @ts-expect-error
    @gte gteTest1: boolean;
    // @ts-expect-error
    @gte() gteTest2: boolean;
    // @ts-expect-error
    @gte('firstName') gteTest3: boolean;
    @gte('firstName', 3) gteTest4: boolean;

    // @ts-expect-error
    @intersect intersectTest1: any;
    @intersect() intersectTest2: any;
    @intersect('firstName') intersectTest3: any;
    @intersect('firstName', 'lastName') intersectTest4: any;

    // @ts-expect-error
    @lt ltTest1: boolean;
    // @ts-expect-error
    @lt() ltTest2: boolean;
    // @ts-expect-error
    @lt('firstName') ltTest3: boolean;
    @lt('firstName', 3) ltTest4: boolean;

    // @ts-expect-error
    @lte lteTest1: boolean;
    // @ts-expect-error
    @lte() lteTest2: boolean;
    // @ts-expect-error
    @lte('firstName') lteTest3: boolean;
    @lte('firstName', 3) lteTest4: boolean;

    // @ts-expect-error
    @map mapTest1: string[];
    // @ts-expect-error
    @map() mapTest2: string[];
    // @ts-expect-error
    @map('firstName') mapTest3: string[];
    @map('firstName', x => x) mapTest4: string[];

    // @ts-expect-error
    @mapBy mapByTest1: any[];
    // @ts-expect-error
    @mapBy() mapByTest2: any[];
    // @ts-expect-error
    @mapBy('firstName') mapByTest3: any[];
    @mapBy('firstName', 'id') mapByTest4: any[];

    // @ts-expect-error
    @match matchTest1: boolean;
    // @ts-expect-error
    @match() matchTest2: boolean;
    // @ts-expect-error
    @match('firstName') matchTest3: boolean;
    // @ts-expect-error
    @match('firstName', 'abc') matchTest4: boolean;
    @match('firstName', /\s+/) matchTest5: boolean;

    // @ts-expect-error
    @max maxTest1: number;
    // @ts-expect-error
    @max() maxTest2: number;
    @max('values') maxTest3: number;
    // @ts-expect-error
    @max('values', 'a') maxTest4: number;

    // @ts-expect-error
    @min minTest1: number;
    // @ts-expect-error
    @min() minTest2: number;
    @min('values') minTest3: number;
    // @ts-expect-error
    @min('values', 'a') minTest4: number;

    // @ts-expect-error
    @none noneTest1: number;
    // @ts-expect-error
    @none() noneTest2: number;
    @none('values') noneTest3: number;
    // @ts-expect-error
    @none('values', 'a') noneTest4: number;

    // @ts-expect-error
    @not notTest1: number;
    // @ts-expect-error
    @not() notTest2: number;
    @not('values') notTest3: number;
    // @ts-expect-error
    @not('values', 'a') notTest4: number;

    // @ts-expect-error
    @notEmpty notEmptyTest1: boolean;
    // @ts-expect-error
    @notEmpty() notEmptyTest2: boolean;
    @notEmpty('firstName') notEmptyTest3: boolean;
    // @ts-expect-error
    @notEmpty('firstName', 'a') notEmptyTest4: boolean;

    // @ts-expect-error
    @oneWay oneWayTest1: boolean;
    // @ts-expect-error
    @oneWay() oneWayTest2: boolean;
    @oneWay('firstName') oneWayTest3: boolean;
    // @ts-expect-error
    @oneWay('firstName', 'b') oneWayTest4: boolean;

    // @ts-expect-error
    @or orTest1: boolean;
    @or() orTest2: boolean;
    @or('firstName') orTest3: boolean;
    @or('firstName', 'lastName') orTest4: boolean;

    // @ts-expect-error
    @readOnly readOnlyTest1: boolean;
    // @ts-expect-error
    @readOnly() readOnlyTest2: boolean;
    @readOnly('firstName') readOnlyTest3: boolean;

    // @ts-expect-error
    @reads readsTest1: boolean;
    // @ts-expect-error
    @reads() readsTest2: boolean;
    @reads('firstName') readsTest3: boolean;
    // @ts-expect-error
    @reads('firstName', 'a') readsTest4: boolean;

    // @ts-expect-error
    @setDiff setDiffTest1: number;
    // @ts-expect-error
    @setDiff() setDiffTest2: number;
    // @ts-expect-error
    @setDiff('values') setDiffTest3: number;
    @setDiff('values', 'otherThing') setDiffTest4: number;
    // @ts-expect-error
    @setDiff('values', 'otherThing', 'a') setDiffTest5: number;

    // @ts-expect-error
    @sort sortTest1: number;
    // @ts-expect-error
    @sort() sortTest2: number;
    // @ts-expect-error
    @sort('values') sortTest3: number;
    @sort('values', 'id') sortTest4: number;
    // @ts-expect-error
    @sort('values', 'id', 'a') sortTest5: number;
    @sort('values', (a, b) => a - b) sortTest6: number;
    @sort('values', ['id'], (a, b) => a - b) sortTest7: number;
    // @ts-expect-error
    @sort('values', 'id', (a, b) => a - b) sortTest8: number;
    // @ts-expect-error
    @sort(['id'], (a, b) => a - b) sortTest9: number;

    // @ts-expect-error
    @sum sumTest1: number;
    // @ts-expect-error
    @sum() sumTest2: number;
    @sum('values') sumTest3: number;

    // @ts-expect-error
    @union unionTest1: any;
    @union() unionTest2: any;
    @union('firstName') unionTest3: any;
    @union('firstName', 'lastName') unionTest4: any;

    // @ts-expect-error
    @uniq uniqTest1: number;
    // @ts-expect-error
    @uniq() uniqTest2: number;
    @uniq('values') uniqTest3: number;

    // @ts-expect-error
    @uniqBy uniqByTest1: number;
    // @ts-expect-error
    @uniqBy() uniqByTest2: number;
    // @ts-expect-error
    @uniqBy('values') uniqByTest3: number;
    @uniqBy('values', 'id') uniqByTest4: number;
}
