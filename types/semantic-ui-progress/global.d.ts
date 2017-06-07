interface JQuery {
    progress: SemanticUI.Progress;
}

declare namespace SemanticUI {
    interface Progress {
        settings: ProgressSettings;

        /**
         * Sets current percent of progress to value. If using a total will convert from percent to estimated value.
         */
        (behavior: 'set percent', percent: number): JQuery;
        /**
         * Sets progress to specified value. Will automatically calculate percent from total.
         */
        (behavior: 'set progress', value: number): JQuery;
        /**
         * Increments progress by increment value, if not passed a value will use random amount specified in settings
         */
        (behavior: 'increment', incrementValue: number): JQuery;
        /**
         * Decrements progress by decrement value, if not passed a value will use random amount specified in settings
         */
        (behavior: 'decrement', decrementValue: number): JQuery;
        /**
         * Immediately updates progress to value, ignoring progress animation interval delays
         */
        (behavior: 'update progress', value: number): JQuery;
        /**
         * Finishes progress and sets loaded to 100%
         */
        (behavior: 'complete'): JQuery;
        /**
         * Resets progress to zero
         */
        (behavior: 'reset'): JQuery;
        /**
         * Set total to a new value
         */
        (behavior: 'set total', total: number): JQuery;
        /**
         * Replaces templated string with value, total, percent left and percent.
         */
        (behavior: 'get text', text: string): string;
        /**
         * Returns normalized value inside acceptable range specified by total.
         */
        (behavior: 'get normalized value', value: number): number;
        /**
         * Returns percent as last specified
         */
        (behavior: 'get percent'): number;
        /**
         * Returns current progress value
         */
        (behavior: 'get value'): number;
        /**
         * Returns total
         */
        (behavior: 'get total'): number;
        /**
         * Returns whether progress is completed
         */
        (behavior: 'is complete'): boolean;
        /**
         * Returns whether progress was a success
         */
        (behavior: 'is success'): boolean;
        /**
         * Returns whether progress is in warning state
         */
        (behavior: 'is warning'): boolean;
        /**
         * Returns whether progress is in error state
         */
        (behavior: 'is error'): boolean;
        /**
         * Returns whether progress is in active state
         */
        (behavior: 'is active'): boolean;
        /**
         * Sets progress to active state
         */
        (behavior: 'set active'): JQuery;
        /**
         * Sets progress to warning state
         */
        (behavior: 'set warning'): JQuery;
        /**
         * Sets progress to success state
         */
        (behavior: 'set success'): JQuery;
        /**
         * Sets progress to error state
         */
        (behavior: 'set error'): JQuery;
        /**
         * Changes progress animation speed
         */
        (behavior: 'set duration', value: number): JQuery;
        /**
         * Sets progress exterior label to text
         */
        (behavior: 'set label', text: string): JQuery;
        /**
         * Sets progress bar label to text
         */
        (behavior: 'set bar label', text: string): JQuery;
        /**
         * Removes progress to active state
         */
        (behavior: 'remove active'): JQuery;
        /**
         * Removes progress to warning state
         */
        (behavior: 'remove warning'): JQuery;
        /**
         * Removes progress to success state
         */
        (behavior: 'remove success'): JQuery;
        /**
         * Removes progress to error state
         */
        (behavior: 'remove error'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof ProgressSettings>(behavior: 'setting', name: K, value?: undefined): ProgressSettings[K];
        <K extends keyof ProgressSettings>(behavior: 'setting', name: K, value: ProgressSettings[K]): JQuery;
        (behavior: 'setting', value: ProgressSettings.Param): JQuery;
        (settings?: ProgressSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/progress.html#/settings}
     */
    interface ProgressSettings extends Pick<ProgressSettings._Impl, keyof ProgressSettings._Impl> { }

    namespace ProgressSettings {
        type Param = ProgressSettings | object;

        interface _Impl {
            // region Progress Settings

            /**
             * Whether success state should automatically trigger when progress completes
             *
             * @default true
             */
            autoSuccess: boolean;
            /**
             * Whether progress should automatically show activity when incremented
             *
             * @default true
             */
            showActivity: boolean;
            /**
             * When set to true, values that calculate to above 100% or below 0% will be adjusted.
             * When set to false, inappropriate values will produce an error.
             *
             * @default true
             */
            limitValues: boolean;
            /**
             * Can be set to either to display progress as percent or ratio. Matches up to corresponding text template with the same name.
             *
             * @default 'percent'
             */
            label: 'percent' | 'ratio';
            /**
             * When incrementing without value, sets range for random increment value
             */
            random: Progress.RandomSettings;
            /**
             * Decimal point precision for calculated progress
             *
             * @default 1
             */
            precision: number;
            /**
             * Setting a total value will make each call to increment get closer to this total (i.e. 1/20, 2/20 etc)
             *
             * @default false
             */
            total: false | number;
            /**
             * Sets current value, when total is specified, this is used to calculate a ratio of the total, with percent this should be the overall percent
             *
             * @default false
             */
            value: false | number;

            // endregion

            // region Callbacks

            /**
             * Callback on percentage change
             */
            onChange(this: JQuery, percent: number, value: number, total: number): void;
            /**
             * Callback on success state
             */
            onSuccess(this: JQuery, total: number): void;
            /**
             * Callback on active state
             */
            onActive(this: JQuery, value: number, total: number): void;
            /**
             * Callback on error state
             */
            onError(this: JQuery, value: number, total: number): void;
            /**
             * Callback on warning state
             */
            onWarning(this: JQuery, value: number, total: number): void;

            // endregion

            // region DOM Settings

            /**
             * Text content for each state, uses simple templating with {percent}, {value}, {total}
             */
            text: Progress.TextSettings;
            /**
             * Regular expressions used by module
             */
            regExp: Progress.RegExpSettings;
            /**
             * Selectors used by module
             */
            selector: Progress.SelectorSettings;
            /**
             * DOM metadata used by module
             */
            metadata: Progress.MetadataSettings;
            /**
             * Class names used to attach style to state
             */
            className: Progress.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Progress.ErrorSettings;

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

    namespace Progress {
        interface RandomSettings extends Pick<RandomSettings._Impl, keyof RandomSettings._Impl> { }

        namespace RandomSettings {
            type Param = RandomSettings | object;

            interface _Impl {
                /**
                 * @default 2
                 */
                min: number;
                /**
                 * @default 5
                 */
                max: number;
            }
        }

        interface TextSettings extends Pick<TextSettings._Impl, keyof TextSettings._Impl> { }

        namespace TextSettings {
            type Param = TextSettings | object;

            interface _Impl {
                /**
                 * @default false
                 */
                active: false | string;
                /**
                 * @default false
                 */
                error: false | string;
                /**
                 * @default false
                 */
                success: false | string;
                /**
                 * @default false
                 */
                warning: false | string;
                /**
                 * @default '{percent}%'
                 */
                percent: false | string;
                /**
                 * @default '{value} of {total}'
                 */
                ratio: false | string;
            }
        }

        interface RegExpSettings extends Pick<RegExpSettings._Impl, keyof RegExpSettings._Impl> { }

        namespace RegExpSettings {
            type Param = RegExpSettings | object;

            interface _Impl {
                /**
                 * @default /\{\$*[A-z0-9]+\}/g
                 */
                variable: RegExp;
            }
        }

        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

            interface _Impl {
                /**
                 * @default '> .bar
                 */
                bar: string;
                /**
                 * @default '> .label'
                 */
                label: string;
                /**
                 * @default '.bar > .progress'
                 */
                progress: string;
            }
        }

        interface MetadataSettings extends Pick<MetadataSettings._Impl, keyof MetadataSettings._Impl> { }

        namespace MetadataSettings {
            type Param = MetadataSettings | object;

            interface _Impl {
                /**
                 * @default 'percent'
                 */
                percent: string;
                /**
                 * @default 'total'
                 */
                total: string;
                /**
                 * @default 'value'
                 */
                value: string;
            }
        }

        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'error'
                 */
                error: string;
                /**
                 * @default 'success'
                 */
                success: string;
                /**
                 * @default 'warning'
                 */
                warning: string;
            }
        }

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            type Param = ErrorSettings | object;

            interface _Impl {
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
                /**
                 * @default 'Progress value is non numeric'
                 */
                nonNumeric: string;
            }
        }
    }
}
