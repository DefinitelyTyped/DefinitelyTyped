import * as React from 'react';
import { ReactWidgetsCommonDropdownProps, AutoFocus } from './CommonProps';
import { KeyboardEvent } from 'react';

interface DateTimePickerProps extends ReactWidgetsCommonDropdownProps<DateTimePickerClass>, AutoFocus {
    /**
     * Set the culture of the DateTimePicker, passed to the configured localizer.
     */
    culture?: string;
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
     * A customize the rendering of times but providing a custom component.
     */
    timeComponent?: React.ReactType | string;
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
     * Enable the calendar component of the picker.
     */
    date?: boolean;
    /*
     * Default value for current date. Useful for suggesting a date when the caldenar opens without keep forcing it once 'value' is set.
     */
    defaultCurrentDate?: Date;
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
     * The native onBlur event, called when focus leaves the DateTimePicker entirely.
     */
    onBlur?: () => void;
    /**
     * The native onFocus event, called when focus enters the DateTimePicker.
     */
    onFocus?: () => void;
    /**
     * The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts.
     */
    onKeyDown?: (event: KeyboardEvent<any>) => void;
    /**
     * The native onKeyPress event, called preventDefault will stop any custom behavior.
     */
    onKeyPress?: (event: KeyboardEvent<any>) => void;
    /**
     * This handler fires when an item has been selected from the list or calendar. It fires
     * before the onChange handler, and fires regardless of whether the value has actually
     * changed.
     */
    onSelect?: (date?: Date) => void;
    /**
     * Whether or not the DateTimePicker is open. When unset (undefined) the DateTimePicker will
     * handle the opening and closing internally.
     * @enum false "date" "time"
     * @default false
     */
    open?: boolean | "date" | "time";
    /**
     * The defaultOpen prop can be used to set an
     * initialization value for uncontrolled widgets.
     * @enum false "calendar" "time"
     */
    defaultOpen?: boolean | "calendar" | "time";
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
     * Object hash containing display text and/or text for screen readers. Use the messages
     * object to localize widget text and increase accessibility.
     */
    messages?: DateTimePickerMessages;
    /**
    * Text to display in the input when the value is empty.
    */
    placeholder?: string;
    /**
     * An object of props that is passed directly to the underlying input component.
     */
    inputProps?: object;
    /**
     * The HTML name attribute, passed directly to the input element.
     */
    name?: string;
    /**
     * A Transition component from react-transition-group v2.
     * The provided component will be used instead of the default SlideDownTransition for fully customizable animations.
     * The transition component is also injected with a dropUp prop indicating the direction it should open.
     */
    popupTransition?: React.ReactType | string;
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

interface DateTimePicker extends React.ReactElement<DateTimePickerProps> {}
interface DateTimePickerClass extends React.ComponentClass<DateTimePickerProps> {}
declare var DateTimePicker: DateTimePickerClass;
export = DateTimePicker;
