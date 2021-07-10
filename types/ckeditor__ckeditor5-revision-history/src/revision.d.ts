import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { DomEventData } from '@ckeditor/ckeditor5-engine';
import { Emitter } from '@ckeditor/ckeditor5-utils/src/dom/emittermixin';
import { EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export default class Revision implements Emitter, Observable {
    readonly authors: Set<User>;
    readonly creator: User | null;
    readonly data: Record<string, string>;
    readonly id: string;
    removeAttribute(name: string): void;
    setAttribute(name: string, value: unknown): void;
    toJSON(): Record<string, string>;

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
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
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
}
