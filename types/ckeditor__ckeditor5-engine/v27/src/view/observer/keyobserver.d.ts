import DomEventData from "./domeventdata";
import DomEventObserver from "./domeventobserver";
import { KeystrokeInfo } from "@ckeditor/ckeditor5-utils/src/keyboard";

export default class KeyObserver extends DomEventObserver {
    domEventType: ["keydown", "keyup"];
    onDomEvent(domEvt: KeyboardEvent): void;
}

export class KeyEventData extends DomEventData implements KeystrokeInfo {
    altKey?: boolean | undefined;
    ctrlKey?: boolean | undefined;
    keyCode: number;
    shiftKey?: boolean | undefined;
    metaKey?: boolean | undefined;
    readonly keystroke: number;
}
