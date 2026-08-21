interface IteratorResultObject<T> {
    value: T;
    done: boolean;
}

declare function CreateIteratorResultObject<T>(value: T, done: boolean): IteratorResultObject<T>;
export = CreateIteratorResultObject;
