import * as React from "react";
import CalendarHeatmap, { ReactCalendarHeatmapDate, ReactCalendarHeatmapValue } from "react-calendar-heatmap";

// @ts-expect-error -- `props.value` is required.
<CalendarHeatmap />;

const values: Array<ReactCalendarHeatmapValue<ReactCalendarHeatmapDate>> = [
    { date: "2016-01-01" },
    { date: "2016-01-22" },
    { date: "2016-01-30" },
];

<CalendarHeatmap values={values} />;

<CalendarHeatmap
    values={values}
    classForValue={(value) => {
        value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
        return value ? "color-filled" : "color-empty";
    }}
/>;

<CalendarHeatmap
    values={values}
    endDate={new Date()}
/>;

<CalendarHeatmap
    values={values}
    gutterSize={2}
/>;

<CalendarHeatmap
    values={values}
    horizontal
/>;

<CalendarHeatmap
    values={values}
    monthLabels={["", "", "", "", "", "", "", "", "", "", "", ""]}
/>;

<CalendarHeatmap
    values={values}
    numDays={3}
/>;

<CalendarHeatmap
    values={values}
    onClick={(value) => {
        value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
    }}
/>;

<CalendarHeatmap
    values={values}
    onMouseLeave={(event, value) => {
        event; // $ExpectType MouseEvent<SVGRectElement, MouseEvent>
        value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
    }}
/>;

<CalendarHeatmap
    values={values}
    onMouseOver={(event, value) => {
        event; // $ExpectType MouseEvent<SVGRectElement, MouseEvent>
        value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
    }}
/>;

<CalendarHeatmap
    values={values}
    showMonthLabels
/>;

<CalendarHeatmap
    values={values}
    showOutOfRangeDays
/>;

<CalendarHeatmap
    values={values}
    showWeekdayLabels
/>;

<CalendarHeatmap
    values={values}
    startDate={new Date()}
/>;

<CalendarHeatmap
    values={values}
    titleForValue={(value) => {
        value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
        return "";
    }}
/>;

// tooltipDataAttrs can either be a value or a function
{
    <CalendarHeatmap
        values={values}
        tooltipDataAttrs={{ rx: 3 }}
    />;

    <CalendarHeatmap
        values={values}
        tooltipDataAttrs={(value) => {
            value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
            return { rx: 3 };
        }}
    />;
}

<CalendarHeatmap
    values={values}
    transformDayElement={(rect, value, index) => {
        rect = <rect />; // ExpectType SVGProps<SVGRectElement>
        value; // $ExpectType ReactCalendarHeatmapValue<ReactCalendarHeatmapDate> | undefined
        index; // $ExpectType number

        return "";
    }}
/>;

<CalendarHeatmap
    values={values}
    weekdayLabels={["", "", "", "", "", "", ""]}
/>;
