import * as React from 'react';

declare class ModalTitle extends React.Component<ModalTitleProps> { }
declare namespace ModalTitle { }
export = ModalTitle

interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
  // TODO: props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalTitle.js
  modalClassName?: string;
}
