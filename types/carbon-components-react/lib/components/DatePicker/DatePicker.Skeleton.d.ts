import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface DatePickerSkeletonProps extends InheritedProps {
    range?: boolean,
}

declare const DatePickerSkeleton: React.FC<DatePickerSkeletonProps>;

export default DatePickerSkeleton;
