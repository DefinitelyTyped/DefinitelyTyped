import DomEventObserver from "./domeventobserver";

export default class MouseObserver extends DomEventObserver {
    domEventType: ["mousedown", "mouseup"];
    onDomEvent(domEvent: MouseEvent): void;
}
