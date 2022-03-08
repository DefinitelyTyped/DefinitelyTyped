import * as R from 'ramda';

() => {
  const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('age', R.add(1), person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('pets', R.append('turtle'), person); // => {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('age', R.add(1))(person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('age')(a => a + 1, person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "age"> & Record<"age", string>
  R.modify('age')(a => a + '1', person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('age')((a: number) => a + 1)(person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "age"> & Record<"age", string>
  R.modify('age')((a: number) => a + '1')(person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('pets')(R.append('turtle'), person); // => {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('pets')(R.append('turtle'))(person); // => {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('age', (a) => a + 1, person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType Omit<{ name: string; age: number; pets: string[]; }, "age"> & Record<"age", string>
  R.modify('age', (a) => a + '1', person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectType { name: string; age: number; pets: string[]; }
  R.modify('age')((a) => a + 1, person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}
  // $ExpectError
  R.modify('age')((a: string) => a + 1)(person); // => {name: 'James', age: 21, pets: ['dog', 'cat']}

  // $ExpectType Omit<{ foo: readonly [1, 2]; }, "foo"> & Record<"foo", readonly [1, 2, 3]>
  R.modify('foo', (arr: [1, 2]) => [...arr, 3] as const, {foo: [1, 2] as const});
  // R.modify('foo', <T extends any[]>(arr: T): [...T, 3] => [...arr, 3], {foo:[1, 2] as const});
};
