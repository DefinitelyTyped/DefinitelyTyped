// Type definitions for react-dual-listbox 2.2
// Project: https://github.com/jakezatecky/react-dual-listbox
// Definitions by: Justin Hall <https://github.com/wKovacs64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

import * as React from 'react';

/**
 * A value-based option.
 */
export interface ValueOption<T> {
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
export interface CategoryOption<T> {
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
export type Option<T> = ValueOption<T> | CategoryOption<T>;

/**
 * A filter.
 */
export interface Filter<T> {
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
export interface CommonProperties<T> {
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
    alignActions?: 'top' | 'middle';
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
     * A key-value pairing of action icons and their React nodes.
     */
    icons?: {
        [k in
            | 'moveLeft'
            | 'moveAllLeft'
            | 'moveRight'
            | 'moveAllRight'
            | 'moveDown'
            | 'moveUp'
            | 'moveTop'
            | 'moveBottom']?: React.ReactNode;
    };
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
        [k in
            | 'availableFilterHeader'
            | 'availableHeader'
            | 'moveAllLeft'
            | 'moveAllRight'
            | 'moveLeft'
            | 'moveRight'
            | 'moveBottom'
            | 'moveDown'
            | 'moveUp'
            | 'moveTop'
            | 'noAvailableOptions'
            | 'noSelectedOptions'
            | 'selectedFilterHeader'
            | 'selectedHeader']?: string;
    };
    /**
     * A list of key codes that will trigger a toggle of the selected options.
     *
     * @default [13, 32]
     */
    moveKeyCodes?: number[];
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
export interface FilterProperties<T, F extends boolean> {
    /**
     * Flag that determines whether filtering is enabled.
     *
     * @default false
     */
    canFilter?: F;
    /**
     * Override the default filtering function.
     */
    filterCallback?: F extends true ? (option: Option<T>, filterInput: string) => boolean : undefined;
    /**
     * Override the default filter placeholder.
     */
    filterPlaceholder?: F extends true ? string : undefined;
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
export interface ValueProperties<T, V extends boolean> {
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
export interface DualListBoxProperties<P, F extends boolean, V extends boolean>
    extends CommonProperties<P>,
        FilterProperties<P, F>,
        ValueProperties<P, V> {}

/**
 * A feature-rich dual list box for React.
 *
 * The `DualListBox` is a controlled component, so you have to update the `selected` property in
 * conjunction with the `onChange` handler if you want the selected values to change.
 */
export default class DualListBox<P, F extends boolean = false, V extends boolean = true> extends React.Component<
    DualListBoxProperties<P, F, V>
> {}
