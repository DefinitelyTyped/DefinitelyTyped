import Modal from 'react-modal-view';

<Modal />;

<Modal>
    <p>Hello, World!</p>
</Modal>;

const emptyCallback = () => {};

<Modal visible closable onShow={emptyCallback} onHide={emptyCallback}>
    <p>Hello, World!</p>
</Modal>;
