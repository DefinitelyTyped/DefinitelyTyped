// Type definitions for gaea-model 1.0
// Project: https://github.com/ascoders/gaea-model
// Definitions by: ascoders <https://github.com/ascoders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

export as namespace GaeaModel;

export type Component = React.ComponentClass<ComponentProps>;

/**
 * 组件信息
 */
export interface ComponentProps extends React.HTMLProps<any> {
    /**
     * 唯一的 key,用来唯一标识这个组件,所有盖亚内部组件都以 gaea-old- 为前缀
     */
    gaeaUniqueKey: string;
    /**
     * 组件的中文名
     */
    gaeaName: string;
    /**
     * 组件图标,为 fontAwesome
     */
    gaeaIcon?: string;
    /**
     * 编辑信息
     */
    gaeaEdit?: ComponentPropsGaeaEdit[];
    /**
     * 事件定义
     */
    gaeaEvent?: GaeaEvent;
    /**
     * 是否在预览模式，preivew 会传入 true
     */
    gaeaPreview?: boolean;
    /**
     * 是否可以拖入子元素
     */
    canDragIn?: boolean;
    /**
     * 存储事件设置
     */
    gaeaEventData?: EventData[];
    /**
     * 存储native事件设置
     */
    gaeaNativeEventData?: EventData[];
    /**
     * 存储变量信息
     */
    gaeaVariables?: {
        [field: string]: VariableData;
    };

    [x: string]: any;
}

/**
 * 组件配置中数组配置
 */
export interface ComponentPropsOptionsArray extends ComponentPropsGaeaEdit {
    key: string;
}

/**
 * 组件配置中数组配置的值
 */
export interface ComponentPropsOptionsArrayValue {
    /**
     * ComponentPropsOptionsArray 设置的 key
     */
    key: string;
    /**
     * 用户填入的值
     */
    value: number | string;
}

/**
 * 组件配置 选择器配置
 */
export interface ComponentPropsOptionsSelector {
    key: string;
    value: string;
}

/**
 * number 配置项
 */
export interface Number {
    // 为空时，是数字，否则会以字符串加后缀形式赋值
    key: string;
    value: string;
}

/**
 * 组件的值
 */
export type ComponentPropsOptionValue = number | string | boolean | ComponentPropsOptionsArrayValue[] | any;

/**
 * 组件配置
 */
export interface ComponentPropsGaeaEdit {
    /**
     * 对应字段名
     */
    field: string;
    /**
     * 选项名称
     */
    label: string;
    /**
     * 编辑器类型
     */
    editor: string;
    /**
     * 是否可被编辑
     */
    editable: boolean;
    /**
     * 是否隐藏编辑工具
     */
    hideTool: boolean;
    /**
     * 当 editor 为 array 时的数组配置
     * 数组中的 key,和填入的值,会作为 Array<key:value> 填入到 value 中
     */
    array?: ComponentPropsOptionsArrayValue[];
    /**
     * 当 editor 为 selector 时的数组配置
     */
    selector?: ComponentPropsOptionsSelector[];
    /**
     * 值类型, 默认为字符串
     */
        type?: string;
    /**
     * 为空时的值，默认为 null
     */
    emptyValue?: any;
    /**
     * 控制 number 单位
     */
        number?: {
        units: number[];
        currentUnit: string;
        max?: number;
        min?: number;
        step?: number;
        speed?: number;
        inputRange?: number[];
        outputRange?: number[];
        slider?: boolean;
    };
    /**
     * 枚举实例
     */
    instance?: Array<{
        [key: string]: ComponentPropsOptionValue;
    }>;
}

/**
 * 组合信息
 */
export interface ComboComponentInfo extends ViewportComponentFullInfo {
    // 组合名
    name: string;
}

/**
 * 获取发布列表的返回值
 */
export interface GetPublishListResult {
    // 版本
    version: string;
    // 描述
    description: string;
}

/**
 * 版本信息
 */
export interface VersionInfo {
    content: string;
}

/**
 * 事件设置
 */
export interface GaeaEvent {
    triggers: EventTriggerCondition[];
    effects: EventAction[];
}

export interface EventData {
    type: string;
    event: string;
    /**
     * 因为事件可能 type 相同，因此记录是第几个
     */
    typeIndex: number;
    eventIndex: number;
    typeData?: EventTriggerEvent;
    eventData?: EventActionJumpUrl | EventActionCall | EventActionEvent;
}

export interface EventTriggerCondition {
    name: string;
    // 触发类型
    type: string;
    // 是否由自己的生命周期触发
    selfCallback?: boolean;
}

export interface EventAction {
    name: string;
    // 动作类型
    // call: 调用传进来的方法
    // jumpUrl: 跳转一个网址
    type: string;
    call?: EventCallType;
}

/**
 * 事件定义类型
 */
export interface EventCallType {
    // 调用函数名称
    functionName: string;
    // 调用参数
    param?: EventCallTypeParam[];
}

export interface EventCallTypeParam {
    label: string;
    field: string;
    editor: string; // text
}

/**
 * 事件触发数据类型
 */
export interface EventTriggerEvent {
    listen?: string;
}

export interface EventUpdatePropsEvent {
    /**
     * 修改后的 props
     */
    props: ComponentProps;
}

/**
 * 事件动作数据类型
 */
export interface EventActionJumpUrl {
    url?: string;
}

export interface EventActionCall {
    // 函数在 map 里的 key
    key?: string;
}

export interface EventActionEvent {
    emit?: string;
}

export interface ExternalParameter {
    /**
     * 名称
     */
    name: string;
    /**
     * 类型
     * number string boolean
     */
        type: string;
}

/**
 * 标识哪些字段用什么变量
 */
export interface VariableData {
    // 变量类型
    // 比如是外部传参，还是全局变量
    variableType: string;
    // 变量的哪个字段
    variableField: string;
    // 值类型 string number boolean
    valueType: string;
}

/**
 * 插件信息
 */
export interface Plugin extends React.ComponentClass<any> {
    // 插件安放位置
    position: string;
    Action?: any;
    Store?: any;
}

/********************************************************************************************************
 * DIff
 ********************************************************************************************************/
export interface Diff {
    // 操作类型
    type: 'add' | 'move' | 'remove' | 'exchange' | 'update' | 'paste' | 'reset' | 'addCombo' | 'addSource';
    // 操作组件的 mapUniqueKey
    mapUniqueKey: string;
    // 新增操作
    add?: {
        // 新增组件的唯一标识 id
        uniqueId: string;
        // 父级 mapKey
        parentMapUniqueKey: string;
        // 插入的位置
        index: number;
    };
    // 移动到另一个父元素
    move?: {
        // 移动到的父级 mapKey
        targetParentMapUniqueKey: string;
        // 移动前父级 mapKey
        sourceParentMapUniqueKey: string;
        // 插入的位置
        targetIndex: number;
        // 移除的位置
        sourceIndex: number;
    };
    // 删除组件
    remove?: DiffRemove;
    // 内部交换顺序
    exchange?: {
        oldIndex: number;
        newIndex: number;
    };
    // 更新操作
    update?: {
        oldValue: ComponentProps;
        newValue: ComponentProps;
    };
    // 粘贴操作
    paste?: DiffRemove;
    // 重置组件
    reset?: {
        // 重置前的信息
        beforeProps: ComponentProps;
        beforeName: string;
    };
    // 新增组合
    addCombo?: {
        // 父级 mapKey
        parentMapUniqueKey: string;
        // 父级的 index
        index: number;
        // 组合的完整信息（不是 copy 的, 是真正对应的 mapUniqueKey）
        componentInfo: ViewportComponentFullInfo;
    };
    // 新增模板
    addSource?: {
        // 父级 mapKey
        parentMapUniqueKey: string;
        // 父级的 index
        index: number;
        // 组合的完整信息（不是 copy 的, 是真正对应的 mapUniqueKey）
        componentInfo: ViewportComponentFullInfo;
    };
}

export interface DiffRemove extends ViewportComponentFullInfo {
    // 父级元素 mapKey
    parentMapUniqueKey: string;
    // 删除的位置
    index: number;
}

/********************************************************************************************************
 * Viewport
 ********************************************************************************************************/
/**
 * 在视图中的组件属性
 */
export interface ViewportComponentInfo {
    /**
     * props
     */
    props: ComponentProps;
    /**
     * 子元素（canDragIn才有）
     * 只存子元素在 map 中的 key
     */
    layoutChilds?: string[];
    /**
     * 父级 mapUniqueKey, 这样不但方便寻找父级,还能根据是否为 null 判断是否为根元素
     */
    parentMapUniqueKey: string;
}

/**
 * 当前正在移动元素的信息
 */
export interface MovingComponent {
    // 在编辑区域的组件信息
    mapUniqueKey: string;
    // 是否是新拖拽的
    isNew: boolean;
    // 组件的唯一标识, 新建的时候采用
    uniqueKey: string;
    // 直接给 source 就直接用
    source: string;
}

/**
 * hover 元素的信息
 */
export interface HoverComponentSpec {
    left: number;
    top: number;
    width: number;
    height: number;
    hovering: boolean;
}

/**
 * 一个独立组件的完整信息
 */
export interface ViewportComponentFullInfo {
    // 组件的 mapUniqueKey
    mapUniqueKey: string;
    // 组件信息
    componentInfo: ViewportComponentInfo;
    // 子元素列表 （包括非直接子集）
    childs: {
        [mapUniqueKey: string]: ViewportComponentInfo;
    };
}

/**
 * 当前拖拽元素信息
 */
export interface CurrentDragComponentInfo {
    // 类型
    type: 'new' | 'combo' | 'viewport';
    // 开始拖拽父级的 dom
    dragStartParentElement: HTMLElement;
    // 开始拖拽在父级中的位置
    dragStartIndex: number;
    newInfo?: {
        // 唯一 key，用来实例化组件
        uniqueKey: string;
    };
    comboInfo?: {
        // combo 信息
        source: string;
    };
    viewportInfo?: {
        // 当前拖拽组件的 mapUniqueKey
        mapUniqueKey: string;
        // 拖拽目标的 mapUniqueKey
        targetMapUniqueKey?: string;
        // 拖拽目标的 index
        targetIndex?: number;
    };
}

/********************************************************************************************************
 * Event
 ********************************************************************************************************/
/**
 * 鼠标移动到组件上/树对应的组件上
 */
export interface MouseHoverComponentEvent {
    mapUniqueKey: string;
    type: string;
}

/**
 * 修改某个组件选中状态
 */
export interface ComponentSelectStatusEvent {
    mapUniqueKey: string;
    selected: boolean;
}
