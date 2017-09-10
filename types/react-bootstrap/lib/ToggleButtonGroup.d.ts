import * as React from 'react';

declare class ToggleButtonGroup extends React.Component<ToggleButtonGroupProps> { }
declare namespace ToggleButtonGroup { }
export = ToggleButtonGroup

interface ToggleButtonGroupProps extends React.HTMLProps<ToggleButtonGroup> {
    /** Required if `type` is set to "radio" */
    name?: string;
    type: "radio" | "checkbox";
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
