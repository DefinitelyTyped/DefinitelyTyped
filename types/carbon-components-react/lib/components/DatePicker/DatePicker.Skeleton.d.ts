import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    id?: ReactAttr["id"],
}

export interface DatePickerSkeletonProps extends InheritedProps {
    range?: boolean,
}

declare const DatePickerSkeleton: React.FC<DatePickerSkeletonProps>;

export default DatePickerSkeleton;
