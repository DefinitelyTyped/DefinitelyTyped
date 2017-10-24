import * as React from 'react';
import { Omit } from "../index";

declare namespace ToggleButtonGroup {
    interface BaseProps {
        /**
         * You'll usually want to use string|number|string[]|number[] here,
         * but you can technically use any|any[].
         */
        defaultValue?: any;
        /**
         * You'll usually want to use string|number|string[]|number[] here,
         * but you can technically use any|any[].
         */
        value?: any;
    }

    interface RadioProps {
        /** Required if `type` is set to "radio" */
        name: string;
        type: "radio";
    }

    interface CheckboxProps {
        name?: string;
        type: "checkbox";
    }

    export type ToggleButtonGroupProps = BaseProps
                                       & (RadioProps | CheckboxProps)
                                       & Omit<React.HTMLProps<ToggleButtonGroup>, "defaultValue" | "type" | "value">;

}
declare class ToggleButtonGroup extends React.Component<ToggleButtonGroup.ToggleButtonGroupProps> { }
export = ToggleButtonGroup;
