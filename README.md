# Definitely Typed

> The repository for *high quality* TypeScript type definitions.

*You can also read this README in [Español](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [한국어](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md), [Русский](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), [简体中文](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md), [Português](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md), [Italiano](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.it.md), [日本語](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ja.md) and [Français](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.fr.md)!*

*Link to [Admin manual](./docs/admin.md)*

## !!! Important! This repo has recently changed layout! !!!

Definitely Typed has recently changed to a proper `pnpm` monorepo; you may want to reread this document for changes to the layout of packages in this repo.

At the very least, you may want to `git clean -fdx` the repo (or `node ./scripts/clean-node-modules.js` on Windows) to clean up `node_modules` and run `pnpm install --filter .` to install the workspace root. See further sections for more info on `pnpm install`.

## Current status

This section tracks the health of the repository and publishing process.
It may be helpful for contributors experiencing any issues with their PRs and packages.

* Most recent build [type-checked/linted](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) cleanly: [![Build status](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml/badge.svg?branch=master&event=push)
](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml?query=branch%3Amaster+event%3Apush)
* All packages are type-checking/linting cleanly on typescript@next: [![Build status](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml/badge.svg?branch=master&event=schedule)
](https://github.com/DefinitelyTyped/DefinitelyTyped/actions/workflows/CI.yml?query=branch%3Amaster+event%3Aschedule)
* All packages are being [published to npm](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) in under an hour and a half: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) has been active on Definitely Typed [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* Current [infrastructure status updates](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317)

If anything here seems wrong or any of the above are failing, please let us know in [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript).

## What are declaration files and how do I get them?

See the [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

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

See more in the [handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

For an npm package "foo", typings for it will be at "@types/foo".

If your package has typings specified using the ``types`` or ``typings`` key in its ``package.json``, the npm registry will display that the package has available bindings like so:

![image](https://user-images.githubusercontent.com/30049719/228748963-56fabfd1-9101-42c2-9891-b586b775b01e.png)

If you still can't find the typings, just look for any ".d.ts" files in the package and manually include them with a `/// <reference path="" />`.

### Support Window

Definitely Typed only tests packages on versions of TypeScript that are less than 2 years old.

<img src="docs/support-window.svg#gh-light-mode-only" style="width:100%">
<img src="docs/support-window.svg#gh-dark-mode-only" style="width:100%">

<details>
<summary>Older versions of TypeScript</summary>

`@types` packages have tags for versions of TypeScript that they explicitly support, so you can usually get older versions of packages that predate the 2-year window.
For example, if you run `npm dist-tags @types/react`, you'll see that TypeScript 2.5 can use types for react@16.0, whereas TypeScript 2.6 and 2.7 can use types for react@16.4:

| Tag    | Version |
| ------ | ------- |
| latest | 16.9.23 |
| ts2.0  | 15.0.1  |
| ...    | ...     |
| ts2.5  | 16.0.36 |
| ts2.6  | 16.4.7  |
| ts2.7  | 16.4.7  |
| ...    | ...     |

#### TypeScript 1.*

* Manually download from the `master` branch of this repository and place them in your project
* ~~[Typings](https://github.com/typings/typings)~~ (use preferred alternatives, typings is deprecated)
* ~~[NuGet](https://nuget.org/packages?q=DefinitelyTyped)~~ (use preferred alternatives, nuget DT type publishing has been turned off)

You may need to add manual [references](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

</details>

## How can I contribute?

Definitely Typed only works because of contributions by users like you!

### Testing

Before you share your improvement with the world, use the types yourself by creating a `typename.d.ts` file in your project and filling out its exports:

```ts
declare module "libname" {
  // Types inside here
  export function helloWorldMessage(): string
}
```

#### Test editing an existing package

You can edit the types directly in `node_modules/@types/foo/index.d.ts` to validate your changes, then bring the changes to this repo with the steps below.

Alternatively, you can use [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) to extend existing types from the DT module or use the `declare module` technique above which will override the version in `node_modules`.

#### Adding tests to a new package

Add to your `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

Create `types/foo/index.d.ts` containing declarations for the module "foo".
You should now be able to import from `"foo"` in your code and it will route to the new type definition.
Then build *and* run the code to make sure your type definition actually corresponds to what happens at runtime.

Once you've tested your definitions with real code, make a [PR](#make-a-pull-request)
then follow the instructions to [edit an existing package](#edit-an-existing-package) or
[create a new package](#create-a-new-package).

### Make a pull request

Once you've tested your package, you can share it on Definitely Typed.

First, [fork](https://guides.github.com/activities/forking/) this repository, [clone](#partial-clone) it,
install [node](https://nodejs.org/) and run `pnpm install`. Note that `pnpm install` will install the _entire_
repository, including packages you may not be editing. If you'd like to install only a subset,
you can run `pnpm install -w --filter "{./types/foo}..."` to install `@types/foo` and all of
its dependencies. If you need to run tests for packages that _depend_ on `@types/foo`, you can run `pnpm install -w --filter "...{./types/foo}..."` to pull in all related packages for testing.

> [!NOTE]
> If you are using Windows, you may find that `git clean` does not remove the `node_modules` directory or hangs when doing so. If you need to remove `node_modules`, you can run `pnpm clean-node-modules` to reset the repo.

We use a bot to let a large number of pull requests to DefinitelyTyped be handled entirely in a self-service manner. You can read more about [why and how here](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/). Here is a handy reference showing the life cycle of a pull request to DT:

<img src="https://github.com/DefinitelyTyped/dt-mergebot/blob/master/docs/dt-mergebot-lifecycle.svg">

#### Partial clone

<details>
<summary>You can clone the entire repository <a href='https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository'>as per usual</a>, but it's large and includes a massive directory of type packages.</summary>

You can clone the entire repository [as per usual](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), but it's large and includes a massive directory of type packages. This will take some time to clone and may be unnecessarily unwieldy.

For a more manageable clone that includes _only_ the type packages relevant to you, you can use git's [`sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout) and [`--filter`](https://git-scm.com/docs/git-rev-list#Documentation/git-rev-list.txt---filterltfilter-specgt) features. This will reduce clone time and improve git performance.

>:warning: This requires minimum [git version 2.27.0](https://git-scm.com/downloads), which is likely newer than the default on most machines. More complicated procedures are available in older versions, but not covered by this guide.

1. `git clone --sparse --filter=blob:none <forkedUrl>`
    - `--sparse` initializes the sparse-checkout file so the working directory starts with only the files in the root of the repository.
    - `--filter=blob:none` will including all commit history but exclude files, fetching them only as needed.
2. `git sparse-checkout add types/<type> types/<dependency-type> ...`

</details>

#### Edit an existing package

* Make changes. Remember to [edit tests](#my-package-teststs).
  If you make breaking changes, do not forget to [update a major version](#if-a-library-is-updated-to-a-new-major-version-with-breaking-changes-how-should-i-update-its-type-declaration-package).
* [Run `pnpm test <package to test>`](#running-tests).

When you make a PR to edit an existing package, `dt-bot` should @-mention previous authors.
If it doesn't, you can do so yourself in the comment associated with the PR.

#### Create a new package

If you are the library author and your package is written in TypeScript, [bundle the generated declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) in your package instead of publishing to Definitely Typed.
You can also generate declaration files from JavaScript files, using JSDoc for type annotations.

If you are adding typings for an npm package, create a directory with the same name.
If the package you are adding typings for is not on npm, make sure the name you choose for it does not conflict with the name of a package on npm.
(You can use `npm info <my-package>` to check for the existence of the `<my-package>` package.)

Your package should have this structure:

| File          | Purpose |
| ------------- | ------- |
| `index.d.ts`  | This contains the typings for the package. |
| [`<my-package>-tests.ts`](#my-package-teststs)  | This contains sample code which tests the typings. This code does *not* run, but it is type-checked. |
| [`tsconfig.json`](#tsconfigjson) | This allows you to run `tsc` within the package. |
| [`.eslintrc.json`](#linter-eslintrcjson)   | (Rarely) Needed only to disable lint rules written for eslint. |
| [`package.json`](#packagejson) | Contains metadata for the package, including its name, version and dependencies. |
| [`.npmignore`](#npmignore) | Specifies which files are intended to be included in the package. |

Generate these by running `npx dts-gen --dt --name <my-package> --template module`.
See all options at [dts-gen](https://github.com/Microsoft/dts-gen).

If you have `.d.ts` files besides `index.d.ts`, make sure that they are referenced either in `index.d.ts` or the tests.

Definitely Typed members routinely monitor for new PRs, though keep in mind that the number of other PRs may slow things down.

For a good example package, see [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Removing a package

When a package [bundles](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own types, types should be removed from Definitely Typed to avoid confusion.

You can remove it by running `pnpm run not-needed <typingsPackageName> <asOfVersion> [<libraryName>]`.
* `<typingsPackageName>`: This is the name of the directory to delete.
* `<asOfVersion>`: A stub will be published to `@types/<typingsPackageName>` with this version. Should be higher than any currently published version and should be a version of `<libraryName>` on npm.
* `<libraryName>`: Name of npm package that replaces the Definitely Typed types. Usually this is identical to `<typingsPackageName>`, in which case you can omit it.

If a package was never on Definitely Typed, it does not need to be added to `notNeededPackages.json`.

#### Running tests

Test your changes by running `pnpm test <package to test>` where `<package to test>` is the name of your package.
You need to run this from the DefinitelyTyped directory because individual package.jsons don't define test scripts.

This script uses [dtslint](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint) to run the TypeScript compiler against your dts files.

Once you have all your changes ready, use `pnpm run test-all` to see how your changes affect other modules.

##### @arethetypeswrong/cli (`attw`) checks

dtslint includes module format and `package.json` configuration checks from [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli). The checks run only if a SemVer-major-compatible implementation package can be found on npm to compare against the DefinitelyTyped package. (DefinitelyTyped packages marked as `"nonNpm": true` in their `package.json` are skipped.)

Many packages currently fail the `attw` checks and need to be fixed. To allow us to make incremental progress, failed `attw` checks do not fail the `dtslint` run when the package is listed in `failingPackages` in [`attw.json`](./attw.json), but they will still be reported in the `pnpm test my-package` output. If you fix the package, remove it from `failingPackages` so that `attw` checks can start failing `dtslint` runs.

All problems reported by `attw` have documentation linked in the output. Some rules of thumb to help avoid problems:

- The `package.json` in the DefinitelyTyped package must have matching `type` and `exports` fields if the implementation package uses them in its `package.json`. For example, if an implementation `package.json` looks like:

  ```json
  {
      "name": "my-package",
      "version": "1.0.1",
      "type": "module",
      "main": "dist/cjs/index.cjs",
      "exports": {
          ".": {
              "import": "./dist/esm/index.js",
              "require": "./dist/cjs/index.cjs"
          },
          "./subpath": {
              "import": "./dist/esm/subpath.js",
              "require": "./dist/cjs/subpath.cjs"
          }
      }
  }
  ```

  then the DefinitelyTyped `package.json` should look something like:

  ```json5
  {
      "name": "@types/my-package",
      "version": "1.0.9999",
      "type": "module",
      "types": "index.d.ts",
      "exports": {
          ".": {
              "import": "./index.d.ts",
              "require": "./index.d.cts"
          },
          "./subpath": {
              "import": "./subpath.d.ts",
               "require": "./subpath.d.cts"
          }
      }
  }
  ```

  Notice that each `exports` subpath is reflected, and each JavaScript file has a corresponding declaration file with a matching file extension—a `.d.ts` file types a `.js` file, not a `.mjs` or `.cjs` file!

- When the implementation package uses `module.exports = ...`, the DefinitelyTyped package should use `export =`, not `export default`. (Alternatively, if the `module.exports` is just an object of named properties, the DefinitelyTyped package can use a series of named exports.) The most common obstacle to correcting this problem is confusion about how to export types in addition to the primary export. For example, assume these types are incorrectly using `export default`:

  ```ts
  export interface Options {
    // ...
  }
  export default function doSomething(options: Options): void;
  ```

  Changing the `export default` to an `export =` creates an error:

  ```ts
  export interface Options {
    // ...
  }
  declare function doSomething(options: Options): void;
  export = doSomething;
  // ^^^^^^^^^^^^^^^^^
  // Error: An export assignment cannot be used in a module with other exported elements.
  ```

  To fix this, move the types inside a namespace with the same name as the function:

  ```ts
  declare namespace doSomething {
    export interface Options {
      // ...
    }
  }
  declare function doSomething(options: doSomething.Options): void;
  export = doSomething;
  ```

If you need help fixing a problem, please ask in the DefinitelyTyped channel on the [TypeScript Community Discord server](https://discord.gg/typescript).

#### Naming

If you are adding typings for an npm package, create a directory with the same name.
If the package you are adding typings for is not on npm, set `"nonNpm": true` in the `package.json`, and make sure the name you choose for it does not conflict with the name of a package on npm.
(You can use `npm info <my-package>` to check for the existence of the `<my-package>` package.)

#### `<my-package>-tests.ts`

There should be a `<my-package>-tests.ts` file, which is considered your test file, along with any `*.ts` files it imports.
If you don't see any test files in the module's folder, create a `<my-package>-tests.ts`.
These files are used to validate the API exported from the `*.d.ts` files which are shipped as `@types/<my-package>`.
They do not themselves ship.

Changes to the `*.d.ts` files should include a corresponding `*.ts` file change which shows the API being used, so that someone doesn't accidentally break code you depend on.
For example, this change to a function in a `.d.ts` file adding a new param to a function:

`index.d.ts`:

```diff
- export function twoslash(body: string): string
+ export function twoslash(body: string, config?: { version: string }): string
```

`<my-package>-tests.ts`:

```diff
import {twoslash} from "./"

// $ExpectType string
const result = twoslash("//")

+ // Handle options param
+ const resultWithOptions = twoslash("//", { version: "3.7" })
+ // When the param is incorrect
+ // @ts-expect-error
+ const resultWithOptions = twoslash("//", {  })
```

If you're wondering where to start with test code, the examples in the README of the original package are a great place to start.

You can [validate your changes](#running-tests) with `npm test <package to test>` from the root of this repo, which takes changed files into account.

Use `$ExpectType` to assert that an expression is of a given type and `@ts-expect-error` to assert that a compile error. Examples:

```js
// $ExpectType void
f(1);

// @ts-expect-error
f("one");
```

For more details, see [dtslint](https://github.com/Microsoft/DefinitelyTyped-tools/tree/master/packages/dtslint#write-tests) readme.

##### Linter: `.eslintrc.json`

If for some reason a lint rule needs to be disabled, disable it for a specific line:

```ts
// eslint-disable-next-line no-const-enum
const enum Const { One }
const enum Enum { Two } // eslint-disable-line no-const-enum
```

You can still disable rules with an .eslintrc.json, but should not in new packages.
Disabling rules for the entire package makes it harder to review.

#### `tsconfig.json`

`tsconfig.json` should have `noImplicitAny`, `noImplicitThis`, `strictNullChecks` and `strictFunctionTypes` set to `true`.

You may edit the `tsconfig.json` to add new test files, to add `"target": "es6"` (needed for async functions), to add to `"lib"` or to add the `"jsx"` compiler option.

##### `esModuleInterop`/`allowSyntheticDefaultImports`

TL;DR: `esModuleInterop` and `allowSyntheticDefaultImports` are *not allowed* in your `tsconfig.json`.

> These options make it possible to write a default import for a CJS export, modeling the built-in interoperability between CJS and ES modules in Node and in some JS bundlers:
>
> ```tsx
> // component.d.ts
> declare class Component {​​​​​}​​​​​
> // CJS export, modeling `module.exports = Component` in JS
> export = Component;
>
> // index.d.ts
> // ESM default import, only allowed under 'esModuleInterop' or 'allowSyntheticDefaultExports'
> import Component from "./component";
> ```
>
> Since the compile-time validity of the import in `index.d.ts` is dependent upon specific compilation settings, which users of your types do not inherit, using this pattern in DefinitelyTyped would force users to change their own compilation settings, which might be incorrect for their runtime. Instead, you must write a CJS import for a CJS export to ensure widespread, config-independent compatibility:
>
> ```ts
> // index.d.ts
> // CJS import, modeling `const Component = require("./component")` in JS
> import Component = require("./component");
> ```

#### `package.json`

This file is required and should follow this template:

```json5
{
    "private": true,
    "name": "@types/PACKAGE-NAME",
    "version": "1.2.9999",
    "projects": [
        "https://aframe.io/"
    ],
    "dependencies": {
        "@types/DEPENDENCY-1": "*",
        "@types/DEPENDENCY-2": "*"
    },
    "devDependencies": {
        "@types/PACKAGE-NAME": "workspace:."
    },
    "owners": [
        {
            "name": "Your Name Here",
            "githubUsername": "ghost"
        }
    ]
}
```


A `package.json` specifies _all_ dependencies, including other `@types` packages.

You must add non-`@types` dependencies to [the list of allowed external dependencies](https://github.com/microsoft/DefinitelyTyped-tools/blob/master/packages/definitions-parser/allowedPackageJsonDependencies.txt).
[Pikaday is a good example.](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json)
These additions are approved by a maintainer, which gives us the chance to make sure that `@types` packages don't depend on malicious packages.

If the implementation package uses ESM and specifies `"type": "module"`, then you should modify package.json to match:

```json
{
    "type": "module"
}
```

This also applies if the implementation package has `exports` in its package.json.

#### `.npmignore`

This file defines which files are to be included in each `@types` package. It must take a specific form. For packages with only one version in the repo:

```ignore
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
```

Which is to say "ignore all files, but don't ignore any declaration files". For packages that have more than one version in the repo, the "latest" version (at the top level) should contain something like:

```ignore
*
!**/*.d.ts
!**/*.d.cts
!**/*.d.mts
!**/*.d.*.ts
/v15/
/v16/
/v17/
```

Which is the same as the previous `.npmignore` but ignoring each of the versioned child directories.

CI will fail if this file contains the wrong contents and provide the intended value. No matter what this file contains, the publisher will only publish declaration files.

#### Common mistakes

* First, follow advice from the [handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatting: [dprint](https://dprint.dev) is set up on this repo, so you can run `pnpm dprint fmt -- 'path/to/package/**/*.ts'`.
  * Consider using the VS Code `.vscode/settings.template.json` (or equivalent for other editors) to format on save with the [VS Code dprint extension](https://marketplace.visualstudio.com/items?itemName=dprint.dprint)
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
* Using the types `Function` and `Object` is almost never a good idea. In 99% of cases it's possible to specify a more specific type. Examples are `(x: number) => number` for [functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions) and `{ x: number, y: number }` for objects. If there is no certainty at all about the type, [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) is the right choice, not `Object`. If the only known fact about the type is that it's some object, use the type [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), not `Object` or `{ [key: string]: any }`.
* `var foo: string | any`:
  When `any` is used in a union type, the resulting type is still `any`. So, while the `string` portion of this type annotation may _look_ useful, it in fact offers no additional typechecking over simply using `any`.
  Depending on the intention, acceptable alternatives could be `any`, `string` or `string | object`.

### Definition owners

> TL;DR: do not modify `.github/CODEOWNERS`, always modify list of the owners in the `index.d.ts` header

DT has the concept of "Definition Owners" which are people who want to maintain the quality of a particular module's types.

* Adding yourself to the list will cause you to be notified (via your GitHub username) whenever someone makes a pull request or issue about the package.
* Your PR reviews will have a higher precedence of importance to [the bot](https://github.com/DefinitelyTyped/dt-mergebot) which maintains this repo.
* The DT maintainers are putting trust in the definition owners to ensure a stable eco-system, please don't add yourself lightly.

To add yourself as a Definition Owner, modify the `owners` array in `package.json`:

```json
"owners": [
    {
        "name": "Some Person",
        "githubUsername": "somebody"
    },
    {
        "name": "Some Corp",
        "url": "https://example.org"
    }
]
```

Note that this list is _not_ used to provide credit for contributions; it is only used for managing PR reviews.

Once a week the Definition Owners are synced to the file [.github/CODEOWNERS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/.github/CODEOWNERS) which is our source of truth.

## The history of Definitely Typed

Definitely Typed is one of the most active repositories on GitHub. You might have wondered how the project came to be. @johnnyreilly wrote a history of Definitely Typed. It tells the story of the early days of Definitely Typed, from a repository created by @borisyankov, to the point where it became a pivotal part of the TypeScript ecosystem. [You can read the story of Definitely Typed here](https://johnnyreilly.com/definitely-typed-the-movie).

## FAQ

#### What exactly is the relationship between this repository and the `@types` packages on npm?

The `master` branch is automatically published to the `@types` scope on npm thanks to [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher).

#### I've submitted a pull request. How long until it is merged?

It depends, but most pull requests will be merged within a week.
Some PRs can be merged by the owners of a module and they can be merged much faster.
Roughly:

> PRs which only change the types of a module and have corresponding tests changes will be merged much faster

PRs that have been approved by an author listed in the definition's header are usually merged more quickly; PRs for new definitions will take more time as they require more review from maintainers. Each PR is reviewed by a TypeScript or Definitely Typed team member before being merged, so please be patient as human factors may cause delays. Check the [New Pull Request Status Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/5) to see progress as maintainers work through the open PRs.

#### I'd like to submit a change to a very popular project, why are they treated differently?

For changes to very popular modules, e.g. Node/Express/Jest which have many millions of downloads each per week on npm, the requirements for contributions are a bit higher.
Changes to these projects can have massive ecosystem effects and so we treat changes to them with a lot of care.
These modules require both a sign-off from a DT maintainer and enthusiastic support from the module owners. The bar for passing this can be quite high and often PRs can go stale because it doesn't have a champion.
If you're finding that no-one is committing, try to make your PR have a smaller focus.

#### My PR is merged; when will the `@types` npm package be updated?

npm packages should update within an hour. If it's been more than an hour, mention the PR number on [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript) and the current maintainer will get the correct team member to investigate.

#### I'm writing a definition that depends on another definition. Should I use `<reference types="" />` or an import?

If the module you're referencing is a module (uses `export`), use an import.
If the module you're referencing is an ambient module (uses `declare module`) or just declares globals, use `<reference types="" />`.

#### Some packages have a `tsconfig.json` that is missing `"noImplicitAny": true`, `"noImplicitThis": true` or `"strictNullChecks": true`.

Then they are wrong and we've not noticed yet. You can help by submitting a pull request to fix them.

#### Are Files Formatted Automatically?

Yes, using [dprint](https://dprint.dev).
We recommend using a [dprint extension for your editor](https://dprint.dev/install/#editor-extensions).

Alternatively, you can enable a git hook which will format your code automatically. Run `pnpm run setup-hooks`. Then, when you commit, `dprint fmt` command will be executed on changed files.  If you take advantage of [partial clone](#partial-clone), make sure to call `git sparse-checkout add .husky` to check out the git hooks before running the `setup-hooks` script.

Pull requests do not require correct formatting to be merged.
Any unformatted code will be automatically reformatted after being merged.

> 💡 If you're a VS Code user, we suggest copying the `.vscode/settings.template.json` file to `.vscode/settings.json`.
> That template sets the [dprint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) as the default formatter in the repo.

#### Can I request a definition?

Here are the [currently requested definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/categories/request-a-new-types-package).

#### What about type definitions for the DOM?

If types are part of a web standard, they should be contributed to [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator) so that they can become part of the default `lib.dom.d.ts`.

#### What about type definitions with no matching package?

If there's no source JavaScript code at all, for example if you're writing helper types or types for a spec, you should publish the types yourself, not on Definitely Typed.
Because they're meant to provide types for existing JavaScript code, `@types` packages are not meant to be imported directly.
That is, you shouldn't create a Definitely Typed package that's meant to be used like `import type { ... } from "@types/foo"`.
Nor should you expect to write `import type { ... } from "foo"` when there's no `foo` installed.

This is different from providing types for a browser only JavaScript library or types for an entire environment like node, bun, et al.
There, the types are either resolved implicitly or using `/// <references types="foo" />`.

#### Should I add an empty namespace to a package that doesn't export a module to use ES6 style imports?

Some packages, like [chai-http](https://github.com/chaijs/chai-http), export a function.

Importing this module with an ES6 style import in the form `import * as foo from "foo";` leads to the error:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct.

This error can be suppressed by merging the function declaration with an empty namespace of the same name, but this practice is discouraged.
This is a commonly cited [Stack Overflow answer](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) regarding this matter.

It is more appropriate to import the module using the `import foo = require("foo");` syntax.
Nevertheless, if you want to use a default import like `import foo from "foo";` you have two options:
- you can use the [`--allowSyntheticDefaultImports` compiler option](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs) if your module runtime supports an interop scheme for non-ECMAScript modules, i.e. if default imports work in your environment (e.g. Webpack, SystemJS, esm).
- you can use the [`--esModuleInterop` compiler option](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop) if you want TypeScript to take care of non-ECMAScript interop (since TypeScript 2.7).

#### A package uses `export =`, but I prefer to use default imports. Can I change `export =` to `export default`?

Like in the previous question, refer to using either the [`--allowSyntheticDefaultImports`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#support-for-default-import-interop-with-systemjs)
or [`--esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop)
compiler options.

Do not change the type definition if it is accurate.
For an npm package, `export =` is accurate if `node -p 'require("foo")'` works to import a module and `export default` is accurate if `node -p 'require("foo").default'` works to import a module.

#### I want to use features from very new TypeScript versions.

Then you will have to add a comment to the last line of your definition header (after `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// Minimum TypeScript Version: X.Y`. This will set the lowest minimum supported version.

However, if your project needs to maintain types that are compatible with, say, 3.7 and above *at the same time as* types that are compatible with 3.6 or below, you will need to use the `typesVersions` feature.
You can find a detailed explanation of this feature in the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#version-selection-with-typesversions).

Here's a short example to get you started:

1. You'll have to add `typesVersions` to `package.json`:

   ```json
   {
     "private": true,
     "types": "index",
     "typesVersions": {
       "<=3.6": { "*": ["ts3.6/*"] }
     }
   }
   ```

2. Create the sub-directory mentioned in the `typesVersions` field inside your types directory (`ts3.6/` in this example).
   `ts3.6/` will support TypeScript versions 3.6 and below, so copy the existing types and tests there.

   You'll need to delete the definition header from `ts3.6/index.d.ts` since only the root `index.d.ts` is supposed to have it.

3. Back in the root of the package, add the TypeScript 3.7 features you want to use.
   When people install the package, TypeScript 3.6 and below will start from `ts3.6/index.d.ts`, whereas TypeScript 3.7 and above will start from `index.d.ts`.

   You can look at [bluebird](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f2512c2cf7cdcf9a487d989e288174e49b7839ab/types/bluebird) for an example.

#### I want to add a DOM API not present in TypeScript by default.

This may belong in [TypeScript-DOM-lib-generator](https://github.com/Microsoft/TypeScript-DOM-lib-generator#readme). See the guidelines there.
If the standard is still a draft, it belongs here.
Use a name beginning with `dom-` and include a link to the standard as the "Project" link in the header.
When it graduates draft mode, we may remove it from Definitely Typed and deprecate the associated `@types` package.

#### How do Definitely Typed package versions relate to versions of the corresponding library?

*NOTE: The discussion in this section assumes familiarity with [Semantic versioning](https://semver.org/)*

Each Definitely Typed package is versioned when published to npm.
The [DefinitelyTyped-tools](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) (the tool that publishes `@types` packages to npm) will set the declaration package's version by using the `major.minor.9999` version number listed in `package.json`.
For example, here are the first few lines of Node's type declarations for version `20.8.x` at the time of writing:

```json
{
    "private": true,
    "name": "@types/node",
    "version": "20.8.9999",
}
```

Because the version is listed as `20.8.9999`, the npm version of the `@types/node` package will also be `20.8.x`.
Note that the version in `package.json` should only contain `major.minor` version (e.g. `10.12`) followed by `.9999`.
This is because only the major and minor release numbers are aligned between library packages and type declaration packages. (The `.9999` is to ensure that local `@types` packages are always newest during local development.)
The patch release number of the type declaration package (e.g. `.0` in `20.8.0`) is initialized to zero by Definitely Typed and is incremented each time a new `@types/node` package is published to npm for the same major/minor version of the corresponding library.

Sometimes type declaration package versions and library package versions can get out of sync.
Below are a few common reasons why, in order of how much they inconvenience users of a library.
Only the last case is typically problematic.

* As noted above, the patch version of the type declaration package is unrelated to the library patch version.
  This allows Definitely Typed to safely update type declarations for the same major/minor version of a library.
* If updating a package for new functionality, don't forget to update the version number to line up with that version of the library.
  If users make sure versions correspond between JavaScript packages and their respective `@types` packages, then `npm update` should typically just work.
* It's common for type declaration package updates to lag behind library updates because it's often library users, not maintainers, who update Definitely Typed when new library features are released.
  So, there may be a lag of days, weeks or even months before a helpful community member sends a PR to update the type declaration package for a new library release.
  If you're impacted by this, you can be the change you want to see in the world and you can be that helpful community member!

:exclamation: If you're updating type declarations for a library, always set the `major.minor` version in `package.json` to match the library version that you're documenting! :exclamation:

#### If a library is updated to a new major version with breaking changes, how should I update its type declaration package?

[Semantic versioning](https://semver.org/) requires that versions with breaking changes must increment the major version number.
For example, a library that removes a publicly exported function after its `3.5.8` release must bump its version to `4.0.0` in its next release.
Furthermore, when the library's `4.0.0` release is out, it's Definitely Typed type declaration package should also be updated to `4.0.0`, including any breaking changes to the library's API.

Many libraries have a large installed base of developers (including maintainers of other packages using that library as a dependency) who won't move right away to a new version that has breaking changes, because it might be months until a maintainer has time to rewrite code to adapt to the new version.
In the meantime, users of old library versions still may want to update type declarations for older versions.

If you intend to continue updating the older version of a library's type declarations, you may create a new subfolder (e.g. `/v2/`) named for the current (soon to be "old") version and copy existing files from the current version to it.

When creating a new version folder, ensure that the version field of `package.json` has been updated; `pnpm` will automatically resolve to this versioned package whenever it's needed. If other packages in the repo need to depend on this new version, ensure that their `package.json`s are also updated too.

For example, if we are creating `types/history/v2`, its `package.json` would look like:

```json
{
    "private": true,
    "name": "@types/history",
    "version": "2.4.9999",
}
```

Another package may select this version by specifying:

```json
{
    "private": true,
    "name": "@types/browser-sync",
    "version": "2.26.9999",
    "dependencies": {
        "@types/history": "^2"
    }
}
```

Also, `/// <reference types=".." />` will not work with path mapping, so dependencies must use `import`.

#### How do breaking type changes work if type declaration packages closely track the library package's version?

`@types` packages always type packages of the same version, so `@types/foo@5.4.x` are for `foo@5.4.x`.
As a consequence, all changes, breaking or not, are published as patch revisions, unless paired with a major/minor bump to change the package version being targeted (coincidentally or not).

When it comes to breaking changes, DT maintainers consider the popularity of the package, the upsides of the proposed breaking change, the effort that will be required for users to fix their code, and whether the change could reasonably be delayed until it can be synced with a major bump of the upstream library.

#### How do I write definitions for packages that can be used globally and as a module?

The TypeScript handbook contains excellent [general information about writing definitions](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) and also [this example definition file](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) which shows how to create a definition using ES6-style module syntax, while also specifying objects made available to the global scope.  This technique is demonstrated practically in the [definition for `big.js`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), which is a library that can be loaded globally via script tag on a web page or imported via require or ES6-style imports.

To test how your definition can be used both when referenced globally or as an imported module, create a `test` folder and place two test files in there.  Name one `YourLibraryName-global.test.ts` and the other `YourLibraryName-module.test.ts`.  The *global* test file should exercise the definition according to how it would be used in a script loaded on a web page where the library is available on the global scope - in this scenario you should not specify an import statement.  The *module* test file should exercise the definition according to how it would be used when imported (including the `import` statement(s)).  If you specify a `files` property in your `tsconfig.json` file, be sure to include both test files.  A [practical example of this](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) is also available on the `big.js` definition.

Please note that it is not required to fully exercise the definition in each test file - it is sufficient to test only the globally accessible elements on the global test file and fully exercise the definition in the module test file or vice versa.

#### What about scoped packages?

Types for a scoped package `@foo/bar` should go in `types/foo__bar`. Note the double underscore.

## License

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.
