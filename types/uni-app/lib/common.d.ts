type AnyObject = Record<string, any>;

type KVInfer<T> = { [K in keyof T]: T[K] };

type Void<T> = T | undefined | null;
