/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    CacheExpiration,
    CacheExpirationConfig,
    ExpirationPluginConfig,
    Plugin,
} from "workbox-expiration";

//==============================================================================
// WorkboxExpiration.CacheExpiration
//==============================================================================

export namespace CacheExpirationTest {
    declare const cacheName: string;
    declare const config: CacheExpirationConfig;

    // $ExpectType CacheExpiration
    new CacheExpiration(cacheName);
    // $ExpectType CacheExpiration
    new CacheExpiration(cacheName, config);

    declare const expiration: CacheExpiration;
    declare const cachedURL: string;

    // $ExpectType Promise<void>
    expiration.delete();

    // $ExpectType Promise<void>
    expiration.expireEntries();

    // $ExpectType Promise<boolean>
    expiration.isURLExpired(cachedURL);

    // $ExpectType Promise<void>
    expiration.updateTimestamp(cachedURL);
}

//==============================================================================
// WorkboxExpiration.Plugin
//==============================================================================

export namespace ExpirationPluginTest {
    declare const config: ExpirationPluginConfig;

    // $ExpectType Plugin
    new Plugin();
    // $ExpectType Plugin
    new Plugin(config);

    declare const plugin: Plugin;

    // $ExpectType Promise<void>
    plugin.deleteCacheAndMetadata();
}
