// Type definitions for jQuery Validation 1.13.1
// Project: http://jqueryvalidation.org/
// Definitions by: Nathan Pitman <https://github.com/Seltzer>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module JQueryValidation {

	type RulesMap = { [name: string]: any };

	type ErrorMap = { [name: string]: string };

	interface Error {
		message: string;
		element: HTMLElement;
	}
	
	type ShouldValidatePredicate = boolean | ((element?: HTMLElement, event?: Event) => void);


	interface ValidateOptions {
		debug?: boolean;
		errorClass?: string;
		errorContainer?: string;
		errorElement?: string;
		errorLabelContainer?: string;
		errorPlacement?: (error?: JQuery, element?: JQuery) => void;
		focusCleanup?: boolean;
		focusInvalid?: boolean;
		groups?: { [groupName: string]: string };
		highlight?: (element?: HTMLElement, errorClass?: string, validClass?: string) => void;
		ignore?: string;
		ignoreTitle?: boolean;
		invalidHandler?: (event?: Event, validator?: Validator) => void;
		messages?: Object;
		onclick?: ShouldValidatePredicate;
		onfocusout?: ShouldValidatePredicate;
		onkeyup?: ShouldValidatePredicate;
		onsubmit?: boolean;
		rules?: RulesMap;
		showErrors?: (errorMap?: ErrorMap, errorList?: Error[]) => void;
		submitHandler?: (form?: HTMLFormElement) => void;
		success?: string | ((label?: JQuery, element?: HTMLElement) => void);
		unhighlight?: (element?: HTMLElement, errorClass?: string, validClass?: string) => void;
		validClass?: string;
		wrapper?: string;
	}


	interface Validator {
		form(): boolean;
		element(): boolean;
		resetForm(): void;
		showErrors(errors?: ErrorMap): void;
		numberOfInvalids(errors?: ErrorMap): number;
	}


	interface ValidatorStatic {
		addMethod(name: string, method: (value?: string, element?: HTMLElement, params?: any) => boolean, message?: string): void;

		format(template: string): ( (...args: any[]) => string);
		format(template: string, args: any[]): string;
		format(template: string, ...args: any[]): string;

		setDefaults(options: ValidateOptions): void;

		addClassRules(rules: RulesMap): void;
		addClassRules(name: string, rules: RulesMap): void;
	}
}


interface JQuery {
	validate(options?: JQueryValidation.ValidateOptions): JQueryValidation.Validator;

	valid(): boolean;

	rules(): Object;
	rules(methodName: 'add', rules: JQueryValidation.RulesMap): Object;
	rules(methodName: 'remove', rules?: JQueryValidation.RulesMap): Object;
	rules(methodName: string, p1?: any): any;
}


interface JQueryStatic {
	validator: JQueryValidation.ValidatorStatic;
}