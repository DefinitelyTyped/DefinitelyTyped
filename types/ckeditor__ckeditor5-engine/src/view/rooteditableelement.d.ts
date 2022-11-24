import Document from './document';
import EditableElement from './editableelement';

export default class RootEditableElement extends EditableElement {
    constructor(document: Document, name: string);
    rootName: string;
}
