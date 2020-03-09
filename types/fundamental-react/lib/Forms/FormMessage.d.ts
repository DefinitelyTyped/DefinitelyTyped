import * as React from "react";

export type FormMessageType = "error" | "warning" | "help";

export type FormMessageProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    type?: FormMessageType;
} & { [x: string]: any };

declare const FormMessage: React.FunctionComponent<FormMessageProps>;

export default FormMessage;
