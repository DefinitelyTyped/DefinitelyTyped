// Type definitions for Select2 4.0
// Project: http://ivaynberg.github.com/select2/, https://select2.org
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="jquery"/>

export as namespace Select2;

// --------------------------------------------------------------------------
// For jQuery v1 and v2 backward compatibility
// --------------------------------------------------------------------------

export type Sub<O extends string, D extends string> =
    {[K in O]: (Record<D, never> & Record<string, K>)[K]}[O];

/**
 * Same as jQuery v3 `JQuery.AjaxSettingsBase`.
 */
export type JQueryAjaxSettingsBase =
    Pick<JQueryAjaxSettings, Sub<keyof JQueryAjaxSettings, "url">>;

/**
 * Same as jQuery v3 `JQuery.EventHandlerBase`.
 */
export type JQueryEventHandlerBase<TContext, T> =
    (this: TContext, t: T, ...args: any[]) => void | false;

/**
 * Same as jQuery v3 `JQuery.PlainObject`.
 */
export interface PlainObject<T = any> {
    [key: string]: T;
}

// --------------------------------------------------------------------------
// Some Interfaces
// --------------------------------------------------------------------------

export interface Select2 {
    $container: JQuery;
    $dropdown: JQuery;
    $selection: JQuery;
    $results: JQuery;
    dropdown: any;
    id: string;
    options: { options: Options };
    results: any;
    selection: any;
}

export interface QueryOptions {
    term?: string;
    page?: number;
}

export interface SearchOptions {
    term: string;
}

export interface DataFormat {
    id: number | string;
    text: string;
    selected?: boolean;
    disabled?: boolean;
}

export interface GroupedDataFormat {
    text: string;
    children?: DataFormat[];

    id?: undefined;
}

export interface ProcessedResult<Result = DataFormat | GroupedDataFormat> {
    results: Result[];
    pagination?: {more: boolean};
}

export interface LoadingData {
    loading: boolean;
    text: string;

    id?: undefined;
    element?: undefined;
}

export interface OptGroupData {
    children: OptionData[];
    disabled: boolean;
    element: HTMLOptGroupElement;
    selected: boolean;
    text: string;
    title: string;

    loading?: undefined;
}

export interface OptionData {
    disabled: boolean;
    element: HTMLOptionElement;
    id: string;
    selected: boolean;
    text: string;
    title: string;

    loading?: undefined;
    children?: undefined;
}

export interface IdTextPair {
    id: string;
    text: string;

    loading?: undefined;
    element?: undefined;
}

export interface TranslationArg {
    input: string;
    minimum: number;
    maximum: number;
}

export interface Translation {
    errorLoading?: () => string;
    inputTooLong?: (arg: TranslationArg) => string;
    inputTooShort?: (arg: TranslationArg) => string;
    loadingMore?: () => string;
    maximumSelected?: (arg: TranslationArg) => string;
    noResults?: () => string;
    searching?: () => string;
}

export interface DataParams {
    data: OptionData; // TODO: must be data source
    originalEvent: BaseJQueryEventObject;
}

export interface IngParams {
    name: "select" | "open" | "close" | "unselect";
    prevented: boolean;
}

export interface Event<TElement, T> extends BaseJQueryEventObject {
    params: T;
}

export interface Trigger {
    type: "select2:select";
    params: {
        data: IdTextPair;
    };
}

// --------------------------------------------------------------------------
// Ajax Option
// --------------------------------------------------------------------------

export interface AjaxOptions<Result = DataFormat | GroupedDataFormat, RemoteResult = any> extends JQueryAjaxSettingsBase {
    delay?: number;
    url?: string | ((params: QueryOptions) => string);
    data?: (params: QueryOptions) => PlainObject;
    transport?: (settings: JQueryAjaxSettings, success?: (data: RemoteResult) => undefined, failure?: () => undefined) => void;
    processResults?: (data: RemoteResult, params: QueryOptions) => ProcessedResult<Result>;
}

// --------------------------------------------------------------------------
// Built-in AMD Loader
// --------------------------------------------------------------------------

export interface Select2Require {
    config(config: Select2RequireConfig): Select2Require;
    (module: string): any;
    (modules: string[]): void;
    (modules: string[], ready: (...modules: any[]) => void): void;
    (modules: string[], ready: (...modules: any[]) => void, errback: (err: any) => void): void;
}

export interface Select2RequireConfig {
    map?: {
        [id: string]: {
            [id: string]: string;
        };
    };
    config?: { [id: string]: {}; };
    deps?: string[];
    callback?: (...modules: any[]) => void;
}

// --------------------------------------------------------------------------
// Options
// --------------------------------------------------------------------------

export interface Options<Result = DataFormat | GroupedDataFormat, RemoteResult = any> {
    ajax?: AjaxOptions<Result, RemoteResult>;
    allowClear?: boolean;
    amdBase?: string;
    amdLanguageBase?: string;
    closeOnSelect?: boolean;
    containerCss?: any;
    containerCssClass?: string;
    data?: DataFormat[] | GroupedDataFormat[];
    dataAdapter?: any;
    debug?: boolean;
    dir?: "ltr" | "rtl";
    disabled?: boolean;
    dropdownAdapter?: any;
    dropdownAutoWidth?: boolean;
    dropdownCss?: any;
    dropdownCssClass?: string;
    dropdownParent?: JQuery;
    escapeMarkup?: (markup: string) => string;
    initSelection?: (element: JQuery, callback: (data: any) => void) => void;
    language?: string | Translation;
    matcher?: (params: SearchOptions, data: OptGroupData | OptionData) => OptGroupData | OptionData | null;
    maximumInputLength?: number;
    maximumSelectionLength?: number;
    minimumInputLength?: number;
    minimumResultsForSearch?: number;
    multiple?: boolean;
    placeholder?: string | IdTextPair;
    resultsAdapter?: any;
    selectionAdapter?: any;
    selectOnClose?: boolean;
    sorter?: (data: Array<OptGroupData | OptionData | IdTextPair>) => Array<OptGroupData | OptionData | IdTextPair>;
    tags?: boolean;
    templateResult?: (result: LoadingData | Result) => string | JQuery | null;
    templateSelection?: (selection: IdTextPair | LoadingData | Result) => string | JQuery;
    theme?: string;
    tokenizer?: (input: string, selection: any[], selectCallback: () => void, options: Options) => string;
    tokenSeparators?: string[];
    width?: string;

    // Not in https://select2.org/configuration/options-api
    createTag?: (params: SearchOptions) => IdTextPair | null;
    insertTag?: (data: Array<OptionData | IdTextPair>, tag: IdTextPair) => void;
}

// --------------------------------------------------------------------------
// jQuery And Select2 Plugin
// --------------------------------------------------------------------------

export interface Select2Plugin<TElement = HTMLElement>  {
    amd: { require: Select2Require; };

    defaults: {
        set: (key: string, value: any) => void;
        reset: () => void;
    };

    (): JQuery<TElement>;
    // tslint:disable-next-line:no-unnecessary-generics
    <Result = DataFormat | GroupedDataFormat, RemoteResult = any>(options: Options<Result, RemoteResult>): JQuery<TElement>;

    /**
     * Get the data object of the current selection
     */
    (method: "data"): OptionData[];
    /**
     * Reverts changes to DOM done by Select2. Any selection done via Select2 will be preserved.
     */
    (method: "destroy"): JQuery<TElement>;
    /**
     * Opens the dropdown
     */
    (method: "open"): JQuery<TElement>;
    /**
     * Closes the dropdown
     */
    (method: "close"): JQuery<TElement>;
}

declare global {
    interface JQuery<TElement = HTMLElement> {
        select2: Select2Plugin<TElement>;
        data(key: "select2"): Select2;

        trigger(events: Trigger): void;

        // TODO: events "change" and "change.select2"
        on(events: "select2:closing", handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this;
        on(events: "select2:close", handler?: JQueryEventHandlerBase<TElement, Event<TElement, {}>>): this;
        on(events: "select2:opening", handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this;
        on(events: "select2:open", handler?: JQueryEventHandlerBase<TElement, Event<TElement, {}>>): this;
        on(events: "select2:selecting", handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this;
        on(events: "select2:select", handler?: JQueryEventHandlerBase<TElement, Event<TElement, DataParams>>): this;
        on(events: "select2:unselecting", handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this;
        on(events: "select2:unselect", handler?: JQueryEventHandlerBase<TElement, Event<TElement, DataParams>>): this;
    }
}
