import MicroModal, { MicroModalConfig } from "micromodal";

const config: MicroModalConfig = {
    identifier: "data-modal-id",
    onShow: (modal, activeElement, event) => {
        console.log(modal.id, activeElement, event);
    },
    onClose: (modal, activeElement, event) => {
        console.log(modal.id, activeElement, event);
    },
    openTrigger: "data-modal-open",
    closeTrigger: "data-modal-close",
    openClass: "opened",
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    debugMode: true,
};

MicroModal.init(config);

MicroModal.initModal("my-modal", config);

MicroModal.config("my-modal", config);

MicroModal.show("my-modal");

MicroModal.show("my-modal", config);

MicroModal.close("my-modal");

MicroModal.close();

MicroModal.closeAll();

MicroModal.removeModal("my-modal");

// A string id or the modal element itself may be passed.
const modalElement = document.getElementById("my-modal")!;

MicroModal.initModal(modalElement, config);

MicroModal.config(modalElement, config);

MicroModal.show(modalElement);

MicroModal.close(modalElement);

MicroModal.removeModal(modalElement);
