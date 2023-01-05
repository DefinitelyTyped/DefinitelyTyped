declare const _default: import("vue").DefineComponent<{
    iconName: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    viewBox: {
        type: StringConstructor;
        default: string;
    };
    fill: {
        type: StringConstructor;
        default: string;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    iconName?: unknown;
    width?: unknown;
    height?: unknown;
    viewBox?: unknown;
    fill?: unknown;
    iconColor?: unknown;
} & {
    fill: string;
    viewBox: string;
    iconName: string;
    iconColor: string;
} & {
    height?: string | number;
    width?: string | number;
}>, {
    fill: string;
    height: string | number;
    width: string | number;
    viewBox: string;
    iconName: string;
    iconColor: string;
}>;
export default _default;
