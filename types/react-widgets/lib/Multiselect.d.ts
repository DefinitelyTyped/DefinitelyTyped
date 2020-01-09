import { ComponentClass } from 'react';
import { ReactWidgetsCommonDropdownProps, AutoFocus } from "./CommonProps";

declare namespace Multiselect {
    interface MultiselectProps
        extends ReactWidgetsCommonDropdownProps,
            AutoFocus {
        /**
         * Enables the list option creation UI. onFilter will only the UI when actively filtering for a list item.
         * @default 'onFilter'
         */
        allowCreate?: boolean | "onFilter";
        /**
         * The current values of the Multiselect. The value should can null, or an array of
         * valueField values, or an array of objects (such as a few items in the data array)
         */
        value?: any[];
        /**
         * Default Value.
         */
        defaultValue?: any[];
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * an array of values.
         */
        onChange?: (
            dataItems: any[],
            metadata: {
                dataItem: any;
                action: "insert" | "remove";
                originalEvent?: any;
                lastValue?: any[];
                searchTerm?: string;
            }
        ) => void;
        /**
         * This handler fires when an item has been selected from the list. It fires before the
         * onChange handler, and fires regardless of whether the value has actually changed
         */
        onSelect?: (
            value: any,
            metadata: {
                originalEvent: any;
            }
        ) => void;
        /**
         * This handler fires when the user chooses to create a new tag, not in the data list. It is
         * up to the widget parent to implement creation logic, a common implementation is shown
         * below, where the new tag is selected and added to the data list.
         */
        onCreate?: (searchTerm: string) => void;
        /**
         * Provide an array of possible values for the Multiselect. If an array of objects is
         * provided you should use the valueField and textField props, to specify which object
         * properties comprise the value field (such as an id) and the field used to label the item.
         */
        data?: any[];
        /**
         * A dataItem field name for uniquely identifying items in the data list. A valueField is
         * required when the value prop is not itself a dataItem. A valueField is useful when
         * specifying the selected item, by its id instead of using the model as the value.
         * When a valueField is not provided, the Multiselect will use strict equality checks (===)
         * to locate the value in the data list.
         */
        valueField?: string;
        /**
         * Specify which data item field to display in the Multiselect and selected item. The
         * textField prop may also also used as to find an item in the list as you type. Providing
         * an accessor function allows for computed text values.
         */
        textField?: string | ((dataItem: any) => string);
        /**
         * This component is used to render each selected item. The default component renders the
         * text of the selected item (specified by textfield).
         */
        tagComponent?: React.ReactType | string;
        /**
         * An object of props that is passed directly to the underlying input component.
         */
        inputProps?: object;
        /**
         * This component is used to render each possible item in the list. The default component
         * renders the text of the selected item (specified by textfield).
         */
        itemComponent?: React.ReactType;
        /**
         * Determines how to group the Multiselect values. Providing a string will group the data
         * array by that property. You can also provide a 'function' which should return the group
         * value.
         */
        groupBy?: string | ((dataItem: any) => any);
        /**
         * This component is used to render each option group, when groupBy is specified. By default
         * the groupBy value will be used.
         */
        groupComponent?: React.ReactType;
        /**
         * The same as an input placeholder, only works in browsers that support the placeholder
         * attribute for inputs
         */
        placeholder?: string;
        /**
         * The string value of the current search being typed into the Multiselect. When unset
         * (undefined) the Multiselect will handle the filtering internally. The defaultSearchTerm
         * prop can be used to set an initialization value for uncontrolled widgets.
         */
        searchTerm?: string;
        /**
         * Called when the value of the text box changes either from typing or a pasted value.
         * onSearch should be used when the searchTerm prop is set.
         */
        onSearch?: (
            searchTerm: string,
            metadata: {
                action: "clear" | "input";
                lastSearchTerm?: string;
                originalEvent?: any;
            }
        ) => void;
        /**
         * Whether or not the Multiselect is open. When unset (undefined) the Multiselect will
         * handle the opening and closing internally. The defaultOpen prop can be used to set an
         * initialization value for uncontrolled widgets.
         */
        open?: boolean;
        /**
         * Called when the Multiselect is about to open or close. onToggle should be used when the
         * open prop is set otherwise the widget will never open or close.
         */
        onToggle?: (isOpen: boolean) => void;
        /**
         * Specify a filtering method used to reduce the items in the dropdown as you type. There
         * are a few built-in filtering methods that can be specified by passing the String name.
         * You can explicitly opt out of filtering by setting filter to false. To handle custom
         * filtering techniques provide a function that returns true or false for each passed in
         * item (analogous to the array.filter builtin)
         * @default startsWith
         */
        filter?:
            | false
            | "startsWith"
            | "endsWith"
            | "contains"
            | ((dataItem: any, searchTerm: string) => boolean);
        /**
         * Use in conjunction with the filter prop. Filter the list without regard for case. This
         * only applies to non function values for filter.
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
         * mark whether the widget is in a busy or loading state. If true the widget will display a
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
        messages?: MultiselectMessages;
        /**
         * @default List
         */
        listComponent?: React.ReactType | string;
        /**
         * An object of props that is passed directly to the underlying List component.
         */
        listProps?: object;
        /**
         * A Transition component from react-transition-group v2.
         * The provided component will be used instead of the default SlideDownTransition for fully customizable animations.
         * The transition component is also injected with a dropUp prop indicating the direction it should open.
         */
        popupTransition?: React.ReactType | string;

        /**
         * Adds a css class to the input container element.
         */
        containerClassName?: string;
    }

    interface MultiselectMessages {
        open?: string | ((props: MultiselectProps) => string);
        createOption?: string | ((props: MultiselectProps) => string);
        tagsLabel?: string | ((props: MultiselectProps) => string);
        selectedItems?: string | ((props: MultiselectProps) => string);
        noneSelected?: string | ((props: MultiselectProps) => string);
        removeLabel?: string | ((props: MultiselectProps) => string);
        /**
         * The text label for creating new tags.
         * @default "(create new tag)"
         */
        createNew?: string | ((props: MultiselectProps) => string);
        /**
         * Text to display when the data prop array is empty.
         * @default "There are no items in this list"
         */
        emptyList?: string | ((props: MultiselectProps) => string);
        /**
         * Text to display when the the current filter does not return any results.
         * @default "The filter returned no results"
         */
        emptyFilter?: string | ((props: MultiselectProps) => string);
    }
}

interface MultiselectClass extends ComponentClass<Multiselect.MultiselectProps> {}
declare var Multiselect: MultiselectClass;
export = Multiselect;
