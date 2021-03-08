import DomEventObserver from "./domeventobserver";
import DomEventData from "./domeventdata";
import { KeystrokeInfo } from "@ckeditor/ckeditor5-utils/src/keyboard";

/**
 * Observer for events connected with pressing keyboard keys.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class KeyObserver extends DomEventObserver {}

/**
 * The value of both events - {@link module:engine/view/document~Document#event:keydown} and
 * {@link module:engine/view/document~Document#event:keyup}.
 *
 * @class module:engine/view/observer/keyobserver~KeyEventData
 * @extends module:engine/view/observer/domeventdata~DomEventData
 * @implements module:utils/keyboard~KeystrokeInfo
 */
interface KeyEventData extends DomEventData, KeystrokeInfo {
    /**
     * Code of the whole keystroke. See {@link module:utils/keyboard~getCode}.
     */
    readonly keystroke: number;
}
