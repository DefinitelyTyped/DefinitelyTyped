// Type definitions for knockout-postbox
// Project: https://github.com/rniemeyer/knockout-postbox
// Definitions by: Judah Gabriel Himango <https://debuggerdotbreak.wordpress.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutPostBox {
    subscribe<T>(topic: string, handler: (value: T) => void , target?: any): KnockoutSubscription;
    publish<T>(topic: string, value?: T): void;
    defaultComparer<T>(newValue: T, oldValue: T): boolean;
}

interface KnockoutObservable<T> {
    subscribeTo(topic: string, useLastPublishedValueToInitialize?: boolean, transform?: (val: any) => T): KnockoutObservable<T>;
    unsubscribeFrom(topic: string): KnockoutObservable<T>;
    publishOn(topic: string, skipInitialPublish?: boolean, equalityComparer?: (newValue: T, oldValue: T) => boolean): KnockoutObservable<T>;
    stopPublishingOn(topic: string): KnockoutObservable<T>;
    syncWith(topic: string, initializeWithLatestValue?: boolean, skipInitialPublish?: boolean, equalityComparer?: (newValue: T, oldValue: T) => boolean): KnockoutObservable<T>;
}

interface KnockoutStatic {
    postbox: KnockoutPostBox;
}