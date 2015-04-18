/// <reference path="interfaces.d.ts" />

declare enum TypeBindingScopeEnum {
    Transient = 0,
    Singleton = 1,
}

declare class TypeBinding<TServiceType> implements TypeBindingInterface<TServiceType> {
    runtimeIdentifier: string;
    implementationType: {
        new (): TServiceType;
    };
    cache: TServiceType;
    scope: TypeBindingScopeEnum;
    constructor(runtimeIdentifier: string, implementationType: {
        new (...args: any[]): TServiceType;
    }, scopeType?: TypeBindingScopeEnum);
}

declare class Kernel implements KernelInterface {
    private _bindings;
    bind(typeBinding: TypeBindingInterface<any>): void;
    unbind(runtimeIdentifier: string): void;
    unbindAll(): void;
    resolve<TImplementationType>(runtimeIdentifier: string): TImplementationType;
    private _validateBinding(typeBinding);
    private _getConstructorArguments(func);
    private _injectDependencies<TImplementationType>(func);
    private _construct<TImplementationType>(constr, args);
    constructor();
}

declare var inversify: {
    Kernel: typeof Kernel;
    TypeBindingScopeEnum: typeof TypeBindingScopeEnum;
    TypeBinding: typeof TypeBinding;
};
