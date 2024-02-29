declare namespace OO.ui {
    /**
     * Progress bars visually display the status of an operation, such as a download,
     * and can be either determinate or indeterminate:
     *
     * - **determinate** process bars show the percent of an operation that is complete.
     *
     * - **indeterminate** process bars use a visual display of motion to indicate that an operation
     *   is taking place. Because the extent of an indeterminate operation is unknown, the bar does
     *   not use percentages.
     *
     * The value of the `progress` configuration determines whether the bar is determinate
     * or indeterminate.
     *
     *     // Examples of determinate and indeterminate progress bars.
     *     var progressBar1 = new OO.ui.ProgressBarWidget( {
     *         progress: 33
     *     } );
     *     var progressBar2 = new OO.ui.ProgressBarWidget();
     *
     *     // Create a FieldsetLayout to layout progress bars.
     *     var fieldset = new OO.ui.FieldsetLayout;
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( progressBar1, {
     *             label: 'Determinate',
     *             align: 'top'
     *         } ),
     *         new OO.ui.FieldLayout( progressBar2, {
     *             label: 'Indeterminate',
     *             align: 'top'
     *         } )
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ProgressBarWidget
     */
    interface ProgressBarWidget extends ProgressBarWidget.Props, ProgressBarWidget.Prototype {}

    namespace ProgressBarWidget {
        interface ConfigOptions extends Widget.ConfigOptions, mixin.PendingElement.ConfigOptions {
            /**
             * The type of progress bar (determinate or indeterminate).
             * To create a determinate progress bar, specify a number that reflects the initial
             * percent complete.
             * By default, the progress bar is indeterminate.
             */
            progress?: number | false;
        }

        type Static = Widget.Static;

        interface Props extends Widget.Props, mixin.PendingElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.PendingElement.Prototype {
            /**
             * Get the percent of the progress that has been completed. Indeterminate progresses will
             * return `false`.
             *
             * @return Progress percent
             */
            getProgress(): number | false;

            /**
             * Set the percent of the process completed or `false` for an indeterminate process.
             *
             * @param progress Progress percent or `false` for indeterminate
             */
            setProgress(progress: number | false): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ProgressBarWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const ProgressBarWidget: ProgressBarWidget.Constructor;
}
