// Type definitions for react-widgets v3.2.1
// Project: https://github.com/jquense/react-widgets
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

declare module 'react-widgets/lib/Combobox' {

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

    interface ComboBoxProps extends __React.Props<ComboBoxClass> {
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
        itemComponent?: __React.ReactType;
        /**
         * Disable the widget, if an Array of values is passed in only those values will be
         * disabled.
         */
        disabled?: boolean | any[];
        /**
         * Place the Combobox in a read-only mode, If an Array of values is passed in only those
         * values will be read-only.
         */
        readOnly?: boolean | any[];
        /**
         * Determines how to group the Combobox. Providing a string will group the data array by
         * that property. You can also provide a function which should return the group value.
         */
        groupBy?: string | ((dataItem: any) => any);
        /**
         * This component is used to render each option group, when groupBy is specified. By default
         * the groupBy value will be used.
         */
        groupComponent?: __React.ReactType;
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
         * mark whether the widget should render right-to-left. This property can also be implicitly
         * passed to the widget through a childContext prop (isRtl) this allows higher level
         * application components to specify the direction.
         */
        isRtl?: boolean;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: ComboBoxMessages;
    }

    interface ComboBox extends __React.ReactElement<ComboBoxProps> {}
    interface ComboBoxClass extends __React.ComponentClass<ComboBoxProps> {}
    var ComboBox: ComboBoxClass;
    export = ComboBox;
}

declare module 'react-widgets/lib/DateTimePicker' {

    interface DateTimePickerProps extends __React.Props<DateTimePickerClass> {
        /**
         * Whether to show the date picker button.
         * @default true
         */
        calendar?: boolean;
        /**
         * Whether to show the time picker button.
         * @default true
         */
        time?: boolean;
        /**
         * The minimum Date that can be selected. Min only limits selection, it doesn't constrain
         * the date values that can be typed or pasted into the widget. If you need this behavior
         * you can constrain values via the onChange handler.
         * @default Date(1900, 0, 1)
         */
        min?: Date;
        /**
         * The maximum Date that can be selected. Max only limits selection, it doesn't constrain
         * the date values that can be typed or pasted into the widget. If you need this behavior
         * you can constrain values via the onChange handler.
         * @default Date(2099, 11, 31)
         */
        max?: Date;
        /**
         * Default current date at which the calendar opens. If none is provided, opens at today's
         * date or the value date (if any).
         * @default Date()
         */
        currentDate?: Date;
        /**
         * Change event Handler that is called when the currentDate is changed. The handler is
         * called with the currentDate object.
         */
        onCurrentDateChange?: (date?: Date) => void;
        /**
         * A string format used to display the date value.
         */
        format?: string;
        /**
         * A string format to be used while the date input has focus. Useful for showing a simpler
         * format for inputing.
         */
        editFormat?: string;
        /**
         * A string format used by the time dropdown to render times.
         */
        timeFormat?: string;
        /**
         * The amount of minutes between each entry in the time list.
         */
        step?: number | boolean;
        /**
         * Determines how the widget parses the typed date string into a Date object. You can
         * provide an array of formats to try, or provide a function that returns a date to handle
         * parsing yourself. When parse is unspecified and the format prop is a String parse will
         * automatically use that format as its default
         */
        parse?: (str: string) => Date | string[];
        /**
         * The starting and lowest level view the calendar can navigate down to.
         * @enum "month" "year" "decade" "century"
         */
        initialView?: "month" | "year" | "decade" | "century";
        /**
         * The highest level view the calendar can navigate up to. This value should be higher than
         * initialView.
         * @enum "month" "year" "decade" "century"
         */
        finalView?: "month" | "year" | "decade" | "century";
        /**
         * The current selected date, should be a Date instance or null.
         */
        value?: Date;
        /**
         * Default value.
         */
        defaultValue?: Date;
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * both the current Date object (or null if it was not parseable), and the second argument
         * is a string representation of the date value, formated by the format prop.
         */
        onChange?: (date?: Date, dateStr?: string) => void;
        /**
         * This handler fires when an item has been selected from the list or calendar. It fires
         * before the onChange handler, and fires regardless of whether the value has actually
         * changed.
         */
        onSelect?: (date?: Date) => void;
        /**
         * Whether or not the DateTimePicker is open. When unset (undefined) the DateTimePicker will
         * handle the opening and closing internally. The defaultOpen prop can be used to set an
         * initialization value for uncontrolled widgets.
         * @enum false "calendar" "time"
         */
        open?: boolean | "calendar" | "time";
        /**
         * Called when the DateTimePicker is about to open or close. onToggle should be used when
         * the open prop is set otherwise the widget will never open or close.
         */
        onToggle?: (isOpen: boolean) => void;
        /**
         * The speed, in milliseconds, of the either dropdown animation.
         */
        duration?: number;
        /**
         * Mark whether the widget should render right-to-left. This property can also be implicitly
         * passed to the widget through a childContext prop (isRtl) this allows higher level
         * application components to specify the direction.
         */
        isRtl?: boolean;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: DateTimePickerMessages;
    }

    interface DateTimePickerMessages {
        /**
         * Title and screen reader text for the left arrow button.
         * @default "Select Date"
         */
        calendarButton?: string;
        /**
         * Title and screen reader text for the right arrow button.
         * @default "Select Time"
         */
        timeButton?: string;
    }

    interface DateTimePicker extends __React.ReactElement<DateTimePickerProps> {}
    interface DateTimePickerClass extends __React.ComponentClass<DateTimePickerProps> {}
    var DateTimePicker: DateTimePickerClass;
    export = DateTimePicker;
}

declare module 'react-widgets/lib/Multiselect' {
    interface MultiselectProps extends __React.Props<MultiselectClass> {
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
        onChange?: (values: any[]) => void;
        /**
         * This handler fires when an item has been selected from the list. It fires before the
         * onChange handler, and fires regardless of whether the value has actually changed
         */
        onSelect?: (value: any) => void;
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
        tagComponent?: __React.ReactType;
        /**
         * This component is used to render each possible item in the list. The default component
         * renders the text of the selected item (specified by textfield).
         */
        itemComponent?: __React.ReactType;
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
        groupComponent?: __React.ReactType;
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
        onSearch?: (searchTerm: string) => void;
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
         * @enum false "startsWith" "endsWith" "contains" function(String item)
         * @default startsWith
         */
        filter?: boolean | "startsWith" | "endsWith" | "contains" | ((dataItem: any, searchTerm: string) => boolean);
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
         * Disable the widget, If an Array of values is passed in only the tags specified will be
         * disabled.
         */
        disabled?: boolean | any[];
        /**
         * Place the widget in a readonly mode, If an Array of values is passed in only the tags
         * specified will be readonly.
         */
        readOnly?: boolean | any[];
        /**
         * Mark whether the widget should render right-to-left. This property can also be implicitly
         * passed to the widget through a childContext prop (isRtl) this allows higher level
         * application components to specify the direction.
         * @default false
         */
        isRtl?: boolean;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: MultiselectMessages;
    }

    interface MultiselectMessages {
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

    interface Multiselect extends __React.ReactElement<MultiselectProps> {}
    interface MultiselectClass extends __React.ComponentClass<MultiselectProps> {}
    var Multiselect: MultiselectClass;
    export = Multiselect;
}

declare module 'react-widgets/lib/NumberPicker' {
    interface NumberPickerProps extends __React.Props<NumberPickerClass>{
        /**
         * The current value of the NumberPicker.
         */
        value?: number;
        /**
         * Default Value.
         */
        defaultValue?: number;
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * the current numeric value or null.
         */
        onChange?: (value?: number) => void;
        /**
         * A format string used to display the number value. Localizer dependent, read localization
         * for more info.
         * @see http://jquense.github.io/react-widgets/docs/#i18n
         */
        format?: any;
        /**
         * Determines how the NumberPicker parses a number from the localized string representation.
         * You can also provide a parser Function to pair with a custom format.
         */
        parse?: string[] | ((str: string, culture: string) => number);
        /**
         * The minimum number that the NumberPicker value.
         * @default -Infinity
         */
        min?: number;
        /**
         * The maximum number that the NumberPicker value.
         * @default Infinity
         */
        max?: number;
        /**
         * Amount to increase or decrease value when using the spinner buttons.
         * @default 1
         */
        step?: number;
        /**
         * Specify how precise the value should be when typing, incrementing, or decrementing the
         * value. When empty, precision is parsed from the current format and culture.
         */
        precision?: number;
        /**
         * Mark whether the widget should render right-to-left. This property can also be implicitly
         * passed to the widget through a childContext prop (isRtl) this allows higher level
         * application components to specify the direction.
         * @default false
         */
        isRtl?: boolean;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: NumberPickerMessages;
    }

    interface NumberPickerMessages {
        /**
         * Number picker spinner up button text for screen readers.
         * @default "increment value"
         */
        increment?: string;
        /**
         * Number picker spinner down button text for screen readers.
         * @default "decrement value"
         */
        decrement?: string;
    }

    interface NumberPicker extends __React.ReactElement<NumberPickerProps> {}
    interface NumberPickerClass extends __React.ComponentClass<NumberPickerProps> {}
    var NumberPicker: NumberPickerClass;
    export = NumberPicker;
}

declare module 'react-widgets/lib/SelectList' {
    interface SelectListProps extends __React.Props<SelectListClass>{
        /**
         * The current value or values of the SelectList. This can be an object (such as a member of
         * the data array) or a primitive value, hinted to by the valueField. The widget value does
         * not need to be in the data array; widgets can have values that are not in their list.
         */
        value?: any | any[];
        /**
         * Default Value.
         */
        defaultValue?: any | any[];
        /**
         * Change event handler that is called when the value is changed. values will be an array
         * when multiple prop is set.
         */
        onChange?: (values: any | any[]) => void;
        /**
         * Provide an array of possible values for the SelectList. If an array of objects is
         * provided you should use the valueField and textField props, to specify which object
         * properties comprise the value field (such as an id) and the field used to label the item.
         */
        data?: any[];
        /**
         * A dataItem field name for uniquely identifying items in the data list. A valueField is
         * required when the value prop is not itself a dataItem. A valueField is useful when
         * specifying the selected item, by its id instead of using the model as the value.
         * When a valueField is not provided, the SelectList will use strict equality checks (===)
         * to locate the value in the data list.
         */
        valueField?: string;
        /**
         * Specify which data item field to display in the SelectList and selected item. The
         * textField prop may also also used as to find an item in the list as you type. Providing
         * an accessor function allows for computed text values.
         */
        textField?: string | ((dataItem: any) => string);
        /**
         * Whether or not the SelectList allows multiple selection or not. when false the SelectList
         * will render as a list of radio buttons, and checkboxes when true.
         */
        multiple?: boolean;
        /**
         * This component is used to render each item in the SelectList. The default component
         * renders the text of the selected item (specified by textfield)
         */
        itemComponent?: __React.ReactType;
        /**
         * Determines how to group the SelectList dropdown list. Providing a string will group the
         * data array by that property. You can also provide a 'function' which should return the
         * group value.
         */
        groupBy?: string | ((dataItem: any) => any);
        /**
         * This component is used to render each option group, when groupBy is specified. By default
         * the groupBy value will be used.
         */
        groupComponent?: __React.ReactType;
        /**
         * A handler called when focus shifts on the SelectList. Internally this is used to ensure
         * the focused item is in view. If you want to define your own "scrollTo" behavior or just
         * disable the default one specify an onMove handler. The handler is called with the
         * relevant DOM nodes needed to implement scroll behavior: the list element, the element
         * that is currently focused, and a focused value.
         */
        onMove?: (list: HTMLElement, focusedNode: HTMLElement, focusedItem: any) => void;
        /**
         * Mark whether the widget is in a busy or loading state. If true the widget will display a
         * spinner gif, useful when loading data via an ajax call.
         * @default false
         */
        busy?: boolean;
        /**
         * Disable the widget, if an Array of values is passed in only those values will be
         * disabled.
         */
        disabled?: boolean | any[];
        /**
         * Place the SelectList in a read-only mode, If an Array of values is passed in only those
         * values will be read-only.
         */
        readOnly?: boolean | any[];
        /**
         * Mark whether the SelectList should render right-to-left. This property can also be
         * implicitly passed to the widget through a childContext prop (isRtl) this allows higher
         * level application components to specify the direction.
         * @default false
         */
        isRtl?: boolean;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: SelectListMessages;
    }
    interface SelectListMessages {
        /**
         * @default: "There are no items in this list"
         */
        emptyList?: string | ((props: SelectListProps) => string)
    }

    interface SelectList extends __React.ReactElement<SelectListProps> {}
    interface SelectListClass extends __React.ComponentClass<SelectListProps> {}
    var SelectList: SelectListClass;
    export = SelectList;
}

declare module 'react-widgets/lib/Calendar' {
    interface CalendarProps extends __React.Props<CalendarClass>{
        /**
         * The current selected date, should be a Date object or null.
         */
        value?: Date;
        /**
         * Default value.
         */
        defaultValue?: Date;
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * the Date object
         */
        onChange?: (date?: Date) => void;
        /**
         * Callback fired when the Calendar navigates between views, or forward and backwards in
         * time.
         */
        onNavigate?: (date: Date, direction: string, view: string ) => void;
        /**
         * The minimum date that the Calendar can navigate from.
         */
        min?: Date;
        /**
         * The maximum date that the Calendar can navigate to.
         */
        max?: Date;
        /**
         * Default current date at which the calendar opens. If none is provided, opens at today's
         * date or the value date (if any).
         * @default Date()
         */
        currentDate?: Date;
        /**
         * Change event Handler that is called when the currentDate is changed. The handler is
         * called with the currentDate object.
         */
        onCurrentDateChange?: (date?: Date) => void;
        /**
         * Show or hide the Calendar footer.
         * @default false
         */
        footer?: boolean;
        /**
         * Provide a custom component to render the days of the month.
         * The Component is provided the following props
         * - date: a Date object for the day of the month to render
         * - label: a formatted String of the date to render. To adjust the format of the label
         *          string use the dateFormat prop, listed below.
         */
        dayComponent?: __React.ReactType;
        /**
         * The starting and lowest level view the calendar can navigate down to.
         * @enum "month" "year" "decade" "century"
         */
        initialView?: "month" | "year" | "decade" | "century";
        /**
         * The highest level view the calendar can navigate up to. This value should be higher than
         * initialView
         * @enum "month" "year" "decade" "century"
         */
        finalView?: "month" | "year" | "decade" | "century";
        /**
         * A formatter for the header button of the month view
         */
        headerFormat?: string | ((day: Date) => string);
        /**
         * A formatter for the Calendar footer, formats Today's Date as a string.
         */
        footerFormat?: string | ((day: Date) => string);
        /**
         * A formatter calendar days of the week, the default formats each day as a Narrow name:
         * "Mo", "Tu", etc.
         */
        dayFormat?: string | ((day: Date) => string);
        /**
         * A formatter for day of the month.
         */
        dateFormat?: string | ((day: Date) => string);
        /**
         * A formatter for month name.
         */
        monthFormat?: string | ((day: Date) => string);
        /**
         * A formatter for the year.
         */
        yearFormat?: string | ((day: Date) => string);
        /**
         * A formatter for decade, the default formats the first and last year of the decade like:
         * 2000 - 2009.
         */
        decadeFormat?: string | ((day: Date) => string);
        /**
         * A formatter for century, the default formats the first and last year of the century like:
         * 1900 - 1999.
         */
        centuryFormat?: string | ((day: Date) => string);
        /**
         * Mark whether the widget should render right-to-left. This property can also be implicitly
         * passed to the widget through a childContext prop (isRtl) this allows higher level
         * application components to specify the direction.
         */
        isRtl?: boolean;
        messages?: CalendarMessages;
    }

    interface CalendarMessages {
        /**
         * Title and screen reader text for the left arrow button.
         * @default: "navigate back"
         */
        moveBack?: string;
        /**
         * Title and screen reader text for the right arrow button.
         * @default: "navigate forward"
         */
        moveForward?: string;
    }

    interface Calendar extends __React.ReactElement<CalendarProps> {}
    interface CalendarClass extends __React.ComponentClass<CalendarProps> {}
    var Calendar: CalendarClass;
    export = Calendar;
}

declare module 'react-widgets/lib/DropdownList' {
    interface DropdownListProps extends __React.Props<DropdownListClass> {
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
         * Provide an array of possible values for the DropdownList. If an array of objects is
         * provided you should use the valueField and textField props, to specify which object
         * properties comprise the value field (such as an id) and the field used to label the item.
         */
        data?: any[];
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
        valueComponent?: __React.ReactType;
        /**
         * This component is used to render each possible item in the DropdownList. The default
         * component renders the text of the selected item (specified by textfield)
         */
        itemComponent?: __React.ReactType;
        /**
         * Disable the widget, if an Array of values is passed in only those values will be disabled.
         */
        disabled?: boolean | any[];
        /**
         * Place the DropdownList in a read-only mode, If an Array of values is passed in only those
         * values will be read-only.
         */
        readOnly?: boolean | any[];
        /**
         * Determines how to group the DropdownList. Providing a string will group the data array by
         * that property. You can also provide a function which should return the group value.
         */
        groupBy?: string | ((dataItem: any) => any);
        /**
         * This component is used to render each option group, when groupBy is specified. By default
         * the groupBy value will be used.
         */
        groupComponent?: __React.ReactType;
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
         * handle the opening and closing internally. The defaultOpen prop can be used to set an
         * initialization value for uncontrolled widgets.
         */
        open?: boolean;
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
         * Mark whether the widget should render right-to-left. This property can also be implicitly
         * passed to the widget through a childContext prop (isRtl) this allows higher level
         * application components to specify the direction.
         */
        isRtl?: boolean;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: DropdownListMessages;
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

    interface DropdownList extends __React.ReactElement<DropdownListProps> {}
    interface DropdownListClass extends __React.ComponentClass<DropdownListProps> {}
    var DropdownList: DropdownListClass;
    export = DropdownList;
}

declare module 'react-widgets' {
    export import Calendar = require('react-widgets/lib/Calendar');
    export import Combobox = require('react-widgets/lib/Combobox');
    export import DateTimePicker = require('react-widgets/lib/DateTimePicker');
    export import DropdownList = require('react-widgets/lib/DropdownList');
    export import Multiselect = require('react-widgets/lib/Multiselect');
    export import NumberPicker = require('react-widgets/lib/NumberPicker');
    export import SelectList = require('react-widgets/lib/SelectList');
}
