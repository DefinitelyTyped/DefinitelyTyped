declare var ReactiveVar: ReactiveVarStatic;
declare interface ReactiveVarStatic {
    new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
}
declare interface ReactiveVar<T> {
    get(): T;
    set(newValue: T): void;
}
