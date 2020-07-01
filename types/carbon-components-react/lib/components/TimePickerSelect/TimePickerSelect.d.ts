import * as React from "react";
import { EmbeddedIconProps, RequiresIdProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id">,
    EmbeddedIconProps,
    RequiresIdProps
{ }

export interface TimePickerSelectProps extends InheritedProps {
    inline?: boolean,
    labelText: NonNullable<React.ReactNode>,
}

declare class TimePickerSelect extends React.Component<TimePickerSelectProps> { }

export default TimePickerSelect;
