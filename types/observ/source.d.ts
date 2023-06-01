import { ObservableValue } from './';

declare function GeneratorSource<T, I>(generator: (setter: (value: I) => void) => void, initial: I): ObservableValue<I>;

export = GeneratorSource;
