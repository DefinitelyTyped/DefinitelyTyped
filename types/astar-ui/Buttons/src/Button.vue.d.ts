declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
}, {
    [x: string & `on${string}`]: import("vue").Ref<((...args: any[]) => any) | ((...args: unknown[]) => any)>;
    height: import("vue").Ref<number>;
    width: import("vue").Ref<number>;
    disabled: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    width?: unknown;
    height?: unknown;
} & {
    disabled: boolean;
} & {
    height?: number;
    width?: number;
}>, {
    disabled: boolean;
}>;
export default _default;
