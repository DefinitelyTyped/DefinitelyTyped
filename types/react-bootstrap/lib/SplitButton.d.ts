import * as React from 'react';
import { Sizes, Omit } from 'react-bootstrap';

declare namespace SplitButton {
    export interface SplitButtonProps extends Omit<React.HTMLProps<SplitButton>, "title"> {
        bsStyle?: string | undefined;
        bsSize?: Sizes | undefined;
        dropdownTitle?: any; // TODO: Add more specific type
        dropup?: boolean | undefined;
        pullRight?: boolean | undefined;
        title: React.ReactNode;
        id: string;
    }
}
declare class SplitButton extends React.Component<SplitButton.SplitButtonProps> { }
export = SplitButton;
