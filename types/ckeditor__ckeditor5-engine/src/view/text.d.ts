import Document from './document';
import Node from './node';

export default class Text extends Node {
    readonly data: string;

    constructor(document: Document, data: string);

    isSimilar(otherNode: Text): boolean;
    toJSON(): ReturnType<Node['toJSON']> & { data: string };
}
