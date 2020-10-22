declare function CreateIterResultObject<T>(value: T, done: true): IteratorReturnResult<T>;
declare function CreateIterResultObject<T>(value: T, done: false): IteratorYieldResult<T>;
declare function CreateIterResultObject<T>(value: T, done: boolean): IteratorResult<T, T>;
export = CreateIterResultObject;
