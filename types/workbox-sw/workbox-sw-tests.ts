/* tslint:disable:no-namespace */

"use strict";

// ==============================================================================
// workbox.loadModule
// ==============================================================================

export namespace LoadModuleTest {
    declare const name: string;
    declare const shouldBeString: boolean;

    // $ExpectType void
    workbox.loadModule(name);

    // @ts-expect-error
    workbox.loadModule(shouldBeString);
}

// ==============================================================================
// workbox.setConfig
// ==============================================================================

export namespace SetConfigTest {
    declare const options: workbox.WorkboxOptions;

    // $ExpectType void
    workbox.setConfig();
    // $ExpectType void
    workbox.setConfig(options);
}
