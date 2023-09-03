declare namespace OO.ui {
    /**
     * ProcessDialog windows encapsulate a {@link OO.ui.Process process} and all of the code necessary
     * to complete it. If the process terminates with an error, a customizable {@link OO.ui.Error error
     * interface} alerts users to the trouble, permitting the user to dismiss the error and try again
     * when relevant. The ProcessDialog class is always extended and customized with the actions and
     * content required for each process.
     *
     * The process dialog box consists of a header that visually represents the ‘working’ state of long
     * processes with an animation. The header contains the dialog title as well as
     * two {@link OO.ui.ActionWidget action widgets}:  a ‘safe’ action on the left (e.g., ‘Cancel’) and
     * a ‘primary’ action on the right (e.g., ‘Done’).
     *
     * Like other windows, the process dialog is managed by a
     * {@link OO.ui.WindowManager window manager}.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Process_Dialogs)
     * for more information and examples.
     *
     *     // Example: Creating and opening a process dialog window.
     *     function MyProcessDialog( config ) {
     *         MyProcessDialog.super.call( this, config );
     *     }
     *     OO.inheritClass( MyProcessDialog, OO.ui.ProcessDialog );
     *
     *     MyProcessDialog.static.name = 'myProcessDialog';
     *     MyProcessDialog.static.title = 'Process dialog';
     *     MyProcessDialog.static.actions = [
     *         { action: 'save', label: 'Done', flags: 'primary' },
     *         { label: 'Cancel', flags: 'safe' }
     *     ];
     *
     *     MyProcessDialog.prototype.initialize = function () {
     *         MyProcessDialog.super.prototype.initialize.apply( this, arguments );
     *         this.content = new OO.ui.PanelLayout( { padded: true, expanded: false } );
     *         this.content.$element.append( '<p>This is a process dialog window. The header ' +
     *             'contains the title and two buttons: \'Cancel\' (a safe action) on the left and ' +
     *             '\'Done\' (a primary action)  on the right.</p>' );
     *         this.$body.append( this.content.$element );
     *     };
     *     MyProcessDialog.prototype.getActionProcess = function ( action ) {
     *         var dialog = this;
     *         if ( action ) {
     *             return new OO.ui.Process( function () {
     *                 dialog.close( { action: action } );
     *             } );
     *         }
     *         return MyProcessDialog.super.prototype.getActionProcess.call( this, action );
     *     };
     *
     *     var windowManager = new OO.ui.WindowManager();
     *     $( document.body ).append( windowManager.$element );
     *
     *     var dialog = new MyProcessDialog();
     *     windowManager.addWindows( [ dialog ] );
     *     windowManager.openWindow( dialog );
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ProcessDialog
     */
    interface ProcessDialog extends ProcessDialog.Props, ProcessDialog.Prototype {}

    namespace ProcessDialog {
        type ConfigOptions = Dialog.ConfigOptions;

        type Static = Dialog.Static;

        type Props = Dialog.Props;

        type Prototype = Dialog.Prototype;

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ProcessDialog;
            prototype: Prototype;
            static: Static;
            super: Dialog.Constructor;
            /** @deprecated Use `super` instead */
            parent: Dialog.Constructor;
        }
    }

    const ProcessDialog: ProcessDialog.Constructor;
}
