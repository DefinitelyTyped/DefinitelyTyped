import DomEventObserver from "./domeventobserver";

export default class InputObserver extends DomEventObserver {
    domEventType: ["beforeinput"];
    onDomEvent(event: InputEvent): void;
}
