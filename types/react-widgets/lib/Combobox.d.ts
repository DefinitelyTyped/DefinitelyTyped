import * as React from 'react';
import {ReactWidgetsCommonDropdownProps} from './CommonProps';

interface ComboBoxMessages {
    /**
     * Combobox button text for screen readers
     */
    open: string | ((props: ComboBoxProps) => string);
    /**
     * text to display when the data prop array is empty
     */
    emptyList: string | ((props: ComboBoxProps) => string);
    /**
     * text to display when the the current filter does not return any results
     */
    emptyFilter: string | ((props: ComboBoxProps) => string);
}

interface ComboBoxProps extends ReactWidgetsCommonDropdownProps<ComboBoxClass> {
    /**
     * The current value of the Combobox. This can be an object (such as a member of the data
     * array) or a primitive value, hinted to by the valueField. The widget value does not need
     * to be in the data, widgets can have values that are not in their list.
     */
    value?: any;
    /**
     * Default value.
     */
    defaultValue?: any;
    /**
     * Called when the value is changed. If the value is one of the data members that item will
     * be returned. In the case of a value not being found in the data array the string value of
     * the Combobox will be returned.
     */
    onChange?: (value: any) => void;
    /**
     * This handler fires when an item has been selected from the list. It fires before the
     * onChange handler, and fires regardless of whether the value has actually changed.
     */
    onSelect?: (value: any) => void;
    /**
     * An array of possible values for the Combobox. If an array of objects is provided you
     * should use the valueField and textField props, to specify which object properties
     * comprise the value field (such as an id) and the field used to label the item.
     */
    data?: any[];
    /**
     * A dataItem field name for uniquely identifying items in the data list. A valueField is
     * required when the value prop is not itself a dataItem. A valueField is useful when
     * specifying the selected item, by its id instead of using the model as the value. When a
     * valueField is not provided, the Combobox will use strict equality checks (===) to locate
     * the value in the data list.
     */
    valueField?: string;
    /**
     * Specify which data item field to display in the Combobox and selected item. The
     * textField` prop may also also used as to find an item in the list as you type. Providing
     * an accessor function allows for computed text values
     */
    textField?: string | ((dataItem: any) => string);
    /**
     * This component is used to render each possible item in the Combobox. The default
     * component renders the text of the selected item (specified by textfield)
     */
    itemComponent?: React.ReactType;
    /**
     * Determines how to group the Combobox. Providing a string will group the data array by
     * that property. You can also provide a function which should return the group value.
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
     * When true the Combobox will suggest, or fill in, values as you type. The suggestions are
     * always "startsWith", meaning it will search from the start of the textField property
     */
    suggest?: boolean;
    /**
     * Specify a filtering method used to reduce the items in the dropdown as you type. It can
     * be used in conjunction with the suggest prop or instead of it. There are a few built-in
     * filtering methods that can be specified by passing the String name. You can explicitly
     * opt out of filtering by setting filter to false To handle custom filtering techniques
     * provide a function that returns true or false for each passed in item (analogous to the
     * array.filter builtin) Acceptable values for filter are: false "startsWith" "endsWith"
     * "contains" function(String item)
     */
    filter?: boolean | string | ((dataItem: any, searchItem: any) => boolean);
    /**
     * Use in conjunction with the filter prop. Filter the list without regard for case. This
     * only applies to non function values for filter
     */
    caseSensitive?: boolean;
    /**
     * Use in conjunction with the filter prop. Start filtering the list only after the value
     * has reached a minimum length.
     */
    minLength?: number;
    /**
     * Whether or not the Combobox is open. When unset (undefined) the Combobox will handle the
     * opening and closing internally. The defaultOpen prop can be used to set an initialization
     * value for uncontrolled widgets.
     */
    open?: boolean;
    /**
     * Called fires when the Combobox is about to open or close. onToggle should be used when
     * the open prop is set otherwise the widget will never open or close.
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Mark whether the widget is in a busy or loading state. If true the widget will display a
     * spinner gif, useful when loading data via an ajax call.
     */
    busy?: boolean;
    /**
     * The speed, in milliseconds, of the dropdown animation.
     */
    duration?: number;
    /**
     * Object hash containing display text and/or text for screen readers. Use the messages
     * object to localize widget text and increase accessibility.
     */
    messages?: ComboBoxMessages;
}

interface ComboBox extends React.ReactElement<ComboBoxProps> {}
interface ComboBoxClass extends React.ComponentClass<ComboBoxProps> {}
declare var ComboBox: ComboBoxClass;
export = ComboBox;
