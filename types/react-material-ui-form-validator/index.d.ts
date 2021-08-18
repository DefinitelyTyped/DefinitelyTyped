// Type definitions for react-material-ui-form-validator 2.1
// Project: https://github.com/NewOldMax/react-material-ui-form-validator
// Definitions by: Frank Brullo <https://github.com/FrankBrullo>
//                 Ivan Siacho <https://github.com/Ivansiach0>
//                 J.R <https://github.com/jrguenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';
import { SelectFieldProps, TextFieldProps } from 'material-ui';

export interface ValidatorFormProps {
    className?: string | undefined;
    onSubmit: (event: React.FormEvent) => void;
    instantValidate?: boolean | undefined;
    onError?: ((errors: any[]) => void) | undefined;
    debounceTime?: number | undefined;
    [key: string]: any;
}
export class ValidatorForm extends React.Component<ValidatorFormProps> {
    static addValidationRule(name: string, callback: (value: any) => boolean | Promise<boolean>): void;
    static removeValidationRule(name: string): void;
    isFormValid(dryRun: boolean): Promise<boolean>;
    resetValidations(): void;
}

export interface ValidatorComponentProps {
    errorMessages?: any[] | string | undefined;
    validators?: any[] | undefined;
    name: string;
    value: any;
    validatorListener?: ((isValid: boolean) => void) | undefined;
    withRequiredValidator?: boolean | undefined;
    [key: string]: any;
}

export class ValidatorComponent extends React.Component<ValidatorComponentProps> {
    getErrorMessage(): string | boolean;
    isValid(): boolean;
    makeInvalid(): void;
    makeValid(): void;
    validate(value: string, includeRequired?: boolean, dryRun?: boolean): void;
}
export class TextValidator extends React.Component<ValidatorComponentProps & TextFieldProps> {
    getErrorMessage(): string | boolean;
    isValid(): boolean;
    makeInvalid(): void;
    makeValid(): void;
    validate(value: string, includeRequired?: boolean, dryRun?: boolean): void;
}
export class SelectValidator extends React.Component<ValidatorComponentProps & SelectFieldProps> {
    getErrorMessage(): string | boolean;
    isValid(): boolean;
    makeInvalid(): void;
    makeValid(): void;
    validate(value: string, includeRequired?: boolean, dryRun?: boolean): void;
}
