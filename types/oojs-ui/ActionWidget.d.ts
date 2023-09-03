declare namespace OO.ui {
    /**
     * An ActionWidget is a {@link OO.ui.ButtonWidget button widget} that executes an action.
     * Action widgets are used with OO.ui.ActionSet, which manages the behavior and availability
     * of the actions.
     *
     * Both actions and action sets are primarily used with {@link OO.ui.Dialog Dialogs}.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Process_Dialogs#Action_sets)
     * for more information and examples.
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ActionWidget
     */
    interface ActionWidget extends ActionWidget.Props, ActionWidget.Prototype {}

    namespace ActionWidget {
        /**
         * @see https://www.mediawiki.org/wiki/OOUI/Elements/Flagged#ProcessDialog
         */
        type Flag = mixin.ButtonElement.Flag | "safe" | "back" | "close";

        interface ConfigOptions extends ButtonWidget.ConfigOptions, mixin.PendingElement.ConfigOptions {
            /** Symbolic name of the action (e.g., ‘continue’ or ‘cancel’). */
            action?: string;

            /**
             * Symbolic names of the modes (e.g., ‘edit’ or ‘read’) in which the action should be
             * made available. See the action set's {@link OO.ui.ActionSet.setMode setMode}
             * method for more information about setting modes.
             */
            modes?: string[];

            /** Render the action button with a frame */
            framed?: boolean;

            flags?: LiteralUnion<Flag> | Array<LiteralUnion<Flag>>;
        }

        type Static = ButtonWidget.Static;

        interface Props extends ButtonWidget.Props, mixin.PendingElement.Props {}

        interface Prototype extends ButtonWidget.Prototype, mixin.PendingElement.Prototype {
            /**
             * Check if the action is configured to be available in the specified `mode`.
             *
             * @param mode Name of mode
             * @return The action is configured with the mode
             */
            hasMode(mode: string): boolean;

            /**
             * Get the symbolic name of the action (e.g., ‘continue’ or ‘cancel’).
             *
             * @return
             */
            getAction(): string;

            /**
             * Get the symbolic name of the mode or modes for which the action is configured to be
             * available.
             *
             * The current mode is set with the action set's {@link OO.ui.ActionSet.setMode setMode}
             * method.
             * Only actions that are configured to be available in the current mode will be visible.
             * All other actions are hidden.
             *
             * @return
             */
            getModes(): string[];
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ActionWidget;
            prototype: Prototype;
            static: Static;
            super: ButtonWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: ButtonWidget.Constructor;
        }
    }

    const ActionWidget: ActionWidget.Constructor;
}
