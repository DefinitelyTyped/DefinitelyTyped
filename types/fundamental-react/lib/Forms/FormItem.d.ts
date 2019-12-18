import * as React from "react";

export type FormItemProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Set to **true** to render an `<input>` with `type` of **checkbox**. */
    isCheck?: boolean;
    /* Set to **true** to display radio buttons and checkboxes in a row. */
    isInline?: boolean;
} & { [x: string]: any };

declare const FormItem: React.FunctionComponent<FormItemProps>;

export default FormItem;
