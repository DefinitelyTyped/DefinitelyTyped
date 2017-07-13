// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export as namespace zui;


/**
 * bootstrap 
 */
interface ModalOptions {
    backdrop?: boolean | string;
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
}

interface ModalOptionsBackdropString {
    backdrop?: string; // for "static"
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
}

interface ScrollSpyOptions {
    offset?: number;
    target?: string;
}

interface TooltipOptions {
    animation?: boolean;
    html?: boolean;
    placement?: string | Function;
    selector?: string;
    title?: string | Function;
    trigger?: string;
    template?: string;
    delay?: number | Object;
    container?: string | boolean;
    viewport?: string | Function | Object;
}

interface PopoverOptions {
    animation?: boolean;
    html?: boolean;
    placement?: string | Function;
    selector?: string;
    trigger?: string;
    title?: string | Function;
    template?: string;
    content?: any;
    delay?: number | Object;
    container?: string | boolean;
    viewport?: string | Function | Object;
}

interface CollapseOptions {
    parent?: any;
    toggle?: boolean;
}

interface CarouselOptions {
    interval?: number;
    pause?: string;
    wrap?: boolean;
    keyboard?: boolean;
}

interface TypeaheadOptions {
    source?: any;
    items?: number;
    minLength?: number;
    matcher?: (item: any) => boolean;
    sorter?: (items: any[]) => any[];
    updater?: (item: any) => any;
    highlighter?: (item: any) => string;
}

interface AffixOptions {
    offset?: number | Function | Object;
    target?: any;
}

interface TransitionEventNames {
    end: string;
}
declare global {
    interface JQuery {
        modal(options?: ModalOptions): JQuery;
        modal(options?: ModalOptionsBackdropString): JQuery;
        modal(command: string): JQuery;

        dropdown(): JQuery;
        dropdown(command: string): JQuery;

        scrollspy(command: string): JQuery;
        scrollspy(options?: ScrollSpyOptions): JQuery;

        tab(): JQuery;
        tab(command: string): JQuery;

        tooltip(options?: TooltipOptions): JQuery;
        tooltip(command: string, params?: string): JQuery;

        popover(options?: PopoverOptions): JQuery;
        popover(command: string): JQuery;

        alert(): JQuery;
        alert(command: string): JQuery;

        button(): JQuery;
        button(command: string): JQuery;

        collapse(options?: CollapseOptions): JQuery;
        collapse(command: string): JQuery;

        carousel(options?: CarouselOptions): JQuery;
        carousel(command: string): JQuery;

        typeahead(options?: TypeaheadOptions): JQuery;

        affix(options?: AffixOptions): JQuery;

        emulateTransitionEnd(duration: number): JQuery;
    }

    interface JQuerySupport {
        transition: boolean | TransitionEventNames;

    }
}

/**
 * store
 */


interface StoreStatic {
    enable: boolean;
    storage: any;
    length(): number;
    remove(key: string): any;
    get<T>(key: string): T;
    set<T>(key: string, value?: T): any;
    key(index: number): string;
    forEach<T>(cb: (key: string, value: T) => any): any;
    serialize(value: any): string;
    deserialize<T>(value: string): T;
    getAll<T>(): T;
    removeItem(key: string): any;
    getItem(key: string): string;
    setItem(key: string, value: any): any;
    clear(): void;

    page: any;
    pageGet(key: string): any;
    pageSet(key: string, value: any): any;
    pageRemove(key: string): any;
    pageSave(): any;
    pageClear(): any;
}

/**
 * messager
 */


declare enum MessagerTypeEnum {
    'default', 'primary', 'success', 'info', 'warning', 'danger', 'important', 'special'
}
interface Action {
    name?: string,
    icon?: string,
    text?: string
    html?: string
    action?: ActionFunc;
}

interface ActionFunc {
    (): boolean;
}
interface OnActionFunc {
    (name: string, action: string, messager: Messager): any
}

interface MessagerOption {
    type?: MessagerTypeEnum | string;
    placement?: string,
    time?: number;
    message?: string,
    parent?: string,
    icon?: string,
    close?: boolean;
    fade?: boolean;
    scale?: boolean;
    actions?: Array<Action>;
    onAction?: OnActionFunc;
    cssClass?: string,
    contentClass?: string,
    show?: boolean
}
interface Messager {
    show(cb?: Function): any;
    show(message: string, cb?: Function): any;

    hide(cb?: Function): any;
}
interface MessagerStatic {
    new(option?: MessagerOption): Messager;
    new(message: string, option?: MessagerOption): Messager;
}

export interface ZuiStatic {
    // $.zui.messager
    messager: Messager;
    Messager: MessagerStatic;

    store: StoreStatic;
}


/**
 * modal trigger
 */

interface ModalTriggerOption {
    name?: string,
    className?: string,
    type?: string,
    url?: string,
    remote?: string,
    iframe?: string,
    size?: string,
    width?: string,
    height?: string,
    showHeader?: boolean,
    title?: string,
    icon?: string,
    fade?: boolean,
    postion?: string,
    backdrop?: boolean,
    keyboard?: boolean,
    moveable?: boolean,
    rememberPos?: boolean,
    waittime?: number,
    loadingIcon?: string,

    show?(): any;
    onShow?(): any;
    onHide?(): any;
    hidden?(): any;
    loaded?(): any;
    broken?(): any;
}

interface ModalTrigger {
    show(option?: ModalTriggerOption): any;
    close(): any;
    toggle(option?: ModalTriggerOption): any;
    adjustPostion(option?: ModalTriggerOption): any;

}
interface ModalTriggerStatic {
    new(option?: ModalTriggerOption): ModalTrigger
}
declare global {
    interface JQuery {
        modalTrigger(option?: ModalTriggerOption): JQuery //$('#modal').modalTrigger()
        data(value: string): JQuery;
    }
}
interface ZuiStatic {
    ModalTrigger: ModalTriggerStatic;
    modalTrigger: ModalTrigger;
}

declare global {
    interface JQueryStatic {
        zui: ZuiStatic;
    }

}

/**
 * datetime picker
 */

import * as moment from 'moment';

export interface DatetimepickerChangeEventObject extends DatetimepickerEventObject {
    oldDate: moment.Moment;
}

export interface DatetimepickerEventObject extends JQueryEventObject {
    date: moment.Moment;
}

export interface DatetimepickerIcons {
    time?: string;
    date?: string;
    up?: string;
    down?: string;
}

export interface DatetimepickerOptions {
    weekStart?: number;
    todayBtn?: number | boolean;
    autoclose?: number | boolean;
    todayHighlight?: number | boolean;
    startView?: number;
    forceParse?: number | boolean;
    showMeridian?: boolean | number,
    minView?: number;
    maxView?: number;
    pickDate?: boolean;
    pickTime?: boolean;
    useMinutes?: boolean;
    useSeconds?: boolean;
    useCurrent?: boolean;
    minuteStepping?: number;
    minDate?: moment.Moment | Date | string;
    maxDate?: moment.Moment | Date | string;
    showToday?: boolean;
    collapse?: boolean;
    language?: string;
    defaultDate?: moment.Moment | Date | string;
    disabledDates?: Array<moment.Moment | Date | string>;
    enabledDates?: Array<moment.Moment | Date | string>;
    icons?: DatetimepickerIcons;
    useStrict?: boolean;
    direction?: string;
    sideBySide?: boolean;
    daysOfWeekDisabled?: Array<number>;
    calendarWeeks?: boolean;
    format?: string | boolean;
    locale?: string;
    showTodayButton?: boolean;
    viewMode?: string;
    inline?: boolean;
    toolbarPlacement?: string;
    showClear?: boolean;
    ignoreReadonly?: boolean;
}

export interface Datetimepicker {
    date(date: moment.Moment | Date | string): void;
    date(): moment.Moment;
    minDate(date: moment.Moment | Date | string): void;
    minDate(): moment.Moment | boolean;
    maxDate(date: moment.Moment | Date | string): void;
    maxDate(): moment.Moment | boolean;
    show(): void;
    disable(): void;
    enable(): void;
    destroy(): void;
    toggle(): void;
}

declare global {
    interface JQuery {
        datetimepicker(): JQuery;
        datetimepicker(options: DatetimepickerOptions): JQuery;

        off(events: "dp.change", selector?: string, handler?: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
        off(events: "dp.change", handler: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;

        on(events: "dp.change", selector: string, data: any, handler?: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
        on(events: "dp.change", selector: string, handler: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
        on(events: 'dp.change', handler: (eventObject: DatetimepickerChangeEventObject) => any): JQuery;

        off(events: "dp.show", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        off(events: "dp.show", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

        on(events: "dp.show", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: "dp.show", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: 'dp.show', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

        off(events: "dp.hide", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        off(events: "dp.hide", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

        on(events: "dp.hide", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: "dp.hide", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: 'dp.hide', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

        off(events: "dp.error", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        off(events: "dp.error", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

        on(events: "dp.error", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: "dp.error", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
        on(events: 'dp.error', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

        data(key: 'DateTimePicker'): Datetimepicker;
    }
}

/**
 * color
 */

interface Color {
    rgb(rgbaColor?: string): object;
    hue(hue: string): string,
    darken(percent: number): string;
    lighten(percent: number): string;
    clone(): Color;
    fade(percent: number): any;
    toHsl(): object;
    luma(): string;
    saturate(): string;
    contrast(dark: string, light: string, threshold: number): string;
    hexStr(): string;
    toCssStr(): string;
}

interface ColorStatic {
    new(): Color;
    new(hexStr: string): Color;
    new(r: number, g: number, b: number): Color;
    new(r: number, g: number, b: number, a: number): Color;
    new(rgbColorOrRgbaColorOrName: string): Color;
    isColor(str: string): boolean;
    names: Array<string>;
}
interface ColorSet {
    get(name: string): Color;
}
interface ZuiStatic {
    Color: ColorStatic;
    colorset: ColorSet;
}

/**
 * draggable
 */

interface Postion {
    left: number;
    top: number;
    width: number;
    height: number;
}
interface DraggableEvent {
    event?: object;
    element?: JQuery | object;
    target?: JQuery | object;
    pos?: Postion;
    offset?: object;
    smallOffset?: object;
    startOffset?: object;

}
interface DraggableOption {
    container?: string,
    move?: boolean;
    selector?: string,
    handle?: string,
    mouseButton?: string,
    stopPropagation?: boolean,
    before?(e?: DraggableEvent): boolean;
    drag?(e: DraggableEvent): void;
    finish?(e: DraggableEvent): void
}
declare global {
    interface JQuery {
        draggable(command: string): JQuery;
        draggable(option: DraggableOption): JQuery;
    }
}

/**
 * droppable 
 */

interface Postion {
    left: number;
    top: number;
    width: number;
    height: number;
}
interface DroppableEvent {
    event?: object;
    element?: JQuery;
    target?: JQuery;
    pos?: Postion;
    offset?: object;
    smallOffset?: object;
    startOffset?: object;

}
interface DroppableOption {
    container?: string,
    selector?: string,
    handle?: string,
    target: JQuery | string,

    flex?: boolean,
    deviation?: number,
    sensorOffsetX?: number,
    sensorOffsetY?: number,

    before?(e?: DroppableEvent): boolean;
    start?(e?: DroppableEvent): void;
    drag?(e: DroppableEvent): void;
    beforeDrop?(e: DroppableEvent): boolean;
    drop?(e: DroppableEvent): void;
    finish?(e: DroppableEvent): void;
    always?(e: DroppableEvent): void;
}
declare global {
    interface JQuery {
        droppable(command: string): JQuery;
        droppable(option: DroppableOption): JQuery;
    }
}
/**
 * sortable
 */


interface SortEvent {
    list: Array<JQuery | object>;
    element: JQuery | object;
}

interface SortableOption {
    selector?: string,
    trigger?: string,
    reverse?: boolean,
    dragCssClass?: string,
    sortingClass?: string,
    mouseButton?: string,
    start?(e?: SortEvent): void;
    order?(e?: SortEvent): void;
    finish?(e?: SortEvent): void;
}
declare global {
    interface JQuery {
        sortable(command?: string): JQuery
        sortable(option?: SortableOption): JQuery
    }
}

/**
 * selectable
 */

interface SelectableEvent {
    selections: Map<number, boolean>;
    selected: Array<number>;
}
interface SelectableOption {
    selector?: string,
    trigger?: string,
    rangeStyle?: string | object,
    clickBehavior?: string,
    mouseButton?: string,
    ignoreVal?: number,

    start?(e?: SelectableEvent): boolean;
    finish?(e?: SelectableEvent): void;
    select?(e?: SelectableEvent): void;
    unselect?(e?: SelectableEvent): void;
}

interface Selectable {
    toggle(): any;
    toggle(elementOrId: string | object | JQuery): any;
    select(): any;
    select(elementOrId: string | object | JQuery): any;
    unselect(): any;
    unselect(elementOrId: string | object | JQuery): any;
}
declare global {
    interface JQuery {
        selectable(option?: SelectableOption): JQuery;

    }
}
/**
 * image cutter
 */


interface ImageCutterOption {
    coverColor?: string,
    coverOpacity?: number,
    defaultWidth?: number,
    defaultHeight?: number,
    fixedRatio?: boolean,
    minWidth?: number,
    minHeight?: number,
    post?: string,
    get?: string
}
interface ImageData {
    originWidth: number,
    originHeight: number,
    scaled: boolean,
    scaleHeight: number,
    scaleWidth: number,
    width: number,
    height: number,
    left: number,
    right: number,
    top: number,
    bottom: number
}
interface ImageCutter {
    resetImage(img: string): any;
    getData(): ImageData;
}
declare global {
    interface JQuery {
        imgCutter(option: ImageCutterOption): JQuery;
        data(cmd: string): ImageCutter;
    }
}

/**
 * treeview
 */

interface TreeNode {
    title?: string,
    url?: string,
    html?: string,
    children?: Array<TreeNode>;
    open?: boolean,
    id?: string
}
interface TreeMenuOption {
    animate?: boolean,
    initialState?: string,
    data?: Array<TreeNode>
    itemCreator?(li: JQuery | object, item: TreeNode): any,
    itemWrapper?: boolean
}

interface TreeMenu {
    expand(): void;
    expand(params: JQuery): void;
    expand(params: JQuery, disableAnimate: boolean): void;

    collapse(): void;
    collapse(params: JQuery): void;
    collapse(params: JQuery, disableAnimate: boolean): void;

    toggle(): void;
    toggle(params: JQuery): void;
    toggle(params: JQuery, disableAnimate: boolean): void;

    show(): void;
    show(params: JQuery): void;
    show(params: JQuery, disableAnimate: boolean): void;

    add(element: JQuery, items: Array<TreeNode>, expand?: boolean, disabledAnimate?: boolean): void;
    toData($ul?: JQuery, filter?: string): object;

    reload(data: Array<TreeNode>): void;
    remove(): void;
    empty(): void;
}
declare global {
    interface JQuery {
        tree(option?: TreeMenuOption): JQuery
    }
}

interface Col {
    width?: number,
    text?: string,
    type?: string,
    flex?: boolean,
    colClass?: string,
    sort?: string,
    ignore?: boolean
}
interface Row {
    id?: string,
    checked?: boolean,
    cssClass?: string,
    css?: string,
    data?: Array<any>
}
interface DataTableData {
    rows: Array<Row>,
    cols: Array<Col>
}
interface AfterLoadEvent {
    data: DataTableData;
}
interface SortEvent {
    sorter: {
        index: number,
        sortUp: boolean,
    }
}
interface SizeChangeEvent {
    changes: {
        change: string,
        oldWidth: number,
        newWidth: number,
        colIndex: number,
    }
}
interface ChecksChangeEvent {
    checks: {
        checkedAll: boolean,
        checks: Array<number>
    }
}
interface DataTableOption {
    checkable?: boolean,
    checkByClickRow?: boolean,
    checkedClass?: string,
    storage?: boolean,
    sortable?: boolean,
    fixedHeader?: boolean,
    fixedHeaderOffset?: number,
    fixedLeftWidth?: string,
    fixedRightWidth?: string,
    flexHeadDrag?: boolean,
    scrollPos?: string,
    rowHover?: boolean,
    colHover?: boolean,
    fixCellHeight?: boolean,
    minColWidth?: number,
    minFixedLeftWidth?: number,
    minFixedRightWidth?: number,
    minFlexAreaWidth?: number
    selectable?: boolean | object,

    afterLoad?(event: AfterLoadEvent): void;
    ready?(): void;
    sort?(event: SortEvent): void;
    sizeChanged?(event: SizeChangeEvent): void;
    checksChanged?(event: ChecksChangeEvent): void;
}

interface DataTable {
    checks: { checkedAll: boolean, checks: Array<number> }
}
declare global {
    interface JQuery {
        datatable(option?: DataTableOption): JQuery;
        datatable(command: string, option?: DataTableOption): JQuery;
        datatable(command: string, data: DataTableData): JQuery;
    }
}

/**
 * uploader
 */


interface UploaderOption {
    drop_element?: string,
    browse_button?: string,
    url: string,
    qiniu?: object,
    filters?: {
        mime_type: Array<{
            title?: string,
            extensions?: string
        }>,
        max_file_size?: string,
        prevent_duplicates?: string
    },
    fileList?: string,
    fileTemplate?: string,
    fileFormater?($file: JQuery, file: FileObj, status: STATUS): void;
    fileIconCreator?(fileType: string, file: FileObj, uploader: Uploader): void;
    staticFiles?: Array<{
        id?: string,
        name?: string,
        type?: string,
        size?: string,
        origSize?: string,
        lastModifiedDate?: Date
    }>;
    rename?: boolean,
    renameExtension?: boolean,
    renameByClick?: boolean,
    autoUpload?: boolean,
    browseByClickList?: boolean,
    dropPlaceholder?: boolean,
    previewImageIcon?: boolean,
    sendFileName?: boolean,
    sendFileId?: boolean,
    responseHandler?: boolean | Function,
    limitFilesCount?: boolean | number,
    deleteConfirm?: boolean | string,
    removeUploaded?: boolean,
    statusCreator?(total: UploadProgress, state: STATUS, uploader: Uploader): void;
    previewImageSize?: { width: number, height: number },
    uploadedMessage?: boolean,
    deleteActionOnDone?: boolean,
    renameActionOnDone?: boolean,
    headers?: object,
    multipart?: boolean,
    multipart_params?: object | Function,
    max_retries?: number,
    chunk_size?: string,
    resize?: {
        width?: number,
        height?: number,
        crop?: boolean,
        quuality?: number,
        preserve_headers?: boolean
    },
    multi_selection?: boolean,
    unique_names?: boolean,
    runtimes?: string,
    file_data_name?: string,
    flash_swf_url?: string,
    silverlight_xap_url?: string,
    lang?: string,

    onInit?(): void,
    onFilesAdded?(fiels: Array<FileObj>): void;
    onUploadProgress?(file: FileObj): void;
    onFileUploaded?(file: FileObj, responseObject: ResponseObject): void
    onUploadComplete?(files: Array<FileObj>): void,
    onFilesRemoved?(files: Array<FileObj>): void,
    onChunkUploaded?(file: FileObj, responseObject: ResponseObject): void,
    onUploadFile?(file: FileObj): void,
    onBeforeUpload?(file: FileObj): void,
    onStateChanged?(status: STATUS): void,
    onQueueChanged?(): void,
    onError?(error: { error: ERRORS, message: string, file: FileObj }): void
}
interface ResponseObject {
    response?: string,
    responseHeaders?: object,
    status?: number,
    offset?: number,
    total?: number
}
declare enum STATUS {
    STOPPED = 1, STARTED = 2, QUEUED = 1, UPLOADING = 2, FAILED = 3, DONE = 4
}
interface FileObj {
    id?: string,
    name?: string,
    type?: string,
    ext?: string,
    isImage?: boolean,
    previewImage?: string,
    size?: number,
    origSize?: number,
    loaded?: number,
    percent?: number,
    status?: STATUS,
    lastModifiedDate?: Date,
    getNative(): File,
    destroy(): void
}
interface UploadProgress {
    size?: number,
    loaded?: number,
    uploaded?: number,
    failed?: number,
    queued?: number,
    percent?: number,
    bytesPerSec?: number
}
declare enum ERRORS {
    GENERIC_ERROR = -100,
    HTTP_ERROR = -200,
    IO_ERROR = -300,
    SECURITY_ERROR = -400,
    INIT_ERROR = -500,
    FILE_SIZE_ERROR = -600,
    FILE_EXTENSION_ERROR = -601,
    FILE_DUPLICATE_ERROR = -602,
    IMAGE_FORMAT_ERROR = -700,
    IMAGE_MEMORY_ERROR = -701,
    IMAGE_DIMENSIONS_ERROR = -702
}
interface Uploader {
    showMessage(message: string, type: string, time?: number): void;
    hideMessage(): void;
    start(): void,
    stop(): void,
    getState(): STATUS,
    isStarted(): boolean,
    isStopped(): boolean,
    getFiles(): Array<FileObj>;
    getTotal(): UploadProgress,
    disableBrowse(disable: boolean): void,
    getFile(id: string): FileObj,
    showFile(file: FileObj | Array<FileObj>): void;
    removeFile(file: FileObj): void;
    destroy(): void,
    showStatus(): void
}
declare global {
    interface JQuery {
        uploader(option: UploaderOption): JQuery;
    }
}