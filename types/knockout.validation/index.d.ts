/// <reference types="knockout" />

type KnockoutValidationMessageFunction = (params: any, observable: any) => string;

interface KnockoutValidationGroupingOptions {
    /**
     * indicates whether to walk the ViewModel (or object)
     * recursively, or only walk first-level properties.
     */
    deep?: boolean | undefined;
    /**
     * indicates whether the returned errors object
     * is a ko.computed or a simple function
     */
    observable?: boolean | undefined;
    /**
     * indicates whether changes to observableArrays inside
     * the model should cause the validator to re-run
     */
    live?: boolean | undefined;
}

interface KnockoutValidationValidateOptions {
    throttle?: number | undefined;
}

interface KnockoutValidationConfiguration {
    /**
     * Allows HTML in validation messages
     */
    allowHtmlMessages?: boolean | undefined;
    /**
     * Indicates whether css error classes are added only
     * when properties are modified or at all times
     */
    decorateElementOnModified?: boolean | undefined;
    /**
     * Indicates whether to assign an error class to the <input> tag
     * when your property is invalid
     */
    decorateInputElement?: boolean | undefined;
    /**
     * If defined, the CSS class assigned to both <input> and validation message elements
     */
    errorClass?: string | undefined;
    /**
     * The CSS class assigned to validation error <input> elements, must have decorateInputElement set to true
     */
    errorElementClass?: string | undefined;
    /**
     * The CSS class assigned to validation error messages
     */
    errorMessageClass?: string | undefined;
    /**
     * Shows tooltips using input 'title' attribute. False hides them
     */
    errorsAsTitle?: boolean | undefined;
    /**
     * Shows the error when hovering the input field (decorateElement must be true)
     */
    errorsAsTitleOnModified?: boolean | undefined;
    grouping?: KnockoutValidationGroupingOptions | undefined;
    /**
     * If true validation will insert either a <span> element or the template
     * specified by messageTemplate after any element (e.g. <input>)
     * that uses a KO value binding with a validated field
     */
    insertMessages?: boolean | undefined;
    /**
     * Indicates whether validation messages are triggered only
     * when properties are modified or at all times
     */
    messagesOnModified?: boolean | undefined;
    /**
     * The id of the <script type="text/html"></script>
     * that you want to use for all your validation messages
     */
    messageTemplate?: string | undefined;
    /**
     * Indicates whether to assign validation rules to your ViewModel
     * using HTML5 validation attributes
     */
    parseInputAttributes?: boolean | undefined;
    /**
     * Register custom validation rules defined via ko.validation.rules
     */
    registerExtenders?: boolean | undefined;
    validate?: KnockoutValidationValidateOptions | undefined;
    /**
     * Add HTML5 input validation attributes to form elements
     * that ko observable's are bound to
     */
    writeInputAttributes?: boolean | undefined;
    /**
     * Supply the HTML5 input types validation will be
     * added to. Defaults to ["email", "number", "date"]
     */
    html5InputTypes?: string[] | undefined;
}

interface KnockoutValidationUtils {
    isArray(o: any): boolean;
    isObject(o: any): boolean;
    values(o: any): any[];
    getValue(o: any): any;
    hasAttribute(node: Element, attr: string): boolean;
    isValidatable(o: any): boolean;
    insertAfter(node: Element, newNode: Element): void;
    newId(): number;
    getConfigOptions(element: Element): KnockoutValidationConfiguration;
    setDomData(node: Element, data: KnockoutValidationConfiguration): void;
    getDomData(node: Element): KnockoutValidationConfiguration;
    contextFor(node: Element): KnockoutValidationConfiguration;
    isEmptyVal(val: any): boolean;
}

interface KnockoutValidationAsyncCallbackArgs {
    isValid: boolean;
    message: string;
}

interface KnockoutValidationAsyncCallback {
    (result: boolean): void;
    (result: KnockoutValidationAsyncCallbackArgs): void;
}

interface KnockoutValidationRuleBase {
    message: string | KnockoutValidationMessageFunction;
}

interface KnockoutValidationRuleDefinition extends KnockoutValidationRuleBase {
    validator(value: any, params: any): boolean;
}

interface KnockoutValidationAsyncRuleDefinition extends KnockoutValidationRuleBase {
    async: boolean;
    validator(value: any, params: any, callback: KnockoutValidationAsyncCallback): void;
}

interface KnockoutValidationAnonymousRuleDefinition {
    validation: KnockoutValidationRuleDefinition;
}

interface KnockoutValidationRuleDefinitions {
    date: KnockoutValidationRuleDefinition;
    dateISO: KnockoutValidationRuleDefinition;
    digit: KnockoutValidationRuleDefinition;
    email: KnockoutValidationRuleDefinition;
    equal: KnockoutValidationRuleDefinition;
    max: KnockoutValidationRuleDefinition;
    maxLength: KnockoutValidationRuleDefinition;
    min: KnockoutValidationRuleDefinition;
    minLength: KnockoutValidationRuleDefinition;
    notEqual: KnockoutValidationRuleDefinition;
    number: KnockoutValidationRuleDefinition;
    pattern: KnockoutValidationRuleDefinition;
    phoneUS: KnockoutValidationRuleDefinition;
    required: KnockoutValidationRuleDefinition;
    step: KnockoutValidationRuleDefinition;
    unique: KnockoutValidationRuleDefinition;
    [ruleName: string]:
        | KnockoutValidationRuleDefinition
        | KnockoutValidationAsyncRuleDefinition;
}

interface KnockoutValidationRule {
    rule: string;
    params: any;
    message?: string | KnockoutValidationMessageFunction | undefined;
    condition?: (() => boolean) | undefined;
}

interface KnockoutValidationErrors {
    (): string[];
    showAllMessages(): void;
    showAllMessages(show: boolean): void;
}

interface KnockoutValidationGroup {
    errors?: KnockoutValidationErrors | undefined;
    isValid?: (() => boolean) | undefined;
    isAnyMessageShown?: (() => boolean) | undefined;
}

interface KnockoutValidationLocalizationDictionary {
    [key: string]: string;
}

interface KnockoutValidationStatic {
    init(options?: KnockoutValidationConfiguration, force?: boolean): void;
    reset(): void;

    group(obj: any, options?: any): KnockoutValidationErrors;

    formatMessage(message: string, params: string): string;

    addRule<T>(observable: KnockoutObservable<T>, rule: KnockoutValidationRule): KnockoutObservable<T>;

    addAnonymousRule(observable: KnockoutObservable<any>, ruleObj: KnockoutValidationAnonymousRuleDefinition): void;

    insertValidationMessage(element: Element): Element;
    parseInputValidationAttributes(element: Element, valueAccessor: () => KnockoutObservable<any>): void;

    rules: KnockoutValidationRuleDefinitions;

    addExtender(ruleName: string): void;
    registerExtenders(): void;
    utils: KnockoutValidationUtils;

    localize(msgTranslations: KnockoutValidationLocalizationDictionary): void;
    defineLocale(
        newLocale: string,
        msgTranslations: KnockoutValidationLocalizationDictionary,
    ): KnockoutValidationLocalizationDictionary;
    locale(newLocale: string): string;
    validateObservable(observable: KnockoutObservable<any>): boolean;
}

interface KnockoutStatic {
    validation: KnockoutValidationStatic;
    validatedObservable<T>(initialValue?: T): KnockoutObservable<T>;
    applyBindingsWithValidation(viewModel: any, rootNode?: any, options?: KnockoutValidationConfiguration): void;
}

interface KnockoutSubscribableFunctions<T> {
    isValid: KnockoutComputed<boolean>;
    isValidating: KnockoutObservable<boolean>;
    rules: KnockoutObservableArray<KnockoutValidationRule>;
    isModified: KnockoutObservable<boolean>;
    error: KnockoutComputed<string>;
    setError(error: string): void;
    clearError(): void;
}

declare module "knockout.validation" {
    export = validation;
}

declare var validation: KnockoutValidationStatic;
