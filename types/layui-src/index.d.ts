// Type definitions for layui-src 2.5
// Project: https://github.com/sentsin/layui
// Definitions by: javabitar <https://github.com/javabitar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/// <reference types="jquery" />
declare namespace layui {
    type LayerCallbackSuccess = null | ((layero: JQuery, index: number) => void);
    type LayerCallbackYes = null | ((index: number, layero: JQuery) => boolean | void);
    type LayerCallbackCancel = null | ((index: number, layero: JQuery) => boolean | void);
    type LayerCallbackEnd = null | (() => void);
    type LayerCallbackFull = null | ((layero: JQuery) => void);
    type LayerCallbackMin = null | ((layero: JQuery) => void);
    type LayerCallbackRestore = null | ((layero: JQuery) => void);
    type LayerCallbackPrompt = null | ((value: string, index: number, elem: JQuery) => void);

    /**
     * Layer options
     */
    interface LayerOptions {
        // 基础参数  https://www.layui.com/doc/modules/layer.html#base
        type?: number;
        title?: string | boolean | string[];
        content?: string | HTMLElement | JQuery | string[];
        skin?: string;
        area?: string | string[];
        offset?: number | string | string[];
        icon?: number;
        btn?: string | string[];
        btnAlign?: string;
        closeBtn?: string | boolean | number;
        shade?: string | boolean | number | [number, string];
        shadeClose?: boolean;
        time?: number;
        id?: string;
        anim?: number;
        isOutAnim?: boolean;
        maxmin?: boolean;
        fixed?: boolean;
        resize?: boolean;
        resizing?: (layero: JQuery) => any;
        scrollbar?: boolean;
        maxWidth?: number;
        zIndex?: number;
        move?: string | boolean | HTMLElement;
        // moveType?: boolean; //固定1，不能修改
        moveOut?: boolean;
        moveEnd?: null | ((layero: JQuery) => any);
        tips?: number | [number, string];
        tipsMore?: boolean;
        success?: LayerCallbackSuccess;
        yes?: LayerCallbackYes;
        btn2?: LayerCallbackYes;
        btn3?: LayerCallbackYes;
        cancel?: LayerCallbackCancel;
        end?: LayerCallbackEnd;
        full?: LayerCallbackFull;
        min?: LayerCallbackMin;
        restore?: LayerCallbackRestore;
    }

    interface LayerConfigOptions extends LayerOptions {
        // 初始化全局配置
        path?: string;
        extend?: string[];
    }

    interface LayerPromptOptions extends LayerOptions {
        formType?: number;
        value?: string;
        maxlength?: number;
        area?: string[];
    }

    interface LayerTabOptions extends LayerOptions {
        tab: Array<{ title: string; content: string }>;
    }

    interface LayerPhotosOptions extends LayerOptions {
        photos: LayerPhotosData | string;
        tab?: (pic: LayerPhotosDataItem, layero: JQuery) => void;
    }

    interface LayerPhotosData {
        title: string;
        id: number;
        start?: number;
        data: LayerPhotosDataItem[];
    }

    interface LayerPhotosDataItem {
        alt: string;
        pid?: number;
        src: string;
        thumb: string;
    }

    /**
     * Layer object
     * https://www.layui.com/doc/modules/layer.html#layer.tips
     */
    interface Layer {
        /**
         * 初始化全局配置
         */
        config(options: LayerConfigOptions): void;

        /**
         * 初始化就绪
         */

        // ready(path: string, callback: () => void): void; //兼容旧版？
        /**
         * 初始化就绪
         */
        ready(callback: () => void): void;

        /**
         * 原始核心方法
         */
        open(options?: LayerOptions): number;

        /**
         * 普通信息框
         */
        alert(content: string, options?: LayerOptions, yes?: LayerCallbackYes): number;

        /**
         * 普通信息框
         *  源码中会第三个参数代替第二个。单独定义一个方法。
         */
        alert(content: string, yes?: LayerCallbackYes): number;

        confirm(content: string, options?: LayerOptions, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

        confirm(content: string, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

        msg(content: string, options?: LayerOptions, end?: LayerCallbackEnd): number;

        msg(content: string, end?: LayerCallbackEnd): number;

        load(icon?: number, options?: LayerOptions): number;

        load(options: LayerOptions): number;

        // 第二参数可以是'#id' 获取document.bod 或者JQuery
        tips(content: string, follow: string | HTMLElement | JQuery, options?: LayerOptions): number;

        // tips(content: string, follow: string | this, options?: LayerOptions): number;

        close(index: number): void;

        closeAll(type?: 'dialog' | 'page' | 'iframe' | 'loading' | 'tips'): void;

        style(index: number, options: { [key: string]: string | number }, limit?: boolean): void;

        title(title: string, index: number): void;

        getChildFrame(selector: string | JQuery, index: number): JQuery;

        getFrameIndex(windowName: string): number;

        iframeAuto(index: number): void;

        iframeSrc(index: number, url: string): void;

        setTop(layero: JQuery): void;

        full(): void;

        min(): void;

        restore(): void;

        prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): number;

        prompt(yes: LayerCallbackPrompt): number;

        tab(options: LayerTabOptions): number;

        photos(options: LayerPhotosOptions): number;
    }

    interface TabOption {
        // 三个参数layui中都是选填，但开发时应该都填，此处都设置必填
        title: string;
        content: string;
        id: string;
    }

    interface TabElement {
        headerElem: string;
        bodyElem: string;
    }

    interface Element {
        // set(options: object): object;  很少用
        on(filter: string, callback: (this: any, data: any) => any): void;

        tabAdd(filter: string, options: TabOption): void;

        tabDelete(filter: string, layid: string): void;

        tabChange(filter: string, layid: string): void;

        tab(option: TabElement): void;

        progress(filter: string, percent: string): void;

        init(type?: 'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse', filter?: string): void;

        // Element.prototype.render = Element.prototype.init;
        // 当type不能识别时，layui会遍历渲染"tab""nav"|"breadcrumb"|"progress"|"collapse" 全部；
        render(type?: 'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse', filter?: string): void;
    }

    // 参数不用加'?'
    interface LayFormData {
        elem: any; // 被执行事件的元素DOM对象，一般为button对象  ,可能是input select button等不能用HTMLElement
        othis: JQuery; // 得到美化后的DOM对象=$(selector)
        value: string;
        form: HTMLFormElement; // 被执行提交的form对象，一般在存在form标签时才会返回
        field: any; // 当前容器的全部表单字段，名值对形式：{name: value}
        /*
        elem?: HTMLElement;
        othis?: any;
        value?: string;
        form?: any;
        field?: any;
        */
    }

    interface Form {
        /**
         *
         * @param event    select|submit
         * @param callback
         */
        on(event: string, callback: (data: LayFormData) => any): void;

        render(type?: 'select' | 'checkbox' | 'radio' | null, filter?: string): any;

        val(filter: string, obj?: object): any;

        verify(config: object): any;

        getValue(filter: string, itemForm?: JQuery): any;
    }

    interface PageOptions {
        // id选择器 不加#
        elem?: string | HTMLElement;
        count?: number;
        limit?: number;
        limits?: number[];
        curr?: number;
        groups?: number;
        prev?: string;
        next?: string;
        first?: string;
        last?: string;
        layout?: Array<'count' | 'prev' | 'page' | 'next' | 'limit' | 'skip'>;
        theme?: string;
        hash?: string | boolean;
        jump?: (obj: PageOptions, first: boolean) => void;
    }

    interface Laypage {
        render(options: PageOptions): any;
    }

    interface DateParam {
        year?: number;
        month?: number;
        date?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
    }

    interface DateOption {
        elem?: string | HTMLElement;
        type?: 'year' | 'month' | 'date' | 'time' | 'datetime';
        range?: string | boolean;
        format?: string;
        value?: string | Date;
        isInitValue?: boolean;
        min?: string | number;
        max?: string | number;
        trigger?: string;
        show?: boolean;
        position?: 'abolute' | 'fixed' | 'static';
        zIndex?: number;
        showBottom?: boolean;
        btns?: Array<'clear' | 'now' | 'confirm'>;
        lang?: 'cn' | 'en';
        theme?: string | 'default' | 'molv' | 'grid';
        calendar?: boolean;
        mark?: object;
        ready?: (date: DateParam) => void;
        change?: (value: string, date: DateParam, endDate: DateParam) => void;
        done?: (value: string, date: DateParam, endDate: DateParam) => void;
    }

    /**
     * https://www.layui.com/doc/modules/laydate.html
     */
    interface Laydate {
        render(options: DateOption): { config: DateOption; hint: () => void };

        set(options: DateOption): void;

        path: string;

        // 获取指定年月的最后一天是 1-31
        getEndDate(month?: number, year?: number): number;
    }

    /*
        interface Layui {
            layer?: Layer;
            element?: Element;
            form?: Form;
            laydate?: Laydate;
            laypage?: Laypage;
            carousel?: Carousel;
            use(mods: string | string[], callback: (...args: any[]) => any): any;
        }
    */
    interface CarouselOption {
        elem?: string | HTMLElement;
        width?: string;
        height?: string;
        full?: boolean;
        anim?: 'default' | 'updown' | 'fade';
        autoplay?: boolean;
        interval?: number;
        index?: number;
        arrow?: 'hover' | 'always' | 'none';
        indicator?: 'insider' | 'outsider' | 'none';
        trigger?: string;
    }

    interface CarouselItem {
        index?: number;
        prevIndex?: number;
        item?: any;
    }

    interface Carousel {
        render(options: CarouselOption): object;

        on(event: string, callback: (obj: CarouselItem) => any): void;

        reload(options: CarouselOption): void;
    }

    interface TableColumnOption {
        checkbox?: boolean;
        field?: string;
        title?: string;
        width?: string | number;
        minWidth?: number;
        type?: 'normal' | 'checkbox' | 'radio' | 'space' | 'numbers';
        LAY_CHECKED?: boolean;
        fixed?: 'left' | 'right';
        hide?: boolean;
        totalRow?: boolean | { score: number | string; experience: string };
        totalRowText?: string;
        sort?: boolean;
        unresize?: boolean;
        edit?: 'text' | string;
        event?: string;
        style?: string;
        align?: 'left' | 'center' | 'right';
        colspan?: number;
        rowspan?: number;
        templet?: string | ((d: any) => string);
        toolbar?: string; // #toolbar 或者html且必须需有标签,例如'<b>{{d.city}}</b>'  因为源码中使用了 $(toolbar).html
    }

    interface TableRequestRename {
        pageName: string;
        limitName: string;
    }

    interface TableResponseRename {
        statusName: string;
        statusCode: number;
        msgName: string;
        countName: string;
        dataName: string;
    }

    interface TableResponse {
        code: number;
        msg: string;
        count: number;
        data: any;

        [propName: string]: any;
    }

    /* 服务端返回数据不固定
        interface TableOriginResponse {
            status: number;
            message: string;
            total: number;
            data: any;
            [propName: string]: any;
        }
    */
    interface TableRequest {
        page: number;
        limit: number;

        [propName: string]: any;
    }

    interface TableRendered {
        config: TableOption;
        reload: (options: TableOption) => void;
        setColsWidth: () => void;
        resize: () => void;
    }

    interface TableOption {
        // 基础参数
        elem?: string | HTMLElement;
        cols?: TableColumnOption[][];
        url?: string | null;
        toolbar?: string | HTMLElement | boolean;
        defaultToolbar?: Array<string | { title: string; layEvent: string; icon: string }>;
        height?: number | string; // 'full-100'
        width?: number | string;
        cellMinWidth?: number;
        done?: (res: object, curr?: number, count?: number) => void;
        data?: object[];
        totalRow?: boolean;
        page?: boolean | PageOptions; // PageOptions时排除jump和elem
        limit?: number;
        limits?: number[];
        loading?: boolean;
        title?: string;
        text?: { none: string };
        autoSort?: boolean;
        initSort?: { field: string; type?: 'null' | 'desc' | 'asc' };
        id?: string;
        skin?: 'line' | 'row' | 'nob';
        even?: boolean;
        size?: 'sm' | 'lg';
        // 异步数据接口
        method?: string;
        where?: object | null;
        contentType?: string;
        headers?: object;
        parseData?: (res: object) => TableResponse;

        request?: TableRequestRename;
        response?: TableResponseRename;
    }

    // 以下TableOn 开头interface，在调用地方使用
    interface TableOnCheckbox {
        checked: true;
        data: object;
        del: () => void;
        tr: JQuery;
        type: string;
        update: (fields: object) => void;
    }

    interface TableOnToolbar {
        config: TableOption;
        event: string;
    }

    interface TableOnTool {
        data: object;
        del: () => void;
        event: string;
        tr: JQuery;
        update: (fields: object) => void;
    }

    interface TableOnRow {
        data: object;
        del: () => void;
        tr: JQuery;
        update: (fields: object) => void;
    }

    interface TableOnEdit {
        data: object;
        del: () => void;
        field: string;
        tr: JQuery;
        update: (fields: object) => void;
        value: string;
    }

    interface TableOnSort {
        field: string;
        type: string;
    }

    interface Table {
        render(option: TableOption): TableRendered;

        init(filter: string, option: TableOption): object;

        reload(option: TableOption): void;

        reload(id: string, option: TableOption): void;

        // obj内容变化的，没法声明出指定，但这里提供了替代方案，
        /**
         * import TableOnCheckbox = layui.TableOnCheckbox;
         * table.on('checkbox(test)', function(obj){
         *     var rows:TableOnCheckbox=obj;
         *     然后，你就可以使用明确的属性了，两种方式编译后js中均为 var rows=obj; 输出不包含类型
         * });
         * 类型对应： （就是 TableOn+事件类型，无需记忆）
         * checkbox -> TableOnCheckbox
         * toolbar  -> TableOnToolbar
         * tool     -> TableOnTool
         * row      -> TableOnRow
         * edit-    -> TableOnEdit
         * sort     ->  TableOnSort
         * @param event
         * @param callback
         */

        on(event: string, callback: (this: any, obj: any) => any): void;

        set(option: TableOption): void;

        checkStatus(id: string): { data: []; isAll: boolean };

        resize(id: string): void;

        exportFile(id: string, data: any, type?: string): void; // type默认csv
    }
    interface UploadOption {
        elem?: string | HTMLElement;
        url?: string;
        data?: object;
        header?: object;
        accept?: 'images' | 'file' | 'video' | 'audio';
        acceptMime?: string;
        exts?: string;
        auto?: boolean;
        bindAction?: string | HTMLElement;
        field?: string;
        size?: number;
        multiple?: boolean;
        number?: number;
        drag?: boolean;
        choose?(obj: object): void;
        before?(obj: object): void;
        done?(res: object, index: number, upload: () => void): void;
        error?(index: number, upload: () => void): void;
        allDone?(obj: object): void;
    }

    interface Upload {
        render(option: UploadOption): Upload;
    }

    interface RateOption {
        elem?: string | HTMLElement;
        length?: number;
        value?: number;
        theme?: string;
        half?: boolean;
        text?: boolean;
        readonly?: boolean;
        setText?(value: number): void;
        choose?(value: number): void;
    }

    interface Rate {
        render(option: RateOption): Rate;
    }

    interface FlowOption {
        elem?: string | HTMLElement;
        scrollElem?: string | HTMLElement;
        isAuto?: boolean;
        end?: string;
        isLazyimg?: boolean;
        mb?: number;
        done?: (page: number, next: (html: string, isMore: boolean) => void) => void;
    }

    interface Flow {
        load(option: FlowOption): void;
        lazyimg(option?: FlowOption): void;
    }

    interface UtilBarOption {
        bar1?: boolean | string;
        bar2?: boolean | string;
        bgcolor?: string;
        showHeight?: number;
        css?: { [key: string]: string | number };
        click?: (type: string) => void;
    }

    interface Util {
        fixbar(option: UtilBarOption): void;

        countdown(
            endtime: number | Date,
            serverTime: number | Date,
            callback: (date: any, serverTime: number | Date, timer: any) => void,
        ): void;

        timeAgo(time: number | Date, onlyDate: boolean): any;

        toDateString(time: number | Date, format: string): any;

        digit(num: number, length: number): any;

        escape(str: string): string;

        event(attr: string, obj: { [index: string]: () => void }): any;
    }

    interface CodeOption {
        elem?: string;
        title?: string;
        height?: string;
        encode?: boolean;
        skin?: string;
        about?: boolean;
    }

    interface TreeOption {
        elem?: string;
        skin?: string;
        href?: string;
        target?: string;
        nodes?: TreeNode | TreeNode[];
        click?: (node: TreeNode) => void;
    }

    interface TreeNode {
        name?: string;
        spread?: boolean;
        href?: string;
        children?: TreeNode | TreeNode[];

        [propName: string]: any;
    }

    interface ColorPickerOption {
        elem?: string | HTMLElement;
        color?: string;
        format?: 'hex' | 'rgb' | 'rgba';
        aplha?: boolean;
        predefine?: boolean;
        colors?: string[];
        size?: 'lg' | 'sm' | 'xs';
        change?: (color: any) => void;
        done?: (color: any) => void;
    }

    interface ColorPicker {
        render(option: ColorPickerOption): ColorPicker;
    }

    interface SliderOption {
        elem?: string | HTMLElement;
        type?: 'default' | 'vertical';
        mix?: number;
        max?: number;
        range?: boolean;
        value?: number | number[];
        step?: number;
        showstep?: boolean;
        tips?: boolean;
        input?: boolean;
        height?: number;
        disabled?: boolean;
        theme?: string;
        setTips?: (value: number | number[]) => string;
        change?: (value: number | number[]) => string;
    }

    interface Slider {
        render(option: SliderOption): Slider;
        setValue(value1: number, value2?: number): void;
    }

    interface Layedit {
        build(id: string, options?: EditOption): any;

        set(options: EditOption): void;

        getContent(index: number): string;

        getText(index: number): string;

        sync(index: number): void;

        getSelection(index: number): string;
    }

    interface EditOption {
        tool?: string[];
        hideTool?: string[];
        height?: number | string;
        uploadImage?: { url: string; type: string };
    }

    interface Laytpl {
        (tpl: string): TplObject;
    }

    interface TplObject {
        render(data: object, callback: (str: string) => void): any;
    }

    let layer: Layer;
    let element: Element;
    let form: Form;
    let laydate: Laydate;
    let layedit: Layedit;
    let laypage: Laypage;
    let laytpl: Laytpl;
    let carousel: Carousel;
    let table: Table;
    let upload: Upload;
    let rate: Rate;
    let flow: Flow;
    let util: Util;
    let colorpicker: ColorPicker;
    let slider: Slider;
    let $: JQueryStatic;
    function code(option?: CodeOption): void;
    function tree(option: TreeOption): void;
    function use(mods: string | string[], callback: (...args: any) => any): any;
}
