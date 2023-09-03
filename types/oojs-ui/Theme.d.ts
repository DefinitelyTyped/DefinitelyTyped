declare namespace OO.ui {
    /**
     * Theme logic.
     *
     * ResourceLoader module: `oojs-ui-core`
     */
    interface Theme {
        /**
         * Get a list of classes to be applied to a widget.
         *
         * The 'on' and 'off' lists combined MUST contain keys for all classes the theme adds or removes,
         * otherwise state transitions will not work properly.
         *
         * @param element Element for which to get classes
         * @return Categorized class names with `on` and `off` lists
         */
        getElementClasses(element: Element): { on: string[]; off: string[] };

        /**
         * Update CSS classes provided by the theme.
         *
         * For elements with theme logic hooks, this should be called any time there's a state change.
         *
         * @param element Element for which to update classes
         */
        updateElementClasses(element: Element): void;

        /**
         * Queue {@link updateElementClasses} to be called for this element.
         *
         * @param element Element for which to update classes
         */
        queueUpdateElementClasses(element: Element): void;

        /**
         * Get the transition duration in milliseconds for dialogs opening/closing
         *
         * The dialog should be fully rendered this many milliseconds after the
         * ready process has executed.
         *
         * @return Transition duration in milliseconds
         */
        getDialogTransitionDuration(): number;
    }

    interface ThemeConstructor {
        new(): Theme;
        prototype: Theme;
        static: {};
    }

    const Theme: ThemeConstructor;
}
