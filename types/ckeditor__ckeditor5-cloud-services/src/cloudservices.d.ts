import { ContextPlugin } from "@ckeditor/ckeditor5-core";
import { DomEventData } from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Token from "./token/token";

export default class CloudServices extends ContextPlugin implements Emitter, Observable {
    token: Token | null;
    tokenUrl?: string | (() => string) | undefined;
    uploadUrl: string;

    getTokenFor(tokenUrl: string): Token;
    registerTokenUrl(tokenUrl: string | (() => string)): Promise<Token>;

    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export interface CloudServicesConfig {
    bundleVersion?: string | undefined;
    tokenUrl: string | (() => string);
    uploadUrl: string;
    webSocketUrl?: string | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CloudServices: CloudServices;
    }
}
