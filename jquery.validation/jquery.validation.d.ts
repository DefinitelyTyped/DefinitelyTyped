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
	addMethod(name: string, method: (value: any, element: any, params: any) => any, message?: any): void;
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
    /**
     * Remove the specified attributes from the first matched element and return them.
     * 
     * @param attributes A space-seperated list of attribute names to remove.
     */
    removeAttrs(attributes: string): any;

    /**
     * Returns the validations rules for the first selected element
     */
	rules(): any;

    /**
     * Removes the specified rules and returns all rules for the first matched element.
     * 
     * @param command "remove"
     * @param rules Removes and returns all rules. Manipulates only rules specified via rules-option or via rules("add").
     */
    rules(command: string): any;
    /**
     * Removes the specified rules and returns all rules for the first matched element.
     * 
     * @param command "remove"
     * @param rules The space-separated names of rules to remove and return. Manipulates only rules specified via rules-option or via rules("add").
     */
    rules(command: string, rules: string): any;
    /**
     * Adds the specified rules and returns all rules for the first matched element. Requires that the parent form is validated, that is, $("form").validate() is called first 
     * 
     * @param command "add"
     * @param rules The rules to add. Accepts the same format as the rules-option of the validate-method.
     */
    rules(command: string, rules: Object): any;

    /**
     * Checks whether the selected form is valid or whether all selected elements are valid.
     */
    valid(): boolean;

    /**
     * Validates the selected form.
     * 
     * @param options options for validation
     */
	validate(options?: ValidationOptions): Validator;
}

interface JQueryStatic
{
	format(template: string, ...arguments: string[]): string;
	validator: Validator;
}
