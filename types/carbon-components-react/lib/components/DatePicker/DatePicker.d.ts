import { key as LocaleKey } from "flatpickr/dist/types/locale";
import { BaseOptions, DateOption, Hook } from "flatpickr/dist/types/options";
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
    maxDate?: BaseOptions["maxDate"],
    minDate?: BaseOptions["minDate"],
    onChange?: Hook,
    onClose?: BaseOptions["onClose"],
    short?: boolean,
    value?: DateOption | readonly DateOption[],
}

declare class DatePicker extends React.Component<DatePickerProps> { }

export default DatePicker;
