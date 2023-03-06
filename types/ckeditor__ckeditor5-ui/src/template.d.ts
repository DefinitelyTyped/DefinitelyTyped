import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import View from './view';
import ViewCollection from './viewcollection';

export default class Template implements Emitter {
    constructor(def: TemplateDefinition);
    tag: string;
    text: Array<string | TemplateValueSchema>;
    attributes: Record<string, string>;
    children: Array<Template | Node>;
    eventListeners: Record<string, unknown>;
    render(): HTMLElement | Text;
    apply(node: Node): void;
    revert(node: Node): void;
    getViews(): Iterable<View>;

    static bind(observable: Observable, emitter: Emitter): BindChain;
    static extend(template: Template, def: Partial<TemplateDefinition>): void;

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
    stopListening<E extends Emitter, P = string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P & string>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export class TemplateBinding<T = unknown> {
    protected constructor(def: TemplateDefinition);
    observable: Observable;
    emitter: Emitter;
    attribute: string;
    callback?(): T;

    getValue(node?: Node): T;
    activateAttributeListener(schema: TemplateValueSchema, updater: () => void, data: RenderData): () => void;
}

export class TemplateToBinding extends TemplateBinding {
    private constructor();
    activateDomEventListener(domEvtName: string, domSelector: string, data: RenderData): () => void;
}

export class TemplateIfBinding<T = boolean> extends TemplateBinding<T> {
    private constructor();
    valueIfTrue?: string;
}

export interface BindChain {
    if(attribute: string, valueIfTrue?: string, callback?: (value: string, node: Node) => boolean): TemplateIfBinding;
    to(
        eventNameOrFunctionOrAttribute: string | ((evt: Event) => void),
        callback?: (value: unknown, node: Node) => string,
    ): TemplateToBinding;
}

export interface RenderData {
    intoFragment: boolean;
    node: HTMLElement | Text;
    isApplying: boolean;
    revertData: object;
}

export type TemplateDefinition =
    | {
          tag: string;
          children?: Array<TemplateDefinition | View | Template | HTMLElement | string> | ViewCollection;
          attributes?: Record<string, TemplateValueSchema>;
          text?: string | TemplateValueSchema | Array<string | TemplateValueSchema>;
          on?: Record<string, TemplateListenerSchema>;
      }
    | {
          text: string | TemplateValueSchema | Array<string | TemplateValueSchema>;
      };

export type TemplateListenerSchema = string | TemplateBinding | TemplateBinding[];

export type TemplateValueSchema =
    | string
    | TemplateBinding
    | Array<string | TemplateBinding>
    | { ns?: string | undefined; value: string | TemplateBinding | Array<string | TemplateBinding> }
    | Record<string, TemplateBinding>;
