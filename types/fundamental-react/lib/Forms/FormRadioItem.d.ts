import * as React from "react";

export type FormRadioItemProps = {
    checked?: boolean | undefined;
    className?: string | undefined;
    compact?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    id?: string | undefined;
    inline?: boolean | undefined;
    inputProps?: any;
    labelProps?: any;
    name?: string | undefined;
    state?: any;
    value?: string | undefined;
} & { [x: string]: any };

declare const FormRadioItem: React.FunctionComponent<FormRadioItemProps>;

export default FormRadioItem;
