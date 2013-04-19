// Type definitions for Knockout Validation
// Project: https://github.com/ericmbarnard/Knockout-Validation
// Definitions by: Dan Ludwig <https://github.com/danludwig>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutValidationGroupingOptions {
    deep?: bool;
    observable?: bool;
}

interface KnockoutValidationConfiguration {
    registerExtenders?: bool;
    messagesOnModified?: bool;
    messageTemplate?: string;
    insertMessages?: bool;
    parseInputAttributes?: bool;
    writeInputAttributes?: bool;
    decorateElement?: bool;
    errorClass?: string;
    errorElementClass?: string;
    errorMessageClass?: string;
    grouping?: KnockoutValidationGroupingOptions;
}

interface KnockoutValidationUtils {
    isArray(o: any): bool;
    isObject(o: any): bool;
    values(o: any): any[];
    getValue(o: any): any;
    hasAttribute(node: Element, attr: string): bool;
    isValidatable(o: any): bool;
    insertAfter(node: Element, newNode: Element): void;
    newId(): number;
    getConfigOptions(element: Element): KnockoutValidationConfiguration;
    setDomData(node: Element, data: KnockoutValidationConfiguration): void;
    getDomData(node: Element): KnockoutValidationConfiguration;
    contextFor(node: Element): KnockoutValidationConfiguration;
    isEmptyVal(val: any): bool;
}

interface KnockoutValidationAsyncCallbackArgs {
    isValid: bool;
    message: string;
}

interface KnockoutValidationAsyncCallback {
    (result: bool): void;
    (result: KnockoutValidationAsyncCallbackArgs): void;
}

interface KnockoutValidationRuleDefinition {
    message: string;
    validator(value: any, params: any): bool;
}

interface KnockoutValidationAsyncRuleDefinition extends KnockoutValidationRuleDefinition {
    async: bool;
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
    condition?: () => bool;
}

interface KnockoutValidationErrors {
    (): string[];
    showAllMessages(): void;
    showAllMessages(show: bool): void;
}

interface KnockoutValidationGroup {
    errors?: KnockoutValidationErrors;
    isValid?: () => bool;
    isAnyMessageShown?: () => bool;
}

interface KnockoutValidationStatic {
    init(options?: KnockoutValidationConfiguration, force?: bool): void;
    configure(options: KnockoutValidationConfiguration): void;
    reset(): void;

    group(obj: any, options?: any): KnockoutValidationErrors;

    formatMessage(message: string, params: string): string;

    addRule(observable: KnockoutObservableAny, rule: KnockoutValidationRule): KnockoutObservableAny;
    addRule(observable: KnockoutObservableString, rule: KnockoutValidationRule): KnockoutObservableString;
    addRule(observable: KnockoutObservableNumber, rule: KnockoutValidationRule): KnockoutObservableNumber;
    addRule(observable: KnockoutObservableBool, rule: KnockoutValidationRule): KnockoutObservableBool;
    addRule(observable: KnockoutObservableDate, rule: KnockoutValidationRule): KnockoutObservableDate;
    addAnonymousRule(observable: KnockoutObservableBase, ruleObj: KnockoutValidationAnonymousRuleDefinition): void;

    insertValidationMessage(element: Element): Element;
    parseInputValidationAttributes(element: Element, valueAccessor: () => KnockoutObservableBase): void;

    rules: KnockoutValidationRuleDefinitions;

    addExtender(ruleName: string): void;
    registerExtenders(): void;
    utils: KnockoutValidationUtils;

    localize(msgTranslations: any): void;
    validateObservable(observable: KnockoutObservableBase): bool;
}

interface KnockoutStatic {
    validation: KnockoutValidationStatic;
    validatedObservable(initialValue: any): KnockoutObservableBase;
    applyBindingsWithValidation(viewModel: any, rootNode?: any, options?: KnockoutValidationConfiguration): void;
}

interface KnockoutSubscribableFunctions {
    isValid: KnockoutComputed;
    isValidating: KnockoutObservableBool;
    rules: KnockoutObservableArray;
}

