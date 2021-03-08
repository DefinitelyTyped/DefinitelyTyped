import View from "../view";
import DomEventObserver from "./domeventobserver";

/**
 * {@link module:engine/view/document~Document#event:compositionstart Compositionstart},
 * {@link module:engine/view/document~Document#event:compositionupdate compositionupdate} and
 * {@link module:engine/view/document~Document#event:compositionend compositionend} events observer.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class CompositionObserver extends DomEventObserver {
    constructor(view: View);

    onDomEvent(domEvent: Event): void;
}
