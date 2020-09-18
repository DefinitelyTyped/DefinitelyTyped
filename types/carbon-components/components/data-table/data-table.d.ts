declare const DataTable_base: any;
declare class DataTable extends DataTable_base {
    constructor(element: any, options: any);
    _handleDocumentClick(evt: any): void;
    activateSearch(container: any): void;
    deactivateSearch(container: any, evt: any): void;
    _sortToggle: (detail: any) => void;
    _selectToggle: (detail: any) => void;
    _selectAllToggle: ({ element }: {
        element: any;
    }) => void;
    _actionBarCancel: () => void;
    _actionBarToggle: (toggleOn: any) => void;
    _rowExpandToggle: ({ element, forceExpand }: {
        element: any;
        forceExpand: any;
    }) => void;
    _rowExpandToggleAll: ({ element }: {
        element: any;
    }) => void;
    _expandableHoverToggle: (evt: any) => void;
    _toggleState: (element: any, evt: any) => void;
    _keydownHandler: (evt: any) => void;
    _changeState(detail: any, callback: any): void;
    refreshRows: () => void;
    static components: WeakMap<object, any>;
    static eventHandlers: {
        expand: string;
        expandAll: string;
        sort: string;
        select: string;
        'select-all': string;
        'action-bar-cancel': string;
    };
    static get options(): {
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
    };
}
export default DataTable;
