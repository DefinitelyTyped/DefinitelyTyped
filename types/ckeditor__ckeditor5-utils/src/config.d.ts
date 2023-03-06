import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';

/**
 * Handles a configuration dictionary.
 */
export default class Config<T extends Record<string, any> = Partial<EditorConfig>> {
    /**
     * Creates an instance of the Config class.
     */
    constructor(configurations?: T, defaultConfigurations?: T);
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
     */
    set<K extends keyof T>(name: K, value: T[K]): void;
    set(name: string, value: any): void;
    set<K extends keyof T>(values: Record<K, T[K]>): void;
    set(values: Record<string, any>): void;
    /**
     * Does exactly the same as {@link #set} with one exception – passed configuration extends
     * existing one, but does not overwrite already defined values.
     *
     * This method is supposed to be called by plugin developers to setup plugin's configurations. It would be
     * rarely used for other needs.
     */
    define<K extends keyof T>(name: K, value: T[K]): void;
    define(name: string, value: any): void;
    define<K extends keyof T>(values: Record<K, T[K]>): void;
    define(values: Record<string, any>): void;
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
    get<K extends keyof T>(name: K): T[K];
    get(name: string): any;
    /**
     * Iterates over all top level configuration names.
     *
     */
    names(): Iterable<keyof T>;
}
