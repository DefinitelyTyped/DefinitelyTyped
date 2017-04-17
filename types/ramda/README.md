## Type definitions for [Ramda](https://github.com/ramda/ramda)

[![Build Status](https://travis-ci.org/types/npm-ramda.svg?branch=master)](https://travis-ci.org/types/npm-ramda)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/donnut/typescript-ramda)

## Status

Typing compatible with ramda version 0.23.0.

***Note***: many of the functions in Ramda are still hard to properly type in Ramda, with issues mainly centered around partial application, currying, and composition, especially so in the presence of generics. And yes, those are probably why you'd be using Ramda in the first place, making these issues particularly problematic to type Ramda for TypeScript. A few links to issues at TS can be found [below](#Roadmap).

## Usage

Install the typings for node using:
```bash
npm install types/npm-ramda --saveDev
```
If you use the package through a script tag, install with the `--global` flag instead.

## Testing:
```
# check using `typings-checker` (recommended):
npm run types

# compile errors only (doesn't prevent `any`, and can give false positives for bits that should error):
npm test
# without npm (useful on Windows):
node ./node_modules/typescript/bin/tsc --lib es2015 --module commonjs tests/test.ts --noEmit
```

## FAQ

> Why are the typings here not carbon copies of the ones in the Ramda docs?
- There are some differences, among which TypeScript's syntax, though the goal differs here as well: while the Ramda docs aim to explain the functions, the goal here is to accurately infer types within TypeScript.

## Note on placeholders
Due to incompatiblity problems with typescript's typing system, Ramda's placeholder
typing is removed. For binary functions the same functionally can be achieved using
`R.flip`. For example:

```typescript
// using a placeholder ...
R.subtract(R.__, 3);
// ... is the same as
R.flip(R.subtract)(3);
```

In Ramda almost all functions are curried. TypeScript does not natively support
currying, so in cases where we've omitted a combination this might break.
Example of a potential gap:
```typescript
R.insert(2, 'x', [1,2,3,4])
R.insert(2)('x', [1,2,3,4])
R.insert(2, 'x')([1,2,3,4])
R.insert(2)('x')([1,2,3,4]) // => type error!
```

## Contributing

Pull requests are welcome!
If you'd like to help out, two good places to start are the [issues](https://github.com/types/npm-ramda/issues)
as well as the [failed tests](https://github.com/types/npm-ramda/blob/master/tests/test.ts.out).

Do note that quite some of the typings are now being generated (manually) using the
[scripts](https://github.com/types/npm-ramda/blob/master/scripts.js),
as the typings are gradually getting out of hand to manually defined in the
[typings file](https://github.com/types/npm-ramda/blob/master/index.d.ts).

## Roadmap

High-level to-do to address recurring issues:
- `pipe` / `compose`:
  - ~~using optional generics so as to allow annotating input parameter type(s)?~~
  - [`gcnew/TypeScript#polyFuncUnification`](https://github.com/Microsoft/TypeScript/issues/9949#issuecomment-271926278)?
- tuple `map`:
  - ~~[`Return`](https://github.com/Microsoft/TypeScript/issues/6606#issuecomment-284215602)~~
- fix curry type degeneration with generics
- `genCurried`: track generics' dependencies
- consider [dts-dom](https://github.com/RyanCavanaugh/dts-dom) as a codegen alternative
