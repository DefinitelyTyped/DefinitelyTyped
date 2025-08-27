declare namespace OO.ui.mixin {
    /**
     * PendingElement is a mixin that is used to create elements that notify users that something is
     * happening and that they should wait before proceeding. The pending state is visually represented
     * with a pending texture that appears in the head of a pending
     * {@link OO.ui.ProcessDialog process dialog} or in the input field of a
     * {@link OO.ui.TextInputWidget text input widget}.
     *
     * Currently, {@link OO.ui.ActionWidget Action widgets}, which mix in this class, can also be marked
     * as pending, but only when used in {@link OO.ui.MessageDialog message dialogs}. The behavior is
     * not currently supported for action widgets used in process dialogs.
     *
     *     function MessageDialog( config ) {
     *         MessageDialog.super.call( this, config );
     *     }
     *     OO.inheritClass( MessageDialog, OO.ui.MessageDialog );
     *
     *     MessageDialog.static.name = 'myMessageDialog';
     *     MessageDialog.static.actions = [
     *         { action: 'save', label: 'Done', flags: 'primary' },
     *         { label: 'Cancel', flags: 'safe' }
     *     ];
     *
     *     MessageDialog.prototype.initialize = function () {
     *         MessageDialog.super.prototype.initialize.apply( this, arguments );
     *         this.content = new OO.ui.PanelLayout( { padded: true } );
     *         this.content.$element.append( '<p>Click the \'Done\' action widget to see its pending ' +
     *             'state. Note that action widgets can be marked pending in message dialogs but not ' +
     *             'process dialogs.</p>' );
     *         this.$body.append( this.content.$element );
     *     };
     *     MessageDialog.prototype.getBodyHeight = function () {
     *         return 100;
     *     }
     *     MessageDialog.prototype.getActionProcess = function ( action ) {
     *         var dialog = this;
     *         if ( action === 'save' ) {
     *             dialog.getActions().get({actions: 'save'})[0].pushPending();
     *             return new OO.ui.Process()
     *             .next( 1000 )
     *             .next( function () {
     *                 dialog.getActions().get({actions: 'save'})[0].popPending();
     *             } );
     *         }
     *         return MessageDialog.super.prototype.getActionProcess.call( this, action );
     *     };
     *
     *     var windowManager = new OO.ui.WindowManager();
     *     $( document.body ).append( windowManager.$element );
     *
     *     var dialog = new MessageDialog();
     *     windowManager.addWindows( [ dialog ] );
     *     windowManager.openWindow( dialog );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.PendingElement
     */
    interface PendingElement extends PendingElement.Props, PendingElement.Prototype {}

    namespace PendingElement {
        interface ConfigOptions {
            /** Element to mark as pending, defaults to {@link Element.Props.$element this.$element} */
            $pending?: JQuery;
        }

        interface Props {
            $pending: JQuery;
        }

        interface Prototype {
            /**
             * Set the pending element (and clean up any existing one).
             *
             * @param $pending The element to set to pending.
             */
            setPendingElement($pending: JQuery): void;

            /**
             * Check if an element is pending.
             *
             * @return Element is pending
             */
            isPending(): boolean;

            /**
             * Increase the pending counter. The pending state will remain active until the counter is zero
             * (i.e., the number of calls to {@link pushPending} and {@link popPending} is the same).
             *
             * @return The element, for chaining
             */
            pushPending(): this;

            /**
             * Decrease the pending counter. The pending state will remain active until the counter is zero
             * (i.e., the number of calls to {@link pushPending} and {@link popPending} is the same).
             *
             * @return The element, for chaining
             */
            popPending(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): PendingElement;
            prototype: Prototype;
            static: {};
        }
    }

    const PendingElement: PendingElement.Constructor;
}
