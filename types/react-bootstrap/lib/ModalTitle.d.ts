import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ModalTitle {
    export interface ModalTitleProps extends ReactDOM.HTMLProps<ModalTitle> {
        componentClass?: React.ReactType;
        bsClass?: string;
    }
}
declare class ModalTitle extends React.Component<ModalTitle.ModalTitleProps> { }
export = ModalTitle;
