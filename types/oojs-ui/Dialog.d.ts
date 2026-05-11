declare namespace OO.ui {
    /**
     * The Dialog class serves as the base class for the other types of dialogs.
     * Unless extended to include controls, the rendered dialog box is a simple window
     * that users can close by hitting the Escape key. Dialog windows are used with OO.ui.WindowManager,
     * which opens, closes, and controls the presentation of the window. See the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Dialogs)
     * for more information.
     *
     *     // A simple dialog window.
     *     function MyDialog( config ) {
     *         MyDialog.super.call( this, config );
     *     }
     *     OO.inheritClass( MyDialog, OO.ui.Dialog );
     *     MyDialog.static.name = 'myDialog';
     *     MyDialog.prototype.initialize = function () {
     *         MyDialog.super.prototype.initialize.call( this );
     *         this.content = new OO.ui.PanelLayout( { padded: true, expanded: false } );
     *         this.content.$element.append( '<p>A simple dialog window. Press Escape key to ' +
     *             'close.</p>' );
     *         this.$body.append( this.content.$element );
     *     };
     *     MyDialog.prototype.getBodyHeight = function () {
     *         return this.content.$element.outerHeight( true );
     *     };
     *     var myDialog = new MyDialog( {
     *         size: 'medium'
     *     } );
     *     // Create and append a window manager, which opens and closes the window.
     *     var windowManager = new OO.ui.WindowManager();
     *     $( document.body ).append( windowManager.$element );
     *     windowManager.addWindows( [ myDialog ] );
     *     // Open the window!
     *     windowManager.openWindow( myDialog );
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Dialog
     */
    interface Dialog extends Dialog.Props, Dialog.Prototype {}

    namespace Dialog {
        interface SetupDataMap {
            /** Dialog title, omit to use the {@link Static.title static title} */
            title?: JQuery | Deferrable<string> | null;

            /**
             * List of configuration options for each {@link OO.ui.ActionWidget action widget},
             * omit to use {@link Static.actions static actions}.
             */
            actions?: ActionWidget.ConfigOptions[];
        }

        type ConfigOptions = Window.ConfigOptions;

        interface Static extends Window.Static {
            /**
             * Symbolic name of dialog.
             *
             * The dialog class must have a symbolic name in order to be registered with OO.Factory.
             * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Window_managers)
             * for more information.
             */
            name: string;

            /**
             * The dialog title.
             *
             * The title can be specified as a plaintext string, a {@link OO.ui.mixin.LabelElement Label}
             * node, or a function that will produce a Label node or string. The title can also be
             * specified with data passed to the constructor (see {@link Prototype.getSetupProcess getSetupProcess}).
             * In this case, the static value will be overridden.
             */
            title: JQuery | Deferrable<string> | null;

            /**
             * An array of configured {@link OO.ui.ActionWidget action widgets}.
             *
             * Actions can also be specified with data passed to the constructor
             * (see {@link Prototype.getSetupProcess getSetupProcess}).
             * In this case, the static value will be overridden.
             */
            actions: ActionWidget.ConfigOptions[];

            /**
             * Close the dialog when the Escape key is pressed.
             */
            escapable: boolean;
        }

        interface Props extends Window.Props, mixin.PendingElement.Props {}

        interface Prototype extends Window.Prototype, mixin.PendingElement.Prototype {
            /**
             * Get the set of actions used by the dialog.
             *
             * @return
             */
            getActions(): ActionSet;

            /**
             * Get a process for taking action.
             *
             * When you override this method, you can create a new OO.ui.Process and return it, or
             * add additional accept steps to the process the parent method provides using the
             * {@link OO.ui.Process.first 'first'} and {@link OO.ui.Process.next 'next'} methods of
             * OO.ui.Process.
             *
             * @param action Symbolic name of action
             * @return Action process
             */
            getActionProcess(action?: string): Process;

            /**
             * @param data Dialog opening data
             */
            getSetupProcess(data?: SetupDataMap & Record<string, any>): Process;
            getSetupProcess<T>(data?: T extends object ? never : T): Process;

            /**
             * Get action widgets from a list of configs
             *
             * @param actions Action widget configs
             * @return Action widgets
             */
            getActionWidgets(actions: ActionWidget.ConfigOptions[]): ActionWidget[];

            /**
             * Get action widget from config
             *
             * Override this method to change the action widget class used.
             *
             * @param config Action widget config
             * @return Action widget
             */
            getActionWidget(config: ActionWidget.ConfigOptions): ActionWidget;

            /**
             * Get action widget config
             *
             * Override this method to modify the action widget config
             *
             * @param config Initial action widget config
             * @return Action widget config
             */
            getActionWidgetConfig(config: ActionWidget.ConfigOptions): ActionWidget.ConfigOptions;

            /**
             * Execute an action.
             *
             * @param action Symbolic name of action to execute
             * @return Promise resolved when action completes, rejected if it fails
             */
            executeAction(action: string): JQuery.Promise<void, [] | [Error]>;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): Dialog;
            prototype: Prototype;
            static: Static;
            super: Window.Constructor;
            /** @deprecated Use `super` instead */
            parent: Window.Constructor;
        }
    }

    const Dialog: Dialog.Constructor;
}
