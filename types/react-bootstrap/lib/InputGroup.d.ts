import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import * as InputGroupAddon from './InputGroupAddon';
import * as InputGroupButton from './InputGroupButton';

declare namespace InputGroup {
    export interface InputGroupProps extends React.HTMLProps<InputGroup> {
        bsClass?: string;
        bsSize?: Sizes;
    }
}
declare class InputGroup extends React.Component<InputGroup.InputGroupProps> {
    public static Addon: typeof InputGroupAddon;
    public static Button: typeof InputGroupButton;
}
export = InputGroup;
