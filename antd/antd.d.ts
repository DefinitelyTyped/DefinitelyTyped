// Type definitions for Antd v0.12.8
// Project: http://ant.design
// Definitions by: bang88 <https://github.com/bang88>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../react/react.d.ts" />
declare namespace Antd {

    import React = __React

    // Affix
    interface AffixProps extends React.Props<Affix> {
        offset?: number
    }
    export class Affix extends React.Component<AffixProps, {}>{ }


    // Alert
    interface AlertProps extends React.Props<Alert> {
        type: string,
        closable?: boolean,
        closeText?: React.ReactNode,
        message: React.ReactNode,
        description?: React.ReactNode,
        onClose?: Function,
        showIcon?: boolean
    }
    export class Alert extends React.Component<AlertProps, {}>{ }


    // Badge
    export class Badge extends React.Component<BadgeProps, {}>{ }
    interface BadgeProps extends React.Props<Badge> {
        count: number,
        overflowCount?: number,
        dot?: boolean
    }


    // Button
    interface ButtonProps extends React.Props<Button> {

        type?: ButtonType | string,
        shape?: string,
        size?: string,
        htmlType?: string,
        onClick?: Function,
        loading?: boolean,
        className?: string,
    }


    enum ButtonType {
        primary,
        ghost,
        dashed
    }

    interface ButtonGroupProps extends React.Props<ButtonGroup> {
        size?: string

    }
    class ButtonGroup extends React.Component<ButtonGroupProps, {}>{

    }


    export class Button extends React.Component<ButtonProps, {}>{
        static Group: typeof ButtonGroup
    }



    // Breadcrumb

    interface BreadcrumbItemProps extends React.Props<BreadcrumbItem> {
        href?: string
    }
    export class BreadcrumbItem extends React.Component<BreadcrumbItemProps, {}>{ }

    interface BreadcrumbProps extends React.Props<Breadcrumb> {
        routes?: Array<React.ReactNode>,
        params?: Object,
        separator?: string | React.ReactNode
    }

    export class Breadcrumb extends React.Component<BreadcrumbProps, {}>{
        static Item: typeof BreadcrumbItem
    }


    // Calendar
    interface CalendarProps extends React.Props<Calendar> {
        monthCellRender?: Function,
        dateCellRender?: Function,
        fullscreen?: boolean,
        locale?: Object,
        prefixCls?: string,
        className?: string,
        style?: Object,
        onPanelChange?: Function,
        value?: Date
    }
    export class Calendar extends React.Component<CalendarProps, {}>{ }


    // Carousel
    interface CarouselProps extends React.Props<Carousel> {
        effect?: string,
        dots?: boolean,
        vertical?: boolean,
        autoplay?: boolean,
        easing?: string,
        beforeChange?: Function,
        afterChange?: Function
    }

    export class Carousel extends React.Component<CarouselProps, {}>{ }



    // Cascader
    interface CascaderProps extends React.Props<Cascader> {
        options: Object,
        defaultValue?: Array<any>,
        value?: Array<any>,
        onChange?: Function,
        displayRender?: Function,
        popupClassName?: string,
        popupPlacement?: string,
        placeholder?: string,
        size?: string,
        disabled?: boolean,
        allowClear?: boolean

    }
    export class Cascader extends React.Component<CascaderProps, {}>{ }




    // Checkbox
    interface CheckboxProps extends React.Props<Checkbox> {
        checked?: boolean,
        defaultChecked?: boolean,
        onChange?: Function
    }

    interface CheckboxGroupProps extends React.Props<CheckboxGroup> {
        defaultValue?: Array<any>,
        value?: Array<any>,
        options?: Array<any>,
        onChange?: Function
    }
    class CheckboxGroup extends React.Component<CheckboxGroupProps, {}>{ }
    export class Checkbox extends React.Component<CheckboxProps, {}>{
        static Group: typeof CheckboxGroup
    }



    // Collapse

    interface CollapseProps extends React.Props<Collapse> {

        activeKey?: Array<any> | string,
        defaultActiveKey?: Array<string>,
        onChange?: Function

    }
    class CollapsePanel extends React.Component<{ key: string, header: React.ReactNode | string }, {}>{ }
    export class Collapse extends React.Component<CollapseProps, {}>{
        static Panel: typeof CollapsePanel
    }



    // DatePicker
    interface DatePickerProps<T> extends React.Props<DatePicker> {

        value?: string | Date,
        defaultValue?: string | Date,
        format?: string,
        disabledDate?: Function,
        onChange?: Function,
        disabled?: boolean,
        style?: Object,
        popupStyle?: Object,
        size?: string,
        locale?: Object,
        showTime?: boolean,
        onOk?: Function,
        getCalendarContainer?: Function

    }
    interface RangePickProps extends DatePickerProps<RangePicker> {

    }
    class RangePicker extends React.Component<RangePickProps, {}>{ }
    class MonthPicker extends React.Component<RangePickProps, {}>{ }

    export class DatePicker extends React.Component<DatePickerProps<any>, {}>{
        static RangePicker: typeof RangePicker
        static MonthPicker: typeof MonthPicker
    }




    // Dropdown

    interface DropdownProps extends React.Props<Dropdown> {

        trigger?: Array<string>,
        overlay: React.ReactNode

    }

    class DropdownButton extends React.Component<{
        type?: string,
        onClick?: Function,
        trigger?: string,
        overlay: React.ReactNode
    }, {}>{ }
    export class Dropdown extends React.Component<DropdownProps, {}>{
        static Button: typeof DropdownButton
    }



    // Form

    interface FormItemProps extends React.Props<FormItem> {
        prefixCls?: string,
        label?: React.ReactNode,
        labelCol?: Object,
        help?: React.ReactNode | boolean,
        extra?: string,
        validateStatus?: string,
        hasFeedback?: boolean,
        wrapperCol?: Object,
        className?: string,
        required?: boolean,
        id?: string
    }

    export class FormItem extends React.Component<FormItemProps, {}>{ }


    // function  create
    type CreateFormOptions = {
        getFieldsValue(): (fieldNames?: Array<string>) => any
        getFieldValue(): (fieldName: string) => any
        setFieldsValue(): (obj: Object) => void
        setFields(): (obj: Object) => void
        validateFields(): (fieldNames?: Array<string>, options?: Object, callback?: (erros: any, values: any) => void) => any
        validateFieldsAndScroll(): (fieldNames?: Array<string>, options?: Object, callback?: (erros: any, values: any) => void) => any
        getFieldError(): (name: string) => Object
        isFieldValidating(): (name: string) => Object

        resetFields(): (names?: Array<string>) => void

        getFieldsValue(): (id: string, options: {
            valuePropName?: string,
            initialValue?: any,
            trigger?: string,
            validateTrigger?: string,
            rules?: Array<any>
        }) => Array<any>


    }

    interface FormProps extends React.Props<Form> {
        prefixCls?: string,
        horizontal?: boolean,
        inline?: boolean,
        form?: Object,
        onSubmit?: (e: React.FormEvent) => void,
    }
    export class Form extends React.Component<FormProps, {}>{
        static Item: typeof FormItem
        static create(options?: CreateFormOptions): Function
    }





    // Icon
    interface IconProps extends React.Props<Icon> {
        type: string
    }
    export class Icon extends React.Component<IconProps, {}>{ }




    // Input
    interface InputProps extends React.Props<Input> {
        type?: string,
        id: string | number,
        size?: string,
        disabled?: boolean,
        value?: any,
        defaultValue?: any,
        className?: string,
        addonBefore?: React.ReactNode,
        addonAfter?: React.ReactNode,
        prefixCls?: string,
        placeholder?: string
    }
    export class Input extends React.Component<InputProps, {}>{ }




    // InputNumber
    interface InputNumberProps extends React.Props<InputNumber> {

        min: number,
        max: number,
        value?: number,
        step?: number,
        defaultValue?: number,
        onChange?: Function,
        disabled?: boolean,
        size?: string

    }
    export class InputNumber extends React.Component<InputNumberProps, {}>{ }


    // Layout
    // Row
    interface RowProps extends React.Props<Row> {
        type?: string,
        align?: string,
        justify?: string,
        className?: string
    }
    export class Row extends React.Component<RowProps, {}>{ }

    // Col
    interface ColProps extends React.Props<Col> {
        span?: string,
        order?: string,
        offset?: string,
        push?: string,
        pull?: string,
        className?: string
    }
    export class Col extends React.Component<ColProps, {}>{ }




    // Menu
    interface MenuItemProps extends React.Props<MenuItem> {
        disabled?: boolean,
        key: string
    }
    export class MenuItem extends React.Component<MenuItemProps, {}>{ }

    interface MenuSubMenuProps extends React.Props<MenuSubMenu> {
        title: string | React.ReactNode,
        children?: MenuItem | MenuSubMenu
    }
    export class MenuSubMenu extends React.Component<MenuSubMenuProps, {}>{ }

    interface MenuItemGroupProps extends React.Props<MenuItemGroup> {
        title: string | React.ReactNode,
        children?: MenuItem
    }
    export class MenuItemGroup extends React.Component<MenuItemGroupProps, {}>{ }


    // enum
    enum MenuTheme {
        light,
        dark
    }
    enum MenuMode {
        vertical,
        horizontal,
        inline
    }
    interface MenuProps extends React.Props<Menu> {
        theme?: MenuTheme | string,
        mode?: MenuMode | string,
        selectedKeys?: Array<string>,
        defaultSelectedKeys?: Array<string>,
        openKeys?: Array<string>,
        defaultOpenKeys?: Array<string>,
        onSelect?: (item: any, key: string, selectedKeys: Array<string>) => void,
        onDeselect?: (item: any, key: string, selectedKeys: Array<string>) => void,
        onClick?: (item: any, key: string) => void,
        style?: Object
    }
    export class Menu extends React.Component<MenuProps, {}>{
        static Item: typeof MenuItem
        static SubMenu: typeof MenuSubMenu
        static ItemGroup: typeof MenuItemGroup
        static Divider: typeof React.Component
    }



    // Message
    type MessageFunc = (content: string, duration?: number) => void
    export const message: {
        success: MessageFunc
        error: MessageFunc
        info: MessageFunc
        loading: MessageFunc
        config: (options: { top: number }) => void
        destroy: () => void
    }

    // Modal
    type ModalFunc = (options: {
        visible?: boolean,
        title?: React.ReactNode | string,
        onOk?: Function,
        onCancel?: Function,
        width?: string | number,
        iconClassName?: string,
        okText?: string,
        cancelText?: string
    }) => void

    interface ModalProps extends React.Props<Modal> {
        visible?: boolean,
        confirmLoading?: boolean,

        title?: React.ReactNode | string,

        closable?: boolean,
        onOk?: Function,
        onCancel?: Function,
        width?: string | number,
        footer?: React.ReactNode | string,

        okText?: string,
        cancelText?: string,
        maskClosable?: boolean
    }
    export class Modal extends React.Component<ModalProps, {}>{
        static info: ModalFunc
        static success: ModalFunc
        static error: ModalFunc
        static confirm: ModalFunc
    }




    // Notification
    type NotificationFunc = (
        config: {
            message: React.ReactNode | string,
            description: React.ReactNode | string,
            btn?: React.ReactNode | string,
            key?: string,
            onClose?: Function,
            duration?: number
        }) => void

    export const Notification: {
        success: NotificationFunc
        error: NotificationFunc
        info: NotificationFunc
        warn: NotificationFunc
        close: (key: string) => void
        destroy: () => void
        config: (options: { top: number }) => void

    }




    // Pagination
    interface PaginationProps extends React.Props<Pagination> {
        current?: number,
        defaultCurrent?: number,
        total: number,
        defaultPageSize?: number,
        pageSize?: number,
        onChange?: Function,
        showSizeChanger?: boolean,
        pageSizeOptions?: Array<number>
        onShowSizeChange?: Function,
        showQuickJumper?: boolean,
        size?: string,
        simple?: Object,
        showTotal?: Function
    }
    export class Pagination extends React.Component<PaginationProps, {}>{ }




    // Popconfirm
    enum Placement {
        top, left, right, bottom
    }
    interface PopconfirmProps extends React.Props<Popconfirm> {
        placement?: Placement | string,
        title?: string,
        onConfirm?: Function,
        onCancel?: Function,
        onVisibleChange?: (visible: boolean) => void,
        okText?: string,
        cancelText?: string
    }
    export class Popconfirm extends React.Component<PopconfirmProps, {}>{ }




    // Popover
    enum Trigger {
        hover, focus, click
    }
    enum PopoverPlacement {
        top,
        left, right, bottom,
        topLeft, topRight, bottomLeft, bottomRight,
        leftTop, leftBottom, rightTop, rightBottom
    }
    interface PopoverProps extends React.Props<Popover> {
        trigger?: Trigger | string,
        placement?: PopoverPlacement | string,
        title?: React.ReactNode | string,
        overlay?: React.ReactNode | string,
        prefixCls?: string,
        visible?: boolean,
        onVisibleChange?: Function
    }
    export class Popover extends React.Component<PopoverProps, {}>{ }




    // Progress
    enum ProgressStatus {
        normal,
        exception,
        active
    }

    interface LineProps extends React.Props<Line> {
        percent: number,
        format?: (percent: any) => void,
        status?: ProgressStatus | string,
        strokeWidth?: number,
        showInfo?: boolean
    }
    export class Line extends React.Component<LineProps, {}>{ }

    interface CircleProps extends React.Props<Circle> {
        percent: number,
        format?: (percent: any) => void,
        status?: ProgressStatus | string,
        strokeWidth?: number,
        width?: number
    }
    export class Circle extends React.Component<CircleProps, {}>{ }

    export const Progress: {
        Line: typeof Line,
        Circle: typeof Circle
    }


    // QueueAnim
    interface QueueAnimProps extends React.Props<QueueAnim> {
        type?: string | Array<string>,
        animConfig?: Object | Array<any>,
        delay?: number | Array<any>,
        duration?: number | Array<any>,
        interval?: number | Array<any>,
        leaveReverse?: boolean,
        ease?: string | Array<any>,
        animatingClassName?: Array<string>,
        component?: string
    }
    export class QueueAnim extends React.Component<QueueAnimProps, {}>{ }




    // Radio
    enum RadioGroupSize {
        large,
        default,
        small
    }
    interface RadioGroupProps extends React.Props<RadioGroup> {
        onChange?: (e: Event) => void,
        value?: string,
        defaultValue?: string,
        size?: RadioGroupSize | string
    }
    export class RadioGroup extends React.Component<RadioGroupProps, {}>{ }


    interface RadioProps extends React.Props<Radio> {
        checked?: boolean,
        defaultChecked?: boolean,
        value?: any
    }
    export class Radio extends React.Component<RadioProps, {}>{
        static Group: typeof RadioGroup
        static Button: typeof Button
    }



    // Select
    interface SelectOptionProps extends React.Props<SelectOption> {
        disabled?: boolean,
        key?: string,
        value: string
    }
    export class SelectOption extends React.Component<SelectOptionProps, {}>{ }

    interface SelectOptGroupProps extends React.Props<SelectOptGroup> {
        label: string | React.ReactNode,
        key?: string
    }
    export class SelectOptGroup extends React.Component<SelectOptGroupProps, {}>{ }

    interface SelectProps extends React.Props<Select> {
        value?: string | Array<any>,
        defaultValue?: string | Array<any>,
        multiple?: boolean,
        allowClear?: boolean,
        filterOption?: boolean | Function,
        tags?: boolean,
        onSelect?: (value: any, option: any) => void,
        onDeselect?: (value: any, option: any) => void,
        onChange?: (value: any, label: any) => void,
        onSearch?: (value: string) => void,
        placeholder?: string,
        searchPlaceholder?: string,
        notFoundContent?: string,
        dropdownMatchSelectWidth?: boolean,
        optionFilterProp?: string,
        combobox?: SVGSymbolElement,
        size?: string,
        showSearch?: boolean,
        disabled?: boolean,
        style?: Object
    }
    export class Select extends React.Component<SelectProps, {}>{
        static Option: typeof SelectOption
        static OptGroup: typeof SelectOptGroup
    }



    // Slider
    interface SliderProps extends React.Props<Slider> {
        min?: number,
        max?: number,
        step?: number,
        marks?: { key: number, value: any },
        value?: number | Array<number>,
        defaultValue?: number | Array<number>,
        included?: boolean,
        disabled?: boolean,
        allowCross?: boolean,
        onChange?: Function,
        onAfterChange?: Function,
        tipFormatter?: Function | any,
        range?: boolean
    }
    export class Slider extends React.Component<SliderProps, {}>{ }




    // Spin
    interface SpinProps extends React.Props<Spin> {
        size?: string,
        spining?: boolean
    }
    export class Spin extends React.Component<SpinProps, {}>{ }




    // Steps
    enum StepStatus {
        wait, process, finish
    }
    interface StepProps extends React.Props<Step> {
        status?: StepStatus | string,
        title: string | React.ReactNode,
        description?: string | React.ReactNode,
        icon?: string | React.ReactNode
    }
    export class Step extends React.Component<StepProps, {}>{ }

    interface StepsProps extends React.Props<Steps> {
        current?: number,
        size?: string,
        direction?: string,
        maxDescriptionWidth?: number

    }
    export class Steps extends React.Component<StepsProps, {}>{
        static Step: typeof Step
    }



    // Switch
    interface SwitchProps extends React.Props<Switch> {
        checked?: boolean,
        defaultChecked?: boolean,
        onChange?: (checked: boolean) => void,
        checkedChildren?: React.ReactNode,
        unCheckedChildren?: React.ReactNode,
        size?: string
    }
    export class Switch extends React.Component<SwitchProps, {}>{ }




    // Table
    enum RowSelectionType {
        checkbox,
        radio
    }
    type SelectedRowKeys = Array<any>
    type RowSelection = {
        type?: RowSelectionType | string,
        selectedRowKeys?: SelectedRowKeys,
        onChange?: (selectedRowKeys: SelectedRowKeys, selectedRows: any) => void,
        getCheckboxProps?: (record: any) => void,
        onSelect?: (record: any, selected: any, selectedRows: any) => void,
        onSelectAll?: (rselectedecord: any, selectedRows: any, changeRows: any) => void
    }
    type Columns = {
        key?: string,
        title?: string | React.ReactNode,
        dataIndex?: string,
        render?: (text?: any, record?: any, index?: number) => React.ReactNode,
        filters?: Array<any>,
        onFilter?: Function,
        filterMultiple?: boolean,
        sorter?: boolean | Function,
        colSpan?: number,
        width?: string | number,
        className?: string
    }
    interface TableProps extends React.Props<Table> {
        rowSelection?: RowSelection,
        pagination?: Object,
        size?: string,
        dataSource: Array<any>,
        columns: Columns,
        rowKey?: (record: any, index: number) => string,
        expandedRowRender?: Function,
        defaultExpandedRowKeys?: Array<string>,
        onChange?: (pagination: Object, filters: any, sorter: any) => void,
        loading?: boolean,
        locale?: Object,
        indentSize?: number,
        onRowClick?: (record: any, index: number) => void,
        useFixedHeader?: boolean,
        bordered?: boolean,
        showHeader?: boolean,
        footer?: (currentPageData: Object) => void

    }
    export class Table extends React.Component<TableProps, {}>{ }



    // Tabs
    interface TabPaneProps extends React.Props<TabPane> {
        tab: React.ReactNode | string
    }
    export class TabPane extends React.Component<TabPaneProps, {}>{ }

    enum TabsType {
        line, card, 'editable-card'
    }
    enum TabsPosition {
        top,
        right,
        bottom,
        left
    }
    interface TabsProps extends React.Props<Tabs> {
        activeKey?: string,
        defaultActiveKey?: string,
        onChange?: Function,
        onTabClick?: Function,
        tabBarExtraContent?: React.ReactNode,
        type?: TabsType | string,
        tabPosition?: TabsPosition | string,
        onEdit?: (targetKey: string, action: any) => void
    }
    export class Tabs extends React.Component<TabsProps, {}>{
        static TabPane: typeof TabPane
    }




    // Tag
    interface TagProps extends React.Props<Tag> {
        closable?: boolean,
        onClose?: Function,
        afterClose?: Function,
        color?: string
    }
    export class Tag extends React.Component<TagProps, {}>{ }






    // TimePicker
    interface TimePickerProps extends React.Props<TimePicker> {

        value?: string | Date,
        defaultValue?: string | Date,
        format?: string,
        onChange?: (Date: Date) => void,
        disabled?: boolean,
        placeholder?: string,
        locale?: Object,
        hideDisabledOptions?: boolean,
        disabledHours?: Function,
        disabledMinutes?: Function,
        disabledSeconds?: Function

    }
    export class TimePicker extends React.Component<TimePickerProps, {}>{ }




    // Timeline
    interface TimeLineItemProps extends React.Props<TimeLineItem> {
        color?: string
    }
    export class TimeLineItem extends React.Component<TimeLineItemProps, {}>{ }

    interface TimelineProps extends React.Props<Timeline> {
        pending?: boolean | React.ReactNode
    }
    export class Timeline extends React.Component<TimelineProps, {}>{
        static Item: typeof TimeLineItem
    }



    // Tooltip

    interface TooltipProps extends React.Props<Tooltip> {
        placement?: PopoverPlacement | string,
        title?: string | React.ReactNode
    }
    export class Tooltip extends React.Component<TooltipProps, {}>{ }





    // Transfer
    interface TransferProps extends React.Props<Transfer> {
        dataSource: Array<any>,
        render?: (record: Object) => any,
        targetKeys: Array<string>,
        onChange?: (targetKeys: any, direction: string, moveKeys: any) => void,
        listStyle?: Object,
        className?: string,
        titles?: Array<string>,
        operations?: Array<string>,
        showSearch?: boolean,
        searchPlaceholder?: string,
        notFoundContent?: React.ReactNode | string
        footer?: (props: any) => any
    }
    export class Transfer extends React.Component<TransferProps, {}>{ }





    // Tree
    interface TreeNodeProps extends React.Props<TreeNode> {
        disabled?: boolean,
        disableCheckbox?: boolean,
        title?: string | React.ReactNode,
        key?: string,
        isLeaf?: boolean
    }
    export class TreeNode extends React.Component<TreeNodeProps, {}>{ }

    interface TreeProps extends React.Props<Tree> {
        showLine?: boolean,
        className?: string,
        multiple?: boolean,
        checkable?: boolean,
        defaultExpandAll?: boolean,
        defaultExpandedKeys?: Array<string>,
        expandedKeys?: Array<string>,
        checkedKeys?: Array<string>,
        defaultCheckedKeys?: Array<string>,
        selectedKeys?: Array<string>,
        defaultSelectedKeys?: Array<string>,
        onExpand?: (node: any, expanded: any, expandedKeys: any) => void,
        onCheck?: (checkedKeys: any, e: { checked: boolean, checkedNodes: any, node: any, event: Event }) => void,
        onSelect?: (selectedKeys: any, e: { selected: boolean, selectedNodes: any, node: any, event: Event }) => void,
        filterTreeNode?: (node: any) => boolean,
        loadData?: (node: any) => void,
        onRightClick?: (options: { event: Event, node: any }) => void,
        draggable?: boolean,
        onDragStart?: (options: { event: Event, node: any }) => void,
        onDragEnter?: (options: { event: Event, node: any, expandedKeys: any }) => void,
        onDragOver?: (options: { event: Event, node: any }) => void,
        onDragLeave?: (options: { event: Event, node: any }) => void,
        onDrop?: (options: { event: Event, node: any, dragNode: any, dragNodesKeys: any }) => void,
    }
    export class Tree extends React.Component<TreeProps, {}>{
        static TreeNode: typeof TreeNode
    }





    // TreeSelect
    interface TreeSelectTreeNodeProps extends React.Props<TreeSelectTreeNode> {
        disabled?: boolean,
        key: string,
        value?: string,
        title?: React.ReactNode | string,
        isLeaf?: boolean
    }
    export class TreeSelectTreeNode extends React.Component<TreeSelectTreeNodeProps, {}>{ }

    type TreeData = Array<{ value: any, label: string, children: TreeData }>
    interface TreeSelectProps extends React.Props<TreeSelect> {
        style?: Object,
        value?: string | Array<any>,
        defaultValue?: string | Array<any>,
        multiple?: boolean,
        tags?: boolean,
        onSelect?: (value: any) => void,
        onChange?: (value: any, label: any) => void,
        allowClear?: boolean,
        onSearch?: (value: any) => void,
        placeholder?: string,
        searchPlaceholder?: string,
        dropdownStyle?: Object,
        dropdownMatchSelectWidth?: boolean,
        combobox?: boolean,
        size?: string,
        showSearch?: boolean,
        disabled?: boolean,
        treeDefaultExpandAll?: boolean,
        treeCheckable?: boolean,
        filterTreeNode?: (treeNode: any) => void,
        treeNodeFilterProp?: string,
        treeNodeLabelProp?: string,
        treeData?: TreeData,
        loadData?: (node: any) => void
    }
    export class TreeSelect extends React.Component<TreeSelectProps, {}>{
        static TreeNode: typeof TreeSelectTreeNode
    }






    // Upload
    interface UploadProps extends React.Props<Upload> {
        name?: string,
        action: string,
        data?: Object,
        headers?: Object,
        showUploadList?: boolean,
        multiple?: boolean,
        accept?: string,
        beforeUpload?: Function,
        onChange?: (info: Object) => void,
        listType?: string,
        className?: string

    }
    export class Upload extends React.Component<UploadProps, {}>{ }






}


// export all antd
declare module 'antd' {
    export = Antd
}
// single export point
declare module 'antd/lib/Affix' {
    export default Antd.Affix
}
declare module 'antd/lib/Button' {
    export default Antd.Button
}
declare module 'antd/lib/Alert' {
    export default Antd.Alert
}
declare module 'antd/lib/Badge' {
    export default Antd.Badge
}
declare module 'antd/lib/Breadcrumb' {
    export default Antd.Breadcrumb
}
declare module 'antd/lib/Calendar' {
    export default Antd.Calendar
}
declare module 'antd/lib/Carousel' {
    export default Antd.Carousel
}
declare module 'antd/lib/Cascader' {
    export default Antd.Cascader
}
declare module 'antd/lib/Checkbox' {
    export default Antd.Checkbox
}
declare module 'antd/lib/Collapse' {
    export default Antd.Collapse
}
declare module 'antd/lib/DatePicker' {
    export default Antd.DatePicker
}
declare module 'antd/lib/Dropdown' {
    export default Antd.Dropdown
}
declare module 'antd/lib/Icon' {
    export default Antd.Icon
}
declare module 'antd/lib/Form' {
    export default Antd.Form
}
declare module 'antd/lib/Input' {
    export default Antd.Input
}
declare module 'antd/lib/InputNumber' {
    export default Antd.InputNumber
}
declare module 'antd/lib/Row' {
    export default Antd.Row
}
declare module 'antd/lib/Col' {
    export default Antd.Col
}
declare module 'antd/lib/Menu' {
    export default Antd.Menu
}
declare module 'antd/lib/message' {
    export default Antd.message
}
declare module 'antd/lib/Modal' {
    export default Antd.Modal
}
declare module 'antd/lib/Notification' {
    export default Antd.Notification
}
declare module 'antd/lib/Pagination' {
    export default Antd.Pagination
}
declare module 'antd/lib/Popconfirm' {
    export default Antd.Popconfirm
}
declare module 'antd/lib/Popover' {
    export default Antd.Popover
}
declare module 'antd/lib/Progress' {
    export default Antd.Progress
}
declare module 'antd/lib/QueueAnim' {
    export default Antd.QueueAnim
}
declare module 'antd/lib/Radio' {
    export default Antd.Radio
}
declare module 'antd/lib/Select' {
    export default Antd.Select
}
declare module 'antd/lib/Slider' {
    export default Antd.Slider
}
declare module 'antd/lib/Spin' {
    export default Antd.Spin
}
declare module 'antd/lib/Steps' {
    export default Antd.Steps
}
declare module 'antd/lib/Switch' {
    export default Antd.Switch
}
declare module 'antd/lib/Table' {
    export default Antd.Table
}
declare module 'antd/lib/Tabs' {
    export default Antd.Tabs
}
declare module 'antd/lib/Tag' {
    export default Antd.Tag
}
declare module 'antd/lib/TimePicker' {
    export default Antd.TimePicker
}
declare module 'antd/lib/Timeline' {
    export default Antd.Timeline
}
declare module 'antd/lib/Tooltip' {
    export default Antd.Tooltip
}
declare module 'antd/lib/Transfer' {
    export default Antd.Transfer
}
declare module 'antd/lib/Tree' {
    export default Antd.Tree
}
declare module 'antd/lib/TreeSelect' {
    export default Antd.TreeSelect
}
declare module 'antd/lib/Upload' {
    export default Antd.Upload
}