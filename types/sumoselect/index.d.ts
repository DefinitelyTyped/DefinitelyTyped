// Type definitions for sumoselect 3.0
// Project: https://github.com/HemantNegi/jquery.sumoselect#readme
// Definitions by: nagamejun <https://github.com/nagamejun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

type SumoSelectEvents = 'sumo:opening' | 'sumo:opened' | 'sumo:closing' | 'sumo:closed';

type Option = Partial<{
    placeholder: string;
    csvDispCount: number;
    captionFormat: string;
    captionFormatAllSelected: string;
    floatWidth: number;
    forceCustomRendering: boolean;
    nativeOnDevice: string[];
    outputAsCSV: boolean;
    csvSepChar: string;
    okCancelInMulti: boolean;
    isClickAwayOk: boolean;
    triggerChangeCombined: boolean;
    selectAll: boolean;
    search: boolean;
    searchText: string;
    noMatch: string;
    prefix: string;
    locale: string[];
    up: boolean;
    showTitle: boolean;
}>;

interface Methods {
    unload(): HTMLSelectElement;
    add(value: string, index?: number): HTMLSelectElement;
    add(value: string, text?: string, index?: number): HTMLSelectElement;
    remove(index: number): void;
    selectItem(indexOrValue: number | string): void;
    unSelectItem(indexOrValue: number | string): void;
    disableItem(index: number): void;
    enableItem(index: number): void;
    selectAll(): void;
    unSelectAll(): void;
    enable(): this;
    disable(): this;
    reload(): HTMLSelectElement;
}

interface JQuery {
    SumoSelect(option?: Option): JQuery;
    on(events: SumoSelectEvents, handler: (event: JQuery.Event) => any): JQuery;
}

interface HTMLElement {
    sumo: Methods;
}
