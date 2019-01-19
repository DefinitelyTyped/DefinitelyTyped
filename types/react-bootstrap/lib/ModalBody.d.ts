import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ModalBody {
    export interface ModalBodyProps extends ReactDOM.HTMLProps<ModalBody> {
        componentClass?: React.ReactType;
        bsClass?: string;
    }
}
declare class ModalBody extends React.Component<ModalBody.ModalBodyProps> { }
export = ModalBody;
