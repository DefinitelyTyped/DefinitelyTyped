import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-labelledby" | "id" | "onChange" | "onKeyUp" | "size" | "type";

export interface ToggleProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultToggled?: boolean | undefined;
    id: string;
    labelA?: string | undefined; // required but has default value
    labelB?: string | undefined; // required but has default value
    labelText?: string | undefined;
    onChange?(event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void;
    onToggle?(
        checked: boolean,
        id: ToggleProps["id"],
        event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>,
    ): void;
    size?: "sm" | "md" | undefined;
    toggled?: boolean | undefined;
}

declare class Toggle extends React.Component<ToggleProps> {}

export default Toggle;
