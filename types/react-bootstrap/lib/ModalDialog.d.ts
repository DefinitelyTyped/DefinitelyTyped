import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace ModalDialog {
    export interface ModalDialogProps extends React.HTMLProps<ModalDialog> {
        // TODO: these props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalDialog.js#L9
        onHide?: Function | undefined;
        onEnter?: Function | undefined;
        onEntered?: Function | undefined;
        onEntering?: Function | undefined;
        onExit?: Function | undefined;
        onExited?: Function | undefined;
        onExiting?: Function | undefined;
        bsSize?: Sizes | undefined;
        bsClass?: string | undefined;
    }
}
declare class ModalDialog extends React.Component<ModalDialog.ModalDialogProps> { }
export = ModalDialog;
