// Type definitions for inversify 2.0.0-rc.12
// Project: https://github.com/inversify/InversifyJS
// Definitions by: inversify <https://github.com/inversify>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird-2.0.d.ts" />

interface Symbol {
    toString(): string;
    valueOf(): Object;
}

interface SymbolConstructor {
    (description?: string|number): Symbol;
}

declare var Symbol: SymbolConstructor;

declare namespace inversify {

    namespace interfaces {

        export interface KernelConstructor {
            new(): Kernel;
        }

        export interface KernelModuleConstructor {
            new(registry: (bind: Bind) => void): KernelModule;
        }

        export interface Newable<T> {
            new(...args: any[]): T;
        }

        export type ServiceIdentifier<T> = (string|Symbol|Newable<T>);

        export interface Binding<T> extends Clonable<Binding<T>> {
            guid: string;
            moduleId: string;
            activated: boolean;
            serviceIdentifier: ServiceIdentifier<T>;
            implementationType: Newable<T>;
            factory: FactoryCreator<any>;
            provider: ProviderCreator<any>;
            constraint: (request: Request) => boolean;
            onActivation: (context: Context, injectable: T) => T;
            cache: T;
            dynamicValue: (context: Context) => T;
            scope: number; // BindingScope
            type: number; // BindingType
        }

        export interface Factory<T> extends Function {
            (...args: any[]): (((...args: any[]) => T)|T);
        }

        export interface FactoryCreator<T> extends Function {
            (context: Context): Factory<T>;
        }

        export interface Provider<T> extends Function {
            (): Promise<T>;
        }

        export interface ProviderCreator<T> extends Function {
            (context: Context): Provider<T>;
        }

        export interface PlanAndResolve<T> {
            (args: PlanAndResolveArgs): T[];
        }

        export interface PlanAndResolveArgs {
            multiInject: boolean;
            serviceIdentifier: ServiceIdentifier<any>;
            target: Target;
            contextInterceptor: (contexts: Context) => Context;
        }

        export interface Middleware extends Function {
            (next: PlanAndResolve<any>): PlanAndResolve<any>;
        }

        export interface Context {
            guid: string;
            kernel: Kernel;
            plan: Plan;
            addPlan(plan: Plan): void;
        }

        export interface ReflectResult {
            [key: string]: Metadata[];
        }

        export interface Metadata {
            key: string;
            value: any;
        }

        export interface Plan {
            parentContext: Context;
            rootRequest: Request;
        }

        export interface Planner {
            createContext(kernel: Kernel): Context;
            createPlan(parentContext: Context, binding: Binding<any>, target: Target): Plan;
            getBindings<T>(kernel: Kernel, serviceIdentifier: ServiceIdentifier<T>): Binding<T>[];
            getActiveBindings(parentRequest: Request, target: Target): Binding<any>[];
        }

        export interface QueryableString {
            startsWith(searchString: string): boolean;
            endsWith(searchString: string): boolean;
            contains(searchString: string): boolean;
            equals(compareString: string): boolean;
            value(): string;
        }

        export interface Request {
            guid: string;
            serviceIdentifier: ServiceIdentifier<any>;
            parentContext: Context;
            parentRequest: Request;
            childRequests: Request[];
            target: Target;
            bindings: Binding<any>[];
            addChildRequest(
                serviceIdentifier: ServiceIdentifier<any>,
                bindings: (Binding<any>|Binding<any>[]),
                target: Target
            ): Request;
        }

        export interface Target {
            guid: string;
            serviceIdentifier: ServiceIdentifier<any>;
            type: number; // TargetType
            name: QueryableString;
            metadata: Array<Metadata>;
            hasTag(key: string): boolean;
            isArray(): boolean;
            matchesArray(name: string|Symbol|Newable<any>): boolean;
            isNamed(): boolean;
            isTagged(): boolean;
            matchesNamedTag(name: string): boolean;
            matchesTag(key: string): (value: any) => boolean;
        }

        export interface Resolver {
            resolve<T>(context: Context): T;
        }

        export interface Kernel {
            guid: string;
            parent: Kernel;
            bind<T>(serviceIdentifier: ServiceIdentifier<T>): BindingToSyntax<T>;
            unbind(serviceIdentifier: ServiceIdentifier<any>): void;
            unbindAll(): void;
            isBound(serviceIdentifier: ServiceIdentifier<any>): boolean;
            get<T>(serviceIdentifier: ServiceIdentifier<T>): T;
            getNamed<T>(serviceIdentifier: ServiceIdentifier<T>, named: string): T;
            getTagged<T>(serviceIdentifier: ServiceIdentifier<T>, key: string, value: any): T;
            getAll<T>(serviceIdentifier: ServiceIdentifier<T>): T[];
            getAllNamed<T>(serviceIdentifier: ServiceIdentifier<T>, named: string): T[];
            getAllTagged<T>(serviceIdentifier: ServiceIdentifier<T>, key: string, value: any): T[];
            load(...modules: KernelModule[]): void;
            unload(...modules: KernelModule[]): void;
            applyMiddleware(...middleware: Middleware[]): void;
            getServiceIdentifierAsString(serviceIdentifier: ServiceIdentifier<any>): string;
            snapshot(): void;
            restore(): void;
        }

        export interface Bind extends Function {
            <T>(serviceIdentifier: ServiceIdentifier<T>): BindingToSyntax<T>;
        }

        export interface KernelModule {
            guid: string;
            registry: (bind: Bind) => void;
        }

        export interface KernelSnapshot {
            bindings: Lookup<Binding<any>>;
            middleware: PlanAndResolve<any>;
        }

        export interface Clonable<T> {
            clone(): T;
        }

        export interface Lookup<T> extends Clonable<Lookup<T>> {
            add(serviceIdentifier: ServiceIdentifier<any>, value: T): void;
            get(serviceIdentifier: ServiceIdentifier<any>): Array<T>;
            remove(serviceIdentifier: ServiceIdentifier<any>): void;
            removeByModuleId(moduleId: string): void;
            hasKey(serviceIdentifier: ServiceIdentifier<any>): boolean;
        }

        export interface KeyValuePair<T> {
            serviceIdentifier: ServiceIdentifier<any>;
            value: Array<T>;
            guid: string;
        }

        export interface BindingInSyntax<T> {
            inSingletonScope(): BindingWhenOnSyntax<T>;
            inTransientScope(): BindingWhenOnSyntax<T>;
        }

        export interface BindingInWhenOnSyntax<T> extends BindingInSyntax<T>, BindingWhenOnSyntax<T> {}

        export interface BindingOnSyntax<T> {
            onActivation(fn: (context: Context, injectable: T) => T): BindingWhenSyntax<T>;
        }

        export interface BindingToSyntax<T> {
            to(constructor: { new(...args: any[]): T; }): BindingInWhenOnSyntax<T>;
            toSelf(): BindingInWhenOnSyntax<T>;
            toConstantValue(value: T): BindingWhenOnSyntax<T>;
            toDynamicValue(func: (context: Context) => T): BindingWhenOnSyntax<T>;
            toConstructor<T2>(constructor: Newable<T2>): BindingWhenOnSyntax<T>;
            toFactory<T2>(factory: FactoryCreator<T2>): BindingWhenOnSyntax<T>;
            toFunction(func: T): BindingWhenOnSyntax<T>;
            toAutoFactory<T2>(serviceIdentifier: ServiceIdentifier<T2>): BindingWhenOnSyntax<T>;
            toProvider<T2>(provider: ProviderCreator<T2>): BindingWhenOnSyntax<T>;
        }

        export interface BindingWhenOnSyntax<T> extends BindingWhenSyntax<T>, BindingOnSyntax<T> {}

        export interface BindingWhenSyntax<T> {
            when(constraint: (request: Request) => boolean): BindingOnSyntax<T>;
            whenTargetNamed(name: string): BindingOnSyntax<T>;
            whenTargetTagged(tag: string, value: any): BindingOnSyntax<T>;
            whenInjectedInto(parent: (Function|string)): BindingOnSyntax<T>;
            whenParentNamed(name: string): BindingOnSyntax<T>;
            whenParentTagged(tag: string, value: any): BindingOnSyntax<T>;
            whenAnyAncestorIs(ancestor: (Function|string)): BindingOnSyntax<T>;
            whenNoAncestorIs(ancestor: (Function|string)): BindingOnSyntax<T>;
            whenAnyAncestorNamed(name: string): BindingOnSyntax<T>;
            whenAnyAncestorTagged(tag: string, value: any): BindingOnSyntax<T>;
            whenNoAncestorNamed(name: string): BindingOnSyntax<T>;
            whenNoAncestorTagged(tag: string, value: any): BindingOnSyntax<T>;
            whenAnyAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>;
            whenNoAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>;
        }

    }

    export var Kernel: interfaces.KernelConstructor;
    export var KernelModule: interfaces.KernelModuleConstructor;
    export var decorate: (decorator: (ClassDecorator|ParameterDecorator), target: any, parameterIndex?: number) => void;
    export function injectable(): (typeConstructor: any) => void;
    export function tagged(metadataKey: string, metadataValue: any): (target: any, targetKey: string, index?: number) => any;
    export function named(name: string): (target: any, targetKey: string, index?: number) => any;
    export function targetName(name: string): (target: any, targetKey: string, index: number) => any;
    export function unmanaged(): (target: any, targetKey: string, index: number) => any;
    export function inject(serviceIdentifier: interfaces.ServiceIdentifier<any>): (target: any, targetKey: string, index?: number) => any;
    export function guid(): string;

    export function multiInject(
        serviceIdentifier: interfaces.ServiceIdentifier<any>
    ): (target: any, targetKey: string, index?: number) => any;

    // constraint helpers
    export var traverseAncerstors: (request: interfaces.Request, constraint: (request: interfaces.Request) => boolean) => boolean;
    export var taggedConstraint: (tag: string) => (value: any) => (request: interfaces.Request) => boolean;
    export var namedConstraint: (value: any) => (request: interfaces.Request) => boolean;
    export var typeConstraint: (type: (Function|string)) => (request: interfaces.Request) => boolean;
}

declare module "inversify" {
  export = inversify;
}
