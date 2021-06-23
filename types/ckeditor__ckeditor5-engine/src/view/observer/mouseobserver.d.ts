import DomEventObserver from "./domeventobserver";

export default class MouseObserver extends DomEventObserver {
    domEventType: ["mousedown", "mouseup", "mouseover", "mouseout"];
    onDomEvent(domEvent: MouseEvent): void;
}
