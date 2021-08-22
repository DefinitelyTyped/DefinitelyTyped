import Document from "../document";
import View from "../view";

export default abstract class Observer {
    readonly document: Document;
    readonly isEnabled: boolean;
    readonly view: View;

    constructor(view: View);
    checkShouldIgnoreEventFromTarget(domTarget: Node): boolean;
    destroy(): void;
    disable(): void;
    enable(): void;
    observe(domElement: HTMLElement, name?: string): void;
}
