import * as React from 'react';

declare namespace InputGroupAddon {
    interface InputGroupAddonProps extends React.HTMLProps<InputGroupAddon> {
        bsClass?: string | undefined;
    }
}
declare class InputGroupAddon extends React.Component<InputGroupAddon.InputGroupAddonProps> { }
export = InputGroupAddon;
