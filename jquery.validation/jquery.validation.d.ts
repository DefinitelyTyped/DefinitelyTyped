// Type definitions for jquery.validation 1.11.1
// Project: http://bassistance.de/jquery-plugins/jquery-plugin-validation/
// Definitions by: https://github.com/fdecampredon
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ValidationOptions
{
	debug?: boolean;
	errorClass?: string;
	errorContainer?: string;
	errorElement?: string;
	errorLabelContainer?: string;
	errorPlacement?: (error: JQuery, element: JQuery) => void;
	focusCleanup?: boolean;
	focusInvalid?: boolean;
	groups?: Object;
	highlight?: (element: HTMLElement, errorClass: string, validClass: string) => void;
	ignore?: string;
	ignoreTitle?: boolean;
	invalidHandler?: (event: JQueryEventObject, validator: Validator) => void;
	messages?: Object;
	meta?: string;
	onclick?: boolean;
	onfocusout?: boolean;
	onkeyup?: boolean;
	onsubmit?: boolean;
	rules?: Object;
   	showErrors?: (errorMap: ErrorDictionary, errorList: ErrorListItem[]) => void;
	submitHandler?: (form: HTMLFormElement) => void;
	success?: any;
	unhighlight?: (element: HTMLElement, errorClass: string, validClass: string) => void;
	validClass?: string;
	wrapper?: string;
}

interface ErrorDictionary
{
	[name: string]: string;
}

interface ErrorListItem
{
	message: string;
	element: HTMLElement;
}

interface Validator
{
	addClassRules(name: string, rules: any): void;
	addClassRules(rules: any): void;
	addMethod(name: string, method: (value: any, element: any, ...params: any[]) => any, message?: any): void;
	element(element: any): boolean;
	form(): boolean;
	format(template: string, ...arguments: string[]): string;
	numberOfInvalids(): number;
	resetForm(): void;
	setDefaults(defaults: ValidationOptions): void;
	settings: ValidationOptions;
	showErrors(errors: any): void;
	hideErrors(): void;
	valid(): boolean;
	size(): number;

   	errorMap: ErrorDictionary;
	errorList: ErrorListItem[];
}

interface JQuery
{
	removeAttrs(attributes: string): any;
	rules(): any;
	rules(methodName: string): any;
	rules(methodName: string, rules: any): any;
	valid(): boolean;
	validate(options?: ValidationOptions): Validator;
}

interface JQueryStatic
{
	format(template: string, ...arguments: string[]): string;
	validator: Validator;
}