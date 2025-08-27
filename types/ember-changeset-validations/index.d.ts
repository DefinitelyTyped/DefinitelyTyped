// ember-changeset/types

export type ValidationOk = boolean | [boolean];
export type ValidationErr = string | string[];
export type ValidationResult = ValidationOk | ValidationErr;

export interface ValidatorMapFunc {
    (
        key: string,
        newValue: unknown,
        oldValue: unknown,
        changes: unknown,
        content: object,
    ): ValidationResult | Promise<ValidationResult>;
}

export type ValidatorMap =
    | {
        [s: string]: ValidatorMapFunc | ValidatorMapFunc[] | unknown;
    }
    | null
    | undefined;

export type ValidatorAction =
    | {
        (params: {
            key: string;
            newValue: unknown;
            oldValue: unknown;
            changes: unknown;
            content: object;
        }): ValidationResult | Promise<ValidationResult>;
    }
    | null
    | undefined;

export default function lookupValidator(validationMap: ValidatorMap): ValidatorAction;
