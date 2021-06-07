import DomEventObserver from "./domeventobserver";

export default class ClickObserver extends DomEventObserver {
    domEventType: "click";
    onDomEvent(event: MouseEvent): void;
}
