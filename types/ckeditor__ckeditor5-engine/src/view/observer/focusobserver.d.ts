import DomEventObserver from "./domeventobserver";

export default class FocusObserver extends DomEventObserver {
    domEventType: ["focus", "blur"];
    useCapture: true;
    onDomEvent(event: FocusEvent): void;
}
