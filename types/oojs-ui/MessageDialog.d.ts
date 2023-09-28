declare namespace OO.ui {
    /**
     * MessageDialogs display a confirmation or alert message. By default, the rendered dialog box
     * consists of a header that contains the dialog title, a body with the message, and a footer that
     * contains any {@link OO.ui.ActionWidget action widgets}. The MessageDialog class is the only type
     * of {@link OO.ui.Dialog dialog} that is usually instantiated directly.
     *
     * There are two basic types of message dialogs, confirmation and alert:
     *
     * - **confirmation**: the dialog title describes what a progressive action will do and the message
     *   provides more details about the consequences.
     * - **alert**: the dialog title describes which event occurred and the message provides more
     *   information about why the event occurred.
     *
     * The MessageDialog class specifies two actions: ‘accept’, the primary
     * action (e.g., ‘ok’) and ‘reject,’ the safe action (e.g., ‘cancel’). Both will close the window,
     * passing along the selected action.
     *
     * For more information and examples, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Message_Dialogs).
     *
     *     // Example: Creating and opening a message dialog window.
     *     var messageDialog = new OO.ui.MessageDialog();
     *
     *     // Create and append a window manager.
     *     var windowManager = new OO.ui.WindowManager();
     *     $( document.body ).append( windowManager.$element );
     *     windowManager.addWindows( [ messageDialog ] );
     *     // Open the window.
     *     windowManager.openWindow( messageDialog, {
     *         title: 'Basic message dialog',
     *         message: 'This is the message'
     *     } );
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MessageDialog
     */
    interface MessageDialog extends MessageDialog.Props, MessageDialog.Prototype {}

    namespace MessageDialog {
        interface SetupDataMap extends Dialog.SetupDataMap {
            /** Description of the action's consequence */
            message?: JQuery | Deferrable<string> | null;

            /** Symbolic name of the dialog size, see {@link OO.ui.Window} */
            size?: Window.Size;
        }

        type ConfigOptions = Dialog.ConfigOptions;

        interface Static extends Dialog.Static {
            /**
             * The message displayed in the dialog body.
             *
             * A confirmation message describes the consequences of a progressive action. An alert
             * message describes why an event occurred.
             */
            message: JQuery | Deferrable<string> | null;
        }

        type Props = Dialog.Props;

        interface Prototype extends Dialog.Prototype {
            getSetupProcess(data?: SetupDataMap & Record<string, any>): Process;
            getSetupProcess<T>(data?: T extends object ? never : T): Process;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): MessageDialog;
            prototype: Prototype;
            static: Static;
            super: Dialog.Constructor;
            /** @deprecated Use `super` instead */
            parent: Dialog.Constructor;
        }
    }

    const MessageDialog: MessageDialog.Constructor;
}
