// Type definitions for react-add-to-calendar 0.1
// Project: https://github.com/jasonsalzman/react-add-to-calendar
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
