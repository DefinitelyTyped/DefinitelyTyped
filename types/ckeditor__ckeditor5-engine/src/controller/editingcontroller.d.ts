import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import DowncastDispatcher from '../conversion/downcastdispatcher';
import Mapper from '../conversion/mapper';
import Model from '../model/model';
import { StylesProcessor } from '../view/stylesmap';
import View from '../view/view';

/**
 * Controller for the editing pipeline. The editing pipeline controls {@link ~EditingController#model model} rendering,
 * including selection handling. It also creates the {@link ~EditingController#view view} which builds a
 * browser-independent virtualization over the DOM elements. The editing controller also attaches default converters.
 */
export default class EditingController implements Observable {
    /**
     * Creates an editing controller instance.
     */
    constructor(model: Model, stylesProcessor: StylesProcessor);
    /**
     * Editor model.
     */
    readonly model: Model;

    /**
     * Editing view controller.
     */
    readonly view: View;

    /**
     * Mapper which describes the model-view binding.
     */
    readonly mapper: Mapper;

    /**
     * Downcast dispatcher that converts changes from the model to {@link #view the editing view}.
     */
    readonly downcastDispatcher: DowncastDispatcher;

    /**
     * Removes all event listeners attached to the `EditingController`. Destroys all objects created
     * by `EditingController` that need to be destroyed.
     */
    destroy(): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
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
