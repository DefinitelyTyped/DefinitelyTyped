import { BaseOptions, DateOption, Hook } from "flatpickr/dist/types/options";
import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface DatePickerProps extends Omit<ReactDivAttr, "onChange"> {
    allowInput?: boolean,
    appendTo?: string | HTMLElement,
    dateFormat?: string,
    datePickerType?: "range" | "single" | "simple",
    disable?: BaseOptions["disable"];
    enable?: BaseOptions["enable"];
    light?: boolean,
    locale?: BaseOptions["locale"],
    maxDate?: BaseOptions["maxDate"],
    minDate?: BaseOptions["minDate"],
    onChange?: Hook,
    onClose?: BaseOptions["onClose"],
    onOpen?: BaseOptions["onOpen"],
    short?: boolean,
    value?: DateOption | readonly DateOption[],
}

declare class DatePicker extends React.Component<DatePickerProps> { }

export default DatePicker;
