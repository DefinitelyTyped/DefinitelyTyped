import Element, { Node } from './Element';

export default function JSONify<TNode extends Node>(el: TNode): TNode extends Element ? ElementJson : TNode;

export interface ElementJson {
    name: string;
    attrs: { [attrName: string]: any };
    children: Array<ElementJson | Node>;
}
