import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ModalFooter {
    export interface ModalFooterProps extends ReactDOM.HTMLProps<ModalFooter> {
        componentClass?: React.ReactType;
        bsClass?: string;
    }
}
declare class ModalFooter extends React.Component<ModalFooter.ModalFooterProps> { }
export = ModalFooter;
