import * as React from 'react';

declare class ModalDialog extends React.Component<ModalDialogProps> { }
declare namespace ModalDialog { }
export = ModalDialog

interface ModalDialogProps extends React.HTMLProps<ModalDialog> {
  // TODO: these props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalDialog.js#L9
  onHide?: Function;
  onEnter?: Function;
  onEntered?: Function;
  onEntering?: Function;
  onExit?: Function;
  onExited?: Function;
  onExiting?: Function;
}
