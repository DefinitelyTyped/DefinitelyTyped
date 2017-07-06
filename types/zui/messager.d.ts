declare enum MessagerTypeEnum {
    'default', 'primary', 'success', 'info', 'warning', 'danger', 'important', 'special'
}
interface Action {
    name?: string,
    icon?: string,
    text?: string
    html?: string
    action?: ActionFunc;
}

interface ActionFunc {
    (): boolean;
}
interface OnActionFunc {
    (name: string, action: string, messager: Messager): any
}

interface MessagerOption {
    type?: MessagerTypeEnum | string;
    placement?: string,
    time?: number;
    message?: string,
    parent?: string,
    icon?: string,
    close?: boolean;
    fade?: boolean;
    scale?: boolean;
    actions?: Array<Action>;
    onAction?: OnActionFunc;
    cssClass?: string,
    contentClass?: string,
    show?: boolean
}
interface Messager {
    show(cb?: Function): any;
    show(message: string, cb?: Function): any;

    hide(cb?: Function): any;
}
interface MessagerStatic {
    new (option?: MessagerOption): Messager;
    new (message: string, option?: MessagerOption): Messager;
}
//sdeclare var messager: Messager;
