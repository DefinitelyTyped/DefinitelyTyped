import * as React from "react";
import styled from "styled-components";
import Modal, {
    BaseModalBackground as BackgroundComponent,
    ModalProps,
    ModalProvider,
    ModalProviderProps,
} from "styled-react-modal";

const background = styled.div`
    background: rgba(0,0,0,.3);
`;

// Padding through a custom backgroundComponent
<ModalProvider backgroundComponent={background}>
    <Modal
        isOpen={true}
        onBackgroundClick={(event) => {
            // $ExpectType MouseEvent<Element, MouseEvent>>
            event;
            console.log("Background click!");
        }}
        onEscapeKeydown={(event) => {
            // $ExpectType KeyboardEvent<Element>
            event;
            console.log("Background click!");
        }}
        afterOpen={() => console.log("After Open!")}
        afterClose={() => console.log("After Close!")}
        beforeOpen={() => console.log("Before Open!")}
        beforeClose={() => console.log("Before Close!")}
        allowScroll={true}
    >
        Modal Content!
    </Modal>
</ModalProvider>;

// Passing through the default component
<ModalProvider backgroundComponent={BackgroundComponent}>
    <Modal
        isOpen={true}
        backgroundProps={{ style: { padding: "20px" } }}
        onBackgroundClick={() => console.log("Background click!")}
        onEscapeKeydown={() => console.log("Background click!")}
        afterOpen={() => console.log("After Open!")}
        afterClose={() => console.log("After Close!")}
        beforeOpen={() => console.log("Before Open!")}
        beforeClose={() => console.log("Before Close!")}
        allowScroll={true}
    >
        Modal Content!
    </Modal>
</ModalProvider>;

// Minimal Setup
<ModalProvider>
    <Modal isOpen={true}>
        Modal Content!
    </Modal>
</ModalProvider>;

const StyledModal = Modal.styled`
    background: red;
`;

<ModalProvider>
    <StyledModal isOpen={true} onBackgroundClick={() => console.log("Background click!")}>
        Modal Content!
    </StyledModal>
</ModalProvider>;

// Test for async callbacks
<ModalProvider>
    <Modal
        isOpen={true}
        beforeOpen={async () => console.log("Before Open!")}
        beforeClose={async () => console.log("Before Close!")}
    >
        Modal Content!
    </Modal>
</ModalProvider>;
