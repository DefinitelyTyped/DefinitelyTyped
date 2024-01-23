export as namespace Validate;

export function useValidate(): {
    validateSingleSync: <T extends string>(input: ValidateInputType<T, T>, inputs?: any) => ValidateInputType<T, T>;
    validateSingle: <T extends string>(input: ValidateInputType<T, T>, inputs?: any) => Promise<ValidateInputType<T, T>>;
    validateManySync: (inputs: InputsToValidateType<string>) => boolean;
    validateMany: (inputs: InputsToValidateType<string>) => Promise<boolean>;
};

export type InputsToValidateType<T extends string> = {
    [key in T]: ValidateInputType<T, T>;
};

export interface ValidateInputType<T extends string, U extends T> {
    validations?: AsyncValidateFunctionType<T>;
    validationsSync?: ValidateFunctionType<T>;
    errors: string[];
    requestErrors?: string[];
    crossfields?: U[];
    attributes: InputAttributes;
    required?: { value: boolean; message?: string };
}

export interface InputAttributes {
    value: string;
    files?: FileList | null;
}

export type ValidateFunctionType<T extends string> = (
    inputAttributes: InputAttributes,
    currentInputs?: InputsToValidateType<T>,
) => Validation[];

export type AsyncValidateFunctionType<T extends string> = (
    inputAttributes: InputAttributes,
    currentInputs?: InputsToValidateType<T>,
) => Promise<Validation[]>;

export interface Validation {
    conditional: boolean | RegExpMatchArray | null | Promise<boolean | string>;
    message: string;
}

