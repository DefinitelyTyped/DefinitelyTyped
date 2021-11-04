import * as React from 'react';

declare namespace DropdownToggle {
    export interface DropdownToggleProps extends React.HTMLProps<DropdownToggle> {
        bsRole?: string | undefined;
        noCaret?: boolean | undefined;
        open?: boolean | undefined;
        title?: string | undefined;
        useAnchor?: boolean | undefined;
        bsClass?:string | undefined; // Added since v0.30.0
        bsStyle?:string | null | undefined;
        bsSize?:string | undefined;
    }
}
declare class DropdownToggle extends React.Component<DropdownToggle.DropdownToggleProps> { }
export = DropdownToggle;
