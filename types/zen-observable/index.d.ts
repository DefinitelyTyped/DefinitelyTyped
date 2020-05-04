// Type definitions for zen-observable 0.8
// Project: https://github.com/zenparsing/zen-observable
// Definitions by: Kombu <https://github.com/aicest>
//                 JounQin <https://github.com/JounQin>
//                 Thomas <https://github.com/itomtom>
//                 BenoitZugmeyer <https://github.com/BenoitZugmeyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as esm from './esm';

declare global {
    namespace ZenObservable {
        type SubscriptionObserver<T> = esm.SubscriptionObserver<T>;
        type Subscription = esm.Subscription;
        type Observer<T> = esm.Observer<T>;
        type Subscriber<T> = esm.Subscriber<T>;
        type ObservableLike<T> = esm.ObservableLike<T>;
    }
}

declare class Observable<T> extends esm.Observable<T> {}

declare namespace Observable {}

export = Observable;
