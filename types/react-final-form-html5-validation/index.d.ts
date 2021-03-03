// Type definitions for react-final-form-html5-validation 1.1
// Project: https://github.com/final-form/react-final-form-html5-validation#readme
// Definitions by: Saiichi Hashimoto <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type { ComponentProps, FunctionComponent } from 'react';
import { Field as FieldNative } from 'react-final-form';

export const Field: FunctionComponent<ComponentProps<typeof FieldNative> & {
    badInput?: string;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    pattern?: string;
    patternMismatch?: string;
    rangeOverflow?: string;
    rangeUnderflow?: string;
    required?: boolean;
    step?: number;
    stepMismatch?: string;
    tooLong?: string;
    tooShort?: string;
    typeMismatch?: string;
    valueMissing?: string;
}>;
