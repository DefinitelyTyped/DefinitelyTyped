import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export interface BubblingEmitter extends Emitter {
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
            context?: string;
        },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
            context?: string;
        },
    ): void;
}

declare const BubblingEmitterMixin: BubblingEmitter;

export default BubblingEmitterMixin;
