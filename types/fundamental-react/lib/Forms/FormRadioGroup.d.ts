import * as React from "react";

export type FormRadioGroupProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    inline?: boolean;
    onChange?: (...args: any[]) => any;
} & { [x: string]: any };

declare class FormRadioGroup extends React.Component<FormRadioGroupProps> {}

export default FormRadioGroup;
