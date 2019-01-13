// Type definitions for chromecast-caf-receiver 3.x
// Project: https://github.com/googlecast
// Definitions by: Craig Bruce <https://github.com/craigrbruce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference path="./cast.framework.d.ts" />
/// <reference path="./cast.framework.breaks.d.ts" />
/// <reference path="./cast.framework.events.d.ts" />
/// <reference path="./cast.framework.messages.d.ts" />
/// <reference path="./cast.framework.system.d.ts" />
/// <reference path="./cast.framework.ui.d.ts" />

import * as framework from "./cast.framework";
import { PlayerDataChangedEvent } from './cast.framework.ui';
import { Event } from './cast.framework.events';

export as namespace cast;
export { framework };

declare global {
    type EventHandler = (event: Event) => void;
    type PlayerDataChangedEventHandler = (
        event: PlayerDataChangedEvent
    ) => void;
    type RequestHandler = (request: framework.NetworkRequestInfo) => void;
    type BinaryHandler = (data: Uint8Array) => Uint8Array;
}
