// Type definitions for aurelia-validation v0.6.7
// Project: https://github.com/aurelia/validation/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-metadata.d.ts" />
/// <reference path="./aurelia-dependency-injection.d.ts" />
/// <reference path="./aurelia-templating.d.ts" />
/// <reference path="./aurelia-loader.d.ts" />
/// <reference path="./aurelia-binding.d.ts" />

declare module 'aurelia-validation' {
  import {
    metadata
  } from 'aurelia-metadata';
  import {
    inject,
    Container
  } from 'aurelia-dependency-injection';
  import {
    customAttribute
  } from 'aurelia-templating';
  import {
    Loader
  } from 'aurelia-loader';
  import {
    ObserverLocator
  } from 'aurelia-binding';
  export class Debouncer {
    constructor(debounceTimeout: any);
    debounce(func: any): any;
  }
  export class ValidationMetadata {
    static metadataKey: any;
    constructor();
    getOrCreateProperty(propertyName: any): any;
    setup(validation: any): any;
  }
  export function ensure(setupStep: ((it: ValidationGroup) => void)): any;
  export class PathObserver {
    constructor(observerLocator: any, subject: any, path: any);
    
    //TODO: this should be replaced with reuse of the Binding system
    observeParts(propertyName: any): any;
    observePart(part: any): any;
    getObserver(): any;
    getValue(): any;
    subscribe(callback: any): any;
    unsubscribe(): any;
  }
  export class Utilities {
    static getValue(val: any): any;
    static isEmptyValue(val: any): any;
  }
  export class ValidateCustomAttribute {
    constructor(element: any);
    valueChanged(newValue: any): any;
    
    //this is just to tell the real validation instance (higher in the DOM) the exact property-path to bind to
    subscribeChangedHandlers(currentElement: any): any;
    attached(): any;
  }
  export class ValidationConfigDefaults {
  
  }
  export class ValidationConfig {
    constructor(innerConfig: any);
    getValue(identifier: any): any;
    setValue(identifier: any, value: any): any;
    
    //fluent API
    onLocaleChanged(callback: any): any;
    getDebounceTimeout(): any;
    useDebounceTimeout(value: any): any;
    getDependencies(): any;
    computedFrom(dependencies: any): any;
    useLocale(localeIdentifier: any): any;
    locale(): any;
    useViewStrategy(viewStrategy: any): any;
    getViewStrategy(): any;
    treatAllPropertiesAsMandatory(): any;
    treatAllPropertiesAsOptional(): any;
  }
  export class ValidationGroupBuilder {
    constructor(observerLocator: any, validationGroup: any);
    ensure(propertyName: any, configurationCallback: any): any;
    isNotEmpty(): any;
    canBeEmpty(): any;
    isGreaterThan(minimumValue: any): any;
    isGreaterThanOrEqualTo(minimumValue: any): any;
    isBetween(minimumValue: any, maximumValue: any): any;
    isIn(collection: any): any;
    isLessThan(maximumValue: any): any;
    isLessThanOrEqualTo(maximumValue: any): any;
    isEqualTo(otherValue: any, otherValueLabel: any): any;
    isNotEqualTo(otherValue: any, otherValueLabel: any): any;
    isEmail(): any;
    isURL(): any;
    hasMinLength(minimumValue: any): any;
    hasMaxLength(maximumValue: any): any;
    hasLengthBetween(minimumValue: any, maximumValue: any): any;
    isNumber(): any;
    containsNoSpaces(): any;
    containsOnlyDigits(): any;
    containsOnlyAlpha(): any;
    containsOnlyAlphaOrWhitespace(): any;
    containsOnlyAlphanumerics(): any;
    containsOnlyAlphanumericsOrWhitespace(): any;
    isStrongPassword(minimumComplexityLevel: any): any;
    containsOnly(regex: any): any;
    matches(regex: any): any;
    passes(customFunction: ((newValue: any, threshold: any) => boolean), threshold: any): any;
    passesRule(validationRule: any): any;
    checkLast(): any;
    withMessage(message: string | ((newValue: any, threshold: any) => any)): any;
    if(conditionExpression: (() => boolean)): any;
    else(): any;
    endIf(): any;
    switch(conditionExpression: (() => any)): any;
    case(caseLabel: any): any;
    default(): any;
    endSwitch(): any;
  }
  
  /**
   * Encapsulates validation rules and their current validation state for a given subject
   * @class ValidationGroup
   * @constructor
   */
  export class ValidationGroup {
    
    /**
       * Instantiates a new {ValidationGroup}
       * @param subject The subject to evaluate
       * @param observerLocator The observerLocator used to monitor changes on the subject
       * @param config The configuration
       */
    constructor(subject: any, observerLocator: any, config: any);
    destroy(): void;
    
    // TODO: what else needs to be done for proper cleanup?
    clear(): void;
    onBreezeEntity(): any;
    
    /**
       * Causes complete re-evaluation: gets the latest value, marks the property as 'dirty' (unless false is passed), runs validation rules asynchronously and updates this.result
       * @returns {Promise} A promise that fulfils when valid, rejects when invalid.
       */
    validate(forceDirty?: boolean, forceExecution?: boolean): Promise<ValidationResult>;
    onValidate(validationFunction: (() => any), validationFunctionFailedCallback?: ((a: any, b: any, c: any, d: any, e: any) => any)): ValidationGroup;
    onPropertyValidate(validationFunction: any): ValidationGroup;
    
    /**
       * Adds a validation property for the specified path
       * @param {String} bindingPath the path of the property/field, for example 'firstName' or 'address.muncipality.zipCode'
       * @param configCallback a configuration callback
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    ensure(bindingPath: string, configCallback?: ((config: ValidationConfig) => void)): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being 'isNotEmpty', 'required'
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isNotEmpty(): ValidationGroup;
    
    /**
       * Adds a validation rule that allows a value to be empty/null
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    canBeEmpty(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being greater than or equal to a threshold
       * @param minimumValue the threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isGreaterThanOrEqualTo(minimumValue: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being greater than a threshold
       * @param minimumValue the threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isGreaterThan(minimumValue: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being greater than or equal to a threshold, and less than or equal to another threshold
       * @param minimumValue The minimum threshold
       * @param maximumValue The isLessThanOrEqualTo threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isBetween(minimumValue: any, maximumValue: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being less than a threshold
       * @param maximumValue The threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isLessThanOrEqualTo(maximumValue: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being less than or equal to a threshold
       * @param maximumValue The threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isLessThan(maximumValue: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being equal to a threshold
       * @param otherValue The threshold
       * @param otherValueLabel Optional: a label to use in the validation message
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isEqualTo(otherValue: any, otherValueLabel: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for not being equal to a threshold
       * @param otherValue The threshold
       * @param otherValueLabel Optional: a label to use in the validation message
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isNotEqualTo(otherValue: any, otherValueLabel: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being a valid isEmail address
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isEmail(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being a valid URL
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isURL(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being equal to at least one other value in a particular collection
       * @param collection The threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isIn(collection: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for having a length greater than or equal to a specified threshold
       * @param minimumValue The threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    hasMinLength(minimumValue: number): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for having a length less than a specified threshold
       * @param maximumValue The threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    hasMaxLength(maximumValue: number): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for having a length greater than or equal to a specified threshold and less than another threshold
       * @param minimumValue The min threshold
       * @param maximumValue The max threshold
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    hasLengthBetween(minimumValue: number, maximumValue: number): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being numeric, this includes formatted numbers like '-3,600.25'
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isNumber(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for containing not a single whitespace
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    containsNoSpaces(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being strictly numeric, this excludes formatted numbers like '-3,600.25'
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    containsOnlyDigits(): ValidationGroup;
    containsOnly(regex: any): ValidationGroup;
    containsOnlyAlpha(): ValidationGroup;
    containsOnlyAlphaOrWhitespace(): ValidationGroup;
    containsOnlyLetters(): ValidationGroup;
    containsOnlyLettersOrWhitespace(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for only containing alphanumerical characters
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    containsOnlyAlphanumerics(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for only containing alphanumerical characters or whitespace
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    containsOnlyAlphanumericsOrWhitespace(): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for being a strong password. A strong password contains at least the specified of the following groups: lowercase characters, uppercase characters, digits and special characters.
       * @param minimumComplexityLevel {Number} Optionally, specifiy the number of groups to match. Default is 4.
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    isStrongPassword(minimumComplexityLevel: number): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for matching a particular regex
       * @param regex the regex to match
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    matches(regex: any): ValidationGroup;
    
    /**
       * Adds a validation rule that checks a value for passing a custom function
       * @param customFunction {Function} The custom function that needs to pass, that takes two arguments: newValue (the value currently being evaluated) and optionally: threshold, and returns true/false.
       * @param threshold {Object} An optional threshold that will be passed to the customFunction
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    passes(customFunction: Function, threshold: any): ValidationGroup;
    
    /**
       * Adds the {ValidationRule}
       * @param validationRule {ValidationRule} The rule that needs to pass
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    passesRule(validationRule: ValidationRule): ValidationGroup;
    
    /**
       * Specifies that the next validation rules only need to be evaluated when the specified conditionExpression is true
       * @param conditionExpression {Function} a function that returns true of false.
       * @param threshold {Object} an optional treshold object that is passed to the conditionExpression
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    if(conditionExpression: Function, threshold: any): ValidationGroup;
    
    /**
       * Specifies that the next validation rules only need to be evaluated when the previously specified conditionExpression is false.
       * See: if (conditionExpression, threshold)
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    else(): ValidationGroup;
    
    /**
       * Specifies that the execution of next validation rules no longer depend on the the previously specified conditionExpression.
       * See: if (conditionExpression, threshold)
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    endIf(): ValidationGroup;
    
    /**
       * Specifies that the next validation rules only need to be evaluated when they are preceded by a case that matches the conditionExpression
       * @param conditionExpression {Function} a function that returns a case label to execute. This is optional, when omitted the case label will be matched using the underlying property's value
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    switch(conditionExpression: Function): ValidationGroup;
    
    /**
       * Specifies that the next validation rules only need to be evaluated when the caseLabel matches the value returned by a preceding switch statement
       * See: switch(conditionExpression)
       * @param caseLabel {Object} the case label
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    case(caseLabel: any): ValidationGroup;
    
    /**
       * Specifies that the next validation rules only need to be evaluated when not other caseLabel matches the value returned by a preceding switch statement
       * See: switch(conditionExpression)
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    default(): ValidationGroup;
    
    /**
       * Specifies that the execution of next validation rules no longer depend on the the previously specified conditionExpression.
       * See: switch(conditionExpression)
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    endSwitch(): ValidationGroup;
    
    /**
       * Specifies that the execution of the previous validation rule should use the specified error message if it fails
       * @param message either a static string or a function that takes two arguments: newValue (the value that has been evaluated) and threshold.
       * @returns {ValidationGroup} returns this ValidationGroup, to enable fluent API
       */
    withMessage(message: string | ((newValue: any, threshold: any) => any)): any;
  }
  export class ValidationLocale {
    constructor(defaults: any, data: any);
    getValueFor(identifier: any, category: any): any;
    setting(settingIdentifier: any): any;
    translate(translationIdentifier: any, newValue: any, threshold: any): any;
  }
  export class ValidationProperty {
    constructor(observerLocator: any, propertyName: any, validationGroup: any, propertyResult: any, config: any);
    addValidationRule(validationRule: any): any;
    validateCurrentValue(forceDirty: any, forceExecution: any): any;
    clear(): any;
    destroy(): any;
    
    // TODO: what else needs to be done for proper cleanup?
    /**
       * returns a promise that fulfils and resolves to true/false
       */
    validate(newValue: any, shouldBeDirty: any, forceExecution: any): any;
  }
  export class ValidationResult {
    constructor();
    addProperty(name: any): any;
    checkValidity(): any;
    clear(): any;
  }
  export class ValidationResultProperty {
    constructor(group: any);
    clear(): void;
    onValidate(onValidateCallback: any): void;
    notifyObserversOfChange(): void;
    setValidity(validationResponse: any, shouldBeDirty: boolean): void;
  }
  export class ValidationRulesCollection {
    constructor(config: any);
    
    /**
       * Returns a promise that fulfils and resolves to simple result status object.
       */
    validate(newValue: any, locale: any): any;
    addValidationRule(validationRule: any): any;
    addValidationRuleCollection(validationRulesCollection: any): any;
    isNotEmpty(): any;
    canBeEmpty(): any;
    withMessage(message: any): any;
  }
  export class SwitchCaseValidationRulesCollection {
    constructor(conditionExpression: any, config: any);
    case(caseLabel: any): any;
    
    //force creation
    default(): any;
    getCurrentCollection(caseLabel: any, createIfNotExists?: any): any;
    validate(newValue: any, locale: any): any;
    addValidationRule(validationRule: any): any;
    addValidationRuleCollection(validationRulesCollection: any): any;
    isNotEmpty(): any;
    canBeEmpty(): any;
    withMessage(message: any): any;
  }
  export class ValidationRule {
    constructor(threshold: any, onValidate: any, message: any, ruleName: any);
    withMessage(message: any): any;
    explain(): any;
    setResult(result: any, currentValue: any, locale: any): any;
    
    /**
       * Validation rules: return a promise that fulfills and resolves to true/false
       */
    validate(currentValue: any, locale: any): Promise<any>;
  }
  export class URLValidationRule extends ValidationRule {
    
    //https://github.com/chriso/validator.js/blob/master/LICENSE
    static isIP(str: any, version: any): any;
    static isFQDN(str: any, options: any): any;
    
    // threshold here renamed to startingThreshold because linter was mad,
    //  probably not the best name
    constructor(startingThreshold: any);
  }
  export class EmailValidationRule extends ValidationRule {
    
    //https://github.com/chriso/validator.js/blob/master/LICENSE
    static testEmailUserUtf8Regex(user: any): any;
    static isFQDN(str: any): any;
    constructor();
  }
  export class MinimumLengthValidationRule extends ValidationRule {
    constructor(minimumLength: any);
  }
  export class MaximumLengthValidationRule extends ValidationRule {
    constructor(maximumLength: any);
  }
  export class BetweenLengthValidationRule extends ValidationRule {
    constructor(minimumLength: any, maximumLength: any);
  }
  export class CustomFunctionValidationRule extends ValidationRule {
    constructor(customFunction: any, threshold: any);
  }
  export class NumericValidationRule extends ValidationRule {
    constructor();
  }
  export class RegexValidationRule extends ValidationRule {
    constructor(startingRegex: any, ruleName: any);
  }
  export class ContainsOnlyValidationRule extends RegexValidationRule {
    constructor(regex: any);
  }
  export class MinimumValueValidationRule extends ValidationRule {
    constructor(minimumValue: any);
  }
  export class MinimumInclusiveValueValidationRule extends ValidationRule {
    constructor(minimumValue: any);
  }
  export class MaximumValueValidationRule extends ValidationRule {
    constructor(maximumValue: any);
  }
  export class MaximumInclusiveValueValidationRule extends ValidationRule {
    constructor(maximumValue: any);
  }
  export class BetweenValueValidationRule extends ValidationRule {
    constructor(minimumValue: any, maximumValue: any);
  }
  export class DigitValidationRule extends ValidationRule {
    constructor();
  }
  export class NoSpacesValidationRule extends ValidationRule {
    constructor();
  }
  export class AlphaNumericValidationRule extends ValidationRule {
    constructor();
  }
  export class AlphaValidationRule extends ValidationRule {
    constructor();
  }
  export class AlphaOrWhitespaceValidationRule extends ValidationRule {
    constructor();
  }
  export class AlphaNumericOrWhitespaceValidationRule extends ValidationRule {
    constructor();
  }
  export class MediumPasswordValidationRule extends ValidationRule {
    constructor(minimumComplexityLevel: any, ruleName: any);
  }
  export class StrongPasswordValidationRule extends MediumPasswordValidationRule {
    constructor();
  }
  export class EqualityValidationRuleBase extends ValidationRule {
    constructor(startingOtherValue: any, equality: any, otherValueLabel: any, ruleName: any);
  }
  export class EqualityValidationRule extends EqualityValidationRuleBase {
    constructor(otherValue: any);
  }
  export class EqualityWithOtherLabelValidationRule extends EqualityValidationRuleBase {
    constructor(otherValue: any, otherLabel: any);
  }
  export class InEqualityValidationRule extends EqualityValidationRuleBase {
    constructor(otherValue: any);
  }
  export class InEqualityWithOtherLabelValidationRule extends EqualityValidationRuleBase {
    constructor(otherValue: any, otherLabel: any);
  }
  export class InCollectionValidationRule extends ValidationRule {
    constructor(startingCollection: any);
  }
  export class ValidationViewStrategy {
    constructor();
    getValidationProperty(validation: any, element: any): any;
    prepareElement(validationProperty: any, element: any): any;
    updateElement(validationProperty: any, element: any): any;
  }
  
  /**
   * A lightweight validation plugin
   * @class Validation
   * @constructor
   */
  export class Validation {
    
    /**
       * Instantiates a new {Validation}
       * @param observerLocator the observerLocator used to observer properties
       * @param validationConfig the configuration
       */
    constructor(observerLocator: any, validationConfig: ValidationConfig);
    
    /**
       * Returns a new validation group on the subject
       * @param subject The subject to validate
       * @returns {ValidationGroup} A ValidationGroup that encapsulates the validation rules and current validation state for this subject
       */
    on(subject: any, configCallback?: ((conf: ValidationConfig) => void)): ValidationGroup;
    onBreezeEntity(breezeEntity: any, configCallback?: ((conf: ValidationConfig) => void)): ValidationGroup;
  }
  export class TWBootstrapViewStrategyBase extends ValidationViewStrategy {
    constructor(appendMessageToInput: any, appendMessageToLabel: any, helpBlockClass: any);
    searchFormGroup(currentElement: any, currentDepth: any): any;
    findLabels(formGroup: any, inputId: any): any;
    findLabelsRecursively(currentElement: any, inputId: any, currentLabels: any, currentDepth: any): any;
    appendMessageToElement(element: any, validationProperty: any): any;
    appendUIVisuals(validationProperty: any, currentElement: any): any;
    prepareElement(validationProperty: any, element: any): any;
    updateElement(validationProperty: any, element: any): any;
  }
  export class TWBootstrapViewStrategy {
  
  }
}