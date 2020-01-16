import * as React from "react";

export type FormRadioItemProps = {
    /* Set to **true** when radio input is checked and a controlled component. */
    checked?: boolean;
    className?: string;
    /* Set to **true** when the radio input is checked and an uncontrolled component. */
    defaultChecked?: boolean;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    /* Sets the `name` for the radio input. */
    name?: string;
    /* Sets the `value` for the radio input. */
    value?: string;
} & { [x: string]: any };

declare const FormRadioItem: React.FunctionComponent<FormRadioItemProps>;

export default FormRadioItem;
