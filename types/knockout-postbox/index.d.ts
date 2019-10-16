// Type definitions for knockout-postbox
// Project: https://github.com/rniemeyer/knockout-postbox
// Definitions by: Judah Gabriel Himango <https://debuggerdotbreak.wordpress.com>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

interface KnockoutPostBox {
    subscribe<T>(topic: string, handler: (value: T) => void, target?: any): ko.Subscription;
    publish<T>(topic: string, value?: T): void;
    defaultComparer<T>(newValue: T, oldValue: T): boolean;
    serializer: (object: any) => string;
    reset(): void;
}

declare namespace ko {
    interface Observable<T = any> extends ObservableFunctions<T> {
        subscribeTo(
            topic: string,
            useLastPublishedValueToInitialize?: boolean,
            transform?: (val: any) => T,
        ): Observable<T>;
        unsubscribeFrom(topic: string): Observable<T>;
        publishOn(
            topic: string,
            skipInitialPublish?: boolean,
            equalityComparer?: (newValue: T, oldValue: T) => boolean,
        ): Observable<T>;
        stopPublishingOn(topic: string): Observable<T>;
        syncWith(
            topic: string,
            initializeWithLatestValue?: boolean,
            skipInitialPublish?: boolean,
            equalityComparer?: (newValue: T, oldValue: T) => boolean,
        ): Observable<T>;
    }

    interface ObservableArray<T = any> extends Observable<T[]>, ObservableArrayFunctions<T> {
        subscribeTo(
            topic: string,
            useLastPublishedValueToInitialize?: boolean,
            transform?: (val: any) => any /* T */,
        ): ObservableArray<T>;
        unsubscribeFrom(topic: string): ObservableArray<T>;
        publishOn(
            topic: string,
            skipInitialPublish?: boolean,
            equalityComparer?: (newValue: any /* T */, oldValue: any /* T */) => boolean,
        ): ObservableArray<T>;
        stopPublishingOn(topic: string): ObservableArray<T>;
        syncWith(
            topic: string,
            initializeWithLatestValue?: boolean,
            skipInitialPublish?: boolean,
            equalityComparer?: (newValue: any /* T */, oldValue: any /* T */) => boolean,
        ): ObservableArray<T>;
    }

    const postbox: KnockoutPostBox;
}
