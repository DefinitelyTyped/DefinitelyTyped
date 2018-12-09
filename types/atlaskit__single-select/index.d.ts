// Type definitions for @atlaskit/single-select 4.0
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/src/master/
// Definitions by: Lee Standen <https://github.com/lstanden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode, SyntheticEvent } from 'react';

export default class SingleSelect extends Component<Props> {}
export class StatelessSelect extends Component<StatelessProps> {}

export interface Props {
    /** Subtle items do not have a background color. */
    appearance?: 'default' | 'subtle';
    /** Item to be selected on component mount. */
    defaultSelected?: ItemType;
    /** Sets whether the dropdown should be constrained to the width of its trigger */
    droplistShouldFitContainer?: boolean;
    /**
     * Sets whether the field should be selectable. If it is, the field will be
     * a text box, which will filter the items.
     */
    hasAutocomplete?: boolean;
    /** id property to be passed down to the html select component. */
    id?: string;
    /** message to show on the dialog when isInvalid is true */
    invalidMessage?: ReactNode;
    /** controls the top margin of the label component rendered. */
    isFirstChild?: boolean;
    /** Sets whether the select is selectable. Changes hover state. */
    isDisabled?: boolean;
    /** Sets whether the component should be open on mount. */
    isDefaultOpen?: boolean;
    /**
     * Sets whether form including select can be submitted without an option
     * being made.
     */
    isRequired?: boolean;
    /**
     * Set whether there is an error with the selection. Sets an orange border
     * and shows the warning icon.
     */
    isInvalid?: boolean;
    /**
     * An array of objects, each one of which must have an array of items, and
     * may have a heading. All items should have content and value properties, with
     * content being the displayed text.
     */
    items?: GroupType[];
    /** Label to be displayed above select. */
    label?: string;
    /** name property to be passed to the html select element. */
    name?: string;
    /**
     * Message to display in any group in items if there are no items in it,
     * including if there is one item that has been selected.
     */
    noMatchesFound?: string;
    /** Handler to be called when the filtered items changes. */
    onFilterChange?: (filter: string) => void;
    /**
     * Handler to be called when an item is selected. Called with an object that
     * has the item selected as a property on the object.
     */
    onSelected?: (item: ItemType) => void;
    /**
     * Handler called when the select is opened or closed. Called with an object
     * that has both the event, and the new isOpen state.
     */
    onOpenChange?: (
        change: { event: SyntheticEvent<any>; isOpen: boolean },
    ) => void;
    /** Text to be shown within the select when no item is selected. */
    placeholder?: string;
    /** Where the select dropdown should be displayed relative to the field position. */
    position?: string;
    /** Sets whether the field will become focused. */
    shouldFocus?: boolean;
    /** Sets whether the field should be constrained to the width of its trigger */
    shouldFitContainer?: boolean;
    /** Sets whether the droplist should flip its position when there is not enough space. */
    shouldFlip?: boolean;
    /** Set the max height of the dropdown list in pixels. */
    maxHeight?: number;
}

export interface StatelessProps extends Props {
    /** Value to be used when filtering the items. Compared against 'content'. */
    filterValue?: string;
    /** Sets whether the Select dropdown is open. */
    isOpen?: boolean;
    /**
     * Sets whether the field is loading data. The same property is used
     * for either initial fetch (when no options are available) as well for
     * subsequent loading of more options. The component reacts accordingly
     * based on the `items` provided.
     */
    isLoading?: boolean;
    /**
     * Message to be displayed when the component is set to its loading state.
     * The message might be displayed differently depending on whether or not
     * there are items already being rendered.
     */
    loadingMessage?: string;
    /** The selected item data */
    selectedItem?: ItemType;
}

export interface GroupType {
    heading?: string;
    items: ItemType[];
}

export interface ItemType {
    content?: ReactNode;
    description?: string;
    label?: string;
    tooltipDescription?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left';
    value?: string | number;
    filterValues?: string[];
    isDisabled?: boolean;
    isSelected?: boolean;
    elemBefore?: ReactNode;
}
