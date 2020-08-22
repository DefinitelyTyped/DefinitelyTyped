// Type definitions for react-material-ui-form-validator 2.0
// Project: https://github.com/NewOldMax/react-material-ui-form-validator
// Definitions by: Frank Brullo <https://github.com/FrankBrullo>
//                 J.R <https://github.com/jrguenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';
import { SelectFieldProps, TextFieldProps } from 'material-ui';

export interface ValidatorFormProps {
    className?: string;
    onSubmit: (event: React.FormEvent) => void;
    instantValidate?: boolean;
    onError?: (errors: any[]) => void;
    debounceTime?: number;
    [key: string]: any;
}
export class ValidatorForm extends React.Component<ValidatorFormProps> {
    static addValidationRule(name: string, callback: (value: any) => boolean): void;
    static removeValidationRule(name: string): void;
    isFormValid(dryRun: boolean): Promise<boolean>;
    resetValidations(): void;
}

export interface ValidatorComponentProps {
    errorMessages?: any[] | string;
    validators?: any[];
    name: string;
    value: any;
    validatorListener?: (isValid: boolean) => void;
    withRequiredValidator?: boolean;
    [key: string]: any;
}
export class ValidatorComponent extends React.Component<ValidatorComponentProps> {}
export class TextValidator extends React.Component<ValidatorComponentProps & TextFieldProps> {}
export class SelectValidator extends React.Component<ValidatorComponentProps & SelectFieldProps> {}
