declare module goog {
    function require(name: 'goog.ui.editor.ToolbarController'): typeof goog.ui.editor.ToolbarController;
}

declare module goog.ui.editor {

    /**
     * A class for managing the editor toolbar.  Acts as a bridge between
     * a {@link goog.editor.Field} and a {@link goog.ui.Toolbar}.
     *
     * The {@code toolbar} argument must be an instance of {@link goog.ui.Toolbar}
     * or a subclass.  This class doesn't care how the toolbar was created.  As
     * long as one or more controls hosted  in the toolbar have IDs that match
     * built-in {@link goog.editor.Command}s, they will function as expected.  It is
     * the caller's responsibility to ensure that the toolbar is already rendered
     * or that it decorates an existing element.
     *
     *
     * @param {!goog.editor.Field} field Editable field to be controlled by the
     *     toolbar.
     * @param {!goog.ui.Toolbar} toolbar Toolbar to control the editable field.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ToolbarController extends goog.events.EventTarget {
        constructor(field: goog.editor.Field, toolbar: goog.ui.Toolbar);
        
        /**
         * Returns the Closure component ID of the control that corresponds to the
         * given {@link goog.editor.Command} constant.
         * Subclasses may override this method if they want to use a custom mapping
         * scheme from commands to controls.
         * @param {string} command Editor command.
         * @return {string} Closure component ID of the corresponding toolbar
         *     control, if any.
         * @protected
         */
        getComponentId(command: string): string;
        
        /**
         * Returns the {@link goog.editor.Command} constant
         * that corresponds to the given Closure component ID.  Subclasses may override
         * this method if they want to use a custom mapping scheme from controls to
         * commands.
         * @param {string} id Closure component ID of a toolbar control.
         * @return {string} Editor command or dialog constant corresponding to the
         *     toolbar control, if any.
         * @protected
         */
        getCommand(id: string): string;
        
        /**
         * Returns the event handler object for the editor toolbar.  Useful for classes
         * that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.events.EventHandler<T>} The event handler object.
         * @protected
         * @this T
         * @template T
         */
        getHandler<T>(): goog.events.EventHandler<T>;
        
        /**
         * Returns the field instance managed by the toolbar.  Useful for
         * classes that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.editor.Field} The field managed by the toolbar.
         * @protected
         */
        getField(): goog.editor.Field;
        
        /**
         * Returns the toolbar UI component that manages the editor.  Useful for
         * classes that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.ui.Toolbar} The toolbar UI component.
         */
        getToolbar(): goog.ui.Toolbar;
        
        /**
         * @return {boolean} Whether the toolbar is visible.
         */
        isVisible(): boolean;
        
        /**
         * Shows or hides the toolbar.
         * @param {boolean} visible Whether to show or hide the toolbar.
         */
        setVisible(visible: boolean): void;
        
        /**
         * @return {boolean} Whether the toolbar is enabled.
         */
        isEnabled(): boolean;
        
        /**
         * Enables or disables the toolbar.
         * @param {boolean} enabled Whether to enable or disable the toolbar.
         */
        setEnabled(enabled: boolean): void;
        
        /**
         * Programmatically blurs the editor toolbar, un-highlighting the currently
         * highlighted item, and closing the currently open menu (if any).
         */
        blur(): void;
        
        /**
         * Updates the toolbar in response to editor events.  Specifically, updates
         * button states based on {@code COMMAND_VALUE_CHANGE} events, reflecting the
         * effective formatting of the selection.
         * @param {goog.events.Event} e Editor event to handle.
         * @protected
         */
        updateToolbar(e: goog.events.Event): void;
        
        /**
         * Updates the toolbar to reflect a given state.
         * @param {Object} state Object mapping editor commands to values.
         */
        updateToolbarFromState(state: Object): void;
        
        /**
         * Handles {@code ACTION} events dispatched by toolbar buttons in response to
         * user actions by executing the corresponding field command.
         * @param {goog.events.Event} e Action event to handle.
         * @protected
         */
        handleAction(e: goog.events.Event): void;
    }
}
