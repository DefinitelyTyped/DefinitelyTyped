import ComponentFactory from "@ckeditor/ckeditor5-ui/src/componentfactory";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import FocusTracker from "@ckeditor/ckeditor5-utils/src/focustracker";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Editor from "./editor";

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

    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N>, ...data: unknown[]) => void): void;
    listenTo<S extends Emitter, N extends string>(
        emitter: S,
        event: N,
        callback: (info: EventInfo<N, S>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
