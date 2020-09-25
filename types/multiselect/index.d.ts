// Type definitions for multiselect 0.9
// Project: https://github.com/lou/multi-select
// Definitions by: nagamejun <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

export type Options = Partial<{
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

export interface AddOption {
    value: string;
    text: string;
    index?: number;
    nested?: string;
}

export type Method = 'select_all' | 'deselect_all' | 'refresh';

declare global {
    interface JQuery {
        multiSelect(methodOrOptions?: Method | Options): JQuery;
        multiSelect(method: 'addOption', addOption: AddOption): JQuery;
        multiSelect(method: 'select' | 'deselect', options?: string | any[]): JQuery;
    }
}
