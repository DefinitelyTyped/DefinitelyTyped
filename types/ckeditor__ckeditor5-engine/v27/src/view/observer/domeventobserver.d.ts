import Observer from "./observer";

export default abstract class DomEventObserver extends Observer {
    readonly domEventType: string | string[];
    useCapture: boolean;

    abstract onDomEvent(event: UIEvent | ClipboardEvent): void;
}
