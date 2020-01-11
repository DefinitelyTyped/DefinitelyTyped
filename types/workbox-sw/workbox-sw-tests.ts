/* tslint:disable:comment-format no-namespace */

"use strict";

//==============================================================================
// workbox.loadModule
//==============================================================================

export namespace LoadModuleTest {
    declare const name: string;

    // $ExpectType void
    workbox.loadModule(name);
}

//==============================================================================
// workbox.setConfig
//==============================================================================

export namespace SetConfigTest {
    declare const options: workbox.WorkboxOptions;

    // $ExpectType void
    workbox.setConfig();
    // $ExpectType void
    workbox.setConfig(options);
}
