// Type definitions for Knockout Validation
// Project: https://github.com/ericmbarnard/Knockout-Validation
// Definitions by: Dan Ludwig <https://github.com/danludwig>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutValidationGroupingOptions {
    deep?: boolean;
    observable?: boolean;
}

interface KnockoutValidationConfiguration {
    registerExtenders?: boolean;
    messagesOnModified?: boolean;
    messageTemplate?: string;
    insertMessages?: boolean;
    parseInputAttributes?: boolean;
    writeInputAttributes?: boolean;
    decorateElement?: boolean;
    errorClass?: string;
    errorElementClass?: string;
    errorMessageClass?: string;
    grouping?: KnockoutValidationGroupingOptions;
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

interface KnockoutValidationRuleDefinition {
    message: string;
    validator(value: any, params: any): boolean;
}

interface KnockoutValidationAsyncRuleDefinition extends KnockoutValidationRuleDefinition {
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
}

interface KnockoutValidationRule {
    rule: string;
    params: any;
    message?: string;
    condition?: () => boolean;
}

interface KnockoutValidationErrors {
    (): string[];
    showAllMessages(): void;
    showAllMessages(show: boolean): void;
}

interface KnockoutValidationGroup {
    errors?: KnockoutValidationErrors;
    isValid?: () => boolean;
    isAnyMessageShown?: () => boolean;
}

interface KnockoutValidationStatic {
    init(options?: KnockoutValidationConfiguration, force?: boolean): void;
    configure(options: KnockoutValidationConfiguration): void;
    reset(): void;

    group(obj: any, options?: any): KnockoutValidationErrors;

    formatMessage(message: string, params: string): string;

    addRule<T>(observable: KnockoutObservable<T>, rule: KnockoutValidationRule): KnockoutObservable<T>;

    addAnonymousRule(observable: KnockoutObservableBase, ruleObj: KnockoutValidationAnonymousRuleDefinition): void;

    insertValidationMessage(element: Element): Element;
    parseInputValidationAttributes(element: Element, valueAccessor: () => KnockoutObservableBase): void;

    rules: KnockoutValidationRuleDefinitions;

    addExtender(ruleName: string): void;
    registerExtenders(): void;
    utils: KnockoutValidationUtils;

    localize(msgTranslations: any): void;
    validateObservable(observable: KnockoutObservableBase): boolean;
}

interface KnockoutStatic {
    validation: KnockoutValidationStatic;
    validatedObservable(initialValue: any): KnockoutObservableBase;
    applyBindingsWithValidation(viewModel: any, rootNode?: any, options?: KnockoutValidationConfiguration): void;
}

interface KnockoutSubscribableFunctions {
    isValid: KnockoutComputed;
    isValidating: KnockoutObservable<boolean>;
    rules: KnockoutObservableArray;
}

