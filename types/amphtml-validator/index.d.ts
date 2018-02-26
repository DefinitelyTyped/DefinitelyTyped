// Type definitions for amphtml-validator 1.0
// Project: https://github.com/ampproject/amphtml/tree/master/validator/nodejs
// Definitions by: Kevin Tjiam <https://github.com/kevincharm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Context, Script } from 'vm'
import {
    ErrorCategoryCode,
    ValidationErrorCode,
    ValidationErrorSeverity,
    ValidationResultStatus
} from './validator.proto'

export interface ValidationError {
    severity: ValidationErrorSeverity
    line: number
    col: number
    message: string
    specUrl: string | null
    category: ErrorCategoryCode
    code: ValidationErrorCode
    params: string[]
}

export interface ValidationResult {
    status: ValidationResultStatus
    errors: ValidationError[]
}

export class Validator extends Script {
    sandbox: Context
    validateString(stringToValidate: string): ValidationResult
}

export function getInstance(validatorJs?: string, userAgent?: string): Promise<Validator>
export function newInstance(validatorJsContents: string): Validator
