import { DomEventData } from '@ckeditor/ckeditor5-engine';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { Emitter as DomEmitter } from '@ckeditor/ckeditor5-utils/src/dom/emittermixin';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Template, { BindChain as TemplateBindChain, TemplateDefinition } from './template';
import ViewCollection from './viewcollection';

export default class View implements DomEmitter, Observable {
    constructor(locale?: Locale);
    element?: HTMLElement | null;
    readonly isRendered: boolean;
    readonly locale?: Locale;
    template: Template | boolean;
    t: Locale['t'] | undefined;
    readonly bindTemplate: TemplateBindChain;
    createCollection(views?: Iterable<View>): ViewCollection;
    registerChild(children: View | Iterable<View>): void;

    deregisterChild(children: View | Iterable<View>): void;
    setTemplate(definition: TemplateDefinition): void;
    extendTemplate(definition: Partial<TemplateDefinition>): void;
    render(): void;
    destroy(): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

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
        callback: (info: EventInfo<N, S>, data: DomEventData) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, data: DomEventData) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
