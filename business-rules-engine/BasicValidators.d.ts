// Type definitions for business-rules-engine - v1.0.20
// Project: https://github.com/rsamec/form
// Definitions by: Roman Samec <https://github.com/rsamec>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../underscore/underscore.d.ts" />
/// <reference path="../q/Q.d.ts" />
/// <reference path="../moment/moment.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="business-rules-engine.d.ts" />
declare module Validators {
    class LettersOnlyValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class ZipCodeValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class EmailValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class UrlValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class RequiredValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class DateValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class DateISOValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class NumberValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class DigitValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class SignedDigitValidator implements Validation.IStringValidator {
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class MinLengthValidator implements Validation.IStringValidator {
        public MinLength: number;
        constructor(MinLength?: number);
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class MaxLengthValidator implements Validation.IStringValidator {
        public MaxLength: number;
        constructor(MaxLength?: number);
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class RangeLengthValidator implements Validation.IStringValidator {
        public RangeLength: number[];
        constructor(RangeLength?: number[]);
        public isAcceptable(s: string): boolean;
        public MinLength : number;
        public MaxLength : number;
        public tagName: string;
    }
    class MinValidator implements Validation.IPropertyValidator {
        public Min: number;
        constructor(Min?: number);
        public isAcceptable(s: any): boolean;
        public tagName: string;
    }
    class MaxValidator implements Validation.IPropertyValidator {
        public Max: number;
        constructor(Max?: number);
        public isAcceptable(s: any): boolean;
        public tagName: string;
    }
    class RangeValidator implements Validation.IPropertyValidator {
        public Range: number[];
        constructor(Range?: number[]);
        public isAcceptable(s: any): boolean;
        public Min : number;
        public Max : number;
        public tagName: string;
    }
    class StepValidator implements Validation.IPropertyValidator {
        public Step: string;
        constructor(Step?: string);
        public isAcceptable(s: any): boolean;
        public tagName: string;
    }
    class PatternValidator implements Validation.IStringValidator {
        public Pattern: string;
        constructor(Pattern?: string);
        public isAcceptable(s: string): boolean;
        public tagName: string;
    }
    class ContainsValidator implements Validation.IAsyncPropertyValidator {
        public Options: Q.Promise<any[]>;
        constructor(Options: Q.Promise<any[]>);
        public isAcceptable(s: string): Q.Promise<boolean>;
        public isAsync: boolean;
        public tagName: string;
    }
}
declare module "node-validators" {export = Validators;}
