# DefinitelyTyped [![Build Status](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.svg?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

[![Join the chat at https://gitter.im/borisyankov/DefinitelyTyped](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/borisyankov/DefinitelyTyped?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> The repository for *high quality* TypeScript type definitions.

Also see the [definitelytyped.org](http://definitelytyped.org) website, although information in this README is more up-to-date.


## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## How do I get them?

### npm

This is the preferred method. This is only available for TypeScript 2.0+ users. For example:

```sh
npm install --save-dev @types/node
```

The types should then be automatically included by the compiler.
See more in the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

For an NPM package "foo", typings for it will be at "@types/foo".
If you can't find your package, look for it on [TypeSearch](https://microsoft.github.io/TypeSearch/).

If you still can't find it, check if it [bundles](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own typings.
This is usually provided in a `"types"` or `"typings"` field in the `package.json`,
or just look for any ".d.ts" files in the package and manually include them with a `/// <reference path="" />`.


### Other methods

These can be used by TypeScript 1.0.

* [Typings](https://github.com/typings/typings)
* ~~[NuGet](http://nuget.org/Tpackages?q=DefinitelyTyped)~~ (use preferred alternatives, nuget DT type publishing has been turned off)
* Manually download from the `master` branch of this repository

You may need to add manual [references](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).


## How can I contribute?

DefinitelyTyped only works because of contributions by users like you!

### Test

Before you share your improvement with the world, use it yourself.

#### Test editing an existing package

To add new features you can use [module augmentation](http://www.typescriptlang.org/docs/handbook/declaration-merging.html).
You can also directly edit the types in `node_modules/@types/foo/index.d.ts`, or copy them from there and follow the steps below.


#### Test a new package

Add to your `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(You can also use `src/types`.)
Create `types/foo/index.d.ts` containing declarations for the module "foo".
You should now be able import from `"foo"` in your code and it will route to the new type definition.
Then build *and* run the code to make sure your type definition actually corresponds to what happens at runtime.
Once you've tested your definitions with real code, make a [PR](#make-a-pull-request)
then follow the instructions to [edit an existing package](#edit-an-existing-package) or
[create a new package](#create-a-new-package).


### Make a pull request

Once you've tested your package, you can share it on DefinitelyTyped.

First, [fork](https://guides.github.com/activities/forking/) this repository, install [node](https://nodejs.org/), and run `npm install`.


#### Edit an existing package

* `cd types/my-package-to-edit`
* Make changes. Remember to edit tests.
* You may also want to add yourself to "Definitions by" section of the package header.
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

If you are the library author, or can make a pull request to the library, [bundle types](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) instead of publishing to DefinitelyTyped.

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

Generate these by running `npm install -g dts-gen` and `dts-gen --dt --name my-package-name --template module`.
See all options at [dts-gen](https://github.com/Microsoft/dts-gen).

You may edit the `tsconfig.json` to add new files, to add `"target": "es6"` (needed for async functions), to add to `"lib"`, or to add the `"jsx"` compiler option.

DefinitelyTyped members routinely monitor for new PRs, though keep in mind that the number of other PRs may slow things down.

For a good example package, see [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).


#### Common mistakes

* First, follow advice from the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatting: Either use all tabs, or always use 4 spaces.
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


#### Removing a package

When a package [bundles](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own types, types should be removed from DefinitelyTyped to avoid confusion.

You can remove it by running `npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]`.
- `typingsPackageName`: This is the name of the directory to delete.
- `asOfVersion`: A stub will be published to `@types/foo` with this version. Should be higher than any currently published version.
- `sourceRepoURL`: This should point to the repository that contains the typings.
- `libraryName`: Descriptive name of the library, e.g. "Angular 2" instead of "angular2". (If ommitted, will be identical to "typingsPackageName".)

Any other packages in DefinitelyTyped that referenced the deleted package should be updated to reference the bundled types. To do this, add a `package.json` with `"dependencies": { "foo": "x.y.z" }`.

If a package was never on DefinitelyTyped, it does not need to be added to `notNeededPackages.json`.


#### Lint

To lint a package, just add a `tslint.json` to that package containing `{ "extends": "dtslint/dt.json" }`. All new packages must be linted.
If a `tslint.json` turns rules off, this is because that hasn't been fixed yet. For example:

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

Test by running `npm run lint package-name` where `package-name` is the name of your package.
This script uses [dtslint](https://github.com/Microsoft/dtslint).


## FAQ

#### What exactly is the relationship between this repository and the `@types` packages on NPM?

The `master` branch is automatically published to the `@types` scope on NPM thanks to [types-publisher](https://github.com/Microsoft/types-publisher).
This usually happens within an hour of changes being merged.

#### I'm writing a definition that depends on another definition. Should I use `<reference types="" />` or an import?

If the module you're referencing is an external module (uses `export`), use an import.
If the module you're referencing is an ambient module (uses `declare module`, or just declares globals), use `<reference types="" />`.

#### I notice some packages having a `package.json` here.

Usually you won't need this. When publishing a package we will normally automatically create a `package.json` for it.
A `package.json` may be included for the sake of specifying dependencies. Here's an [example](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
We do not allow other fields, such as `"description"`, to be defined manually.
Also, if you need to reference an older version of typings, you must do that by adding `"dependencies": { "@types/foo": "x.y.z" }` to the package.json.

#### Some packages have no `tslint.json`, and some `tsconfig.json` are missing `"noImplicitAny": true`, `"noImplicitThis": true`, or `"strictNullChecks": true`.

Then they are wrong. You can help by submitting a pull request to fix them.

#### Can I request a definition?

Here are the [currently requested definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### What about type definitions for the DOM?

If types are part of a web standard, they should be contributed to [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) so that they can become part of the default `lib.dom.d.ts`.

#### A package uses `export =`, but I prefer to use default imports. Can I change `export =` to `export default`?

If default imports work in your environment, consider turning on the [`--allowSyntheticDefaultImports`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) compiler option.
Do not change the type definition if it is accurate.
For an NPM package, `export =` is accurate if `node -p 'require("foo")'` is the export, and `export default` is accurate if `node -p 'require("foo").default'` is the export.

#### I want to use features from TypeScript 2.1 or above.

Then you will have to add a comment to the last line of your definition header (after `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// TypeScript Version: 2.1`.

#### I want to add a DOM API not present in TypeScript by default.

This may belong in [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). See the guidelines there.
If the standard is still a draft, it belongs here.
Use a name beginning with `dom-` and include a link to the standard as the "Project" link in the header.
When it graduates draft mode, we may remove it from DefinitelyTyped and deprecate the associated `@types` package.

#### I want to update a package to a new major version

Before making your change, please create a new subfolder with the current version e.g. `v2`, and copy existing files to it. You will need to:

1. Update the relative paths in `tsconfig.json` as well as `tslint.json`.
2. Add path mapping rules to ensure that tests are running against the intended version.

For example [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/history/v2/tsconfig.json) looks like:

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

Please note that unless upgrading something backwards-compatible like `node`, all packages depending of the updated package need a path mapping to it, as well as packages depending on *those*.
For example, `react-router` depends on `history@2`, so [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) has a path mapping to `"history": [ "history/v2" ]`;
transitively `react-router-bootstrap` (which depends on `react-router`) also adds a path mapping in its [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Also, `/// <reference types=".." />` will not work with path mapping, so dependencies must use `import`.

#### What about scoped packages?

Types for a scoped package `@foo/bar` should go in `types/foo__bar`. Note the double underscore.


#### The file history in GitHub looks incomplete.

GitHub doesn't [support](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) file history for renamed files. Use [`git log --follow`](https://www.git-scm.com/docs/git-log) instead.


## License

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.

[![Analytics](https://ga-beacon.appspot.com/UA-47495295-4/borisyankov/DefinitelyTyped)](https://github.com/igrigorik/ga-beacon)
