import MicroModal, { MicroModalConfig } from 'micromodal';

const config: MicroModalConfig = {
    onShow: (modal, trigger, event) => { console.log(modal!.id);console.log(trigger);console.log(event); },
    onClose: (modal, trigger, event) => { console.log(modal!.id);console.log(trigger);console.log(event); },
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    openClass: "opened",
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    debugMode: true
};

MicroModal.init(config);

MicroModal.show('my-modal');

MicroModal.close();
