import * as React from "react";

export interface TimePickerSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
    iconDescription?: string,
    id: string,
    inline?: boolean,
    labelText: NonNullable<React.ReactNode>,
}

declare class TimePickerSelect extends React.Component<TimePickerSelectProps> { }

export default TimePickerSelect;
