import Observer from './observer';

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
 *    class ClickObserver extends DomEventObserver {
 *      // It can also be defined as a normal property in the constructor.
 *      get domEventType() {
 *        return 'click';
 *      }
 *
 *      onDomEvent( domEvent ) {
 *        this.fire( 'click', domEvent );
 *      }
 *    }
 */
export default abstract class DomEventObserver extends Observer {
    /**
     * Type of the DOM event the observer should listen to. Array of types can be defined
     * if the observer should listen to multiple DOM events.
     */
    protected abstract readonly domEventType: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap>;

    /**
     * Callback which should be called when the DOM event occurred. Note that the callback will not be called if
     * observer {@link #isEnabled is not enabled}.
     */
    abstract onDomEvent(event: UIEvent | ClipboardEvent): void;

    /**
     * If set to `true` DOM events will be listened on the capturing phase.
     * Default value is `false`.
     */
    protected set useCapture(value: boolean);

    observe(domElement: HTMLElement): void;

    /**
     * Calls `Document#fire()` if observer {@link #isEnabled is enabled}.
     */
    fire<E extends keyof HTMLElementEventMap, D extends HTMLElementEventMap[E], K extends keyof D>(
        eventType: E,
        domEvent: D,
        additionalData?: Record<K, D[K]>,
    ): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        DomEventObserver: DomEventObserver;
    }
}
