import { Collection } from "@ckeditor/ckeditor5-utils";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import View from "./view";

export default interface ViewCollection<T extends View = View> extends Collection<T>, Observable {}

export default class ViewCollection<T extends View = View> extends Collection<T> implements Observable {
    constructor(initialItems?: Iterable<T>);
    destroy(): void;
    setParent(element: HTMLElement): void;
}
