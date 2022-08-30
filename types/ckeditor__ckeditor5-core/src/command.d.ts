import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import Editor from './editor/editor';

// tslint:disable-next-line:no-empty-interface
export default interface Command extends Observable {}

/**
 * The base class for CKEditor commands.
 *
 * Commands are the main way to manipulate editor contents and state. They are mostly used by UI elements (or by other
 * commands) to make changes in the model. Commands are available in every part of code that has access to
 * the {@link module:core/editor/editor~Editor editor} instance.
 *
 * Instances of registered commands can be retrieved from {@link module:core/editor/editor~Editor#commands `editor.commands`}.
 * The easiest way to execute a command is through {@link module:core/editor/editor~Editor#execute `editor.execute()`}.
 *
 * By default, commands are disabled when the editor is in {@link module:core/editor/editor~Editor#isReadOnly read-only} mode
 * but commands with the {@link module:core/command~Command#affectsData `affectsData`} flag set to `false` will not be disabled.
 */
export default class Command implements Observable {
    /**
     * Creates a new `Command` instance.
     */
    constructor(editor: Editor);

    /**
     * The editor on which this command will be used.
     */
    readonly editor: Editor;

    /**
     * The value of the command. A concrete command class should define what it represents for it.
     *
     * For example, the `'bold'` command's value indicates whether the selection starts in a bolded text.
     * And the value of the `'link'` command may be an object with links details.
     *
     * It is possible for a command to have no value (e.g. for stateless actions such as `'uploadImage'`).
     *
     * A concrete command class should control this value by overriding the {@link #refresh `refresh()`} method.
     */
    get value(): unknown;
    protected set value(val: unknown);

    /**
     * Flag indicating whether a command is enabled or disabled.
     * A disabled command will do nothing when executed.
     *
     * A concrete command class should control this value by overriding the {@link #refresh `refresh()`} method.
     *
     * It is possible to disable a command from "outside". For instance, in your integration you may want to disable
     * a certain set of commands for the time being. To do that, you can use the fact that `isEnabled` is observable
     * and it fires the `set:isEnabled` event every time anyone tries to modify its value:
     *
     *    function disableCommand( cmd ) {
     *      cmd.on( 'set:isEnabled', forceDisable, { priority: 'highest' } );
     *
     *      cmd.isEnabled = false;
     *
     *      // Make it possible to enable the command again.
     *      return () => {
     *        cmd.off( 'set:isEnabled', forceDisable );
     *        cmd.refresh();
     *      };
     *
     *      function forceDisable( evt ) {
     *        evt.return = false;
     *        evt.stop();
     *      }
     *    }
     *
     *    // Usage:
     *
     *    // Disabling the command.
     *    const enableBold = disableCommand( editor.commands.get( 'bold' ) );
     *
     *    // Enabling the command again.
     *    enableBold();
     */
    get isEnabled(): boolean;
    protected set isEnabled(value: boolean);

    /**
     * A flag indicating whether a command execution changes the editor data or not.
     *
     * Commands with `affectsData` set to `false` will not be automatically disabled in
     * the {@link module:core/editor/editor~Editor#isReadOnly read-only mode} and
     * {@glink features/read-only#related-features other editor modes} with restricted user write permissions.
     *
     * **Note:** You do not have to set it for your every command. It is `true` by default.
     */
    readonly affectsData: boolean;

    /**
     * Refreshes the command. The command should update its {@link #isEnabled} and {@link #value} properties
     * in this method.
     *
     * This method is automatically called when
     * {@link module:engine/model/document~Document#event:change any changes are applied to the document}.
     */
    refresh(): void;

    /**
     * Disables the command.
     *
     * Command may be disabled by multiple features or algorithms (at once). When disabling a command, unique id should be passed
     * (e.g. feature name). The same identifier should be used when {@link #clearForceDisabled enabling back} the command.
     * The command becomes enabled only after all features {@link #clearForceDisabled enabled it back}.
     *
     * Disabling and enabling a command:
     *
     *    command.isEnabled; // -> true
     *    command.forceDisabled( 'MyFeature' );
     *    command.isEnabled; // -> false
     *    command.clearForceDisabled( 'MyFeature' );
     *    command.isEnabled; // -> true
     *
     * Command disabled by multiple features:
     *
     *    command.forceDisabled( 'MyFeature' );
     *    command.forceDisabled( 'OtherFeature' );
     *    command.clearForceDisabled( 'MyFeature' );
     *    command.isEnabled; // -> false
     *    command.clearForceDisabled( 'OtherFeature' );
     *    command.isEnabled; // -> true
     *
     * Multiple disabling with the same identifier is redundant:
     *
     *    command.forceDisabled( 'MyFeature' );
     *    command.forceDisabled( 'MyFeature' );
     *    command.clearForceDisabled( 'MyFeature' );
     *    command.isEnabled; // -> true
     *
     * **Note:** some commands or algorithms may have more complex logic when it comes to enabling or disabling certain commands,
     * so the command might be still disabled after {@link #clearForceDisabled} was used.
     */
    forceDisabled(id: string): void;

    /**
     * Clears forced disable previously set through {@link #forceDisabled}. See {@link #forceDisabled}.
     */
    clearForceDisabled(id: string): void;

    /**
     * Executes the command.
     *
     * A command may accept parameters. They will be passed from {@link module:core/editor/editor~Editor#execute `editor.execute()`}
     * to the command.
     *
     * The `execute()` method will automatically abort when the command is disabled ({@link #isEnabled} is `false`).
     * This behavior is implemented by a high priority listener to the {@link #event:execute} event.
     *
     * In order to see how to disable a command from "outside" see the {@link #isEnabled} documentation.
     *
     * This method may return a value, which would be forwarded all the way down to the
     * {@link module:core/editor/editor~Editor#execute `editor.execute()`}.
     */
    execute(...options: unknown[]): void;

    /**
     * Destroys the command.
     */
    destroy(): void;
}
