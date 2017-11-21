import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import { DropdownBaseProps } from './Dropdown';

declare namespace DropdownButton {
    export interface DropdownButtonBaseProps extends DropdownBaseProps {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        navItem?: boolean;
        noCaret?: boolean;
        pullRight?: boolean;
        title: React.ReactNode;
    }

    export type DropdownButtonProps = DropdownButtonBaseProps & React.HTMLProps<DropdownButton>;

}
declare class DropdownButton extends React.Component<DropdownButton.DropdownButtonProps> { }
export = DropdownButton;
