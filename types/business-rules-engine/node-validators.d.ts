// Type definitions for business-rules-engine - v1.0.20
// Project: https://github.com/rsamec/form
// Definitions by: Roman Samec <https://github.com/rsamec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Validation = require("business-rules-engine");
export as namespace Validators;

import * as moment from 'moment';
import * as Q from 'q';

export class LettersOnlyValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class ZipCodeValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class EmailValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class UrlValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class RequiredValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class DateValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class DateISOValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class NumberValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class DigitValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class SignedDigitValidator implements Validation.IStringValidator {
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class MinLengthValidator implements Validation.IStringValidator {
    public MinLength: number;
    constructor(MinLength?: number);
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class MaxLengthValidator implements Validation.IStringValidator {
    public MaxLength: number;
    constructor(MaxLength?: number);
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class RangeLengthValidator implements Validation.IStringValidator {
    public RangeLength: number[];
    constructor(RangeLength?: number[]);
    public isAcceptable(s: string): boolean;
    public MinLength : number;
    public MaxLength : number;
    public tagName: string;
}
export class MinValidator implements Validation.IPropertyValidator {
    public Min: number;
    constructor(Min?: number);
    public isAcceptable(s: any): boolean;
    public tagName: string;
}
export class MaxValidator implements Validation.IPropertyValidator {
    public Max: number;
    constructor(Max?: number);
    public isAcceptable(s: any): boolean;
    public tagName: string;
}
export class RangeValidator implements Validation.IPropertyValidator {
    public Range: number[];
    constructor(Range?: number[]);
    public isAcceptable(s: any): boolean;
    public Min : number;
    public Max : number;
    public tagName: string;
}
export class StepValidator implements Validation.IPropertyValidator {
    public Step: string;
    constructor(Step?: string);
    public isAcceptable(s: any): boolean;
    public tagName: string;
}
export class PatternValidator implements Validation.IStringValidator {
    public Pattern: string;
    constructor(Pattern?: string);
    public isAcceptable(s: string): boolean;
    public tagName: string;
}
export class ContainsValidator implements Validation.IAsyncPropertyValidator {
    public Options: Q.Promise<any[]>;
    constructor(Options: Q.Promise<any[]>);
    public isAcceptable(s: string): Q.Promise<boolean>;
    public isAsync: boolean;
    public tagName: string;
}
