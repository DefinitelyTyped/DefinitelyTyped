import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * Helper class that stores manual decorators with observable {@link module:link/utils~ManualDecorator#value}
 * to support integration with the UI state. An instance of this class is a model with the state of individual manual decorators.
 * These decorators are kept as collections in {@link module:link/linkcommand~LinkCommand#manualDecorators}.
 */
export default class ManualDecorator implements Observable {
    /**
     * Creates a new instance of {@link module:link/utils~ManualDecorator}.
     */
    constructor(config: {
        id: string;
        label: string;
        attributes: Record<string, string>;
        defaultValue?: boolean | undefined;
        classes?: string | string[];
        styles?: Record<string, string>;
    });

    /**
     * A set of attributes added to downcasted data when the decorator is activated for a specific link.
     * Attributes should be added in a form of attributes defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
     */
    readonly attributes: Record<string, string>;

    /**
     * The default value of manual decorator.
     */
    readonly defaultValue: boolean;

    /**
     * An ID of a manual decorator which is the name of the attribute in the model, for example: 'linkManualDecorator0'.
     */
    readonly id: string;

    /**
     * The label used in the user interface to toggle the manual decorator.
     */
    readonly label: string;

    /**
     * The value of the current manual decorator. It reflects its state from the UI.
     */
    get value(): boolean;
    protected set value(val: boolean);

    /**
     * A set of classes added to downcasted data when the decorator is activated for a specific link.
     * Classes should be added in a form of classes defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
     */
    readonly classes: string | string[] | undefined;

    /**
     * A set of styles added to downcasted data when the decorator is activated for a specific link.
     * Styles should be added in a form of styles defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
     */
    readonly styles: Record<string, string> | undefined;

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
