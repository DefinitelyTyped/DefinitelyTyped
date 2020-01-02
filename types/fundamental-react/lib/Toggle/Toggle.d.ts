import * as React from "react";
import { FormItemProps } from '../Forms/FormItem';
import { FormLabelProps } from '../Forms/FormLabel';

export type ToggleSize = "xs" | "s" | "m" | "l";

export type ToggleProps = {
    checked?: boolean;
    className?: string;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    inputProps?: { [x: string]: any };
    labelProps?: FormLabelProps;
    size?: ToggleSize;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & FormItemProps;

declare class Toggle extends React.Component<ToggleProps> {
    static displayName: "Toggl";
}

export default Toggle;
