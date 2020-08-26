// Type definitions for react-dates v21.8
// Project: https://github.com/airbnb/react-dates
// Definitions by: Artur Ampilogov <https://github.com/ArturAmpilogov>
//                 Nathan Holland <https://github.com/NathanNZ>
//                 Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// Required fields are made according to 'minimum REQUIRED setup' in https://github.com/airbnb/react-dates/blob/master/README.md

import * as React from 'react';
import * as moment from 'moment';
import { Props as ReactOutsideClickHandlerProps } from 'react-outside-click-handler';
import { Styles } from 'react-with-styles';

export = ReactDates;

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
        startDate?: moment.Moment | null;
        endDate?: moment.Moment | null;
        onDatesChange: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;

        focusedInput?: FocusedInputShape | null;
        onFocusChange: (arg: FocusedInputShape | null) => void;

        onClose?: (final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;

        // input related props
        startDateId: string;
        startDatePlaceholderText?: string;
        startDateOffset?: (day: moment.Moment) => moment.Moment;
        endDateOffset?: (day: moment.Moment) => moment.Moment;
        endDateId: string;
        endDatePlaceholderText?: string;
        startDateAriaLabel?: string;
        endDateAriaLabel?: string;
        startDateTitleText?: string;
        endDateTitleText?: string;
        disabled?: DisabledShape;
        required?: boolean;
        readOnly?: boolean;
        screenReaderInputMessage?: string;
        showClearDates?: boolean;
        showDefaultInputIcon?: boolean;
        inputIconPosition?: IconPositionShape;
        customInputIcon?: React.ReactNode;
        customArrowIcon?: React.ReactNode;
        customCloseIcon?: React.ReactNode;
        noBorder?: boolean;
        block?: boolean;
        small?: boolean;
        regular?: boolean;
        keepFocusOnInput?: boolean;

        // calendar presentation and interaction related props
        renderMonthText?: ((month: moment.Moment) => React.ReactNode) | null;
        renderMonthElement?:
            | ((props: {
                  month: moment.Moment;
                  onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                  onYearSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                  isVisible: boolean;
              }) => React.ReactNode)
            | null;
        renderWeekHeaderElement?: ((day: string) => React.ReactNode) | null;
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
        firstDayOfWeek?: DayOfWeekShape | null;
        initialVisibleMonth?: (() => moment.Moment) | null;
        numberOfMonths?: number;
        keepOpenOnDateSelect?: boolean;
        reopenPickerOnClearDates?: boolean;
        renderCalendarInfo?: (() => React.ReactNode) | null;
        calendarInfoPosition?: CalendarInfoPositionShape;
        hideKeyboardShortcutsPanel?: boolean;
        verticalHeight?: number | null;
        transitionDuration?: number;
        verticalSpacing?: number;
        horizontalMonthPadding?: number;

        // navigation related props
        dayPickerNavigationInlineStyles?: Styles | null;
        navPosition?: NavPositionShape;
        navPrev?: React.ReactNode;
        navNext?: React.ReactNode;
        renderNavPrevButton?:
            | ((props: {
                  ariaLabel: string;
                  disabled: boolean;
                  onClick?: React.MouseEventHandler;
                  onKeyUp?: React.KeyboardEventHandler;
                  onMouseUp?: React.MouseEventHandler;
              }) => React.ReactNode)
            | null;
        renderNavNextButton?:
            | ((props: {
                  ariaLabel: string;
                  disabled: boolean;
                  onClick?: React.MouseEventHandler;
                  onKeyUp?: React.KeyboardEventHandler;
                  onMouseUp?: React.MouseEventHandler;
              }) => React.ReactNode)
            | null;
        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;

        // day presentation and interaction related props
        renderCalendarDay?: (props: CalendarDayShape) => React.ReactNode;
        renderDayContents?: ((day: moment.Moment, modifiers: ModifiersShape) => React.ReactNode) | null;
        minimumNights?: number;
        minDate?: moment.Moment;
        maxDate?: moment.Moment;
        enableOutsideDays?: boolean;
        isDayBlocked?: (day: moment.Moment) => boolean;
        isOutsideRange?: (day: moment.Moment) => boolean;
        isDayHighlighted?: (day: moment.Moment) => boolean;

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

    // shapes/IconPositionShape.js
    type IconPositionShape = 'before' | 'after';

    // shapes/ModifiersShape.js
    type ModifiersShape = Set<string>;

    // shapes/OpenDirectionShape.js
    type OpenDirectionShape = 'down' | 'up';

    // shapes/OrientationShape.js
    type OrientationShape = 'horizontal' | 'vertical';

    // shapes/ScrollableOrientationShape.js
    type ScrollableOrientationShape = 'horizontal' | 'vertical' | 'verticalScrollable';

    // shapes/SingleDatePickerShape.js
    interface SingleDatePickerShape {
        // required props for a functional interactive SingleDatePicker
        date?: moment.Moment | null;
        onDateChange: (date: moment.Moment | null) => void;

        focused?: boolean;
        onFocusChange: (arg: { focused: boolean }) => void;

        // input related props
        id: string;
        placeholder?: string;
        ariaLabel?: string;
        disabled?: boolean;
        required?: boolean;
        readOnly?: boolean;
        screenReaderInputMessage?: string;
        showClearDate?: boolean;
        customCloseIcon?: React.ReactNode;
        showDefaultInputIcon?: boolean;
        inputIconPosition?: IconPositionShape;
        customInputIcon?: React.ReactNode;
        noBorder?: boolean;
        block?: boolean;
        small?: boolean;
        regular?: boolean;
        verticalSpacing?: number;
        keepFocusOnInput?: boolean;

        // calendar presentation and interaction related props
        renderMonthText?: ((month: moment.Moment) => React.ReactNode) | null;
        renderMonthElement?:
            | ((props: {
                  month: moment.Moment;
                  onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                  onYearSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                  isVisible: boolean;
              }) => React.ReactNode)
            | null;
        renderWeekHeaderElement?: ((day: string) => React.ReactNode) | null;
        orientation?: OrientationShape;
        anchorDirection?: AnchorDirectionShape;
        openDirection?: OpenDirectionShape;
        horizontalMargin?: number;
        withPortal?: boolean;
        withFullScreenPortal?: boolean;
        appendToBody?: boolean;
        disableScroll?: boolean;
        initialVisibleMonth?: (() => moment.Moment) | null;
        firstDayOfWeek?: DayOfWeekShape | null;
        numberOfMonths?: number;
        keepOpenOnDateSelect?: boolean;
        reopenPickerOnClearDate?: boolean;
        renderCalendarInfo?: (() => React.ReactNode) | null;
        calendarInfoPosition?: CalendarInfoPositionShape;
        hideKeyboardShortcutsPanel?: boolean;
        daySize?: number;
        isRTL?: boolean;
        verticalHeight?: number;
        transitionDuration?: number;
        horizontalMonthPadding?: number;

        // navigation related props
        dayPickerNavigationInlineStyles?: Styles | null;
        navPosition?: NavPositionShape;
        navPrev?: React.ReactNode;
        navNext?: React.ReactNode;
        renderNavPrevButton?:
            | ((props: {
                  ariaLabel: string;
                  disabled: boolean;
                  onClick?: React.MouseEventHandler;
                  onKeyUp?: React.KeyboardEventHandler;
                  onMouseUp?: React.MouseEventHandler;
              }) => React.ReactNode)
            | null;
        renderNavNextButton?:
            | ((props: {
                  ariaLabel: string;
                  disabled: boolean;
                  onClick?: React.MouseEventHandler;
                  onKeyUp?: React.KeyboardEventHandler;
                  onMouseUp?: React.MouseEventHandler;
              }) => React.ReactNode)
            | null;

        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onClose?: (arg: { date: moment.Moment | null }) => void;

        // day presentation and interaction related props
        renderCalendarDay?: (props: CalendarDayShape) => React.ReactNode;
        renderDayContents?: ((day: moment.Moment, modifiers: ModifiersShape) => React.ReactNode) | null;
        enableOutsideDays?: boolean;
        isDayBlocked?: (day: moment.Moment) => boolean;
        isOutsideRange?: (day: moment.Moment) => boolean;
        isDayHighlighted?: (day: moment.Moment) => boolean;
        minDate?: moment.Moment | null;
        maxDate?: moment.Moment | null;

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
    };

    // defaultPhrases.js
    type DateRangePickerPhrases = {
        calendarLabel?: string;
        roleDescription?: string;
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
        keyboardForwardNavigationInstructions?: string;
        keyboardBackwardNavigationInstructions?: string;
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
        keyboardForwardNavigationInstructions?: string;
        keyboardBackwardNavigationInstructions?: string;
    };

    // defaultPhrases.js
    type SingleDatePickerPhrases = {
        calendarLabel?: string;
        roleDescription?: string;
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
        keyboardForwardNavigationInstructions?: string;
        keyboardBackwardNavigationInstructions?: string;
        chooseAvailableDate?: (phraseArg: PhraseArg) => string;
        dateIsUnavailable?: (phraseArg: PhraseArg) => string;
        dateIsSelected?: (phraseArg: PhraseArg) => string;
    };

    // defaultPhrases.js
    type SingleDatePickerInputPhrases = {
        clearDate?: string;
        keyboardForwardNavigationInstructions?: string;
        keyboardBackwardNavigationInstructions?: string;
    };

    // defaultPhrases.js
    type DayPickerPhrases = {
        calendarLabel?: string;
        roleDescription?: string;
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
        dateIsSelectedAsStartDate?: (phraseArg: PhraseArg) => string;
        dateIsSelectedAsEndDate?: (phraseArg: PhraseArg) => string;
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
    interface CalendarDayShape {
        day?: moment.Moment;
        daySize?: number;
        isOutsideDay?: boolean;
        modifiers?: ModifiersShape;
        isFocused?: boolean;
        tabIndex?: 0 | -1;
        onDayClick?: (day: moment.Moment, event: React.MouseEvent<HTMLTableDataCellElement>) => void;
        onDayMouseEnter?: (day: moment.Moment, event: React.MouseEvent<HTMLTableDataCellElement>) => void;
        onDayMouseLeave?: (day: moment.Moment, event: React.MouseEvent<HTMLTableDataCellElement>) => void;
        renderDayContents?: ((day: moment.Moment, modifiers: ModifiersShape) => React.ReactNode) | null;
        ariaLabelFormat?: string;

        // internationalization
        phrases?: CalendarDayPhrases;
    }

    type CalendarDay = React.ComponentClass<CalendarDayShape>;
    var CalendarDay: React.ComponentClass<CalendarDayShape>;

    // components/CalendarMonth.jsx
    interface CalendarMonthShape
        extends Pick<
            CalendarDayShape,
            | 'daySize'
            | 'onDayClick'
            | 'onDayMouseEnter'
            | 'onDayMouseLeave'
            | 'renderDayContents'
            | 'isFocused'
            | 'phrases'
        > {
        month?: moment.Moment;
        horizontalMonthPadding?: number;
        isVisible?: boolean;
        enableOutsideDays?: boolean;
        modifiers?: Record<string, ModifiersShape>;
        orientation?: ScrollableOrientationShape;
        onMonthSelect?: (currentMonth: moment.Moment, newMonthVal: string) => void;
        onYearSelect?: (currentMonth: moment.Moment, newMonthVal: string) => void;
        renderMonthText?: ((month: moment.Moment) => React.ReactNode) | null;
        renderCalendarDay?: (props: CalendarDayShape) => React.ReactNode;
        renderMonthElement?:
            | ((props: {
                  month: moment.Moment;
                  onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                  onYearSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                  isVisible: boolean;
              }) => React.ReactNode)
            | null;
        firstDayOfWeek?: DayOfWeekShape | null;
        setMonthTitleHeight?: ((captionHeight: number) => void) | null;
        verticalBorderSpacing?: number;

        focusedDate?: moment.Moment | null; // indicates focusable day

        // i18n
        monthFormat?: string;
        dayAriaLabelFormat?: string;
    }

    type CalendarMonth = React.ComponentClass<CalendarMonthShape>;
    var CalendarMonth: React.ComponentClass<CalendarMonthShape>;

    // components/CalendarMonthGrid.jsx
    interface CalendarMonthGridShape
        extends Pick<
            CalendarMonthShape,
            | 'enableOutsideDays'
            | 'horizontalMonthPadding'
            | 'onDayClick'
            | 'onDayMouseEnter'
            | 'onDayMouseLeave'
            | 'renderMonthText'
            | 'renderCalendarDay'
            | 'renderDayContents'
            | 'renderMonthElement'
            | 'daySize'
            | 'focusedDate'
            | 'isFocused'
            | 'firstDayOfWeek'
            | 'setMonthTitleHeight'
            | 'verticalBorderSpacing'
            | 'monthFormat'
            | 'phrases'
            | 'dayAriaLabelFormat'
        > {
        firstVisibleMonthIndex?: number;
        initialMonth?: moment.Moment;
        isAnimating?: boolean;
        numberOfMonths?: number;
        modifiers?: Record<string, Record<string, ModifiersShape>>;
        orientation?: ScrollableOrientationShape;
        onMonthTransitionEnd?: (event?: React.TransitionEvent<HTMLDivElement>) => void;
        onMonthChange?: (newMonth: moment.Moment) => void;
        onYearChange?: (newMonth: moment.Moment) => void;
        translationValue?: number | null;
        isRTL?: boolean;
        transitionDuration?: number;
    }

    type CalendarMonthGrid = React.ComponentClass<CalendarMonthGridShape>;
    var CalendarMonthGrid: React.ComponentClass<CalendarMonthGridShape>;

    // components/DateRangePicker.jsx
    type DateRangePicker = React.ComponentClass<DateRangePickerShape>;
    var DateRangePicker: React.ComponentClass<DateRangePickerShape>;

    // components/DateRangePickerInput.jsx
    interface DateRangePickerInputShape {
        startDateId?: string;
        startDatePlaceholderText?: string;
        startDateAriaLabel?: string;
        startDateTitleText?: string;
        screenReaderMessage?: string;

        endDateId?: string;
        endDatePlaceholderText?: string;
        endDateAriaLabel?: string;
        endDateTitleText?: string;

        onStartDateFocus?: React.FocusEventHandler<HTMLInputElement>;
        onEndDateFocus?: React.FocusEventHandler<HTMLInputElement>;
        onStartDateChange?: (dateString: string) => void;
        onEndDateChange?: (dateString: string) => void;
        onStartDateShiftTab?: React.KeyboardEventHandler<HTMLInputElement>;
        onEndDateTab?: React.KeyboardEventHandler<HTMLInputElement>;
        onClearDates?: React.MouseEventHandler<HTMLButtonElement>;
        onKeyDownArrowDown?: React.KeyboardEventHandler<HTMLInputElement>;
        onKeyDownQuestionMark?: React.KeyboardEventHandler<HTMLInputElement>;

        startDate?: string;
        endDate?: string;

        isStartDateFocused?: boolean;
        isEndDateFocused?: boolean;
        showClearDates?: boolean;
        disabled?: DisabledShape;
        required?: boolean;
        readOnly?: boolean;
        openDirection?: OpenDirectionShape;
        showCaret?: boolean;
        showDefaultInputIcon?: boolean;
        inputIconPosition?: IconPositionShape;
        customInputIcon?: React.ReactNode;
        customArrowIcon?: React.ReactNode;
        customCloseIcon?: React.ReactNode;
        noBorder?: boolean;
        block?: boolean;
        small?: boolean;
        regular?: boolean;
        verticalSpacing?: number;

        // accessibility
        isFocused?: boolean; // describes actual DOM focus

        // i18n
        phrases?: DateRangePickerInputPhrases;

        isRTL?: boolean;
    }

    type DateRangePickerInput = React.ComponentClass<DateRangePickerInput>;
    var DateRangePickerInput: React.ComponentClass<DateRangePickerInput>;

    // components/DateRangePickerInputController.jsx
    interface DateRangePickerInputControllerShape
        extends Pick<
            DateRangePickerInputShape,
            | 'startDateId'
            | 'startDatePlaceholderText'
            | 'isStartDateFocused'
            | 'startDateAriaLabel'
            | 'startDateTitleText'
            | 'endDateId'
            | 'endDatePlaceholderText'
            | 'isEndDateFocused'
            | 'endDateAriaLabel'
            | 'endDateTitleText'
            | 'screenReaderMessage'
            | 'showClearDates'
            | 'showCaret'
            | 'showDefaultInputIcon'
            | 'inputIconPosition'
            | 'disabled'
            | 'required'
            | 'readOnly'
            | 'openDirection'
            | 'noBorder'
            | 'block'
            | 'small'
            | 'regular'
            | 'verticalSpacing'
            | 'onKeyDownArrowDown'
            | 'onKeyDownQuestionMark'
            | 'customInputIcon'
            | 'customArrowIcon'
            | 'customCloseIcon'
            | 'isFocused'
            | 'phrases'
            | 'isRTL'
        > {
        startDate?: moment.Moment | null;

        endDate?: moment.Moment | null;

        keepOpenOnDateSelect?: boolean;
        reopenPickerOnClearDates?: boolean;
        withFullScreenPortal?: boolean;
        minimumNights?: number;
        isOutsideRange?: (day: moment.Moment) => boolean;
        isDayBlocked?: (day: moment.Moment) => boolean;
        displayFormat?: string | (() => string);

        onFocusChange?: (arg: FocusedInputShape | null) => void;
        onClose?: (final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
        onDatesChange?: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
    }

    type DateRangePickerInputController = React.ComponentClass<DateRangePickerInputControllerShape>;
    var DateRangePickerInputController: React.ComponentClass<DateRangePickerInputControllerShape>;

    // components/DayPicker.jsx
    interface DayPickerShape
        extends Pick<
            CalendarMonthGridShape,
            | 'enableOutsideDays'
            | 'orientation'
            | 'firstDayOfWeek'
            | 'daySize'
            | 'isRTL'
            | 'transitionDuration'
            | 'verticalBorderSpacing'
            | 'horizontalMonthPadding'
            | 'renderMonthText'
            | 'renderMonthElement'
            | 'modifiers'
            | 'renderCalendarDay'
            | 'renderDayContents'
            | 'onDayClick'
            | 'onDayMouseEnter'
            | 'onDayMouseLeave'
            | 'monthFormat'
            | 'dayAriaLabelFormat'
        > {
        // calendar presentation props
        numberOfMonths?: number;
        withPortal?: boolean;
        onOutsideClick?: ReactOutsideClickHandlerProps['onOutsideClick'];
        hidden?: boolean;
        initialVisibleMonth?: () => moment.Moment;
        renderCalendarInfo?: (() => React.ReactNode) | null;
        calendarInfoPosition?: CalendarInfoPositionShape;
        hideKeyboardShortcutsPanel?: boolean;
        verticalHeight?: number | null;
        noBorder?: boolean;
        renderKeyboardShortcutsButton?: (props: {
            ref: React.Ref<HTMLElement>;
            onClick: React.MouseEventHandler;
            ariaLabel: string;
        }) => React.ReactNode;
        renderKeyboardShortcutsPanel?: (props: {
            closeButtonAriaLabel: string;
            keyboardShortcuts: Record<'unicode' | 'label' | 'action', string>[];
            onCloseButtonClick: React.MouseEventHandler;
            onKeyDown: React.KeyboardEventHandler;
            title: string;
        }) => React.ReactNode;

        // navigation props
        dayPickerNavigationInlineStyles?: Styles | null;
        disablePrev?: boolean;
        disableNext?: boolean;
        navPosition?: NavPositionShape;
        navPrev?: React.ReactNode;
        navNext?: React.ReactNode;
        renderNavPrevButton?:
            | ((props: {
                  ariaLabel: string;
                  disabled: boolean;
                  onClick?: React.MouseEventHandler;
                  onKeyUp?: React.KeyboardEventHandler;
                  onMouseUp?: React.MouseEventHandler;
              }) => React.ReactNode)
            | null;
        renderNavNextButton?:
            | ((props: {
                  ariaLabel: string;
                  disabled: boolean;
                  onClick?: React.MouseEventHandler;
                  onKeyUp?: React.KeyboardEventHandler;
                  onMouseUp?: React.MouseEventHandler;
              }) => React.ReactNode)
            | null;
        noNavButtons?: boolean;
        noNavNextButton?: boolean;
        noNavPrevButton?: boolean;
        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onMonthChange?: (newMonth: moment.Moment) => void;
        onYearChange?: (newMonth: moment.Moment) => void;
        onGetNextScrollableMonths?: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void; // VERTICAL_SCROLLABLE daypickers only
        onGetPrevScrollableMonths?: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void; // VERTICAL_SCROLLABLE daypickers only

        // month props
        renderWeekHeaderElement?: ((day: string) => React.ReactNode) | null;

        // accessibility props
        isFocused?: boolean;
        getFirstFocusableDay?: ((month: moment.Moment) => moment.Moment) | null;
        onBlur?: React.KeyboardEventHandler<HTMLDivElement>;
        showKeyboardShortcuts?: boolean;
        onTab?: React.KeyboardEventHandler<HTMLDivElement>;
        onShiftTab?: () => void;

        // internationalization
        weekDayFormat?: string;
        phrases?: DayPickerPhrases;
        dayAriaLabelFormat?: string;
    }

    type DayPicker = React.ComponentClass<DayPickerShape>;
    var DayPicker: React.ComponentClass<DayPickerShape>;

    // components/DayPickerRangeController.jsx
    interface DayPickerRangeControllerShape
        extends Pick<
            DayPickerShape,
            | 'renderMonthText'
            | 'renderMonthElement'
            | 'renderWeekHeaderElement'
            | 'enableOutsideDays'
            | 'numberOfMonths'
            | 'orientation'
            | 'withPortal'
            | 'hideKeyboardShortcutsPanel'
            | 'daySize'
            | 'noBorder'
            | 'verticalBorderSpacing'
            | 'horizontalMonthPadding'
            | 'dayPickerNavigationInlineStyles'
            | 'navPosition'
            | 'navPrev'
            | 'navNext'
            | 'renderNavPrevButton'
            | 'renderNavNextButton'
            | 'noNavButtons'
            | 'noNavNextButton'
            | 'noNavPrevButton'
            | 'onOutsideClick'
            | 'renderCalendarDay'
            | 'renderDayContents'
            | 'renderCalendarInfo'
            | 'renderKeyboardShortcutsButton'
            | 'renderKeyboardShortcutsPanel'
            | 'calendarInfoPosition'
            | 'firstDayOfWeek'
            | 'verticalHeight'
            | 'transitionDuration'
            | 'onBlur'
            | 'isFocused'
            | 'showKeyboardShortcuts'
            | 'onTab'
            | 'onShiftTab'
            | 'monthFormat'
            | 'weekDayFormat'
            | 'phrases'
            | 'dayAriaLabelFormat'
            | 'isRTL'
        > {
        startDate?: moment.Moment;
        endDate?: moment.Moment;
        onDatesChange?: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
        startDateOffset?: (day: moment.Moment) => moment.Moment;
        endDateOffset?: (day: moment.Moment) => moment.Moment;
        minDate?: moment.Moment | null;
        maxDate?: moment.Moment | null;

        focusedInput?: FocusedInputShape | null;
        onFocusChange?: (arg: FocusedInputShape | null) => void;
        onClose?: (final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;

        keepOpenOnDateSelect?: boolean;
        minimumNights?: number;
        disabled?: DisabledShape;
        isOutsideRange?: (day: moment.Moment) => boolean;
        isDayBlocked?: (day: moment.Moment) => boolean;
        isDayHighlighted?: (day: moment.Moment) => boolean;
        getMinNightsForHoverDate?: (day: moment.Moment) => number;
        daysViolatingMinNightsCanBeClicked?: boolean;

        // DayPicker props
        initialVisibleMonth?: (() => moment.Moment) | null;

        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;
    }

    type DayPickerRangeController = React.ComponentClass<DayPickerRangeControllerShape>;
    var DayPickerRangeController: React.ComponentClass<DayPickerRangeControllerShape>;

    // components/DayPickerSingleDateController.jsx
    interface DayPickerSingleDateControllerShape
        extends Pick<
            DayPickerShape,
            | 'renderMonthText'
            | 'renderMonthElement'
            | 'renderWeekHeaderElement'
            | 'enableOutsideDays'
            | 'numberOfMonths'
            | 'orientation'
            | 'withPortal'
            | 'hideKeyboardShortcutsPanel'
            | 'daySize'
            | 'noBorder'
            | 'verticalBorderSpacing'
            | 'horizontalMonthPadding'
            | 'dayPickerNavigationInlineStyles'
            | 'navPosition'
            | 'navPrev'
            | 'navNext'
            | 'renderNavPrevButton'
            | 'renderNavNextButton'
            | 'noNavButtons'
            | 'noNavNextButton'
            | 'noNavPrevButton'
            | 'onOutsideClick'
            | 'renderCalendarDay'
            | 'renderDayContents'
            | 'renderCalendarInfo'
            | 'renderKeyboardShortcutsButton'
            | 'renderKeyboardShortcutsPanel'
            | 'calendarInfoPosition'
            | 'firstDayOfWeek'
            | 'verticalHeight'
            | 'transitionDuration'
            | 'onBlur'
            | 'isFocused'
            | 'showKeyboardShortcuts'
            | 'onTab'
            | 'onShiftTab'
            | 'monthFormat'
            | 'weekDayFormat'
            | 'phrases'
            | 'dayAriaLabelFormat'
            | 'isRTL'
        > {
        date?: moment.Moment;
        minDate?: moment.Moment | null;
        maxDate?: moment.Moment | null;
        onDateChange?: (date: moment.Moment | null) => void;

        focused?: boolean;
        onFocusChange?: (arg: { focused: boolean }) => void;
        onClose?: (arg: { date: moment.Moment | null }) => void;

        keepOpenOnDateSelect?: boolean;
        isOutsideRange?: (day: moment.Moment) => boolean;
        isDayBlocked?: (day: moment.Moment) => boolean;
        isDayHighlighted?: (day: moment.Moment) => boolean;

        // DayPicker props
        initialVisibleMonth?: (() => moment.Moment) | null;

        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;
    }

    type DayPickerSingleDateController = React.ComponentClass<DayPickerSingleDateControllerShape>;
    var DayPickerSingleDateController: React.ComponentClass<DayPickerSingleDateControllerShape>;

    // components/SingleDatePicker.jsx
    type SingleDatePicker = React.ComponentClass<SingleDatePickerShape>;
    var SingleDatePicker: React.ComponentClass<SingleDatePickerShape>;

    // components/SingleDatePickerInput.jsx
    interface SingleDatePickerInputShape {
        id: string;
        placeholder?: string;
        ariaLabel?: string;
        displayValue?: string;
        screenReaderMessage?: string;
        focused?: boolean;
        isFocused?: boolean;
        disabled?: boolean;
        required?: boolean;
        readOnly?: boolean;
        openDirection?: OpenDirectionShape;
        showCaret?: boolean;
        showClearDate?: boolean;
        customCloseIcon?: React.ReactNode;
        showDefaultInputIcon?: boolean;
        inputIconPosition?: IconPositionShape;
        customInputIcon?: React.ReactNode;
        isRTL?: boolean;
        noBorder?: boolean;
        block?: boolean;
        small?: boolean;
        regular?: boolean;
        verticalSpacing?: number;

        onChange?: (dateString: string) => void;
        onClearDate?: React.MouseEventHandler<HTMLButtonElement>;
        onFocus?: React.FocusEventHandler<HTMLInputElement>;
        onKeyDownShiftTab?: React.KeyboardEventHandler<HTMLInputElement>;
        onKeyDownTab?: React.KeyboardEventHandler<HTMLInputElement>;
        onKeyDownArrowDown?: React.KeyboardEventHandler<HTMLInputElement>;
        onKeyDownQuestionMark?: React.KeyboardEventHandler<HTMLInputElement>;

        // i18n
        phrases?: SingleDatePickerInputPhrases;
    }

    type SingleDatePickerInput = React.FC<SingleDatePickerInputShape>;
    var SingleDatePickerInput: React.FC<SingleDatePickerInputShape>;

    // components/SingleDatePickerInputController.jsx
    interface SingleDatePickerInputControllerShape
        extends Pick<
            SingleDatePickerInputShape,
            | 'id'
            | 'placeholder'
            | 'ariaLabel'
            | 'screenReaderMessage'
            | 'showClearDate'
            | 'showCaret'
            | 'showDefaultInputIcon'
            | 'inputIconPosition'
            | 'disabled'
            | 'required'
            | 'readOnly'
            | 'openDirection'
            | 'noBorder'
            | 'block'
            | 'small'
            | 'regular'
            | 'verticalSpacing'
            | 'onKeyDownArrowDown'
            | 'onKeyDownQuestionMark'
            | 'customInputIcon'
            | 'customCloseIcon'
            | 'isFocused'
            | 'phrases'
            | 'isRTL'
        > {
        date?: moment.Moment | null;
        onDateChange: (date: moment.Moment | null) => void;

        focused?: boolean;
        onFocusChange: (arg: { focused: boolean }) => void;

        keepOpenOnDateSelect?: boolean;
        reopenPickerOnClearDate?: boolean;
        isOutsideRange?: (day: moment.Moment) => boolean;
        displayFormat?: string | (() => string);

        onClose?: (arg: { date: moment.Moment | null }) => void;
    }

    type SingleDatePickerInputController = React.ComponentClass<SingleDatePickerInputControllerShape>;
    var SingleDatePickerInputController: React.ComponentClass<SingleDatePickerInputControllerShape>;

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
    var toISODateString: (date: moment.MomentInput, currentFormat?: moment.MomentFormatSpecification) => string | null;
    // utils/toLocalizedDateString.js
    var toLocalizedDateString: (
        date: moment.MomentInput,
        currentFormat?: moment.MomentFormatSpecification,
    ) => string | null;
    // utils/toMomentObject.js
    var toMomentObject: (
        dateString: moment.MomentInput,
        customFormat?: moment.MomentFormatSpecification,
    ) => moment.Moment | null;
}
