// Type definitions for knockout-postbox
// Project: https://github.com/rniemeyer/knockout-postbox
// Definitions by: Judah Gabriel Himango <https://debuggerdotbreak.wordpress.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutPostBox {
    subscribe<T>(topic: string, handler: (value: T) => void , target?: any): KnockoutSubscription;
    publish<T>(topic: string, value?: T): void;
    defaultComparer<T>(newValue: T, oldValue: T): boolean;
    serializer: (object: any) => string;
}

interface KnockoutObservable<T> {
    subscribeTo(topic: string, useLastPublishedValueToInitialize?: boolean, transform?: (val: any) => T): KnockoutObservable<T>;
    unsubscribeFrom(topic: string): KnockoutObservable<T>;
    publishOn(topic: string, skipInitialPublish?: boolean, equalityComparer?: (newValue: T, oldValue: T) => boolean): KnockoutObservable<T>;
    stopPublishingOn(topic: string): KnockoutObservable<T>;
    syncWith(topic: string, initializeWithLatestValue?: boolean, skipInitialPublish?: boolean, equalityComparer?: (newValue: T, oldValue: T) => boolean): KnockoutObservable<T>;
}

interface KnockoutObservableArray<T> {
	subscribeTo(topic: string, useLastPublishedValueToInitialize?: boolean, transform?: (val: any) => any /* T */): KnockoutObservableArray<T>;
	unsubscribeFrom(topic: string): KnockoutObservableArray<T>;
	publishOn(topic: string, skipInitialPublish?: boolean, equalityComparer?: (newValue: any /* T */, oldValue: any /* T */) => boolean): KnockoutObservableArray<T>;
	stopPublishingOn(topic: string): KnockoutObservableArray<T>;
	syncWith(topic: string, initializeWithLatestValue?: boolean, skipInitialPublish?: boolean, equalityComparer?: (newValue: any /* T */, oldValue: any /* T */) => boolean): KnockoutObservableArray<T>;
}

interface KnockoutStatic {
    postbox: KnockoutPostBox;
}
