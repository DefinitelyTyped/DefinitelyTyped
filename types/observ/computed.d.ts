import { ObservableValue } from "./";

type ValueOfObservable<T> = T extends ObservableValue<infer U> ? U : never;

declare function computed<O1 extends ObservableValue<any>, R>(
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    observables: [O1],
    compute: (observable1: ValueOfObservable<O1>) => R,
): ObservableValue<R>;

declare function computed<O1 extends ObservableValue<any>, O2 extends ObservableValue<any>, R>(
    observables: [O1, O2],
    compute: (observable1: ValueOfObservable<O1>, observable2: ValueOfObservable<O2>) => R,
): ObservableValue<R>;

declare function computed<
    O1 extends ObservableValue<any>,
    O2 extends ObservableValue<any>,
    O3 extends ObservableValue<any>,
    R,
>(
    observables: [O1, O2, O3],
    compute: (
        observable1: ValueOfObservable<O1>,
        observable2: ValueOfObservable<O2>,
        observable3: ValueOfObservable<O3>,
    ) => R,
): ObservableValue<R>;

declare function computed<
    O1 extends ObservableValue<any>,
    O2 extends ObservableValue<any>,
    O3 extends ObservableValue<any>,
    O4 extends ObservableValue<any>,
    R,
>(
    observables: [O1, O2, O3, O4],
    compute: (
        observable1: ValueOfObservable<O1>,
        observable2: ValueOfObservable<O2>,
        observable3: ValueOfObservable<O3>,
        observable4: ValueOfObservable<O4>,
    ) => R,
): ObservableValue<R>;

declare function computed<
    O1 extends ObservableValue<any>,
    O2 extends ObservableValue<any>,
    O3 extends ObservableValue<any>,
    O4 extends ObservableValue<any>,
    O5 extends ObservableValue<any>,
    R,
>(
    observables: [O1, O2, O3, O4, O5],
    compute: (
        observable1: ValueOfObservable<O1>,
        observable2: ValueOfObservable<O2>,
        observable3: ValueOfObservable<O3>,
        observable4: ValueOfObservable<O4>,
        observable5: ValueOfObservable<O5>,
    ) => R,
): ObservableValue<R>;

export = computed;
