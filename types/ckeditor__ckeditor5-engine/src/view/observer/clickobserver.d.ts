import DomEventObserver from "./domeventobserver";

export default class ClickObserver extends DomEventObserver {
    observe(domElement: HTMLElement, name?: string): void;
    domEventType: "click";
    onDomEvent(event: MouseEvent): void;
}
