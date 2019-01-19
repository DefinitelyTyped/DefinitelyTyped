import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ModalHeader {
    export interface ModalHeaderProps extends ReactDOM.HTMLProps<ModalHeader> {
        closeButton?: boolean;
        closeLabel?: string;
        onHide?: Function;
        bsClass?: string;
    }
}
declare class ModalHeader extends React.Component<ModalHeader.ModalHeaderProps> { }
export = ModalHeader;
