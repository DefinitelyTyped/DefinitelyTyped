import * as React from "react";

export interface CalendarBaseProps {
    blockedDates?: Date[] | undefined;
    disableStyles?: boolean | undefined;
    disableAfterDate?: Date | undefined;
    disableBeforeDate?: Date | undefined;
    disabledDates?: Date[] | undefined;
    disableFutureDates?: boolean | undefined;
    disablePastDates?: boolean | undefined;
    disableWeekday?: string[] | undefined;
    disableWeekends?: boolean | undefined;
    localizedText?: {
        nextMonth?: string | undefined;
        previousMonth?: string | undefined;
        show12NextYears?: string | undefined;
        show12PreviousYears?: string | undefined;
    } | undefined;
}

export type CalendarProps = CalendarBaseProps & {
    monthListProps?: { [x: string]: any } | undefined;
    tableBodyProps?: { [x: string]: any } | undefined;
    tableHeaderProps?: { [x: string]: any } | undefined;
    tableProps?: { [x: string]: any } | undefined;
    yearListProps?: { [x: string]: any } | undefined;
    onChange?: ((date: Date) => void) | undefined;
} & { [x: string]: any };

declare class Calendar extends React.Component<CalendarProps> {}

export default Calendar;
