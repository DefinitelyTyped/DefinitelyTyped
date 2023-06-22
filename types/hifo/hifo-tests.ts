import hifo = require('hifo');

// test type exports
type Hif = hifo.Hifo<unknown>;
type CompFn = hifo.CompareFn<unknown>;
type ObjKey = hifo.ObjectKey;
type ObjWithNumericValue = hifo.ObjectWithNumericValue<'foo'>;

interface Person {
    name: string;
    age: number;
    id: number;
}
const people = [
    { name: 'Alice', age: 23, id: 1 },
    { name: 'Eve', age: 45, id: 2 },
    { name: 'Jane', age: 19, id: 3 },
    { name: 'Bob', age: 30, id: 4 },
    { name: 'John', age: 60, id: 5 },
];

hifo.lowest(); // $ExpectType CompareFn<number>
hifo.lowest('age'); // $ExpectType CompareFn<ObjectWithNumericValue<"age">>
hifo.lowest('age', 'id'); // $ExpectType CompareFn<ObjectWithNumericValue<"age" | "id">>

hifo.highest(); // $ExpectType CompareFn<number>
const highestByAge = hifo.highest('age'); // $ExpectType CompareFn<ObjectWithNumericValue<"age">>
const highestByAgeAndId = hifo.highest('age', 'id'); // $ExpectType CompareFn<ObjectWithNumericValue<"age" | "id">>

const highestNum = hifo(hifo.highest()); // $ExpectType Hifo<number>
hifo(hifo.highest(), 3); // $ExpectType Hifo<number>
highestNum.add(1);
const oldest = hifo<Person>(highestByAge, 3); // $ExpectType Hifo<Person>
oldest.add(people[0]);
const oldestObjAge = hifo(highestByAge, 3); // $ExpectType Hifo<ObjectWithNumericValue<"age">>
oldestObjAge.add(people[0]);
hifo<Person>(highestByAgeAndId, 3); // $ExpectType Hifo<Person>
const oldestObjAgeId = hifo(highestByAgeAndId, 3); // $ExpectType Hifo<ObjectWithNumericValue<"age" | "id">>
oldestObjAgeId.add(people[0]);
hifo<Person>(hifo.highest('age', 'id'), 3); // $ExpectType Hifo<Person>
hifo(hifo.highest('age', 'id'), 3); // $ExpectType Hifo<ObjectWithNumericValue<"age" | "id">>
hifo((left: { foo: string }, right: { foo: string }) => left.foo.length - right.foo.length); // $ExpectType Hifo<{ foo: string; }>

// @ts-expect-error
hifo<Person>(hifo.highest('name'), 3); // $ExpectType Hifo<Person>
const oldestName = hifo(hifo.highest('name'), 3); // $ExpectType Hifo<ObjectWithNumericValue<"name">>
// @ts-expect-error
oldestName.add(people[0]);
// @ts-expect-error
hifo<Person>(hifo.highest('age', 'name'), 3); // $ExpectType Hifo<Person>
const oldestAgeName = hifo(hifo.highest('age', 'name'), 3); // $ExpectType Hifo<ObjectWithNumericValue<"age" | "name">>
// @ts-expect-error
oldestAgeName.add(people[0]);

highestNum.size; // $ExpectType number
highestNum.data; // $ExpectType readonly number[]
highestNum.init(hifo.lowest()); // $ExpectType Hifo<number>
highestNum.init(hifo.lowest(), 3); // $ExpectType Hifo<number>
highestNum.sort; // $ExpectType CompareFn<number>
highestNum.add(1); // $ExpectType Hifo<number>
highestNum.insert(1); // $ExpectType number
highestNum.reset(); // $ExpectType Hifo<number>

oldest.size; // $ExpectType number
oldest.data; // $ExpectType readonly Person[]
oldest.init(hifo.lowest('age')); // $ExpectType Hifo<Person>
oldest.init(hifo.lowest('age'), 3); // $ExpectType Hifo<Person>
oldest.sort; // $ExpectType CompareFn<Person>
oldest.add(people[0]); // $ExpectType Hifo<Person>
oldest.insert(people[0]); // $ExpectType number
oldest.reset(); // $ExpectType Hifo<Person>

hifo.Hifo; // $ExpectType Hifo<unknown>
