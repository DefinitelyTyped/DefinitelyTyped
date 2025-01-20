import { ObservableValue } from "./";

declare function GeneratorSource<T>(generator: (setter: (value: T) => void) => void, initial: T): ObservableValue<T>;

export = GeneratorSource;
