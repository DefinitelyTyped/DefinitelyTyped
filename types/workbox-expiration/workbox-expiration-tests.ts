"use strict";

import * as WorkboxExpiration from "workbox-expiration";

// $ExpectType CacheExpiration
const expiration = new WorkboxExpiration.CacheExpiration("tests");
expiration.delete(); // $ExpectType Promise<void>

// $ExpectType ExpirationPlugin
const plugin = new WorkboxExpiration.ExpirationPlugin();
plugin.deleteCacheAndMetadata(); // $ExpectType Promise<void>
