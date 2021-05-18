import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";

export interface BubblingEmitter extends Emitter {
    fire(eventOrInfo: EventInfo | string): unknown;
}

declare const BubblingEmitterMixin: BubblingEmitter;

export default BubblingEmitterMixin;
