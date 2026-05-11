/// <reference types="jquery" />

type CallBack = () => void;
/**
 * bootstrap
 */
interface ModalOptions {
    backdrop?: boolean | string | undefined;
    keyboard?: boolean | undefined;
    show?: boolean | undefined;
    remote?: string | undefined;
}

interface ModalOptionsBackdropString {
    backdrop?: string | undefined; // for "static"
    keyboard?: boolean | undefined;
    show?: boolean | undefined;
    remote?: string | undefined;
}

interface ScrollSpyOptions {
    offset?: number | undefined;
    target?: string | undefined;
}

interface TooltipOptions {
    animation?: boolean | undefined;
    html?: boolean | undefined;
    placement?: string | CallBack | undefined;
    selector?: string | undefined;
    title?: string | CallBack | undefined;
    trigger?: string | undefined;
    template?: string | undefined;
    delay?: number | object | undefined;
    container?: string | boolean | undefined;
    viewport?: string | CallBack | object | undefined;
}

interface PopoverOptions {
    animation?: boolean | undefined;
    html?: boolean | undefined;
    placement?: string | CallBack | undefined;
    selector?: string | undefined;
    trigger?: string | undefined;
    title?: string | CallBack | undefined;
    template?: string | undefined;
    content?: any;
    delay?: number | object | undefined;
    container?: string | boolean | undefined;
    viewport?: string | CallBack | object | undefined;
}

interface CollapseOptions {
    parent?: any;
    toggle?: boolean | undefined;
}

interface CarouselOptions {
    interval?: number | undefined;
    pause?: string | undefined;
    wrap?: boolean | undefined;
    keyboard?: boolean | undefined;
}

interface TypeaheadOptions {
    source?: any;
    items?: number | undefined;
    minLength?: number | undefined;
    matcher?(item: any): boolean;
    sorter?(items: any[]): any[];
    updater?(item: any): any;
    highlighter?(item: any): string;
}

interface AffixOptions {
    offset?: number | CallBack | object | undefined;
    target?: any;
}

interface TransitionEventNames {
    end: string;
}

interface JQuery {
    modal(options?: ModalOptions | ModalOptionsBackdropString): JQuery;
    modal(command: string): JQuery;

    dropdown(command?: string): JQuery;

    scrollspy(options?: ScrollSpyOptions | string): JQuery;

    tab(command?: string): JQuery;

    tooltip(options?: TooltipOptions): JQuery;
    tooltip(command: string, params?: string): JQuery;

    popover(options?: PopoverOptions | string): JQuery;

    alert(command?: string): JQuery;

    button(command?: string): JQuery;

    collapse(options?: CollapseOptions | string): JQuery;

    carousel(options?: CarouselOptions | string): JQuery;

    typeahead(options?: TypeaheadOptions): JQuery;

    affix(options?: AffixOptions): JQuery;

    emulateTransitionEnd(duration: number): JQuery;
}

interface JQuerySupport {
    transition: boolean | TransitionEventNames;
}

/**
 * datetime picker
 */

interface DatetimepickerChangeEventObject extends DatetimepickerEventObject {
    oldDate: any;
}

interface DatetimepickerEventObject extends JQueryEventObject {
    date: any;
}

interface DatetimepickerIcons {
    time?: string | undefined;
    date?: string | undefined;
    up?: string | undefined;
    down?: string | undefined;
}

interface DatetimepickerOptions {
    weekStart?: number | undefined;
    todayBtn?: number | boolean | undefined;
    autoclose?: number | boolean | undefined;
    todayHighlight?: number | boolean | undefined;
    startView?: number | undefined;
    forceParse?: number | boolean | undefined;
    showMeridian?: boolean | number | undefined;
    minView?: number | undefined;
    maxView?: number | undefined;
    pickDate?: boolean | undefined;
    pickTime?: boolean | undefined;
    useMinutes?: boolean | undefined;
    useSeconds?: boolean | undefined;
    useCurrent?: boolean | undefined;
    minuteStepping?: number | undefined;
    minDate?: Date | string | any | undefined;
    maxDate?: Date | string | any | undefined;
    showToday?: boolean | undefined;
    collapse?: boolean | undefined;
    language?: string | undefined;
    defaultDate?: Date | string | any | undefined;
    disabledDates?: Array<Date | string | object> | undefined;
    enabledDates?: Array<Date | string | object> | undefined;
    icons?: DatetimepickerIcons | undefined;
    useStrict?: boolean | undefined;
    direction?: string | undefined;
    sideBySide?: boolean | undefined;
    daysOfWeekDisabled?: number[] | undefined;
    calendarWeeks?: boolean | undefined;
    format?: string | boolean | undefined;
    locale?: string | undefined;
    showTodayButton?: boolean | undefined;
    viewMode?: string | undefined;
    inline?: boolean | undefined;
    toolbarPlacement?: string | undefined;
    showClear?: boolean | undefined;
    ignoreReadonly?: boolean | undefined;
}

interface Datetimepicker {
    date(date: Date | string | object): void;
    date(): object;
    minDate(date: Date | string | object): void;
    minDate(): boolean | object;
    maxDate(date: Date | string | object): void;
    maxDate(): boolean | object;
    show(): void;
    disable(): void;
    enable(): void;
    destroy(): void;
    toggle(): void;
}

interface JQuery {
    datetimepicker(options?: DatetimepickerOptions): JQuery;

    // off(events: "dp.change", selector?: string, handler?: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
    // off(events: "dp.change", handler: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;

    // on(events: "dp.change", selector: string, data: any, handler?: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
    // on(events: "dp.change", selector: string, handler: (eventobject: DatetimepickerChangeEventObject) => any): JQuery;
    // on(events: 'dp.change', handler: (eventObject: DatetimepickerChangeEventObject) => any): JQuery;

    // off(events: "dp.show", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // off(events: "dp.show", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

    // on(events: "dp.show", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // on(events: "dp.show", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // on(events: 'dp.show', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

    // off(events: "dp.hide", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // off(events: "dp.hide", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

    // on(events: "dp.hide", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // on(events: "dp.hide", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // on(events: 'dp.hide', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

    // off(events: "dp.error", selector?: string, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // off(events: "dp.error", handler: (eventobject: DatetimepickerEventObject) => any): JQuery;

    // on(events: "dp.error", selector: string, data: any, handler?: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // on(events: "dp.error", selector: string, handler: (eventobject: DatetimepickerEventObject) => any): JQuery;
    // on(events: 'dp.error', handler: (eventObject: DatetimepickerEventObject) => any): JQuery;

    data(key: "DateTimePicker"): Datetimepicker;
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
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
    "important",
    "special",
}
interface Action {
    name?: string | undefined;
    icon?: string | undefined;
    text?: string | undefined;
    html?: string | undefined;
    action?: ActionFunc | undefined;
}

type ActionFunc = () => boolean;

type OnActionFunc = (name: string, action: string, messager: Messager) => any;

interface MessagerOption {
    type?: MessagerTypeEnum | string | undefined;
    placement?: string | undefined;
    time?: number | undefined;
    message?: string | undefined;
    parent?: string | undefined;
    icon?: string | undefined;
    close?: boolean | undefined;
    fade?: boolean | undefined;
    scale?: boolean | undefined;
    actions?: Action[] | undefined;
    onAction?: OnActionFunc | undefined;
    cssClass?: string | undefined;
    contentClass?: string | undefined;
    show?: boolean | undefined;
}
interface Messager {
    show(cb?: CallBack): any;
    show(message: string, cb?: CallBack): any;

    hide(cb?: CallBack): any;
}
interface MessagerStatic {
    new(option?: MessagerOption): Messager;
    new(message: string, option?: MessagerOption): Messager;
}

interface ZuiStatic {
    // $.zui.messager
    messager: Messager;
    Messager: MessagerStatic;

    store: StoreStatic;
}

/**
 * modal trigger
 */
interface ModalTriggerOption {
    name?: string | undefined;
    className?: string | undefined;
    type?: string | undefined;
    url?: string | undefined;
    remote?: string | undefined;
    iframe?: string | undefined;
    size?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    showHeader?: boolean | undefined;
    title?: string | undefined;
    icon?: string | undefined;
    fade?: boolean | undefined;
    postion?: string | undefined;
    backdrop?: boolean | undefined;
    keyboard?: boolean | undefined;
    moveable?: boolean | undefined;
    rememberPos?: boolean | undefined;
    waittime?: number | undefined;
    loadingIcon?: string | undefined;

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
    new(option?: ModalTriggerOption): ModalTrigger;
}

interface JQuery {
    modalTrigger(option?: ModalTriggerOption): JQuery; // $('#modal').modalTrigger()
    data(value: string): JQuery;
}

interface ZuiStatic {
    ModalTrigger: ModalTriggerStatic;
    modalTrigger: ModalTrigger;
}

interface JQueryStatic {
    zui: ZuiStatic;
}

/**
 * color
 */

interface Color {
    rgb(rgbaColor?: string): object;
    hue(hue: string): string;
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
    new(r: number, g: number, b: number, a?: number): Color;
    new(hexStrOrrgbColorOrRgbaColorOrName?: string): Color;
    isColor(str: string): boolean;
    names: string[];
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
    event?: object | undefined;
    element?: JQuery | object | undefined;
    target?: JQuery | object | undefined;
    pos?: Postion | undefined;
    offset?: object | undefined;
    smallOffset?: object | undefined;
    startOffset?: object | undefined;
}
interface DraggableOption {
    container?: string | undefined;
    move?: boolean | undefined;
    selector?: string | undefined;
    handle?: string | undefined;
    mouseButton?: string | undefined;
    stopPropagation?: boolean | undefined;
    before?(e?: DraggableEvent): boolean;
    drag?(e: DraggableEvent): void;
    finish?(e: DraggableEvent): void;
}
interface JQuery {
    draggable(option: DraggableOption | string): JQuery;
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
    event?: object | undefined;
    element?: JQuery | undefined;
    target?: JQuery | undefined;
    pos?: Postion | undefined;
    offset?: object | undefined;
    smallOffset?: object | undefined;
    startOffset?: object | undefined;
}

interface DroppableOption {
    container?: string | undefined;
    selector?: string | undefined;
    handle?: string | undefined;
    target: JQuery | string;

    flex?: boolean | undefined;
    deviation?: number | undefined;
    sensorOffsetX?: number | undefined;
    sensorOffsetY?: number | undefined;

    before?(e?: DroppableEvent): boolean;
    start?(e?: DroppableEvent): void;
    drag?(e: DroppableEvent): void;
    beforeDrop?(e: DroppableEvent): boolean;
    drop?(e: DroppableEvent): void;
    finish?(e: DroppableEvent): void;
    always?(e: DroppableEvent): void;
}
interface JQuery {
    droppable(option: DroppableOption | string): JQuery;
}

/**
 * sortable
 */

interface SortEvent extends Event {
    list: Array<JQuery | object>;
    element: JQuery | object;
}

interface SortableOption {
    selector?: string | undefined;
    trigger?: string | undefined;
    reverse?: boolean | undefined;
    dragCssClass?: string | undefined;
    sortingClass?: string | undefined;
    mouseButton?: string | undefined;
    start?(e?: SortEvent): void;
    order?(e?: SortEvent): void;
    finish?(e?: SortEvent): void;
}
interface JQuery {
    sortable(option?: SortableOption | string): JQuery;
}

/**
 * selectable
 */

interface SelectableEvent extends Event {
    selections: Map<number, boolean>;
    selected: number[];
}
interface SelectableOption {
    selector?: string | undefined;
    trigger?: string | undefined;
    rangeStyle?: string | object | undefined;
    clickBehavior?: string | undefined;
    mouseButton?: string | undefined;
    ignoreVal?: number | undefined;

    start?(e?: SelectableEvent): boolean;
    finish?(e?: SelectableEvent): void;
    select?(e?: SelectableEvent): void;
    unselect?(e?: SelectableEvent): void;
}

interface Selectable {
    toggle(elementOrId?: string | object | JQuery): any;
    select(elementOrId?: string | object | JQuery): any;
    unselect(elementOrId?: string | object | JQuery): any;
}
interface JQuery {
    selectable(option?: SelectableOption): JQuery;
}

/**
 * image cutter
 */

interface ImageCutterOption {
    coverColor?: string | undefined;
    coverOpacity?: number | undefined;
    defaultWidth?: number | undefined;
    defaultHeight?: number | undefined;
    fixedRatio?: boolean | undefined;
    minWidth?: number | undefined;
    minHeight?: number | undefined;
    post?: string | undefined;
    get?: string | undefined;
}
interface ImageData {
    originWidth: number;
    originHeight: number;
    scaled: boolean;
    scaleHeight: number;
    scaleWidth: number;
    // width: number;
    // height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
}
interface ImageCutter {
    resetImage(img: string): any;
    getData(): ImageData;
}

interface JQuery {
    imgCutter(option: ImageCutterOption): JQuery;
    data(cmd: string): ImageCutter;
}

/**
 * treeview
 */

interface TreeNode {
    title?: string | undefined;
    url?: string | undefined;
    html?: string | undefined;
    children?: TreeNode[] | undefined;
    open?: boolean | undefined;
    id?: string | undefined;
}
interface TreeMenuOption {
    animate?: boolean | undefined;
    initialState?: string | undefined;
    data?: TreeNode[] | undefined;
    itemCreator?(li: JQuery | object, item: TreeNode): any;
    itemWrapper?: boolean | undefined;
}

interface TreeMenu {
    expand(params?: JQuery, disableAnimate?: boolean): void;

    collapse(params?: JQuery, disableAnimate?: boolean): void;

    toggle(params?: JQuery, disableAnimate?: boolean): void;

    show(params?: JQuery, disableAnimate?: boolean): void;

    add(element: JQuery, items: TreeNode[], expand?: boolean, disabledAnimate?: boolean): void;
    toData($ul?: JQuery, filter?: string): object;

    reload(data: TreeNode[]): void;
    remove(): void;
    empty(): void;
}

interface JQuery {
    tree(option?: TreeMenuOption): JQuery;
}

interface Column {
    width?: number | undefined;
    text?: string | undefined;
    type?: string | undefined;
    flex?: boolean | undefined;
    colClass?: string | undefined;
    sort?: string | undefined;
    ignore?: boolean | undefined;
}
interface Row {
    id?: string | undefined;
    checked?: boolean | undefined;
    cssClass?: string | undefined;
    css?: string | undefined;
    data?: [number, string, string] | undefined;
}
interface DataTableData {
    rows: Row[];
    cols: Column[];
}
interface AfterLoadEvent extends Event {
    data: DataTableData;
}
interface SortEvent extends Event {
    sorter: {
        index: number;
        sortUp: boolean;
    };
}
interface SizeChangeEvent extends Event {
    changes: {
        change: string;
        oldWidth: number;
        newWidth: number;
        colIndex: number;
    };
}
interface ChecksChangeEvent extends Event {
    checks: {
        checkedAll: boolean;
        checks: number[];
    };
}
interface DataTableOption {
    checkable?: boolean | undefined;
    checkByClickRow?: boolean | undefined;
    checkedClass?: string | undefined;
    storage?: boolean | undefined;
    sortable?: boolean | undefined;
    fixedHeader?: boolean | undefined;
    fixedHeaderOffset?: number | undefined;
    fixedLeftWidth?: string | undefined;
    fixedRightWidth?: string | undefined;
    flexHeadDrag?: boolean | undefined;
    scrollPos?: string | undefined;
    rowHover?: boolean | undefined;
    colHover?: boolean | undefined;
    fixCellHeight?: boolean | undefined;
    minColWidth?: number | undefined;
    minFixedLeftWidth?: number | undefined;
    minFixedRightWidth?: number | undefined;
    minFlexAreaWidth?: number | undefined;
    selectable?: boolean | object | undefined;

    afterLoad?(event: AfterLoadEvent): void;
    ready?(): void;
    sort?(event: SortEvent): void;
    sizeChanged?(event: SizeChangeEvent): void;
    checksChanged?(event: ChecksChangeEvent): void;
}

interface DataTable {
    checks: { checkedAll: boolean; checks: number[] };
}

interface JQuery {
    datatable(option?: DataTableOption): JQuery;
    datatable(command: string, optionOrData: DataTableOption | DataTableData): JQuery;
}

/**
 * uploader
 */

interface UploaderOption {
    drop_element?: string | undefined;
    browse_button?: string | undefined;
    url: string;
    qiniu?: object | undefined;
    filters?: {
        mime_type: Array<{
            title?: string | undefined;
            extensions?: string | undefined;
        }>;
        max_file_size?: string | undefined;
        prevent_duplicates?: string | undefined;
    } | undefined;
    fileList?: string | undefined;
    fileTemplate?: string | undefined;
    fileFormater?($file: JQuery, file: FileObj, status: STATUS): void;
    fileIconCreator?(fileType: string, file: FileObj, uploader: Uploader): void;
    staticFiles?:
        | Array<{
            id?: string | undefined;
            name?: string | undefined;
            type?: string | undefined;
            size?: string | undefined;
            origSize?: string | undefined;
            lastModifiedDate?: Date | undefined;
        }>
        | undefined;
    rename?: boolean | undefined;
    renameExtension?: boolean | undefined;
    renameByClick?: boolean | undefined;
    autoUpload?: boolean | undefined;
    browseByClickList?: boolean | undefined;
    dropPlaceholder?: boolean | undefined;
    previewImageIcon?: boolean | undefined;
    sendFileName?: boolean | undefined;
    sendFileId?: boolean | undefined;
    responseHandler?: boolean | CallBack | undefined;
    limitFilesCount?: boolean | number | undefined;
    deleteConfirm?: boolean | string | undefined;
    removeUploaded?: boolean | undefined;
    statusCreator?(total: UploadProgress, state: STATUS, uploader: Uploader): void;
    previewImageSize?: { width: number; height: number } | undefined;
    uploadedMessage?: boolean | undefined;
    deleteActionOnDone?: boolean | undefined;
    renameActionOnDone?: boolean | undefined;
    headers?: object | undefined;
    multipart?: boolean | undefined;
    multipart_params?: object | CallBack | undefined;
    max_retries?: number | undefined;
    chunk_size?: string | undefined;
    resize?: {
        width?: number | undefined;
        height?: number | undefined;
        crop?: boolean | undefined;
        quuality?: number | undefined;
        preserve_headers?: boolean | undefined;
    } | undefined;
    multi_selection?: boolean | undefined;
    unique_names?: boolean | undefined;
    runtimes?: string | undefined;
    file_data_name?: string | undefined;
    flash_swf_url?: string | undefined;
    silverlight_xap_url?: string | undefined;
    lang?: string | undefined;

    onInit?(): void;
    onFilesAdded?(fiels: FileObj[]): void;
    onUploadProgress?(file: FileObj): void;
    onFileUploaded?(file: FileObj, responseObject: ResponseObject): void;
    onUploadComplete?(files: FileObj[]): void;
    onFilesRemoved?(files: FileObj[]): void;
    onChunkUploaded?(file: FileObj, responseObject: ResponseObject): void;
    onUploadFile?(file: FileObj): void;
    onBeforeUpload?(file: FileObj): void;
    onStateChanged?(status: STATUS): void;
    onQueueChanged?(): void;
    onError?(error: { error: ERRORS; message: string; file: FileObj }): void;
}
interface ResponseObject {
    response?: string | undefined;
    responseHeaders?: object | undefined;
    status?: number | undefined;
    offset?: number | undefined;
    total?: number | undefined;
}
declare enum STATUS {
    STOPPED = 1,
    STARTED = 2,
    QUEUED = 1,
    UPLOADING = 2,
    FAILED = 3,
    DONE = 4,
}
interface FileObj {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    ext?: string | undefined;
    isImage?: boolean | undefined;
    previewImage?: string | undefined;
    size?: number | undefined;
    origSize?: number | undefined;
    loaded?: number | undefined;
    percent?: number | undefined;
    status?: STATUS | undefined;
    lastModifiedDate?: Date | undefined;
    getNative(): File;
    destroy(): void;
}
interface UploadProgress {
    size?: number | undefined;
    loaded?: number | undefined;
    uploaded?: number | undefined;
    failed?: number | undefined;
    queued?: number | undefined;
    percent?: number | undefined;
    bytesPerSec?: number | undefined;
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
    IMAGE_DIMENSIONS_ERROR = -702,
}
interface Uploader {
    showMessage(message: string, type: string, time?: number): void;
    hideMessage(): void;
    start(): void;
    stop(): void;
    getState(): STATUS;
    isStarted(): boolean;
    isStopped(): boolean;
    getFiles(): FileObj[];
    getTotal(): UploadProgress;
    disableBrowse(disable: boolean): void;
    getFile(id: string): FileObj;
    showFile(file: FileObj | FileObj[]): void;
    removeFile(file: FileObj): void;
    destroy(): void;
    showStatus(): void;
}

interface JQuery {
    uploader(option: UploaderOption): JQuery;
}
