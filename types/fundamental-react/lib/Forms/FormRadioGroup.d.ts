import * as React from "react";

export type FormRadioGroupProps = {
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    /* Set to **true** to display radio buttons in a row. */
    inline?: boolean;
    onChange?: (...args: any[]) => any;
} & { [x: string]: any };

declare class FormRadioGroup extends React.Component<FormRadioGroupProps> {}

export default FormRadioGroup;
