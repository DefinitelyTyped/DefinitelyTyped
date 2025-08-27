import Observable = require(".");

/**
 * @see https://github.com/zenparsing/zen-observable/blob/master/esm.js
 */
export default Observable;
export { Observable };
export * from "./extras";

export type SubscriptionObserver<T> = ZenObservable.SubscriptionObserver<T>;
export type Subscription = ZenObservable.Subscription;
export type Observer<T> = ZenObservable.Observer<T>;
export type Subscriber<T> = ZenObservable.Subscriber<T>;
export type ObservableLike<T> = ZenObservable.ObservableLike<T>;
