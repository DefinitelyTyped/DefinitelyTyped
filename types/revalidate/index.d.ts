// This project is licensed under the MIT license.
// Copyrights are respective of each contributor listed at the beginning of each definition file.

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export interface CombineValidatorsOptions {
    serializeValues?(values: any): any;
}

export interface Config {
    field?: any;
    message?: string | undefined;
}

export interface Multiple {
    multiple?: boolean | undefined;
}

export type ComposeConfig = Config & Multiple;

export interface ParsedField {
    isArray: boolean;
    baseName: string;
    fullName: string;
}

export type MessageCreator = ((field: any) => any) | string;
export type ValidatorImpl = (message: any) => (value: any, allValues?: any) => any;
export type Comparer = (a: any, b: any) => boolean;

export type ConfiguredValidator = (value?: any, allValues?: any) => any;
export type UnconfiguredValidator = (config?: string | Config, value?: any, allValues?: any) => any;
export type ConfiguredCombinedValidator = (value?: any, allValues?: any) => any;

export type CurryableValidator = (config?: string | Config) => ConfiguredValidator;
export type ComposedCurryableValidator = (config?: string | ComposeConfig) => ConfiguredValidator;

export type ConfigurableValidator = UnconfiguredValidator & CurryableValidator;

export type Validator = ConfiguredValidator & UnconfiguredValidator;

export function createValidator(
    curriedDefinition: ValidatorImpl,
    defaultMessageCreator?: MessageCreator,
): ConfigurableValidator;
export function composeValidators(
    firstValidator: Validator | any,
    ...validators: Validator[]
): ComposedCurryableValidator;
export function combineValidators(validators: any, options?: CombineValidatorsOptions): ConfiguredCombinedValidator;

export function hasLengthBetween(min: number, max: number): ConfigurableValidator;
export function hasLengthGreaterThan(min: number): ConfigurableValidator;
export function hasLengthLessThan(max: number): ConfigurableValidator;

export function isAlphabetic(config?: string | Config, value?: any, allValues?: any): ConfiguredValidator | any;
export function isAlphaNumeric(config?: string | Config, value?: any, allValues?: any): ConfiguredValidator | any;
export function isNumeric(config?: string | Config, value?: any, allValues?: any): ConfiguredValidator | any;
export function isOneOf(config?: string | Config, value?: any, allValues?: any): ConfiguredValidator | any;
export function isRequired(config?: string | Config, value?: any, allValues?: any): ConfiguredValidator | any;
export function isRequiredIf(config?: string | Config, value?: any, allValues?: any): ConfiguredValidator | any;

export function matchesField(otherField: string, otherFieldLabel: string): ConfigurableValidator;
export function matchesPattern(regex: RegExp): ConfigurableValidator;
