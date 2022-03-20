import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import Document from '../document';
import Node from '../node';
import Range from '../range';

/**
 * The event object passed to bubbling event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
export default class BubblingEventInfo extends EventInfo {
    constructor(source: Document, name: string, startRange: Range);

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
    readonly currentTarget: Document | Node;
}
