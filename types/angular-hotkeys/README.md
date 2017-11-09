## What is it?

This is a typescript interface to be used with [angular-hotkeys](https://github.com/chieffancypants/angular-hotkeys/).

## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## How do I get them?

### npm

This is the preferred method. This is only available for TypeScript 2.0+ users. For these typings:

```sh
npm install --save-dev @types/angular-hotkeys
```

The types should then be automatically included by the compiler.
See more in the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).


### Other methods

These can be used by TypeScript 1.0.

* [Typings](https://github.com/typings/typings)
* ~~[NuGet](http://nuget.org/Tpackages?q=DefinitelyTyped)~~ (use preferred alternatives, nuget DT type publishing has been turned off)
* Manually download from the `master` branch of this repository

You may need to add manual [references](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## How to use

After installing a package you can import the definition file and begin using it as so:

```ts

import * as hotkeys from '../../node_modules/@types/angular-hotkeys'

class FooController  {
    static $inject = [
        'hotkeys'
    ];

    constructor(
        private hotkeys: ng.hotkeys.HotkeysProvider
    ) { }
}

```

for a detailed explanation of the behavior of angular-hotkeys please refer to [its documentation](https://github.com/chieffancypants/angular-hotkeys/)

