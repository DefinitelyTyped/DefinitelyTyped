import { Collection } from "@ckeditor/ckeditor5-utils";
import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import View from "./view";

export default class ViewCollection<T extends View = View> extends Collection<T> implements Emitter, Observable {
    constructor(initialItems?: Iterable<T>);
    destroy(): void;
    setParent(element: HTMLElement): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
