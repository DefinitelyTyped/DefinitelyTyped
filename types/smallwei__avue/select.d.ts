import { DicItem } from "./dic";

export interface AvueSelectProps<T = any> {
    modelValue?: T;
    /** 字典 */
    dic?: DicItem[];
    /** 是否显示全选 */
    all?: boolean;
    /** 是否使用虚拟列表 */
    virtualize?: boolean;
    onChange?: (data: { value: T }) => void;
    "onUpdate:modelValue"?: (val: T) => any;
}
export const AvueSelect: new() => {
    $props: AvueSelectProps;
};
export interface AvueSelectSlots {
    default: (scoped: { label: string; value: string; item: DicItem }) => VNode[];
}

export type AvueSelectInstance = InstanceType<typeof AvueSelect>;
