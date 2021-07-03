import Mixin from '@ember/object/mixin';

/**
 * RegistryProxyMixin is used to provide public access to specific
 * registry functionality.
 */
interface RegistryProxyMixin {
    /**
     * Given a fullName return the corresponding factory.
     */
    resolveRegistration(fullName: string): any;
    /**
     * Registers a factory or value that can be used for dependency injection (with
     * `inject`) or for service lookup. Each factory is registered with
     * a full name including two parts: `type:name`.
     */
    register(fullName: string, factory: any, options?: { singleton?: boolean; instantiate?: boolean }): any;
    /**
     * Unregister a factory.
     */
    unregister(fullName: string): any;
    /**
     * Check if a factory is registered.
     */
    hasRegistration(fullName: string): boolean;
    /**
     * Register an option for a particular factory.
     */
    registerOption(fullName: string, optionName: string, options: {}): any;
    /**
     * Return a specific registered option for a particular factory.
     */
    registeredOption(fullName: string, optionName: string): {};
    /**
     * Register options for a particular factory.
     */
    registerOptions(fullName: string, options: {}): any;
    /**
     * Return registered options for a particular factory.
     */
    registeredOptions(fullName: string): {};
    /**
     * Allow registering options for all factories of a type.
     */
    registerOptionsForType(type: string, options: {}): any;
    /**
     * Return the registered options for all factories of a type.
     */
    registeredOptionsForType(type: string): {};
    /**
     * Define a dependency injection onto a specific factory or all factories
     * of a type.
     */
    inject(factoryNameOrType: string, property: string, injectionName: string): any;
}
declare const RegistryProxyMixin: Mixin<RegistryProxyMixin>;
export default RegistryProxyMixin;
