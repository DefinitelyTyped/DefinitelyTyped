import * as React from "react";

export interface CalendarBaseProps {
    /* Blocks dates that are in between the blocked dates. */
    blockedDates?: Date[];
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Disables dates of a calendar that come after the specified date. */
    disableAfterDate?: Date;
    /* Disables dates of a calendar that come before the specified date. */
    disableBeforeDate?: Date;
    /* Disables dates that are in between the disabled dates. */
    disabledDates?: Date[];
    /* Set to **true** to disable dates after today's date. */
    disableFutureDates?: boolean;
    /* Set to **true** to disable dates before today's date. */
    disablePastDates?: boolean;
    /* Disables dates that match a weekday. */
    disableWeekday?: string[];
    /* Set to **true** to disables dates that match a weekend. */
    disableWeekends?: boolean;
}

export type CalendarProps = CalendarBaseProps & {
    localizedText?: {
        /* Full name for Sunday. */
        day1Sun: string;
        /* Full name for Monday. */
        day2Mon: string;
        /* Full name for Tuesday. */
        day3Tues: string;
        /* Full name for Wednesday. */
        day4Wed: string;
        /* Full name for Thursday. */
        day5Thurs: string;
        /* Full name for Friday. */
        day6Fri: string;
        /* Full name for Saturday. */
        day7Sat: string;
        /* Single character for Sunday. */
        dayChar1Sun: string;
        /* Single character for Monday. */
        dayChar2Mon: string;
        /* Single character for Tuesday. */
        dayChar3Tues: string;
        /* Single character for Wednesday. */
        dayChar4Wed: string;
        /* Single character for Thursday. */
        dayChar5Thurs: string;
        /* Single character for Friday. */
        dayChar6Fri: string;
        /* Single character for Saturday. */
        dayChar7Sat: string;
        /* Full name for January. */
        month01Jan: string;
        /* Full name for February. */
        month02Feb: string;
        /* Full name for March. */
        month03Mar: string;
        /* Full name for April. */
        month04Apr: string;
        /* Full name for May. */
        month05May: string;
        /* Full name for June. */
        month06Jun: string;
        /* Full name for July. */
        month07Jul: string;
        /* Full name for August. */
        month08Aug: string;
        /* Full name for September. */
        month09Sep: string;
        /* Full name for October. */
        month10Oct: string;
        /* Full name for November. */
        month11Nov: string;
        /* Full name for December. */
        month12Dec: string;
    };
    /* Additional props to be spread to the month's `<ul>` element. */
    monthListProps?: { [x: string]: any };
    /* Additional props to be spread to the `<tbody>` element. */
    tableBodyProps?: { [x: string]: any };
    /* 'Additional props to be spread to the `<thead>` element.' */
    tableHeaderProps?: { [x: string]: any };
    /* Additional props to be spread to the `<table>` element. */
    tableProps?: { [x: string]: any };
    /* Additional props to be spread to the year's `<ul>` element. */
    yearListProps?: { [x: string]: any };
    onChange?: (date: Date) => void;
} & { [x: string]: any };

declare class Calendar extends React.Component<CalendarProps> {}

export default Calendar;
