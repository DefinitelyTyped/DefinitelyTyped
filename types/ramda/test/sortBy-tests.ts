import * as R from 'ramda';

interface Person {
    name: string;
    age: number;
}

() => {
    // $ExpectType (list: readonly Person[]) => Person[]
    const sortByAgeDescending = R.sortBy<Person>(({ age }) => -age);

    const alice = {
        name: 'ALICE',
        age: 101,
    };
    const bob = {
        name: 'Bob',
        age: -10,
    };
    const clara = {
        name: 'clara',
        age: 314.159,
    };
    const people = [clara, bob, alice];
    sortByAgeDescending(people); // => [alice, bob, clara]
};

() => {
    // $ExpectType (list: readonly Person[]) => Person[]
    const sortByNameCaseInsensitive = R.sortBy<Person>(({ name }) => name.toLowerCase());
    const alice = {
        name: 'ALICE',
        age: 101,
    };
    const bob = {
        name: 'Bob',
        age: -10,
    };
    const clara = {
        name: 'clara',
        age: 314.159,
    };
    const people = [clara, bob, alice];
    sortByNameCaseInsensitive(people); // => [alice, bob, clara]
};

() => {
    interface Obj {
        value: number;
    }
    const f = R.pipe(R.sortBy<Obj>(x => x.value));

    const result = f([{ value: 1 }, { value: 2 }]);

    // $ExpectType Obj[]
    result;
};
