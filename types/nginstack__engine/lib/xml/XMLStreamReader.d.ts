export = XMLStreamReader;
declare function XMLStreamReader(doc: string): void;
declare class XMLStreamReader {
    constructor(doc: string);
    close(): void;
    raiseError(msg: string): void;
    readElementText(behaviour?: any): string;
    readNext(): any;
    readNextStartElement(): boolean;
    skipCurrentElement(): void;
    addData(data: string): void;
    atEnd: boolean;
    errorString: string;
    error: any;
    hasError: boolean;
    isCDATA: boolean;
    isCharacters: boolean;
    isComment: boolean;
    isDTD: boolean;
    isEndDocument: boolean;
    isEndElement: boolean;
    isEntityReference: boolean;
    isProcessingInstruction: boolean;
    processingInstructionData: string;
    isStandaloneDocument: boolean;
    isStartDocument: boolean;
    isWhitespace: boolean;
    lineNumber: number;
    name: string;
    qualifiedName: string;
    namespaceUri: string;
    dtdName: string;
    dtdPublicId: string;
    dtdSystemId: string;
    documentVersion: string;
    documentEncoding: string;
    prefix: string;
    tokenType: any;
    tokenString: string;
    attributes: XmlStreamAttribute[];
    namespaceDeclarations: XmlStreamNamespaceDeclaration[];
}
declare namespace XMLStreamReader {
    export {
        parseFile,
        TokenType,
        ReadError,
        ReadElementTextBehaviour,
        XmlStreamAttribute,
        XmlStreamNamespaceDeclaration,
    };
}
interface XmlStreamAttribute {
    isDefault: boolean;
    name: string;
    namespaceUri: string;
    prefix: string;
    qualifiedName: string;
    value: string;
}
interface XmlStreamNamespaceDeclaration {
    namespaceUri: string;
    prefix: string;
}
declare function parseFile(filePath: string): XMLStreamReader;
import TokenType = require('./TokenType.js');
import ReadError = require('./ReadError.js');
import ReadElementTextBehaviour = require('./ReadElementTextBehaviour.js');
