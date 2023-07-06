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
declare var NO_TOKEN: string;
declare var DECLARATION: string;
declare var START_ELEMENT: string;
declare var END_ELEMENT: string;
declare var EMPTY_ELEMENT: string;
declare var CHARACTERS: string;
declare var COMMENT: string;
declare var PROCESSING_INSTRUCTION: string;
declare var DOCTYPE_DEFINITION: string;
declare var CDATA: string;
declare var END_DOCUMENT: string;
declare var ERROR: string;
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
