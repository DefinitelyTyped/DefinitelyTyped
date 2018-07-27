// Type definitions for react-native-calendars 1.20
// Project: https://github.com/wix/react-native-calendars#readme
// Definitions by: Tyler Zhang <https://github.com/Tyler-Zhang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ViewProps } from 'react-native';

interface DateObject {
    year: number;
    month: number;
    day: number;
    timestamp: number;
    dateString: string;
}

interface CalendarTheme {
    backgroundColor?: string;
    calendarBackground?: string;
    textSectionTitleColor?: string;
    selectedDayBackgroundColor?: string;
    selectedDayTextColor?: string;
    todayTextColor?: string;
    dayTextColor?: string;
    textDisabledColor?: string;
    dotColor?: string;
    selectedDotColor?: string;
    arrowColor?: string;
    monthTextColor?: string;
    textDayFontFamily?: string;
    textMonthFontFamily?: string;
    textDayHeaderFontFamily?: string;
    textDayFontSize?: number;
    textMonthFontSize?: number;
    textDayHeaderFontSize?: number;
}

interface DayComponentProps {
    state?: '' | 'disabled' | 'today';
    theme?: CalendarTheme;
    onPress?: () => any;
    onLongPress?: () => any;
    date?: DateObject;
    marking?: false | Marking[];
}

interface CalendarBaseProps {
    style?: ViewProps;

    /**
     *  Specify theme properties to override specific styles for calendar parts. Default = {}
     */
    theme?: CalendarTheme;

    /**
     *  Initially visible month. Default = Date()
     */
    current?: Date | string;

    /**
     *  Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     */
    minDate?: Date | string;

    /**
     *  Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     */
    maxDate?: Date | string;

    /**
     *  Handler which gets executed on day press. Default = undefined
     */
    onDayPress?: (day: number) => void;

    /**
     *  Handler which gets executed on day long press. Default = undefined
     */
    onDayLongPress?: (day: number) => void;

    /**
     *  Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
     */
    monthFormat?: string;

    /**
     *  Handler which gets executed when visible month changes in calendar. Default = undefined
     */
    onMonthChange?: (month: number) => void;

    /**
     *  Hide month navigation arrows. Default = false
     */
    hideArrows?: boolean;

    /**
     *  Replace default arrows with custom ones (direction can be 'left' or 'right')
     */
    renderArrow?: (direction: 'left' | 'right') => React.ReactNode;

    /**
     *  Do not show days of other months in month page. Default = false
     */
    hideExtraDays?: boolean;

    /**
     *  If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
     *  day from another month that is visible in calendar page. Default = false
     */
    disableMonthChange?: boolean;

    /**
     *  If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
     */
    firstDay?: number;

    /**
     *  Hide day names. Default = false
     */
    hideDayNames?: number;

    /**
     *  Show week numbers to the left. Default = false
     */
    showWeekNumbers?: number;

    /**
     *  Handler which gets executed when press arrow icon left. It receive a callback can go back month
     */
    onPressArrowLeft?: (month: number) => void;

    /**
     *  Handler which gets executed when press arrow icon left. It receive a callback can go next month
     */
    onPressArrowRight?: (month: number) => void;

    /**
     * Custom day renderer
     */
    dayComponent?: React.Component<DayComponentProps> | React.SFC<DayComponentProps>
}

interface DotForMultiDot {
    key: string;
    color: string;
    selectedDotColor?: string;
}

interface MultiDotMarking {
    dots: Array<DotForMultiDot>;
    selected?: boolean;
    selectedColor?: string;
}

interface DotMarking {
    selected?: boolean;
    marked?: boolean;
    selectedColor?: string;
    dotColor?: string;
    activeOpacity?: number;
    disabled?: boolean;
    disableTouchEvent?: boolean;
}

interface PeriodMarking {
    textColor?: string;
    startDay?: boolean;
    color?: boolean;
    selected?: boolean;
    endingDay?: boolean;
}

interface MultiPeriodMarking {
    periods: {
        startingDay?: boolean;
        endingDay?: boolean;
        color?: string;
    }[];
}

interface CustomMarking {
    customStyles: {

    }
}

type Marking =
    MultiDotMarking |
    DotMarking |
    PeriodMarking |
    MultiPeriodMarking |
    CustomMarking;

interface MultiDotMarkingProps extends CalendarBaseProps {
    markingType: 'multi-dot';
    markedDates: {
        [date: string]: MultiDotMarking;
    };
}

interface DotMarkingProps extends CalendarBaseProps {
    markingType: 'simple';
    markedDates: {
        [date: string]: DotMarking;
    };
}

interface PeriodMarkingProps extends CalendarBaseProps {
    markingType: 'period';
    markedDates: {
        [date: string]: PeriodMarking;
    };
}

interface CustomMarkingProps extends CalendarBaseProps {
}

/**
 * This type of marking is only fully supported by <Calendar/> as it will expand the height
 * of the component
 */
interface MultiPeriodMarkingProps extends CalendarBaseProps {
    markingType: 'multi-period';
    markedDates: {
        [date: string]: MultiPeriodMarking
    }
}

type CalendarProps =
    | MultiDotMarkingProps
    | DotMarkingProps
    | PeriodMarkingProps
    | CalendarBaseProps
    | MultiPeriodMarkingProps;

export class Calendar extends React.Component<CalendarProps> {}

interface CalendarListBaseProps extends CalendarBaseProps {
    /**
     *  Callback which gets executed when visible months change in scroll view. Default = undefined
     */
    onVisibleMonthsChange?: (months: number) => void;
    /**
     *  Max amount of months allowed to scroll to the past. Default = 50
     */
    pastScrollRange?: number;
    /**
     *  Max amount of months allowed to scroll to the future. Default = 50
     */
    futureScrollRange?: number;
    /**
     *  Enable or disable scrolling of calendar list
     */
    scrollEnabled?: boolean;
    /**
     *  Enable or disable vertical scroll indicator. Default = false
     */
    showScrollIndicator?: boolean;
}

interface MultiDotMarkingCalendarListProps extends CalendarListBaseProps {
    markingType: 'multi-dot';
    markedDates: {
        [date: string]: MultiDotMarking;
    };
}

interface DotMarkingCalendarListProps extends CalendarListBaseProps {
    markingType: 'simple';
    markedDates: {
        [date: string]: DotMarking;
    };
}

interface PeriodMarkingCalendarListProps extends CalendarListBaseProps {
    markingType: 'period';
    markedDates: {
        [date: string]: PeriodMarking;
    };
}

type CalendarListProps =
    | MultiDotMarkingCalendarListProps
    | DotMarkingCalendarListProps
    | PeriodMarkingCalendarListProps
    | CalendarListBaseProps;

export class CalendarList extends React.Component<CalendarListProps> {}

interface AgendaProps<T> {
    /**
     * the list of items that have to be displayed in agenda. If you want to render item as empty date
     * the value of date key kas to be an empty array []. If there exists no value for date key it is
     * considered that the date in question is not yet loaded
     */
    items: {
        [key: string]: Array<T>;
    };
    /**
     * callback that gets called when items for a certain month should be loaded (month became visible)
     */
    loadItemsForMonth?: (date: DateObject) => void;
    /**
     * callback that fires when the calendar is opened or closed
     */
    onCalendarToggled?: (calendarOpened: boolean) => void;
    /**
     * callback that gets called on day press
     */
    onDayPress?: (day: number) => void;
    /**
     * callback that gets called when day changes while scrolling agenda list
     */
    onDayChange?: (day: number) => void;
    /**
     * initially selected day
     */
    selected?: Date | string;
    /**
     * Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     */
    minDate?: Date | string;
    /**
     * Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     */
    maxDate?: Date | string;
    /**
     * Max amount of months allowed to scroll to the past. Default = 50
     */
    pastScrollRange?: number;
    /**
     * Max amount of months allowed to scroll to the future. Default = 50
     */
    futureScrollRange?: number;
    /**
     * specify how each item should be rendered in agenda
     */
    renderItem: (item: T, firstItemInDay?: T) => React.ReactNode;
    /**
     * specify how each date should be rendered. day can be undefined if the item is not first in that day.
     */
    renderDay?: (params: { day: Date; item: T }) => React.ReactNode;
    /**
     * specify how empty date content with no items should be rendered
     */
    renderEmptyDate?: () => React.ReactNode;
    /**
     * specify how agenda knob should look like
     */
    renderKn?: () => React.ReactNode;
    /**
     * specify what should be rendered instead of ActivityIndicator
     */
    renderEmptyData?: () => React.ReactNode;
    /**
     * specify your item comparison function for increased performance
     */
    rowHasChanged?: (r1: any, r2: any) => boolean;
    /**
     * Hide knob button. Default = false
     */
    hideKnob?: boolean;
    /**
     * By default, agenda dates are marked if they have at least one item, but you can override this if needed
     */
    markedDates?: {
        [key: string]: {
            selected?: boolean;
            marked?: boolean;
            disabled: boolean;
        };
    };
    /**
     * agenda theme
     */
    theme?: {
        agendaDayTextColor?: string;
        agendaDayNumColor?: string;
        agendaTodayColor?: string;
        agendaKnobColor?: string;
    } & CalendarTheme;
    /**
     * agenda container style
     */
    style?: any;
}

export class Agenda<T> extends React.Component<AgendaProps<T>> {}
