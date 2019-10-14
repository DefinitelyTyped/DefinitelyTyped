import * as React from "react";

export type FormMessageType = "error" | "warning" | "help";

export type FormMessageProps = {
    className?: string;
    type?: FormMessageType;
} & { [x: string]: any };

declare const FormMessage: React.FunctionComponent<FormMessageProps>;

export default FormMessage;
