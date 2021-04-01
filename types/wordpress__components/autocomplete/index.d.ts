import { ReactNode } from 'react';
import { Value } from '@wordpress/rich-text';

declare namespace Autocomplete {
    /**
     * There are currently two supported actions:
     *   - `insert-at-caret` (default): Insert the `value` into the text.
     *   - `replace`: Replace the current block with the block specified in
     *      the `value` property.
     */
    type Action = 'insert-at-caret' | 'replace';

    type OptionCompletion =
        | ReactNode
        | { action: 'insert-at-caret'; value: ReactNode }
        | { action: 'replace'; value: Value };

    interface Completer<T> {
        /**
         * The name of the completer. Useful for identifying a specific
         * completer to be overridden via extensibility hooks.
         */
        name: string;

        /**
         * The string prefix that should trigger the completer. For example,
         * Gutenberg's block completer is triggered when the `/` character is
         * entered.
         */
        triggerPrefix: string;

        /**
         * The raw options for completion. May be an array, a function that
         * returns an array, or a function that returns a promise for an array.
         *
         * Options may be of any type or shape. The completer declares how
         * those options are rendered and what their completions should be when
         * selected.
         */
        options: ((query: string) => PromiseLike<readonly T[]> | readonly T[]) | readonly T[];

        /**
         * A class name to apply to the autocompletion popup menu.
         */
        className?: string;

        /**
         * Whether to apply debouncing for the autocompleter. Set to `true` to
         * enable debouncing.
         */
        isDebounced?: boolean;

        /**
         * A function that takes a string before and a string after the
         * autocomplete trigger and query text and returns a boolean indicating
         * whether the completer should be considered for that context.
         */
        allowContext?(before: string, after: string): boolean;

        /**
         * A function that takes an option and responds with how the option
         * should be completed.
         *
         * @remarks
         *
         * By default, the result is a value to be inserted in the text.
         * However, a completer may explicitly declare how a completion should
         * be treated by returning an object with action and value properties.
         * The action declares what should be done with the value.
         *
         * There are currently two supported actions:
         *   - `insert-at-caret` (default): Insert the `value` into the text.
         *   - `replace`: Replace the current block with the block specified in
         *      the `value` property.
         *
         * @param value - the value of the completer option.
         * @param query - the text value of the autocomplete query.
         */
        getOptionCompletion(value: any, query: string): OptionCompletion;

        /**
         * A function that returns the keywords for the specified option.
         *
         * @param option - a completer option.
         */
        getOptionKeywords?(option: T): string[];

        /**
         * A function that returns the label for a given option. A label may be
         * a string or a mixed array of strings, elements, and components.
         *
         * @param option - a completer option.
         */
        getOptionLabel(option: T): ReactNode;

        /**
         * A function that returns whether or not the specified option should
         * be disabled. Disabled options cannot be selected.
         *
         * @param option - a completer option.
         */
        isOptionDisabled?(option: T): boolean;
    }

    interface RenderProps {
        activeId: string;
        isExpanded: boolean;
        listBoxId: string;
        onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    }

    interface Props<T> {
        children(props: RenderProps): JSX.Element | null;
        completers: ReadonlyArray<Completer<T>>;
        onChange?(value: Value): void;
        onReplace?(value: Value): void;
        record?: Value;
        isSelected?: boolean;
    }
}

// tslint:disable-next-line:no-unnecessary-generics
declare function Autocomplete<T = any>(props: Autocomplete.Props<T>): JSX.Element;

export default Autocomplete;
