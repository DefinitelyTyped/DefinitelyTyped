# @types/ramda

## Contributing

`ramda` is a popular library with a plethora of functions that can be mixed and matched in thousands of ways. Because of this, it can be a challenge to make changes to its types without breaking something. While sometimes breaking-changes are appropriate, we hope to keep them to a minimum.

**Please read this guide in its entirety.** Doing so helps ensure that the only breaking changes will be those that bring `@types/ramda` closer to representing the behavior of the underlying `ramda` package.

### Adding a new entry

When a new function has been published by ramda

- Add the function type to `index.d.ts`
- Add documentation for it, copied from ramda's website
- Add your entry import/re-export in `es` & `src` folders
- Add `es/<function>` & `src/<function>` to `OTHER_FILES.txt`
- Write some tests by following the instructions below

### Tests

Tests are located in the `test/` directory. Each ramda function has its own test file, named `<function>-tests.ts`. When editing types for a function, please update the corresponding tests to prove that the behavior you seek actually works. When adding a new function, add a corresponding test file with as many tests as you can to detail the function's behavior.

As a rule, the goal of each test file is to prove that the corresponding function's input and output types are correct. As such, each test file should only test its corresponding function as the top-most call.

For instance, the following:

```ts
R.pipe(
  R.add(2),
  R.add(3),
  R.add(4),
);
```

tests `R.pipe`, _not_ `R.add`. So it belongs in `test/pipe-tests.ts` rather than `test/map-tests.ts`.

Use [`$ExpectType`](https://github.com/microsoft/dtslint/blob/43859c39/README.md#write-tests) comments to test that a function returns the correct type:

```ts
// $ExpectType string[]
R.map((n: number) => n.toString(), [1, 2, 3]);
```

Use [`$ExpectError`](https://github.com/microsoft/dtslint/blob/43859c39/README.md#write-tests) comments to test that using a function a certain way should result in a compiler error:

```ts
// $ExpectError
R.map((n: number) => n.toString(), ['1', '2', '3']);
```
