import * as React from 'react';
import { ReactWidgetsCommonDropdownProps, AutoFocus } from './CommonProps';

interface DropdownListProps extends ReactWidgetsCommonDropdownProps<DropdownListClass>, AutoFocus {
    /**
     * The current value of the DropdownList. This can be an object (such as a member of the
     * data array) or a primitive value, hinted to by the valueField. The widget value does not
     * need to be in the data array; widgets can have values that are not in their list.
     */
    value?: any;
      /**
     * Default value.
     */
    defaultValue?: any;
    /**
     * Change event Handler that is called when the value is changed.
     */
    onChange?: (value: any) => void;
    /**
     * This handler fires when an item has been selected from the list. It fires before the
     * onChange handler, and fires regardless of whether the value has actually changed.
     */
    onSelect?: (value: any) => void;
    /**
     * The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts.
     */
    onKeyDown?: (event: KeyboardEvent) => void;
    /**
     * The native onKeyPress event, called preventDefault will stop any custom behavior.
     */
    onKeyPress?: (event: KeyboardEvent) => void;
    /**
     * Provide an array of possible values for the DropdownList. If an array of objects is
     * provided you should use the valueField and textField props, to specify which object
     * properties comprise the value field (such as an id) and the field used to label the item.
     */
    data?: any[];
    /**
     * Delay
     * @default 250
     */
    delay?: number;
    /**
     * A dataItem field name for uniquely identifying items in the data list. A valueField is
     * required when the value prop is not itself a dataItem. A valueField is useful when
     * specifying the selected item, by its id instead of using the model as the value.
     * When a valueField is not provided, the DropdownList will use strict equality checks (===)
     * to locate the value in the data list.
     */
    valueField?: string;
    /**
     * Specify which data item field to display in the DropdownList and selected item.
     * ThetextFieldprop may also also used as to find an item in the list as you type. Providing
     * an accessor function allows for computed text values
     */
    textField?: string | ((dataItem: any) => string);
    /**
     * This component is used to render the selected value of the DropdownList. The default
     * component renders the text of the selected item (specified by textfield)
     */
    valueComponent?: React.ReactType;
    /**
     * This component is used to render each possible item in the DropdownList. The default
     * component renders the text of the selected item (specified by textfield)
     */
    itemComponent?: React.ReactType | string;
    /**
     * Determines how to group the DropdownList. Providing a string will group the data array by
     * that property. You can also provide a function which should return the group value.
     */
    groupBy?: string | ((dataItem: any) => any);
    /**
     * This component is used to render each option group, when groupBy is specified. By default
     * the groupBy value will be used.
     */
    groupComponent?: React.ReactType;
    /**
     * Text to display when the value is empty.
     */
    placeholder?: string;
    /**
     * The string value of the current search being typed into the DropdownList. When unset
     * (undefined) the DropdownList will handle the filtering internally. The defaultSearchTerm
     * prop can be used to set an initialization value for uncontrolled widgets. searchTerm is
     * only relevant when the filter prop is set.
     */
    searchTerm?: string;
    /**
     * Called when the value of the filter input changes either from typing or a pasted value.
     * onSearch should be used when the searchTerm prop is set.
     */
    onSearch?: (searchTerm: string) => void;
    /**
     * Whether or not the DropdownList is open. When unset (undefined) the DropdownList will
     * handle the opening and closing internally.
     */
    open?: boolean;
    /**
     * The defaultOpen prop can be used to set an
     * initialization value for uncontrolled widgets.
     */
    defaultOpen?: boolean;
    /**
     * Called when the DropdownList is about to open or close. onToggle should be used when the
     * open prop is set otherwise the widget open buttons won't work.
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Specify a filtering method used to reduce the items in the dropdown as you type.
     * There are a few built-in filtering methods that can be specified by passing the String name.
     * To handle custom filtering techniques provide a function that returns true or false
     * for each passed in item (analogous to the array.filter builtin)
     * @enum false "startsWith" "endsWith" "contains"
     */
    filter?: boolean | "startsWith" | "endsWith" | "contains" | ((dataItem: any, str: string) => boolean);
    /**
     * Use in conjunction with the filter prop. Filter the list without regard for case. This
     * only applies to non function values for filter
     * @default false
     */
    caseSensitive?: boolean;
    /**
     * Use in conjunction with the filter prop. Start filtering the list only after the value
     * has reached a minimum length.
     * @default 1
     */
    minLength?: number;
    /**
     * Mark whether the widget is in a busy or loading state. If true the widget will display a
     * spinner gif, useful when loading data via an ajax call.
     * @default false
     */
    busy?: boolean;
    /**
     * The speed, in milliseconds, of the dropdown animation.
     * @default 250
     */
    duration?: number;
    /**
     * Object hash containing display text and/or text for screen readers. Use the messages
     * object to localize widget text and increase accessibility.
     */
    messages?: DropdownListMessages;
    listComponent?: React.ReactType | string;
    /**
     * An object of props that is passed directly to the underlying List component.
     */
    listProps?: object;
    /**
     * The HTML name attribute used to group checkboxes and radio buttons together.
     */
    name?: string;
    /**
     * Whether or not the SelectList allows multiple selection or not.
     * when false the SelectList will render as a list of radio buttons, and checkboxes when true.
     */
    multiple?: boolean;
}

interface DropdownListMessages {
    /**
     * Dropdown button text for screen readers.
     * @default: "Open Dropdown"
     */
    open?: string | ((props: DropdownListProps) => string);
    /**
     * The placeholder text for the filter input.
     */
    filterPlaceholder?: string | ((props: DropdownListProps) => string);
    /**
     * Text to display when the data prop array is empty.
     * @default: "There are no items in this list"
     */
    emptyList?: string | ((props: DropdownListProps) => string);
    /**
     * Text to display when the the current filter does not return any results.
     * @default: "The filter returned no results"
     */
    emptyFilter?: string | ((props: DropdownListProps) => string);
}

interface DropdownList extends React.ReactElement<DropdownListProps> {}
interface DropdownListClass extends React.ComponentClass<DropdownListProps> {}
declare var DropdownList: DropdownListClass;
export = DropdownList;
