export function getAuthorizedExtensions(epcisDocument: {}): string[];
export function loadSchema(schema: any): any;
export function errorIsExplicit(error: object): {
    explicit: boolean;
    message: string;
};
export function validateAgainstSchema(data: object, schemaName: string): ValidatorResult;
export function ensureFieldSet(data: object, fieldSet: string): void;
export function checkIfExtensionsAreDefinedInTheContext(extensions: any, authorizedExtensions: any): {
    success: boolean;
    errors: any[];
};
export function validateEpcisDocument(epcisDocument: object, throwError?: boolean): ValidatorResult;
export interface ValidatorResult {
    /**
     * - true if the validator found no errors.
     */
    success: boolean;
    /**
     * - List of errors.
     */
    errors: string[];
}
