import * as React from "react";

export interface AddToCalendarEvent {
    title?: string | undefined;
    description?: string | undefined;
    location?: string | undefined;
    startTime?: string | Date | undefined;
    endTime?: string | Date | undefined;
}

export interface AddToCalendarProps {
    buttonClassClosed?: string | undefined;
    buttonClassOpen?: string | undefined;
    buttonLabel?: string | undefined;
    buttonTemplate?: any;
    buttonIconClass?: string | undefined;
    useFontAwesomeIcons?: boolean | undefined;
    buttonWrapperClass?: string | undefined;
    displayItemIcons?: boolean | undefined;
    optionsOpen?: boolean | undefined;
    dropdownClass?: string | undefined;
    event: AddToCalendarEvent;
    listItems?: any[] | undefined;
    rootClass?: string | undefined;
}

declare const ReactAddToCalendar: React.ComponentClass<AddToCalendarProps>;

export default ReactAddToCalendar;
