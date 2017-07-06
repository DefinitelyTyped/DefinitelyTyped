// Type definitions for w2ui 1.4.3
// Project: http://w2ui.com/
// Definitions by: Valentin Robert <https://github.com/Ptival/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery {
    w2layout(options: Object): W2UI.W2Layout;
    w2grid(options: Object): W2UI.W2Grid;
    w2toolbar(options: Object): W2UI.W2Toolbar;
    w2sidebar(options: Object): W2UI.W2Sidebar;
    w2tabs(options: Object): W2UI.W2Tabs;
    w2form(options: Object): W2UI.W2Form;
    w2popup(options: Object): W2UI.W2Popup;
}

declare var w2popup: W2UI.W2Popup
declare var w2ui: W2UI.W2UI

declare namespace W2UI {

    interface W2Event {
        onComplete: () => void;
        target: string;
    }

    type W2EventHandler = ((e: W2Event) => void) | ((id: string, e: W2Event) => void)

    /* Primitives (first alphabetically, then by documentation order) */

    interface W2Item {
        checked?: boolean;
        caption?: string;
        group?: string;
        id?: string;
        img?: string;
        items?: W2Item[];
        onClick?: Function;
        text?: string;
        type?: string;
    }

    type W2Object = W2Layout | W2Grid | W2Toolbar | W2Sidebar | W2Tabs | W2Form | W2Popup

    interface W2Panel {
        content?: string | JQuery;
        hidden?: boolean;
        overflow?: string;
        resizable?: boolean;
        size?: number | string;
        style?: string;
        title?: string;
        tabs?: W2Tabs;
        type?: string;
    }

    interface W2Tab {
        caption?: string;
        id?: string;
    }

    interface W2UI {
        // morally, [s: string]<T extends W2Common>: T;
        [s: string]: any;
    }

    interface W2Common {
        box: HTMLElement;
        handlers: Function[];
        name: string;
        style: string;
        destroy(): void;
        off(type: string | Object, handler?: Function): void;
        on(type: string | Object, handler?: Function): void;
        refresh(id?: string): number;
        render(box?: Object): number;
        resize(): number;
        trigger(eventData: Object): Object;
    }

    interface W2Layout extends W2Common {
        padding: number;
        panels: W2Panel[];
        resizer: number;
        tmp: Object;
        content(type: string): HTMLElement[] | W2Object;
        content(type: string, content: HTMLElement | Object, transition?: string): void;
        el(type: string): HTMLElement;
        get(type: string): W2Panel;
        hide(type: string, immediate?: boolean): void;
        hideTabs(type: string): void;
        hideToolbar(type: string): void;
        html(type: string): string;
        html(type: string, content?: string | Object, transition?: string): void;
        load(type: string, url: string, transition?: string, onLoad?: Function): void;
        lock(panel: string, message: string, showSpinner?: boolean): void;
        set(type: string, panel: Object): void;
        show(type: string, immediate?: boolean): void;
        showTabs(type: string): void;
        showToolbar(type: string): void;
        sizeTo(type: string, size: number): void;
        toggle(type: string, immediate?: boolean): void;
        toggleTabs(type: string): void;
        toggleToolbar(type: string): void;
        unlock(panel: string): void;
    }

    namespace W2Grid {
        interface Columns { }
        interface Ranges { }
        interface Records { }
    }

    interface W2Grid extends W2Common, W2OnClickable {
        autoLoad: boolean;
        buttons: Object;
        columnGroups: Object[];
        columns: Object[];
        fixedBody: boolean;
        header: string;
        keyboard: boolean;
        last: Object;
        limit: number;
        markSearch: boolean;
        menu: Object[];
        method: string;
        msgAJAXerror: string;
        msgDelete: string;
        msgNotJSON: string;
        msgRefresh: string;
        multiSearch: boolean;
        multiSelect: boolean;
        multiSort: boolean;
        offset: number;
        parser: Function;
        postData: Object;
        ranges: Object[];
        recid: string;
        recordHeight: number;
        records: Object[];
        reorderColumns: boolean;
        reorderRows: boolean;
        routeData: string;
        searchData: Object[];
        searches: Object[];
        selectType: string;
        show: Object;
        sortData: Object[];
        summary: Object[];
        toolbar: Object;
        total: number;
        url: string;
        add(record: W2Grid.Records | W2Grid.Records[]): number;
        addColumn(column: W2Grid.Columns | W2Grid.Columns[]): number;
        addColumn(before: string | number, column: W2Grid.Columns | W2Grid.Columns[]): number;
        addRange(range: W2Grid.Ranges | W2Grid.Ranges[]): number;
        addSearch(search: Object | Object[]): number;
        addSearch(before: string | number, search: Object | Object[]): number;
        clear(noRefresh?: boolean): void;
        click(recid: string, event?: Object): void;
        collapse(recid: string): boolean;
        columnClick(field: string, event?: Object): boolean;
        columnOnOff(el: HTMLElement, event: Object, field: string, value: number): void;
        contextMenu(recid: string, event?: Object): void;
        copy(): string;
        dblClick(recid: string, event?: Object): void;
        delete(force: boolean): void;
        editField(recid: string, column: number, value?: string, event?: Object): void;
        error(msg: string): void;
        expand(recid: string): boolean;
        find(match: Object, returnIndex?: boolean): Object[] | number[];
        get(recid: string, returnIndex?: boolean): Object | number | void;
        getCellHTML(index: number, columnIndex: number, summary?: boolean): string;
        getCellValue(index: number, columnIndex: number, summary?: boolean): string;
        getChanges(): Object[];
        getColumn(field: string, returnIndex?: boolean): Object | number | void;
        getColumnsHTML(): string;
        getFooterHTML(): string;
        getRangeData(range: Object, extra?: boolean): Object[][];
        getRecordHTML(index: number, lineNumber: number, summary?: boolean): string;
        getRecordsHTML(): string;
        getSearch(field: string, returnIndex?: boolean): Object | number | void;
        getSearchData(field: string): Object | void;
        getSearchesHTML(): string;
        getSelection(): Object[]; // the doc is weird here
        getSummaryHTML(): string;
        hideColumn(...fields: string[]): number;
        hideSearch(...fields: string[]): number;
        initAllField(field: string, value?: string): void;
        initColumnOnOff(): void;
        //initOperator(el, searchInd): void; // this is used internally
        initResize(): void;
        initSearches(): void;
        initToolbar(): void;
        keydown(event: Object): void;
        load(url: string, callback?: Function): void;
        localSearch(silent?: boolean): number;
        localSort(silent?: boolean): number;
        lock(message: string, showSpinner?: boolean): void;
        menuClick(recid: string, index: number, event: Object): void;
        mergeChanges(): void;
        nextCell(colInd: number, editable: boolean): number | void;
        nextRow(index: number): number | void;
        parseField(obj: Object, field: string): any;
        paste(text: string): void;
        prevCell(colInd: number, editable: boolean): number | void;
        prevRow(index: number): number | void;
        refreshCell(recid: string, field: string): void;
        refreshRanges(): number;
        refreshRow(recid: string): void;
        reload(callback?: Function): void;
        remove(...recids: string[]): number;
        removeColumn(...fields: string[]): number;
        removeRange(...rangeNames: string[]): number;
        removeSearch(...fields: string[]): number;
        request(cmd: string, params?: Object, url?: string, callback?: Function): void;
        requestComplete(status: string, cmd: string, callback?: Function): void;
        reset(noRefresh?: boolean): void;
        resizeBoxes(): void;
        resizeRecords(): void;
        save(): void;
        scroll(event: Object): void;
        scrollIntoView(ind: number): void;
        search(field: string, value: string): void;
        search(searches: Object[], logic?: string): void;
        searchClose(): void;
        searchOpen(): void;
        searchReset(noRefresh?: boolean): void;
        searchShowFields(): void;
        select(...recids: string[]): number;
        selectAll(): void;
        selectNone(): void;
        set(record: Object, noRefresh?: boolean): boolean;
        set(recid: string, record: Object, noRefresh?: boolean): boolean;
        showColumn(...fields: string[]): number;
        showSearch(...fields: string[]): number;
        skip(offset: number): number;
        sort(): void;
        sort(field: string, direction?: string, multiField?: boolean): void;
        stateReset(): void;
        stateRestore(stateObj?: Object): Object | void;
        stateSave(returnOnly?: boolean): Object | void;
        status(msg?: string): void;
        toggle(recid: string): void;
        toggleColumn(...fields: string[]): number;
        toggleSearch(...fields: string[]): number;
        toolbarAdd(): void;
        toolbarDelete(force?: boolean): void;
        unlock(): void;
        unselect(...recids: string[]): number;
    }

    interface W2Toolbar extends W2Common, W2OnClickable {
        items: W2Item[];
        right: string;
        routeData: string;
        add(items: Object | Object[]): void;
        check(...ids: string[]): number;
        click(id: string, event?: Object): void;
        disable(...ids: string[]): number;
        enable(...ids: string[]): number;
        get(id: string, returnIndex?: boolean): Object | number | void;
        getItemHTML(item: Object): string;
        hide(...ids: string[]): number;
        insert(before: string, items: Object | Object[]): void;
        menuClick(id: string, menuIndex: number, event?: Object): void;
        remove(...ids: string[]): number;
        set(id: string, item: Object): boolean;
        show(...ids: string[]): number;
        uncheck(...ids: string[]): number;
    }

    interface W2Sidebar extends W2Common, W2OnClickable {
        bottomHTML: string;
        icon: string;
        img: string;
        keyboard: boolean;
        menu: Object[];
        nodes: Object[];
        parent: W2Common;
        routeData: string;
        selected: string;
        sidebar: Object;
        topHTML: string;
        add(nodes: Object | Object[]): Object;
        add(parent: string, nodes: Object | Object[]): Object;
        click(id: string, event?: Object): void;
        collapse(id: string): void;
        collapseAll(parent?: string): void;
        contextMenu(id: string, event?: Object): void;
        dblClick(id: string, event?: Object): void;
        disable(...ids: string[]): number;
        enable(...ids: string[]): number;
        expand(id: string): void;
        expandAll(parent?: string): void;
        expandParents(id: string): void;
        find(attrs: Object): Object[];
        find(parent: string, attrs: Object): Object[];
        get(): Object | number | void;
        get(id: string, returnIndex?: boolean): Object | number | void;
        get(parent: string, id: string, returnIndex?: boolean): Object | number | void;
        hide(...ids: string[]): number;
        insert(before: string | Object, nodes: Object | Object[]): Object;
        insert(parent: string, before: string | Object, nodes: Object | Object[]): Object;
        keydown(event: Object): void;
        lock(message: string, showSpinner?: boolean): void;
        menuClick(id: string, index: number, event?: Object): void;
        remove(...ids: string[]): number;
        scrollIntoView(id?: string): void;
        select(id: string): void;
        set(id: string, node: Object): boolean;
        set(parent: string, id: string, node: Object): boolean;
        show(...ids: string[]): number;
        toggle(id: string): void;
        unlock(): void;
        unselect(id: string): boolean;
    }

    interface W2Tabs extends W2Common, W2OnClickable {
        active: string;
        right: string;
        routeData: string;
        tabs: W2Tab[];
        add(tabs: Object | Object[]): void;
        animateClose(id: string, event?: Object | Object[]): void;
        animateInsert(before: string, tabs: Object | Object[]): void;
        click(id: string, event?: Object): void;
        disable(...ids: string[]): number;
        enable(...ids: string[]): number;
        get(id: string, returnIndex?: boolean): Object | number | void;
        hide(...ids: string[]): number;
        insert(before: string, tabs: Object | Object[]): void;
        remove(...ids: string[]): number;
        select(id: string): boolean;
        set(id: string, tab: Object): boolean;
        show(...ids: string[]): number;
    }

    interface W2Form extends W2Common {
        actions: Object;
        fields: Object[];
        focus: number;
        formHTML: string;
        formURL: string;
        header: string;
        isGenerated: boolean;
        last: Object;
        msgAJAXerror: string;
        msgNotJSON: string;
        msgRefresh: string;
        msgSaving: string;
        original: Object;
        page: number;
        postData: Object;
        recid: number;
        record: Object;
        routeData: string;
        tabs: Object;
        toolbar: Object;
        url: string;
        action(action: string, event?: Object): void;
        clear(): void;
        error(msg: string): void;
        generateHTML(): string;
        get(): Object | number | void;
        get(field: string, returnIndex?: boolean): Object | number | void;
        getChanges(): Object;
        goto(page: number): void;
        lock(message: string, showSpinner?: boolean): void;
        reload(callback?: Function): void;
        request(postData?: Object, callback?: Function): void;
        save(postData?: Object, callback?: Function): void;
        set(field: string, obj: Object): boolean;
        submit(postData?: Object, callback?: Function): void;
        unlock(): void;
        validate(showErrors?: boolean): Object[];
    }

    interface W2Popup extends W2Common {
        defaults: Object;
        status: string;
        clear(): void;
        close(): void;
        get(): Object;
        keydown(event: Object): void;
        load(options: Object): void;
        lock(message: string, showSpinner?: boolean): void;
        lockScreen(options?: Object): void;
        max(): void;
        message(msgOptions: Object): void;
        min(): void;
        open(options: Object): void;
        reset(): void;
        resize(): void;
        resize(width?: number, height?: number, callback?: Function): number;
        set(options: Object): void;
        toggle(): void;
        unlock(): void;
        unlockScreen(): void;
    }

    interface W2OnClickable {
      onClick(event: W2Event): void;
      onClick(id: string, data: W2Event): void;
    }

}
