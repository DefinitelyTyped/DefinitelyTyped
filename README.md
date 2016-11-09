# DefinitelyTyped [![Build Status](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.png?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

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
* [NuGet](http://nuget.org/Tpackages?q=DefinitelyTyped)
* Manually download from the `master` branch of this repository

You may need to add manual [references](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).


## How can I contribute?

DefinitelyTyped only works because of contributions by users like you!

### Test

Before you share your improvement with the world, use it yourself.

#### Test editing an exiting package

To add new features you can use [module augmentation](http://www.typescriptlang.org/docs/handbook/declaration-merging.html).
You can also directly edit the types in `node_modules/@types/foo/index.d.ts`,
or copy them from there and paste inside of `declarations.d.ts` and follow the steps below.


#### Test a new package

* Add a new file `declarations.d.ts` to your project.
* Add it to the compilation, through `"includes"` or `"files"` in your [tsconfig](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html),
or through a `/// <reference path="" />` declaration in your code.
* Inside `declarations.d.ts`, write `declare module "foo" { }`, then write the module declaration inside.
* Test that your code works.
* *Then*, once you've tested your definitions, make a PR contributing the definition.


### Make a pull request

Once you've tested your package, you can share it on DefinitelyTyped.

First, [fork](https://guides.github.com/activities/forking/) this repository.
Then inside your repository:

* `git checkout types-2.0`

New work should generally be done on the `types-2.0` branch.
If you want your changes to be available to `typings` users, then you may edit `master` instead.


#### Edit an existing package

* `cd my-package-to-edit`
* Make changes. Remember to edit tests.
* You may also want to add yourself to "Definitions by" section of the package header.
* `npm install -g typescript@2.0` and run `tsc`.

When you make a PR to edit an existing package, `dt-bot` should @-mention previous authors.
If it doesn't, you can do so yourself in the comment associated with the PR.


#### Create a new package

If you are the library author, or can make a pull request to the library, [bundle](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) types instead of publishing to DefinitelyTyped.

If you are adding typings for an NPM package, create a directory with the same name.
If the package you are adding typings for is not on NPM, make sure the name you choose for it does not conflict with the name of a package on NPM.
(You can use `npm info foo` to check for the existence of the `foo` package.)

Your package should have this structure:

| File | Purpose |
| --- | --- |
| index.d.ts | This contains the typings for the package. |
| foo-tests.ts | This contains sample code which tests the typings. This code does *not* run, but it is type-checked. |
| tsconfig.json | This allows you to run `tsc` within the package. |

`index.d.ts` should start with a header looking like:

```ts
// Type definitions for foo 1.2
// Project: https://github.com/baz/foo
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
```

The `Project` link does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.

`tsconfig.json` should look like this:

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": true,
        "strictNullChecks": true,
        "baseUrl": "../",
        "typeRoots": [
            "../"
        ],
        "types": [],
        "noEmit": true,
        "forceConsistentCasingInFileNames": true
    },
    "files": [
        "index.d.ts",
        "foo-tests.ts"
    ]
}
```

These should be identical accross projects except that `foo-tests` will be replaced with the name of your test file,
and you may also add the `"jsx"` compiler option if your library needs it.

DefinitelyTyped members routinely monitor for new PRs, though keep in mind that the number of other PRs may slow things down.

For a good example package, see [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/types-2.0/base64-js).

#### Common mistakes

* First, follow advice from the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatting: Either use all tabs, or always use 4 spaces. Also, always use semicolons, and use egyptian braces.
* `interface X {}`: An empty interface is essentially the `{}` type: it places no constraints on an object.
* `interface IFoo {}`: Don't add `I` to the front of an interface name.
* `interface Foo { new(): Foo; }`:
    This defines a type of objects that are new-able. You probably want `declare class Foo { constructor(); }
* `const Class: { new(): IClass; }`:
    Prefer to use a class declaration `class Class { constructor(); }` instead of a new-able constant.
* `namespace foo {}`:
    Do not add a namespace just so that the `import * as foo` syntax will work.
    If it is commonJs module with a single export, you should use the `import foo = require("foo")` syntax.
    See more explanation [here](https://stackoverflow.com/questions/39415661/why-cant-i-import-a-class-or-function-with-import-as-x-from-y).
* `getMeAT<T>(): T`:
    If a type parameter does not appear in the types of any parameters, you don't really have a generic function, you just have a disguised type assertion.
    Prefer to use a real type assertion, e.g. `getMeAT() as number`.
    Example where a type parameter is acceptable: `function id<T>(value: T): T;`.
    Example where it is not acceptable: `function parseJson<T>(json: string): T;`.
    Exception: `new Map<string, number>()` is OK.


#### Removing a package

When a package [bundles](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) its own types, types should be removed from DefinitelyTyped to avoid confusion.
Make a PR doing the following:
* Delete the directory.
* Add a new entry to `notNeededPackages.json`.
    - `libraryName`: Descriptive name of the library, e.g. "Angular 2" instead of "angular2". (May be identical to "typingsPackageName".)
    - `typingsPackageName`: This is the name of the directory you just deleted.
    - `sourceRepoURL`: This should point to the repository that contains the typings.
    - `asOfVersion`: A stub will be published to `@types/foo` with this version. Should be higher than any currently published version.
* Any other packages in DefinitelyTyped that referenced the deleted package should be updated to reference the bundled types.
    To do this, add a `package.json` with `"dependencies": { "foo": "x.y.z" }`.

When a package is bundled, it no longer needs the header comment – this is only used by DefinitelyTyped, not by the TypeScript compiler.

## FAQ

#### What exactly is the relationship between this repository and the `@types` packages on NPM?

The `types-2.0` branch is automatically published to the `@types` scope on NPM thanks to [types-publisher](https://github.com/Microsoft/types-publisher).
This usually happens within an hour of changes being merged.

Changes to the `master` branch are also manually merged into the `types-2.0` branch, but this takes longer.

#### I'm writing a definition that depends on another definition. Should I use `<reference types="" />` or an import?

If the module you're referencing is an external module (uses `export`), use an import.
If the module you're referenceing is an ambient module (uses `declare module`, or just declares globals), use `<reference types="" />`.

#### What do I do about older versions of typings?

Currently we don't support this, though it is [planned](https://github.com/Microsoft/types-publisher/issues/3).
If you're adding a new major version of a library, you can copy `index.d.ts` to `foo-v2.3.d.ts` and edit `index.d.ts` to be the new version.

#### I notice some packages having a `package.json` here.

Usually you won't need this. When publishing a package we will normally automatically create a `package.json` for it.
A `package.json` may be included for the sake of specifying dependencies. Here's an [example](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/types-2.0/pikaday/package.json).
We do not allow other fields, such as `"description"`, to be defined manually.
Also, if you need to reference an older version of typings, you must do that by adding `"dependencies": { "@types/foo": "x.y.z" }` to the package.json.

#### I notice some `tsconfig.json` are missing `"noImplicitAny": true` or `"strictNullChecks": true`.

Then they are wrong. You can help by submitting a pull request to fix them.

#### Definitions in types-2.0 seem written differently than in master.

If you're targeting types-2.0, write it like the types-2.0 definitions.
If you're targeting master, we may change it to the new style when merging from master to types-2.0.

#### Can I request a definition?

Here are the [currently requested definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).


## License

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.

[![Analytics](https://ga-beacon.appspot.com/UA-47495295-4/borisyankov/DefinitelyTyped)](https://github.com/igrigorik/ga-beacon)
