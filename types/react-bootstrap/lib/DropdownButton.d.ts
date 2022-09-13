import * as React from 'react';
import { Sizes, Omit } from 'react-bootstrap';
import { DropdownBaseProps } from './Dropdown';

declare namespace DropdownButton {
    export interface DropdownButtonBaseProps extends DropdownBaseProps {
        block?: boolean | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | null | undefined;
        navItem?: boolean | undefined;
        noCaret?: boolean | undefined;
        pullRight?: boolean | undefined;
        title: React.ReactNode;
    }

    export type DropdownButtonProps = DropdownButtonBaseProps & Omit<React.HTMLProps<DropdownButton>, 'title'>;

}
declare class DropdownButton extends React.Component<DropdownButton.DropdownButtonProps> { }
export = DropdownButton;
