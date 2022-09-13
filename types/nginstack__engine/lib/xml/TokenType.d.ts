export = TokenType;
declare function TokenType(): void;
type TokenType = any;
declare namespace TokenType {
    const NoToken: string;
    const Invalid: string;
    const StartDocument: string;
    const EndDocument: string;
    const StartElement: string;
    const EndElement: string;
    const Characters: string;
    const Comment: string;
    const DTD: string;
    const EntityReference: string;
    const ProcessingInstruction: string;
}
