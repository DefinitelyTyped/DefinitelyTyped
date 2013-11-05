// Type definitions for jquery.validation 1.11.1
// Project: http://bassistance.de/jquery-plugins/jquery-plugin-validation/
// Definitions by: https://github.com/fdecampredon
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ValidationOptions
{
	debug?: boolean;
	errorClass?: string;
	errorContainer?: any;
	errorElement?: string;
	errorLabelContainer?: any;
	errorPlacement?: Function;
	focusCleanup?: boolean;
	focusInvalid?: boolean;
	groups?: any;
	highlight?: Function;
	ignore?: any;
	ignoreTitle?: boolean;
	invalidHandler?: Function;
	messages?: any;
	meta?: string;
	onclick?: boolean;
	onfocusout?: boolean;
	onkeyup?: boolean;
	onsubmit?: boolean;
	rules?: any;
	showErrors?: Function;
	submitHandler?: Function;
	success?: any;
	unhighlight?: Function;
	validClass?: string;
	wrapper?: string;
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

	errorMap: Object;
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