import * as React from 'react';
import Modal, { ModalProvider, BackgroundComponent } from 'styled-react-modal';
import styled from 'styled-components';

const background = styled.div`
    background: rgba(0,0,0,.3);
`;

// Padding through a custom backgroundComponent
const test1 = (
    <ModalProvider backgroundComponent={background}>
        <Modal
            isOpen={true}
            onBackgroundClick={() => console.log('Background click!')}
            onEscapeKeydown={() => console.log('Background click!')}
            afterOpen={() => console.log('After Open!')}
            afterClose={() => console.log('After Close!')}
            beforeOpen={() => console.log('Before Open!')}
            beforeClose={() => console.log('Before Close!')}
            allowScroll={true}
        >
            Modal Content!
        </Modal>
    </ModalProvider>
);

// Passing through the default component
const test2 = (
    <ModalProvider backgroundComponent={BackgroundComponent}>
        <Modal
            isOpen={true}
            onBackgroundClick={() => console.log('Background click!')}
            onEscapeKeydown={() => console.log('Background click!')}
            afterOpen={() => console.log('After Open!')}
            afterClose={() => console.log('After Close!')}
            beforeOpen={() => console.log('Before Open!')}
            beforeClose={() => console.log('Before Close!')}
            allowScroll={true}
        >
            Modal Content!
        </Modal>
    </ModalProvider>
);

// Minimal Setup
const test3 = (
    <ModalProvider>
        <Modal isOpen={true}>
            Modal Content!
        </Modal>
    </ModalProvider>
);

const StyledModal = Modal.styled`
    background: red;
`;

const test4 = (
    <ModalProvider>
        <StyledModal isOpen={true} onBackgroundClick={() => console.log('Background click!')}>
            Modal Content!
        </StyledModal>
    </ModalProvider>
);
