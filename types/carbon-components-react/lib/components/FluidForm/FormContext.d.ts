import React = require("react");

export interface FormContextProps {
    isFluid?: boolean | undefined;
}

export declare const FormContext: React.Context<FormContextProps>;
