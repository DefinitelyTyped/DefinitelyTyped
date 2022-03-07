import * as R from 'ramda';

() => {
  const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "age"> & Record<"age", number>
  R.modify('age', R.add(1), person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "pets"> & Record<"pets", string[]>
  R.modify('pets', R.append('turtle'), person); // => {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "age"> & Record<"age", number>
  R.modify('age', R.add(1))(person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "pets"> & Record<"pets", string[]>
  R.modify('pets')(R.append('turtle'), person); // => {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}

  // $ExpectType Omit<{ foo: readonly [1, 2]; }, "foo"> & Record<"foo", readonly [1, 2, 3]>
  R.modify('foo', (arr: [1, 2]) => [...arr, 3] as const, {foo: [1, 2] as const});
  // R.modify('foo', <T extends any[]>(arr: T): [...T, 3] => [...arr, 3], {foo:[1, 2] as const});
};
