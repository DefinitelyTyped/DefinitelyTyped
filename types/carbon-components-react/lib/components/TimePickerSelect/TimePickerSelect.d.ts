import * as React from "react";

export interface TimePickerSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
    iconDescription?: string | undefined,
    id: string,
    inline?: boolean | undefined,
    labelText: NonNullable<React.ReactNode>,
}

declare class TimePickerSelect extends React.Component<TimePickerSelectProps> { }

export default TimePickerSelect;
