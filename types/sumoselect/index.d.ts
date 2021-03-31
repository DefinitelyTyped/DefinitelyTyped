// Type definitions for sumoselect 3.0
// Project: https://github.com/HemantNegi/jquery.sumoselect#readme
// Definitions by: nagamejun <https://github.com/nagamejun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

type SumoSelectEvents = 'sumo:opening' | 'sumo:opened' | 'sumo:closing' | 'sumo:closed';

type Option = Partial<{
    /**
     * @default 'Select Here'
     */
    placeholder: string;
    /**
     * @default 3
     */
    csvDispCount: number;
    /**
     * @default '{0} Selected'
     */
    captionFormat: string;
    /**
     * @default '{0} all selected!'
     */
    captionFormatAllSelected: string;
    /**
     * @default 400
     */
    floatWidth: number;
    /**
     * @default false
     */
    forceCustomRendering: boolean;
    /**
     * @default ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk']
     */
    nativeOnDevice: string[];
    /**
     * @default false
     */
    outputAsCSV: boolean;
    /**
     * @default ','
     */
    csvSepChar: string;
    /**
     * @default false
     */
    okCancelInMulti: boolean;
    /**
     * @default false
     */
    isClickAwayOk: boolean;
    /**
     * @default true
     */
    triggerChangeCombined: boolean;
    /**
     * @default false
     */
    selectAll: boolean;
    /**
     * @default false
     */
    search: boolean;
    /**
     * @default 'Search...'
     */
    searchText: string;
    /**
     * @default (haystack: string, needle: string) => boolean
     */
    searchFn(haystack: string, needle: string): boolean;
    /**
     * @default 'No matches for "{0}"
     */
    noMatch: string;
    /**
     * @default ''
     */
    prefix: string;
    /**
     * @default ['OK', 'Cancel', 'Select All']
     */
    locale: string[];
    /**
     * @default false
     */
    up: boolean;
    /**
     * @default true
     */
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
