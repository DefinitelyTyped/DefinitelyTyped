// Type definitions for react-dates v16.0.0
// Project: https://github.com/airbnb/react-dates
// Definitions by: Artur Ampilogov <https://github.com/Artur-A> 
//                 Nathan Holland <https://github.com/NathanNZ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";
import * as moment from "moment";

export = ReactDates;

declare namespace momentPropTypes {
    type momentObj = moment.Moment;
    type momentString = any;
    type momentDurationObj = any;
}


declare namespace ReactDates {
    type AnchorDirectionShape = 'left' | 'right';
    type FocusedInputShape = 'startDate' | 'endDate';
    type OrientationShape = 'horizontal' | 'vertical';
    type ScrollableOrientationShape = 'horizontal' | 'vertical' | 'verticalScrollable';
    type CalendarInfoPositionShape = 'top' | 'bottom' | 'before' | 'after';

    //https://github.com/airbnb/react-dates/blob/v16.0.1/src/defaultPhrases.js
    type SingleDatePickerPhrases  = {
        closeDatePicker: string,
        clearDate: string,
        jumpToPrevMonth: string,
        jumpToNextMonth: string,
        keyboardShortcuts: string,
        showKeyboardShortcutsPanel: string,
        hideKeyboardShortcutsPanel: string,
        openThisPanel: string,
        enterKey: string,
        leftArrowRightArrow: string,
        upArrowDownArrow: string,
        pageUpPageDown: string,
        homeEnd: string,
        escape: string,
        questionMark: string,
        selectFocusedDate: string,
        moveFocusByOneDay: string,
        moveFocusByOneWeek: string,
        moveFocusByOneMonth: string,
        moveFocustoStartAndEndOfWeek: string,
        returnFocusToInput: string,
        keyboardNavigationInstructions: string,
        chooseAvailableDate: (date: string) => string,
        dateIsUnavailable: (date: string) => string,
    };

    //https://github.com/airbnb/react-dates/blob/v16.0.1/src/defaultPhrases.js
    type DateRangePickerPhrases = {
        calendarLabel?: string,
        jumpToPrevMonth?: string,
        jumpToNextMonth?: string,
        keyboardShortcuts?: string,
        showKeyboardShortcutsPanel?: string,
        hideKeyboardShortcutsPanel?: string,
        openThisPanel?: string,
        enterKey?: string,
        leftArrowRightArrow?: string,
        upArrowDownArrow?: string,
        pageUpPageDown?: string,
        homeEnd?: string,
        escape?: string,
        questionMark?: string,
        selectFocusedDate?: string,
        moveFocusByOneDay?: string,
        moveFocusByOneWeek?: string,
        moveFocusByOneMonth?: string,
        moveFocustoStartAndEndOfWeek?: string,
        returnFocusToInput?: string,
        chooseAvailableStartDate?: (date: string) => string,
        chooseAvailableEndDate?: (date: string) => string,
        chooseAvailableDate?: (date: string) => string,
        dateIsUnavailable?: (date: string) => string,
        dateIsSelected?: (date: string) => string
    };
    
    //https://github.com/airbnb/react-dates/blob/v16.0.1/src/shapes/DateRangePickerShape.js
    interface DateRangePickerShape {
        // REQUIRED props
        startDate: momentPropTypes.momentObj | null,
        endDate: momentPropTypes.momentObj | null,
        onDatesChange: (arg: {
            startDate: momentPropTypes.momentObj | null,
            endDate: momentPropTypes.momentObj | null
        }
        ) => void,
        focusedInput: FocusedInputShape | null,
        onFocusChange: (arg: FocusedInputShape | null) => void,

        // input related props
        startDateId?: string,
        startDatePlaceholderText?: string,
        endDateId?: string,
        endDatePlaceholderText?: string,
        disabled?: boolean,
        keepFocusOnInput?: boolean,
        required?: boolean,
        readOnly?: boolean,
        screenReaderInputMessage?: string,
        showClearDates?: boolean,
        showDefaultInputIcon?: boolean,
        customInputIcon?: string | JSX.Element,
        customArrowIcon?: string | JSX.Element,
        customCloseIcon?: string | JSX.Element,
        noBorder?: boolean,
        block?: boolean,

        // calendar presentation and interaction related props
        renderMonth?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        orientation?: OrientationShape,
        anchorDirection?: AnchorDirectionShape,
        horizontalMargin?: number,
        withPortal?: boolean,
        withFullScreenPortal?: boolean,
        initialVisibleMonth?: () => momentPropTypes.momentObj,
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
        numberOfMonths?: number,
        keepOpenOnDateSelect?: boolean,
        reopenPickerOnClearDates?: boolean,
        renderCalendarInfo?: () => (string | JSX.Element),
        hideKeyboardShortcutsPanel?: boolean,
        daySize?: number,
        isRTL?: boolean,

        // navigation related props
        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,
        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onClose?: (final: { startDate: momentPropTypes.momentObj, endDate: momentPropTypes.momentObj }) => void,
        transitionDuration?: number,

        // day presentation and interaction related props
        renderCalendarDay?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        renderDayContents?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        minimumNights?: number,
        enableOutsideDays?: boolean,
        isDayBlocked?: (day: any) => boolean,
        isOutsideRange?: (day: any) => boolean,
        isDayHighlighted?: (day: any) => boolean,


        // internationalization props
        displayFormat?: (string | (() => string)),
        monthFormat?: string,
        weekDayFormat?: string,
        phrases?: DateRangePickerPhrases
    }

    type DateRangePicker = React.ClassicComponentClass<DateRangePickerShape>;
    var DateRangePicker: React.ClassicComponentClass<DateRangePickerShape>;

    //https://github.com/airbnb/react-dates/blob/v16.0.1/src/shapes/SingleDatePickerShape.js
    interface SingleDatePickerShape {
        // REQUIRED props
        date: momentPropTypes.momentObj | null,
        onDateChange: (date: momentPropTypes.momentObj | null) => void,
        focused: boolean,
        onFocusChange: (arg: { focused: boolean | null }) => void,

        id: string,

        // input related props
        placeholder?: string,
        disabled?: boolean,
        required?: boolean,
        readOnly?: boolean,
        screenReaderInputMessage?: string,
        showClearDate?: boolean,
        customCloseIcon?: string | JSX.Element,
        showDefaultInputIcon?: boolean,
        customInputIcon?: string | JSX.Element,
        noBorder?: boolean,
        block?: boolean,
        small?: boolean,
        regular?: boolean,
        keepFocusOnInput?: boolean,

        // calendar presentation and interaction related props
        renderMonth?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        orientation?: OrientationShape,
        anchorDirection?: AnchorDirectionShape,
        horizontalMargin?: number,
        withPortal?: boolean,
        withFullScreenPortal?: boolean,
        initialVisibleMonth?: () => momentPropTypes.momentObj,
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
        numberOfMonths?: number,
        keepOpenOnDateSelect?: boolean,
        reopenPickerOnClearDates?: boolean,
        renderCalendarInfo?: () => (string | JSX.Element),
        hideKeyboardShortcutsPanel?: boolean,
        daySize?: number,
        isRTL?: boolean,
        verticalSpacing?: number,
        verticalHeight?: number | null,

        // navigation related props
        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,
        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onClose?: (final: { startDate: momentPropTypes.momentObj, endDate: momentPropTypes.momentObj }) => void,
        transitionDuration?: number,

        // day presentation and interaction related props
        renderCalendarDay?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        renderDayContents?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        enableOutsideDays?: boolean,
        isDayBlocked?: (day: any) => boolean,
        isOutsideRange?: (day: any) => boolean,
        isDayHighlighted?: (day: any) => boolean,

        // internationalization props
        displayFormat?: (string | (() => string)),
        monthFormat?: string,
        phrases?: SingleDatePickerPhrases
    }
    type SingleDatePicker = React.ClassicComponentClass<SingleDatePickerShape>;
    var SingleDatePicker: React.ClassicComponentClass<SingleDatePickerShape>;

    //https://github.com/airbnb/react-dates/blob/v16.0.1/src/components/DayPickerRangeController.jsx
    interface DayPickerRangeControllerShape {
        // REQUIRED props
        startDate: momentPropTypes.momentObj | null,
        endDate: momentPropTypes.momentObj | null,
        onDatesChange: (arg: {
            startDate: momentPropTypes.momentObj | null,
            endDate: momentPropTypes.momentObj | null
        }
        ) => void,
        focusedInput: FocusedInputShape | null,
        onFocusChange: (arg: FocusedInputShape | null) => void,

        // calendar presentation and interaction related props
        enableOutsideDays?: boolean,
        numberOfMonths?: number,
        orientation?: ScrollableOrientationShape,
        withPortal?: boolean,
        initialVisibleMonth?: () => momentPropTypes.momentObj,
        renderCalendarInfo?: () => (string | JSX.Element),
        onOutsideClick?: (e: any) => void,
        keepOpenOnDateSelect?: boolean,
        hideKeyboardShortcutsPanel?: boolean;
        noBorder?: boolean,
        verticalBorderSpacing?: number,
        firstDayOfWeek? : 0 | 1 | 2 | 3 | 4 | 5 | 6,

        // navigation related props
        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,
        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        transitionDuration?: number,

        // day presentation and interaction related props
        daySize?: number,
        renderCalendarDay?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        renderDayContents?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        minimumNights?: number,
        isOutsideRange?: (day: any) => boolean,
        isDayBlocked?: (day: any) => boolean,
        isDayHighlighted?: (day: any) => boolean,

        // internationalization props
        monthFormat?: string,
        phrases?: DateRangePickerPhrases
    }

    type DayPickerRangeController = React.ClassicComponentClass<DayPickerRangeControllerShape>;
    var DayPickerRangeController: React.ClassicComponentClass<DayPickerRangeControllerShape>;

    //https://github.com/airbnb/react-dates/blob/97bf16e72dbf5ce88f0181c49212080061a83f69/src/components/DayPickerSingleDateController.jsx
    interface DayPickerSingleDateControllerShape {
        date: momentPropTypes.momentObj | null,
        onDateChange: (date: momentPropTypes.momentObj | null) => void,
        focused: boolean,

        onFocusChange: (arg: { focused: boolean | null }) => void,
        onClose?: (final: { date: momentPropTypes.momentObj }) => void,

        keepOpenOnDateSelect?: boolean,
        isOutsideRange?: (day: any) => boolean,
        isDayBlocked?: (day: any) => boolean,
        isDayHighlighted?: (day: any) => boolean,

        // DayPicker props
        renderMonth?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        enableOutsideDays?: boolean,
        numberOfMonths?: number,
        orientation?: ScrollableOrientationShape,
        withPortal?: boolean,
        initialVisibleMonth?: () => momentPropTypes.momentObj,
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
        hideKeyboardShortcutsPanel?: boolean,
        daySize?: number,
        verticalHeight?: number,
        noBorder?: boolean,
        transitionDuration?: number,

        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,

        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void,
        onOutsideClick?: (e: any) => void,
        renderCalendarDay?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        renderDayContents?: (day: momentPropTypes.momentObj) => (string | JSX.Element),
        renderCalendarInfo?: () => (string | JSX.Element),
        calendarInfoPosition?: CalendarInfoPositionShape,

        // accessibility
        onBlur?: () => void,
        isFocused?: boolean,
        showKeyboardShortcuts?: boolean,

        // i18n
        monthFormat?: string,
        weekDayFormat?: string,
        phrases?: SingleDatePickerPhrases,
        dayAriaLabelFormat?: string,

        isRTL?: boolean,

    }

    type DayPickerSingleDateController = React.ClassicComponentClass<DayPickerSingleDateControllerShape>;
    var DayPickerSingleDateController: React.ClassicComponentClass<DayPickerSingleDateControllerShape>;

    var isInclusivelyAfterDay: (a: moment.Moment, b: moment.Moment) => boolean;
    var isInclusivelyBeforeDay: (a: moment.Moment, b: moment.Moment) => boolean;
    var isNextDay: (a: moment.Moment, b: moment.Moment) => boolean;
    var isSameDay: (a: moment.Moment, b: moment.Moment) => boolean;

    var toISODateString: (date: moment.MomentInput, currentFormat: moment.MomentFormatSpecification) => string | null;
    var toLocalizedDateString: (date: moment.MomentInput, currentFormat: moment.MomentFormatSpecification) => string | null;

    var toMomentObject: (dateString: moment.MomentInput, customFormat: moment.MomentFormatSpecification) => moment.Moment | null;
}
