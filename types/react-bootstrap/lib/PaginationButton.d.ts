import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace PaginationButton {
    export interface PaginationButtonProps extends React.HTMLProps<PaginationButton> {
        componentClass?: React.ReactType;
        className?: string;
        eventKey?: any;
        onSelect?: SelectCallback;
        disabled?: boolean;
        active?: boolean;
        onClick: React.MouseEventHandler<{}>;
    }
}
declare class PaginationButton extends React.Component<PaginationButton.PaginationButtonProps> { }
export = PaginationButton;
