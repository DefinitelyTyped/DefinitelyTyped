declare var ReactiveVar: ReactiveVarStatic;
interface ReactiveVarStatic {
    new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
}
interface ReactiveVar<T> {
    get(): T;
    set(newValue: T): void;
}

declare module "meteor/reactive-var" {
    var ReactiveVar: ReactiveVarStatic;
    interface ReactiveVarStatic {
        new <T>(initialValue: T, equalsFunc?: Function): ReactiveVar<T>;
    }
    interface ReactiveVar<T> {
        get(): T;
        set(newValue: T): void;
    }
}
