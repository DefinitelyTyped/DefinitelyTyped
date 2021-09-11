import Observer from "./observer";

export default abstract class DomEventObserver extends Observer {
    readonly domEventType: string | string[];
    useCapture: boolean;

    fire(eventType: string, domEvent: Event, additionalData?: any): void;
    abstract onDomEvent(event: UIEvent | ClipboardEvent): void;
}
