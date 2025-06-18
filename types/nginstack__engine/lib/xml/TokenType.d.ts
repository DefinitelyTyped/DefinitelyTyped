export = TokenType;
declare function TokenType(): void;
type TokenType = any;
declare namespace TokenType {
    export {
        NO_TOKEN,
        DECLARATION,
        START_ELEMENT,
        END_ELEMENT,
        EMPTY_ELEMENT,
        CHARACTERS,
        COMMENT,
        PROCESSING_INSTRUCTION,
        DOCTYPE_DEFINITION,
        CDATA,
        END_DOCUMENT,
        ERROR,
        TokenString,
    };
}
declare let NO_TOKEN: string;
declare let DECLARATION: string;
declare let START_ELEMENT: string;
declare let END_ELEMENT: string;
declare let EMPTY_ELEMENT: string;
declare let CHARACTERS: string;
declare let COMMENT: string;
declare let PROCESSING_INSTRUCTION: string;
declare let DOCTYPE_DEFINITION: string;
declare let CDATA: string;
declare let END_DOCUMENT: string;
declare let ERROR: string;
type TokenString =
    | 'NoToken'
    | 'Declaration'
    | 'StartElement'
    | 'EndElement'
    | 'EmptyElement'
    | 'Characters'
    | 'Comment'
    | 'ProcessingInstruction'
    | 'DoctypeDefinition'
    | 'CData'
    | 'EndDocument';
