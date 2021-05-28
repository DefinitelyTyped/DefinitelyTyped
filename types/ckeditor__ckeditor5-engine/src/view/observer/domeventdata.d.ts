import Element from "../element";
import View from "../view";

export default class DomEventData {
    readonly target: Element;

    constructor(view: View, domEvent: Event, additionalData?: Record<string, unknown>);
    preventDefault(): void;
    stopPropagation(): void;
}
