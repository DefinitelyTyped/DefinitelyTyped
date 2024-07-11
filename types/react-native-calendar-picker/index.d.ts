import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export default class CalendarPicker extends React.Component<CalendarPickerProps> {
    handleOnPressDay(date: HandleOnPressDayArg): void;
    handleOnPressNext(): void;
    handleOnPressPrevious(): void;
    resetSelections(): void;
}

export interface CalendarPickerProps {
    weekdays?: string[] | undefined;
    months?: string[] | undefined;
    startFromMonday?: boolean | undefined;
    showDayStragglers?: boolean | undefined;
    allowRangeSelection?: boolean | undefined;
    allowBackwardRangeSelect?: boolean | undefined;
    previousTitle?: string | undefined;
    nextTitle?: string | undefined;
    selectedDayColor?: string | undefined;
    selectedDayStyle?: StyleProp<ViewStyle> | undefined;
    selectedDayTextColor?: string | undefined;
    selectedDayTextStyle?: StyleProp<TextStyle> | undefined;
    selectedRangeStartTextStyle?: StyleProp<TextStyle> | undefined;
    selectedRangeEndTextStyle?: StyleProp<TextStyle> | undefined;
    selectedRangeStartStyle?: StyleProp<ViewStyle> | undefined;
    selectedRangeEndStyle?: StyleProp<ViewStyle> | undefined;
    selectedRangeStyle?: StyleProp<ViewStyle> | undefined;
    selectedDisabledDatesTextStyle?: StyleProp<TextStyle> | undefined;
    disabledDates?: Date[] | DisabledDatesFunc | undefined;
    disabledDatesTextStyle?: StyleProp<TextStyle> | undefined;
    selectedStartDate?: DateParsable | undefined;
    selectedEndDate?: DateParsable | undefined;
    minRangeDuration?: number | MinDurationArrayItem[] | undefined;
    maxRangeDuration?: number | MaxDurationArrayItem[] | undefined;
    todayBackgroundColor?: string | undefined;
    todayTextStyle?: StyleProp<TextStyle> | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    customDatesStyles?: CustomDateStyle[] | CustomDatesStylesFunc | undefined;
    scaleFactor?: number | undefined;
    minDate?: DateParsable | undefined;
    maxDate?: DateParsable | undefined;
    initialDate?: Date | undefined;
    width?: number | undefined;
    height?: number | undefined;
    scrollable?: boolean | undefined;
    horizontal?: boolean | undefined;
    enableDateChange?: boolean | undefined;
    restrictMonthNavigation?: boolean | undefined;
    onDateChange?: DateChangedCallback | undefined;
    onMonthChange?: DateChangedCallback | undefined;
    dayShape?: "circle" | "square" | undefined;
    headingLevel?: number | undefined;
    selectMonthTitle?: string | undefined;
    selectYearTitle?: string | undefined;
    previousTitleStyle?: StyleProp<TextStyle> | undefined;
    nextTitleStyle?: StyleProp<TextStyle> | undefined;
    previousComponent?: React.ReactNode | undefined;
    nextComponent?: React.ReactNode | undefined;
    dayLabelsWrapper?: StyleProp<ViewStyle> | undefined;
    monthYearHeaderWrapperStyle?: StyleProp<ViewStyle> | undefined;
    headerWrapperStyle?: StyleProp<ViewStyle> | undefined;
    monthTitleStyle?: StyleProp<TextStyle> | undefined;
    yearTitleStyle?: StyleProp<TextStyle> | undefined;
    customDayHeaderStyles?: CustomDayHeaderStylesFunc | undefined;
    initialView?: "years" | "months" | "days" | undefined;
}

export type DayOfWeekStyle = {
    [key in "0" | "1" | "2" | "3" | "4" | "5" | "6"]?: TextStyle;
};

export type DisabledDatesFunc = (date: Date) => boolean;

export type CustomDatesStylesFunc = (date: Date) => {
    containerStyle?: ViewStyle | undefined;
    style?: ViewStyle | undefined;
    textStyle?: TextStyle | undefined;
};

export interface CustomDayHeaderStylesFuncDateArg {
    dayOfWeek: number;
    month: number;
    year: number;
}

export type CustomDayHeaderStylesFunc = (date: CustomDayHeaderStylesFuncDateArg) => {
    textStyle?: TextStyle | undefined;
    style?: ViewStyle | undefined;
};

export type DateParsable = Date | number | string;

export interface MinDurationArrayItem {
    date: DateParsable;
    minDuration: number;
}

export interface MaxDurationArrayItem {
    date: DateParsable;
    maxDuration: number;
}

export interface CustomDateStyle {
    date: DateParsable;
    containerStyle?: ViewStyle | undefined;
    style?: ViewStyle | undefined;
    textStyle?: TextStyle | undefined;
}

export interface HandleOnPressDayArg {
    day: number;
    month: number;
    year: number;
}

export type ChangedDate = "START_DATE" | "END_DATE";

export type DateChangedCallback = (date: Date, type: ChangedDate) => void;

export type MonthChangedCallback = (date: Date) => void;
