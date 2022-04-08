import * as engine from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import FocusTracker from "@ckeditor/ckeditor5-utils/src/focustracker";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Editor from "./editor";

// import {ComponentFactory} from "@ckeditor/ckeditor5-ui/src/componentfactory";
type ComponentFactory = any;

export default class EditorUI implements Emitter {
    readonly componentFactory: ComponentFactory;
    readonly editor: Editor;
    readonly element: HTMLElement | null;
    readonly focusTracker: FocusTracker;

    constructor(editor: Editor);
    destroy(): void;
    getEditableElement(rootName?: string): HTMLElement | undefined;
    getEditableElementsNames(): Iterable<string>;
    setEditableElement(rootName: string, domElement: HTMLElement): void;
    update(): void;

    on: (
        event: string,
        callback: (info: EventInfo<Emitter>, data: engine.view.observer.DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: engine.view.observer.DomEventData) => void): void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    stopListening(
        emitter?: Emitter,
        event?: string,
        callback?: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export {};
