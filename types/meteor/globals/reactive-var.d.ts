declare var ReactiveVar: ReactiveVarStatic;
declare interface ReactiveVarStatic {
    new <T>(initialValue: T, equalsFunc?: (oldValue: T, newValue: T) => boolean): ReactiveVar<T>;
}
declare interface ReactiveVar<T> {
    get(): T;
    set(newValue: T): void;
}
