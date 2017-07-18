import * as React from 'react';

interface ModalBodyProps extends React.HTMLProps<ModalBody> {
  // TODO: these props are not correct https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.1/src/ModalBody.js
  modalClassName?: string;
}

export default class ModalBody extends React.Component<ModalBodyProps> { }
