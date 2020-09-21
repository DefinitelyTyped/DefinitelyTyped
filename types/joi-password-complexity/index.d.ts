// Type definitions for joi-password-complexity 4.2
// Project: https://github.com/kamronbatman/joi-password-complexity
// Definitions by: Kamron Batman <https://github.com/kamronbatman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { ValidationOptions, Context } from 'joi';

interface ComplexityOptions = {
    min?: number,
    max?: number,
    lowerCase?: number,
    upperCase?: number,
    numeric?: number,
    symbol?: number,
    requirementCount?: number,
};

interface ValidationErrorItem {
    message: string;
    type: string;
    path: string[];
    options?: ValidationOptions;
    context?: Context;
}

interface ValidationError extends Error {
    details: ValidationErrorItem[];
    annotate(): string;
    _object: any;
}

interface ComplexityObject = {
    type: string,
    base: string,
    messages: {
        'passwordComplexity.tooShort': string,
        'passwordComplexity.tooLong': string,
        'passwordComplexity.lowercase': string,
        'passwordComplexity.uppercase': string,
        'passwordComplexity.numeric': string,
        'passwordComplexity.symbol': string,
        'passwordComplexity.requirementCount': string,
    },
    validate: (value: string) => {
        value: string
        error?: ValidationError,
    };
};

export default function(options: ComplexityOptions, label?: string): ComplexityObject;
