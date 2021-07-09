// Type definitions for react-native-calendars 1.505
// Project: https://github.com/wix/react-native-calendars#readme
// Definitions by: Tyler Zhang <https://github.com/Tyler-Zhang>
//                 David Noreña <https://github.com/DavidNorena>
//                 Fabian Meul <https://github.com/FabianMeul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import XDateLocaleConfig = require("xdate");

export class LocaleConfig extends XDateLocaleConfig {
    static locales: { [key: string]: typeof XDateLocaleConfig.locales[string] & { today: string } };
}

export interface DateObject {
    day: number;
    dateString: string;
    month: number;
    timestamp: number;
    year: number;
}

export interface CalendarDot {
    key: string;
    color: string;
    selectedDotColor?: string | undefined;
}

export interface CalendarThemeIdStyle {
    [themeId: string]: ViewStyle | TextStyle;
}

export interface CalendarTheme {
    arrowColor?: string | undefined;
    backgroundColor?: string | undefined;
    calendarBackground?: string | undefined;
    dayTextColor?: string | undefined;
    dotColor?: string | undefined;
    monthTextColor?: string | undefined;
    selectedDayBackgroundColor?: string | undefined;
    selectedDayTextColor?: string | undefined;
    selectedDotColor?: string | undefined;
    textDayFontFamily?: string | undefined;
    textDayFontSize?: number | undefined;
    textDayFontWeight?: string | undefined;
    textDayHeaderFontFamily?: string | undefined;
    textDayHeaderFontSize?: number | undefined;
    textDayHeaderFontWeight?: string | undefined;
    textDisabledColor?: string | undefined;
    textMonthFontFamily?: string | undefined;
    textMonthFontWeight?: string | undefined;
    textMonthFontSize?: number | undefined;
    textSectionTitleColor?: string | undefined;
    todayTextColor?: string | undefined;
    indicatorColor?: string | undefined;
    textDayStyle?: TextStyle | undefined;
    dotStyle?: ViewStyle | undefined;
    arrowStyle?: ViewStyle | undefined;

    // Theme ID's to style for
    "stylesheet.calendar.header"?: CalendarThemeIdStyle | undefined;
    "stylesheet.calendar.main"?: CalendarThemeIdStyle | undefined;
    "stylesheet.calendar-list.main"?: CalendarThemeIdStyle | undefined;
    "stylesheet.agenda.main"?: CalendarThemeIdStyle | undefined;
    "stylesheet.agenda.list"?: CalendarThemeIdStyle | undefined;
    "stylesheet.day.basic"?: CalendarThemeIdStyle | undefined;
    "stylesheet.day.single"?: CalendarThemeIdStyle | undefined;
    "stylesheet.day.multiDot"?: CalendarThemeIdStyle | undefined;
    "stylesheet.day.period"?: CalendarThemeIdStyle | undefined;
    "stylesheet.dot"?: CalendarThemeIdStyle | undefined;
}

export type DateCallbackHandler = (date: DateObject) => void;

export type TCalendarDate = Date | DateObject | number | string | XDate;

export interface MarkedDateCustomStyles {
    container: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
}

export interface CalendarDot {
    key: string;
    color: string;
    selectedDotColor?: string | undefined;
}

export interface CustomMarking {
    customStyles: MarkedDateCustomStyles;
}

export interface DotMarking {
    activeOpacity?: number | undefined;
    disabled?: boolean | undefined;
    disableTouchEvent?: boolean | undefined;
    dotColor?: string | undefined;
    marked?: boolean | undefined;
    selected?: boolean | undefined;
    selectedColor?: string | undefined;
}

export interface MultiDotMarking {
    disabled?: boolean | undefined;
    dots: CalendarDot[];
    selected?: boolean | undefined;
    selectedColor?: string | undefined;
}

export interface MultiPeriodMarking {
    periods: Array<{
        startingDay?: boolean | undefined;
        endingDay?: boolean | undefined;
        color?: string | undefined;
    }>;
    disabled?: boolean | undefined;
    selected?: boolean | undefined;
}

export interface PeriodMarking {
    textColor?: string | undefined;
    startingDay?: boolean | undefined;
    color?: string | undefined;
    selected?: boolean | undefined;
    endingDay?: boolean | undefined;
    disabled?: boolean | undefined;
}

export type Marking = CustomMarking | DotMarking | MultiDotMarking | MultiPeriodMarking | PeriodMarking;

export interface CustomMarkingProps {
    markingType: "custom";
    markedDates: {
        [date: string]: CustomMarking;
    };
}

export interface DotMarkingProps {
    markingType?: "simple" | undefined;
    markedDates: {
        [date: string]: DotMarking;
    };
}

export interface MultiDotMarkingProps {
    markingType: "multi-dot";
    markedDates: {
        [date: string]: MultiDotMarking;
    };
}

/**
 * This type of marking is only fully supported by <Calendar/> as it will expand the height
 * of the component
 */
export interface MultiPeriodMarkingProps {
    markingType: "multi-period";
    markedDates: {
        [date: string]: MultiPeriodMarking;
    };
}

export interface PeriodMarkingProps {
    markingType: "period";
    markedDates: {
        [date: string]: PeriodMarking;
    };
}

export type CalendarMarkingProps =
    | MultiDotMarkingProps
    | DotMarkingProps
    | PeriodMarkingProps
    | MultiPeriodMarkingProps
    | CustomMarkingProps
    | {};

export interface DayComponentProps {
    date: DateObject;
    marking: false | Marking[];
    onPress: (date: DateObject) => any;
    onLongPress: (date: DateObject) => any;
    state: "" | "selected" | "disabled" | "today";
    theme: CalendarTheme;
}

export interface CalendarBaseProps {
    /**
     *  Initially visible month. Default = Date()
     */
    current?: TCalendarDate | undefined;

    /**
     *  Provide custom day rendering component.
     */
    dayComponent?: React.Component<DayComponentProps> | React.FC<DayComponentProps> | undefined;

    /**
     *  Disable days by default. Default = false
     */
    disabledByDefault?: boolean | undefined;

    /**
     *  Disable left arrow. Default = false
     */
    disableArrowLeft?: boolean | undefined;

    /**
     *  Disable right arrow. Default = false
     */
    disableArrowRight?: boolean | undefined;

    /**
     *  If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
     *  day from another month that is visible in calendar page. Default = false
     */
    disableMonthChange?: boolean | undefined;

    /**
     *  Display loading indicator. Default = false
     */
    displayLoadingIndicator?: boolean | undefined;

    /**
     *  If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
     */
    firstDay?: number | undefined;

    /**
     *  Style passed to the header
     */
    headerStyle?: StyleProp<ViewStyle> | undefined;

    /**
     *  Hide month navigation arrows. Default = false
     */
    hideArrows?: boolean | undefined;

    /**
     *  Hide day names. Default = false
     */
    hideDayNames?: boolean | undefined;

    /**
     *  Do not show days of other months in month page. Default = false
     */
    hideExtraDays?: boolean | undefined;

    /**
     *  Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     */
    maxDate?: TCalendarDate | undefined;

    /**
     *  Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     */
    minDate?: TCalendarDate | undefined;

    /**
     *  Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
     */
    monthFormat?: string | undefined;

    /**
     *  Handler which gets executed on day press. Default = undefined
     */
    onDayPress?: DateCallbackHandler | undefined;

    /**
     *  Handler which gets executed on day long press. Default = undefined
     */
    onDayLongPress?: DateCallbackHandler | undefined;

    /**
     *  Handler which gets executed when press arrow icon left. It receive a callback can go back month
     */
    onPressArrowLeft?: ((substractMonth: () => void) => void) | undefined;

    /**
     *  Handler which gets executed when press arrow icon left. It receive a callback can go next month
     */
    onPressArrowRight?: ((addMonth: () => void) => void) | undefined;

    /**
     *  Handler which gets executed when visible month changes in calendar. Default = undefined
     */
    onMonthChange?: DateCallbackHandler | undefined;

    /**
     *  Callback which gets executed when visible months change in scroll view. Default = undefined
     */
    onVisibleMonthsChange?: ((months: DateObject[]) => void) | undefined;

    /**
     *  Replace default arrows with custom ones (direction can be 'left' or 'right')
     */
    renderArrow?: ((direction: "left" | "right") => React.ReactNode) | undefined;

    /**
     *  Show week numbers to the left. Default = false
     */
    showWeekNumbers?: boolean | undefined;

    /**
     *  Calendar container style.
     */
    style?: StyleProp<ViewStyle> | undefined;

    /**
     *  Specify theme properties to override specific styles for calendar parts. Default = {}
     */
    theme?: CalendarTheme | undefined;

    /**
     *  Provide aria-level for calendar heading for proper accessibility when used with web (react-native-web)
     */
    webAriaLevel?: number | undefined;
    /*
     *  Replace default month and year title with custom one. the function receive a date as parameter.
     */
    renderHeader?: ((date: Date) => React.ReactNode) | undefined;
}

export type CalendarProps = CalendarMarkingProps &
    CalendarBaseProps & {
        /**
         * Enable the option to swipe between months. Default = false
         */
        enableSwipeMonths?: boolean | undefined;
    };

export class Calendar extends React.Component<CalendarProps> {}

export interface CalendarListBaseProps extends CalendarBaseProps {
    /**
     *  Set custom calendar heigth.
     */
    calendarHeight?: number | undefined;

    /**
     *  Set custom calendar width.
     */
    calendarWidth?: number | undefined;

    /**
     *  Max amount of months allowed to scroll to the future. Default = 50
     */
    futureScrollRange?: number | undefined;

    /**
     *  Enable horizontal scrolling, default = false
     */
    horizontal?: boolean | undefined;

    /**
     *  Enable paging on horizontal, default = false
     */
    pagingEnabled?: boolean | undefined;

    /**
     *  Max amount of months allowed to scroll to the past. Default = 50
     */
    pastScrollRange?: number | undefined;

    /**
     *  Enable or disable scrolling of calendar list
     */
    scrollEnabled?: boolean | undefined;

    /**
     *  When true, the calendar list scrolls to top when the status bar is tapped. Default = true
     */
    scrollsToTop?: boolean | undefined;

    /**
     *  Enable or disable vertical scroll indicator. Default = false
     */
    showScrollIndicator?: boolean | undefined;

    /**
     * Initially selected day
     */
    selected?: string | undefined;
}

export class CalendarList extends React.Component<CalendarMarkingProps & CalendarListBaseProps> {}

export interface AgendaThemeStyle extends CalendarTheme {
    agendaDayNumColor?: string | undefined;
    agendaDayTextColor?: string | undefined;
    agendaKnobColor?: string | undefined;
    agendaTodayColor?: string | undefined;
}

export interface AgendaItemsMap<TItem> {
    [date: string]: TItem[];
}

export interface AgendaProps<TItem> {
    /**
     *  Display loading indicator. Default = false
     */
    displayLoadingIndicator?: boolean | undefined;

    /**
     *  If firstDay = 1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
     */
    firstDay?: number | undefined;

    /**
     *  Max amount of months allowed to scroll to the future. Default = 50
     */
    futureScrollRange?: number | undefined;

    /**
     *  Hide knob button. Default = false
     */
    hideKnob?: boolean | undefined;

    /**
     *  The list of items that have to be displayed in agenda. If you want to render item as empty date
     *  the value of date key kas to be an empty array []. If there exists no value for date key it is
     *  considered that the date in question is not yet loaded
     */
    items?: AgendaItemsMap<TItem> | undefined;

    /**
     * callback that gets called when items for a certain month should be loaded (month became visible)
     */
    loadItemsForMonth?: ((date: DateObject) => void) | undefined;

    /**
     * Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     */
    maxDate?: TCalendarDate | undefined;

    /**
     * Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     */
    minDate?: TCalendarDate | undefined;

    /**
     *  Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
     */
    monthFormat?: string | undefined;

    /**
     *  Handler which gets executed on day press. Default = undefined
     */
    onDayPress?: DateCallbackHandler | undefined;

    /**
     *  Handler which gets executed when the calendar is opened or closed. Default = undefined
     */
    onCalendarToggled?: ((calendarOpened: boolean) => void) | undefined;

    /**
     *  Handler that gets called when day changes while scrolling agenda list. Default = undefined
     */
    onDayChange?: DateCallbackHandler | undefined;

    /**
     *  If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
     *  Make sure to also set the refreshing prop correctly. Default = undefined
     */
    onRefresh?: (() => void) | undefined;

    /**
     *  Max amount of months allowed to scroll to the past. Default = 50
     */
    pastScrollRange?: number | undefined;

    /**
     *  A RefreshControl component, used to provide pull-to-refresh funtionality for the ScrollView.
     */
    refreshControl?: React.ReactNode | undefined;

    /**
     *  Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean | undefined;

    /**
     *  Specify how each day should be rendered.
     *  Date can be undefined if the item has not property date.
     */
    renderDay?: ((date: DateObject | undefined, item: TItem) => React.ReactNode) | undefined;

    /**
     *  Specify what should be rendered instead of ActivityIndicator
     */
    renderEmptyData?: (() => React.ReactNode) | undefined;

    /**
     *  Specify how empty date content with no items should be rendered.
     */
    renderEmptyDate: () => React.ReactNode;

    /**
     *  Specify how each item should be rendered in agenda.
     */
    renderItem: (item: TItem, firstDayInDay: boolean) => React.ReactNode;

    /**
     *  Specify how agenda knob should look like.
     */
    renderKnob?: (() => React.ReactNode) | undefined;

    /**
     * specify your item comparison function for increased performance
     */
    rowHasChanged: (r1: TItem, r2: TItem) => boolean;

    /**
     *  Initially visible month. Default = Date()
     */
    selected?: TCalendarDate | undefined;

    /**
     *  Agenda container style.
     */
    style?: StyleProp<ViewStyle> | undefined;

    /**
     *  Specify theme properties to override specific styles for agenda parts. Default = {}
     */
    theme?: AgendaThemeStyle | undefined;
}
export class Agenda<TItem> extends React.Component<AgendaProps<TItem> & CalendarMarkingProps> {}

export interface TimelineEvent {
    start: string;
    end: string;
    title: string;
    summary: string;
    color?: string | undefined;
}

export interface TimelineProps {
    /**
     *  Start time of the timeline. Default = 0
     */
    start?: number | undefined;

    /**
     *  End time of the timeline. Default = 24
     */
    end?: number | undefined;

    /**
     *  Handler whick gets executed when on event tap. Default = undefined
     */
    eventTapped?: ((event: TimelineEvent) => any) | undefined;

    /**
     *  Time format. Default = true
     */
    format24h?: boolean | undefined;

    /**
     *  Array of events. Default = []
     */
    events?: TimelineEvent[] | undefined;
}

export class Timeline extends React.PureComponent<TimelineProps> {}
