declare module "gijgo" {
    export = Types;
}

declare namespace Types {
    // Grid
    interface GridPager {
        limit?: number | undefined;
        sizes?: Array<number> | undefined;
        leftControls?: Array<any> | undefined;
        rightControls?: Array<any> | undefined;
    }

    interface GridColumn {
        align?: string | undefined;
        cssClass?: string | undefined;
        decimalDigits?: number | undefined;
        editField?: string | undefined;
        editor?: any;
        events?: any;
        field?: string | undefined;
        filter?: any;
        filterable?: boolean | undefined;
        format?: string | undefined;
        headerCssClass?: string | undefined;
        hidden?: boolean | undefined;
        icon?: string | undefined;
        minWidth?: number | undefined;
        mode?: string | undefined;
        priority?: number | undefined;
        renderer?: any;
        sortable?: boolean | undefined;
        stopPropagation?: boolean | undefined;
        title?: string | undefined;
        tmpl?: string | undefined;
        tooltip?: string | undefined;
        type?: string | undefined;
        width?: number | undefined;
    }

    interface GridParamNames {
        direction?: string | undefined;
        limit?: string | undefined;
        page?: string | undefined;
        sortBy?: string | undefined;
        groupBy?: string | undefined;
        groupByDirection?: string | undefined;
    }

    interface GridMapping {
        dataField?: string | undefined;
        totalRecordsField?: string | undefined;
    }

    interface GridIcons {
        expandRow?: string | undefined;
        collapseRow?: string | undefined;
        expandGroup?: string | undefined;
        collapseGroup?: string | undefined;
    }

    interface GridGrouping {
        groupBy: string;
    }

    interface GridHeaderFilter {
        type: string;
    }

    interface GridInlineEditing {
        mode?: string | undefined;
        managementColumn?: boolean | undefined;
    }

    interface GridOptimisticPersistence {
        localStorage: Array<string>;
        sessionStorage: Array<string>;
    }

    interface GridSettings<Entity> {
        // Configuration options
        autoGenerateColumns?: boolean | undefined;
        autoLoad?: boolean | undefined;
        bodyRowHeight?: string | undefined;
        columnReorder?: boolean | undefined;
        columns?: Array<GridColumn> | undefined;
        dataSource?: any;
        defaultColumnSettings?: GridColumn | undefined;
        detailTemplate?: string | undefined;
        fixedHeader?: boolean | undefined;
        fontSize?: string | undefined;
        grouping?: GridGrouping | undefined;
        headerFilter?: GridHeaderFilter | undefined;
        headerRowHeight?: string | undefined;
        icons?: GridIcons | undefined;
        iconsLibrary?: string | undefined;
        inlineEditing?: GridInlineEditing | undefined;
        keepExpandedRows?: boolean | undefined;
        locale?: string | undefined;
        mapping?: any;
        minWidth?: number | undefined;
        notFoundText?: string | undefined;
        optimisticPersistence?: GridOptimisticPersistence | undefined;
        orderNumberField?: string | undefined;
        pager?: GridPager | undefined;
        paramNames?: GridParamNames | undefined;
        primaryKey?: string | undefined;
        resizableColumns?: boolean | undefined;
        resizeCheckInterval?: number | undefined;
        responsive?: boolean | undefined;
        rowReorder?: boolean | undefined;
        rowReorderColumn?: string | undefined;
        selectionMethod?: string | undefined;
        selectionType?: string | undefined;
        showHiddenColumnsAsDetails?: boolean | undefined;
        title?: string | undefined;
        toolbarTemplate?: string | undefined;
        uiLibrary?: string | undefined;
        width?: number | undefined;
        params?: any;

        // Events
        beforeEmptyRowInsert?: ((e: any, $row: JQuery) => any) | undefined;
        cellDataBound?: ((e: any, $wrapper: JQuery, id: string, column: GridColumn, record: Entity) => any) | undefined;
        cellDataChanged?:
            | ((e: any, $cell: JQuery, column: GridColumn, record: Entity, oldValue: any, newValue: any) => any)
            | undefined;
        columnHide?: ((e: any, column: GridColumn) => any) | undefined;
        columnShow?: ((e: any, column: GridColumn) => any) | undefined;
        dataBinding?: ((e: any, records: Array<Entity>) => any) | undefined;
        dataBound?: ((e: any, records: Array<Entity>, totalRecords: number) => any) | undefined;
        dataFiltered?: ((e: any, records: Array<Entity>) => any) | undefined;
        destroying?: ((e: any) => any) | undefined;
        detailCollapse?: ((e: any, detailWrapper: JQuery, id: string) => any) | undefined;
        detailExpand?: ((e: any, detailWrapper: JQuery, id: string) => any) | undefined;
        initialized?: ((e: any) => any) | undefined;
        pageChanging?: ((e: any, newPage: number) => any) | undefined;
        pageSizeChange?: ((e: any, newPage: number) => any) | undefined;
        resize?: ((e: any, newWidth: number, oldWidth: number) => any) | undefined;
        rowDataBound?: ((e: any, $row: JQuery, id: string, record: Entity) => any) | undefined;
        rowDataChanged?: ((e: any, id: string, record: Entity) => any) | undefined;
        rowRemoving?: ((e: any, $row: JQuery, id: string, record: Entity) => any) | undefined;
        rowSelect?: ((e: any, $row: JQuery, id: string, record: Entity) => any) | undefined;
        rowUnselect?: ((e: any, $row: JQuery, id: string, record: Entity) => any) | undefined;
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
        // get(position: number): Entity; //TODO: rename to getByPosition to avoid conflicts with jquery.get
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
        autoOpen?: boolean | undefined;
        closeButtonInHeader?: boolean | undefined;
        closeOnEscape?: boolean | undefined;
        draggable?: boolean | undefined;
        height?: number | string | undefined;
        locale?: string | undefined;
        maxHeight?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        minWidth?: number | undefined;
        modal?: boolean | undefined;
        resizable?: boolean | undefined;
        scrollable?: boolean | undefined;
        title?: string | undefined;
        uiLibrary?: string | undefined;
        width?: number | undefined;

        // Events
        closed?: ((e: any) => any) | undefined;
        closing?: ((e: any) => any) | undefined;
        drag?: ((e: any) => any) | undefined;
        dragStart?: ((e: any) => any) | undefined;
        dragStop?: ((e: any) => any) | undefined;
        initialized?: ((e: any) => any) | undefined;
        opened?: ((e: any) => any) | undefined;
        opening?: ((e: any) => any) | undefined;
        resize?: ((e: any) => any) | undefined;
        resizeStart?: ((e: any) => any) | undefined;
        resizeStop?: ((e: any) => any) | undefined;
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
        uiLibrary?: string | undefined;
        iconsLibrary?: string | undefined;

        // Events
        change?: ((e: any, state: string) => any) | undefined;
    }

    interface Checkbox extends JQuery {
        // toggle(): Checkbox;
        state(value: string): string | Checkbox;
        destroy(): void;
    }

    // DatePicker
    interface DatePickerIcons {
        rightIcon?: string | undefined;
    }

    interface DatePickerSettings {
        showOtherMonths?: boolean | undefined;
        selectOtherMonths?: boolean | undefined;
        width?: number | undefined;
        minDate?: Date | string | Function | undefined;
        maxDate?: Date | string | Function | undefined;
        format?: string | undefined;
        value?: string | undefined;
        uiLibrary?: string | undefined;
        iconsLibrary?: string | undefined;
        weekStartDay?: number | undefined;
        disableDates?: Array<any> | Function | undefined;
        disableDaysOfWeek?: Array<number> | undefined;
        calendarWeeks?: boolean | undefined;
        keyboardNavigation?: boolean | undefined;
        locale?: string | undefined;
        icons?: DatePickerIcons | undefined;
        size?: string | undefined;
        modal?: boolean | undefined;
        header?: boolean | undefined;
        footer?: boolean | undefined;
        showOnFocus?: boolean | undefined;
        showRightIcon?: boolean | undefined;

        // Events
        change?: ((e: any) => any) | undefined;
        open?: ((e: any) => any) | undefined;
        close?: ((e: any) => any) | undefined;
        select?: ((e: any, type: string) => any) | undefined;
    }

    interface DatePicker extends JQuery {
        close(): DatePicker;
        destroy(): void;
        open(): DatePicker;
        value(value?: string): string | DatePicker;
    }

    // DropDown
    interface DropDownIcons {
        dropdown?: string | undefined;
    }

    interface DropDownSettings {
        dataSource?: any;
        textField?: string | undefined;
        valueField?: string | undefined;
        selectedField?: string | undefined;
        width?: number | undefined;
        maxHeight?: any;
        uiLibrary?: string | undefined;
        iconsLibrary?: string | undefined;
        icons?: DropDownIcons | undefined;
        placeholder?: string | undefined;

        // Events
        change?: ((e: any) => any) | undefined;
        dataBound?: ((e: any) => any) | undefined;
    }

    interface DropDown extends JQuery {
        value(value: string): string | DropDown;
        destroy(): void;
    }

    // Editor
    interface EditorSettings {
        height?: number | string | undefined;
        width?: number | string | undefined;
        uiLibrary?: string | undefined;
        iconsLibrary?: string | undefined;
        locale?: string | undefined;

        // Events
        changing?: ((e: any) => any) | undefined;
        changed?: ((e: any) => any) | undefined;
    }

    interface Editor extends JQuery {
        content(html?: string): string | Editor;
        destroy(): void;
    }

    // TimePicker
    interface TimePickerSettings {
        width?: number | undefined;
        modal?: boolean | undefined;
        header?: boolean | undefined;
        footer?: boolean | undefined;
        format?: string | undefined;
        uiLibrary?: string | undefined;
        value?: string | undefined;
        mode?: string | undefined;
        locale?: string | undefined;
        size?: string | undefined;

        // Events
        change?: ((e: any) => any) | undefined;
        open?: ((e: any) => any) | undefined;
        close?: ((e: any) => any) | undefined;
        select?: ((e: any, type: string) => any) | undefined;
    }

    interface TimePicker extends JQuery {
        close(): TimePicker;
        destroy(): void;
        open(): TimePicker;
        value(value?: string): string | TimePicker;
    }

    // DateTimePicker
    interface DateTimePickerSettings {
        datepicker?: Types.DatePickerSettings | undefined;
        footer?: boolean | undefined;
        format?: string | undefined;
        locale?: string | undefined;
        modal?: boolean | undefined;
        size?: string | undefined;
        uiLibrary?: string | undefined;
        value?: string | undefined;
        width?: number | undefined;

        // Events
        change?: ((e: any) => any) | undefined;
    }

    interface DateTimePicker extends JQuery {
        destroy(): void;
        value(value?: string): string | DateTimePicker;
    }

    // Slider
    interface SliderSettings {
        min?: number | undefined;
        max?: number | undefined;
        uiLibrary?: string | undefined;
        value?: string | undefined;
        width?: number | undefined;

        // Events
        change?: ((e: any) => any) | undefined;
        slide?: ((e: any, value: number) => any) | undefined;
    }

    interface Slider extends JQuery {
        destroy(): void;
        value(value?: string): string | Slider;
    }

    // Tree
    interface TreeIcons {
        expand?: string | undefined;
        collapse?: string | undefined;
    }

    interface TreeParamNames {
        parentId?: string | undefined;
    }

    interface TreeSettings {
        autoLoad?: boolean | undefined;
        selectionType?: string | undefined;
        cascadeSelection?: boolean | undefined;
        dataSource?: any;
        primaryKey?: string | undefined;
        textField?: string | undefined;
        childrenField?: string | undefined;
        hasChildrenField?: string | undefined;
        imageCssClassField?: string | undefined;
        imageUrlField?: string | undefined;
        imageHtmlField?: string | undefined;
        disabledField?: string | undefined;
        width?: number | undefined;
        border?: boolean | undefined;
        uiLibrary?: string | undefined;
        iconsLibrary?: string | undefined;
        icons?: TreeIcons | undefined;

        checkboxes?: boolean | undefined;
        checkedField?: string | undefined;
        cascadeCheck?: boolean | undefined;
        dragAndDrop?: boolean | undefined;
        paramNames?: TreeParamNames | undefined;
        lazyLoading?: boolean | undefined;

        // Events
        initialized?: ((e: any) => any) | undefined;
        dataBinding?: ((e: any) => any) | undefined;
        dataBound?: ((e: any) => any) | undefined;
        select?: ((e: any, node: any, id: string) => any) | undefined;
        unselect?: ((e: any, node: any, id: string) => any) | undefined;
        expand?: ((e: any, node: any, id: string) => any) | undefined;
        collapse?: ((e: any, node: any, id: string) => any) | undefined;
        enable?: ((e: any, node: any, id: string) => any) | undefined;
        disable?: ((e: any, node: any, id: string) => any) | undefined;
        destroying?: ((e: any) => any) | undefined;
        nodeDataBound?: ((e: any, node: any, id: string) => any) | undefined;
        checkboxChange?: ((e: any, node: any, record: any, state: string) => any) | undefined;
        nodeDrop?: ((e: any, id: string, parentId: string, orderNumber: number) => any) | undefined;
    }

    interface Tree extends JQuery {
        reload(params: any): any;
        render(response: any): any;
        addNode(data: any, parentNode: any, position: number): Tree;
        removeNode(node: any): Tree;
        updateNode(id: string, record: any): Tree;
        destroy(): void;
        expand(node: any, cascade: boolean): Tree;
        collapse(node: any, cascade: boolean): Tree;
        expandAll(): Tree;
        collapseAll(): Tree;
        getDataById(id: string): any;
        getDataByText(text: string): any;
        getNodeById(id: string): any;
        getNodeByText(id: string): any;
        getAll(): Array<any>;
        // select(node: any) : Tree;
        unselect(node: any): Tree;
        selectAll(): Tree;
        unselectAll(): Tree;
        getSelections(): Array<string>;
        getChildren(node: any, cascade?: boolean): Array<any>;
        enable(node: any, cascade?: boolean): Tree;
        disable(node: any, cascade?: boolean): Tree;
        enableAll(): Tree;
        disableAll(): Tree;
        // parents(id: string): Array<string>;

        getCheckedNodes(): Array<string>;
        checkAll(): Tree;
        uncheckAll(): Tree;
        check(node: any): Tree;
        uncheck(node: any): Tree;
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
