// Type definitions for aurelia-binding v1.0.0-beta.1.3.2
// Project: https://github.com/aurelia/binding/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-dependency-injection.d.ts" />

/**
 * A modern databinding library for JavaScript and HTML.
 */
declare module 'aurelia-binding' {
  import { Container } from 'aurelia-dependency-injection';

  /**
   * The "parallel" or "artificial" aspect of the binding scope. Provides access to the parent binding
   * context and stores contextual bindable members such as $event, $index, $odd, etc. Members on this
   * object take precedence over members of the bindingContext object.
   */
  export interface OverrideContext {
    parentOverrideContext: OverrideContext;
    bindingContext: any;
  }

  /**
   * The two part binding scope. The first part is the bindingContext which represents the primary scope, typically a
   * view-model instance and second the overrideContext
   */
  export interface Scope {
    /**
     * The primary aspect of the binding scope.  Typically a view-model instance.
     */
    bindingContext: any;
    /**
     * The "parallel" or "artificial" aspect of the binding scope. Provides access to the parent binding
     * context and stores contextual bindable members such as $event, $index, $odd, etc. Members on this
     * object take precedence over members of the bindingContext object.
     */
    overrideContext: OverrideContext;
  }

  /**
   * Provides a mechanism for releasing resources.
   */
  export interface Disposable {
    /**
     * Performs tasks associated with freeing, releasing, or resetting resources.
     */
    dispose(): void;
  }

  /**
   * Creates an overrideContext object with the supplied bindingContext and optional parent overrideContext.
   */
  export function createOverrideContext(bindingContext: any, parentOverrideContext?: OverrideContext): OverrideContext;

  /**
   * Creates a scope object for testing purposes.
   */
  export function createScopeForTest(bindingContext: any, parentBindingContext?: any): Scope;

  /**
   * A ValueConverter resource.
   */
  export class ValueConverterResource {
    static convention(name: string): ValueConverterResource;
    constructor(name: string);
    initialize(container: Container, target: any): void;
    register(registry: any, name: string): void;
  }

  /**
   * A BindingBehavior resource.
   */
  export class BindingBehaviorResource {
    static convention(name: string): BindingBehaviorResource;
    constructor(name: string);
    initialize(container: Container, target: any): void;
    register(registry: any, name: string): void;
  }

  /**
   * Decorator: Adds efficient subscription management methods to the decorated class's prototype.
   */
  export function subscriberCollection(): any;

  /**
   * Subscribes to appropriate element events based on the element property
   * being observed for changes.
   * This is an internal API and is subject to change without notice in future releases.
   */
  export class EventManager {
    registerElementConfig(config: { tagName: string; properties: { (s: string): string[] }; }): void;
    /**
     * Subscribes to specified event on the target element.
     * @param target Target element.
     * @param targetEvent Name of event to subscribe.
     * @param callback Event listener callback.
     * @param delegate True to use event delegation mechanism.
     * @returns function wich removes event listener.
     */
    addEventListener(target: Element, targetEvent: string, callback: (event: Event) => any, delegate: boolean): () => void;
  }

  /**
   * Observes property changes.
   */
  export interface PropertyObserver {
    /**
     * Subscribe to property change events.
     */
    subscribe(callback: (newValue: any, oldValue: any) => void): Disposable;
  }

  /**
   * Observes collection mutation.
   */
  export interface CollectionObserver {
    /**
     * Subscribe to collection mutation events.
     */
    subscribe(callback: (changeRecords: any) => void): Disposable;
  }

  /**
   * Describes the direction of the data flow in a binding.
   */
  export enum bindingMode {
    /**
     * Updates the binding target once. This is essentially a simpler form of one-way binding
     * that provides better performance in cases where the source value does not change.
     */
    oneTime = 0,
    /**
     * Updates the binding target (target) property when the binding source (source) changes.
     * This type of binding is appropriate if the element being bound is implicitly read-only.
     * If there is no need to monitor the changes of the target property, using the OneWay
     * binding mode avoids the overhead of the two-way binding mode.
     */
    oneWay = 1,
    /**
     * Causes changes to either the source property or the target property to automatically update
     * the other. This type of binding is appropriate for editable forms or other fully-interactive
     * UI scenarios.
     */
    twoWay = 2
  }

  /**
   * Lookup functions for value converter and binding behavior resources.
   */
  export interface LookupFunctions {
    bindingBehaviors(name: string): any;
    valueConverters(name: string): any;
  }

  /**
   * A callable object.
   */
  export interface Callable {
    call(context: any, newValue: any, oldValue: any): void;
    call(context: any, changeRecords: any): void;
  }

  /**
   * Observes property changes.
   */
  export interface InternalPropertyObserver {
    /**
     * Gets the property value.
     */
    getValue(): any;
    /**
     * Sets the property value.
     */
    setValue(newValue: any): void;
    /**
     * Subscribe to property changes with a callback function.
     */
    subscribe(callback: (newValue: any, oldValue: any) => void): void;
    /**
     * Subscribe a callable object to property changes.
     * @param context A value to be passed to the callable object's call function when a property change occurs.
     * @param callable A callable object.
     */
    subscribe(context: any, callable: Callable): void;
    /**
     * Unsubscribes a callback function from property changes.
     */
    unsubscribe(callback: (newValue: any, oldValue: any) => void): void;
    /**
     * Unsubscribes a callable object from property changes.
     * @param context A value to be passed to the callable object's call function when a property change occurs.
     * @param callable A callable object.
     */
    unsubscribe(context: any, callable: Callable): void;
  }

  /**
   * Observes collection mutation.
   */
  export interface InternalCollectionObserver {
    /**
     * Subscribe to collection mutation events with a callback function.
     */
    subscribe(callback: (changeRecords: any) => void): void;
    /**
     * Subscribe a callable object to collection mutation events.
     * @param context A value to be passed to the callable object's call function when collection mutation occurs.
     * @param callable A callable object.
     */
    subscribe(context: any, callable: Callable): void;
    /**
     * Unsubscribes a callback function from collection mutation changes.
     */
    unsubscribe(callback: (changeRecords: any) => void): void;
    /**
     * Unsubscribes a callable object from collection mutation events.
     * @param context A value to be passed to the callable object's call function when collection mutation occurs.
     * @param callable A callable object.
     */
    unsubscribe(context: any, callable: Callable): void;
  }

  /**
   * Provides high-level access to the definition of a binding, which connects the properties of
   * binding target objects (typically, HTML elements), and any data source
   */
  export interface Binding {
    /**
     * The directionality of the binding.
     */
    mode?: bindingMode;
    /**
     * The expression to access/assign/connect the binding source property.
     */
    sourceExpression?: Expression;
    /**
     * Assigns a value to the target.
     */
    updateTarget?: (value: any) => void;
    /**
     * Assigns a value to the source.
     */
    updateSource?: (value: any) => void;
    /**
     * Calls the source method with the specified args object.
     */
    callSource?: (event: any) => any;
    /**
     * Connects the binding to a scope.
     */
    bind(source: Scope): void;
    /**
     * Disconnects the binding from a scope.
     */
    unbind(): void;
  }

  /**
   * A factory for binding instances.
   */
  export interface BindingExpression {
    createBinding(target: any): Binding;
  }

  /**
   * Provides the base class from which the classes that represent expression tree nodes are derived.
   */
  export interface Expression {
    /**
     * Evaluates the expression using the provided scope and lookup functions.
     */
    evaluate(scope: Scope, lookupFunctions: LookupFunctions): any;
    /**
     * Assigns a value to the property represented by the expression.
     */
    assign(scope: Scope, value: any, lookupFunctions: LookupFunctions): void;
    /**
     * Subscribes a binding instance to the property change events along the path of the expression.
     */
    connect(binding: Binding, scope: Scope): void;
  }

  /**
   * A binding behavior expression.
   */
  export class BindingBehavior implements Expression {
    evaluate(scope: Scope, lookupFunctions: LookupFunctions): any;
    assign(scope: Scope, value: any, lookupFunctions: LookupFunctions): void;
    connect(binding: Binding, scope: Scope): void;
  }

  /**
   * A value converter expression.
   */
  export class ValueConverter implements Expression {
    evaluate(scope: Scope, lookupFunctions: LookupFunctions): any;
    assign(scope: Scope, value: any, lookupFunctions: LookupFunctions): void;
    connect(binding: Binding, scope: Scope): void;
  }

  /**
   * Parses strings containing javascript expressions and returns a data-binding specialized AST.
   */
  export class Parser {
    /**
     * Parses a string containing a javascript expression and returns a data-binding specialized AST. Memoized.
     */
    parse(input: string): Expression;
  }

  /**
   * Provides efficient property observers for properties that would otherwise require dirty-checking.
   */
  export interface ObjectObservationAdapter {
    getObserver(object: any, propertyName: string, descriptor: PropertyDescriptor): InternalPropertyObserver;
  }

  /**
   * Internal object observation API. Locates observers for properties, arrays and maps using a variety of strategies.
   */
  export class ObserverLocator {
    /**
     * Gets an observer for property changes.
     */
    getObserver(obj: any, propertyName: string): InternalPropertyObserver;
    /**
     * Adds a property observation adapter.
     */
    addAdapter(adapter: ObjectObservationAdapter): void;
    /**
     * Gets an observer for array mutation.
     */
    getArrayObserver(array: Array<any>): InternalCollectionObserver;
    /**
     * Gets an observer for map mutation.
     */
    getMapObserver(map: Map<any, any>): InternalCollectionObserver;
  }

  /**
   * Binding system API.
   */
  export class BindingEngine {
    /**
     * Creates a binding expression for the specified target property and source expression.
     * @param targetProperty The target attribute, eg "value" / "checked" / "textcontent" / "data-foo".
     * @param sourceExpression A javascript expression accessing the source property.
     * @param mode The directionality of the binding.
     * @param lookupFunctions Lookup functions for value converter and binding behavior resources.
     */
    createBindingExpression(targetProperty: string, sourceExpression: string, mode?: bindingMode, lookupFunctions?: LookupFunctions): BindingExpression;
    /**
     * Gets an observer for property changes.
     */
    propertyObserver(obj: Object, propertyName: string): PropertyObserver;
    /**
     * Gets an observer for collection mutation.
     */
    collectionObserver(collection: Array<any> | Map<any, any>): CollectionObserver;
    /**
     * Gets an observer for a javascript expression that accesses a property on the binding context.
     * @param bindingContext The binding context (view-model)
     * @param expression A javascript expression accessing the source property.
     */
    expressionObserver(bindingContext: any, expression: string): PropertyObserver;
    /**
     * Parses a string containing a javascript expression and returns a data-binding specialized AST. Memoized.
     */
    parseExpression(expression: string): Expression;
    /**
     * Registers an adapter that provides an efficient property observeration strategy for
     * properties that would otherwise require dirty-checking.
     */
    registerAdapter(adapter: ObjectObservationAdapter): void;
  }

  /**
   * Returns whether a property's dependencies have been declared.
   */
  export function hasDeclaredDependencies(descriptor: PropertyDescriptor): boolean;

  /**
   * Declares a property's dependencies.
   */
  export function declarePropertyDependencies(ctor: any, propertyName: string, dependencies: string[]): void;

 /**
  * Decorator: Indicates that the decorated property is computed from other properties.
  * @param propertyNames The names of the properties the decorated property is computed from.  Simple property names, not expressions.
  */
  export function computedFrom(...propertyNames: string[]): any;

 /**
  * Decorator: Indicates that the decorated class is a value converter.
  * @param name The name of the value converter.
  */
  export function valueConverter(name: string): any;

 /**
  * Decorator: Indicates that the decorated class is a binding behavior.
  * @param name The name of the binding behavior.
  */
  export function bindingBehavior(name: string): any;

  /**
   * A context used when invoking a binding's callable API to notify
   * the binding that the context is a "source update".
   */
  export const sourceContext: string;

  /**
   * An internal API used by Aurelia's array observation components.
   */
  export function getChangeRecords(): any;

  /**
   * An internal API used by Aurelia's array observation components.
   */
  export function mergeSplice(splices: any, index: number, removed: any, addedCount: number): any;
  
  /**
  * Decorator: Specifies that a property is observable.
  * @param targetOrConfig The name of the property, or a configuration object.
  */
  export function observable(targetOrConfig?: Object, key?: any, descriptor?: any): any;
}