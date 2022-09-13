import DomEventData from './domeventdata';
import DomEventObserver from './domeventobserver';
import { KeystrokeInfo } from '@ckeditor/ckeditor5-utils/src/keyboard';
import View from '@ckeditor/ckeditor5-engine/src/view/view';

/**
 * Observer for events connected with pressing keyboard keys.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class KeyObserver extends DomEventObserver {
    readonly domEventType: ['keydown', 'keyup'];

    onDomEvent(domEvent: HTMLElementEventMap[KeyObserver['domEventType'][number]]): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        KeyObserver: KeyObserver;
    }
}

/**
 * The value of both events - {@link module:engine/view/document~Document#event:keydown} and
 * {@link module:engine/view/document~Document#event:keyup}.
 */
// prettier-ignore
export class KeyEventData<V extends View = View> extends DomEventData<V, KeyboardEvent, keyof KeyboardEvent> implements KeystrokeInfo {
    /**
     * Code of the whole keystroke. See {@link module:utils/keyboard~getCode}.
     */
    readonly keystroke: number;
    readonly keyCode: number;
    readonly altKey: boolean;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
    readonly metaKey: boolean;
}
