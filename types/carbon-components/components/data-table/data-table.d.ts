interface DataTableOptions {
    selectorInit: string;
    selectorToolbar: string;
    selectorActions: string;
    selectorCount: string;
    selectorActionCancel: string;
    selectorCheckbox: string;
    selectorExpandHeader: string;
    selectorExpandCells: string;
    selectorExpandableRows: string;
    selectorParentRows: string;
    selectorChildRow: string;
    selectorTableBody: string;
    selectorTableSort: string;
    selectorTableSelected: string;
    selectorToolbarSearchContainer: string;
    selectorSearchMagnifier: string;
    selectorSearchInput: string;
    classExpandableRow: string;
    classExpandableRowHidden: string;
    classExpandableRowHover: string;
    classTableSortAscending: string;
    classTableSortActive: string;
    classToolbarSearchActive: string;
    classActionBarActive: string;
    classTableSelected: string;
    eventBeforeExpand: string;
    eventAfterExpand: string;
    eventBeforeExpandAll: string;
    eventAfterExpandAll: string;
    eventBeforeSort: string;
    eventAfterSort: string;
    eventTrigger: string;
    eventParentContainer: string;
}

interface Detail {
    element: HTMLElement;
}

declare const DataTable_base: any;
declare class DataTable extends DataTable_base {
    constructor(element: HTMLElement, options?: Partial<DataTableOptions>);
    _handleDocumentClick(evt: MouseEvent): void;
    activateSearch(container: HTMLElement): void;
    deactivateSearch(container: HTMLElement, evt: MouseEvent): void;
    _sortToggle: (detail: Detail) => void;
    _selectToggle: (detail: Detail) => void;
    _selectAllToggle: ({ element }: { element: HTMLElement }) => void;
    _actionBarCancel: () => void;
    _actionBarToggle: (toggleOn: boolean) => void;
    _rowExpandToggle: ({ element, forceExpand }: { element: HTMLElement; forceExpand: boolean }) => void;
    _rowExpandToggleAll: ({ element }: { element: HTMLElement }) => void;
    _expandableHoverToggle: (evt: MouseEvent) => void;
    _toggleState: (element: HTMLElement, evt: MouseEvent) => void;
    _keydownHandler: (evt: KeyboardEvent) => void;
    _changeState(detail: Detail, callback: () => void): void;
    refreshRows: () => void;
    static components: WeakMap<object, any>;
    static eventHandlers: {
        expand: string;
        expandAll: string;
        sort: string;
        select: string;
        "select-all": string;
        "action-bar-cancel": string;
    };
    static get options(): DataTableOptions;
}
export default DataTable;
