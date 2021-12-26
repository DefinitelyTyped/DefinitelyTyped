import ComponentFactory from '@ckeditor/ckeditor5-ui/src/componentfactory';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import FocusTracker from '@ckeditor/ckeditor5-utils/src/focustracker';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Editor from './editor';

export default class EditorUI implements Emitter {
    constructor(editor: Editor);
    readonly editor: Editor;
    readonly componentFactory: ComponentFactory;
    readonly focusTracker: FocusTracker;
    get viewportOffset(): { top: number };
    protected set viewportOffset(value: { top: number });
    readonly element: null;
    update(): void;
    destroy(): void;
    setEditableElement(rootName: string, domElement: HTMLElement): void;
    getEditableElement(rootName?: string): HTMLElement | undefined;
    getEditableElementsNames(): Iterable<string>;

    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
