interface Reflect<T> {
    ownKeys<T extends object>(target: T): Array<keyof T>;
}
