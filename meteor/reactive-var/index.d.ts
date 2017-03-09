
export let ReactiveVar: ReactiveVarStatic;
export interface ReactiveVarStatic {
    new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
}
export interface ReactiveVar<T> {
    get(): T;
    set(newValue: T): void;
}
