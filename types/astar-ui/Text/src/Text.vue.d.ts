import { PropType } from "vue";
declare enum EnumType {
    H1 = 0,
    H2 = 1,
    H3 = 2,
    H4 = 3,
    H5 = 4,
    H6 = 5,
    H7 = 6
}
export declare type TextType = keyof typeof EnumType;
declare const _default: import("vue").DefineComponent<{
    type: {
        required: true;
        type: PropType<"H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "H7">;
        default: string;
    };
}, {
    [x: string & `on${string}`]: import("vue").Ref<((...args: any[]) => any) | ((...args: unknown[]) => any)>;
    type: import("vue").Ref<"H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "H7">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
} & {
    type: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "H7";
} & {}>, {
    type: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "H7";
}>;
export default _default;
