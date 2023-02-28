import Owner from '@ember/owner';
import Mixin from '@ember/object/mixin';

/**
 * RegistryProxyMixin is used to provide public access to specific
 * registry functionality.
 */
interface RegistryProxyMixin extends Owner {
    /**
     * Given a fullName return the corresponding factory.
     */
    resolveRegistration(fullName: string): unknown;
    /**
     * Unregister a factory.
     */
    unregister(fullName: string): unknown;
    /**
     * Check if a factory is registered.
     */
    hasRegistration(fullName: string): boolean;
    /**
     * Register an option for a particular factory.
     */
    registerOption(fullName: string, optionName: string, options: {}): unknown;
    /**
     * Return a specific registered option for a particular factory.
     */
    registeredOption(fullName: string, optionName: string): {};
    /**
     * Register options for a particular factory.
     */
    registerOptions(fullName: string, options: {}): unknown;
    /**
     * Return registered options for a particular factory.
     */
    registeredOptions(fullName: string): {};
    /**
     * Allow registering options for all factories of a type.
     */
    registerOptionsForType(type: string, options: {}): unknown;
    /**
     * Return the registered options for all factories of a type.
     */
    registeredOptionsForType(type: string): {};
    /**
     * Define a dependency injection onto a specific factory or all factories
     * of a type.
     */
    inject(factoryNameOrType: string, property: string, injectionName: string): unknown;
}
declare const RegistryProxyMixin: Mixin<RegistryProxyMixin>;
export default RegistryProxyMixin;
