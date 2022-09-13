import DocumentFragment from './documentfragment';
import DocumentSelection from './documentselection';
import Element from './element';
import Node from './node';
import LivePosition from './liveposition';
import LiveRange from './liverange';
import { Marker } from './markercollection';
import Position from './position';
import Range from './range';
import RootElement from './rootelement';
import Selection from './selection';
import Text from './text';

export default class TextProxy {
    readonly data: string;
    readonly endOffset: number;
    readonly isPartial: boolean;
    readonly offsetInText: number;
    readonly offsetSize: number;
    readonly parent: Element | DocumentFragment | null;
    readonly root: Node | DocumentFragment;
    readonly startOffset: number;
    readonly textNode: Text;

    constructor(text: Text, offsetInText: number, length: number);

    getAncestors(options?: {
        includeSelf?: boolean | undefined;
        parentFirst?: boolean | undefined;
    }): Array<Element | DocumentFragment>;
    getAttribute(key: string): string | number | boolean;
    getAttributeKeys(): ReturnType<Text['getAttributeKeys']>;
    getAttributes(): ReturnType<Text['getAttributes']>;
    getPath(): number[];
    hasAttribute(key: string): boolean;
    is(type: 'position' | 'model:position'): this is Position | LivePosition;
    is(type: 'livePosition' | 'model:livePosition'): this is LivePosition;
    is(type: 'range' | 'model:range'): this is Range | LiveRange;
    is(type: 'liveRange' | 'model:liveRange'): this is LiveRange;
    is(type: 'marker' | 'model:marker'): this is Marker;
    is(type: '$textProxy' | 'model:$textProxy' | 'textProxy' | 'model:textProxy'): this is TextProxy;
    is(type: 'documentFragment' | 'model:documentFragment'): this is DocumentFragment;
    is(type: 'selection' | 'model:selection'): this is Selection | DocumentSelection;
    is(type: 'documentSelection' | 'model:documentSelection'): this is DocumentSelection;
    is(type: 'node' | 'model:node'): this is Node | Element | Text | RootElement;
    is(type: '$text' | 'model:$text' | 'text' | 'model:text'): this is Text;
    is(type: 'element' | 'model:element'): this is Element | RootElement;
    is(type: 'rootElement' | 'model:rootElement'): this is RootElement;
    is<K extends string>(type: 'element' | 'model:element', name: K): this is (Element | RootElement) & { name: K };
    is<K extends string>(type: 'rootElement' | 'model:rootElement', name: K): this is RootElement & { name: K };
    is(type: string, name?: string): boolean;
}
