import * as R from 'ramda';

() => {
  const person = {name: 'James', address: { zipCode: '90216' }};
  // $ExpectType { name: string; address: { zipCode: string; }; }
  R.modifyPath(['address', 'zipCode'], R.reverse, person); // => {name: 'James', address: { zipCode: '61209' }}
  const person2 = {name: 'James', addresses: [{ zipCode: '90216' }]};
  // tslint:disable:max-line-length
  // $ExpectType { name: string; addresses: { zipCode: string; }[]; }
  R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person2); // => {name: 'James', addresses: [{ zipCode: '61209' }]}
  const person3 = {name: 'James', addresses: [{ zipCode: 90216 }]};
  // $ExpectType { name: string; addresses: { zipCode: number; }[]; }
  R.modifyPath(['addresses', 0, 'zipCode'], (a) => a + 1, person3); // => {name: 'James', addresses: [{ zipCode: 90217 }]}
  // $ExpectType Omit<{ name: string; addresses: { zipCode: number; }[]; }, "addresses"> & Record<"addresses", Omit<{ zipCode: number; }[], 0> & Record<0, Omit<{ zipCode: number; }, "zipCode">>> & Record<"addresses", Record<"zipCode", string>[]>
  R.modifyPath(['addresses', 0, 'zipCode'], (a) => a + '1', person3); // => {name: 'James', addresses: [{ zipCode: '902161' }]}
  // $ExpectType { name: string; addresses: { zipCode: number; }[]; }
  R.modifyPath(['addresses', 0, 'zipCode'], (a: number) => a + 1)(person3); // => {name: 'James', addresses: [{ zipCode: 90217 }]}
  // $ExpectType Omit<{ name: string; addresses: { zipCode: number; }[]; }, "addresses"> & Record<"addresses", Omit<{ zipCode: number; }[], 0> & Record<0, Omit<{ zipCode: number; }, "zipCode">>> & Record<"addresses", Record<"zipCode", string>[]>
  R.modifyPath(['addresses', 0, 'zipCode'], (a: number) => a + '1')(person3); // => {name: 'James', addresses: [{ zipCode: '902161' }]}
  // $ExpectType { name: string; addresses: { zipCode: number; }[]; }
  R.modifyPath(['addresses', 0, 'zipCode'])((a) => a + 1, person3); // => {name: 'James', addresses: [{ zipCode: 90217 }]}
  // $ExpectType Omit<{ name: string; addresses: { zipCode: number; }[]; }, "addresses"> & Record<"addresses", Omit<{ zipCode: number; }[], 0> & Record<0, Omit<{ zipCode: number; }, "zipCode">>> & Record<"addresses", Record<"zipCode", string>[]>
  R.modifyPath(['addresses', 0, 'zipCode'])((a) => a + '1', person3); // => {name: 'James', addresses: [{ zipCode: '902161' }]}
  // $ExpectType { name: string; addresses: { zipCode: number; }[]; }
  R.modifyPath(['addresses', 0, 'zipCode'])((a: number) => a + 1)(person3); // => {name: 'James', addresses: [{ zipCode: 90217 }]}
  // $ExpectType Omit<{ name: string; addresses: { zipCode: number; }[]; }, "addresses"> & Record<"addresses", Omit<{ zipCode: number; }[], 0> & Record<0, Omit<{ zipCode: number; }, "zipCode">>> & Record<"addresses", Record<"zipCode", string>[]>
  R.modifyPath(['addresses', 0, 'zipCode'])((a: number) => a + '1')(person3); // => {name: 'James', addresses: [{ zipCode: '902161' }]}
  // $ExpectError
  R.modifyPath(['addresses', 0, 'zipCode'])((a: string) => a + 1)(person3);

  // tslint:disable:no-object-literal-type-assertion
  // $ExpectType Omit<{ readonly foo: { readonly bar: { readonly baz: readonly [1, 2]; readonly quux: "test"; }; }; readonly bar: "test2"; }, "foo"> & Record<"foo", Omit<{ readonly bar: { readonly baz: readonly [1, 2]; readonly quux: "test"; }; }, "bar"> & Record<"bar", Omit<{ readonly baz: readonly [1, 2]; readonly quux: "test"; }, "baz">>> & Record<"foo", Record<"bar", Record<"baz", readonly [1, 2, 3]>>>
  R.modifyPath(['foo', 'bar', 'baz'], (arr: [1, 2]) => [...arr, 3] as const, {foo: {bar: {baz: [1, 2], quux: 'test'}}, bar: 'test2'} as const);
  // R.modifyPath(['foo', 'bar', 'baz'], <T extends any[]>(arr: T): [...T, 3] => [...arr, 3], {foo: {bar: {baz: [1, 2], quux: 'test'}}, bar: 'test2'} as const);
  // tslint:enable:no-object-literal-type-assertion
  // tslint:enable:max-line-length
};
