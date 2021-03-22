// Type definitions for multiselect 0.9
// Project: https://github.com/lou/multi-select
// Definitions by: nagamejun <https://github.com/nagamejun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

type Options = Partial<{
    afterInit: (...args: any[]) => void;
    afterSelect: (...args: any[]) => void;
    afterDeselect: (...args: any[]) => void;
    selectableHeader: string | HTMLElement;
    selectionHeader: string | HTMLElement;
    selectableFooter: string | HTMLElement;
    selectionFooter: string | HTMLElement;
    disabledClass: string;
    selectableOptgroup: boolean;
    keepOrder: boolean;
    dblClick: boolean;
    cssClass: string;
}>;

interface AddOption {
    value: string;
    text: string;
    index?: number;
    nested?: string;
}

type Method = 'select_all' | 'deselect_all' | 'refresh';

interface JQuery {
    multiSelect(methodOrOptions?: Method | Options): JQuery;
    multiSelect(method: 'addOption', addOption: AddOption): JQuery;
    multiSelect(method: 'select' | 'deselect', options?: string | any[]): JQuery;
}
