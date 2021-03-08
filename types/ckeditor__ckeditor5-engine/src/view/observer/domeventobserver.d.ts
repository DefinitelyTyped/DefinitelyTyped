import Observer from "./observer";
import DomEventData from "./domeventdata";
import View from "../view";

/**
 * Base class for DOM event observers. This class handles
 * {@link module:engine/view/observer/observer~Observer#observe adding} listeners to DOM elements,
 * {@link module:engine/view/observer/observer~Observer#disable disabling} and
 * {@link module:engine/view/observer/observer~Observer#enable re-enabling} events.
 * Child class needs to define
 * {@link module:engine/view/observer/domeventobserver~DomEventObserver#domEventType DOM event type} and
 * {@link module:engine/view/observer/domeventobserver~DomEventObserver#onDomEvent callback}.
 *
 * For instance:
 *
 *        class ClickObserver extends DomEventObserver {
 *            // It can also be defined as a normal property in the constructor.
 *            get domEventType() {
 *                return 'click';
 *            }
 *
 *            onDomEvent( domEvent ) {
 *                this.fire( 'click', domEvent );
 *            }
 *        }
 */
export default abstract class DomEventObserver extends Observer {
    constructor(view: View);

    useCapture: boolean;
    readonly domEventType: string | string[];
    onDomEvent(callback: (data: DomEventData, event: Event) => void): void;
    observe(domElement: HTMLElement): void;
    isEnabled: boolean;

    /**
     * Calls `Document#fire()` if observer {@link #isEnabled is enabled}.
     *
     * @see module:utils/emittermixin~EmitterMixin#fire
     */
    fire(eventType: string, domEvent: Event, additionalData?: Record<string, string>): void;
}
