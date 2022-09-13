import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import Document from '../document';
import ViewNode from '../node';
import Range from '../range';

/**
 * The event object passed to bubbling event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
export default class BubblingEventInfo<S extends Emitter | Node | Window = Emitter> extends EventInfo {
    constructor(source: S, name: string, startRange: Range);

    /**
     * The view range that the bubbling should start from.
     */
    readonly startRange: Range;

    /**
     * The current event phase.
     */
    readonly eventPhase: 'none' | 'capturing' | 'atTarget' | 'bubbling';

    /**
     * The current bubbling target.
     */
    readonly currentTarget: Document | ViewNode | null;
}
