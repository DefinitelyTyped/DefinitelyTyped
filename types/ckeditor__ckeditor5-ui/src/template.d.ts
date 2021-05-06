import * as engine from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import View from "./view";

export default class Template implements Emitter {
    attributes: Record<string, string>;
    children: Array<Template | Node>;
    eventListeners: Record<string, unknown>;
    tag: string;
    text: Array<string | TemplateValueSchema>;

    constructor(def: TemplateDefinition);
    apply(node: Node): void;
    getViews(): Iterable<View>;
    render(): HTMLElement | Text;
    revert(node: Node): void;

    static bind(observable: Observable, emitter: Emitter): BindChain;
    static extend(template: Template, def: TemplateDefinition): void;

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

export interface BindChain {
    if(attribute: string, valueIfTrue?: string, callback?: (value: string, node: Node) => boolean): TemplateBinding;
    to(eventNameOrFunctionOrAttribute: string, callback?: (value: string, node: Node) => string): TemplateBinding;
    to(callback: (evt: Event) => void): TemplateBinding;
}

declare class TemplateBinding {
    attribute: string;
    callback(): void;
    emitter: Emitter;
    observable: Observable;

    constructor(def: TemplateDefinition);
    activateAttributeListener(schema: TemplateValueSchema, updater: () => void, data: RenderData): () => void;
    getValue(node?: Node): any;
}

interface RenderData {
    intoFragment: boolean;
    isApplying: boolean;
    node: HTMLElement | Text;
    revertData: object;
}

export interface TemplateDefinition {
    attributes?: Record<string, TemplateValueSchema>;
    children?: Array<string | View | Node | TemplateDefinition>;
    on?: Record<string, TemplateListenerSchema>;
    tag?: string;
    text?: String | TemplateValueSchema | Array<string | TemplateValueSchema>;
}

export type TemplateListenerSchema = TemplateBinding | TemplateBinding[];

export type TemplateValueSchema =
    | string
    | TemplateBinding
    | Array<string | TemplateBinding>
    | { ns?: string; value: string | TemplateBinding | Array<string | TemplateBinding> }
    | Record<string, TemplateBinding>;

export class TemplateToBinding {
    activateDomEventListener(domEvtName: string, domSelector: string, data: RenderData): () => void;
}

export {};
