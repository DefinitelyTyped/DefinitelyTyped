import * as React from 'react';

declare class ModalHeader extends React.Component<ModalHeaderProps> { }
declare namespace ModalHeader { }
export = ModalHeader

interface ModalHeaderProps extends React.HTMLProps<ModalHeader> {
  // TODO: these props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalHeader.js
  closeButton?: boolean;
  modalClassName?: string;
  onHide?: Function;
}
