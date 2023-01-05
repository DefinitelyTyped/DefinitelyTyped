declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    isClosing: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    zoomInClass: string;
    fadeInClass: string;
    fadeOutClass: string;
    close: () => void;
    show: import("vue").Ref<boolean>;
    height: import("vue").Ref<number>;
    width: import("vue").Ref<number>;
    title: import("vue").Ref<string>;
    onClose: import("vue").Ref<(...args: any[]) => any>;
    isClosing: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show?: unknown;
    title?: unknown;
    width?: unknown;
    height?: unknown;
    isClosing?: unknown;
} & {
    show: boolean;
    isClosing: boolean;
} & {
    height?: number;
    width?: number;
    title?: string;
}> & {
    onClose?: (...args: any[]) => any;
}, {
    show: boolean;
    isClosing: boolean;
}>;
export default _default;
