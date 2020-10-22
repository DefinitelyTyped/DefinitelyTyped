import * as React from "react";

export type FormItemProps = {
    className?: string;
    disableStyles?: boolean;
    isHorizontal?: boolean;
    isInline?: boolean;
} & { [x: string]: any };

declare const FormItem: React.FunctionComponent<FormItemProps>;

export default FormItem;
