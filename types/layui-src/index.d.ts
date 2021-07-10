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
        type?: number | undefined;
        title?: string | boolean | string[] | undefined;
        content?: string | HTMLElement | JQuery | string[] | undefined;
        skin?: string | undefined;
        area?: string | string[] | undefined;
        offset?: number | string | string[] | undefined;
        icon?: number | undefined;
        btn?: string | string[] | undefined;
        btnAlign?: string | undefined;
        closeBtn?: string | boolean | number | undefined;
        shade?: string | boolean | number | [number, string] | undefined;
        shadeClose?: boolean | undefined;
        time?: number | undefined;
        id?: string | undefined;
        anim?: number | undefined;
        isOutAnim?: boolean | undefined;
        maxmin?: boolean | undefined;
        fixed?: boolean | undefined;
        resize?: boolean | undefined;
        resizing?: ((layero: JQuery) => any) | undefined;
        scrollbar?: boolean | undefined;
        maxWidth?: number | undefined;
        zIndex?: number | undefined;
        move?: string | boolean | HTMLElement | undefined;
        // moveType?: boolean; //固定1，不能修改
        moveOut?: boolean | undefined;
        moveEnd?: null | ((layero: JQuery) => any) | undefined;
        tips?: number | [number, string] | undefined;
        tipsMore?: boolean | undefined;
        success?: LayerCallbackSuccess | undefined;
        yes?: LayerCallbackYes | undefined;
        btn2?: LayerCallbackYes | undefined;
        btn3?: LayerCallbackYes | undefined;
        cancel?: LayerCallbackCancel | undefined;
        end?: LayerCallbackEnd | undefined;
        full?: LayerCallbackFull | undefined;
        min?: LayerCallbackMin | undefined;
        restore?: LayerCallbackRestore | undefined;
    }

    interface LayerConfigOptions extends LayerOptions {
        // 初始化全局配置
        path?: string | undefined;
        extend?: string[] | undefined;
    }

    interface LayerPromptOptions extends LayerOptions {
        formType?: number | undefined;
        value?: string | undefined;
        maxlength?: number | undefined;
        area?: string[] | undefined;
    }

    interface LayerTabOptions extends LayerOptions {
        tab: Array<{ title: string; content: string }>;
    }

    interface LayerPhotosOptions extends LayerOptions {
        photos: LayerPhotosData | string;
        tab?: ((pic: LayerPhotosDataItem, layero: JQuery) => void) | undefined;
    }

    interface LayerPhotosData {
        title: string;
        id: number;
        start?: number | undefined;
        data: LayerPhotosDataItem[];
    }

    interface LayerPhotosDataItem {
        alt: string;
        pid?: number | undefined;
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
        elem?: string | HTMLElement | undefined;
        count?: number | undefined;
        limit?: number | undefined;
        limits?: number[] | undefined;
        curr?: number | undefined;
        groups?: number | undefined;
        prev?: string | undefined;
        next?: string | undefined;
        first?: string | undefined;
        last?: string | undefined;
        layout?: Array<'count' | 'prev' | 'page' | 'next' | 'limit' | 'skip'> | undefined;
        theme?: string | undefined;
        hash?: string | boolean | undefined;
        jump?: ((obj: PageOptions, first: boolean) => void) | undefined;
    }

    interface Laypage {
        render(options: PageOptions): any;
    }

    interface DateParam {
        year?: number | undefined;
        month?: number | undefined;
        date?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    }

    interface DateOption {
        elem?: string | HTMLElement | undefined;
        type?: 'year' | 'month' | 'date' | 'time' | 'datetime' | undefined;
        range?: string | boolean | undefined;
        format?: string | undefined;
        value?: string | Date | undefined;
        isInitValue?: boolean | undefined;
        min?: string | number | undefined;
        max?: string | number | undefined;
        trigger?: string | undefined;
        show?: boolean | undefined;
        position?: 'abolute' | 'fixed' | 'static' | undefined;
        zIndex?: number | undefined;
        showBottom?: boolean | undefined;
        btns?: Array<'clear' | 'now' | 'confirm'> | undefined;
        lang?: 'cn' | 'en' | undefined;
        theme?: string | 'default' | 'molv' | 'grid' | undefined;
        calendar?: boolean | undefined;
        mark?: object | undefined;
        ready?: ((date: DateParam) => void) | undefined;
        change?: ((value: string, date: DateParam, endDate: DateParam) => void) | undefined;
        done?: ((value: string, date: DateParam, endDate: DateParam) => void) | undefined;
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
        elem?: string | HTMLElement | undefined;
        width?: string | undefined;
        height?: string | undefined;
        full?: boolean | undefined;
        anim?: 'default' | 'updown' | 'fade' | undefined;
        autoplay?: boolean | undefined;
        interval?: number | undefined;
        index?: number | undefined;
        arrow?: 'hover' | 'always' | 'none' | undefined;
        indicator?: 'insider' | 'outsider' | 'none' | undefined;
        trigger?: string | undefined;
    }

    interface CarouselItem {
        index?: number | undefined;
        prevIndex?: number | undefined;
        item?: any;
    }

    interface Carousel {
        render(options: CarouselOption): object;

        on(event: string, callback: (obj: CarouselItem) => any): void;

        reload(options: CarouselOption): void;
    }

    interface TableColumnOption {
        checkbox?: boolean | undefined;
        field?: string | undefined;
        title?: string | undefined;
        width?: string | number | undefined;
        minWidth?: number | undefined;
        type?: 'normal' | 'checkbox' | 'radio' | 'space' | 'numbers' | undefined;
        LAY_CHECKED?: boolean | undefined;
        fixed?: 'left' | 'right' | undefined;
        hide?: boolean | undefined;
        totalRow?: boolean | { score: number | string; experience: string } | undefined;
        totalRowText?: string | undefined;
        sort?: boolean | undefined;
        unresize?: boolean | undefined;
        edit?: 'text' | string | undefined;
        event?: string | undefined;
        style?: string | undefined;
        align?: 'left' | 'center' | 'right' | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        templet?: string | ((d: any) => string) | undefined;
        toolbar?: string | undefined; // #toolbar 或者html且必须需有标签,例如'<b>{{d.city}}</b>'  因为源码中使用了 $(toolbar).html
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
        elem?: string | HTMLElement | undefined;
        cols?: TableColumnOption[][] | undefined;
        url?: string | null | undefined;
        toolbar?: string | HTMLElement | boolean | undefined;
        defaultToolbar?: Array<string | { title: string; layEvent: string; icon: string }> | undefined;
        height?: number | string | undefined; // 'full-100'
        width?: number | string | undefined;
        cellMinWidth?: number | undefined;
        done?: ((res: object, curr?: number, count?: number) => void) | undefined;
        data?: object[] | undefined;
        totalRow?: boolean | undefined;
        page?: boolean | PageOptions | undefined; // PageOptions时排除jump和elem
        limit?: number | undefined;
        limits?: number[] | undefined;
        loading?: boolean | undefined;
        title?: string | undefined;
        text?: { none: string } | undefined;
        autoSort?: boolean | undefined;
        initSort?: { field: string; type?: 'null' | 'desc' | 'asc' | undefined } | undefined;
        id?: string | undefined;
        skin?: 'line' | 'row' | 'nob' | undefined;
        even?: boolean | undefined;
        size?: 'sm' | 'lg' | undefined;
        // 异步数据接口
        method?: string | undefined;
        where?: object | null | undefined;
        contentType?: string | undefined;
        headers?: object | undefined;
        parseData?: ((res: object) => TableResponse) | undefined;

        request?: TableRequestRename | undefined;
        response?: TableResponseRename | undefined;
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
        elem?: string | HTMLElement | undefined;
        url?: string | undefined;
        data?: object | undefined;
        header?: object | undefined;
        accept?: 'images' | 'file' | 'video' | 'audio' | undefined;
        acceptMime?: string | undefined;
        exts?: string | undefined;
        auto?: boolean | undefined;
        bindAction?: string | HTMLElement | undefined;
        field?: string | undefined;
        size?: number | undefined;
        multiple?: boolean | undefined;
        number?: number | undefined;
        drag?: boolean | undefined;
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
        elem?: string | HTMLElement | undefined;
        length?: number | undefined;
        value?: number | undefined;
        theme?: string | undefined;
        half?: boolean | undefined;
        text?: boolean | undefined;
        readonly?: boolean | undefined;
        setText?(value: number): void;
        choose?(value: number): void;
    }

    interface Rate {
        render(option: RateOption): Rate;
    }

    interface FlowOption {
        elem?: string | HTMLElement | undefined;
        scrollElem?: string | HTMLElement | undefined;
        isAuto?: boolean | undefined;
        end?: string | undefined;
        isLazyimg?: boolean | undefined;
        mb?: number | undefined;
        done?: ((page: number, next: (html: string, isMore: boolean) => void) => void) | undefined;
    }

    interface Flow {
        load(option: FlowOption): void;
        lazyimg(option?: FlowOption): void;
    }

    interface UtilBarOption {
        bar1?: boolean | string | undefined;
        bar2?: boolean | string | undefined;
        bgcolor?: string | undefined;
        showHeight?: number | undefined;
        css?: { [key: string]: string | number } | undefined;
        click?: ((type: string) => void) | undefined;
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
        elem?: string | undefined;
        title?: string | undefined;
        height?: string | undefined;
        encode?: boolean | undefined;
        skin?: string | undefined;
        about?: boolean | undefined;
    }

    interface TreeOption {
        elem?: string | undefined;
        skin?: string | undefined;
        href?: string | undefined;
        target?: string | undefined;
        nodes?: TreeNode | TreeNode[] | undefined;
        click?: ((node: TreeNode) => void) | undefined;
    }

    interface TreeNode {
        name?: string | undefined;
        spread?: boolean | undefined;
        href?: string | undefined;
        children?: TreeNode | TreeNode[] | undefined;

        [propName: string]: any;
    }

    interface ColorPickerOption {
        elem?: string | HTMLElement | undefined;
        color?: string | undefined;
        format?: 'hex' | 'rgb' | 'rgba' | undefined;
        aplha?: boolean | undefined;
        predefine?: boolean | undefined;
        colors?: string[] | undefined;
        size?: 'lg' | 'sm' | 'xs' | undefined;
        change?: ((color: any) => void) | undefined;
        done?: ((color: any) => void) | undefined;
    }

    interface ColorPicker {
        render(option: ColorPickerOption): ColorPicker;
    }

    interface SliderOption {
        elem?: string | HTMLElement | undefined;
        type?: 'default' | 'vertical' | undefined;
        mix?: number | undefined;
        max?: number | undefined;
        range?: boolean | undefined;
        value?: number | number[] | undefined;
        step?: number | undefined;
        showstep?: boolean | undefined;
        tips?: boolean | undefined;
        input?: boolean | undefined;
        height?: number | undefined;
        disabled?: boolean | undefined;
        theme?: string | undefined;
        setTips?: ((value: number | number[]) => string) | undefined;
        change?: ((value: number | number[]) => string) | undefined;
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
        tool?: string[] | undefined;
        hideTool?: string[] | undefined;
        height?: number | string | undefined;
        uploadImage?: { url: string; type: string } | undefined;
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
