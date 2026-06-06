declare namespace OO.ui {
    /**
     * NumberInputWidgets combine a {@link OO.ui.TextInputWidget text input} (where a value
     * can be entered manually) and two {@link OO.ui.ButtonWidget button widgets}
     * (to adjust the value in increments) to allow the user to enter a number.
     *
     *     // A NumberInputWidget.
     *     var numberInput = new OO.ui.NumberInputWidget( {
     *         label: 'NumberInputWidget',
     *         input: { value: 5 },
     *         min: 1,
     *         max: 10
     *     } );
     *     $( document.body ).append( numberInput.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.NumberInputWidget
     */
    interface NumberInputWidget extends NumberInputWidget.Props, NumberInputWidget.Prototype {}

    namespace NumberInputWidget {
        interface ConfigOptions extends TextInputWidget.ConfigOptions {
            /** Configuration options to pass to the {@link OO.ui.ButtonWidget decrementing button widget}. */
            minusButton?: ButtonWidget.ConfigOptions;
            /** Configuration options to pass to the {@link OO.ui.ButtonWidget incrementing button widget}. */
            plusButton?: ButtonWidget.ConfigOptions;
            /** Minimum allowed value */
            min?: number;
            /** Maximum allowed value */
            max?: number;
            /** If specified, the field only accepts values that are multiples of this. */
            step?: number | null;
            /**
             * Delta when using the buttons or Up/Down arrow keys.
             * Defaults to `step` if specified, otherwise `1`.
             */
            buttonStep?: number;
            /** Delta when using the Page-up/Page-down keys. Defaults to 10 times `buttonStep`. */
            pageStep?: number;
            /** Whether to show the plus and minus buttons. */
            showButtons?: boolean;

            /** @deprecated */
            input?: Omit<this, "input">;
            /** @deprecated */
            allowInteger?: boolean;
            /** @deprecated */
            isInteger?: boolean;
        }

        type Static = TextInputWidget.Static;

        type Props = TextInputWidget.Props;

        // HACK: Omit to fix LSP violation
        interface Prototype extends Omit<TextInputWidget.Prototype, "getRange"> {
            /** @deprecated */
            setAllowInteger(flag: boolean): void;
            /** @deprecated */
            setIsInteger(flag: boolean): void;
            /** @deprecated */
            getAllowInteger(): boolean;
            /** @deprecated */
            getIsInteger(): boolean;

            /**
             * Set the range of allowed values
             *
             * @param min Minimum allowed value
             * @param max Maximum allowed value
             */
            setRange(min: number, max: number): void;

            /**
             * Get the current range
             *
             * @return Minimum and maximum values
             */
            getRange(): [number, number];

            /**
             * Set the stepping deltas
             *
             * @param buttonStep Delta when using the buttons or up/down arrow keys.
             *  Defaults to `step` if specified, otherwise `1`.
             * @param pageStep Delta when using the page-up/page-down keys.
             *  Defaults to 10 times `buttonStep`.
             * @param step If specified, the field only accepts values that are multiples
             *  of this.
             */
            setStep(buttonStep?: number, pageStep?: number, step?: number | null): void;

            /**
             * Get the current stepping values
             *
             * @return Button step, page step, and validity step
             */
            getStep(): [number, number, number];

            /**
             * Get the current value of the widget as a number
             *
             * @return May be NaN, or an invalid number
             */
            getNumericValue(): number;

            /**
             * Adjust the value of the widget
             *
             * @param delta Adjustment amount
             */
            adjustValue(delta: number): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): NumberInputWidget;
            prototype: Prototype;
            static: Static;
            super: TextInputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: TextInputWidget.Constructor;
        }
    }

    const NumberInputWidget: NumberInputWidget.Constructor;
}
