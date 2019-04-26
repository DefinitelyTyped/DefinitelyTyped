import * as React from "react";

export type DropdownProps = {
    className?: string;
    /* Set to **true** to enable a dropdown for toolbar. */
    standard?: boolean;
} & { [x: string]: any };

export const Dropdown: React.FunctionComponent<DropdownProps>;
