/**
 * Provides the functionality to require components of the `webicon`-module.
 */
export interface Injector {
    /**
     * Requires a component of the `webicon`-module.
     */
    <T>(name: string, injector: Injector): T;

    /**
     * Checks whether a component with the specified `name` exists.
     *
     * @param name
     * The name of the component to check for existence.
     *
     * @return
     * A value indicating whether a component with the specified `name` exists.
     */
    has(name: string): boolean;
}
