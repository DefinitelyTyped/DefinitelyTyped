interface ModalTriggerOption {
    name?: string,
    className?: string,
    type?: string,
    url?: string,
    remote?: string,
    iframe?: string,
    size?: string,
    width?: string,
    height?: string,
    showHeader?: boolean,
    title?: string,
    icon?: string,
    fade?: boolean,
    postion?: string,
    backdrop?: boolean,
    keyboard?: boolean,
    moveable?: boolean,
    rememberPos?: boolean,
    waittime?: number,
    loadingIcon?: string,

    show?(): any;
    onShow?(): any;
    onHide?(): any;
    hidden?(): any;
    loaded?(): any;
    broken?(): any;
}

interface ModalTrigger {
    show(option?: ModalTriggerOption): any;
    close(): any;
    toggle(option?: ModalTriggerOption): any;
    adjustPostion(option?: ModalTriggerOption): any;

}
interface ModalTriggerStatic {
    new (option?: ModalTriggerOption): ModalTrigger
}

interface JQuery {
    modalTrigger(option?: ModalTriggerOption): JQuery //$('#modal').modalTrigger()
    data(value: string): JQuery;
}

interface ZuiStatic {
    ModalTrigger: ModalTriggerStatic;
    modalTrigger: ModalTrigger;
}