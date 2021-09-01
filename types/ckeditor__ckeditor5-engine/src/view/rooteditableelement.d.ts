import Document from "./document";
import EditableElement from "./editableelement";

export default class RootEditableElement extends EditableElement {
    readonly rootName: string;

    constructor(document: Document, name: string);
}
