import { Node } from './node';

export class TextNode extends Node {
    readonly nodeType: number;
    readonly nodeValue: string;
    textContent: string;

    constructor(text: string);

    render(): string;
}
