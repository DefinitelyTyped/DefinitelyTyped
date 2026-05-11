import * as React from "react";

declare namespace DualListBox {
    /**
     * A value-based option.
     */
    interface ValueOption<T> {
        /**
         * Whether the option is disabled or not.
         *
         * @default false
         */
        disabled?: boolean;
        /**
         * Adds the HTML `title` attribute to the option.
         */
        title?: string;
        /**
         * The option label.
         */
        label: string;
        /**
         * The option value.
         */
        value: T;
    }

    /**
     * A category with other categories and values.
     */
    interface CategoryOption<T> {
        /**
         * Whether the category is disabled or not.
         *
         * @default false
         */
        disabled?: boolean;
        /**
         * Adds the HTML `title` attribute to the option.
         */
        title?: string;
        /**
         * The category label.
         */
        label: string;
        /**
         * The category child options.
         */
        options: ReadonlyArray<Option<T>> | Array<Option<T>>;
    }

    /**
     * Valid options include values and categories.
     */
    type Option<T> = ValueOption<T> | CategoryOption<T>;

    /**
     * A filter.
     */
    interface Filter<T> {
        /**
         * Available options.
         */
        available: readonly T[] | T[];
        /**
         * Selected options.
         */
        selected: readonly T[] | T[];
    }

    /**
     * Properties common to every `DualListBox`.
     */
    interface CommonProperties<T> {
        /**
         * Available options.
         */
        options: ReadonlyArray<Option<T>> | Array<Option<T>>;
        /**
         * Selected options.
         */
        selected?: readonly T[] | T[];
        /**
         * A React function `ref` to the "selected" list box.
         */
        selectedRef?: ((availableInput: HTMLSelectElement) => void) | null;
        /**
         * Override the default alignment of action buttons.
         *
         * @default "middle"
         */
        alignActions?: "top" | "middle";
        /**
         * If true, duplicate options will be allowed in the selected list box.
         *
         * @default false
         */
        allowDuplicates?: boolean;
        /**
         * A subset of the `options` array to optionally filter the available list
         * box.
         */
        available?: readonly T[] | T[];
        /**
         * A React function `ref` to the "available" list box.
         *
         * @default null
         */
        availableRef?: ((availableInput: HTMLSelectElement) => void) | null;
        /**
         * An optional `className` to apply to the root node.
         *
         * @default null
         */
        className?: string | null;
        /**
         * If true, both "available" and "selected" list boxes will be disabled.
         *
         * @default false
         */
        disabled?: boolean;
        /**
         * Resolve the label from an option
         *
         * @default option => option.label
         */
        getOptionLabel?: (option: ValueOption<T>) => string;
        /**
         * Resolve the value from an option
         *
         * @default option => option.value
         */
        getOptionValue?: (option: ValueOption<T>) => string;
        /**
         * The {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir | directionality}
         * of the component's elements. Set to 'rtl' if using a right-to-left language.
         */
        htmlDir?: string;
        /**
         * A key-value pairing of action icons and their React nodes.
         */
        icons?: {
            [
                k in
                    | "moveToAvailable"
                    | "moveAllToAvailable"
                    | "moveToSelected"
                    | "moveAllToSelected"
                    | "moveDown"
                    | "moveUp"
                    | "moveTop"
                    | "moveBottom"
            ]?: React.ReactNode;
        };
        /**
         * A value specifying which overarching icon class to use.
         * Built-in support for fa5, fa6, and native icons.
         *
         * @default "fa6"
         */
        iconsClass?: string;
        /**
         * An HTML ID prefix for the various sub elements.
         *
         * @default null
         */
        id?: string | null;
        /**
         * A key-value pairing of localized text.
         */
        lang?: {
            [
                k in
                    | "availableFilterHeader"
                    | "availableFilterPlaceholer"
                    | "availableHeader"
                    | "hiddenInputLabel"
                    | "moveAllToAvailable"
                    | "moveAllToSelected"
                    | "moveToAvailable"
                    | "moveToSelected"
                    | "moveBottom"
                    | "moveDown"
                    | "moveUp"
                    | "moveTop"
                    | "noAvailableOptions"
                    | "noSelectedOptions"
                    | "requiredError"
                    | "selectedFilterHeader"
                    | "selectedFilterPlaceholder"
                    | "selectedHeader"
            ]?: string;
        };
        /**
         * A list of key codes that will trigger a toggle of the selected options.
         *
         * @default [' ', 'Enter']
         */
        moveKeys?: string[];
        /**
         * A value for the `name` attribute on the hidden `<input />` element. This is potentially
         * useful for form submissions.
         *
         * @default null
         */
        name?: string | null;
        /**
         * This flag will preserve the selection order.  By default, `react-dual-listbox` orders
         * selected items according to the order of the `options` property.
         *
         * @default false
         */
        preserveSelectOrder?: boolean;
        /**
         * f true, this component will require selected to be non-empty to pass a form validation
         *
         * @default false
         */
        required?: boolean;
        /**
         * If true, labels above both the available and selected list boxes will appear. These labels
         * derive from `lang`.
         *
         * @default false
         */
        showHeaderLabels?: boolean;
        /**
         * If true, text will appear in place of the available/selected list boxes when no options are
         * present.
         *
         * @default false;
         */
        showNoOptionsText?: boolean;
        /**
         * If true, a set of up/down buttons will appear near the selected list box to allow the user
         * to re-arrange the items.
         *
         * @default false
         */
        showOrderButtons?: boolean;
    }

    /**
     * Additional `DualListBox` properties with filter.
     */
    interface FilterProperties<T, F extends boolean, V extends boolean> {
        /**
         * Flag that determines whether filtering is enabled.
         *
         * @default false
         */
        canFilter?: F;
        /**
         * Override the default filtering function.
         */
        filterCallback?: F extends true
            ? (option: Option<T>, filterInput: string, props: DualListBoxProperties<T, true, V>) => boolean
            : undefined;
        /**
         * Control the filter search text.
         */
        filter?: Filter<T>;
        /**
         * Handle filter change.
         */
        onFilterChange?: F extends true ? (filter: string) => void : undefined;
    }

    /**
     * Additional `DualListBox` properties with complex selected values.
     */
    interface ValueProperties<T, V extends boolean> {
        /**
         * The handler called when options are moved to either side.
         */
        // onChange?: (selected: (T | Option<T>)[]) => void;
        onChange?: (selected: V extends true ? T[] : Array<Option<T>>) => void;
        /**
         * If true, the selected value passed in onChange is an array of string values.
         * Otherwise, it is an array of options.
         *
         * @default true
         */
        simpleValue?: V;
    }

    /**
     * `DualListBox` component properties.
     */
    // export type DualListBoxProperties<P> = CommonProperties<P> & FilterProperties<P> & ValueProperties<P>;
    interface DualListBoxProperties<P, F extends boolean, V extends boolean>
        extends CommonProperties<P>, FilterProperties<P, F, V>, ValueProperties<P, V>
    {}
}

/**
 * A feature-rich dual list box for React.
 *
 * The `DualListBox` is a controlled component, so you have to update the `selected` property in
 * conjunction with the `onChange` handler if you want the selected values to change.
 */
declare class DualListBox<P, F extends boolean = false, V extends boolean = true> extends React.Component<
    DualListBox.DualListBoxProperties<P, F, V>
> {}

export = DualListBox;
