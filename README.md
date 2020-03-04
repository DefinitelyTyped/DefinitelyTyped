# DefinitelyTyped

> The repository for *high quality* TypeScript type definitions.

*You can also read this README in [Spanish](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [Korean](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md), [Russian](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), and [Chinese](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md)!*

*Link to [Admin manual](./docs/admin.md)*

## Table of Contents

* [Current status](#current-status)
* [How can I contribute?](#how-can-i-contribute)
    * [Test](#test)
    * [Make a pull request](#make-a-pull-request)
        * [Edit an existing package](#edit-an-existing-package)
        * [Create a new package](#create-a-new-package)
        * [Common mistakes](#common-mistakes)
        * [Removing a package](#removing-a-package)
        * [Linter](#linter)
        * [Verifying](#verifying)
* [FAQ](#faq)

## Current status

This section tracks the health of the repository and publishing process.
It may be helpful for contributors experiencing any issues with their PRs and packages.

* Most recent build [type-checked/linted](https://github.com/Microsoft/dtslint) cleanly: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* All packages are type-checking/linting cleanly on typescript@next: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.dtslint-runner?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=2&branchName=master)
* All packages are being [published to npm](https://github.com/microsoft/types-publisher) in under an hour: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) has been active on DefinitelyTyped [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)

If anything here seems wrong, or any of the above are failing, please raise an issue in [the DefinitelyTyped Gitter channel](https://gitter.im/DefinitelyTyped/DefinitelyTyped).

[![Join the chat at https://gitter.im/DefinitelyTyped/DefinitelyTyped](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/DefinitelyTyped/DefinitelyTyped?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## How do I get them?

### npm

This is the preferred method. For example:

```sh
npm install --save-dev @types/node
```

The types should then be automatically included by the compiler.
You may need to add a `types` reference if you're not using modules:

```ts
/// <reference types="node" />
```

See more in the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

For an NPM package "foo", typings for it will be at "@types/foo".
If you can't find your package, look for it on [TypeSearch](https://microsoft.github.io/TypeSearch/).

If you still can't find it, check if it [bundles](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own typings.
This is usually provided in a `"types"` or `"typings"` field in the `package.json`,
or just look for any ".d.ts" files in the package and manually include them with a `/// <reference path="" />`.

#### Typescript 2.7 and earlier

Definitely Typed only tests packages on Typescript 2.8 and later as of November 2019.
If you're using Typescript 2.0 to 2.7, you can still try installing `@types` packages &mdash; the majority of packages don't use fancy new Typescript features.
But there's no guarantee that they'll work.
Packages that existed before November 2019 may have older versions that are explicitly marked compatible with older versions of Typescript; use the tag "ts2.6" for Typescript 2.6, for example.

For example, if you run `npm dist-tags @types/react`, you'll see the following table that shows that react@16.4 has types for Typescript 2.6:

|Tag | Version|
|----|---------|
|latest| 16.9.11|
|ts2.0| 15.0.1|
| ... | ... |
|ts2.6| 16.4.7|
| ... | ... |


### Typescript 1.8 and earlier

* Manually download from the `master` branch of this repository and place them in your project
* ~~[Typings](https://github.com/typings/typings)~~ (use preferred alternatives, typings is deprecated)
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (use preferred alternatives, nuget DT type publishing has been turned off)

You may need to add manual [references](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## How can I contribute?

Definitely Typed only works because of contributions by users like you!

### Test

Before you share your improvement with the world, use it yourself.

#### Test editing an existing package

To add new features you can use [module augmentation](http://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation).
You can also directly edit the types in `node_modules/@types/foo/index.d.ts`, or copy them from there and follow the steps below.


#### Test a new package

Add to your `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(You can also use `src/types`.)
Create `types/foo/index.d.ts` containing declarations for the module "foo".
You should now be able to import from `"foo"` in your code and it will route to the new type definition.
Then build *and* run the code to make sure your type definition actually corresponds to what happens at runtime.
Once you've tested your definitions with real code, make a [PR](#make-a-pull-request)
then follow the instructions to [edit an existing package](#edit-an-existing-package) or
[create a new package](#create-a-new-package).


### Make a pull request

Once you've tested your package, you can share it on Definitely Typed.

First, [fork](https://guides.github.com/activities/forking/) this repository, install [node](https://nodejs.org/), and run `npm install`.


#### Edit an existing package

* `cd types/my-package-to-edit`
* Make changes. Remember to edit tests.
  If you make breaking changes, do not forget to [update a major version](#if-a-library-is-updated-to-a-new-major-version-with-breaking-changes-how-should-i-update-its-type-declaration-package).
* You may also want to add yourself to "Definitions by" section of the package header.
  - This will cause you to be notified (via your GitHub username) whenever someone makes a pull request or issue about the package.
  - Do this by adding your name to the end of the line, as in `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
  - Or if there are more people, it can be multiline
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
* If there is a `tslint.json`, run `npm run lint package-name`. Otherwise, run `tsc` in the package directory.

When you make a PR to edit an existing package, `dt-bot` should @-mention previous authors.
If it doesn't, you can do so yourself in the comment associated with the PR.


#### Create a new package

If you are the library author and your package is written in TypeScript, [bundle the autogenerated declaration files](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) in your package instead of publishing to Definitely Typed.

If you are adding typings for an NPM package, create a directory with the same name.
If the package you are adding typings for is not on NPM, make sure the name you choose for it does not conflict with the name of a package on NPM.
(You can use `npm info foo` to check for the existence of the `foo` package.)

Your package should have this structure:

| File | Purpose |
| --- | --- |
| index.d.ts | This contains the typings for the package. |
| foo-tests.ts | This contains sample code which tests the typings. This code does *not* run, but it is type-checked. |
| tsconfig.json | This allows you to run `tsc` within the package. |
| tslint.json | Enables linting. |

Generate these by running `npx dts-gen --dt --name my-package-name --template module` if you have npm ≥ 5.2.0, `npm install -g dts-gen` and `dts-gen --dt --name my-package-name --template module` otherwise.
See all options at [dts-gen](https://github.com/Microsoft/dts-gen).

You may edit the `tsconfig.json` to add new test files, to add `"target": "es6"` (needed for async functions), to add to `"lib"`, or to add the `"jsx"` compiler option. If you have `.d.ts` files besides `index.d.ts`, make sure that they are referenced either in `index.d.ts` or the tests.

If a file is neither tested nor referenced in `index.d.ts`, add it to a file named `OTHER_FILES.txt`. This file is a list of other files that need to be included in the typings package, one file per line.

Definitely Typed members routinely monitor for new PRs, though keep in mind that the number of other PRs may slow things down.

For a good example package, see [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).


#### Common mistakes

* First, follow advice from the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatting: Use 4 spaces. Prettier is set up on this repo, so you can run `npm run prettier -- --write path/to/package/**/*.ts`. [When using assertions](https://github.com/SamVerschueren/tsd#assertions), add `// prettier-ignore` exclusion to mark line(s) of code as excluded from formatting:
    ```tsx
    // prettier-ignore
    const incompleteThemeColorModes: Theme = { colors: { modes: { papaya: { // $ExpectError
    ```
* `function sum(nums: number[]): number`: Use `ReadonlyArray` if a function does not write to its parameters.
* `interface Foo { new(): Foo; }`:
    This defines a type of objects that are new-able. You probably want `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
    Prefer to use a class declaration `class Class { constructor(); }` instead of a new-able constant.
* `getMeAT<T>(): T`:
    If a type parameter does not appear in the types of any parameters, you don't really have a generic function, you just have a disguised type assertion.
    Prefer to use a real type assertion, e.g. `getMeAT() as number`.
    Example where a type parameter is acceptable: `function id<T>(value: T): T;`.
    Example where it is not acceptable: `function parseJson<T>(json: string): T;`.
    Exception: `new Map<string, number>()` is OK.
* Using the types `Function` and `Object` is almost never a good idea. In 99% of cases it's possible to specify a more specific type. Examples are `(x: number) => number` for [functions](http://www.typescriptlang.org/docs/handbook/functions.html#function-types) and `{ x: number, y: number }` for objects. If there is no certainty at all about the type, [`any`](http://www.typescriptlang.org/docs/handbook/basic-types.html#any) is the right choice, not `Object`. If the only known fact about the type is that it's some object, use the type [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), not `Object` or `{ [key: string]: any }`.
* `var foo: string | any`:
    When `any` is used in a union type, the resulting type is still `any`. So while the `string` portion of this type annotation may _look_ useful, it in fact offers no additional typechecking over simply using `any`.
    Depending on the intention, acceptable alternatives could be `any`, `string`, or `string | object`.


#### Removing a package

When a package [bundles](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own types, types should be removed from Definitely Typed to avoid confusion.

You can remove it by running `npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]`.
- `typingsPackageName`: This is the name of the directory to delete.
- `asOfVersion`: A stub will be published to `@types/foo` with this version. Should be higher than any currently published version, and should be a version of `foo` on npm.
- `sourceRepoURL`: This should point to the repository that contains the typings.
- `libraryName`: Name of npm package that replaces the Definitely Typed types. Usually this is identical to "typingsPackageName", in which case you can omit it.

Any other packages in Definitely Typed that referenced the deleted package should be updated to reference the bundled types.
You can get this list by looking at the errors from `npm run test`.
To fix the errors, add a `package.json` with `"dependencies": { "foo": "x.y.z" }`.
For example:

```json
{
  "private": true,
  "dependencies": {
    "foo": "^2.6.0"
  }
}
```

When you add a `package.json` to dependents of `foo`, you will also need to open a PR to add `foo` [to dependenciesWhitelist.txt in types-publisher](https://github.com/Microsoft/types-publisher/blob/master/dependenciesWhitelist.txt).

If a package was never on Definitely Typed, it does not need to be added to `notNeededPackages.json`.

#### Linter

All new packages must be linted. To lint a package, add a `tslint.json` to that package containing
```js
{
    "extends": "dtslint/dt.json"
}
```

This should be the only content in a finished project's `tslint.json` file. If a `tslint.json` turns rules off, this is because that hasn't been fixed yet. For example:

```js
{
    "extends": "dtslint/dt.json",
    "rules": {
        // This package uses the Function type, and it will take effort to fix.
        "ban-types": false
    }
}
```

(To indicate that a lint rule truly does not apply, use `// tslint:disable rule-name` or better, `//tslint:disable-next-line rule-name`.)

To assert that an expression is of a given type, use `$ExpectType`. To assert that an expression causes a compile error, use `$ExpectError`.

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

For more details, see [dtslint](https://github.com/Microsoft/dtslint#write-tests) readme.

## Verifying

Test your changes by running `npm run lint package-name` where `package-name` is the name of your package.

This script uses [dtslint](https://github.com/Microsoft/dtslint) to run the TypeScript compiler against your dts files.


## FAQ

#### What exactly is the relationship between this repository and the `@types` packages on NPM?

The `master` branch is automatically published to the `@types` scope on NPM thanks to [types-publisher](https://github.com/Microsoft/types-publisher).

#### I've submitted a pull request. How long until it is merged?

It depends, but most pull requests will be merged within a week. PRs that have been approved by an author listed in the definition's header are usually merged more quickly; PRs for new definitions will take more time as they require more review from maintainers. Each PR is reviewed by a TypeScript or Definitely Typed team member before being merged, so please be patient as human factors may cause delays. Check the [PR Burndown Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/3?card_filter_query=is%3Aopen) to see progress as maintainers work through the open PRs.

#### My PR is merged; when will the `@types` NPM package be updated?

NPM packages should update within a few minutes. If it's been more than an hour, mention the PR number on [the Definitely Typed Gitter channel](https://gitter.im/DefinitelyTyped/DefinitelyTyped) and the current maintainer will get the correct team member to investigate.

#### I'm writing a definition that depends on another definition. Should I use `<reference types="" />` or an import?

If the module you're referencing is an external module (uses `export`), use an import.
If the module you're referencing is an ambient module (uses `declare module`, or just declares globals), use `<reference types="" />`.

#### I notice some packages having a `package.json` here.

Usually you won't need this.
Definitely Typed's package publisher creates a `package.json` for packages with no dependencies outside Definitely Typed.
A `package.json` may be included to specify dependencies that are not other `@types` packages.
[Pikaday is a good example.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
Even if you write your own `package.json`, you can only specify dependencies; other fields such as `"description"` are not allowed.
You also need to add the dependency to [the list of allowed packages](https://github.com/microsoft/types-publisher/blob/master/dependenciesWhitelist.txt).
This list is updated by a human, which gives us the chance to make sure that `@types` packages don't depend on malicious packages.

In the rare case that an `@types` package is deleted and removed in favor of types shipped by the source package AND you need to depend on the old, removed `@types` package, you can add a dependency on an `@types` package.
Be sure to explain this when adding to the list of allowed packages so that the human maintainer knows what is happening.

#### Some packages have no `tslint.json`, and some `tsconfig.json` are missing `"noImplicitAny": true`, `"noImplicitThis": true`, or `"strictNullChecks": true`.

Then they are wrong. You can help by submitting a pull request to fix them.

#### Can I request a definition?

Here are the [currently requested definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### What about type definitions for the DOM?

If types are part of a web standard, they should be contributed to [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) so that they can become part of the default `lib.dom.d.ts`.

#### Should I add an empty namespace to a package that doesn't export a module to use ES6 style imports?

Some packages, like [chai-http](https://github.com/chaijs/chai-http), export a function.

Importing this module with an ES6 style import in the form `import * as foo from "foo";` leads to the error:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

This error can be suppressed by merging the function declaration with an empty namespace of the same name, but this practice is discouraged.
This is a commonly cited [Stack Overflow answer](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) regarding this matter.

It is more appropriate to import the module using the `import foo = require("foo");` syntax.
Nevertheless, if you want to use a default import like `import foo from "foo";` you have two options:
- you can use the [`--allowSyntheticDefaultImports` compiler option](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) if your module runtime supports an interop scheme for non-ECMAScript modules, i.e. if default imports work in your environment (e.g. Webpack, SystemJS, esm).
- you can use the [`--esModuleInterop` compiler option](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) if you want TypeScript to take care of non-ECMAScript interop (since Typescript 2.7).

#### A package uses `export =`, but I prefer to use default imports. Can I change `export =` to `export default`?

Like in the previous question, refer to using either the [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
or [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
compiler options.

Do not change the type definition if it is accurate.
For an NPM package, `export =` is accurate if `node -p 'require("foo")'` works to import a module, and `export default` is accurate if `node -p 'require("foo").default'` works to import a module.

#### I want to use features from TypeScript 2.9 or above.

Then you will have to add a comment to the last line of your definition header (after `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// TypeScript Version: 2.9`.

#### I want to use features from TypeScript 3.1 or above.

You can use the same `// TypeScript Version: 3.1` comment as above.
However, if your project needs to maintain types that are compatible with 3.1 and above *at the same time as* types that are compatible with 3.0 or below, you will need to use the `typesVersions` feature, which is available in TypeScript 3.1 and above.
You can find a detailed explanation of this feature in the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions).

Here's a short explanation to get you started:

1. You'll have to add a `package.json` file to your package definition, with the following contents:

```json
{
    "private": true,
    "types": "index",
    "typesVersions": {
        ">=3.1.0-0": { "*": ["ts3.1/*"] }
    }
}
```

2. Create the sub-directory mentioned in the `typesVersions` field inside your types directory (`ts3.1/` in this example)
and add the types and tests specific for the new TypeScript version. You don't need the typical definition header
in any of the files from the `ts3.1/` directory.

3. Set the `baseUrl` and `typeRoots` options in `ts3.1/tsconfig.json` to the correct paths, they should look something like this:
```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"]
    }
}
```

You can look [here](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/debounce-promise) and [here](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/create-html-element) for examples.

#### I want to add a DOM API not present in TypeScript by default.

This may belong in [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). See the guidelines there.
If the standard is still a draft, it belongs here.
Use a name beginning with `dom-` and include a link to the standard as the "Project" link in the header.
When it graduates draft mode, we may remove it from Definitely Typed and deprecate the associated `@types` package.

#### How do Definitely Typed package versions relate to versions of the corresponding library?

_NOTE: The discussion in this section assumes familiarity with [Semantic versioning](https://semver.org/)_

Each Definitely Typed package is versioned when published to NPM.
The [types-publisher](https://github.com/Microsoft/types-publisher) (the tool that publishes `@types` packages to npm) will set the declaration package's version by using the `major.minor` version number listed in the first line of its `index.d.ts` file.
For example, here are the first few lines of [Node's type declarations](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/node/index.d.ts) for version `10.12.x` at the time of writing:

```js
// Type definitions for Node.js 10.12
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 Definitely Typed <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
```

Because `10.12` is at the end the first line, the npm version of the `@types/node` package will also be `10.12.x`.
Note that the first-line comment in the `index.d.ts` file should only contain the `major.minor` version (e.g. `10.12`) and should not contain a patch version (e.g. `10.12.4`).
This is because only the major and minor release numbers are aligned between library packages and type declaration packages.
The patch release number of the type declaration package (e.g. `.0` in `10.12.0`) is initialized to zero by Definitely Typed and is incremented each time a new `@types/node` package is published to NPM for the same major/minor version of the corresponding library.

Sometimes type declaration package versions and library package versions can get out of sync.
Below are a few common reasons why, in order of how much they inconvenience users of a library.
Only the last case is typically problematic.

* As noted above, the patch version of the type declaration package is unrelated to the library patch version.
  This allows Definitely Typed to safely update type declarations for the same major/minor version of a library.
* If updating a package for new functionality, don't forget to update the version number to line up with that version of the library.
  If users make sure versions correspond between JavaScript packages and their respective `@types` packages, then `npm update` should typically just work.
* It's common for type declaration package updates to lag behind library updates because it's often library users, not maintainers, who update Definitely Typed when new library features are released.
  So there may be a lag of days, weeks, or even months before a helpful community member sends a PR to update the type declaration package for a new library release.
  If you're impacted by this, you can be the change you want to see in the world and you can be that helpful community member!

:exclamation: If you're updating type declarations for a library, always set the `major.minor` version in the first line of `index.d.ts` to match the library version that you're documenting! :exclamation:

#### If a library is updated to a new major version with breaking changes, how should I update its type declaration package?

[Semantic versioning](https://semver.org/) requires that versions with breaking changes must increment the major version number.
For example, a library that removes a publicly exported function after its `3.5.8` release must bump its version to `4.0.0` in its next release.
Furthermore, when the library's `4.0.0` release is out, its Definitely Typed type declaration package should also be updated to `4.0.0`, including any breaking changes to the library's API.

Many libraries have a large installed base of developers (including maintainers of other packages using that library as a dependency) who won't move right away to a new version that has breaking changes, because it might be months until a maintainer has time to rewrite code to adapt to the new version.
In the meantime, users of old library versions still may want to update type declarations for older versions.

If you intend to continue updating the older version of a library's type declarations, you may create a new subfolder (e.g. `/v2/`) named for the current (soon to be "old") version, and copy existing files from the current version to it.

Because the root folder should always contain the type declarations for the latest ("new") version, you'll need to make a few changes to the files in your old-version subdirectory to ensure that relative path references point to the subdirectory, not the root.

1. Update the relative paths in `tsconfig.json` as well as `tslint.json`.
2. Add path mapping rules to ensure that tests are running against the intended version.

For example, the [`history`](https://github.com/ReactTraining/history/) library introduced breaking changes between version `2.x` and `3.x`.
Because many users still consumed the older `2.x` version, a maintainer who wanted to update the type declarations for this library to `3.x` added a `v2` folder inside the history repository that contains type declarations for the older version.
At the time of writing, the [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1253faabf5e0d2c5470db6ea87795d7f96fef7e2/types/history/v2/tsconfig.json) looks roughly like:

```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"],
        "paths": {
            "history": [ "history/v2" ]
        },
    },
    "files": [
        "index.d.ts",
        "history-tests.ts"
    ]
}
```

If there are other packages in Definitely Typed that are incompatible with the new version, you will need to add path mappings to the old version.
You will also need to do this recursively for packages depending on packages depending on the old version.

For example, `react-router` depends on `history@2`, so [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/v2/tsconfig.json) has a path mapping to `"history": [ "history/v2" ]`.
Transitively, `react-router-bootstrap` (which depends on `react-router`) also needed to add the same path mapping (`"history": [ "history/v2" ]`) in its `tsconfig.json` until its `react-router` dependency was updated to the latest version.

Also, `/// <reference types=".." />` will not work with path mapping, so dependencies must use `import`.

#### How do I write definitions for packages that can be used globally and as a module?

The TypeScript handbook contains excellent [general information about writing definitions](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), and also [this example definition file](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) which shows how to create a definition using ES6-style module syntax, while also specifying objects made available to the global scope.  This technique is demonstrated practically in the [definition for big.js](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), which is a library that can be loaded globally via script tag on a web page, or imported via require or ES6-style imports.

To test how your definition can be used both when referenced globally or as an imported module, create a `test` folder, and place two test files in there.  Name one `YourLibraryName-global.test.ts` and the other `YourLibraryName-module.test.ts`.  The *global* test file should exercise the definition according to how it would be used in a script loaded on a web page where the library is available on the global scope - in this scenario you should not specify an import statement.  The *module* test file should exercise the definition according to how it would be used when imported (including the `import` statement(s)).  If you specify a `files` property in your `tsconfig.json` file, be sure to include both test files.  A [practical example of this](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) is also available on the big.js definition.

Please note that it is not required to fully exercise the definition in each test file - it is sufficient to test only the globally-accessible elements on the global test file and fully exercise the definition in the module test file, or vice versa.

#### What about scoped packages?

Types for a scoped package `@foo/bar` should go in `types/foo__bar`. Note the double underscore.

When `dts-gen` is used to scaffold a scoped package, the `paths` property has to be manually adapted in the generated
`tsconfig.json` to correctly reference the scoped package:

```json
{
    "paths":{
      "@foo/bar": ["foo__bar"]
    }
}
```


#### The file history in GitHub looks incomplete.

GitHub doesn't [support](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) file history for renamed files. Use [`git log --follow`](https://www.git-scm.com/docs/git-log) instead.

## License

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.
