# Definitely Typed

> The repository for *high quality* TypeScript type definitions.

*You can also read this README in [Spanish](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.es.md), [Korean](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ko.md), [Russian](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.ru.md), [Chinese](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md) and [Portuguese](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.pt.md)!*

*Link to [Admin manual](./docs/admin.md)*

## Current status

This section tracks the health of the repository and publishing process.
It may be helpful for contributors experiencing any issues with their PRs and packages.

* Most recent build [type-checked/linted](https://github.com/Microsoft/dtslint) cleanly: [![Build Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.DefinitelyTyped?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=1&branchName=master)
* All packages are type-checking/linting cleanly on typescript@next: [![Build status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/Nightly%20dtslint)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=8)
* All packages are being [published to npm](https://github.com/microsoft/types-publisher) in under an hour: [![Publish Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.types-publisher-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=5&branchName=master)
* [typescript-bot](https://github.com/typescript-bot) has been active on Definitely Typed [![Activity Status](https://dev.azure.com/definitelytyped/DefinitelyTyped/_apis/build/status/DefinitelyTyped.typescript-bot-watchdog?branchName=master)](https://dev.azure.com/definitelytyped/DefinitelyTyped/_build/latest?definitionId=6&branchName=master)
* Current [infrastructure status updates](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44317)

If anything here seems wrong, or any of the above are failing, please let us know in [the Definitely Typed channel on the TypeScript Community Discord server](https://discord.gg/typescript).

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

#### Older versions of TypeScript (3.1 and earlier)

Definitely Typed only tests packages on versions of TypeScript that are less than 2 years old.
Currently versions 3.2 and above are tested.
If you're using TypeScript 2.0 to 3.1, you can still try installing `@types` packages &mdash; the majority of packages don't use fancy new TypeScript features.
But there's no guarantee that they'll work.
Here is the support window:

Version | Released | End of Support
-- | -- | --
2.8 | March 2018 | March 2020
2.9 | May 2018 | May 2020
3.0 | July 2018 | August 2020
3.1 | September 2018 | September 2020
3.2 | November 2018 | November 2020
3.3 | January 2019 | January 2021
3.4 | March 2019 | March 2021
3.5 | May 2019 | May 2021
3.6 | August 2019 | August 2021
3.7 | November 2019 | November 2021
3.8 | February 2020 | February 2022
3.9 | May 2020 | May 2022
4.0 | August 2020 | August 2022

`@types` packages have tags for versions of TypeScript that they explicitly support, so you can usually get older versions of packages that predate the 2-year window.
For example, if you run `npm dist-tags @types/react`, you'll see that TypeScript 2.5 can use types for react@16.0, whereas TypeScript 2.6 and 2.7 can use types for react@16.4:

|Tag | Version|
|----|---------|
|latest| 16.9.23|
|ts2.0| 15.0.1|
| ... | ... |
|ts2.5| 16.0.36|
|ts2.6| 16.4.7|
|ts2.7| 16.4.7|
| ... | ... |


#### TypeScript 1.*

* Manually download from the `master` branch of this repository and place them in your project
* ~~[Typings](https://github.com/typings/typings)~~ (use preferred alternatives, typings is deprecated)
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (use preferred alternatives, nuget DT type publishing has been turned off)

You may need to add manual [references](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## How can I contribute?

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT license.

Copyrights on the definition files are respective of each contributor listed at the beginning of each definition file.
