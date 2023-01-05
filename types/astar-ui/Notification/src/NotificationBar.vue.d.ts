import { PropType } from 'vue';
export declare enum AlertType {
    Success = "success",
    Warning = "warning",
    Error = "error"
}
declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    alertType: {
        type: PropType<AlertType>;
        required: true;
    };
}, {
    alertTypeTitle: import("vue").ComputedRef<"Success" | "Note" | "Error">;
    isSuccessType: import("vue").ComputedRef<boolean>;
    close: () => void;
    show: import("vue").Ref<boolean>;
    onClose: import("vue").Ref<(...args: any[]) => any>;
    alertType: import("vue").Ref<AlertType>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show?: unknown;
    alertType?: unknown;
} & {
    show: boolean;
    alertType: AlertType;
} & {}> & {
    onClose?: (...args: any[]) => any;
}, {
    show: boolean;
}>;
export default _default;
