import * as React from "react";

export type FormItemProps = {
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    isHorizontal?: boolean | undefined;
    isInline?: boolean | undefined;
} & { [x: string]: any };

declare const FormItem: React.FunctionComponent<FormItemProps>;

export default FormItem;
