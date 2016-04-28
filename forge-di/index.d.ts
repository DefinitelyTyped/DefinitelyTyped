// Type definitions for forge-di v0.9.5
// Project: https://github.com/nkohari/forge
// Definitions by: Adam Carr <https://github.com/adamcarr/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * Implementation of the forge dependency injection manager.
 */
declare class Forge {
    /**
     * Creates a new instance
     * @returns {Forge} a new instance.
     */
    new(): Forge;

    /**
     * The bindings mapped to this forge instance.
     */
    bindings: Forge.IBindingMap;

    /**
     * Creates a new binding.
     * @param {string} name The binding name.
     */
    bind(name: string): Forge.IBinding;
    /**
     * Unbinds then recreates a binding for this name.
     * @param {string} name The binding name.
     */
    rebind(name: string): Forge.IBinding;
    /**
     * Unbinds all bindings for this name. Returns the number of bindings removed.
     * @param {string} name The binding name.
     */
    unbind(name: string): number;
    /**
     * Get instance or instances of type registered under the provided name and optional hint.
     * @param {string} name The binding name.
     * @param {string} hint The binding hint.
     * @param {...args} args Additional args.
     */
    get<T>(name: string, hint?: string, ...args: any[]): T;
    /**
     * Get a single instance of type registered under the provided name and optional hint.
     * @param {string} name The binding name.
     * @param {string} hint The binding hint.
     * @param {...args} args Additional args.
     */
    getOne<T>(name: string, hint?: string, ...args: any[]): T;
    /**
     * Gets all instances of the type registered under the provided name.
     * @param {string} name The binding name.
     * @param {...args} args Additional args.
     */
    getAll<T>(name: string, ...args: any[]): T | T[];
    /**
     * Creates an instance of the target type attempting to resolve any dependencies.
     * @param {T} target The target type.
     * @param {...args} args Additional args.
     */
    create<T>(target: T, ...args: any[]): T;
    /**
     * Get all bindings registered under a binding name and optional hint.
     * @param {string} name The binding name.
     * @param {string} hint The binding hint.
     */
    getMatchingBindings(name: string, hint?: string): Forge.IBinding[];
    /**
     * Returns a string that represents all bindings within this forge instance.
     */
    inspect(): string;

    resolve<T>(name: string, context?: Forge.IContext, hint?: string, all?: boolean, ...args: any[]): T | T[];
    resolveBindings(context: Forge.IContext, bindings: Forge.IBinding[], hint: string, args: any[], unwrap: boolean): Forge.IBinding[];
}

declare namespace Forge {
    interface IContext {
        new (): IContext;
        bindings: IBinding[];
        has(binding: IBinding): boolean;
        push(binding: IBinding): void;
        pop(): IBinding;
        toString(indent: number): string;
    }

    interface IType {
        new (...args: any[]): any;
    }

    /**
     * Represents arguments to help with resolving a binding.
     */
    interface IBindingArguments {
        [name: string]: any;
    }

    /**
     * Represents a binding between a name, type/instance/function and optional hint.
     */
    interface IBinding {
        /** The forge that contains this binding. */
        forge: Forge;
        /** The binding name. */
        name: string;
        /** Alias mapping to this binding. */
        to: IBinding;
        /** Alias mapping to this binding. */
        as: IBinding;
        /** Whether or not this binding is currently resolving. */
        isResolving: boolean;
        /** The resolver for this binding. */
        resolver: IResolver;
        /** The lifecycle associated with this binding. Defaults to singleton. */
        lifecycle: ILifecycle;
        /** The predicate associated with this binding. Used to support hints. */
        predicate: IPredicate;
        /** The additional binding arguments to help resolve dependencies. */
        arguments: IBindingArguments;

        /**
         * Checks whether or not this binding matches the hint by executing the predicate.
         * @param {string} hint The hint to check against.
         */
        matches(hint: string): boolean;
        /**
         * Registers a type to a binding. This type must have a constructor.
         * @param {T} target The target type.
         */
        type<T extends IType>(target: T): IBinding;
        /**
         * Registers a type to a binding. This must be a callable function.
         * @param {T} target The target function.
         */
        function<T extends { (...args: any[]): any }>(target: T): IBinding;
        /**
         * Registeres an instance to a binding. This instance will always be returned.
         * @param {T} target The target instance.
         */
        instance<T extends Object>(target: T): IBinding;
        /**
         * Configures this binding lifecycle as a singleton. This is the default lifecycle.
         */
        singleton(): IBinding;
        /**
         * Configures this binding lifecycle as transient.
         * New instances will be created, if this is a type based binding, on each get.
         */
        transient(): IBinding;
        /**
         * Registers a predicate for this binding.
         * @param {IPredicate} predicate The predicate.
         */
        when(predicate: IPredicate): IBinding;
        /**
         * Registers a hint for this binding.
         * @param {string} hint The hint.
         */
        when(hint: string): IBinding;
        /**
         * Registers additional binding arguments to help with resolving.
         * @param {IBindingArguments} args The additional binding arguments.
         */
        with(args: IBindingArguments): IBinding;
        /**
         * Returns a string representing this binding.
         */
        toString(): string;
    }

    /** Represents a binding map. */
    interface IBindingMap {
        /** Gets a binding by name. */
        [name: string]: IBinding[];
    }

    /** Represents a predicate. */
    interface IPredicate {
        /**
         * Returns whether or not the hit satisfies this predicate.
         * @param {string} hint The hint to check against.
         */
        (hint: string): boolean;
    }

    /** Represents a resolver. */
    interface IResolver {
        /**
         * Resolves a specific type.
         */
        resolve<T>(): T;
    }

    /** Represents a binding lifecycle. */
    interface ILifecycle {
        /**
         * Returns the instance from a resolver based on the configured lifecycle.
         * @param {IResolver} resolver The type resolver.
         */
        getInstance<T>(resolver: IResolver): T;
    }
}

export = Forge;
