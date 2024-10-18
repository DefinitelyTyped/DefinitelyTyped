/// <reference path="./cast.debug.d.ts" />
/// <reference path="./cast.framework.d.ts" />
/// <reference path="./cast.framework.breaks.d.ts" />
/// <reference path="./cast.framework.events.d.ts" />
/// <reference path="./cast.framework.messages.d.ts" />
/// <reference path="./cast.framework.system.d.ts" />
/// <reference path="./cast.framework.ui.d.ts" />

import * as debugNs from "./cast.debug";
import * as frameworkNs from "./cast.framework";
import {
    BitrateChangedEvent,
    BreaksEvent,
    BufferingEvent,
    CacheItemEvent,
    CacheLoadedEvent,
    ClipEndedEvent,
    CustomStateEvent,
    EmsgEvent,
    ErrorEvent,
    Event,
    Id3Event,
    LiveStatusEvent,
    LoadEvent,
    MediaElementEvent,
    MediaFinishedEvent,
    MediaInformationChangedEvent,
    MediaPauseEvent,
    MediaStatusEvent,
    RequestEvent,
    SegmentDownloadedEvent,
    TimedMetadataEvent,
} from "./cast.framework.events";
import { Event as SystemEvent } from "./cast.framework.system";
import { PlayerDataChangedEvent } from "./cast.framework.ui";

export namespace cast {
    const debug: typeof debugNs;
    const framework: typeof frameworkNs;
}

export { debugNs as debug, frameworkNs as framework };

declare global {
    const cast: {
        debug: typeof debugNs;
        framework: typeof frameworkNs;
    };

    type EventHandler = (event: Event) => void;
    type SystemEventHandler = (event: SystemEvent) => void;
    type Id3EventHandler = (event: Id3Event) => void;
    type ErrorEventHandler = (event: ErrorEvent) => void;
    type MediaElementEventHandler = (event: MediaElementEvent) => void;
    type PauseEventHandler = (event: MediaPauseEvent) => void;
    type BitrateChangedEventHandler = (event: BitrateChangedEvent) => void;
    type BreaksEventHandler = (event: BreaksEvent) => void;
    type BufferingEventHandler = (event: BufferingEvent) => void;
    type CacheLoadedEventHandler = (event: CacheLoadedEvent) => void;
    type CacheItemEventHandler = (event: CacheItemEvent) => void;
    type ClipEndedEventHandler = (event: ClipEndedEvent) => void;
    type EmsgEventHandler = (event: EmsgEvent) => void;
    type MediaStatusEventHandler = (event: MediaStatusEvent) => void;
    type CustomStateEventHandler = (event: CustomStateEvent) => void;
    type MediaInformationChangedEventHandler = (event: MediaInformationChangedEvent) => void;
    type MediaFinishedEventHandler = (event: MediaFinishedEvent) => void;
    type LoadEventHandler = (event: LoadEvent) => void;
    type SegmentDownloadedEventHandler = (event: SegmentDownloadedEvent) => void;
    type RequestEventHandler = (event: RequestEvent) => void;
    type LiveStatusEventHandler = (event: LiveStatusEvent) => void;
    type TimedMetadataEventHandler = (event: TimedMetadataEvent) => void;
    type PlayerDataChangedEventHandler = (event: PlayerDataChangedEvent) => void;
    type RequestHandler = (request: framework.NetworkRequestInfo) => void;
    type BinaryHandler = (data: Uint8Array) => Uint8Array | Promise<Uint8Array>;
}
