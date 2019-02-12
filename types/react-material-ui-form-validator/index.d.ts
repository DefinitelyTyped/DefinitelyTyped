// Type definitions for react-material-ui-form-validator v2.0.3
// Project: https://github.com/NewOldMax/react-material-ui-form-validator
// Definitions by: Frank Brullo <https://github.com/FrankBrullo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1.3

import * as React from "react";
import { TextFieldProps } from "material-ui";

export interface ValidatorFormProps {
    className?: string;
    onSubmit: (event: React.FormEventHandler) => void;
    instantValidate?: boolean;
    onError?: (errors: any[]) => {};
    debounceTime?: number;
}
export class ValidatorForm extends React.Component<ValidatorFormProps> {
    public static addValidationRule(name: string, callback: (value: any) => boolean): void;
    public isFormValid(dryRun: boolean): boolean;
    public resetValidations(): void;
}

export interface ValidatorComponentProps {
    errorMessages?: any[] | string;
    validators?: any[];
    name: string;
    value: any;
    validatorListener?: (isValid: boolean) => void;
    withRequiredValidator?: boolean;
}
export class ValidatorComponent extends React.Component<ValidatorComponentProps & TextFieldProps> {}
export class TextValidator extends ValidatorComponent {}