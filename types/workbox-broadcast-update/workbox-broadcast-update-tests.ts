"use strict";

import * as WorkboxBroadcastUpdate from "workbox-broadcast-update";
import { CacheDidUpdateCallbackParam } from "workbox-core/types/WorkboxPlugin";

declare const param: CacheDidUpdateCallbackParam;

// $ExpectType BroadcastCacheUpdate<void>
const broadcast = new WorkboxBroadcastUpdate.BroadcastCacheUpdate();
broadcast.notifyIfUpdated(param); // $ExpectType Promise<void>

// $ExpectType BroadcastUpdatePlugin<void>
const plugin = new WorkboxBroadcastUpdate.BroadcastUpdatePlugin();
