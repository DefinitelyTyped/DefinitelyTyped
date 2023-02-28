import { Conversion, DataController, EditingController, Model } from '@ckeditor/ckeditor5-engine';
import Config from '@ckeditor/ckeditor5-utils/src/config';
import Locale from '@ckeditor/ckeditor5-utils/src/locale';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import CommandCollection from '../commandcollection';
import ContextPlugin from '../contextplugin';
import EditingKeystrokeHandler from '../editingkeystrokehandler';
import Plugin, { LoadedPlugins } from '../plugin';
import PluginCollection from '../plugincollection';
import { EditorConfig } from './editorconfig';

// tslint:disable-next-line:no-empty-interface
export default interface Editor extends Observable {}

export default abstract class Editor implements Observable {
    /**
     * Creates a new instance of the editor class.
     *
     * Usually, not to be used directly. See the static {@link module:core/editor/editor~Editor.create `create()`} method.
     */
    constructor(config?: EditorConfig);

    /**
     * Stores all configurations specific to this editor instance.
     *
     *    editor.config.get( 'image.toolbar' );
     *    // -> [ 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative' ]
     */
    readonly config: Config;

    /**
     * The plugins loaded and in use by this editor instance.
     *
     *    editor.plugins.get( 'ClipboardPipeline' ); // -> An instance of the clipboard pipeline plugin.
     */
    readonly plugins: PluginCollection;

    /**
     * The locale instance.
     */
    readonly locale: Locale;

    /**
     * Shorthand for {@link module:utils/locale~Locale#t}.
     */
    t: Locale['t'];

    /**
     * Commands registered to the editor.
     *
     * Use the shorthand {@link #execute `editor.execute()`} method to execute commands:
     *
     *    // Execute the bold command:
     *    editor.execute( 'bold' );
     *
     *    // Check the state of the bold command:
     *    editor.commands.get( 'bold' ).value;
     */
    readonly commands: CommandCollection;

    /**
     * Indicates the editor life-cycle state.
     *
     * The editor is in one of the following states:
     *
     * * `initializing` &ndash; During the editor initialization (before
     * {@link module:core/editor/editor~Editor.create `Editor.create()`}) finished its job.
     * * `ready` &ndash; After the promise returned by the {@link module:core/editor/editor~Editor.create `Editor.create()`}
     * method is resolved.
     * * `destroyed` &ndash; Once the {@link #destroy `editor.destroy()`} method was called.
     */
    get state(): 'initializing' | 'ready' | 'destroyed';
    protected set state(value: 'initializing' | 'ready' | 'destroyed');

    /**
     * Defines whether this editor is in read-only mode.
     *
     * In read-only mode the editor {@link #commands commands} are disabled so it is not possible
     * to modify the document by using them. Also, the editable element(s) become non-editable.
     *
     * In order to make the editor read-only, you can set this value directly:
     *
     *    editor.isReadOnly = true;
     */
    get isReadOnly(): boolean;
    protected set isReadOnly(value: boolean);

    /**
     * The editor's model.
     *
     * The central point of the editor's abstract data model.
     */
    readonly model: Model;

    /**
     * The {@link module:engine/controller/datacontroller~DataController data controller}.
     * Used e.g. for setting and retrieving the editor data.
     */
    readonly data: DataController;

    /**
     * The {@link module:engine/controller/editingcontroller~EditingController editing controller}.
     * Controls user input and rendering the content for editing.
     */
    readonly editing: EditingController;

    /**
     * Conversion manager through which you can register model-to-view and view-to-model converters.
     *
     * See the {@link module:engine/conversion/conversion~Conversion} documentation to learn how to add converters.
     */
    readonly conversion: Conversion;

    /**
     * An instance of the {@link module:core/editingkeystrokehandler~EditingKeystrokeHandler}.
     *
     * It allows setting simple keystrokes:
     *
     *    // Execute the bold command on Ctrl+E:
     *    editor.keystrokes.set( 'Ctrl+E', 'bold' );
     *
     *    // Execute your own callback:
     *    editor.keystrokes.set( 'Ctrl+E', ( data, cancel ) => {
     *      console.log( data.keyCode );
     *
     *      // Prevent the default (native) action and stop the underlying keydown event
     *      // so no other editor feature will interfere.
     *      cancel();
     *    } );
     *
     * Note: Certain typing-oriented keystrokes (like <kbd>Backspace</kbd> or <kbd>Enter</kbd>) are handled
     * by a low-level mechanism and trying to listen to them via the keystroke handler will not work reliably.
     * To handle these specific keystrokes, see the events fired by the
     * {@link module:engine/view/document~Document editing view document} (`editor.editing.view.document`).
     */
    readonly keystrokes: EditingKeystrokeHandler;

    /**
     * Loads and initializes plugins specified in the configuration.
     */
    initPlugins(): Promise<LoadedPlugins>;

    /**
     * Destroys the editor instance, releasing all resources used by it.
     *
     * **Note** The editor cannot be destroyed during the initialization phase so if it is called
     * while the editor {@link #state is being initialized}, it will wait for the editor initialization before destroying it.
     */
    destroy(): Promise<void>;

    /**
     * Executes the specified command with given parameters.
     *
     * Shorthand for:
     *
     *    editor.commands.get( commandName ).execute( ... );
     */
    execute(commandName: string, ...args: unknown[]): any;

    /**
     * Focuses the editor.
     *
     * **Note** To explicitly focus the editing area of the editor, use the
     * {@link module:engine/view/view~View#focus `editor.editing.view.focus()`} method of the editing view.
     *
     * Check out the {@glink framework/guides/deep-dive/ui/focus-tracking#focus-in-the-editor-ui Focus in the editor UI} section
     * of the {@glink framework/guides/deep-dive/ui/focus-tracking Deep dive into focus tracking} guide to learn more.
     */
    focus(): void;

    static create(sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<Editor>;
    static builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
    static defaultConfig?: EditorConfig | undefined;
}
