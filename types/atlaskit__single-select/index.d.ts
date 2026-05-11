import { Component, ReactNode, SyntheticEvent } from "react";

export default class SingleSelect extends Component<Props> {}
export class StatelessSelect extends Component<StatelessProps> {}

export interface Props {
    /** Subtle items do not have a background color. */
    appearance?: "default" | "subtle" | undefined;
    /** Item to be selected on component mount. */
    defaultSelected?: ItemType | undefined;
    /** Sets whether the dropdown should be constrained to the width of its trigger */
    droplistShouldFitContainer?: boolean | undefined;
    /**
     * Sets whether the field should be selectable. If it is, the field will be
     * a text box, which will filter the items.
     */
    hasAutocomplete?: boolean | undefined;
    /** id property to be passed down to the html select component. */
    id?: string | undefined;
    /** message to show on the dialog when isInvalid is true */
    invalidMessage?: ReactNode | undefined;
    /** controls the top margin of the label component rendered. */
    isFirstChild?: boolean | undefined;
    /** Sets whether the select is selectable. Changes hover state. */
    isDisabled?: boolean | undefined;
    /** Sets whether the component should be open on mount. */
    isDefaultOpen?: boolean | undefined;
    /**
     * Sets whether form including select can be submitted without an option
     * being made.
     */
    isRequired?: boolean | undefined;
    /**
     * Set whether there is an error with the selection. Sets an orange border
     * and shows the warning icon.
     */
    isInvalid?: boolean | undefined;
    /**
     * An array of objects, each one of which must have an array of items, and
     * may have a heading. All items should have content and value properties, with
     * content being the displayed text.
     */
    items?: GroupType[] | undefined;
    /** Label to be displayed above select. */
    label?: string | undefined;
    /** name property to be passed to the html select element. */
    name?: string | undefined;
    /**
     * Message to display in any group in items if there are no items in it,
     * including if there is one item that has been selected.
     */
    noMatchesFound?: string | undefined;
    /** Handler to be called when the filtered items changes. */
    onFilterChange?: ((filter: string) => void) | undefined;
    /**
     * Handler to be called when an item is selected. Called with an object that
     * has the item selected as a property on the object.
     */
    onSelected?: ((item: ItemType) => void) | undefined;
    /**
     * Handler called when the select is opened or closed. Called with an object
     * that has both the event, and the new isOpen state.
     */
    onOpenChange?:
        | ((
            change: { event: SyntheticEvent<any>; isOpen: boolean },
        ) => void)
        | undefined;
    /** Text to be shown within the select when no item is selected. */
    placeholder?: string | undefined;
    /** Where the select dropdown should be displayed relative to the field position. */
    position?: string | undefined;
    /** Sets whether the field will become focused. */
    shouldFocus?: boolean | undefined;
    /** Sets whether the field should be constrained to the width of its trigger */
    shouldFitContainer?: boolean | undefined;
    /** Sets whether the droplist should flip its position when there is not enough space. */
    shouldFlip?: boolean | undefined;
    /** Set the max height of the dropdown list in pixels. */
    maxHeight?: number | undefined;
}

export interface StatelessProps extends Props {
    /** Value to be used when filtering the items. Compared against 'content'. */
    filterValue?: string | undefined;
    /** Sets whether the Select dropdown is open. */
    isOpen?: boolean | undefined;
    /**
     * Sets whether the field is loading data. The same property is used
     * for either initial fetch (when no options are available) as well for
     * subsequent loading of more options. The component reacts accordingly
     * based on the `items` provided.
     */
    isLoading?: boolean | undefined;
    /**
     * Message to be displayed when the component is set to its loading state.
     * The message might be displayed differently depending on whether or not
     * there are items already being rendered.
     */
    loadingMessage?: string | undefined;
    /** The selected item data */
    selectedItem?: ItemType | undefined;
}

export interface GroupType {
    heading?: string | undefined;
    items: ItemType[];
}

export interface ItemType {
    content?: ReactNode | undefined;
    description?: string | undefined;
    label?: string | undefined;
    tooltipDescription?: string | undefined;
    tooltipPosition?: "top" | "bottom" | "left" | undefined;
    value?: string | number | undefined;
    filterValues?: string[] | undefined;
    isDisabled?: boolean | undefined;
    isSelected?: boolean | undefined;
    elemBefore?: ReactNode | undefined;
}
