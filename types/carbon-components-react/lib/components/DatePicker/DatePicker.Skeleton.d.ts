import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface DatePickerSkeletonProps extends ReactDivAttr {
    range?: boolean,
}

declare const DatePickerSkeleton: React.FC<DatePickerSkeletonProps>;

export default DatePickerSkeleton;
