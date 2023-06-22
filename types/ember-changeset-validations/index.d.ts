// Type definitions for ember-changeset-validations 4.1
// Project: https://github.com/poteto/ember-changeset-validations
// Definitions by: golovkoe <https://github.com/elenagolovko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

// ember-changeset/types

export type ValidationOk = boolean | [boolean];
export type ValidationErr = string | string[];
export type ValidationResult = ValidationOk | ValidationErr;

export interface ValidatorMapFunc {
    (key: string,
     newValue: unknown,
     oldValue: unknown,
     changes: unknown,
     content: object): ValidationResult | Promise<ValidationResult>;
}

export type ValidatorMap = {
    [s: string]: ValidatorMapFunc | ValidatorMapFunc[] | unknown;
} | null | undefined;

export type ValidatorAction = {
    (params: {
        key: string;
        newValue: unknown;
        oldValue: unknown;
        changes: unknown;
        content: object;
    }): ValidationResult | Promise<ValidationResult>;
} | null | undefined;

export default function lookupValidator(validationMap: ValidatorMap): ValidatorAction;
