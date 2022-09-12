import { ValidatorMapFunc } from '../index';

export function validateFormat(
    options: {
        allowBlank?: boolean;
        message?: string;
        regex?: RegExp;
        type?: string;
        inverse?: boolean;
    }
): ValidatorMapFunc;

export function validatePresence(
    options: {
        presence: boolean;
        message?: string;
        ignoreBlank?: boolean;
        on?: string | string[];
    } | boolean
): ValidatorMapFunc;

export function validateConfirmation(
    options: {
        on?: string;
        message?: string;
        allowBlank?: boolean;
    }
): ValidatorMapFunc;

export function validateDate(
    options: {
        allowBlank?: boolean;
        before?: Date | number;
        onOrBefore?: Date | number;
        after?: Date | number;
        onOrAfter?: Date | number;
        message?: string;
    }
): ValidatorMapFunc;

export function validateExclusion(
    options: {
        in?: string[];
        list?: string[];
        range?: number[];
        allowBlank?: boolean;
        message?: string;
    }
): ValidatorMapFunc;

export function validateInclusion(
    options: {
        in?: string[];
        list?: string[];
        range?: number[];
        allowBlank?: boolean;
        message?: string;
    }
): ValidatorMapFunc;

export function validateLength(
    options: {
        min?: number;
        max?: number;
        is?: number;
        allowBlank?: boolean;
        message?: string;
    }
): ValidatorMapFunc;

export function validateNumber(
    options: {
        is?: number;
        allowBlank?: boolean;
        integer?: boolean;
        lt?: number;
        lte?: number;
        gt?: number;
        gte?: number;
        positive?: boolean;
        odd?: boolean;
        even?: boolean;
        multipleOf?: number
        message?: string;
    }
): ValidatorMapFunc;
