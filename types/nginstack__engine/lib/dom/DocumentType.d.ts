export = DocumentType;
declare function DocumentType(): void;
declare class DocumentType {
    name: string;
    entities: NamedNodeMap;
    notations: NamedNodeMap;
}
declare namespace DocumentType {
    export { NamedNodeMap };
}
type NamedNodeMap = import('./NamedNodeMap');
