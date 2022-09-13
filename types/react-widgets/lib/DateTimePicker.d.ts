import { ComponentClass, FocusEvent, KeyboardEvent, ReactElement, ElementType } from "react";
import { ReactWidgetsCommonDropdownProps, AutoFocus } from "./CommonProps";

declare namespace DateTimePicker {
    type Open = false | "date" | "time";

    interface DateTimePickerProps extends ReactWidgetsCommonDropdownProps, AutoFocus {
        /**
         * Set the culture of the DateTimePicker, passed to the configured localizer.
         */
        culture?: string | undefined;
        /**
         * Whether to show the date picker button.
         * @default true
         * @deprecated Use `date` instead
         */
        calendar?: boolean | undefined;
        /**
         * Whether to show the time picker button.
         * @default true
         */
        time?: boolean | undefined;
        /**
         * A customize the rendering of times but providing a custom component.
         */
        timeComponent?: ElementType | string | undefined;
        /**
         * The minimum Date that can be selected. Min only limits selection, it doesn't constrain
         * the date values that can be typed or pasted into the widget. If you need this behavior
         * you can constrain values via the onChange handler.
         * @default Date(1900, 0, 1)
         */
        min?: Date | undefined;
        /**
         * The maximum Date that can be selected. Max only limits selection, it doesn't constrain
         * the date values that can be typed or pasted into the widget. If you need this behavior
         * you can constrain values via the onChange handler.
         * @default Date(2099, 11, 31)
         */
        max?: Date | undefined;
        /**
         * Default current date at which the calendar opens. If none is provided, opens at today's
         * date or the value date (if any).
         * @default Date()
         */
        currentDate?: Date | undefined;
        /**
         * Default current date
         */
        defaultCurrentDate?: Date | undefined;
        /**
         * Default value for current date. Useful for suggesting a date when the caldenar opens without keep forcing it once 'value' is set.
         */
        date?: boolean | undefined;
        /**
         * Specify the element used to render the calendar dropdown icon.
         */
        dateIcon?: JSX.Element | undefined;
        /**
         * Specify the element used to render the time list dropdown icon.
         */
        timeIcon?: JSX.Element | undefined;
        /**
         * Change event Handler that is called when the currentDate is changed. The handler is
         * called with the currentDate object.
         */
        onCurrentDateChange?: ((date?: Date) => void) | undefined;
        /**
         * A string format used to display the date value.
         */
        format?: string | undefined;
        /**
         * A string format to be used while the date input has focus. Useful for showing a simpler
         * format for inputing.
         */
        editFormat?: string | undefined;
        /**
         * A string format used by the time dropdown to render times.
         */
        timeFormat?: string | undefined;
        /**
         * The amount of minutes between each entry in the time list.
         */
        step?: number | boolean | undefined;
        /**
         * Determines how the widget parses the typed date string into a Date object. You can
         * provide an array of formats to try, or provide a function that returns a date to handle
         * parsing yourself. When parse is unspecified and the format prop is a String parse will
         * automatically use that format as its default
         */
        parse?: ((str: string) => Date | undefined) | string[] | string | undefined;
        /**
         * The starting and lowest level view the calendar can navigate down to.
         */
        initialView?: "month" | "year" | "decade" | "century" | undefined;
        /**
         * The highest level view the calendar can navigate up to. This value should be higher than
         * initialView.
         */
        finalView?: "month" | "year" | "decade" | "century" | undefined;
        /**
         * The current selected date, should be a Date instance or null.
         */
        value?: Date | undefined;
        /**
         * Default value.
         */
        defaultValue?: Date | undefined;
        /**
         * Change event Handler that is called when the value is changed. The handler is called with
         * both the current Date object (or null if it was not parseable), and the second argument
         * is a string representation of the date value, formated by the format prop.
         */
        onChange?: ((date?: Date, dateStr?: string) => void) | undefined;
        /**
         * The native onBlur event, called when focus leaves the DateTimePicker entirely.
         */
        onBlur?: ((e: FocusEvent) => void) | undefined;
        /**
         * The native onFocus event, called when focus enters the DateTimePicker.
         */
        onFocus?: ((e: FocusEvent) => void) | undefined;
        /**
         * The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts.
         */
        onKeyDown?: ((event: KeyboardEvent<any>) => void) | undefined;
        /**
         * The native onKeyPress event, called preventDefault will stop any custom behavior.
         */
        onKeyPress?: ((event: KeyboardEvent<any>) => void) | undefined;
        /**
         * This handler fires when an item has been selected from the list or calendar. It fires
         * before the onChange handler, and fires regardless of whether the value has actually
         * changed.
         */
        onSelect?: ((date?: Date) => void) | undefined;
        /**
         * Whether or not the DateTimePicker is open. When unset (undefined) the DateTimePicker will
         * handle the opening and closing internally.
         * @default false
         */
        open?: Open | undefined;
        /**
         * The defaultOpen prop can be used to set an
         * initialization value for uncontrolled widgets.
         */
        defaultOpen?: Open | undefined;
        /**
         * Called when the DateTimePicker is about to open or close. onToggle should be used when
         * the open prop is set otherwise the widget will never open or close.
         */
        onToggle?: ((isOpen: Open) => void) | undefined;
        /**
         * The speed, in milliseconds, of the either dropdown animation.
         */
        duration?: number | undefined;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: DateTimePickerMessages | undefined;
        /**
         * Text to display in the input when the value is empty.
         */
        placeholder?: string | undefined;
        /**
         * An object of props that is passed directly to the underlying input component.
         */
        inputProps?: object | undefined;
        /**
         * The HTML name attribute, passed directly to the input element.
         */
        name?: string | undefined;
        /**
         * A Transition component from react-transition-group v2.
         * The provided component will be used instead of the default SlideDownTransition for fully customizable animations.
         * The transition component is also injected with a dropUp prop indicating the direction it should open.
         */
        popupTransition?: ElementType | string | undefined;
        /**
         * Whether the Dropdown should be above the input field.
         */
        dropUp?: boolean | undefined;
        /**
         * Adds a css class to the input container element.
         */
        containerClassName?: string | undefined;
    }

    interface DateTimePickerMessages {
        /**
         * Title and screen reader text for the left arrow button.
         * @default "Select Date"
         */
        dateButton?: string | undefined;
        /**
         * Title and screen reader text for the right arrow button.
         * @default "Select Time"
         */
        timeButton?: string | undefined;
    }
}

interface DateTimePickerClass extends ComponentClass<DateTimePicker.DateTimePickerProps> {}
declare var DateTimePicker: DateTimePickerClass;
export = DateTimePicker;
