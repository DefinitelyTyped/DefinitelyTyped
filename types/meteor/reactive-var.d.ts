declare module "meteor/reactive-var" {
    var ReactiveVar: ReactiveVarStatic;
    interface ReactiveVarStatic {
        new <T>(initialValue: T, equalsFunc?: (oldValue: T, newValue: T) => boolean): ReactiveVar<T>;
    }
    interface ReactiveVar<T> {
        get(): T;
        set(newValue: T): void;
    }
}
