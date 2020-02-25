import { action, computed, default as EmberObject } from "@ember/object";
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
    uniqBy
} from "@ember/object/computed";

function customMacro(message: string) {
    return computed(() => {
        return [message, message];
    });
}

// Native class syntax
class Foo extends EmberObject {
    firstName: string;
    lastName: string;

    @action // $ExpectError
    bar: string;

    @computed("firstName", "lastName")
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @computed("firstName", "lastName") // $ExpectError
    badFullName: string;

    @computed("fullName", function(this: Foo) {
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

    @alias aliasTest0: string; // $ExpectError
    @alias() aliasTest1: string; // $ExpectError
    @alias("firstName") aliasTest2: string;

    @and andTest0: boolean; // $ExpectError
    @and() andTest1: boolean;
    @and("firstName") andTest2: boolean;
    @and("firstName", "lastName") andTest3: boolean;

    @bool boolTest0: boolean; // $ExpectError
    @bool() boolTest1: boolean; // $ExpectError
    @bool("firstName") boolTest2: boolean;

    @collect collectTest0: any; // $ExpectError
    @collect() collectTest1: any;
    @collect("firstName") collectTest2: any;

    @deprecatingAlias deprecatingAliasTest0: string; // $ExpectError
    @deprecatingAlias() deprecatingAliasTest1: string; // $ExpectError
    @deprecatingAlias("firstName") deprecatingAliasTest2: string;

    @empty emptyTest0: boolean; // $ExpectError
    @empty() emptyTest1: boolean; // $ExpectError
    @empty("firstName") emptyTest2: boolean;

    @equal equalTest0: boolean; // $ExpectError
    @equal() equalTest1: boolean; // $ExpectError
    @equal("firstName") equalTest2: boolean; // $ExpectError
    @equal("firstName", "lastName") equalTest3: boolean;

    @filter filterTest1: string[]; // $ExpectError
    @filter() filterTest2: string[]; // $ExpectError
    @filter("firstName") filterTest3: string[]; // $ExpectError
    @filter("firstName", x => x) filterTest4: string[];
    @filter("firstName", "secondName", x => x) filterTest5: string[]; // $ExpectError
    @filter("firstName", ["secondName"], x => x) filterTest6: string[];

    @filterBy filterByTest1: any[]; // $ExpectError
    @filterBy() filterByTest2: any[]; // $ExpectError
    @filterBy("firstName") filterByTest3: any[]; // $ExpectError
    @filterBy("firstName", "id") filterByTest4: any[];

    @gt gtTest1: boolean; // $ExpectError
    @gt() gtTest2: boolean; // $ExpectError
    @gt("firstName") gtTest3: boolean; // $ExpectError
    @gt("firstName", 3) gtTest4: boolean;

    @gte gteTest1: boolean; // $ExpectError
    @gte() gteTest2: boolean; // $ExpectError
    @gte("firstName") gteTest3: boolean; // $ExpectError
    @gte("firstName", 3) gteTest4: boolean;

    @intersect intersectTest1: any; // $ExpectError
    @intersect() intersectTest2: any;
    @intersect("firstName") intersectTest3: any;
    @intersect("firstName", "lastName") intersectTest4: any;

    @lt ltTest1: boolean; // $ExpectError
    @lt() ltTest2: boolean; // $ExpectError
    @lt("firstName") ltTest3: boolean; // $ExpectError
    @lt("firstName", 3) ltTest4: boolean;

    @lte lteTest1: boolean; // $ExpectError
    @lte() lteTest2: boolean; // $ExpectError
    @lte("firstName") lteTest3: boolean; // $ExpectError
    @lte("firstName", 3) lteTest4: boolean;

    @map mapTest1: string[]; // $ExpectError
    @map() mapTest2: string[]; // $ExpectError
    @map("firstName") mapTest3: string[]; // $ExpectError
    @map("firstName", x => x) mapTest4: string[];

    @mapBy mapByTest1: any[]; // $ExpectError
    @mapBy() mapByTest2: any[]; // $ExpectError
    @mapBy("firstName") mapByTest3: any[]; // $ExpectError
    @mapBy("firstName", "id") mapByTest4: any[];

    @match matchTest1: boolean; // $ExpectError
    @match() matchTest2: boolean; // $ExpectError
    @match("firstName") matchTest3: boolean; // $ExpectError
    @match("firstName", "abc") matchTest4: boolean; // $ExpectError
    @match("firstName", /\s+/) matchTest5: boolean;

    @max maxTest1: number; // $ExpectError
    @max() maxTest2: number; // $ExpectError
    @max("values") maxTest3: number;
    @max("values", "a") maxTest4: number; // $ExpectError

    @min minTest1: number; // $ExpectError
    @min() minTest2: number; // $ExpectError
    @min("values") minTest3: number;
    @min("values", "a") minTest4: number; // $ExpectError

    @none noneTest1: number; // $ExpectError
    @none() noneTest2: number; // $ExpectError
    @none("values") noneTest3: number;
    @none("values", "a") noneTest4: number; // $ExpectError

    @not notTest1: number; // $ExpectError
    @not() notTest2: number; // $ExpectError
    @not("values") notTest3: number;
    @not("values", "a") notTest4: number; // $ExpectError

    @notEmpty notEmptyTest1: boolean; // $ExpectError
    @notEmpty() notEmptyTest2: boolean; // $ExpectError
    @notEmpty("firstName") notEmptyTest3: boolean;
    @notEmpty("firstName", "a") notEmptyTest4: boolean; // $ExpectError

    @oneWay oneWayTest1: boolean; // $ExpectError
    @oneWay() oneWayTest2: boolean; // $ExpectError
    @oneWay("firstName") oneWayTest3: boolean;
    @oneWay("firstName", "b") oneWayTest4: boolean; // $ExpectError

    @or orTest1: boolean; // $ExpectError
    @or() orTest2: boolean;
    @or("firstName") orTest3: boolean;
    @or("firstName", "lastName") orTest4: boolean;

    @readOnly readOnlyTest1: boolean; // $ExpectError
    @readOnly() readOnlyTest2: boolean; // $ExpectError
    @readOnly("firstName") readOnlyTest3: boolean;

    @reads readsTest1: boolean; // $ExpectError
    @reads() readsTest2: boolean; // $ExpectError
    @reads("firstName") readsTest3: boolean;
    @reads("firstName", "a") readsTest4: boolean; // $ExpectError

    @setDiff setDiffTest1: number; // $ExpectError
    @setDiff() setDiffTest2: number; // $ExpectError
    @setDiff("values") setDiffTest3: number; // $ExpectError
    @setDiff("values", "otherThing") setDiffTest4: number;
    @setDiff("values", "otherThing", "a") setDiffTest5: number; // $ExpectError

    @sort sortTest1: number; // $ExpectError
    @sort() sortTest2: number; // $ExpectError
    @sort("values") sortTest3: number; // $ExpectError
    @sort("values", "id") sortTest4: number;
    @sort("values", "id", "a") sortTest5: number; // $ExpectError
    @sort("values", (a, b) => a - b) sortTest6: number;
    @sort("values", ["id"], (a, b) => a - b) sortTest7: number;
    @sort("values", "id", (a, b) => a - b) sortTest8: number; // $ExpectError
    @sort(["id"], (a, b) => a - b) sortTest9: number; // $ExpectError

    @sum sumTest1: number; // $ExpectError
    @sum() sumTest2: number; // $ExpectError
    @sum("values") sumTest3: number;

    @union unionTest1: any; // $ExpectError
    @union() unionTest2: any;
    @union("firstName") unionTest3: any;
    @union("firstName", "lastName") unionTest4: any;

    @uniq uniqTest1: number; // $ExpectError
    @uniq() uniqTest2: number; // $ExpectError
    @uniq("values") uniqTest3: number;

    @uniqBy uniqByTest1: number; // $ExpectError
    @uniqBy() uniqByTest2: number; // $ExpectError
    @uniqBy("values") uniqByTest3: number; // $ExpectError
    @uniqBy("values", "id") uniqByTest4: number;
}
