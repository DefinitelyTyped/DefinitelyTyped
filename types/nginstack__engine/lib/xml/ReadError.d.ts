export = ReadError;
declare function ReadError(): void;
type ReadError = any;
declare namespace ReadError {
    const NoError: string;
    const UnexpectedElementError: string;
    const CustomError: string;
    const NotWellFormedError: string;
    const PrematureEndOfDocumentError: string;
}
