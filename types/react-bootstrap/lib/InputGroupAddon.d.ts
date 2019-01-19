import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace InputGroupAddon {
    interface InputGroupAddonProps extends ReactDOM.HTMLProps<InputGroupAddon> {
        bsClass?: string;
    }
}
declare class InputGroupAddon extends React.Component<InputGroupAddon.InputGroupAddonProps> { }
export = InputGroupAddon;
