// Type definitions for valerie
// Project: https://github.com/davewatts/valerie
// Definitions by: Howard Richards <https://github.com/conficient>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

/**
 *
 * Extensions to KO functions to provide validation 
 */
interface KnockoutObservable<T> {
    // starts validation for observable
    validate(validationOptions?: Valerie.ValidationOptions): Valerie.PropertyValidationState<KnockoutObservable<T>>;
}

interface KnockoutComputed<T> {
    // starts validation for observable
    validate(validationOptions?: Valerie.ValidationOptions): Valerie.PropertyValidationState<KnockoutComputed<T>>;
}

interface KnockoutObservableArray<T> {
    validate(validationOptions?: Valerie.ValidationOptions): Valerie.PropertyValidationState<KnockoutObservableArray<T>>;
}


interface KnockoutObservableArrayFunctions<T> {
    /**
     * Creates and sets a model validation state on a Knockout observable array.<br/>
     * <i>[fluent]</i>
     * @name ko.observableArray#validateAsModel
     * @method
     * @fluent
     * @param {valerie.ModelValidationState.options} [validationOptions] the options to use when creating the
     * validation state
     * @return {valerie.ModelValidationState} the validation state belonging to the observable array
     */
    validateAsModel(): Valerie.ValidatableModel<KnockoutObservableArray<T>>;
}

/**
* Valerie BindingHandlers
*/
interface KnockoutBindingHandlers {
    /**
     * Validates entries that can be checked, i.e. check boxes and radio buttons.
     * Functions in the same way as the <b>ko.bindingHandlers.checked</b> binding handler, with the following
     * alterations:
     * <ul>
     *     <li>registers a blur event handler so validation messages for selections can be displayed</li>
     *     <li>registers a click event handler so validation state can be marked as touched</i>
     * </ul>
     * @name ko.bindingHandlers.validatedChecked
     */
    validatedChecked: KnockoutBindingHandler;

    /**
     * Validates options selected in a select list.
     * Functions in the same way as the <b>ko.bindingHandlers.selectedOptions</b> binding handler, with the
     * following alterations:
     * <ul>
     *     <li>registers a blur event handler so validation messages for selections can be displayed</li>
     *     <li>registers a click event handler so validation state can be marked as touched</i>
     * </ul>
     * @name ko.bindingHandlers.validatedSelectedOptions
     */
    validatedSelectedOptions: KnockoutBindingHandler;

    /**
     * Validates entries that can be keyed or selected.
     * Functions in the same way as the <b>ko.bindingHandlers.value</b> binding handler, with the following
     * alterations:
     * <ul>
     *     <li>registers a blur event handler:
     *     <ul>
     *         <li>to display validation messages as entries or selections lose focus</li>
     *         <li>to reformat successfully parsed textual entries</li>
     *     </ul>
     *     </li>
     *     <li>
     *         registers a focus event handler to pause the update of any existing visible validation message
     *     </li>
     *     <li>
     *         registers a key-up event handler which validates the entry as it's being entered; this allows other
     *         entries that are shown conditionally to be available before the user tabs out of this entry
     *     </li>
     * </ul>
     * @name ko.bindingHandlers.validatedValue
     */
    validatedValue: KnockoutBindingHandler;

    /**
     * Disables the element when the chosen property or model has failed or is pending validation, enabled
     * otherwise.
     * @name ko.bindingHandlers.disabledWhenNotValid
     */
    disabledWhenNotValid: KnockoutBindingHandler;

    /**
     * Disables the element when the chosen property or model has been touched and has failed or is pending
     * validation, enabled otherwise.<br/>
     * @name ko.bindingHandlers.disabledWhenTouchedAndNotValid
     */
    disabledWhenTouchedAndNotValid: KnockoutBindingHandler;

    /**
     * Enables the element when the chosen property or model is applicable, disabled otherwise.
     * @name ko.bindingHandlers.enabledWhenApplicable
     */
    enabledWhenApplicable: KnockoutBindingHandler;

    /**
     * Sets the text of the element to be a formatted representation of the specified property.
     * @name ko.bindingHandlers.formattedText
     */
    formattedText: KnockoutBindingHandler;

    /**
     * Sets CSS classes on the element based on the validation state of the chosen property or model.</br>
     * The names of the CSS classes used are held in the <b>ko.bindingHandlers.validationCss.classNames</b> object,
     * by default they are:
     * <ul>
     *     <li><b>failed</b> - if validation failed</li>
     *     <li><b>focused</b> - if the element is in focus</li>
     *     <li><b>passed</b> - if validation passed</li>
     *     <li><b>pending</b> - if validation is pending</li>
     *     <li><b>required</b> - if an entry is required</li>
     *     <li><b>showMessage</b> - if a validation message should be shown</li>
     *     <li><b>touched</b> - set if the model or entry has been "touched"</li>
     *     <li><b>untouched</b> - set if the model or entry has not been "touched"</li>
     * </ul>
     * @name ko.bindingHandlers.validationCss
     */
    validationCss: KnockoutBindingHandler

    /**
     * Makes the element behave like a validation message for the chosen property or model:
     * <ul>
     *     <li>makes the element visible if the value is invalid</li>
     *     <li>sets the text of the element to be the underlying validation state's message</li>
     * </ul>
     * @name ko.bindingHandlers.validationMessage
     */
    validationMessage: KnockoutBindingHandler;

    /**
     * Sets the text of the element to be the underlying validation state's message.
     * @name ko.bindingHandlers.validationMessageText
     */
    validationMessageText: KnockoutBindingHandler;

    /**
     * Sets the text of the element to be the underlying validation state's name.
     * @name ko.bindingHandlers.validationName
     */
    validationName: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model is applicable, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenApplicable
     */
    visibleWhenApplicable: KnockoutBindingHandler;

    /**
     * Makes the element visible when the entry bound to the chosen property is in focus, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenFocused
     */
    visibleWhenFocused: KnockoutBindingHandler;

    /**
     * Makes the element visible when the chosen property or model has failed validation, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenInvalid
     */
    visibleWhenInvalid: KnockoutBindingHandler;

    /**
     * Makes the element visible when the summary for the chosen model is not empty, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenSummaryNotEmpty
     */
    visibleWhenSummaryNotEmpty: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model has been touched, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenTouched
     */
    visibleWhenTouched: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model is untouched, invisible otherwise.
     * @name ko.bindingHandlers.visibleWhenUntouched
     */
    visibleWhenUntouched: KnockoutBindingHandler;

    /**
     * Makes the element visible if the chosen property or model has passed validation.
     * @name ko.bindingHandlers.visibleWhenValid
     */
    visibleWhenValid: KnockoutBindingHandler;
}



//
// root valerie namespace - static methods
//
declare var valerie: Valerie.Static;

// additional types for Valerie (all inside this namespace)

declare module Valerie {

    //
    // Static methods on valerie namespace
    //
    interface Static {

        /**
         * Maps a source model to a destination model, including only applicable properties
         * @param {Object|Array} sourceModel the source model
         * @return {*} the destination model
         */
        mapApplicableModel(sourceModel: any): any;

        /**
         * Maps a source model to a destination model.
         * @param {Object|Array} sourceModel the source model
         * @param {valerie.includePropertyCallback} [includeWrappedFunction] a function called before each source model
         * property is unwrapped, the result of which determines if the property is included in the destination model
         * @param {valerie.includePropertyCallback} [includeUnwrappedFunction] a function called after each source
         * model property is unwrapped, the result of which determines if the property is included in the destination model
         * @return {*} the destination model
         */
        mapModel(sourceModel: any,
            includeWrappedFunction?: IncludePropertyCallback,
            includeUnwrappedFunction?: IncludePropertyCallback): any;

        /**
         * Makes the passed-in model validatable. After invocation the model will have a validation state.
         * <br/><b>fluent</b>
         * @param {object|function} model the model to make validatable
         * @param {valerie.ModelValidationState.options} [options] the options to use when creating the model's validation
         * state
         * @return {valerie.ModelValidationState} the validation state belonging to the model
         */
        validatableModel(model: any, options?: ValidationOptions): ModelValidationState;

        // Makes the passed-in property validatable. After invocation the property will have a validation state.
        // (value should be observable or computed)
        validatableProperty<T>(value: T, options?: ValidationOptions): PropertyValidationState<T>;

        // additional namespaces for static methods:

        validationState: ValidationState;
    }

    // callback interface (see mapModel above)
    interface IncludePropertyCallback {
        (value: any, sourceModel: any, index: any): boolean;
    }

    // Constructs the validation state for a model, which may comprise of simple properties and sub-models.
    interface ModelValidationState {
        // ctor
        new: (model: any, options?: ModelValidationStateOptions) => ModelValidationState;

        addValidationStates(validationStateOrStates: any): void;

        model: any;
        options?: ModelValidationStateOptions
    }

    // Construction options for a model validation state.
    interface ModelValidationStateOptions {
        applicable(): boolean;
        excludeFromSummary: boolean;
        failureMessage: string;
        name(): string;
        paused(): boolean;
    }

    //
    // PropertyValidationState
    //
    interface PropertyValidationState<T> {

        // properties:

        // the observable or computed the validation state is for
        observableOrComputed: T;
        // the options to use when creating the validation state
        options: ValidationOptions;

        // fluent methods (can be chanined):

        /**
         * Adds a rule to the chain of rules used to validate the property's value.<br/>
         * <i>[fluent]</i>
         * @fluent
         * @param {valerie.IRule} rule the rule to add
         * @return {valerie.PropertyValidationState}
         */
        addRule(rule: IRule): PropertyValidationState<T>;
        applicable(value: boolean): PropertyValidationState<T>;
        applicable(fn: () => boolean): PropertyValidationState<T>;
        currencyMajor(options?: ValidationOptions): PropertyValidationState<T>;
        currencyMajorMinor(options?: ValidationOptions): PropertyValidationState<T>;

        date(): PropertyValidationState<T>;
        during(earliest: Date, latest: Date, options?: ValidationOptions): PropertyValidationState<T>; // date + date
        during(earliest: () => Date, latest: Date, options?: ValidationOptions): PropertyValidationState<T>; // dateFN + date
        during(earliest: Date, latest: () => Date, options?: ValidationOptions): PropertyValidationState<T>; // date + dateFN
        during(earliest: () => Date, latest: () => Date, options?: ValidationOptions): PropertyValidationState<T>; // dateFN + dateFN
        earliest(earliest: Date, options?: ValidationOptions): PropertyValidationState<T>; // date value 
        earliest(earliest: () => Date, options?: ValidationOptions): PropertyValidationState<T>; // date function
        email(): PropertyValidationState<T>;
        entryFormat(format: string): PropertyValidationState<T>;
        excludeFromSummary(): PropertyValidationState<T>;
        expression(regularExpression: RegExp, options?: ValidationOptions): PropertyValidationState<T>; // regex 
        expression(regularExpressionString: string, options?: ValidationOptions): PropertyValidationState<T>; // regex string
        float(options?: ValidationOptions): PropertyValidationState<T>;
        integer(options?: ValidationOptions): PropertyValidationState<T>;
        latest(latestValueOrFunction: Date, options?: ValidationOptions): PropertyValidationState<T>;
        latest(latestValueOrFunction: () => Date, options?: ValidationOptions): PropertyValidationState<T>;
        lengthBetween(shortest: number, longest: number, options?: ValidationOptions): PropertyValidationState<T>;
        lengthBetween(shortest: number, longest: () => number, options?: ValidationOptions): PropertyValidationState<T>;
        lengthBetween(shortest: () => number, longest: number, options?: ValidationOptions): PropertyValidationState<T>;
        lengthBetween(shortest: () => number, longest: () => number, options?: ValidationOptions): PropertyValidationState<T>;
        matches(permitted: any, options?: ValidationOptions): PropertyValidationState<T>;
        matches(permitted: () => any, options?: ValidationOptions): PropertyValidationState<T>;

        maximum(maximum: any, options?: ValidationOptions): PropertyValidationState<T>;
        maximum(maximum: () => any, options?: ValidationOptions): PropertyValidationState<T>;
        maximumLength(longest: number, options?: ValidationOptions): PropertyValidationState<T>;
        maximumLength(longest: () => number, options?: ValidationOptions): PropertyValidationState<T>;
        maximumNumberOfItems(maximum: number, options?: ValidationOptions): PropertyValidationState<T>;
        maximumNumberOfItems(maximum: () => number, options?: ValidationOptions): PropertyValidationState<T>;

        minimum(minimumValueOrFunction: any, options?: ValidationOptions): PropertyValidationState<T>;
        minimumLength(shortest: number, options?: ValidationOptions): PropertyValidationState<T>;
        minimumLength(shortest: () => number, options?: ValidationOptions): PropertyValidationState<T>;
        minimumNumberOfItems(minimum: number, options?: ValidationOptions): PropertyValidationState<T>;
        minimumNumberOfItems(minimum: () => number, options?: ValidationOptions): PropertyValidationState<T>;

        name(value: string): PropertyValidationState<T>;
        name(value: () => string): PropertyValidationState<T>;
        noneOf(forbiddenValues: any[], options?: ValidationOptions): PropertyValidationState<T>;
        noneOf(forbiddenValues: () => any[], options?: ValidationOptions): PropertyValidationState<T>;

        not(forbiddenValueOrFunction: any, options?: ValidationOptions): PropertyValidationState<T>;
        number(): PropertyValidationState<T>;
        numberOfItems(minimumValueOrFunction: any, maximumValueOrFunction: any, options?: ValidationOptions): PropertyValidationState<T>;
        oneOf(permittedValues: any[], options?: ValidationOptions): PropertyValidationState<T>;
        oneOf(permittedValues: () => any[], options?: ValidationOptions): PropertyValidationState<T>;
        postcode(): PropertyValidationState<T>;
        range(minimumValueOrFunction: any, maximumValueOrFunction: any, options?: ValidationOptions): PropertyValidationState<T>;
        required(valueOrFunction?: any): PropertyValidationState<T>;
        rule(testFunction: () => any): PropertyValidationState<T>;
        ruleMessage(failureMessageFormat: string): PropertyValidationState<T>;
        string(): PropertyValidationState<T>;

        valueFormat(format: string): PropertyValidationState<T>;

        validateChildProperties(): PropertyValidationState<T>;

        // return original observable
        end(): T;

        // other methods: not returning PropertyValidationState<T>
        failed(): boolean;
        getName(): string;
        isApplicable(): boolean;
        isRequired(): boolean;
        message(): string;
        passed(): boolean;
        pending(): boolean;
        showMessage(): boolean;
        touched(): boolean;               // get touched state
        touched(value: boolean): boolean; // set touched state
        result(): ValidationResult;

    }

    interface ValidationResult {
        state: any; // the result state
        failed: boolean;	//true if the activity failed validation
        passed: boolean;	//true if the activity passed validation
        pending: boolean;	//true if the activity hasn't yet completed
        message: string;	//a message from the activity
        new: (state: any, message?: string) => ValidationResult;

        //TODO: not added static members/methods
        createFailedResult(message: string): ValidationResult;

    }

    interface IRule {
        defaultOptions: ValidationOptions;
        test(value: any): ValidationResult;
    }

    // The interface for a validation state.
    interface IValidationState {
        failed(): boolean;
        getName(): string;
        isApplicable(): boolean;
        message(): string;
        passed(): boolean;
        pending(): boolean;
        result(): ValidationResult;
        touched(value?: boolean): boolean;
    }

    interface ValidatableModel<T> {
        name: (value:string) => PropertyValidationState<T>;

        // return original observableArray
        end: () => T;
    }

    interface ValidationOptions {
        applicable? (): any;  // the function used to determine if the property is applicable
        converter?: IConverter;  // the converter used to parse user entries and format display of the property's value
        entryFormat?: string;  // the string used to format the property's value for display in a user entry
        excludeFromSummary?: boolean;  // whether any validation failures for this property are excluded from a summary
        invalidFailureMessage?: string;  // the message shown when the user has entered an invalid value
        missingFailureMessage?: string;  // the message shown when a value is required but is missing
        name?: () => any;  // the function used to determine the name of the property; used in failure messages
        required?: () => any;  // the function used to determine if a value is required
        rules?: any; //Valerie.array.<IRule>;  // the chain of rules used to validate the property's value
        valueFormat?: string;  // the string use to format the property's value for display in a message
    }

    // The interface for a converter, a pair of functions: format and parse, which work in tandem on a single type of value.
    interface IConverter {
        format: (value: any, format?: string) => string; // Formats the given value as a string.
        parse: (value: string) => any; //Parses the given string as a particular value type.
    }

    // A helper for parsing and formatting numeric values.
    interface NumericHelper {

        // Adds thousands separators to the given numeric string.
        addThousandsSeparator(numericString: string): string;

        // Formats the given numeric value as a string.
        format(value: number, format: string): string;

        // Initialises the helper
        init(decimalSeparator: string,
            thousandsSeparator: string,
            currencySign: string,
            currencyMinorUnitPlaces: number): NumericHelper;

        // Informs whether the given numeric string represents a currency value with major units only.
        isCurrencyMajor(numericString: string): boolean;

        // Informs whether the given numeric string represents a currency value with major units and optionally minor units.
        isCurrencyMajorMinor(numericString: string): boolean;

        // Informs whether the given numeric string represents a non-integer numeric value.
        isFloat(numericString: string): boolean;

        // Informs whether the given numeric string represents an integer value.
        isInteger(numericString: string): boolean;

        // Attempts to parse the given numeric string as a number value. The string is unformatted first.
        parse(numericString: string): number;

        // Unformats a numeric string; removes currency signs, thousands separators and normalises decimal separators.
        unformat(numericString: string): string;

    }


    interface ValidationState {

        // Finds and returns the validation states 
        findIn(model: any,
            includeSubModels?: boolean,
            recurse?: boolean,
            validationStates?: IValidationState[]): IValidationState[];

        // Gets the validation state for the given model, observable or computed.
        getFor(modelOrObservableOrComputed: any): IValidationState;

        // nforms if the given model, observable or computed has a validation state.
        has(modelOrObservableOrComputed: any): boolean;


        // Sets the validation state for the given model, observable or computed.
        setFor(modelOrObservableOrComputed: any, state: IValidationState): void;

    }
}

declare module Valerie.Rules {

    /*

      Todo: add classes in valerie.rules namespace

      */
}