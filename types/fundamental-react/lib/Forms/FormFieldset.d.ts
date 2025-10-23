import React = require("react");

export type FormFieldsetProps = {
    className?: string | undefined;
    disableStyles?: boolean | undefined;
} & { [x: string]: any };

declare const FormFieldset: React.FunctionComponent<FormFieldsetProps>;

export default FormFieldset;
