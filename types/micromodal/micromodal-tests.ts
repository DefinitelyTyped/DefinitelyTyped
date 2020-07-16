import MicroModal, { MicroModalConfig } from 'micromodal';

const config: MicroModalConfig = {
    onShow: (modal) => { console.log(modal!.id); },
    onClose: (modal) => { console.log(modal!.id); },
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
    debugMode: true
};

MicroModal.init(config);

MicroModal.show('my-modal');

MicroModal.close();
