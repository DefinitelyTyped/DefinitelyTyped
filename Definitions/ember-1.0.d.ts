// Type definitions for Ember.js 1.0
// Project: http://emberjs.com/
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface EmberApplication {
    create(): EmberApplication;
    MyView: EmberView;
}

interface EmberAlias {
}

interface EmberArrayController {
}

interface EmberBinding {
}

interface EmberDescriptor {
}

interface EmberNativeArray {
    activate(): void;
}

interface EmberObject {
}

interface EmberView {
}

interface EmberStatic {

    $; // jQuery
    A(arr?: any[]): EmberNativeArray;
    addListener(obj: any, eventName: string, targetOrMethod: any, method: any): void;
    alias(methodName: EmberDescriptor): EmberAlias;
    assert(desc: string, test: bool): void;
    beforeObserver(func: Function, propertyNames: string): Function;
    bind(obj: any, to: string, from: string): EmberBinding;
    cacheFor(obj: any, key: string): void;

    Application: EmberApplication;
    Object: EmberObject;
    View: EmberView;
}

declare var Em: EmberStatic;
declare var Ember: EmberStatic;