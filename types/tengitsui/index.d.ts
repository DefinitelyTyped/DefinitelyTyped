import * as React from "react";
export type voidFunc = () => void;
export type onChange = (value: any) => void;
export interface BaseOpts {
    handleChange?: (value: any, onChange: onChange) => any;
    disabled?: boolean | ((fields: Fields) => boolean);
}
export type optionCompute = (fields: Fields, options: Option[]) => Option[];
export type visibleFnc = (params: { fields: Fields }) => boolean;
export interface Option {
    id: number | string;
    name: string;
    label?: React.ReactNode;
    disabled?: boolean;
    children?: Option[];
    $exclusive?: boolean; // 排他
    $overall?: boolean; // 全局
    $mutable?: boolean; // 可修改
}
export interface BaseProps {
    placeholder?: string;
    value?: number | string | string[] | number[] | any[];
    field: string;
    options: Option[];
    onChange: voidFunc;
    opts: BaseOpts;
}
export interface Field {
    type: string;
    name: string;
    opts?: BaseOpts;
    options?: Option[];
    optionCompute?: optionCompute;
    visible?: visibleFnc;
}
export interface Schema {
    [key: string]: Field;
}

// crud
export type actionGen = (record: object) => boolean;
export type clickFn = (record: object, params: object) => void;
export interface FunApi {
    (record: object): Element;
    action: actionGen;
}
export type Api =
    | {
        url?: string;
        name: string;
        confirm?: string;
        action?: actionGen;
        onClick?: clickFn;
        mode?: string;
        readonly?: string;
        reorganizeSchema?: (schema: AdvancedSchema) => AdvancedSchema;
    }
    | FunApi;
export interface AdvancedApi {
    add?: string | Api;
    edit?: string | Api;
    list?: string;
    remove?: string | Api;
    [key: string]: string | Api | undefined;
}

export interface AdvancedAuth {
    add?: number | string;
    edit?: number | string;
    list?: number | string;
    remove?: number | string;
    [key: string]: number | string | undefined;
}
export type ViewType = "list" | "form" | "filter" | "detail";
export interface AdvancedField {
    field: string;
    name: string;
    view: ViewType[];
    type: string;
    filterType?: string;
    rules: string[];
    optionApi?: string;
    optionTrigger?: string[];
    listRender?: (params: any) => {};
    order?: number | string;
    group?: string;
    useFirstOption?: boolean;
    visible?: boolean | visibleFnc;
    defaultValue?: any; // defaultValue 和visible互斥TODO 一起存在
    fixed?: "left" | "right";
}
export interface AdvancedSchema {
    [key: string]: AdvancedField;
}
export interface AdvancedCrudProps {
    api: AdvancedApi;
    auth: AdvancedAuth;
    schema: AdvancedSchema;
}

export interface AdvancedFilterProps {
    defaultValue?: object | undefined;
    schema: object;
    noCollpose?: boolean;
    noClearer?: boolean;
    onSearch?: voidFunc;
    onReset?: voidFunc;
    onFieldChange: voidFunc;
    onChange: onChange;
}

export interface AMapDistrictSearchProps {
    level?: "country" | "province" | "city" | "district" | "biz_area";
    subdistrict?: 0 | 1 | 2 | 3;
    name: string;
}
export function ArrayCtrl(): (
    com: React.ComponentType<any>,
    plus?: React.ComponentType<any>,
    ctrl?: React.ComponentType<any>,
) => React.ComponentType<any>;

export interface option {
    id: number | string;
    name: string;
}
export interface AutoCompleteOpts {
    dropdownMenuStyle?: React.CSSProperties;
    autoFocus?: boolean;
    backfill?: boolean;
    optionLabelProp?: string;
}
export interface AutoCompleteProps {
    placeholder?: string;
    value?: string;
    field: string;
    options: option[];
    onChange: voidFunc;
    opts: AutoCompleteOpts;
}
export interface ChartProps {
    id: number | string;
    style?: string;
    className?: string;
    theme?: "light" | "dark";
    props: {};
}

export type selectFn = (itor: Iterable<Element>, slen: number, dlen: number) => Element[];
export interface CombineProps {
    source: Element[];
    children: Element[];
    select: selectFn;
}
export type Layout = (props: object) => Element[];
export interface ComposeProps {
    schema: AdvancedSchema;
    Layout: Layout;
    name: string;
}

export interface UrlObj {
    id?: number | string;
    name?: string;
    url: string;
    delFlag?: boolean | number;
}
export interface DrawableUploaderOpts {
    // 上传地址
    action?: string;
    // 上传附加参数
    data?: any;
    // 最大文件数
    maxLength?: number;
    listType?: string;
    customRequest: (file: any, onProgress: () => {}) => {};
    beforeUpload?: (file: any, fileList: []) => boolean;
    disabled?: boolean;
}
export interface DrawableUploaderProps {
    value: string[] | UrlObj[];
    onChange: (value: UrlObj[]) => {};
    opts: DrawableUploaderOpts;
}
export interface FilterProps {
    defaultValue: object | undefined;
    schema: object;
    noCollpose: boolean;
    noClearer: boolean;
    onSearch?: voidFunc;
    onReset?: voidFunc;
    onFieldChange: voidFunc;
}

export interface Required {
    required: boolean;
}
export interface Validator {
    validator: (value: any) => boolean | string;
}
export type ValidatorRule = Required | Validator;

export interface FormField {
    field: string;
    name: string;
    type: string;
    rules?: ValidatorRule[];
    opts?: BaseOpts;
    options?: Option[];
}
export interface FormSchema {
    [key: string]: FormField;
}
export interface Fields {
    [key: string]: any;
}
export interface Errros {
    [key: string]: boolean | string | undefined;
}
export interface FormProps {
    fields: Fields;
    schema: FormSchema;
    onChange: (value: any) => void;
    errors: Errros;
    children?: any;
}
export interface GridLayoutProps {
    layout: string;
    gap?: number;
    cellRatio?: "auto" | number;
    children: Element[];
    style?: object;
}
export interface Location {
    longitude?: number;
    latitude?: number;
    position?: string;
    province?: string;
    city?: string;
    district?: string;
    loading?: boolean;
}
export interface LocationSelectOpts {
    disabled?: boolean;
    getValue?: (fields: Fields) => Location;
    cascDisabled?: boolean;
}
export interface LocationSelectProps {
    fields: Location;
    onChange: onChange;
    opts: LocationSelectOpts;
}
export interface MileageProps {
    value: string | undefined;
    onChange: (value: string) => void;
    opts?: {};
}
export interface MileageRangeProps {
    value: string[] | undefined;
    onChange: (value: string[]) => void;
    opts?: {};
}
export interface ProgressProps {
    type?: "line" | "circle" | "dashboard" | undefined;
    title?: string | undefined;
    showPrecent?: boolean | false;
    strokeColor?: string | undefined;
    callback?: () => void;
    opts?: {};
}

export type RangePickerProps =
    | BaseProps
    | {
        value: undefined | null | Array<null> | string[];
    };

export interface TableEditorRef {
    getValue: () => [];
    getErrors: () => [];
}
export interface Rule {
    required?: boolean;
    validator: (value: any, fields: Fields) => any;
}
export interface Record {
    [key: string]: any;
}
export type editableFnc = (record: Record) => boolean;
export type OptionComputeFnc = (record: Record, options: Option[]) => Option[] | Promise<Option[]>;
export type ComputeFnc = (record: Record, field: string) => any;
export interface RenderProps {
    value: any;
    record: Record;
}
export type ColumnRender = (props: RenderProps) => any;
export type FeildMode = "multiple";
export interface TableEditorOpts {
    allowClear?: boolean;
    mode?: FeildMode;
}
export interface ColumnFilter {
    text: string;
    value: number | string;
}
export interface TableField {
    type?: string | Element;
    name: string;
    options?: Option[];
    editable?: boolean | editableFnc;
    optionCompute?: OptionComputeFnc;
    compute?: ComputeFnc;
    render?: ColumnRender;
    opts?: TableEditorOpts;
    nocopy?: boolean;
    noclean?: boolean;
    filters?: ColumnFilter[];
    beforeOptionRender?: (items: string | string[]) => any;
    rules?: Rule[];
}
export interface ColumnSchema {
    [key: string]: TableField;
}
export interface TableEditorProps {
    value: Record[];
    columns: ColumnSchema;
    addTool?: (columns: object) => object;
    editable?: boolean;
}
