import { ContextPlugin } from "@ckeditor/ckeditor5-core";
import { DomEventData } from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

export default class Notification extends ContextPlugin implements Emitter {
    showInfo(message: string, data?: { namespace?: string | undefined; title?: string | undefined }): void;
    showSuccess(message: string, data?: { namespace?: string | undefined; title?: string | undefined }): void;
    showWarning(message: string, data?: { namespace?: string | undefined; title?: string | undefined }): void;

    on(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
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

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Notification: Notification;
    }
}
