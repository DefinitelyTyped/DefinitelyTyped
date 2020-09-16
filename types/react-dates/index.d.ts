// Type definitions for react-dates 21.8
// Project: https://github.com/airbnb/react-dates
// Definitions by: Artur Ampilogov <https://github.com/ArturAmpilogov>
//                 Nathan Holland <https://github.com/NathanNZ>
//                 Chris Griebel <https://github.com/cgriebel>
//                 Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// Required fields are made according to 'minimum REQUIRED setup' in https://github.com/airbnb/react-dates/blob/master/README.md

import * as React from 'react';
import * as moment from 'moment';
import { Props as ReactOutsideClickHandlerProps } from 'react-outside-click-handler';

// UTILITY TYPES
export type RenderMonthProps =
    | {
          renderMonthText?: ((month: moment.Moment) => React.ReactNode) | null;
          renderMonthElement?: never;
      }
    | {
          renderMonthText?: never;
          renderMonthElement?:
              | ((props: {
                    month: moment.Moment;
                    onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                    onYearSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                    isVisible: boolean;
                }) => React.ReactNode)
              | null;
      };

// SHAPES
//
// shapes/AnchorDirectionShape.js
export type AnchorDirectionShape = 'left' | 'right';

// shapes/CalendarInfoPositionShape.js
export type CalendarInfoPositionShape = 'top' | 'bottom' | 'before' | 'after';

// shapes/NavPositionShape.js
export type NavPositionShape = 'navPositionTop' | 'navPositionBottom';

// shapes/DateRangePickerShape.js
export type DateRangePickerShape = RenderMonthProps & {
    // required props for a functional interactive DateRangePicker
    startDate: moment.Moment | null;
    startDateId: string;
    endDate: moment.Moment | null;
    endDateId: string;
    focusedInput: FocusedInputShape | null;

    onDatesChange: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
    onFocusChange: (arg: FocusedInputShape | null) => void;

    onClose?: (final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;

    // input related props
    startDatePlaceholderText?: string;
    startDateOffset?: (day: moment.Moment) => moment.Moment;
    endDateOffset?: (day: moment.Moment) => moment.Moment;

    endDatePlaceholderText?: string;
    startDateAriaLabel?: string;
    endDateAriaLabel?: string;
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
    horizontalMonthPadding?: number;
    verticalSpacing?: number;

    // navigation related props
    dayPickerNavigationInlineStyles?: Record<string, any> | null;
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
};
export const DateRangePickerShape: DateRangePickerShape;

// shapes/DayOfWeekShape.js
export type DayOfWeekShape = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// shapes/DisabledShape.js
export type DisabledShape = boolean | 'startDate' | 'endDate';

// shapes/FocusedInputShape.js
export type FocusedInputShape = 'startDate' | 'endDate';

// shapes/IconPositionShape.js
export type IconPositionShape = 'before' | 'after';

// shapes/ModifiersShape.js
export type ModifiersShape = Set<string>;

// shapes/OpenDirectionShape.js
export type OpenDirectionShape = 'down' | 'up';

// shapes/OrientationShape.js
export type OrientationShape = 'horizontal' | 'vertical';

// shapes/ScrollableOrientationShape.js
export type ScrollableOrientationShape = 'horizontal' | 'vertical' | 'verticalScrollable';

// shapes/SingleDatePickerShape.js
export type SingleDatePickerShape = RenderMonthProps & {
    id: string;

    // required props for a functional interactive SingleDatePicker
    date: moment.Moment | null;
    focused: boolean;

    onDateChange: (date: moment.Moment | null) => void;
    onFocusChange: (arg: { focused: boolean }) => void;

    // input related props
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
    dayPickerNavigationInlineStyles?: Record<string, any> | null;
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

    // internationalization props
    displayFormat?: string | (() => string);
    monthFormat?: string;
    weekDayFormat?: string;
    phrases?: SingleDatePickerPhrases;
    dayAriaLabelFormat?: string;
};
export const SingleDatePickerShape: SingleDatePickerShape;

// PHRASES
export interface PhraseArg {
    date: string;
}

// defaultPhrases.js
export interface DateRangePickerPhrases {
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
}

// defaultPhrases.js
export interface DateRangePickerInputPhrases {
    focusStartDate?: string;
    clearDates?: string;
    keyboardForwardNavigationInstructions?: string;
    keyboardBackwardNavigationInstructions?: string;
}

// defaultPhrases.js
export interface SingleDatePickerPhrases {
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
}

// defaultPhrases.js
export interface SingleDatePickerInputPhrases {
    clearDate?: string;
    keyboardForwardNavigationInstructions?: string;
    keyboardBackwardNavigationInstructions?: string;
}

// defaultPhrases.js
export interface DayPickerPhrases {
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
}

// defaultPhrases.js
export interface DayPickerKeyboardShortcutsPhrases {
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
}

// defaultPhrases.js
export interface DayPickerNavigationPhrases {
    jumpToPrevMonth?: string;
    jumpToNextMonth?: string;
}

// defaultPhrases.js
export interface CalendarDayPhrases {
    chooseAvailableDate?: (phraseArg: PhraseArg) => string;
    dateIsUnavailable?: (phraseArg: PhraseArg) => string;
    dateIsSelected?: (phraseArg: PhraseArg) => string;
    dateIsSelectedAsStartDate?: (phraseArg: PhraseArg) => string;
    dateIsSelectedAsEndDate?: (phraseArg: PhraseArg) => string;
}

// COMPONENTS
//
// components/CalendarDay.jsx
export interface CalendarDayShape {
    day?: moment.Moment | null;
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

export type CalendarDay = React.ComponentClass<CalendarDayShape>;
export const CalendarDay: React.ComponentClass<CalendarDayShape>;

// components/CalendarMonth.jsx
export type CalendarMonthShape = RenderMonthProps &
    Pick<
        CalendarDayShape,
        'daySize' | 'onDayClick' | 'onDayMouseEnter' | 'onDayMouseLeave' | 'renderDayContents' | 'isFocused' | 'phrases'
    > & {
        month?: moment.Moment;
        horizontalMonthPadding?: number;
        isVisible?: boolean;
        enableOutsideDays?: boolean;
        modifiers?: Record<string, ModifiersShape>;
        orientation?: ScrollableOrientationShape;
        onMonthSelect?: (currentMonth: moment.Moment, newMonthVal: string) => void;
        onYearSelect?: (currentMonth: moment.Moment, newMonthVal: string) => void;
        renderCalendarDay?: (props: CalendarDayShape) => React.ReactNode;
        firstDayOfWeek?: DayOfWeekShape | null;
        setMonthTitleHeight?: ((captionHeight: number) => void) | null;
        verticalBorderSpacing?: number;

        focusedDate?: moment.Moment | null; // indicates focusable day

        // i18n
        monthFormat?: string;
        dayAriaLabelFormat?: string;
    };

export type CalendarMonth = React.ComponentClass<CalendarMonthShape>;
export const CalendarMonth: React.ComponentClass<CalendarMonthShape>;

// components/CalendarMonthGrid.jsx
export type CalendarMonthGridShape = RenderMonthProps &
    Pick<
        CalendarMonthShape,
        | 'enableOutsideDays'
        | 'horizontalMonthPadding'
        | 'onDayClick'
        | 'onDayMouseEnter'
        | 'onDayMouseLeave'
        | 'renderCalendarDay'
        | 'renderDayContents'
        | 'daySize'
        | 'focusedDate'
        | 'isFocused'
        | 'firstDayOfWeek'
        | 'setMonthTitleHeight'
        | 'verticalBorderSpacing'
        | 'monthFormat'
        | 'phrases'
        | 'dayAriaLabelFormat'
    > & {
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
    };

export type CalendarMonthGrid = React.ComponentClass<CalendarMonthGridShape>;
export const CalendarMonthGrid: React.ComponentClass<CalendarMonthGridShape>;

// components/DateRangePicker.jsx
export type DateRangePicker = React.ComponentClass<DateRangePickerShape>;
export const DateRangePicker: React.ComponentClass<DateRangePickerShape>;

// components/DateRangePickerInput.jsx
export interface DateRangePickerInputShape {
    startDateId?: string;
    startDatePlaceholderText?: string;
    startDateAriaLabel?: string;
    screenReaderMessage?: string;

    endDateId?: string;
    endDatePlaceholderText?: string;
    endDateAriaLabel?: string;

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

export type DateRangePickerInput = React.ComponentClass<DateRangePickerInputShape>;
export const DateRangePickerInput: React.ComponentClass<DateRangePickerInputShape>;

// components/DateRangePickerInputController.jsx
export interface DateRangePickerInputControllerShape
    extends Pick<
        DateRangePickerInputShape,
        | 'startDateId'
        | 'startDatePlaceholderText'
        | 'isStartDateFocused'
        | 'startDateAriaLabel'
        | 'endDateId'
        | 'endDatePlaceholderText'
        | 'isEndDateFocused'
        | 'endDateAriaLabel'
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
    displayFormat?: string | (() => string);

    onFocusChange?: (arg: FocusedInputShape | null) => void;
    onClose?: (final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
    onDatesChange?: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
}

export type DateRangePickerInputController = React.ComponentClass<DateRangePickerInputControllerShape>;
export const DateRangePickerInputController: React.ComponentClass<DateRangePickerInputControllerShape>;

// components/DayPicker.jsx
export type DayPickerShape = RenderMonthProps &
    Pick<
        CalendarMonthGridShape,
        | 'enableOutsideDays'
        | 'firstDayOfWeek'
        | 'daySize'
        | 'isRTL'
        | 'transitionDuration'
        | 'verticalBorderSpacing'
        | 'horizontalMonthPadding'
        | 'modifiers'
        | 'renderCalendarDay'
        | 'renderDayContents'
        | 'onDayClick'
        | 'onDayMouseEnter'
        | 'onDayMouseLeave'
        | 'monthFormat'
        | 'dayAriaLabelFormat'
    > &
    (
        | { orientation?: OrientationShape; onGetNextScrollableMonths?: never; onGetPrevScrollableMonths?: never }
        | {
              orientation: 'verticalScrollable';
              onGetNextScrollableMonths?: (
                  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
              ) => void; // VERTICAL_SCROLLABLE daypickers only
              onGetPrevScrollableMonths?: (
                  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
              ) => void; // VERTICAL_SCROLLABLE daypickers only
          }
    ) & {
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
            keyboardShortcuts: Array<Record<'unicode' | 'label' | 'action', string>>;
            onCloseButtonClick: React.MouseEventHandler;
            onKeyDown: React.KeyboardEventHandler;
            title: string;
        }) => React.ReactNode;

        // navigation props
        dayPickerNavigationInlineStyles?: Record<string, any> | null;
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
    };

export type DayPicker = React.ComponentClass<DayPickerShape>;
export const DayPicker: React.ComponentClass<DayPickerShape>;

// components/DayPickerRangeController.jsx
export type DayPickerRangeControllerShape = RenderMonthProps &
    Pick<
        DayPickerShape,
        | 'renderWeekHeaderElement'
        | 'enableOutsideDays'
        | 'numberOfMonths'
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
    > & {
        startDate: moment.Moment | null;
        endDate: moment.Moment | null;
        onDatesChange: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
        startDateOffset?: (day: moment.Moment) => moment.Moment;
        endDateOffset?: (day: moment.Moment) => moment.Moment;

        focusedInput: FocusedInputShape | null;
        onFocusChange: (arg: FocusedInputShape | null) => void;
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
        initialVisibleMonth: (() => moment.Moment) | null;
        orientation?: ScrollableOrientationShape;

        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;
    };

export type DayPickerRangeController = React.ComponentClass<DayPickerRangeControllerShape>;
export const DayPickerRangeController: React.ComponentClass<DayPickerRangeControllerShape>;

// components/DayPickerSingleDateController.jsx
export type DayPickerSingleDateControllerShape = RenderMonthProps &
    Pick<
        DayPickerShape,
        | 'renderWeekHeaderElement'
        | 'enableOutsideDays'
        | 'numberOfMonths'
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
    > & {
        date: moment.Moment | null;
        onDateChange: (date: moment.Moment | null) => void;

        focused: boolean;
        onFocusChange: (arg: { focused: boolean }) => void;
        onClose?: (arg: { date: moment.Moment | null }) => void;

        keepOpenOnDateSelect?: boolean;
        isOutsideRange?: (day: moment.Moment) => boolean;
        isDayBlocked?: (day: moment.Moment) => boolean;
        isDayHighlighted?: (day: moment.Moment) => boolean;

        // DayPicker props
        initialVisibleMonth: (() => moment.Moment) | null;
        orientation?: ScrollableOrientationShape;

        onPrevMonthClick?: (newCurrentMonth: moment.Moment) => void;
        onNextMonthClick?: (newCurrentMonth: moment.Moment) => void;
    };

export type DayPickerSingleDateController = React.ComponentClass<DayPickerSingleDateControllerShape>;
export const DayPickerSingleDateController: React.ComponentClass<DayPickerSingleDateControllerShape>;

// components/SingleDatePicker.jsx
export type SingleDatePicker = React.ComponentClass<SingleDatePickerShape>;
export const SingleDatePicker: React.ComponentClass<SingleDatePickerShape>;

// components/SingleDatePickerInput.jsx
export interface SingleDatePickerInputShape {
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

export type SingleDatePickerInput = React.FC<SingleDatePickerInputShape>;
export const SingleDatePickerInput: React.FC<SingleDatePickerInputShape>;

// UTILS
//
// utils/isInclusivelyAfterDay.js
export function isInclusivelyAfterDay(a: moment.Moment, b: moment.Moment): boolean;
// utils/isInclusivelyBeforeDay.js
export function isInclusivelyBeforeDay(a: moment.Moment, b: moment.Moment): boolean;
// utils/isNextDay.js
export function isNextDay(a: moment.Moment, b: moment.Moment): boolean;
// utils/isSameDay.js
export function isSameDay(a: moment.Moment, b: moment.Moment): boolean;
// utils/toISODateString.js
export function toISODateString(
    date: moment.MomentInput,
    currentFormat?: moment.MomentFormatSpecification,
): string | null;
// utils/toLocalizedDateString.js
export function toLocalizedDateString(
    date: moment.MomentInput,
    currentFormat?: moment.MomentFormatSpecification,
): string | null;
// utils/toMomentObject.js
export function toMomentObject(
    dateString: moment.MomentInput,
    customFormat?: moment.MomentFormatSpecification,
): moment.Moment | null;
