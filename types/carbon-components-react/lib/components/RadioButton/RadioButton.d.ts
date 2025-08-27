import * as React from "react";
import { ForwardRefReturn, ReactInputAttr } from "../../../typings/shared";

// NOTE: The index does not export * on this file because non-default export of RadioButton clashs with RadioButton at the top-level index.
//       You'll need to export types manually in this directory's index file.

export type RadioButtonValue = string | number;

type ExcludedAttributes = "onChange" | "ref" | "type" | "value";

export interface RadioButtonProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultChecked?: boolean | undefined;
    hideLabel?: boolean | undefined;
    /**
     * top/bottom are deprecated
     */
    labelPosition?: "bottom" | "left" | "right" | "top" | undefined;
    labelText?: React.ReactNode | undefined; // required but has default value
    onChange?(
        value: RadioButtonProps["value"],
        name: RadioButtonProps["name"],
        event: React.ChangeEvent<HTMLInputElement>,
    ): void; // required but has default value
    value?: RadioButtonValue | undefined; // required but has default value
}

declare class RadioButtonComponent extends React.Component<RadioButtonProps> {}
export { RadioButtonComponent as RadioButton };

declare const RadioButton: ForwardRefReturn<HTMLInputElement, RadioButtonProps>;
export default RadioButton;
