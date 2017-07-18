import * as React from 'react';

interface ModalTitleProps extends React.HTMLProps<ModalTitle> {
  // TODO: props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalTitle.js
  modalClassName?: string;
}

export default class ModalTitle extends React.Component<ModalTitleProps> { }
