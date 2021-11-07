import { ChangeType } from "./document";
import DocumentSelection from "./documentselection";
import DomConverter from "./domconverter";
import Node from "./node";

export default class Renderer {
    readonly domConverter: DomConverter;
    readonly domDocuments: Set<Document>;
    readonly isFocused: boolean;
    readonly markedAttributes: Set<Node>;
    readonly markedChildren: Set<Node>;
    readonly markedTexts: Set<Node>;
    readonly selection: DocumentSelection;

    constructor(domConverter: DomConverter, selection: DocumentSelection);
    markToSync(type: ChangeType, node: Node): void;
    render(): void;
}
