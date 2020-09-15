// Type definitions for react-dates v17.1.0
// Project: https://github.com/airbnb/react-dates
// Definitions by: Artur Ampilogov <https://github.com/ArturAmpilogov>
//                 Nathan Holland <https://github.com/NathanNZ>
//                 Chris Griebel <https://github.com/cgriebel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// Required fields are made according to 'minimum REQUIRED setup' in https://github.com/airbnb/react-dates/blob/master/README.md

import * as React from 'react';
import * as moment from 'moment';

export = ReactDates;

declare namespace momentPropTypes {
    type momentObj = moment.Moment;
    type momentString = any;
    type momentDurationObj = any;
}

declare namespace ReactDates {
    // SHAPES
    //
    // shapes/AnchorDirectionShape.js
    type AnchorDirectionShape = 'left' | 'right';

    // shapes/CalendarInfoPositionShape.js
    type CalendarInfoPositionShape = 'top' | 'bottom' | 'before' | 'after';

    // shapes/NavPositionShape.js
    type NavPositionShape = 'navPositionTop' | 'navPositionBottom';

    // shapes/DateRangePickerShape.js
    interface DateRangePickerShape {
        // required props for a functional interactive DateRangePicker
        startDate: momentPropTypes.momentObj | null;
        startDateId: string;
        endDate: momentPropTypes.momentObj | null;
        endDateId: string;
        focusedInput: FocusedInputShape | null;

        onDatesChange: (
            arg: {
                startDate: momentPropTypes.momentObj | null;
                endDate: momentPropTypes.momentObj | null;
            }
        ) => void;
        onFocusChange: (arg: FocusedInputShape | null) => void;

        onClose?: (
            final: {
                startDate: momentPropTypes.momentObj;
                endDate: momentPropTypes.momentObj;
            }
        ) => void;

        // input related props
        startDatePlaceholderText?: string;
        endDatePlaceholderText?: string;
        disabled?: DisabledShape;
        required?: boolean;
        readOnly?: boolean;
        screenReaderInputMessage?: string;
        showClearDates?: boolean;
        showDefaultInputIcon?: boolean;
        inputIconPosition?: IconPositionShape;
        customInputIcon?: string | JSX.Element;
        customArrowIcon?: string | JSX.Element;
        customCloseIcon?: string | JSX.Element;
        noBorder?: boolean;
        block?: boolean;
        small?: boolean;
        regular?: boolean;
        keepFocusOnInput?: boolean;
        // calendar presentation and interaction related props
        renderMonthText?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        renderMonthElement?: (
            props: {
                month: momentPropTypes.momentObj;
                onMonthSelect: (currentMonth: momentPropTypes.momentObj, newMonthVal: string) => void;
                onYearSelect: (currentMonth: momentPropTypes.momentObj, newYearVal: string) => void;
                isVisible: boolean;
            }
        ) => string | JSX.Element;
        orientation?: OrientationShape;
        anchorDirection?: AnchorDirectionShape;
        openDirection?: OpenDirectionShape;
        horizontalMargin?: number;
        withPortal?: boolean;
        withFullScreenPortal?: boolean;
        appendToBody?: boolean;
        disableScroll?: boolean;
        daySize?: number;
        isRTL?: boolean;
        firstDayOfWeek?: DayOfWeekShape;
        initialVisibleMonth?: () => momentPropTypes.momentObj;
        numberOfMonths?: number;
        keepOpenOnDateSelect?: boolean;
        reopenPickerOnClearDates?: boolean;
        renderCalendarInfo?: () => string | JSX.Element;
        calendarInfoPosition?: CalendarInfoPositionShape;
        hideKeyboardShortcutsPanel?: boolean;
        verticalHeight?: number;
        transitionDuration?: number;
        horizontalMonthPadding?: number;
        verticalSpacing?: number;

        // navigation related props
        dayPickerNavigationInlineStyles?: Record<string, any>;
        navPosition?: NavPositionShape;
        navPrev?: string | JSX.Element;
        navNext?: string | JSX.Element;
        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void;
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void;

        // day presentation and interaction related props
        renderCalendarDay?: (props: CalendarDayShape) => JSX.Element;
        renderDayContents?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        minimumNights?: number;
        minDate?: momentPropTypes.momentObj;
        maxDate?: momentPropTypes.momentObj;
        enableOutsideDays?: boolean;
        isDayBlocked?: (day: any) => boolean;
        isOutsideRange?: (day: any) => boolean;
        isDayHighlighted?: (day: any) => boolean;

        // internationalization props
        displayFormat?: string | (() => string);
        monthFormat?: string;
        weekDayFormat?: string;
        phrases?: DateRangePickerPhrases;
        dayAriaLabelFormat?: string;
    }

    // shapes/DayOfWeekShape.js
    type DayOfWeekShape = 0 | 1 | 2 | 3 | 4 | 5 | 6;

    // shapes/DisabledShape.js
    type DisabledShape = boolean | 'startDate' | 'endDate';

    // shapes/FocusedInputShape.js
    type FocusedInputShape = 'startDate' | 'endDate';

    // shape/IconPositionShape.js
    type IconPositionShape = 'before' | 'after';

    // shape/ModifiersShape.js
    type ModifiersShape = Set<string>;

    // shape/OpenDirectionShape.js
    type OpenDirectionShape = 'down' | 'up';

    // shape/OrientationShape.js
    type OrientationShape = 'horizontal' | 'vertical';

    // shape/ScrollableOrientationShape.js
    type ScrollableOrientationShape = 'horizontal' | 'vertical' | 'verticalScrollable';

    // shapes/SingleDatePickerShape.js
    interface SingleDatePickerShape {
        id: string;

        // required props for a functional interactive SingleDatePicker
        date: momentPropTypes.momentObj | null;
        focused: boolean | null;

        onDateChange: (date: momentPropTypes.momentObj | null) => void;
        onFocusChange: (arg: { focused: boolean | null }) => void;

        // input related props
        placeholder?: string;
        disabled?: boolean;
        required?: boolean;
        readOnly?: boolean;
        screenReaderInputMessage?: string;
        showClearDate?: boolean;
        customCloseIcon?: string | JSX.Element;
        showDefaultInputIcon?: boolean;
        inputIconPosition?: IconPositionShape;
        customInputIcon?: string | JSX.Element;
        noBorder?: boolean;
        block?: boolean;
        small?: boolean;
        regular?: boolean;
        verticalSpacing?: number;
        keepFocusOnInput?: boolean;

        // calendar presentation and interaction related props
        renderMonthText?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        renderMonthElement?: (
            props: {
                month: momentPropTypes.momentObj;
                onMonthSelect: (currentMonth: momentPropTypes.momentObj, newMonthVal: string) => void;
                onYearSelect: (currentMonth: momentPropTypes.momentObj, newYearVal: string) => void;
                isVisible: boolean;
            }
        ) => string | JSX.Element;
        orientation?: OrientationShape;
        anchorDirection?: AnchorDirectionShape;
        openDirection?: OpenDirectionShape;
        horizontalMargin?: number;
        withPortal?: boolean;
        withFullScreenPortal?: boolean;
        appendToBody?: boolean;
        disableScroll?: boolean;
        initialVisibleMonth?: () => momentPropTypes.momentObj;
        firstDayOfWeek?: DayOfWeekShape;
        numberOfMonths?: number;
        keepOpenOnDateSelect?: boolean;
        reopenPickerOnClearDate?: boolean;
        renderCalendarInfo?: () => string | JSX.Element;
        calendarInfoPosition?: CalendarInfoPositionShape;
        hideKeyboardShortcutsPanel?: boolean;
        daySize?: number;
        isRTL?: boolean;
        verticalHeight?: number | null;
        transitionDuration?: number;
        horizontalMonthPadding?: number;

        // navigation related props
        dayPickerNavigationInlineStyles?: Record<string, any>;
        navPosition?: NavPositionShape;
        navPrev?: string | JSX.Element;
        navNext?: string | JSX.Element;
        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void;
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void;
        onClose?: (
            final: {
                date: momentPropTypes.momentObj;
            }
        ) => void;

        // day presentation and interaction related props
        renderCalendarDay?: (props: CalendarDayShape) => JSX.Element;
        renderDayContents?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        enableOutsideDays?: boolean;
        isDayBlocked?: (day: any) => boolean;
        isOutsideRange?: (day: any) => boolean;
        isDayHighlighted?: (day: any) => boolean;

        // internationalization props
        displayFormat?: string | (() => string);
        monthFormat?: string;
        weekDayFormat?: string;
        phrases?: SingleDatePickerPhrases;
        dayAriaLabelFormat?: string;
    }

    // PHRASES
    type PhraseArg = {
        date: string;
    }

    // defaultPhrases.js
    type DateRangePickerPhrases = {
        calendarLabel?: string;
        closeDatePicker?: string;
        clearDates?: string;
        focusStartDate?: string;
        jumpToPrevMonth?: string;
        jumpToNextMonth?: string;
        keyboardShortcuts?: string;
        showKeyboardShortcutsPanel?: string;
        hideKeyboardShortcutsPanel?: string;
        openThisPanel?: string;
        enterKey?: string;
        leftArrowRightArrow?: string;
        upArrowDownArrow?: string;
        pageUpPageDown?: string;
        homeEnd?: string;
        escape?: string;
        questionMark?: string;
        selectFocusedDate?: string;
        moveFocusByOneDay?: string;
        moveFocusByOneWeek?: string;
        moveFocusByOneMonth?: string;
        moveFocustoStartAndEndOfWeek?: string;
        returnFocusToInput?: string;
        keyboardNavigationInstructions?: string;
        chooseAvailableStartDate?: (phraseArg: PhraseArg) => string;
        chooseAvailableEndDate?: (phraseArg: PhraseArg) => string;
        dateIsUnavailable?: (phraseArg: PhraseArg) => string;
        dateIsSelected?: (phraseArg: PhraseArg) => string;
        dateIsSelectedAsStartDate?: (phraseArg: PhraseArg) => string;
        dateIsSelectedAsEndDate?: (phraseArg: PhraseArg) => string;
    };

    // defaultPhrases.js
    type DateRangePickerInputPhrases = {
        focusStartDate?: string;
        clearDates?: string;
        keyboardNavigationInstructions?: string;
    };

    // defaultPhrases.js
    type SingleDatePickerPhrases = {
        calendarLabel?: string;
        closeDatePicker?: string;
        clearDate?: string;
        jumpToPrevMonth?: string;
        jumpToNextMonth?: string;
        keyboardShortcuts?: string;
        showKeyboardShortcutsPanel?: string;
        hideKeyboardShortcutsPanel?: string;
        openThisPanel?: string;
        enterKey?: string;
        leftArrowRightArrow?: string;
        upArrowDownArrow?: string;
        pageUpPageDown?: string;
        homeEnd?: string;
        escape?: string;
        questionMark?: string;
        selectFocusedDate?: string;
        moveFocusByOneDay?: string;
        moveFocusByOneWeek?: string;
        moveFocusByOneMonth?: string;
        moveFocustoStartAndEndOfWeek?: string;
        returnFocusToInput?: string;
        keyboardNavigationInstructions?: string;
        chooseAvailableDate?: (phraseArg: PhraseArg) => string;
        dateIsUnavailable?: (phraseArg: PhraseArg) => string;
        dateIsSelected?: (phraseArg: PhraseArg) => string;
    };

    // defaultPhrases.js
    type SingleDatePickerInputPhrases = {
        clearDate?: string;
        keyboardNavigationInstructions?: string;
    };

    // defaultPhrases.js
    type DayPickerPhrases = {
        calendarLabel?: string;
        jumpToPrevMonth?: string;
        jumpToNextMonth?: string;
        keyboardShortcuts?: string;
        showKeyboardShortcutsPanel?: string;
        hideKeyboardShortcutsPanel?: string;
        openThisPanel?: string;
        enterKey?: string;
        leftArrowRightArrow?: string;
        upArrowDownArrow?: string;
        pageUpPageDown?: string;
        homeEnd?: string;
        escape?: string;
        questionMark?: string;
        selectFocusedDate?: string;
        moveFocusByOneDay?: string;
        moveFocusByOneWeek?: string;
        moveFocusByOneMonth?: string;
        moveFocustoStartAndEndOfWeek?: string;
        returnFocusToInput?: string;
        chooseAvailableStartDate?: (phraseArg: PhraseArg) => string;
        chooseAvailableEndDate?: (phraseArg: PhraseArg) => string;
        chooseAvailableDate?: (phraseArg: PhraseArg) => string;
        dateIsUnavailable?: (phraseArg: PhraseArg) => string;
        dateIsSelected?: (phraseArg: PhraseArg) => string;
    };

    // defaultPhrases.js
    type DayPickerKeyboardShortcutsPhrases = {
        keyboardShortcuts?: string;
        showKeyboardShortcutsPanel?: string;
        hideKeyboardShortcutsPanel?: string;
        openThisPanel?: string;
        enterKey?: string;
        leftArrowRightArrow?: string;
        upArrowDownArrow?: string;
        pageUpPageDown?: string;
        homeEnd?: string;
        escape?: string;
        questionMark?: string;
        selectFocusedDate?: string;
        moveFocusByOneDay?: string;
        moveFocusByOneWeek?: string;
        moveFocusByOneMonth?: string;
        moveFocustoStartAndEndOfWeek?: string;
        returnFocusToInput?: string;
    };

    // defaultPhrases.js
    type DayPickerNavigationPhrases = {
        jumpToPrevMonth?: string;
        jumpToNextMonth?: string;
    };

    // defaultPhrases.js
    type CalendarDayPhrases = {
        chooseAvailableDate?: (phraseArg: PhraseArg) => string;
        dateIsUnavailable?: (phraseArg: PhraseArg) => string;
        dateIsSelected?: (phraseArg: PhraseArg) => string;
        dateIsSelectedAsStartDate?: (phraseArg: PhraseArg) => string;
        dateIsSelectedAsEndDate?: (phraseArg: PhraseArg) => string;
    };

    // COMPONENTS
    //

    // components/CalendarDay.jsx
    type DayMouseEventHandler = (day: momentPropTypes.momentObj | null, event: React.MouseEvent) => void;

    interface CalendarDayShape {
        day?: momentPropTypes.momentObj | null;
        daySize?: number;
        isOutsideDay?: boolean;
        modifiers?: ModifiersShape;
        isFocused?: boolean;
        tabIndex?: 0 | -1;
        onDayClick?: DayMouseEventHandler;
        onDayMouseEnter?: DayMouseEventHandler;
        onDayMouseLeave?: DayMouseEventHandler;
        renderDayContents?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        ariaLabelFormat?: string;
        phrases?: CalendarDayPhrases;
    }

    type CalendarDay = React.ClassicComponentClass<CalendarDayShape>;
    var CalendarDay: React.ClassicComponentClass<CalendarDayShape>;

    // components/DateRangePicker.js
    type DateRangePicker = React.ClassicComponentClass<DateRangePickerShape>;
    var DateRangePicker: React.ClassicComponentClass<DateRangePickerShape>;

    // components/DayPickerRangeController.jsx
    interface DayPickerRangeControllerShape extends DayPickerShape {
        // REQUIRED props
        startDate: momentPropTypes.momentObj | null;
        endDate: momentPropTypes.momentObj | null;
        onDatesChange: (
            arg: {
                startDate: momentPropTypes.momentObj | null;
                endDate: momentPropTypes.momentObj | null;
            }
        ) => void;
        focusedInput: FocusedInputShape;
        onFocusChange: (arg: FocusedInputShape | null) => void;

        startDateOffset?: (day: any) => any;
        endDateOffset?: (day: any) => any;

        onClose?: (
            final: {
                startDate: momentPropTypes.momentObj;
                endDate: momentPropTypes.momentObj;
            }
        ) => void;

        keepOpenOnDateSelect?: boolean;
        minimumNights?: number;
        disabled?: DisabledShape;
        isOutsideRange?: (day: any) => boolean;
        isDayBlocked?: (day: any) => boolean;
        isDayHighlighted?: (day: any) => boolean;
    }

    type DayPickerRangeController = React.ClassicComponentClass<DayPickerRangeControllerShape>;
    var DayPickerRangeController: React.ClassicComponentClass<DayPickerRangeControllerShape>;

    // components/DayPickerShape.jsx
    interface DayPickerShape {
        renderMonthText?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        renderMonthElement?: (
            props: {
                month: momentPropTypes.momentObj;
                onMonthSelect: (currentMonth: momentPropTypes.momentObj, newMonthVal: string) => void;
                onYearSelect: (currentMonth: momentPropTypes.momentObj, newYearVal: string) => void;
                isVisible: boolean;
            }
        ) => string | JSX.Element;
        enableOutsideDays?: boolean;
        numberOfMonths?: number;
        orientation?: ScrollableOrientationShape;
        withPortal?: boolean;
        initialVisibleMonth?: () => momentPropTypes.momentObj;
        firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        hideKeyboardShortcutsPanel?: boolean;
        daySize?: number;
        verticalHeight?: number;
        noBorder?: boolean;
        transitionDuration?: number;
        horizontalMonthPadding?: number;

        navPrev?: string | JSX.Element;
        navNext?: string | JSX.Element;

        onPrevMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void;
        onNextMonthClick?: (newCurrentMonth: momentPropTypes.momentObj) => void;
        onOutsideClick?: (e: any) => void;
        renderCalendarDay?: (props: CalendarDayShape) => JSX.Element;
        renderDayContents?: (day: momentPropTypes.momentObj) => string | JSX.Element;
        renderCalendarInfo?: () => string | JSX.Element;
        calendarInfoPosition?: CalendarInfoPositionShape;

        // accessibility
        onBlur?: () => void;
        isFocused?: boolean;
        showKeyboardShortcuts?: boolean;

        // i18n
        monthFormat?: string;
        weekDayFormat?: string;
        phrases?: SingleDatePickerPhrases;
        dayAriaLabelFormat?: string;

        isRTL?: boolean;
    }

    // components/DayPickerSingleDateController.jsx
    interface DayPickerSingleDateControllerShape extends DayPickerShape {
        date: momentPropTypes.momentObj | null;
        onDateChange: (date: momentPropTypes.momentObj | null) => void;
        focused: boolean;
        onFocusChange: (arg: { focused: boolean | null }) => void;

        onClose?: (final: { date: momentPropTypes.momentObj }) => void;

        keepOpenOnDateSelect?: boolean;
        isOutsideRange?: (day: any) => boolean;
        isDayBlocked?: (day: any) => boolean;
        isDayHighlighted?: (day: any) => boolean;
    }

    type DayPickerSingleDateController = React.ClassicComponentClass<DayPickerSingleDateControllerShape>;
    var DayPickerSingleDateController: React.ClassicComponentClass<DayPickerSingleDateControllerShape>;

    // components/SingleDatePicker.js
    type SingleDatePicker = React.ClassicComponentClass<SingleDatePickerShape>;
    var SingleDatePicker: React.ClassicComponentClass<SingleDatePickerShape>;

    // UTILS
    //
    // utils/isInclusivelyAfterDay.js
    var isInclusivelyAfterDay: (a: moment.Moment, b: moment.Moment) => boolean;
    // utils/isInclusivelyBeforeDay.js
    var isInclusivelyBeforeDay: (a: moment.Moment, b: moment.Moment) => boolean;
    // utils/isNextDay.js
    var isNextDay: (a: moment.Moment, b: moment.Moment) => boolean;
    // utils/isSameDay.js
    var isSameDay: (a: moment.Moment, b: moment.Moment) => boolean;
    // utils/toISODateString.js
    var toISODateString: (date: moment.MomentInput, currentFormat: moment.MomentFormatSpecification) => string | null;
    // utils/toLocalizedDateString.js
    var toLocalizedDateString: (
        date: moment.MomentInput,
        currentFormat: moment.MomentFormatSpecification
    ) => string | null;
    // utils/toMomentObject.js
    var toMomentObject: (
        dateString: moment.MomentInput,
        customFormat: moment.MomentFormatSpecification
    ) => moment.Moment | null;
}
