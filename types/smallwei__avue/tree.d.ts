import { AvueFormOption } from "./form";

export interface AvueTreeOption<T = any> {
    // 是否展开节点
    defaultExpandAll?: boolean;
    // 弹出框宽度
    dialogWidth?: string;
    // 自定义form表单，具体参考avue-form
    formOption?: AvueFormOption<T>;
    // 菜单栏
    menu?: boolean;
    // 新增按钮
    addBtn?: boolean;
    // 编辑按钮
    editBtn?: boolean;
    // 修改按钮
    delBtn?: boolean;
    // 配置选项
    props?: TreeProps;
    // 是否显示搜索框
    filter?: boolean;
}

export interface TreeProps {
    // 指定节点标签为节点对象的某个属性值
    label?: string;
    // 弹窗添加节点的名称
    labelText?: string;
    // 指定子树为节点对象的某个属性值
    children?: string;
    // 指定节点选择框的值也作为节点的nodeKey
    value?: string;
}

export interface AvueTreeProps<T = any> {
    /** 存放结构体的数据 */
    data?: T[];
    /** 组件配置属性 */
    option?: AvueTreeOption<T>;
    /** 新增节点回调 */
    onSave?: (parent: any, data: any, done: () => void, loading: () => void) => void;
    /** 修改节点回调 */
    onUpdate?: (parent: any, data: any, done: () => void, loading: () => void) => void;
    /** 删除节点回调 */
    onDel?: (data: any, done: () => void) => void;
}
export interface AvueTreeSlots<T = any> {
    addBtn: () => VNode[];
    menu: (scoped: { node: { data: T } }) => VNode[];
    default: (scoped: { node: { data: T }; data: T }) => VNode[];
}

export const AvueTree: new() => {
    $props: AvueTreeProps;
    $slots: AvueTreeSlots;
};

export type AvueTreeInstance = InstanceType<typeof AvueTree>;
