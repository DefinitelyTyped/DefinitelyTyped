import { ObservableValue } from "./";

type RemoveListener = () => void;
declare function watch<O extends ObservableValue<any>>(
    observable: O,
    listener: (value: O extends ObservableValue<infer V> ? V : never) => void,
): RemoveListener;

export = watch;
