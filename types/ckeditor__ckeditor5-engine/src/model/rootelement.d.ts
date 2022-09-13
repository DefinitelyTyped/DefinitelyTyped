import Element from "./element";
import Document from "./document";

export default class RootElement extends Element {
    readonly document: Document | null;
    readonly rootName: string;

    constructor(document: Document, name: string, rootName?: string);
}
