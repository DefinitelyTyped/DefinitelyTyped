export = XMLStreamReader;
declare function XMLStreamReader(doc: string, options?: XMLStreamReaderOptions): void;
declare class XMLStreamReader {
    constructor(doc: string, options?: XMLStreamReaderOptions);
    close(): void;
    readNext(): TokenString;
    readNextStartElement(): TokenString;
    skipCurrentElement(): TokenString;
    skipToNextStartElement(): TokenString;
    tokenType: TokenString;
    text: string;
    error: string;
    name: string;
    localName: string;
    namespaceUri: string;
    prefix: string;
    resolvedAttributes: ResolvedAttribute[];
    attributes: any;
    documentEncoding: string;
    documentVersion: string;
    standaloneDocument: boolean;
    isDeclaration(): boolean;
    isStartElement(): boolean;
    isEndElement(): boolean;
    isEmptyElement(): boolean;
    isCharacters(): boolean;
    isComment(): boolean;
    isProcessingInstruction(): boolean;
    isDTD(): boolean;
    isCData(): boolean;
    hasError(): boolean;
    done: boolean;
}
declare namespace XMLStreamReader {
    export { parseFile, TokenString, XMLStreamReaderOptions, ResolvedAttribute };
}
interface XMLStreamReaderOptions {
    expandEmpty?: boolean;
    trimText?: boolean;
}
type TokenString = import('./TokenType').TokenString;
interface ResolvedAttribute {
    name: string;
    localName: string;
    prefix: string;
    namespaceUri: string;
    value: string;
}
declare function parseFile(filePath: string, options?: XMLStreamReaderOptions): XMLStreamReader;
