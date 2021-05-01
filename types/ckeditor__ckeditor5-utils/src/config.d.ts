/**
 * Handles a configuration dictionary.
 */
export default class Config {
    /**
     * Creates an instance of the Config class.
     */
    constructor(configurations?: object, defaultConfigurations?: object);
    /**
     * Set configuration values.
     *
     * It accepts both a name/value pair or an object, which properties and values will be used to set
     * configurations.
     *
     * It also accepts setting a "deep configuration" by using in the name. For example, `'resize.width'` sets
     * the value for the `width` configuration in the `resize` subset.
     *
     *  config.set( 'width', 500 );
     *  config.set( 'toolbar.collapsed', true );
     *
     *  // Equivalent to:
     *  config.set( {
     *   width: 500
     *   toolbar: {
     *    collapsed: true
     *   }
     *  } );
     *
     * Passing an object as the value will amend the configuration, not replace it.
     *
     *  config.set( 'toolbar', {
     *   collapsed: true,
     *  } );
     *
     *  config.set( 'toolbar', {
     *   color: 'red',
     *  } );
     *
     *  config.get( 'toolbar.collapsed' ); // true
     *  config.get( 'toolbar.color' ); // 'red'
     *
     * configuration entries. Configuration names are case-sensitive.
     */
    set(name: string, value: any): void;
    set(values: object): void;
    /**
     * Does exactly the same as {@link #set} with one exception – passed configuration extends
     * existing one, but does not overwrite already defined values.
     *
     * This method is supposed to be called by plugin developers to setup plugin's configurations. It would be
     * rarely used for other needs.
     *
     * configuration entries. Configuration names are case-sensitive.
     */
    define(name: string, value: any): void;
    define(values: object): void;
    /**
     * Gets the value for a configuration entry.
     *
     *  config.get( 'name' );
     *
     * Deep configurations can be retrieved by separating each part with a dot.
     *
     *  config.get( 'toolbar.collapsed' );
     *
     */
    get(name: string): any;
    /**
     * Iterates over all top level configuration names.
     *
     */
    names(): Iterable<string>;
}
