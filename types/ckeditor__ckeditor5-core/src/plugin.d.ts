import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import ContextPlugin from './contextplugin';
import Editor from './editor/editor';
import { EditorWithUI } from './editor/editorwithui';

// tslint:disable-next-line:no-empty-interface
export default interface Plugin extends Observable {}

/**
 * The base class for CKEditor plugin classes.
 */
export default class Plugin implements Observable {
    constructor(editor: Editor);
    /**
     * The editor instance.
     *
     * Note that most editors implement the {@link module:core/editor/editorwithui~EditorWithUI} interface in addition
     * to the base {@link module:core/editor/editor~Editor} interface. However, editors with an external UI
     * (i.e. Bootstrap-based) or a headless editor may not implement the {@link module:core/editor/editorwithui~EditorWithUI}
     * interface.
     *
     * Because of above, to make plugins more universal, it is recommended to split features into:
     *  - The "editing" part that only uses the {@link module:core/editor/editor~Editor} interface.
     *  - The "UI" part that uses both the {@link module:core/editor/editor~Editor} interface and
     *  the {@link module:core/editor/editorwithui~EditorWithUI} interface.
     */
    readonly editor: Editor | EditorWithUI;
    /**
     * Flag indicating whether a plugin is enabled or disabled.
     * A disabled plugin will not transform text.
     *
     * Plugin can be simply disabled like that:
     *
     *    // Disable the plugin so that no toolbars are visible.
     *    editor.plugins.get( 'TextTransformation' ).isEnabled = false;
     *
     * You can also use {@link #forceDisabled} method.
     */
    isEnabled: boolean;
    /**
     * Disables the plugin.
     *
     * Plugin may be disabled by multiple features or algorithms (at once). When disabling a plugin, unique id should be passed
     * (e.g. feature name). The same identifier should be used when {@link #clearForceDisabled enabling back} the plugin.
     * The plugin becomes enabled only after all features {@link #clearForceDisabled enabled it back}.
     *
     * Disabling and enabling a plugin:
     *
     *    plugin.isEnabled; // -> true
     *    plugin.forceDisabled( 'MyFeature' );
     *    plugin.isEnabled; // -> false
     *    plugin.clearForceDisabled( 'MyFeature' );
     *    plugin.isEnabled; // -> true
     *
     * Plugin disabled by multiple features:
     *
     *    plugin.forceDisabled( 'MyFeature' );
     *    plugin.forceDisabled( 'OtherFeature' );
     *    plugin.clearForceDisabled( 'MyFeature' );
     *    plugin.isEnabled; // -> false
     *    plugin.clearForceDisabled( 'OtherFeature' );
     *    plugin.isEnabled; // -> true
     *
     * Multiple disabling with the same identifier is redundant:
     *
     *    plugin.forceDisabled( 'MyFeature' );
     *    plugin.forceDisabled( 'MyFeature' );
     *    plugin.clearForceDisabled( 'MyFeature' );
     *    plugin.isEnabled; // -> true
     *
     * **Note:** some plugins or algorithms may have more complex logic when it comes to enabling or disabling certain plugins,
     * so the plugin might be still disabled after {@link #clearForceDisabled} was used.
     */
    forceDisabled(id: string): void;
    /**
     * Clears forced disable previously set through {@link #forceDisabled}. See {@link #forceDisabled}.
     */
    clearForceDisabled(id: string): void;
    /**
     * Destroys the plugin.
     *
     * **Note:** This method is optional. A plugin instance does not need to have it defined.
     */
    destroy(): void;
    /**
     * A flag which defines if a plugin is allowed or not allowed to be used directly by a {@link module:core/context~Context}.
     */
    static readonly isContextPlugin: false;
    /**
     * An array of plugins required by this plugin.
     *
     * To keep the plugin class definition tight it is recommended to define this property as a static getter:
     *
     *    import Image from './image.js';
     *
     *    export default class ImageCaption {
     *      static get requires() {
     *        return [ Image ];
     *      }
     *    }
     */
    static readonly requires?: Array<typeof Plugin | typeof ContextPlugin | string> | undefined;
    /**
     * An optional name of the plugin. If set, the plugin will be available in
     * {@link module:core/plugincollection~PluginCollection#get} by its
     * name and its constructor. If not, then only by its constructor.
     *
     * The name should reflect the constructor name.
     *
     * To keep the plugin class definition tight, it is recommended to define this property as a static getter:
     *
     *    export default class ImageCaption {
     *      static get pluginName() {
     *        return 'ImageCaption';
     *      }
     *    }
     *
     * Note: The native `Function.name` property could not be used to keep the plugin name because
     * it will be mangled during code minification.
     *
     * Naming a plugin is necessary to enable removing it through the
     * {@link module:core/editor/editorconfig~EditorConfig#removePlugins `config.removePlugins`} option.
     */
    static readonly pluginName?: string | undefined;
    /**
     * The second stage (after plugin {@link #constructor}) of the plugin initialization.
     * Unlike the plugin constructor this method can be asynchronous.
     *
     * A plugin's `init()` method is called after its {@link module:core/plugin~PluginInterface.requires dependencies} are initialized,
     * so in the same order as the constructors of these plugins.
     *
     * **Note:** This method is optional. A plugin instance does not need to have it defined.
     */
    init?(): void | Promise<void>;
    /**
     * The third (and last) stage of the plugin initialization. See also {@link #constructor} and {@link #init}.
     *
     * **Note:** This method is optional. A plugin instance does not need to have it defined.
     */
    afterInit?(): Promise<void> | void;
}

// Beware that this defines a class constructor, not the class instance.
export interface PluginInterface<T = Plugin> {
    new (editor: Editor): T;
    init?(): Promise<void> | void;
    afterInit?(): Promise<void> | void;
    destroy?(): Promise<void> | void;
}

export type LoadedPlugins = Array<typeof Plugin | typeof ContextPlugin>;
