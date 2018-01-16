interface JQuery {
    shape: SemanticUI.Shape;
}

declare namespace SemanticUI {
    interface Shape {
        settings: ShapeSettings;

        /**
         * Flips the shape upward
         */
        (behavior: 'flip up'): JQuery;
        /**
         * Flips the shape downward
         */
        (behavior: 'flip down'): JQuery;
        /**
         * Flips the shape right
         */
        (behavior: 'flip right'): JQuery;
        /**
         * Flips the shape left
         */
        (behavior: 'flip left'): JQuery;
        /**
         * Flips the shape over clock-wise
         */
        (behavior: 'flip over'): JQuery;
        /**
         * Flips the shape over counter-clockwise
         */
        (behavior: 'flip back'): JQuery;
        /**
         * Set the next side to a specific selector
         */
        (behavior: 'set next side', selector: string | JQuery): JQuery;
        /**
         * Returns whether shape is currently animating
         */
        (behavior: 'is animating'): boolean;
        /**
         * Removes all inline styles
         */
        (behavior: 'reset'): JQuery;
        /**
         * Queues an animation until after current animation
         */
        (behavior: 'queue', animation: string): JQuery;
        /**
         * Forces a reflow on element
         */
        (behavior: 'repaint'): JQuery;
        /**
         * Set the next side to next sibling to active element
         */
        (behavior: 'set default side'): JQuery;
        /**
         * Sets shape to the content size of the next side
         */
        (behavior: 'set stage size'): JQuery;
        /**
         * Refreshes the selector cache for element sides
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Returns translation for next side staged below
         */
        (behavior: 'get transform down'): Shape.Translation;
        /**
         * Returns translation for next side staged left
         */
        (behavior: 'get transform left'): Shape.Translation;
        /**
         * Returns translation for next side staged right
         */
        (behavior: 'get transform right'): Shape.Translation;
        /**
         * Returns translation for next side staged up
         */
        (behavior: 'get transform up'): Shape.Translation;
        /**
         * Returns translation for next side staged down
         */
        (behavior: 'get transform down'): Shape.Translation;
        (behavior: 'destroy'): JQuery;
        <K extends keyof ShapeSettings>(behavior: 'setting', name: K, value?: undefined): ShapeSettings._Impl[K];
        <K extends keyof ShapeSettings>(behavior: 'setting', name: K, value: ShapeSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: ShapeSettings): JQuery;
        (settings?: ShapeSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/shape.html#/settings}
     */
    type ShapeSettings = ShapeSettings.Param;

    namespace ShapeSettings {
        type Param = (Pick<_Impl, 'duration'> |
            Pick<_Impl, 'width'> |
            Pick<_Impl, 'height'> |
            Pick<_Impl, 'beforeChange'> |
            Pick<_Impl, 'onChange'> |
            Pick<_Impl, 'selector'> |
            Pick<_Impl, 'className'> |
            Pick<_Impl, 'error'> |
            Pick<_Impl, 'namespace'> |
            Pick<_Impl, 'name'> |
            Pick<_Impl, 'silent'> |
            Pick<_Impl, 'debug'> |
            Pick<_Impl, 'performance'> |
            Pick<_Impl, 'verbose'>) &
            Partial<Pick<_Impl, keyof _Impl>>;

        interface _Impl {
            // region Shape Settings

            /**
             * Duration of side change animation
             *
             * @default 700
             */
            duration: number;
            /**
             * When set to next will use the width of the next side during the shape's animation.
             * When set to initial it will use the width of the shape at initialization.
             * When set to a specific pixel height, will force the width to that height.
             *
             * @default 'initial'
             * @since 2.2
             */
            width: 'next' | 'initial' | number;
            /**
             * When set to next will use the height of the next side during the shape's animation.
             * When set to initial it will use the height of the shape at initialization.
             * When set to a specific pixel height, will force the height to that height.
             *
             * @default 'initial'
             * @since 2.2
             */
            height: 'next' | 'initial' | number;

            // endregion

            // region Callbacks

            /**
             * Is called before side change
             */
            beforeChange(this: JQuery): void;
            /**
             * Is called after visible side change
             */
            onChange(this: JQuery): void;

            // endregion

            // region DOM Settings

            selector: Shape.SelectorSettings;
            className: Shape.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Shape.ErrorSettings;

            // endregion

            // region Component Settings

            // region DOM Settings

            /**
             * Event namespace. Makes sure module teardown does not effect other events attached to an element.
             */
            namespace: string;

            // endregion

            // region Debug Settings

            /**
             * Name used in log statements
             */
            name: string;
            /**
             * Silences all console output including error messages, regardless of other debug settings.
             */
            silent: boolean;
            /**
             * Debug output to console
             */
            debug: boolean;
            /**
             * Show console.table output with performance metrics
             */
            performance: boolean;
            /**
             * Debug output includes all internal behaviors
             */
            verbose: boolean;

            // endregion

            // endregion
        }
    }

    namespace Shape {
        interface Translation {
            transform: string;
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'sides'> |
                Pick<_Impl, 'side'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.sides'
                 */
                sides: string;
                /**
                 * @default '.side'
                 */
                side: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'animating'> |
                Pick<_Impl, 'hidden'> |
                Pick<_Impl, 'loading'> |
                Pick<_Impl, 'active'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'animating'
                 */
                animating: string;
                /**
                 * @default 'hidden'
                 */
                hidden: string;
                /**
                 * @default 'loading'
                 */
                loading: string;
                /**
                 * @default 'active'
                 */
                active: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'side'> |
                Pick<_Impl, 'method'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'You tried to switch to a side that does not exist.'
                 */
                side: string;
                /**
                 * @default 'The method you called is not defined'
                 */
                method: string;
            }
        }
    }
}
