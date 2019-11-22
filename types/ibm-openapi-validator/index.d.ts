// Type definitions for ibm-openapi-validator 0.15
// Project: https://github.com/IBM/openapi-validator#readme
// Definitions by: Rifa Achrinza <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface validatorResultItem {
    path: string;
    message: string;
}

interface validatorResult {
    errors: [] | [ validatorResultItem ];
    warnings: [] | [ validatorResultItem ];
}

/**
 * @default false
 */
type validatorParameterDefaultMode = boolean;

/**
 * OpenAPI document validator
 * @param openApiDoc - OpenAPI document object
 * @param defaultMode - If set to true, the validator will ignore the .validaterc file and will use the [configuration defaults](https://github.com/IBM/openapi-validator#default-values).
 * @returns Validation results
 */
declare function validator(openApiDoc: {[property: string]: any}, defaultMode?: validatorParameterDefaultMode): Promise<validatorResult>;

export = validator;
