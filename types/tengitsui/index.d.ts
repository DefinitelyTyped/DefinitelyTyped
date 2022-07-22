// Type definitions for tengitsui 4.4.7
// Definitions by: stackman <1026385513@qq.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
type voidFunc = () => void;
export type onChange = (value: any) => void;
export interface BaseOpts {
    handleChange?: (value: any, onChange: onChange) => any;
    disabled?: boolean | ((fields: object) => boolean);
}
type optionCompute = (fields: object, options: Option[]) => Option[];
type visibleFnc = (params: { fields: object }) => boolean;
export type Option = {
    id: number | string;
    name: string;
    label?: React.ReactNode;
    disabled?: boolean;
    children?: Option[];
    $exclusive?: boolean; //排他
    $overall?: boolean; //全局
    $mutable?: boolean; //可修改
};
export type BaseProps = {
    placeholder?: string;
    value?: number | string | string[] | number[] | any[];
    field: string;
    options: Option[];
    onChange: voidFunc;
    opts: BaseOpts;
};
export type Field = {
    type: string;
    name: string;
    opts?: BaseOpts;
    options?: Option[];
    optionCompute?: optionCompute;
    visible?: visibleFnc;
};
export type Schema = {
    [key: string]: Field;
};

//crud
type actionGen = (record: object) => boolean;
type clickFn = (record: object, params: object) => void;
interface FunApi {
    (record: object): Element;
    action: actionGen;
}
type Api =
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
type AdvancedApi = {
    add?: string | Api;
    edit?: string | Api;
    list?: string;
    remove?: string | Api;
    [key: string]: string | Api | undefined;
};

type AdvancedAuth = {
    add?: number | string;
    edit?: number | string;
    list?: number | string;
    remove?: number | string;
    [key: string]: number | string | undefined;
};
type ViewType = 'list' | 'form' | 'filter' | 'detail';
type visibleFn = (record: { fields: any }) => true | false;
type AdvancedField = {
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
    visible?: boolean | visibleFn;
    defaultValue?: any; //defaultValue 和visible互斥TODO 一起存在
    fixed?: 'left' | 'right';
};
export type AdvancedSchema = {
    [key: string]: AdvancedField;
};
export type AdvancedCrudProps = {
    api: AdvancedApi;
    auth: AdvancedAuth;
    schema: AdvancedSchema;
};

export type AdvancedFilterProps = {
    defaultValue?: Object | undefined;
    schema: Object;
    noCollpose?: boolean;
    noClearer?: boolean;
    onSearch?: voidFunc;
    onReset?: voidFunc;
    onFieldChange: voidFunc;
    onChange: onChange;
};

export type AMapDistrictSearchProps = {
    level?: 'country' | 'province' | 'city' | 'district' | 'biz_area';
    subdistrict?: 0 | 1 | 2 | 3;
    name: string;
};
export const ArrayCtrl: (
    com: React.ComponentType<any>,
    plus?: React.ComponentType<any>,
    ctrl?: React.ComponentType<any>,
) => React.ComponentType<any>;

type option = {
    id: number | string;
    name: string;
};
interface AutoCompleteOpts {
    dropdownMenuStyle?: React.CSSProperties;
    autoFocus?: boolean;
    backfill?: boolean;
    optionLabelProp?: string;
}
export type AutoCompleteProps = {
    placeholder?: string;
    value?: string;
    field: string;
    options: option[];
    onChange: voidFunc;
    opts: AutoCompleteOpts;
};
export type ChartProps = {
    id: number | string;
    style?: string;
    className?: string;
    theme?: 'light' | 'dark';
    props: {};
};

type selectFn = (itor: Iterable<Element>, slen: number, dlen: number) => Array<Element>;
export type CombineProps = {
    source: Array<Element>;
    children: Array<Element>;
    select: selectFn;
};
type Layout = (props: object) => Array<Element>;
export type ComposeProps = {
    schema: AdvancedSchema;
    Layout: Layout;
    name: string;
};

type UrlObj = {
    id?: number | string;
    name?: string;
    url: string;
    delFlag?: boolean | number;
};
type DrawableUploaderOpts = {
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
};
export type DrawableUploaderProps = {
    value: string[] | UrlObj[];
    onChange: (value: UrlObj[]) => {};
    opts: DrawableUploaderOpts;
};
export type FilterProps = {
    defaultValue: Object | undefined;
    schema: Object;
    noCollpose: boolean;
    noClearer: boolean;
    onSearch?: voidFunc;
    onReset?: voidFunc;
    onFieldChange: voidFunc;
};

type Required = {
    required: boolean;
};
type Validator = {
    validator: (value: any) => boolean | string;
};
type ValidatorRule = Required | Validator;

type FormField = {
    field: string;
    name: string;
    type: string;
    rules?: ValidatorRule[];
    opts?: BaseOpts;
    options?: Option[];
};
type FormSchema = {
    [key: string]: FormField;
};
type Fields = {
    [key: string]: any;
};
type Errros = {
    [key: string]: boolean | string | undefined;
};
export type FormProps = {
    fields: Fields;
    schema: FormSchema;
    onChange: (value: any) => void;
    errors: Errros;
    children?: any;
};
export type GridLayoutProps = {
    layout: string;
    gap?: number;
    cellRatio?: 'auto' | number;
    children: Array<Element>;
    style?: object;
};
type Location = {
    longitude?: number;
    latitude?: number;
    position?: string;
    province?: string;
    city?: string;
    district?: string;
    loading?: boolean;
};
export type LocationSelectOpts = {
    disabled?: boolean;
    getValue?: (fields: object) => Location;
    cascDisabled?: boolean;
};
export type LocationSelectProps = {
    fields: Location;
    onChange: onChange;
    opts: LocationSelectOpts;
};
export type MileageProps = {
    value: string | undefined;
    onChange: (value: string) => void;
    opts?: {};
};
export type MileageRangeProps = {
    value: Array<string> | undefined;
    onChange: (value: Array<string>) => void;
    opts?: {};
};
export type ProgressProps = {
    type?: 'line' | 'circle' | 'dashboard' | undefined;
    title?: string | undefined;
    showPrecent?: boolean | false;
    strokeColor?: string | undefined;
    callback?: () => void;
    opts?: {};
};

export type RangePickerProps =
    | BaseProps
    | {
          value: undefined | null | null[] | string[];
      };

export type TableEditorRef = {
    getValue: () => [];
    getErrors: () => [];
};
interface Rule {
    required?: boolean;
    validator: (value: any, fields: object) => any;
}
type Record = any;
type VisibleFnc = (record: Record) => boolean;
type OptionComputeFnc = (record: Record, options: Option[]) => Option[] | Promise<Option[]>;
type ComputeFnc = (record: Record, field: string) => any;
type RenderProps = {
    value: any;
    record: Record;
};
type ColumnRender = (props: RenderProps) => any;
type FeildMode = 'multiple';
type TableEditorOpts = {
    allowClear?: boolean;
    mode?: FeildMode;
};
type ColumnFilter = {
    text: string;
    value: number | string;
};
export type TableField = {
    type?: string | Element;
    name: string;
    options?: Option[];
    editable?: boolean | VisibleFnc;
    optionCompute?: OptionComputeFnc;
    compute?: ComputeFnc;
    render?: ColumnRender;
    opts?: TableEditorOpts;
    nocopy?: boolean;
    noclean?: boolean;
    filters?: ColumnFilter[];
    beforeOptionRender?: (items: string | Array<string>) => any;
    rules?: Rule[];
};
export type ColumnSchema = {
    [key: string]: TableField;
};
export type TableEditorProps = {
    value: Record[];
    columns: ColumnSchema;
    addTool?: (columns: object) => object;
    editable?: boolean;
};
