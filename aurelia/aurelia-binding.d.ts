declare module 'aurelia-binding/access-keyed-observer' {
	export class AccessKeyedObserver {
	    objectInfo: any;
	    keyInfo: any;
	    evaluate: any;
	    observerLocator: any;
	    disposeKey: any;
	    disposeObject: any;
	    disposeProperty: any;
	    callback: any;
	    constructor(objectInfo: any, keyInfo: any, observerLocator: any, evaluate: any);
	    updatePropertySubscription(object: any, key: any): void;
	    objectOrKeyChanged(object: any, key?: any): void;
	    subscribe(callback: any): () => void;
	    notify(): void;
	    dispose(): void;
	}

}
declare module 'aurelia-binding/array-change-records' {
	export function calcSplices(current: any, currentStart: any, currentEnd: any, old: any, oldStart: any, oldEnd: any): any;
	export function projectArraySplices(array: any, changeRecords: any): any[];

}
declare module 'aurelia-binding/environment' {
	export var hasObjectObserve: boolean;
	export var hasArrayObserve: boolean;

}
declare module 'aurelia-binding/map-change-records' {
	export function getChangeRecords(map: any): any[];

}
declare module 'aurelia-binding/collection-observation' {
	export class ModifyCollectionObserver {
	    taskQueue: any;
	    queued: any;
	    callbacks: any;
	    changeRecords: any;
	    oldCollection: any;
	    collection: any;
	    lengthPropertyName: any;
	    lengthObserver: any;
	    array: any;
	    constructor(taskQueue: any, collection: any);
	    subscribe(callback: any): () => void;
	    addChangeRecord(changeRecord: any): void;
	    reset(oldCollection: any): void;
	    getLengthObserver(): any;
	    call(): void;
	}
	export class CollectionLengthObserver {
	    collection: any;
	    callbacks: any;
	    lengthPropertyName: any;
	    currentValue: any;
	    constructor(collection: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    subscribe(callback: any): () => void;
	    call(newValue: any): void;
	}

}
declare module 'aurelia-binding/array-observation' {
	export function getArrayObserver(taskQueue: any, array: any): any;

}
declare module 'aurelia-binding/path-observer' {
	export class PathObserver {
	    leftObserver: any;
	    disposeLeft: any;
	    rightObserver: any;
	    disposeRight: any;
	    callback: any;
	    constructor(leftObserver: any, getRightObserver: any, value: any);
	    updateRight(observer: any): any;
	    subscribe(callback: any): () => void;
	    notify(newValue: any): void;
	    dispose(): void;
	}

}
declare module 'aurelia-binding/composite-observer' {
	export class CompositeObserver {
	    subscriptions: any;
	    evaluate: any;
	    callback: any;
	    constructor(observers: any, evaluate: any);
	    subscribe(callback: any): () => void;
	    notify(newValue: any): void;
	    dispose(): void;
	}

}
declare module 'aurelia-binding/ast' {
	import { AccessKeyedObserver } from 'aurelia-binding/access-keyed-observer';
	export class Expression {
	    isChain: any;
	    isAssignable: any;
	    constructor();
	    evaluate(): void;
	    assign(): void;
	    toString(): string;
	}
	export class Chain extends Expression {
	    expressions: any;
	    constructor(expressions: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	}
	export class ValueConverter extends Expression {
	    expression: any;
	    name: any;
	    args: any;
	    allArgs: any;
	    constructor(expression: any, name: any, args: any, allArgs: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class Assign extends Expression {
	    target: any;
	    value: any;
	    constructor(target: any, value: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(vistor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	    };
	}
	export class Conditional extends Expression {
	    condition: any;
	    yes: any;
	    no: any;
	    constructor(condition: any, yes: any, no: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class AccessScope extends Expression {
	    name: any;
	    isAssignable: any;
	    constructor(name: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class AccessMember extends Expression {
	    object: any;
	    name: any;
	    isAssignable: any;
	    constructor(object: any, name: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class AccessKeyed extends Expression {
	    object: any;
	    key: any;
	    isAssignable: any;
	    constructor(object: any, key: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    assign(scope?: any, value?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: AccessKeyedObserver;
	    };
	}
	export class CallScope extends Expression {
	    name: any;
	    args: any;
	    constructor(name: any, args: any);
	    evaluate(scope?: any, valueConverters?: any, args?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class CallMember extends Expression {
	    object: any;
	    name: any;
	    args: any;
	    constructor(object: any, name: any, args: any);
	    evaluate(scope?: any, valueConverters?: any, args?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class CallFunction extends Expression {
	    func: any;
	    args: any;
	    constructor(func: any, args: any);
	    evaluate(scope?: any, valueConverters?: any, args?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class Binary extends Expression {
	    operation: any;
	    left: any;
	    right: any;
	    constructor(operation: any, left: any, right: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	        observer: any;
	    };
	}
	export class PrefixNot extends Expression {
	    operation: any;
	    expression: any;
	    constructor(operation: any, expression: any);
	    evaluate(scope?: any, valueConverters?: any): boolean;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: boolean;
	        observer: any;
	    };
	}
	export class LiteralPrimitive extends Expression {
	    value: any;
	    constructor(value: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	    };
	}
	export class LiteralString extends Expression {
	    value: any;
	    constructor(value: any);
	    evaluate(scope?: any, valueConverters?: any): any;
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any;
	    };
	}
	export class LiteralArray extends Expression {
	    elements: any;
	    constructor(elements: any);
	    evaluate(scope?: any, valueConverters?: any): any[];
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: any[];
	        observer: any;
	    };
	}
	export class LiteralObject extends Expression {
	    keys: any;
	    values: any;
	    constructor(keys: any, values: any);
	    evaluate(scope?: any, valueConverters?: any): {};
	    accept(visitor: any): void;
	    connect(binding: any, scope: any): {
	        value: {};
	        observer: any;
	    };
	}
	export class Unparser {
	    buffer: any;
	    constructor(buffer: any);
	    static unparse(expression: any): string;
	    write(text: any): void;
	    writeArgs(args: any): void;
	    visitChain(chain: any): void;
	    visitValueConverter(converter: any): void;
	    visitAssign(assign: any): void;
	    visitConditional(conditional: any): void;
	    visitAccessScope(access: any): void;
	    visitAccessMember(access: any): void;
	    visitAccessKeyed(access: any): void;
	    visitCallScope(call: any): void;
	    visitCallFunction(call: any): void;
	    visitCallMember(call: any): void;
	    visitPrefix(prefix: any): void;
	    visitBinary(binary: any): void;
	    visitLiteralPrimitive(literal: any): void;
	    visitLiteralArray(literal: any): void;
	    visitLiteralObject(literal: any): void;
	    visitLiteralString(literal: any): void;
	}

}
declare module 'aurelia-binding/binding-modes' {
	export const bindingMode: {
	    oneTime: number;
	    oneWay: number;
	    twoWay: number;
	};

}
declare module 'aurelia-binding/binding-expression' {
	export class BindingExpression {
	    observerLocator: any;
	    targetProperty: any;
	    sourceExpression: any;
	    mode: any;
	    valueConverterLookupFunction: any;
	    attribute: any;
	    discrete: any;
	    constructor(observerLocator: any, targetProperty: any, sourceExpression: any, mode: any, valueConverterLookupFunction: any, attribute?: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/call-expression' {
	export class CallExpression {
	    observerLocator: any;
	    targetProperty: any;
	    sourceExpression: any;
	    valueConverterLookupFunction: any;
	    constructor(observerLocator: any, targetProperty: any, sourceExpression: any, valueConverterLookupFunction: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/computed-observation' {
	export class ComputedPropertyObserver {
	    obj: any;
	    propertyName: any;
	    descriptor: any;
	    observerLocator: any;
	    callbacks: any;
	    oldValue: any;
	    subscriptions: any;
	    constructor(obj: any, propertyName: any, descriptor: any, observerLocator: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    trigger(newValue: any, oldValue: any): void;
	    evaluate(): void;
	    subscribe(callback: any): () => void;
	}
	export function hasDeclaredDependencies(descriptor: any): any;
	export function declarePropertyDependencies(ctor: any, propertyName: any, dependencies: any): void;

}
declare module 'aurelia-binding/dirty-checking' {
	export class DirtyChecker {
	    tracked: any;
	    checkDelay: any;
	    constructor();
	    addProperty(property: any): void;
	    removeProperty(property: any): void;
	    scheduleDirtyCheck(): void;
	    check(): void;
	}
	export class DirtyCheckProperty {
	    dirtyChecker: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    isSVG: any;
	    oldValue: any;
	    tracking: any;
	    newValue: any;
	    constructor(dirtyChecker: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    call(): void;
	    isDirty(): boolean;
	    beginTracking(): void;
	    endTracking(): void;
	    subscribe(callback: any): () => void;
	}

}
declare module 'aurelia-binding/element-observation' {
	export class XLinkAttributeObserver {
	    element: any;
	    propertyName: any;
	    attributeName: any;
	    constructor(element: any, propertyName: any, attributeName: any);
	    getValue(): any;
	    setValue(newValue: any): any;
	    subscribe(callback: any): void;
	}
	export class DataAttributeObserver {
	    element: any;
	    propertyName: any;
	    constructor(element: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): any;
	    subscribe(callback: any): void;
	}
	export class StyleObserver {
	    element: any;
	    propertyName: any;
	    constructor(element: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    subscribe(callback: any): void;
	    flattenCss(object: any): string;
	}
	export class ValueAttributeObserver {
	    element: any;
	    propertyName: any;
	    handler: any;
	    callbacks: any;
	    oldValue: any;
	    disposeHandler: any;
	    constructor(element: any, propertyName: any, handler: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    call(): void;
	    subscribe(callback: any): any;
	    unsubscribe(callback: any): void;
	}
	export class SelectValueObserver {
	    element: any;
	    handler: any;
	    observerLocator: any;
	    value: any;
	    arraySubscription: any;
	    initialSync: any;
	    oldValue: any;
	    callbacks: any;
	    disposeHandler: any;
	    domObserver: any;
	    constructor(element: any, handler: any, observerLocator: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    synchronizeOptions(): void;
	    synchronizeValue(): void;
	    call(): void;
	    subscribe(callback: any): any;
	    unsubscribe(callback: any): void;
	    bind(): void;
	    unbind(): void;
	}
	export class CheckedObserver {
	    element: any;
	    handler: any;
	    observerLocator: any;
	    value: any;
	    arraySubscription: any;
	    initialSync: any;
	    oldValue: any;
	    callbacks: any;
	    disposeHandler: any;
	    constructor(element: any, handler: any, observerLocator: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    synchronizeElement(): void;
	    synchronizeValue(): void;
	    call(): void;
	    subscribe(callback: any): any;
	    unsubscribe(callback: any): void;
	    unbind(): void;
	}

}
declare module 'aurelia-binding/event-manager' {
	export class EventManager {
	    elementHandlerLookup: any;
	    eventStrategyLookup: any;
	    defaultEventStrategy: any;
	    constructor();
	    registerElementConfig(config: any): void;
	    registerElementPropertyConfig(tagName: any, propertyName: any, events: any): void;
	    registerElementHandler(tagName: any, handler: any): void;
	    registerEventStrategy(eventName: any, strategy: any): void;
	    getElementHandler(target: any, propertyName: any): any;
	    addEventListener(target: any, targetEvent: any, callback: any, delegate: any): any;
	}

}
declare module 'aurelia-binding/value-converter' {
	export class ValueConverterResource {
	    name: any;
	    instance: any;
	    constructor(name?: any);
	    static convention(name: any): ValueConverterResource;
	    analyze(container: any, target: any): void;
	    register(registry: any, name: any): void;
	    load(container: any, target: any): Promise<ValueConverterResource>;
	}

}
declare module 'aurelia-binding/property-observation' {
	export class SetterObserver {
	    taskQueue: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    queued: any;
	    observing: any;
	    currentValue: any;
	    oldValue: any;
	    constructor(taskQueue: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    getterValue(): any;
	    setterValue(newValue: any): void;
	    call(): void;
	    subscribe(callback: any): () => void;
	    convertProperty(): void;
	}
	export class OoObjectObserver {
	    obj: any;
	    observers: any;
	    observerLocator: any;
	    observing: any;
	    constructor(obj: any, observerLocator: any);
	    subscribe(propertyObserver: any, callback: any): () => void;
	    getObserver(propertyName: any, descriptor: any): any;
	    handleChanges(changeRecords: any): void;
	}
	export class OoPropertyObserver {
	    owner: any;
	    obj: any;
	    propertyName: any;
	    callbacks: any;
	    constructor(owner: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    trigger(newValue: any, oldValue: any): void;
	    subscribe(callback: any): any;
	}
	export class UndefinedPropertyObserver {
	    owner: any;
	    obj: any;
	    propertyName: any;
	    callbackMap: any;
	    callbacks: any;
	    actual: any;
	    subscription: any;
	    constructor(owner: any, obj: any, propertyName: any);
	    getValue(): any;
	    setValue(newValue: any): void;
	    trigger(newValue: any, oldValue: any): void;
	    getObserver(): void;
	    subscribe(callback: any): any;
	}

}
declare module 'aurelia-binding/observer-locator' {
	export class ObserverLocator {
	    taskQueue: any;
	    eventManager: any;
	    dirtyChecker: any;
	    observationAdapters: any;
	    static inject(): any[];
	    constructor(taskQueue: any, eventManager: any, dirtyChecker: any, observationAdapters: any);
	    getObserversLookup(obj: any): any;
	    getObserver(obj: any, propertyName: any): any;
	    getObservationAdapter(obj: any, propertyName: any, descriptor: any): any;
	    createPropertyObserver(obj: any, propertyName: any): any;
	    getArrayObserver(array: any): any;
	    getMapObserver(map: any): any;
	}
	export class ObjectObservationAdapter {
	    handlesProperty(object: any, propertyName: any, descriptor: any): void;
	    getObserver(object: any, propertyName: any, descriptor: any): void;
	}

}
declare module 'aurelia-binding/lexer' {
	export class Token {
	    index: any;
	    text: any;
	    opKey: any;
	    key: any;
	    value: any;
	    constructor(index: any, text: any);
	    withOp(op: any): Token;
	    withGetterSetter(key: any): Token;
	    withValue(value: any): Token;
	    toString(): string;
	}
	export class Lexer {
	    lex(text: any): any[];
	}
	export class Scanner {
	    input: any;
	    length: any;
	    peek: any;
	    index: any;
	    constructor(input: any);
	    scanToken(): any;
	    scanCharacter(start: any, text: any): Token;
	    scanOperator(start: any, text: any): Token;
	    scanComplexOperator(start: any, code: any, one: any, two: any): Token;
	    scanIdentifier(): Token;
	    scanNumber(start: any): Token;
	    scanString(): Token;
	    advance(): void;
	    error(message: any, offset?: number): void;
	}

}
declare module 'aurelia-binding/parser' {
	import { AccessScope, LiteralObject } from 'aurelia-binding/ast';
	export class Parser {
	    cache: any;
	    lexer: any;
	    constructor();
	    parse(input: any): any;
	}
	export class ParserImplementation {
	    index: any;
	    input: any;
	    tokens: any;
	    constructor(lexer: any, input: any);
	    peek: any;
	    parseChain(): any;
	    parseValueConverter(): any;
	    parseExpression(): any;
	    parseConditional(): any;
	    parseLogicalOr(): any;
	    parseLogicalAnd(): any;
	    parseEquality(): any;
	    parseRelational(): any;
	    parseAdditive(): any;
	    parseMultiplicative(): any;
	    parsePrefix(): any;
	    parseAccessOrCallMember(): any;
	    parsePrimary(): any;
	    parseAccessOrCallScope(): AccessScope;
	    parseObject(): LiteralObject;
	    parseExpressionList(terminator: any): any[];
	    optional(text: any): boolean;
	    expect(text: any): void;
	    advance(): void;
	    error(message: any): void;
	}

}
declare module 'aurelia-binding/listener-expression' {
	export class ListenerExpression {
	    eventManager: any;
	    targetEvent: any;
	    sourceExpression: any;
	    delegate: any;
	    discrete: any;
	    preventDefault: any;
	    constructor(eventManager: any, targetEvent: any, sourceExpression: any, delegate: any, preventDefault: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/name-expression' {
	export class NameExpression {
	    property: any;
	    discrete: any;
	    mode: any;
	    constructor(name: any, mode: any);
	    createBinding(target: any): any;
	}

}
declare module 'aurelia-binding/index' {
	export { EventManager } from 'aurelia-binding/event-manager';
	export { ObserverLocator, ObjectObservationAdapter } from 'aurelia-binding/observer-locator';
	export { ValueConverterResource } from 'aurelia-binding/value-converter';
	export { calcSplices } from 'aurelia-binding/array-change-records';
	export * from 'aurelia-binding/binding-modes';
	export { Parser } from 'aurelia-binding/parser';
	export { BindingExpression } from 'aurelia-binding/binding-expression';
	export { ListenerExpression } from 'aurelia-binding/listener-expression';
	export { NameExpression } from 'aurelia-binding/name-expression';
	export { CallExpression } from 'aurelia-binding/call-expression';
	export { DirtyChecker } from 'aurelia-binding/dirty-checking';
	export { getChangeRecords } from 'aurelia-binding/map-change-records';
	export { ComputedPropertyObserver, declarePropertyDependencies } from 'aurelia-binding/computed-observation';
	export function valueConverter(nameOrTarget: any): (target: any) => void;
	export function computedFrom(...rest: any[]): (target: any, key: any, descriptor: any) => any;

}
declare module 'aurelia-binding' {
	export * from 'aurelia-binding/index';
}
