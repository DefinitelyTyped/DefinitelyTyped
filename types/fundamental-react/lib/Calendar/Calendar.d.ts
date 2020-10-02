import * as React from "react";

export interface CalendarBaseProps {
    blockedDates?: Date[];
    disableStyles?: boolean;
    disableAfterDate?: Date;
    disableBeforeDate?: Date;
    disabledDates?: Date[];
    disableFutureDates?: boolean;
    disablePastDates?: boolean;
    disableWeekday?: string[];
    disableWeekends?: boolean;
    localizedText?: {
        nextMonth?: string
        previousMonth?: string
        show12NextYears?: string
        show12PreviousYears?: string
    };
}

export type CalendarProps = CalendarBaseProps & {
    monthListProps?: { [x: string]: any };
    tableBodyProps?: { [x: string]: any };
    tableHeaderProps?: { [x: string]: any };
    tableProps?: { [x: string]: any };
    yearListProps?: { [x: string]: any };
    onChange?: (date: Date) => void;
} & { [x: string]: any };

declare class Calendar extends React.Component<CalendarProps> {}

export default Calendar;
