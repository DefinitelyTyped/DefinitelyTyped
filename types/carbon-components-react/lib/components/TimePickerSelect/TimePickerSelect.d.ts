import * as React from "react";

export interface TimePickerSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
    /**
     * @deprecated
     */
    iconDescription?: string | undefined,
    id: string,
    labelText: NonNullable<React.ReactNode>,
}

declare class TimePickerSelect extends React.Component<TimePickerSelectProps> { }

export default TimePickerSelect;
