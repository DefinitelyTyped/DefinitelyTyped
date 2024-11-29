import JSONObject = NC.JSONObject;

declare class NU {

    alert(msg: NU.Options.Alert | string, vars?: string[]): NU.Alert;
    button(opts?: NU.Options.Button): NU.Button;
    datepicker(opts?: NU.Options.Datepicker): NU.Datepicker;
    popup(opts?: NU.Options.Popup): NU.Popup;
    tab(opts?: NU.Options.Tab): NU.Tab;
    select(opts?: NU.Options.Select | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Select;
    form(opts?: NU.Options.Form | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Form;
    list(opts?: NU.Options.List | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.List;
    grid(opts?: NU.Options.Grid | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Grid;
    pagination(opts: NU.Options.Pagination | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Pagination;
    tree(opts: NU.Options.Tree | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Tree;

    static ui: {
        iteration: {
            render: (i: any, limit: any, delay: any, lastIdx: any, callType: any) => void;
            select: (compNm: any) => void;
            checkAll: (compNm: any) => void;
            checkSingle: (compNm: any) => void;
            move: (fromRow: any, toRow: any, compNm: any) => any;
            copy: (fromRow: any, toRow: any, compNm: any) => any;
        };
        draggable: {
            events: (eventNameSpace: any, startHandler: any, moveHandler: any, endHandler: any) => void;
            moveX: (x: any, min: any, max: any) => boolean;
            moveY: (y: any, min: any, max: any) => boolean;
        };
        scroll: {
            paging: (contextWrapEle: any, defSPSize: any, rowEleLength: any, rowTagName: any, bindOpt: any) => void;
        };
        utils: {
            wrapHandler: (opts: any, compNm: any, eventNm: any) => void;
            isTextInput: (tagName: any, type: any) => boolean;
        };
    };

    static alert: {
        new(obj: NJS<HTMLElement[]>, msg: NU.Options.Alert | string, vars?: string[]): NU.Alert;
        wrapEle(): void;
        resetOffSetEle(opts: NU.Options.Alert): void;
        wrapInputEle(): void;
    };

    static button: {
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Button): NU.Button;
        wrapEle(): void;
    };

    static datepicker: {
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Datepicker): NU.Datepicker;
        checkMinMaxDate(): boolean;
        wrapEle(): void;
        createContents(): any;
        yearPaging(yearItems: NJS<HTMLElement[]>, currYear: number | string, addCnt: number, absolute?: boolean): void;
        selectItems(opts: NU.Options.Datepicker, value: string, format: string, yearsPanel: NJS<HTMLElement[]>, monthsPanel: NJS<HTMLElement[]>, daysPanel: NJS<HTMLElement[]>): void;
    };

    static popup: {
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Popup): NU.Popup;
        wrapEle(): void;
        loadContent(callback: NU.Callbacks.Popup.LoadContent): void;
        popOpen(onOpenData: any, cont: NA.Objects.Controller.Object): void;
    };

    static tab: {
        new(obj: NJS<HTMLElement[]>, opts?: NU.Options.Tab): NU.Tab;
        wrapEle(): void;
        wrapScroll(): void;
        loadContent(url: string, targetIdx: number, callback: NU.Callbacks.Tab.LoadContent, isFirst: boolean): void;
    };

    static select: {
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Select | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Select;
        wrapEle(): void;
    };

    static form: {
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Form | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Form;
    };

    static list: {
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.List | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.List;
        createScroll(): void;
        vResize(contextWrapEle: NJS<NC.JSONObject[]>): void;
    };

    static grid: {
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Grid | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Grid;
        tableCells(tbl: any, opt_cellValueGetter: any): any[][];
        tableMap(): NU.Objects.Grid.TableMap;
        setTheadCellInfo(): void;
        removeColgroup(): void;
        fixColumn(): void;
        fixHeader(): void;
        vResize(gridWrap: NJS<HTMLElement[]>, contextWrapEle: NJS<HTMLElement[]>, tfootWrap: NJS<HTMLElement[]>): void;
        more(): void;
        resize(): void;
        sort(): void;
        dataFilter(): void;
        rowSpan(i: number, rowEle: NJS<HTMLElement[]>, bfRowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject, bfRowData: NC.JSONObject, colId: string): void;
        paste(): void;
    };

    static pagination: {
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Pagination | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Pagination;
        wrapEle: NU.Objects.Pagination.LinkEles
        changePageSet(linkEles: NU.Objects.Pagination.LinkEles, opts: NU.Options.Pagination, isRemake: boolean): NU.Options.CurrPageNavInfo;
    };

    static tree: {
        new(data: NJS<NC.JSONObject[]> | NC.JSONObject[], opts?: NU.Options.Tree | Omit<NJS<HTMLElement[]>, keyof NJS<HTMLElement[]>>): NU.Tree;
    };

}

declare namespace NU {

    interface Alert {
        options: NU.Options.Alert;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        show(): NU.Alert;
        hide(): NU.Alert;
        remove(): NU.Alert;
    }

    interface Button {
        options: NU.Options.Button;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        disable(): NU.Button;
        enable(): NU.Button;
    }

    interface Datepicker {
        options: NU.Options.Datepicker;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        show(): NU.Datepicker;
        hide(): NU.Datepicker;
    }

    interface Popup {
        options: NU.Options.Popup;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        open(onOpenData?: any): NU.Popup;
        close(onCloseData?: any): NU.Popup;
        remove(): NU.Popup;
    }

    interface Tab {
        options: NU.Options.Tab;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        open(idx: number, onOpenData?: any, isFirst?: boolean): NU.Tab;
        open(idx?: number, onOpenData?: any, isFirst?: boolean): {
            index: number;
            tab: NJS<HTMLElement[]>;
            content: NJS<HTMLElement[]>;
            cont: NA.Objects.Controller.Object;
        };
        disable(idx: number): NU.Tab;
        enable(idx: number): NU.Tab;
        cont(idx?: number): NA.Objects.Controller.Object;
    }

    interface Select {
        options: NU.Options.Select;
        data(selFlag: true): JSONObject[];
        data(selFlag: false): NJS<NC.JSONObject[]>;
        data(): JSONObject[];
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        bind(data?: NJS<NC.JSONObject[]>): NU.Select;
        index(): number;
        index(idx: number): NU.Select;
        val(val?: NC.Primitive | NC.Primitive[]): NC.Primitive | NC.Primitive[] | this;
        remove(val?: NC.Primitive): NU.Select;
        reset(selFlag?: boolean): NU.Select;
    }

    interface Form {
        options: NU.Options.Form;
        data(selFlag: true, ...args: string[]): JSONObject[];
        data(selFlag: false): NJS<NC.JSONObject[]>;
        data(): JSONObject[];
        row(before?: "before"): number;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        bindEvents: {
            validate(ele: NJS<HTMLElement[]>, opts: NU.Options.Form, eleType: string, isTextInput: boolean): void;
            dataSync(ele: NJS<HTMLElement[]>, opts: NU.Options.Form, vals: NC.JSONObject, eleType: string): void;
            enterKey(ele: NJS<HTMLElement[]>, opts: NU.Options.Form): void;
            format(ele: NJS<HTMLElement[]>, opts: NU.Options.Form, eleType: string, key: string): void;
        };
        bind(row: number, data: NJS<NC.JSONObject[]>): NU.Form;
        add(data?: number | NC.JSONObject, row?: number): NU.Form;
        remove(): NU.Form;
        revert(): NU.Form;
        validate(): boolean;
        val(key: string, val?: NC.Primitive | NC.Primitive[], notify?: boolean): NC.Primitive | NC.Primitive[] | NU.Form;
        update(row: number, key?: string): NU.Form;
    }

    interface List {
        options: NU.Options.List;
        tempRowEle: NJS<HTMLElement[]>;
        contextEle: NJS<HTMLElement[]>;
        data(selFlag: true | "modified" | "selected" | "checked" | "insert" | "update" | "delete", ...args: string[]): JSONObject[];
        data(selFlag: false): NJS<NC.JSONObject[]>;
        data(): JSONObject[];
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        contextBodyTemplate(sel?: NJS<HTMLElement[]> | JQuery.Selector): NJS<HTMLElement[]>;
        select(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.List;
        check(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.List;
        bind(data?: NJS<NC.JSONObject[]>, callType?: "append" | "list.bind" | "list.update"): NU.List;
        add(data?: number | NC.JSONObject, row?: number): NU.List;
        remove(row?: number): NU.List;
        revert(row?: number): NU.List;
        validate(row?: number): boolean;
        val(row: number, key: string, val?: NC.Primitive | NC.Primitive[]): NC.Primitive | NC.Primitive[] | NU.List;
        move(fromRow: number, toRow: number): NU.List;
        copy(fromRow: number, toRow: number): NU.List;
        update(row: number, key?: string): NU.List;
    }

    interface Grid {
        options: NU.Options.Grid;
        tempRowEle: NJS<HTMLElement[]>;
        tableMap: NU.Objects.Grid.TableMap;
        thead: NJS<HTMLElement[]>;
        contextEle: NJS<HTMLElement[]>;
        rowSpanIds: NJS<string[]>;
        data(selFlag?: false | "modified" | "selected" | "checked" | "insert" | "update" | "delete"): NJS<NC.JSONObject[]> | JSONObject;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        contextHead(sel?: NJS<HTMLElement[]> | JQuery.Selector): NJS<HTMLElement[]>;
        contextBodyTemplate(sel?: NJS<HTMLElement[]> | JQuery.Selector): NJS<HTMLElement[]>;
        select(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.Grid;
        check(row?: number | number[], isAppend?: boolean): NJS<number[]> | NU.Grid;
        bind(data?: NJS<NC.JSONObject[]>, callType?: "append" | "grid.bind" | "grid.dataFilter" | "grid.sort" | "grid.update"): NU.Grid;
        add(data?: number | JSONObject, row?: number): NU.Grid;
        remove(row?: number): NU.Grid;
        revert(row?: number): NU.Grid;
        validate(row?: number): boolean;
        val(row: number, key: string, val?: NC.Primitive | NC.Primitive[]): NC.Primitive | NC.Primitive[] | NU.Grid;
        move(fromRow: number, toRow: number): NU.Grid;
        copy(fromRow: number, toRow: number): NU.Grid;
        show(colIdxs: number): NU.Grid;
        hide(colIdxs: number): NU.Grid;
        update(row: number, key?: string): NU.Grid;
    }

    interface Pagination {
        options: NU.Options.Pagination;
        linkEles: NU.Objects.Pagination.LinkEles;
        data(selFlag?: false): NJS<NC.JSONObject[]> | NC.JSONObject;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        bind(data?: NJS<NC.JSONObject[]>, totalCount?: number): NU.Pagination;
        totalCount(): number;
        totalCount(totalCount: number): NU.Pagination;
        pageNo(): number;
        pageNo(pageNo: number): NU.Pagination;
        countPerPage(): number;
        countPerPage(countPerPage: number): NU.Pagination;
        countPerPageSet(): number;
        countPerPageSet(countPerPageSet: number): NU.Pagination;
        currPageNavInfo(): NU.Options.CurrPageNavInfo;
    }

    interface Tree {
        options: NU.Options.Tree;
        data(selFlag: any, ...args: any[]): any;
        context(sel?: JQuery.Selector): NJS<HTMLElement[]>;
        bind(data?: NJS<NC.JSONObject[]>): NU.Tree;
        select(val?: NC.Primitive): NC.Primitive | NU.Tree;
        expand(): NU.Tree;
        collapse(): NU.Tree;
    }

}


