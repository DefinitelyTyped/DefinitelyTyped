import { BaseOptions, DateOption, Hook } from "flatpickr/dist/types/options";
import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface DatePickerProps extends Omit<ReactDivAttr, "onChange"> {
    allowInput?: boolean | undefined,
    appendTo?: string | HTMLElement | undefined,
    dateFormat?: string | undefined,
    datePickerType?: "range" | "single" | "simple" | undefined,
    disable?: BaseOptions["disable"] | undefined;
    enable?: BaseOptions["enable"] | undefined;
    inline?: BaseOptions["inline"] | undefined;
    light?: boolean | undefined,
    locale?: BaseOptions["locale"] | undefined,
    maxDate?: BaseOptions["maxDate"] | undefined,
    minDate?: BaseOptions["minDate"] | undefined,
    onChange?: Hook | undefined,
    onClose?: BaseOptions["onClose"] | undefined,
    onOpen?: BaseOptions["onOpen"] | undefined,
    short?: boolean | undefined,
    value?: DateOption | readonly DateOption[] | undefined,
}

declare class DatePicker extends React.Component<DatePickerProps> { }

export default DatePicker;
