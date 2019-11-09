/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    BroadcastCacheUpdate,
    BroadcastCacheUpdateOptions,
    Plugin,
} from "workbox-broadcast-update";

//==============================================================================
// WorkboxBroadcastUpdate.BroadcastCacheUpdate
//==============================================================================

export namespace BroadcastCacheUpdateTest {
    declare const options: BroadcastCacheUpdateOptions;

    // $ExpectType BroadcastCacheUpdate
    new BroadcastCacheUpdate();
    // $ExpectType BroadcastCacheUpdate
    new BroadcastCacheUpdate(options);

    declare const broadcast: BroadcastCacheUpdate;
    declare const notifyOptions: BroadcastCacheUpdate.NotifyIfUpdatedOptions;

    // $ExpectType Promise<void>
    broadcast.notifyIfUpdated(notifyOptions);
}

//==============================================================================
// WorkboxBroadcastUpdate.Plugin
//==============================================================================

export namespace BroadcastUpdatePluginTest {
    declare const options: BroadcastCacheUpdateOptions;

    // $ExpectType Plugin
    new Plugin();
    // $ExpectType Plugin
    new Plugin(options);
}
