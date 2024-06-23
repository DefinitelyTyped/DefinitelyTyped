import * as moment from "moment";
import * as React from "react";
import { Props as ReactOutsideClickHandlerProps } from "react-outside-click-handler";

// UTILITY TYPES
export type RenderMonthProps =
    | {
        renderMonthText?: ((month: moment.Moment) => React.ReactNode) | null | undefined;
        renderMonthElement?: never | undefined;
    }
    | {
        renderMonthText?: never | undefined;
        renderMonthElement?:
            | ((props: {
                month: moment.Moment;
                onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                onYearSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
                isVisible: boolean;
            }) => React.ReactNode)
            | null
            | undefined;
    };

// SHAPES
//
// shapes/AnchorDirectionShape.js
export type AnchorDirectionShape = "left" | "right";

// shapes/CalendarInfoPositionShape.js
export type CalendarInfoPositionShape = "top" | "bottom" | "before" | "after";

// shapes/NavPositionShape.js
export type NavPositionShape = "navPositionTop" | "navPositionBottom";

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

    onClose?: ((final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void) | undefined;

    // input related props
    startDatePlaceholderText?: string | undefined;
    startDateOffset?: ((day: moment.Moment) => moment.Moment) | undefined;
    endDateOffset?: ((day: moment.Moment) => moment.Moment) | undefined;

    endDatePlaceholderText?: string | undefined;
    startDateAriaLabel?: string | undefined;
    endDateAriaLabel?: string | undefined;
    disabled?: DisabledShape | undefined;
    required?: boolean | undefined;
    readOnly?: boolean | undefined;
    screenReaderInputMessage?: string | undefined;
    showClearDates?: boolean | undefined;
    showDefaultInputIcon?: boolean | undefined;
    inputIconPosition?: IconPositionShape | undefined;
    customInputIcon?: React.ReactNode | undefined;
    customArrowIcon?: React.ReactNode | undefined;
    customCloseIcon?: React.ReactNode | undefined;
    noBorder?: boolean | undefined;
    block?: boolean | undefined;
    small?: boolean | undefined;
    regular?: boolean | undefined;
    keepFocusOnInput?: boolean | undefined;
    // calendar presentation and interaction related props
    renderWeekHeaderElement?: ((day: string) => React.ReactNode) | null | undefined;
    orientation?: OrientationShape | undefined;
    anchorDirection?: AnchorDirectionShape | undefined;
    openDirection?: OpenDirectionShape | undefined;
    horizontalMargin?: number | undefined;
    withPortal?: boolean | undefined;
    withFullScreenPortal?: boolean | undefined;
    appendToBody?: boolean | undefined;
    disableScroll?: boolean | undefined;
    daySize?: number | undefined;
    isRTL?: boolean | undefined;
    firstDayOfWeek?: DayOfWeekShape | null | undefined;
    initialVisibleMonth?: (() => moment.Moment) | null | undefined;
    numberOfMonths?: number | undefined;
    keepOpenOnDateSelect?: boolean | undefined;
    reopenPickerOnClearDates?: boolean | undefined;
    renderCalendarInfo?: (() => React.ReactNode) | null | undefined;
    calendarInfoPosition?: CalendarInfoPositionShape | undefined;
    hideKeyboardShortcutsPanel?: boolean | undefined;
    verticalHeight?: number | null | undefined;
    transitionDuration?: number | undefined;
    horizontalMonthPadding?: number | undefined;
    verticalSpacing?: number | undefined;

    // navigation related props
    dayPickerNavigationInlineStyles?: Record<string, any> | null | undefined;
    navPosition?: NavPositionShape | undefined;
    navPrev?: React.ReactNode | undefined;
    navNext?: React.ReactNode | undefined;
    renderNavPrevButton?:
        | ((props: {
            ariaLabel: string;
            disabled: boolean;
            onClick?: React.MouseEventHandler | undefined;
            onKeyUp?: React.KeyboardEventHandler | undefined;
            onMouseUp?: React.MouseEventHandler | undefined;
        }) => React.ReactNode)
        | null
        | undefined;
    renderNavNextButton?:
        | ((props: {
            ariaLabel: string;
            disabled: boolean;
            onClick?: React.MouseEventHandler | undefined;
            onKeyUp?: React.KeyboardEventHandler | undefined;
            onMouseUp?: React.MouseEventHandler | undefined;
        }) => React.ReactNode)
        | null
        | undefined;
    onPrevMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
    onNextMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;

    // day presentation and interaction related props
    renderCalendarDay?: ((props: CalendarDayShape) => React.ReactNode) | undefined;
    renderDayContents?: ((day: moment.Moment, modifiers: ModifiersShape) => React.ReactNode) | null | undefined;
    minimumNights?: number | undefined;
    minDate?: moment.Moment | undefined;
    maxDate?: moment.Moment | undefined;
    enableOutsideDays?: boolean | undefined;
    isDayBlocked?: ((day: moment.Moment) => boolean) | undefined;
    isOutsideRange?: ((day: moment.Moment) => boolean) | undefined;
    isDayHighlighted?: ((day: moment.Moment) => boolean) | undefined;

    // internationalization props
    displayFormat?: string | (() => string) | undefined;
    monthFormat?: string | undefined;
    weekDayFormat?: string | undefined;
    phrases?: DateRangePickerPhrases | undefined;
    dayAriaLabelFormat?: string | undefined;
};
export const DateRangePickerShape: DateRangePickerShape;

// shapes/DayOfWeekShape.js
export type DayOfWeekShape = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// shapes/DisabledShape.js
export type DisabledShape = boolean | "startDate" | "endDate";

// shapes/FocusedInputShape.js
export type FocusedInputShape = "startDate" | "endDate";

// shapes/IconPositionShape.js
export type IconPositionShape = "before" | "after";

// shapes/ModifiersShape.js
export type ModifiersShape = Set<string>;

// shapes/OpenDirectionShape.js
export type OpenDirectionShape = "down" | "up";

// shapes/OrientationShape.js
export type OrientationShape = "horizontal" | "vertical";

// shapes/ScrollableOrientationShape.js
export type ScrollableOrientationShape = "horizontal" | "vertical" | "verticalScrollable";

// shapes/SingleDatePickerShape.js
export type SingleDatePickerShape = RenderMonthProps & {
    id: string;

    // required props for a functional interactive SingleDatePicker
    date: moment.Moment | null;
    focused: boolean;

    onDateChange: (date: moment.Moment | null) => void;
    onFocusChange: (arg: { focused: boolean }) => void;

    // input related props
    placeholder?: string | undefined;
    ariaLabel?: string | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    readOnly?: boolean | undefined;
    screenReaderInputMessage?: string | undefined;
    showClearDate?: boolean | undefined;
    customCloseIcon?: React.ReactNode | undefined;
    showDefaultInputIcon?: boolean | undefined;
    inputIconPosition?: IconPositionShape | undefined;
    customInputIcon?: React.ReactNode | undefined;
    noBorder?: boolean | undefined;
    block?: boolean | undefined;
    small?: boolean | undefined;
    regular?: boolean | undefined;
    verticalSpacing?: number | undefined;
    keepFocusOnInput?: boolean | undefined;

    // calendar presentation and interaction related props
    renderWeekHeaderElement?: ((day: string) => React.ReactNode) | null | undefined;
    orientation?: OrientationShape | undefined;
    anchorDirection?: AnchorDirectionShape | undefined;
    openDirection?: OpenDirectionShape | undefined;
    horizontalMargin?: number | undefined;
    withPortal?: boolean | undefined;
    withFullScreenPortal?: boolean | undefined;
    appendToBody?: boolean | undefined;
    disableScroll?: boolean | undefined;
    initialVisibleMonth?: (() => moment.Moment) | null | undefined;
    firstDayOfWeek?: DayOfWeekShape | null | undefined;
    numberOfMonths?: number | undefined;
    keepOpenOnDateSelect?: boolean | undefined;
    reopenPickerOnClearDate?: boolean | undefined;
    renderCalendarInfo?: (() => React.ReactNode) | null | undefined;
    calendarInfoPosition?: CalendarInfoPositionShape | undefined;
    hideKeyboardShortcutsPanel?: boolean | undefined;
    daySize?: number | undefined;
    isRTL?: boolean | undefined;
    verticalHeight?: number | undefined;
    transitionDuration?: number | undefined;
    horizontalMonthPadding?: number | undefined;

    // navigation related props
    dayPickerNavigationInlineStyles?: Record<string, any> | null | undefined;
    navPosition?: NavPositionShape | undefined;
    navPrev?: React.ReactNode | undefined;
    navNext?: React.ReactNode | undefined;
    renderNavPrevButton?:
        | ((props: {
            ariaLabel: string;
            disabled: boolean;
            onClick?: React.MouseEventHandler | undefined;
            onKeyUp?: React.KeyboardEventHandler | undefined;
            onMouseUp?: React.MouseEventHandler | undefined;
        }) => React.ReactNode)
        | null
        | undefined;
    renderNavNextButton?:
        | ((props: {
            ariaLabel: string;
            disabled: boolean;
            onClick?: React.MouseEventHandler | undefined;
            onKeyUp?: React.KeyboardEventHandler | undefined;
            onMouseUp?: React.MouseEventHandler | undefined;
        }) => React.ReactNode)
        | null
        | undefined;
    onPrevMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
    onNextMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
    onClose?: ((arg: { date: moment.Moment | null }) => void) | undefined;

    // day presentation and interaction related props
    renderCalendarDay?: ((props: CalendarDayShape) => React.ReactNode) | undefined;
    renderDayContents?: ((day: moment.Moment, modifiers: ModifiersShape) => React.ReactNode) | null | undefined;
    enableOutsideDays?: boolean | undefined;
    isDayBlocked?: ((day: moment.Moment) => boolean) | undefined;
    isOutsideRange?: ((day: moment.Moment) => boolean) | undefined;
    isDayHighlighted?: ((day: moment.Moment) => boolean) | undefined;

    // internationalization props
    displayFormat?: string | (() => string) | undefined;
    monthFormat?: string | undefined;
    weekDayFormat?: string | undefined;
    phrases?: SingleDatePickerPhrases | undefined;
    dayAriaLabelFormat?: string | undefined;
};
export const SingleDatePickerShape: SingleDatePickerShape;

// PHRASES
export interface PhraseArg {
    date: string;
}

// defaultPhrases.js
export interface DateRangePickerPhrases {
    calendarLabel?: string | undefined;
    roleDescription?: string | undefined;
    closeDatePicker?: string | undefined;
    clearDates?: string | undefined;
    focusStartDate?: string | undefined;
    jumpToPrevMonth?: string | undefined;
    jumpToNextMonth?: string | undefined;
    keyboardShortcuts?: string | undefined;
    showKeyboardShortcutsPanel?: string | undefined;
    hideKeyboardShortcutsPanel?: string | undefined;
    openThisPanel?: string | undefined;
    enterKey?: string | undefined;
    leftArrowRightArrow?: string | undefined;
    upArrowDownArrow?: string | undefined;
    pageUpPageDown?: string | undefined;
    homeEnd?: string | undefined;
    escape?: string | undefined;
    questionMark?: string | undefined;
    selectFocusedDate?: string | undefined;
    moveFocusByOneDay?: string | undefined;
    moveFocusByOneWeek?: string | undefined;
    moveFocusByOneMonth?: string | undefined;
    moveFocustoStartAndEndOfWeek?: string | undefined;
    returnFocusToInput?: string | undefined;
    keyboardForwardNavigationInstructions?: string | undefined;
    keyboardBackwardNavigationInstructions?: string | undefined;
    chooseAvailableStartDate?: ((phraseArg: PhraseArg) => string) | undefined;
    chooseAvailableEndDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsUnavailable?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelected?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelectedAsStartDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelectedAsEndDate?: ((phraseArg: PhraseArg) => string) | undefined;
}

// defaultPhrases.js
export interface DateRangePickerInputPhrases {
    focusStartDate?: string | undefined;
    clearDates?: string | undefined;
    keyboardForwardNavigationInstructions?: string | undefined;
    keyboardBackwardNavigationInstructions?: string | undefined;
}

// defaultPhrases.js
export interface SingleDatePickerPhrases {
    calendarLabel?: string | undefined;
    roleDescription?: string | undefined;
    closeDatePicker?: string | undefined;
    clearDate?: string | undefined;
    jumpToPrevMonth?: string | undefined;
    jumpToNextMonth?: string | undefined;
    keyboardShortcuts?: string | undefined;
    showKeyboardShortcutsPanel?: string | undefined;
    hideKeyboardShortcutsPanel?: string | undefined;
    openThisPanel?: string | undefined;
    enterKey?: string | undefined;
    leftArrowRightArrow?: string | undefined;
    upArrowDownArrow?: string | undefined;
    pageUpPageDown?: string | undefined;
    homeEnd?: string | undefined;
    escape?: string | undefined;
    questionMark?: string | undefined;
    selectFocusedDate?: string | undefined;
    moveFocusByOneDay?: string | undefined;
    moveFocusByOneWeek?: string | undefined;
    moveFocusByOneMonth?: string | undefined;
    moveFocustoStartAndEndOfWeek?: string | undefined;
    returnFocusToInput?: string | undefined;
    keyboardForwardNavigationInstructions?: string | undefined;
    keyboardBackwardNavigationInstructions?: string | undefined;
    chooseAvailableDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsUnavailable?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelected?: ((phraseArg: PhraseArg) => string) | undefined;
}

// defaultPhrases.js
export interface SingleDatePickerInputPhrases {
    clearDate?: string | undefined;
    keyboardForwardNavigationInstructions?: string | undefined;
    keyboardBackwardNavigationInstructions?: string | undefined;
}

// defaultPhrases.js
export interface DayPickerPhrases {
    calendarLabel?: string | undefined;
    roleDescription?: string | undefined;
    jumpToPrevMonth?: string | undefined;
    jumpToNextMonth?: string | undefined;
    keyboardShortcuts?: string | undefined;
    showKeyboardShortcutsPanel?: string | undefined;
    hideKeyboardShortcutsPanel?: string | undefined;
    openThisPanel?: string | undefined;
    enterKey?: string | undefined;
    leftArrowRightArrow?: string | undefined;
    upArrowDownArrow?: string | undefined;
    pageUpPageDown?: string | undefined;
    homeEnd?: string | undefined;
    escape?: string | undefined;
    questionMark?: string | undefined;
    selectFocusedDate?: string | undefined;
    moveFocusByOneDay?: string | undefined;
    moveFocusByOneWeek?: string | undefined;
    moveFocusByOneMonth?: string | undefined;
    moveFocustoStartAndEndOfWeek?: string | undefined;
    returnFocusToInput?: string | undefined;
    chooseAvailableStartDate?: ((phraseArg: PhraseArg) => string) | undefined;
    chooseAvailableEndDate?: ((phraseArg: PhraseArg) => string) | undefined;
    chooseAvailableDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsUnavailable?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelected?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelectedAsStartDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelectedAsEndDate?: ((phraseArg: PhraseArg) => string) | undefined;
}

// defaultPhrases.js
export interface DayPickerKeyboardShortcutsPhrases {
    keyboardShortcuts?: string | undefined;
    showKeyboardShortcutsPanel?: string | undefined;
    hideKeyboardShortcutsPanel?: string | undefined;
    openThisPanel?: string | undefined;
    enterKey?: string | undefined;
    leftArrowRightArrow?: string | undefined;
    upArrowDownArrow?: string | undefined;
    pageUpPageDown?: string | undefined;
    homeEnd?: string | undefined;
    escape?: string | undefined;
    questionMark?: string | undefined;
    selectFocusedDate?: string | undefined;
    moveFocusByOneDay?: string | undefined;
    moveFocusByOneWeek?: string | undefined;
    moveFocusByOneMonth?: string | undefined;
    moveFocustoStartAndEndOfWeek?: string | undefined;
    returnFocusToInput?: string | undefined;
}

// defaultPhrases.js
export interface DayPickerNavigationPhrases {
    jumpToPrevMonth?: string | undefined;
    jumpToNextMonth?: string | undefined;
}

// defaultPhrases.js
export interface CalendarDayPhrases {
    chooseAvailableDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsUnavailable?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelected?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelectedAsStartDate?: ((phraseArg: PhraseArg) => string) | undefined;
    dateIsSelectedAsEndDate?: ((phraseArg: PhraseArg) => string) | undefined;
}

// COMPONENTS
//
// components/CalendarDay.jsx
export interface CalendarDayShape {
    day?: moment.Moment | null | undefined;
    daySize?: number | undefined;
    isOutsideDay?: boolean | undefined;
    modifiers?: ModifiersShape | undefined;
    isFocused?: boolean | undefined;
    tabIndex?: 0 | -1 | undefined;
    onDayClick?: ((day: moment.Moment, event: React.MouseEvent<HTMLTableDataCellElement>) => void) | undefined;
    onDayMouseEnter?: ((day: moment.Moment, event: React.MouseEvent<HTMLTableDataCellElement>) => void) | undefined;
    onDayMouseLeave?: ((day: moment.Moment, event: React.MouseEvent<HTMLTableDataCellElement>) => void) | undefined;
    renderDayContents?: ((day: moment.Moment, modifiers: ModifiersShape) => React.ReactNode) | null | undefined;
    ariaLabelFormat?: string | undefined;

    // internationalization
    phrases?: CalendarDayPhrases | undefined;
}

export type CalendarDay = React.ComponentClass<CalendarDayShape>;
export const CalendarDay: React.ComponentClass<CalendarDayShape>;

// components/CalendarMonth.jsx
export type CalendarMonthShape =
    & RenderMonthProps
    & Pick<
        CalendarDayShape,
        "daySize" | "onDayClick" | "onDayMouseEnter" | "onDayMouseLeave" | "renderDayContents" | "isFocused" | "phrases"
    >
    & {
        month?: moment.Moment | undefined;
        horizontalMonthPadding?: number | undefined;
        isVisible?: boolean | undefined;
        enableOutsideDays?: boolean | undefined;
        modifiers?: Record<string, ModifiersShape> | undefined;
        orientation?: ScrollableOrientationShape | undefined;
        onMonthSelect?: ((currentMonth: moment.Moment, newMonthVal: string) => void) | undefined;
        onYearSelect?: ((currentMonth: moment.Moment, newMonthVal: string) => void) | undefined;
        renderCalendarDay?: ((props: CalendarDayShape) => React.ReactNode) | undefined;
        firstDayOfWeek?: DayOfWeekShape | null | undefined;
        setMonthTitleHeight?: ((captionHeight: number) => void) | null | undefined;
        verticalBorderSpacing?: number | undefined;

        focusedDate?: moment.Moment | null | undefined; // indicates focusable day

        // i18n
        monthFormat?: string | undefined;
        dayAriaLabelFormat?: string | undefined;
    };

export type CalendarMonth = React.ComponentClass<CalendarMonthShape>;
export const CalendarMonth: React.ComponentClass<CalendarMonthShape>;

// components/CalendarMonthGrid.jsx
export type CalendarMonthGridShape =
    & RenderMonthProps
    & Pick<
        CalendarMonthShape,
        | "enableOutsideDays"
        | "horizontalMonthPadding"
        | "onDayClick"
        | "onDayMouseEnter"
        | "onDayMouseLeave"
        | "renderCalendarDay"
        | "renderDayContents"
        | "daySize"
        | "focusedDate"
        | "isFocused"
        | "firstDayOfWeek"
        | "setMonthTitleHeight"
        | "verticalBorderSpacing"
        | "monthFormat"
        | "phrases"
        | "dayAriaLabelFormat"
    >
    & {
        firstVisibleMonthIndex?: number | undefined;
        initialMonth?: moment.Moment | undefined;
        isAnimating?: boolean | undefined;
        numberOfMonths?: number | undefined;
        modifiers?: Record<string, Record<string, ModifiersShape>> | undefined;
        orientation?: ScrollableOrientationShape | undefined;
        onMonthTransitionEnd?: ((event?: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
        onMonthChange?: ((newMonth: moment.Moment) => void) | undefined;
        onYearChange?: ((newMonth: moment.Moment) => void) | undefined;
        translationValue?: number | null | undefined;
        isRTL?: boolean | undefined;
        transitionDuration?: number | undefined;
    };

export type CalendarMonthGrid = React.ComponentClass<CalendarMonthGridShape>;
export const CalendarMonthGrid: React.ComponentClass<CalendarMonthGridShape>;

// components/DateRangePicker.jsx
export type DateRangePicker = React.ComponentClass<DateRangePickerShape>;
export const DateRangePicker: React.ComponentClass<DateRangePickerShape>;

// components/DateRangePickerInput.jsx
export interface DateRangePickerInputShape {
    startDateId?: string | undefined;
    startDatePlaceholderText?: string | undefined;
    startDateAriaLabel?: string | undefined;
    screenReaderMessage?: string | undefined;

    endDateId?: string | undefined;
    endDatePlaceholderText?: string | undefined;
    endDateAriaLabel?: string | undefined;

    onStartDateFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    onEndDateFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    onStartDateChange?: ((dateString: string) => void) | undefined;
    onEndDateChange?: ((dateString: string) => void) | undefined;
    onStartDateShiftTab?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onEndDateTab?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onClearDates?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onKeyDownArrowDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyDownQuestionMark?: React.KeyboardEventHandler<HTMLInputElement> | undefined;

    startDate?: string | undefined;
    endDate?: string | undefined;

    isStartDateFocused?: boolean | undefined;
    isEndDateFocused?: boolean | undefined;
    showClearDates?: boolean | undefined;
    disabled?: DisabledShape | undefined;
    required?: boolean | undefined;
    readOnly?: boolean | undefined;
    openDirection?: OpenDirectionShape | undefined;
    showCaret?: boolean | undefined;
    showDefaultInputIcon?: boolean | undefined;
    inputIconPosition?: IconPositionShape | undefined;
    customInputIcon?: React.ReactNode | undefined;
    customArrowIcon?: React.ReactNode | undefined;
    customCloseIcon?: React.ReactNode | undefined;
    noBorder?: boolean | undefined;
    block?: boolean | undefined;
    small?: boolean | undefined;
    regular?: boolean | undefined;
    verticalSpacing?: number | undefined;

    // accessibility
    isFocused?: boolean | undefined; // describes actual DOM focus

    // i18n
    phrases?: DateRangePickerInputPhrases | undefined;

    isRTL?: boolean | undefined;
}

export type DateRangePickerInput = React.ComponentClass<DateRangePickerInputShape>;
export const DateRangePickerInput: React.ComponentClass<DateRangePickerInputShape>;

// components/DateRangePickerInputController.jsx
export interface DateRangePickerInputControllerShape extends
    Pick<
        DateRangePickerInputShape,
        | "startDateId"
        | "startDatePlaceholderText"
        | "isStartDateFocused"
        | "startDateAriaLabel"
        | "endDateId"
        | "endDatePlaceholderText"
        | "isEndDateFocused"
        | "endDateAriaLabel"
        | "screenReaderMessage"
        | "showClearDates"
        | "showCaret"
        | "showDefaultInputIcon"
        | "inputIconPosition"
        | "disabled"
        | "required"
        | "readOnly"
        | "openDirection"
        | "noBorder"
        | "block"
        | "small"
        | "regular"
        | "verticalSpacing"
        | "onKeyDownArrowDown"
        | "onKeyDownQuestionMark"
        | "customInputIcon"
        | "customArrowIcon"
        | "customCloseIcon"
        | "isFocused"
        | "phrases"
        | "isRTL"
    >
{
    startDate?: moment.Moment | null | undefined;

    endDate?: moment.Moment | null | undefined;

    keepOpenOnDateSelect?: boolean | undefined;
    reopenPickerOnClearDates?: boolean | undefined;
    withFullScreenPortal?: boolean | undefined;
    minimumNights?: number | undefined;
    isOutsideRange?: ((day: moment.Moment) => boolean) | undefined;
    displayFormat?: string | (() => string) | undefined;

    onFocusChange?: ((arg: FocusedInputShape | null) => void) | undefined;
    onClose?: ((final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void) | undefined;
    onDatesChange?: ((arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void) | undefined;
}

export type DateRangePickerInputController = React.ComponentClass<DateRangePickerInputControllerShape>;
export const DateRangePickerInputController: React.ComponentClass<DateRangePickerInputControllerShape>;

// components/DayPicker.jsx
export type DayPickerShape =
    & RenderMonthProps
    & Pick<
        CalendarMonthGridShape,
        | "enableOutsideDays"
        | "firstDayOfWeek"
        | "daySize"
        | "isRTL"
        | "transitionDuration"
        | "verticalBorderSpacing"
        | "horizontalMonthPadding"
        | "modifiers"
        | "renderCalendarDay"
        | "renderDayContents"
        | "onDayClick"
        | "onDayMouseEnter"
        | "onDayMouseLeave"
        | "monthFormat"
        | "dayAriaLabelFormat"
    >
    & (
        | {
            orientation?: OrientationShape | undefined;
            onGetNextScrollableMonths?: never | undefined;
            onGetPrevScrollableMonths?: never | undefined;
        }
        | {
            orientation: "verticalScrollable";
            onGetNextScrollableMonths?:
                | ((
                    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
                ) => void)
                | undefined; // VERTICAL_SCROLLABLE daypickers only
            onGetPrevScrollableMonths?:
                | ((
                    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
                ) => void)
                | undefined; // VERTICAL_SCROLLABLE daypickers only
        }
    )
    & {
        // calendar presentation props
        numberOfMonths?: number | undefined;
        withPortal?: boolean | undefined;
        onOutsideClick?: ReactOutsideClickHandlerProps["onOutsideClick"] | undefined;
        hidden?: boolean | undefined;
        initialVisibleMonth?: (() => moment.Moment) | undefined;
        renderCalendarInfo?: (() => React.ReactNode) | null | undefined;
        calendarInfoPosition?: CalendarInfoPositionShape | undefined;
        hideKeyboardShortcutsPanel?: boolean | undefined;
        verticalHeight?: number | null | undefined;
        noBorder?: boolean | undefined;
        renderKeyboardShortcutsButton?:
            | ((props: {
                ref: React.Ref<HTMLElement>;
                onClick: React.MouseEventHandler;
                ariaLabel: string;
            }) => React.ReactNode)
            | undefined;
        renderKeyboardShortcutsPanel?:
            | ((props: {
                closeButtonAriaLabel: string;
                keyboardShortcuts: Array<Record<"unicode" | "label" | "action", string>>;
                onCloseButtonClick: React.MouseEventHandler;
                onKeyDown: React.KeyboardEventHandler;
                title: string;
            }) => React.ReactNode)
            | undefined;

        // navigation props
        dayPickerNavigationInlineStyles?: Record<string, any> | null | undefined;
        disablePrev?: boolean | undefined;
        disableNext?: boolean | undefined;
        navPosition?: NavPositionShape | undefined;
        navPrev?: React.ReactNode | undefined;
        navNext?: React.ReactNode | undefined;
        renderNavPrevButton?:
            | ((props: {
                ariaLabel: string;
                disabled: boolean;
                onClick?: React.MouseEventHandler | undefined;
                onKeyUp?: React.KeyboardEventHandler | undefined;
                onMouseUp?: React.MouseEventHandler | undefined;
            }) => React.ReactNode)
            | null
            | undefined;
        renderNavNextButton?:
            | ((props: {
                ariaLabel: string;
                disabled: boolean;
                onClick?: React.MouseEventHandler | undefined;
                onKeyUp?: React.KeyboardEventHandler | undefined;
                onMouseUp?: React.MouseEventHandler | undefined;
            }) => React.ReactNode)
            | null
            | undefined;
        noNavButtons?: boolean | undefined;
        noNavNextButton?: boolean | undefined;
        noNavPrevButton?: boolean | undefined;
        onPrevMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
        onNextMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
        onMonthChange?: ((newMonth: moment.Moment) => void) | undefined;
        onYearChange?: ((newMonth: moment.Moment) => void) | undefined;

        // month props
        renderWeekHeaderElement?: ((day: string) => React.ReactNode) | null | undefined;

        // accessibility props
        isFocused?: boolean | undefined;
        getFirstFocusableDay?: ((month: moment.Moment) => moment.Moment) | null | undefined;
        onBlur?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
        showKeyboardShortcuts?: boolean | undefined;
        onTab?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
        onShiftTab?: (() => void) | undefined;

        // internationalization
        weekDayFormat?: string | undefined;
        phrases?: DayPickerPhrases | undefined;
    };

export type DayPicker = React.ComponentClass<DayPickerShape>;
export const DayPicker: React.ComponentClass<DayPickerShape>;

// components/DayPickerRangeController.jsx
export type DayPickerRangeControllerShape =
    & RenderMonthProps
    & Pick<
        DayPickerShape,
        | "renderWeekHeaderElement"
        | "enableOutsideDays"
        | "numberOfMonths"
        | "withPortal"
        | "hideKeyboardShortcutsPanel"
        | "daySize"
        | "noBorder"
        | "verticalBorderSpacing"
        | "horizontalMonthPadding"
        | "dayPickerNavigationInlineStyles"
        | "navPosition"
        | "navPrev"
        | "navNext"
        | "renderNavPrevButton"
        | "renderNavNextButton"
        | "noNavButtons"
        | "noNavNextButton"
        | "noNavPrevButton"
        | "onOutsideClick"
        | "renderCalendarDay"
        | "renderDayContents"
        | "renderCalendarInfo"
        | "renderKeyboardShortcutsButton"
        | "renderKeyboardShortcutsPanel"
        | "calendarInfoPosition"
        | "firstDayOfWeek"
        | "verticalHeight"
        | "transitionDuration"
        | "onBlur"
        | "isFocused"
        | "showKeyboardShortcuts"
        | "onTab"
        | "onShiftTab"
        | "monthFormat"
        | "weekDayFormat"
        | "phrases"
        | "dayAriaLabelFormat"
        | "isRTL"
    >
    & {
        startDate: moment.Moment | null;
        endDate: moment.Moment | null;
        onDatesChange: (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void;
        startDateOffset?: ((day: moment.Moment) => moment.Moment) | undefined;
        endDateOffset?: ((day: moment.Moment) => moment.Moment) | undefined;
        minDate?: moment.Moment | null | undefined;
        maxDate?: moment.Moment | null | undefined;

        focusedInput: FocusedInputShape | null;
        onFocusChange: (arg: FocusedInputShape | null) => void;
        onClose?: ((final: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => void) | undefined;

        keepOpenOnDateSelect?: boolean | undefined;
        minimumNights?: number | undefined;
        disabled?: DisabledShape | undefined;
        isOutsideRange?: ((day: moment.Moment) => boolean) | undefined;
        isDayBlocked?: ((day: moment.Moment) => boolean) | undefined;
        isDayHighlighted?: ((day: moment.Moment) => boolean) | undefined;
        getMinNightsForHoverDate?: ((day: moment.Moment) => number) | undefined;
        daysViolatingMinNightsCanBeClicked?: boolean | undefined;

        // DayPicker props
        initialVisibleMonth: (() => moment.Moment) | null;
        orientation?: ScrollableOrientationShape | undefined;

        onPrevMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
        onNextMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
    };

export type DayPickerRangeController = React.ComponentClass<DayPickerRangeControllerShape>;
export const DayPickerRangeController: React.ComponentClass<DayPickerRangeControllerShape>;

// components/DayPickerSingleDateController.jsx
export type DayPickerSingleDateControllerShape =
    & RenderMonthProps
    & Pick<
        DayPickerShape,
        | "renderWeekHeaderElement"
        | "enableOutsideDays"
        | "numberOfMonths"
        | "withPortal"
        | "hideKeyboardShortcutsPanel"
        | "daySize"
        | "noBorder"
        | "verticalBorderSpacing"
        | "horizontalMonthPadding"
        | "dayPickerNavigationInlineStyles"
        | "navPosition"
        | "navPrev"
        | "navNext"
        | "renderNavPrevButton"
        | "renderNavNextButton"
        | "noNavButtons"
        | "noNavNextButton"
        | "noNavPrevButton"
        | "onOutsideClick"
        | "renderCalendarDay"
        | "renderDayContents"
        | "renderCalendarInfo"
        | "calendarInfoPosition"
        | "firstDayOfWeek"
        | "verticalHeight"
        | "transitionDuration"
        | "onBlur"
        | "isFocused"
        | "showKeyboardShortcuts"
        | "onTab"
        | "onShiftTab"
        | "monthFormat"
        | "weekDayFormat"
        | "phrases"
        | "dayAriaLabelFormat"
        | "isRTL"
    >
    & {
        date: moment.Moment | null;
        minDate?: moment.Moment | null | undefined;
        maxDate?: moment.Moment | null | undefined;
        onDateChange: (date: moment.Moment | null) => void;

        focused: boolean;
        onFocusChange: (arg: { focused: boolean }) => void;
        onClose?: ((arg: { date: moment.Moment | null }) => void) | undefined;

        keepOpenOnDateSelect?: boolean | undefined;
        isOutsideRange?: ((day: moment.Moment) => boolean) | undefined;
        isDayBlocked?: ((day: moment.Moment) => boolean) | undefined;
        isDayHighlighted?: ((day: moment.Moment) => boolean) | undefined;

        // DayPicker props
        initialVisibleMonth: (() => moment.Moment) | null;
        orientation?: ScrollableOrientationShape | undefined;

        onPrevMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
        onNextMonthClick?: ((newCurrentMonth: moment.Moment) => void) | undefined;
    };

export type DayPickerSingleDateController = React.ComponentClass<DayPickerSingleDateControllerShape>;
export const DayPickerSingleDateController: React.ComponentClass<DayPickerSingleDateControllerShape>;

// components/SingleDatePicker.jsx
export type SingleDatePicker = React.ComponentClass<SingleDatePickerShape>;
export const SingleDatePicker: React.ComponentClass<SingleDatePickerShape>;

// components/SingleDatePickerInput.jsx
export interface SingleDatePickerInputShape {
    id: string;
    placeholder?: string | undefined;
    ariaLabel?: string | undefined;
    displayValue?: string | undefined;
    screenReaderMessage?: string | undefined;
    focused?: boolean | undefined;
    isFocused?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    readOnly?: boolean | undefined;
    openDirection?: OpenDirectionShape | undefined;
    showCaret?: boolean | undefined;
    showClearDate?: boolean | undefined;
    customCloseIcon?: React.ReactNode | undefined;
    showDefaultInputIcon?: boolean | undefined;
    inputIconPosition?: IconPositionShape | undefined;
    customInputIcon?: React.ReactNode | undefined;
    isRTL?: boolean | undefined;
    noBorder?: boolean | undefined;
    block?: boolean | undefined;
    small?: boolean | undefined;
    regular?: boolean | undefined;
    verticalSpacing?: number | undefined;

    onChange?: ((dateString: string) => void) | undefined;
    onClearDate?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    onKeyDownShiftTab?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyDownTab?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyDownArrowDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyDownQuestionMark?: React.KeyboardEventHandler<HTMLInputElement> | undefined;

    // i18n
    phrases?: SingleDatePickerInputPhrases | undefined;
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
