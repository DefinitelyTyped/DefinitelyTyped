import DomEventData from './domeventdata';
import DomEventObserver from './domeventobserver';
import { KeystrokeInfo } from '@ckeditor/ckeditor5-utils/src/keyboard';

export default class KeyObserver extends DomEventObserver {
    observe(domElement: HTMLElement, name?: string): void;
    domEventType: ['keydown', 'keyup'];
    onDomEvent(domEvt: KeyboardEvent): void;
}

export class KeyEventData extends DomEventData implements KeystrokeInfo {
    readonly keyCode: number;
    readonly altKey: boolean;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
    readonly metaKey: boolean;
    readonly keystroke: number;
}
