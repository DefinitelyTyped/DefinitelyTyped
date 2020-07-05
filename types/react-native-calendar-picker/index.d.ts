// Type definitions for react-native-calendar-picker 6.1
// Project: https://github.com/stephy/CalendarPicker
// Definitions by: Tobias Hann <https://github.com/automatensalat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Moment, MomentInput } from 'moment';

export default class CalendarPicker extends React.Component<CalendarPickerProps> {
    handleOnPressDay(day: number): void;
    handleOnPressNext(): void;
    handleOnPressPrevious(): void;
    resetSelections(): void;
}

export interface CalendarPickerProps {
    weekdays?: string[];
    months?: string[];
    startFromMonday?: boolean;
    showDayStragglers?: boolean;
    allowRangeSelection?: boolean;
    allowBackwardRangeSelect?: boolean;
    previousTitle?: string;
    nextTitle?: string;
    selectedDayColor?: string;
    selectedDayStyle?: StyleProp<ViewStyle>;
    selectedDayTextColor?: string;
    selectedRangeStartStyle?: StyleProp<ViewStyle>;
    selectedRangeEndStyle?: StyleProp<ViewStyle>;
    selectedRangeStyle?: StyleProp<ViewStyle>;
    disabledDates?: Date[] | DisabledDatesFunc;
    disabledDatesTextStyle?: StyleProp<TextStyle>;
    selectedStartDate?: Date;
    selectedEndDate?: Date;
    minRangeDuration?: number | MinDurationArrayItem[];
    maxRangeDuration?: number | MaxDurationArrayItem[];
    todayBackgroundColor?: string;
    todayTextStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;
    customDatesStyles?: CustomDateStyle[] | CustomDatesStylesFunc;
    /**
     * @deprecated Use customDatesStyles & customDayHeaderStyles callbacks to style individual dates, days of week, and/or header.
     */
    customDatesStylesPriority?: 'dayOfWeek' | 'customDates';
    scaleFactor?: number;
    minDate?: Date;
    maxDate?: Date;
    initialDate?: Date;
    width?: number;
    height?: number;
    swipeConfig?: SwipeConfig;
    enableSwipe?: boolean;
    enableDateChange?: boolean;
    restrictMonthNavigation?: boolean;
    onDateChange?: DateChangedCallback;
    onMonthChange?: DateChangedCallback;
    onSwipe?: SwipeCallback;
    dayShape?: 'circle' | 'square';
    headingLevel?: number;
    previousTitleStyle?: StyleProp<TextStyle>;
    nextTitleStyle?: StyleProp<TextStyle>;
    previousComponent?: React.ReactNode;
    nextComponent?: React.ReactNode;
    dayLabelsWrapper?: StyleProp<ViewStyle>;
    /**
     * @deprecated Use customDatesStyles & customDayHeaderStyles callbacks to style individual dates, days of week, and/or header.
     */
    dayOfWeekStyles?: DayOfWeekStyle;
    monthYearHeaderWrapperStyle?: StyleProp<ViewStyle>;
    customDayHeaderStyles?: CustomDayHeaderStylesFunc;
}

export type DayOfWeekStyle = {
    [key in '0' | '1' | '2' | '3' | '4' | '5' | '6']?: TextStyle;
};

export type DisabledDatesFunc = (date: Moment) => boolean;

export type CustomDatesStylesFunc = (
    date: Moment,
) => {
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    textStyle?: TextStyle;
};

export interface CustomDayHeaderStylesFuncDateArg {
    dayOfWeek: number;
    month: number;
    year: number;
}

export type CustomDayHeaderStylesFunc = (
    date: CustomDayHeaderStylesFuncDateArg,
) => {
    textStyle?: TextStyle;
    style?: ViewStyle;
};

export type MomentParsable = MomentInput;

export interface MinDurationArrayItem {
    date: MomentParsable;
    minDuration: number;
}

export interface MaxDurationArrayItem {
    date: MomentParsable;
    maxDuration: number;
}

export interface CustomDateStyle {
    date: MomentParsable;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export type DateChangedCallback = (date: Moment, type?: 'START_DATE' | 'END_DATE') => void;

export interface SwipeConfig {
    velocityThreshold?: number;
    directionalOffsetThreshold?: number;
}
export type SwipeDirection = 'SWIPE_LEFT' | 'SWIPE_RIGHT' | 'SWIPE_UP' | 'SWIPE_DOWN';

export type SwipeCallback = (swipeDirection: SwipeDirection) => void;
