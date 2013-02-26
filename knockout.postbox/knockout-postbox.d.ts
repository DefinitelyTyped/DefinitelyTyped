// Type definitions for knockout-postbox
// Project: https://github.com/rniemeyer/knockout-postbox
// Definitions by: Judah Gabriel <https://github.com/JudahGabriel>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface KnockoutPostBox {
    subscribe: (topic: string, handler: (value) => void, target?: any) => KnockoutObservableAny;
    publish: (topic: string, value?: any) => KnockoutObservableAny;
    defaultComparer: (newValue: any, oldValue: any) => bool;
}

interface KnockoutObservableString {
    subscribeTo: (topic: string, useLastPublishedValueToInitialize?: bool, transform?: (val: any) => string) => KnockoutObservableString;
    unsubscribeFrom: (topic: string) => KnockoutObservableString;
    publishOn: (topic: string, skipInitialPublish?: bool, equalityComparer?: (newValue: string, oldValue: string) => bool) => KnockoutObservableString;
    stopPublishingOn: (topic: string) => KnockoutObservableString;
    syncWith: (topic: string, initializeWithLatestValue?: bool, skipInitialPublish?: bool, equalityComparer?: (newValue: string, oldValue: string) => bool) => KnockoutObservableString;
}

interface KnockoutObservableDate {
    subscribeTo: (topic: string, useLastPublishedValueToInitialize?: bool, transform?: (val: any) => Date) => KnockoutObservableDate;
    unsubscribeFrom: (topic: string) => KnockoutObservableDate;
    publishOn: (topic: string, skipInitialPublish?: bool, equalityComparer?: (newValue: Date, oldValue: Date) => bool) => KnockoutObservableDate;
    stopPublishingOn: (topic: string) => KnockoutObservableDate;
    syncWith: (topic: string, initializeWithLatestValue?: bool, skipInitialPublish?: bool, equalityComparer?: (newValue: Date, oldValue: Date) => bool) => KnockoutObservableDate;
}

interface KnockoutObservableNumber {
    subscribeTo: (topic: string, useLastPublishedValueToInitialize?: bool, transform?: (val: any) => number) => KnockoutObservableNumber;
    unsubscribeFrom: (topic: string) => KnockoutObservableNumber;
    publishOn: (topic: string, skipInitialPublish?: bool, equalityComparer?: (newValue: Number, oldValue: Number) => bool) => KnockoutObservableNumber;
    stopPublishingOn: (topic: string) => KnockoutObservableNumber;
    syncWith: (topic: string, initializeWithLatestValue?: bool, skipInitialPublish?: bool, equalityComparer?: (newValue: Number, oldValue: Number) => bool) => KnockoutObservableNumber;
}

interface KnockoutObservableBool {
    subscribeTo: (topic: string, useLastPublishedValueToInitialize?: bool, transform?: (val: any) => bool) => KnockoutObservableBool;
    unsubscribeFrom: (topic: string) => KnockoutObservableBool;
    publishOn: (topic: string, skipInitialPublish?: bool, equalityComparer?: (newValue: bool, oldValue: bool) => bool) => KnockoutObservableBool;
    stopPublishingOn: (topic: string) => KnockoutObservableBool;
    syncWith: (topic: string, initializeWithLatestValue?: bool, skipInitialPublish?: bool, equalityComparer?: (newValue: bool, oldValue: bool) => bool) => KnockoutObservableBool;
}

interface KnockoutObservableAny {
    subscribeTo: (topic: string, useLastPublishedValueToInitialize?: bool, transform?: (val: any) => any) => KnockoutObservableAny;
    unsubscribeFrom: (topic: string) => KnockoutObservableAny;
    publishOn: (topic: string, skipInitialPublish?: bool, equalityComparer?: (newValue: any, oldValue: any) => bool) => KnockoutObservableAny;
    stopPublishingOn: (topic: string) => KnockoutObservableAny;
    syncWith: (topic: string, initializeWithLatestValue?: bool, skipInitialPublish?: bool, equalityComparer?: (newValue: any, oldValue: any) => bool) => KnockoutObservableAny;
}

interface KnockoutStatic {
    postbox: KnockoutPostBox;
}