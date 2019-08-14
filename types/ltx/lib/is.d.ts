import { Element, Node } from './Element';

export function isNode(el: any): el is Node;
export function isElement(el: any): el is Element;
export function isText(el: any): el is string;
