// Type definitions for react-add-to-calendar 0.1
// Project: https://github.com/jasonsalzman/react-add-to-calendar
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface AddToCalendarEvent {
    title?: string;
    description?: string;
    location?: string;
    startTime?: string | Date;
    endTime?: string | Date;
}

export interface AddToCalendarProps {
    buttonClassClosed?: string;
    buttonClassOpen?: string;
    buttonLabel?: string;
    buttonTemplate?: any;
    buttonIconClass?: string;
    useFontAwesomeIcons?: boolean;
    buttonWrapperClass?: string;
    displayItemIcons?: boolean;
    optionsOpen?: boolean;
    dropdownClass?: string;
    event: AddToCalendarEvent;
    listItems?: any[];
    rootClass?: string;
}

declare const ReactAddToCalendar: React.ComponentClass<AddToCalendarProps>;

export default ReactAddToCalendar;
