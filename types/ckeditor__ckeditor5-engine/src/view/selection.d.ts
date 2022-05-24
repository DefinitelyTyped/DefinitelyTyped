import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import AttributeElement from './attributeelement';
import ContainerElement from './containerelement';
import DocumentFragment from './documentfragment';
import DocumentSelection from './documentselection';
import EditableElement from './editableelement';
import Element from './element';
import EmptyElement from './emptyelement';
import { Item } from './item';
import Node from './node';
import Position from './position';
import Range from './range';
import RawElement from './rawelement';
import RootEditableElement from './rooteditableelement';
import Text from './text';
import TextProxy from './textproxy';
import UIElement from './uielement';

export type Selectable = Selection | DocumentSelection | Position | Iterable<Range> | Range | Item;

export default class Selection implements Emitter {
    readonly anchor: Position;
    readonly editableElement: EditableElement | null;
    readonly fakeSelectionLabel: string;
    readonly focus: Position;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly isFake: boolean;
    readonly rangeCount: number;

    constructor(
        selectable?: Item,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: boolean | undefined },
    );
    constructor(
        selectable?: Selectable | null,
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: boolean | undefined },
    );
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedElement(): Element | null;
    is(
        type: 'node' | 'view:node',
    ): this is
        | Node
        | Element
        | Text
        | ContainerElement
        | EditableElement
        | RootEditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement;
    is(type: 'documentFragment' | 'view:documentFragment'): this is DocumentFragment;
    is(type: 'position' | 'view:position'): this is Position;
    is(type: 'range' | 'view:range'): this is Range;
    is(type: 'selection' | 'view:selection'): this is Selection | DocumentSelection;
    is(type: 'documentSelection' | 'view:documentSelection'): this is DocumentSelection;
    is(
        type: 'element' | 'view:element',
    ): this is
        | Element
        | ContainerElement
        | EditableElement
        | RootEditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement;
    is<K extends string>(
        type: 'element' | 'view:element',
        name: K,
    ): this is (
        | Element
        | ContainerElement
        | EditableElement
        | RootEditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement
    ) & { name: K };
    is(type: 'attributeElement' | 'view:attributeElement'): this is AttributeElement;
    is<K extends string>(
        type: 'attributeElement' | 'view:attributeElement',
        name: K,
    ): this is AttributeElement & { name: K };
    is(
        type: 'containerElement' | 'view:containerElement',
    ): this is ContainerElement | EditableElement | RootEditableElement;
    is<K extends string>(
        type: 'containerElement' | 'view:containerElement',
        name: K,
    ): this is (ContainerElement | EditableElement | RootEditableElement) & { name: K };
    is(type: 'editableElement' | 'view:editableElement'): this is EditableElement | RootEditableElement;
    is<K extends string>(
        type: 'editableElement' | 'view:editableElement',
        name: K,
    ): this is (EditableElement | RootEditableElement) & { name: K };
    is(type: 'rootEditableElement' | 'view:rootEditableElement'): this is RootEditableElement;
    is<K extends string>(
        type: 'rootEditableElement' | 'view:rootEditableElement',
        name: K,
    ): this is RootEditableElement & { name: K };
    is(type: 'uiElement' | 'view:uiElement'): this is UIElement;
    is<K extends string>(type: 'uiElement' | 'view:uiElement', name: K): this is UIElement & { name: K };
    is(type: 'rawElement' | 'view:rawElement'): this is RawElement;
    is<K extends string>(type: 'rawElement' | 'view:rawElement', name: K): this is RawElement & { name: K };
    is(type: 'emptyElement' | 'view:emptyElement'): this is EmptyElement;
    is<K extends string>(type: 'emptyElement' | 'view:emptyElement', name: K): this is EmptyElement & { name: K };
    is(type: '$textProxy' | 'view:$textProxy' | 'textProxy' | 'view:textProxy'): this is TextProxy;
    is(type: '$text' | 'view:$text' | 'text' | 'view:text'): this is Text;
    is(type: string, name?: string): boolean;
    isEqual(otherSelection: Selection): boolean;
    isSimilar(otherSelection: Selection): boolean;
    setFocus(itemOrPosition: Item, offset?: number | 'end' | 'before' | 'after'): void;
    setFocus(itemOrPosition: Position): void;
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: boolean | undefined },
    ): void;

    on<K extends string>(
        event: K,
        callback: (info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (ev: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
