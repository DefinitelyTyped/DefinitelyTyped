// Type definitions for chromecast-caf-receiver 3.x
// Project: https://developers.google.com/cast/docs/reference/caf_receiver/
// Definitions by: Craig Bruce https://github.com/craigrbruce
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./cast.framework.d.ts" />
/// <reference path="./cast.framework.breaks.d.ts" />
/// <reference path="./cast.framework.events.d.ts" />
/// <reference path="./cast.framework.messages.d.ts" />
/// <reference path="./cast.framework.system.d.ts" />
/// <reference path="./cast.framework.ui.d.ts" />

import { PlayerDataChangedEvent } from './cast.framework.ui';
import { NetworkRequestInfo } from './cast.framework';
import { Event } from './cast.framework.events';

export = cast;
declare namespace cast {
    export type EventHandler = (event: Event) => void;
    export type PlayerDataChangedEventHandler = (
        event: PlayerDataChangedEvent
    ) => void;
    export type RequestHandler = (request: NetworkRequestInfo) => void;
    export type BinaryHandler = (data: Uint8Array) => Uint8Array;
}
