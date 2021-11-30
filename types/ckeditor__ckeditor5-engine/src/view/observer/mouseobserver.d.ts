import DomEventObserver from "./domeventobserver";

export default class MouseObserver extends DomEventObserver {
    observe(domElement: HTMLElement, name?: string): void;
    domEventType: ["mousedown", "mouseup", "mouseover", "mouseout"];
    onDomEvent(domEvent: MouseEvent): void;
}
