import * as React from "react";

export type FormRadioItemProps = {
    checked?: boolean;
    className?: string;
    compact?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    inline?: boolean;
    inputProps?: any;
    labelProps?: any;
    name?: string;
    state?: any;
    value?: string;
} & { [x: string]: any };

declare const FormRadioItem: React.FunctionComponent<FormRadioItemProps>;

export default FormRadioItem;
