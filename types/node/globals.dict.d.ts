declare namespace NodeJS {
    interface Dict<T> {
        [key: string]: T;
    }

    interface ReadOnlyDict<T> {
        readonly [key: string]: T;
    }
}
