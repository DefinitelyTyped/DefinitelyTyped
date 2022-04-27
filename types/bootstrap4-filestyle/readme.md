# Installation
> `npm install --save @types/bootstrap4-filestyle`

# Summary
This package contains type definitions for bootstrap-filestyle (https://github.com/markusslima/bootstrap-filestyle) for bootstrap 4.

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bootstrap-filestyle.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bootstrap-filestyle/index.d.ts)
````ts
// Type definitions for bootstrap-filestyle 2.1
// Project: https://github.com/jcputney/bootstrap-filestyle
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface FilestyleOptions {
    text?: string | undefined;
    htmlIcon?: string | undefined;
    btnClass?: string | undefined;
    size?: string | undefined;
    input?: boolean | undefined;
    badge?: boolean | undefined;
    badgeName?: string | undefined;
    icon?: boolean | undefined;
    buttonBefore?: boolean | undefined;
    dragdrop?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    onChange?: ((event: FileList) => void) | undefined;
}

interface JQuery {

    filestyle(options?: FilestyleOptions): JQuery;

    filestyle(method: 'clear' | 'destroy' | 'htmlIcon' | 'htmlInput' | 'pushNameFiles'): JQuery;

    filestyle(method: 'disabled' | 'buttonBefore' | 'dragdrop' | 'icon' | 'input', value: boolean): JQuery;

    filestyle(method: 'size' | 'placeholder' | 'text' | 'btnClass' | 'htmlIcon' | 'badgeName', value: string): JQuery;
}

````

### Additional Details
 * Last updated: Wed, 27 Apr 2022 08:05:00 GMT+4
 * Dependencies: [@types/jquery](https://npmjs.com/package/@types/jquery)
 * Global values: none

# Credits
These definitions were written by [Mustafa Salaheldin](https://github.com/mustafasalahuldin).
