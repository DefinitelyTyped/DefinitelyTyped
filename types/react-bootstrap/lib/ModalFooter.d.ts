import * as React from 'react';

interface ModalFooterProps extends React.HTMLProps<ModalFooter> {
  // TODO: these props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalFooter.js
  modalClassName?: string;
}

export default class ModalFooter extends React.Component<ModalFooterProps> { }
