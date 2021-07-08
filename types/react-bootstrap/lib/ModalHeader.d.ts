import * as React from 'react';

declare namespace ModalHeader {
    export interface ModalHeaderProps extends React.HTMLProps<ModalHeader> {
        closeButton?: boolean | undefined;
        closeLabel?: string | undefined;
        onHide?: Function | undefined;
        bsClass?: string | undefined;
    }
}
declare class ModalHeader extends React.Component<ModalHeader.ModalHeaderProps> { }
export = ModalHeader;
