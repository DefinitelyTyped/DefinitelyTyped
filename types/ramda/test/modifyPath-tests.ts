import * as R from 'ramda';

() => {
  const person = {name: 'James', address: { zipCode: '90216' }};
  // $ExpectType Omit<{ name: string; address: { zipCode: string; }; }, "address"> & Record<"address", Omit<{ zipCode: string; }, "zipCode">> & Record<"address", Record<"zipCode", string>>
  R.modifyPath(['address', 'zipCode'], R.reverse, person); // => {name: 'James', address: { zipCode: '61209' }}

  const person2 = {name: 'James', addresses: [{ zipCode: '90216' }]};
  // tslint:disable:max-line-length
  // $ExpectType Omit<{ name: string; addresses: { zipCode: string; }[]; }, "addresses"> & Record<"addresses", Omit<{ zipCode: string; }[], 0> & Record<0, Omit<{ zipCode: string; }, "zipCode">>> & Record<"addresses", Record<"zipCode", string>[]>
  R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person2); // => {name: 'James', addresses: [{ zipCode: '61209' }]}

  // tslint:disable:no-object-literal-type-assertion
  // $ExpectType Omit<{ readonly foo: { readonly bar: { readonly baz: readonly [1, 2]; readonly quux: "test"; }; }; readonly bar: "test2"; }, "foo"> & Record<"foo", Omit<{ readonly bar: { readonly baz: readonly [1, 2]; readonly quux: "test"; }; }, "bar"> & Record<"bar", Omit<{ readonly baz: readonly [1, 2]; readonly quux: "test"; }, "baz">>> & Record<"foo", Record<"bar", Record<"baz", readonly [1, 2, 3]>>>
  R.modifyPath(['foo', 'bar', 'baz'], (arr: [1, 2]) => [...arr, 3] as const, {foo: {bar: {baz: [1, 2], quux: 'test'}}, bar: 'test2'} as const);
  // R.modifyPath(['foo', 'bar', 'baz'], <T extends any[]>(arr: T): [...T, 3] => [...arr, 3], {foo: {bar: {baz: [1, 2], quux: 'test'}}, bar: 'test2'} as const);
  // tslint:enable:no-object-literal-type-assertion
  // tslint:enable:max-line-length
};
