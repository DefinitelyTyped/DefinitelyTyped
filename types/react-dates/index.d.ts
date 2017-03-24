// Type definitions for react-dates v7.0.1
// Project: https://github.com/airbnb/react-dates
// Definitions by: Artur Ampilogov <https://github.com/Artur-A>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from "react";
import * as moment from "moment";

export = ReactDates;

declare namespace momentPropTypes{
    type momentObj = any;
    type momentString = any;
    type momentDurationObj = any;
}

    
declare namespace ReactDates{
    type AnchorDirectionShape = 'left' | 'right';
    type FocusedInputShape = 'startDate' | 'endDate' | null;
    type OrientationShape = 'horizontal' | 'vertical';        
    type ScrollableOrientationShape = 'horizontal' | 'vertical' | 'verticalScrollable'; 
    

    interface DateRangePickerShape{
        startDate?: momentPropTypes.momentObj,
        endDate?: momentPropTypes.momentObj,
        focusedInput?: FocusedInputShape,
        screenReaderInputMessage?: string,
        minimumNights?: number,
        isDayBlocked?: (day: any) => boolean,
        isOutsideRange?: (day: any) => boolean,
        enableOutsideDays?: boolean,
        reopenPickerOnClearDates?: boolean,
        keepOpenOnDateSelect?: boolean,
        numberOfMonths?: number,
        showClearDates?: boolean,
        disabled?: boolean,
        required?: boolean,
        showDefaultInputIcon?: boolean,

        orientation?: OrientationShape,
        anchorDirection?: AnchorDirectionShape,
        horizontalMargin?: number,
        // portal options
        withPortal?: boolean,
        withFullScreenPortal?: boolean,

        startDateId?: string,
        startDatePlaceholderText?: string,
        endDateId?: string,
        endDatePlaceholderText?: string,

        initialVisibleMonth?: () => moment.Moment,
        onDatesChange?: (arg: { startDate: any, endDate: any }) => void,
        onFocusChange?: (arg: FocusedInputShape) => void,
        onPrevMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onNextMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,

        renderDay?: (day: any) => (string | JSX.Element),

        // i18n
        displayFormat?: (string | (()=> string)),
        monthFormat?: string,
        phrases?: {
            closeDatePicker: string | JSX.Element,
            clearDates: string | JSX.Element,
        }
    }

    type DateRangePicker = React.ClassicComponentClass<DateRangePickerShape>;
    var DateRangePicker: React.ClassicComponentClass<DateRangePickerShape>;

    interface SingleDatePickerShape{
        id: string,
        placeholder?: string,
        date?: momentPropTypes.momentObj,
        focused?: boolean,
        showClearDate?: boolean,
        reopenPickerOnClearDates?: boolean,
        keepOpenOnDateSelect?: boolean,
        disabled?: boolean,
        required?: boolean,
        screenReaderInputMessage?: string,

        onDateChange?: (date: any) => void,
        onFocusChange?: (arg: { focused: boolean | null }) => void,

        isDayBlocked?: (day: any) => boolean,
        isOutsideRange?: (day: any) => boolean,
        enableOutsideDays?: boolean,
        numberOfMonths?: number,
        orientation?: OrientationShape,
        initialVisibleMonth?: () => moment.Moment,
        anchorDirection?: AnchorDirectionShape,
        horizontalMargin?: number,

        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,

        // portal options
        withPortal?: boolean,
        withFullScreenPortal?: boolean,

        onPrevMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onNextMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,

        renderDay?: (day: any) => (string | JSX.Element),

        // i18n
        displayFormat?: (string | (()=> string)),
        monthFormat?: string,
        phrases?: {
            closeDatePicker: string | JSX.Element,
        },
    }
    type SingleDatePicker = React.ClassicComponentClass<SingleDatePickerShape>;
    var SingleDatePicker: React.ClassicComponentClass<SingleDatePickerShape>;



    interface DateRangePickerInputControllerShape {
        startDate?: momentPropTypes.momentObj,
        startDateId?: string,
        startDatePlaceholderText?: string,
        isStartDateFocused?: boolean,

        endDate?: momentPropTypes.momentObj,
        endDateId?: string,
        endDatePlaceholderText?: string,
        isEndDateFocused?: boolean,

        screenReaderMessage?: string,
        showClearDates?: boolean,
        showCaret?: boolean,
        showDefaultInputIcon?: boolean,
        disabled?: boolean,
        required?: boolean,

        keepOpenOnDateSelect?: boolean,
        reopenPickerOnClearDates?: boolean,
        withFullScreenPortal?: boolean,
        isOutsideRange?: (day: any) => boolean,        
        displayFormat?: (string | (()=> string)),

        onFocusChange?: (arg: FocusedInputShape) => void,
        onDatesChange?: (arg: { startDate: any, endDate: any }) => void,

        customInputIcon?: string | JSX.Element,
        customArrowIcon?: string | JSX.Element,

        // i18n
        phrases?: {
            clearDates: string | JSX.Element,
        }
    }
    type DateRangePickerInputController = React.ClassicComponentClass<DateRangePickerInputControllerShape>;
    var DateRangePickerInputController: React.ClassicComponentClass<DateRangePickerInputControllerShape>;
    


    interface DateRangePickerInputShape{
        startDateId?: string,
        startDatePlaceholderText?: string,
        screenReaderMessage?: string,

        endDateId?: string,
        endDatePlaceholderText?: string,

        onStartDateFocus?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onEndDateFocus?: (e: React.EventHandler<React.FocusEvent<HTMLInputElement>>) => void,        
        onStartDateChange?: (e: React.EventHandler<React.FormEvent<HTMLInputElement>>) => void,
        onEndDateChange?: (e: React.EventHandler<React.FormEvent<HTMLInputElement>>) => void,
        onStartDateShiftTab?: (e: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>) => void,
        onEndDateTab?: (e: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>) => void,
        onClearDates?: (e: React.EventHandler<React.MouseEvent<HTMLButtonElement>>) => void,

        startDate?: string,
        startDateValue?: string,
        endDate?: string,
        endDateValue?: string,

        isStartDateFocused?: boolean,
        isEndDateFocused?: boolean,
        showClearDates?: boolean,
        disabled?: boolean,
        required?: boolean,
        showCaret?: boolean,
        showDefaultInputIcon?: boolean,
        customInputIcon?: string | JSX.Element,
        customArrowIcon?: string | JSX.Element,

        // i18n
        phrases?:{
            clearDates: string | JSX.Element,
        },
    }
    type DateRangePickerInput = React.ClassicComponentClass<DateRangePickerInputShape>;
    var DateRangePickerInput: React.ClassicComponentClass<DateRangePickerInputShape>;



    interface SingleDatePickerInputShape{
        id: string,
        placeholder?: string, // also used as label
        displayValue?: string,
        inputValue?: string,
        screenReaderMessage?: string,
        focused?: boolean,
        disabled?: boolean,
        required?: boolean,
        showCaret?: boolean,
        showClearDate?: boolean,

        onChange?: (e: React.EventHandler<React.FormEvent<HTMLInputElement>>) => void,
        onClearDate?: (e: React.EventHandler<React.MouseEvent<HTMLButtonElement>>) => void,
        onFocus?: (e: React.EventHandler<React.FocusEvent<HTMLInputElement>>) => void,
        onKeyDownShiftTab?: (e: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>) => void,
        onKeyDownTab?: (e: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>) => void,

        // i18n
        phrases?: {
            clearDate: string | JSX.Element,
        }
    }
    type SingleDatePickerInput = React.ClassicComponentClass<SingleDatePickerInputShape>;
    var SingleDatePickerInput: React.ClassicComponentClass<SingleDatePickerInputShape>;




    interface DayPickerShape{
        enableOutsideDays?: boolean,
        numberOfMonths?: number,
        modifiers?: any,
        orientation?: ScrollableOrientationShape,
        withPortal?: boolean,
        hidden?: boolean,
        initialVisibleMonth?: () => moment.Moment,

        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,

        onDayClick?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseEnter?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseLeave?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onPrevMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onNextMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onOutsideClick?: (e: MouseEvent) => void,

        renderDay?: (day: any) => (string | JSX.Element),

        // i18n
        monthFormat?: string,
    }   
    type DayPicker = React.ClassicComponentClass<DayPickerShape>;
    var DayPicker: React.ClassicComponentClass<DayPickerShape>;
    


    interface DayPickerRangeControllerShape{
        startDate?: momentPropTypes.momentObj,
        endDate?: momentPropTypes.momentObj,
        onDatesChange?: (arg: { startDate: any, endDate: any }) => void,

        focusedInput?: FocusedInputShape,
        onFocusChange?: (arg: FocusedInputShape) => void,

        keepOpenOnDateSelect?: boolean,
        minimumNights?: number,
        isOutsideRange?: (day: any) => boolean,
        isDayBlocked?: (day: any) => boolean,
        isDayHighlighted?: (day: any) => boolean,

        // DayPicker props
        enableOutsideDays?: boolean,
        numberOfMonths?: number,
        orientation?: ScrollableOrientationShape,
        withPortal?: boolean,
        hidden?: boolean,
        initialVisibleMonth?: () => moment.Moment,

        navPrev?: string | JSX.Element,
        navNext?: string | JSX.Element,

        onPrevMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onNextMonthClick?: (e: React.EventHandler<React.MouseEvent<HTMLSpanElement>>) => void,
        onOutsideClick?: (e: MouseEvent) => void,
        renderDay?: (day: any) => (string | JSX.Element),

        // i18n
        monthFormat?: string,
    }
    type DayPickerRangeController = React.ClassicComponentClass<DayPickerRangeControllerShape>;
    var DayPickerRangeController: React.ClassicComponentClass<DayPickerRangeControllerShape>;
    

    interface CalendarMonthGridShape{
        enableOutsideDays?: boolean,
        firstVisibleMonthIndex?: number,
        initialMonth?: momentPropTypes.momentObj,
        isAnimating?: boolean,
        numberOfMonths?: number,
        modifiers?: any,
        orientation?: ScrollableOrientationShape,
        onDayClick?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseEnter?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseLeave?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onMonthTransitionEnd?: ()=> void,
        renderDay?: (day: any) => (string | JSX.Element),
        transformValue?: string,

        // i18n
        monthFormat?: string,
    }
    type CalendarMonthGrid = React.ClassicComponentClass<CalendarMonthGridShape>;
    var CalendarMonthGrid: React.ClassicComponentClass<CalendarMonthGridShape>;   



    interface CalendarMonthShape{
        month?: momentPropTypes.momentObj,
        isVisible?: boolean,
        enableOutsideDays?: boolean,
        modifiers?: any,
        orientation?: ScrollableOrientationShape,
        onDayClick?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseEnter?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseLeave?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        renderDay?: (day: any) => (string | JSX.Element),

        // i18n
        monthFormat?: string,
    } 
    type CalendarMonth = React.ClassicComponentClass<CalendarMonthShape>;
    var CalendarMonth: React.ClassicComponentClass<CalendarMonthShape>;   
    

    interface CalendarDayShape{
        day?: momentPropTypes.momentObj,
        isOutsideDay?: boolean,
        modifiers?: any,
        onDayClick?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseEnter?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        onDayMouseLeave?: (day: any, e: React.EventHandler<React.MouseEvent<HTMLTableDataCellElement>>) => void,
        renderDay?: (day: any) => (string | JSX.Element),
    }
    type CalendarDay = React.ClassicComponentClass<CalendarDayShape>;
    var CalendarDay: React.ClassicComponentClass<CalendarDayShape>;   




    var isInclusivelyAfterDay: (a: moment.Moment, b: moment.Moment) => boolean;
    var isInclusivelyBeforeDay: (a: moment.Moment, b: moment.Moment) => boolean;
    var isNextDay: (a: moment.Moment, b: moment.Moment) => boolean;
    var isSameDay: (a: moment.Moment, b: moment.Moment) => boolean;

    var toISODateString: (date: moment.MomentInput, currentFormat: moment.MomentFormatSpecification) => string | null;
    var toLocalizedDateString: (date: moment.MomentInput, currentFormat: moment.MomentFormatSpecification) => string | null;
    
    var toMomentObject: (dateString: moment.MomentInput, customFormat: moment.MomentFormatSpecification) => moment.Moment | null;    
}
