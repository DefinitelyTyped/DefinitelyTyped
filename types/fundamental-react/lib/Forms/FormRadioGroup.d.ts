import * as React from "react";

export type FormRadioGroupProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    inline?: boolean | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
} & { [x: string]: any };

declare class FormRadioGroup extends React.Component<FormRadioGroupProps> {}

export default FormRadioGroup;
