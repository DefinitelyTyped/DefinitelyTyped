// Type definitions for Gijgo v1.9.12
// Project: http://gijgo.com
// Definitions by: Atanas Atanasov <https://github.com/atatanasov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'gijgo' {
    export = Types;
}

declare module Types {

    //Grid
    interface GridPager {
        limit?: number;
        sizes?: Array<number>;
        leftControls?: Array<any>;
        rightControls?: Array<any>;
    }

    interface GridColumn {
        align?: string;
        cssClass?: string;
        decimalDigits?: number;
        editField?: string;
        editor?: any;
        events?: any;
        field?: string;
        filter?: any;
        filterable?: boolean;
        format?: string;
        headerCssClass?: string;
        hidden?: boolean;
        icon?: string;
        minWidth?: number;
        mode?: string;
        priority?: number;
        renderer?: any;
        sortable?: boolean;
        stopPropagation?: boolean;
        title?: string;
        tmpl?: string;
        tooltip?: string;
        type?: string;
        width?: number;
    }

    interface GridParamNames {
        direction?: string;
        limit?: string;
        page?: string;
        sortBy?: string;
        groupBy?: string;
        groupByDirection?: string;
    }

    interface GridMapping {
        dataField?: string;
        totalRecordsField?: string;
    }

    interface GridIcons {
        expandRow?: string;
        collapseRow?: string;
        expandGroup?: string;
        collapseGroup?: string;
    }

    interface GridGrouping {
        groupBy: string;
    }

    interface GridHeaderFilter {
        type: string;
    }

    interface GridInlineEditing {
        mode?: string;
        managementColumn?: boolean;
    }

    interface GridOptimisticPersistence {
        localStorage: Array<string>;
        sessionStorage: Array<string>;
    }

    interface GridSettings<Entity> {
        //Configuration options
        autoGenerateColumns?: boolean;
        autoLoad?: boolean;
        bodyRowHeight?: string;
        columnReorder?: boolean;
        columns?: Array<GridColumn>;
        dataSource?: any;
        defaultColumnSettings?: GridColumn;
        detailTemplate?: string;
        fixedHeader?: boolean;
        fontSize?: string;
        grouping?: GridGrouping;
        headerFilter?: GridHeaderFilter;
        headerRowHeight?: string;
        icons?: GridIcons;
        iconsLibrary?: string;
        inlineEditing?: GridInlineEditing;
        keepExpandedRows?: boolean;
        locale?: string;
        mapping?: any;
        minWidth?: number;
        notFoundText?: string;
        optimisticPersistence?: GridOptimisticPersistence;
        orderNumberField?: string;
        pager?: GridPager;
        paramNames?: GridParamNames;
        primaryKey?: string;
        resizableColumns?: boolean;
        resizeCheckInterval?: number;
        responsive?: boolean;
        rowReorder?: boolean;
        rowReorderColumn?: string;
        selectionMethod?: string;
        selectionType?: string;
        showHiddenColumnsAsDetails?: boolean;
        title?: string;
        toolbarTemplate?: string;
        uiLibrary?: string;
        width?: number;
        params?: any;

        //Events
        beforeEmptyRowInsert?: (e: any, $row: JQuery) => any;
        cellDataBound?: (e: any, $wrapper: JQuery, id: string, column: GridColumn, record: Entity) => any;
        cellDataChanged?: (e: any, $cell: JQuery, column: GridColumn, record: Entity, oldValue: any, newValue: any) => any;
        columnHide?: (e: any, column: GridColumn) => any;
        columnShow?: (e: any, column: GridColumn) => any;
        dataBinding?: (e: any, records: Array<Entity>) => any;
        dataBound?: (e: any, records: Array<Entity>, totalRecords: number) => any;
        dataFiltered?: (e: any, records: Array<Entity>) => any;
        destroying?: (e: any) => any;
        detailCollapse?: (e: any, detailWrapper: JQuery, id: string) => any;
        detailExpand?: (e: any, detailWrapper: JQuery, id: string) => any;
        initialized?: (e: any) => any;
        pageChanging?: (e: any, newPage: number) => any;
        pageSizeChange?: (e: any, newPage: number) => any;
        resize?: (e: any, newWidth: number, oldWidth: number) => any;
        rowDataBound?: (e: any, $row: JQuery, id: string, record: Entity) => any;
        rowDataChanged?: (e: any, id: string, record: Entity) => any;
        rowRemoving?: (e: any, $row: JQuery, id: string, record: Entity) => any;
        rowSelect?: (e: any, $row: JQuery, id: string, record: Entity) => any;
        rowUnselect?: (e: any, $row: JQuery, id: string, record: Entity) => any;
    }

    interface Grid<Entity, Params> extends JQuery {
        addRow(record: Entity): Grid<Entity, Params>;
        cancel(id: string): Grid<Entity, Params>; 
        clear(showNotFoundText?: boolean): Grid<Entity, Params>;
        collapseAll(): Grid<Entity, Params>; 
        count(): number;
        destroy(keepTableTag?: boolean, keepWrapperTag?: boolean): void;
        downloadCSV(filename?: string, includeAllRecords?: boolean): Grid<Entity, Params>;
        edit(id: string): Grid<Entity, Params>;
        expandAll(): Grid<Entity, Params>;
        //get(position: number): Entity; //TODO: rename to getByPosition to avoid conflicts with jquery.get
        getAll(includeAllRecords?: boolean): Array<Entity>;
        getById(id: string): Entity;
        getChanges(): Array<Entity>;
        getCSV(includeAllRecords?: boolean): string;
        getSelected(): string;
        getSelections(): Array<string>;
        hideColumn(field: string): Grid<Entity, Params>;
        makeResponsive(): Grid<Entity, Params>;
        reload(params?: Params): Grid<Entity, Params>;
        removeRow(id: string): Grid<Entity, Params>;
        render(response: any): Grid<Entity, Params>;
        selectAll(): Grid<Entity, Params>;
        setSelected(id: string | number): Grid<Entity, Params>;
        showColumn(field: string): Grid<Entity, Params>;
        title(text: any): any;
        unSelectAll(): Grid<Entity, Params>;
        update(id: string): Grid<Entity, Params>; 
        updateRow(id: string, record: Entity): Grid<Entity, Params>;
    }

    // Dialog
    interface DialogSettings {
        autoOpen?: boolean;
        closeButtonInHeader?: boolean;
        closeOnEscape?: boolean;
        draggable?: boolean;
        height?: number | string;
        locale?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        resizable?: boolean;
        scrollable?: boolean;
        title?: string;
        uiLibrary?: string;
        width?: number;

        //Events
        closed?: (e: any) => any;
        closing?: (e: any) => any;
        drag?: (e: any) => any;
        dragStart?: (e: any) => any;
        dragStop?: (e: any) => any;
        initialized?: (e: any) => any;
        opened?: (e: any) => any;
        opening?: (e: any) => any;
        resize?: (e: any) => any;
        resizeStart?: (e: any) => any;
        resizeStop?: (e: any) => any;
    }

    interface Dialog extends JQuery {
        close(): Dialog;
        content(constent: string): string | Dialog;
        destroy(keepHtml: boolean): void;
        isOpen(): boolean;
        open(): Dialog;
    }

    // Checkbox
    interface CheckboxSettings {
        uiLibrary?: string;
        iconsLibrary?: string;

        //Events
        change?: (e: any, state: string) => any;
    }

    interface Checkbox extends JQuery {
        //toggle(): Checkbox;
        state(value: string):  string | Checkbox;
        destroy(): void;
    }

    // DatePicker
    interface DatePickerIcons {
        rightIcon?: string;
    }

    interface DatePickerSettings {
        showOtherMonths?: boolean;
        selectOtherMonths?: boolean;
        width?: number;
        minDate?: Date | string | Function;
        maxDate?: Date | string | Function;
        format?: string;
        value?: string;
        uiLibrary?: string;
        iconsLibrary?: string;
        weekStartDay?: number;
        disableDates?: Array<any> | Function;
        disableDaysOfWeek?: Array<number>;
        calendarWeeks?: boolean;
        keyboardNavigation?: boolean;
        locale?: string;
        icons?: DatePickerIcons;
        size?: string;
        modal?: boolean;
        header?: boolean;
        footer?: boolean;
        showOnFocus?: boolean;
        showRightIcon?: boolean;

        //Events
        change?: (e: any) => any;
        open?: (e: any) => any;
        close?: (e: any) => any;
        select?: (e: any, type: string) => any;
    }

    interface DatePicker extends JQuery {
        close(): DatePicker;
        destroy(): void;
        open(): DatePicker;
        value(value?: string):  string | DatePicker;
    }

    // DropDown
    interface DropDownIcons {
        dropdown?: string;
    }

    interface DropDownSettings {
        dataSource?: any;
        textField?: string;
        valueField?: string;
        selectedField?: string;
        width?: number;
        maxHeight?: any;
        uiLibrary?: string;
        iconsLibrary?: string;
        icons?: DropDownIcons;
        placeholder?: string;

        //Events
        change?: (e: any) => any;
        dataBound?: (e: any) => any;
    }

    interface DropDown extends JQuery {
        value(value: string):  string | DropDown;
        destroy(): void;
    }

    // Editor
    interface EditorSettings {
        height?: number | string;
        width?: number | string;
        uiLibrary?: string;
        iconsLibrary?: string;
        locale?: string;

        //Events
        changing?: (e: any) => any;
        changed?: (e: any) => any;
    }

    interface Editor extends JQuery {
        content(html?: string):  string | Editor;
        destroy(): void;
    }

    // TimePicker
    interface TimePickerSettings {
        width?: number;
        modal?: boolean;
        header?: boolean;
        footer?: boolean;
        format?: string;
        uiLibrary?: string;
        value?: string;
        mode?: string;
        locale?: string;
        size?: string;

        //Events
        change?: (e: any) => any;
        open?: (e: any) => any;
        close?: (e: any) => any;
        select?: (e: any, type: string) => any;
    }

    interface TimePicker extends JQuery {
        close(): TimePicker;
        destroy(): void;
        open(): TimePicker;
        value(value?: string):  string | TimePicker;
    }

    // DateTimePicker
    interface DateTimePickerSettings {
        datepicker?: Types.DatePickerSettings;
        footer?: boolean;
        format?: string;
        locale?: string;
        modal?: boolean;
        size?: string;
        uiLibrary?: string;
        value?: string;
        width?: number;

        //Events
        change?: (e: any) => any;
    }

    interface DateTimePicker extends JQuery {
        destroy(): void;
        value(value?: string):  string | DateTimePicker;
    }

    // Slider
    interface SliderSettings {
        min?: number;
        max?: number;
        uiLibrary?: string;
        value?: string;
        width?: number;

        //Events
        change?: (e: any) => any;
        slide?: (e: any, value: number) => any;
    }

    interface Slider extends JQuery {
        destroy(): void;
        value(value?: string):  string | Slider;
    }

    // Tree
    interface TreeIcons {
        expand?: string;
        collapse?: string;
    }

    interface TreeParamNames {
        parentId?: string;
    }

    interface TreeSettings {
        autoLoad?: boolean;
        selectionType?: string;
        cascadeSelection?: boolean;
        dataSource?: any;
        primaryKey?: string;
        textField?: string;
        childrenField?: string;
        hasChildrenField?: string;
        imageCssClassField?: string;
        imageUrlField?: string;
        imageHtmlField?: string;
        disabledField?: string;
        width?: number;
        border?: boolean;
        uiLibrary?: string;
        iconsLibrary?: string;
        icons?: TreeIcons;

        checkboxes?: boolean;
        checkedField?: string;
        cascadeCheck?: boolean;
        dragAndDrop?: boolean;
        paramNames?: TreeParamNames;
        lazyLoading?: boolean;


        //Events
        initialized?: (e: any) => any;
        dataBinding?: (e: any) => any;
        dataBound?: (e: any) => any;
        select?: (e: any, node: any, id: string) => any;
        unselect?: (e: any, node: any, id: string) => any;
        expand?: (e: any, node: any, id: string) => any;
        collapse?: (e: any, node: any, id: string) => any;
        enable?: (e: any, node: any, id: string) => any;
        disable?: (e: any, node: any, id: string) => any;
        destroying?: (e: any) => any;
        nodeDataBound?: (e: any, node: any, id: string) => any;
        checkboxChange?: (e: any, node: any, record: any, state: string) => any;
        nodeDrop?: (e: any, id: string, parentId: string, orderNumber: number) => any;
    }

    interface Tree extends JQuery {
        reload(params: any):  any;
        render(response: any): any;
        addNode(data: any, parentNode: any, position: number): Tree;
        removeNode(node: any): Tree;
        updateNode(id: string, record: any) : Tree;
        destroy(): void;
        expand(node: any, cascade: boolean): Tree;
        collapse(node: any, cascade: boolean) : Tree;
        expandAll(): Tree;
        collapseAll() : Tree;
        getDataById(id: string) : any;
        getDataByText(text: string) : any;
        getNodeById(id: string) : any;
        getNodeByText(id: string) : any;
        getAll(): Array<any>;
        //select(node: any) : Tree;
        unselect(node: any) : Tree;
        selectAll() : Tree;
        unselectAll() : Tree;
        getSelections() : Array<string>;
        getChildren(node: any, cascade?: boolean) : Array<any>;
        enable(node: any, cascade?: boolean) : Tree;
        disable(node: any, cascade?: boolean) : Tree;
        enableAll() : Tree;
        disableAll() : Tree;
        //parents(id: string): Array<string>;

        getCheckedNodes() : Array<string>;
        checkAll() : Tree;
        uncheckAll(): Tree;
        check(node: any) : Tree;
        uncheck(node: any) : Tree;
    }
}


interface JQuery {
    grid(settings: Types.GridSettings<any>): Types.Grid<any, any>;
    grid<Entity>(settings: Types.GridSettings<Entity>): Types.Grid<Entity, any>;
    grid<Entity, Params>(settings: Types.GridSettings<Entity>): Types.Grid<Entity, Params>;

    dialog(settings: Types.DialogSettings): Types.Dialog;

    checkbox(settings: Types.CheckboxSettings): Types.Checkbox;

    datepicker(settings: Types.DatePickerSettings): Types.DatePicker;

    dropdown(settings: Types.DropDownSettings): Types.DropDown;

    editor(settings: Types.EditorSettings): Types.Editor;

    timepicker(settings: Types.TimePickerSettings): Types.TimePicker;

    datetimepicker(settings: Types.DateTimePickerSettings): Types.DateTimePicker;

    slider(settings: Types.SliderSettings): Types.Slider;

    tree(settings: Types.TreeSettings): Types.Tree;
}
