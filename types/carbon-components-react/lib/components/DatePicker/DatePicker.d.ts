import { key as LocaleKey } from "flatpickr/dist/types/locale";
import { DateOption, Hook } from "flatpickr/dist/types/options";
import * as React from "react";
import { ReactDivAttr, ThemeProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactDivAttr, "onChange">,
    ThemeProps
{ }

export interface DatePickerProps extends InheritedProps {
    appendTo?: string | HTMLElement,
    dateFormat?: string,
    datePickerType?: "range" | "single" | "simple",
    locale?: LocaleKey,
    maxDate?: DateOption,
    minDate?: DateOption,
    onChange?: Hook,
    short?: boolean,
    value?: DateOption | DateOption[],
}

declare class DatePicker extends React.Component<DatePickerProps> { }

export default DatePicker;
