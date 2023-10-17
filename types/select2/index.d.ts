/// <reference types="jquery"/>

export as namespace Select2;

// --------------------------------------------------------------------------
// For jQuery v1 and v2 backward compatibility
// --------------------------------------------------------------------------

export type Sub<O extends string, D extends string> = { [K in O]: (Record<D, never> & Record<string, K>)[K] }[O];

/**
 * Same as jQuery v3 `JQuery.AjaxSettingsBase`.
 */
export type JQueryAjaxSettingsBase = Pick<JQueryAjaxSettings, Sub<keyof JQueryAjaxSettings, "url">>;

/**
 * Same as jQuery v3 `JQuery.EventHandlerBase`.
 */
export type JQueryEventHandlerBase<TContext, T> = (this: TContext, t: T, ...args: any[]) => void | false;

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
    term?: string | undefined;
    page?: number | undefined;
}

export interface SearchOptions {
    term: string;
}

export interface DataFormat {
    id: number | string;
    text: string;
    selected?: boolean | undefined;
    disabled?: boolean | undefined;
}

export interface GroupedDataFormat {
    text: string;
    children?: DataFormat[] | undefined;

    id?: undefined;
}

export interface ProcessedResult<Result = DataFormat | GroupedDataFormat> {
    results: Result[];
    pagination?: { more: boolean } | undefined;
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
    errorLoading?: (() => string) | undefined;
    inputTooLong?: ((arg: TranslationArg) => string) | undefined;
    inputTooShort?: ((arg: TranslationArg) => string) | undefined;
    loadingMore?: (() => string) | undefined;
    maximumSelected?: ((arg: TranslationArg) => string) | undefined;
    noResults?: (() => string) | undefined;
    searching?: (() => string) | undefined;
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

export interface AjaxOptions<Result = DataFormat | GroupedDataFormat, RemoteResult = any>
    extends JQueryAjaxSettingsBase
{
    delay?: number | undefined;
    url?: string | ((params: QueryOptions) => string) | undefined;
    data?: ((params: QueryOptions) => PlainObject | string) | undefined;
    transport?:
        | ((settings: JQueryAjaxSettings, success: (data: RemoteResult) => undefined, failure: () => undefined) => void)
        | undefined;
    processResults?: ((data: RemoteResult, params: QueryOptions) => ProcessedResult<Result>) | undefined;
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
    } | undefined;
    config?: { [id: string]: {} } | undefined;
    deps?: string[] | undefined;
    callback?: ((...modules: any[]) => void) | undefined;
}

// --------------------------------------------------------------------------
// Options
// --------------------------------------------------------------------------

export interface Options<Result = DataFormat | GroupedDataFormat, RemoteResult = any> {
    ajax?: AjaxOptions<Result, RemoteResult> | undefined;
    allowClear?: boolean | undefined;
    amdBase?: string | undefined;
    amdLanguageBase?: string | undefined;
    closeOnSelect?: boolean | undefined;
    containerCss?: any;
    containerCssClass?: string | undefined;
    data?: DataFormat[] | GroupedDataFormat[] | undefined;
    dataAdapter?: any;
    debug?: boolean | undefined;
    dir?: "ltr" | "rtl" | undefined;
    disabled?: boolean | undefined;
    dropdownAdapter?: any;
    dropdownAutoWidth?: boolean | undefined;
    dropdownCss?: any;
    dropdownCssClass?: string | undefined;
    dropdownParent?: HTMLElement | JQuery | string | undefined;
    escapeMarkup?: ((markup: string) => string) | undefined;
    initSelection?: ((element: JQuery, callback: (data: any) => void) => void) | undefined;
    language?: string | Translation | undefined;
    matcher?:
        | ((params: SearchOptions, data: OptGroupData | OptionData) => OptGroupData | OptionData | null)
        | undefined;
    maximumInputLength?: number | undefined;
    maximumSelectionLength?: number | undefined;
    minimumInputLength?: number | undefined;
    minimumResultsForSearch?: number | undefined;
    multiple?: boolean | undefined;
    placeholder?: string | IdTextPair | undefined;
    resultsAdapter?: any;
    selectionAdapter?: any;
    selectOnClose?: boolean | undefined;
    sorter?:
        | ((data: Array<OptGroupData | OptionData | IdTextPair>) => Array<OptGroupData | OptionData | IdTextPair>)
        | undefined;
    tags?: boolean | undefined;
    templateResult?: ((result: LoadingData | Result) => string | JQuery | null) | undefined;
    templateSelection?:
        | ((selection: IdTextPair | LoadingData | Result, container: JQuery) => string | JQuery)
        | undefined;
    theme?: string | undefined;
    tokenizer?: ((input: string, selection: any[], selectCallback: () => void, options: Options) => string) | undefined;
    tokenSeparators?: string[] | undefined;
    width?: string | undefined;

    // Not in https://select2.org/configuration/options-api
    createTag?: ((params: SearchOptions) => (IdTextPair & Record<string, any>) | null) | undefined;
    insertTag?: ((data: Array<OptionData | IdTextPair>, tag: IdTextPair) => void) | undefined;
}

// --------------------------------------------------------------------------
// jQuery And Select2 Plugin
// --------------------------------------------------------------------------

export interface Select2Plugin<TElement = HTMLElement> {
    amd: { require: Select2Require };

    defaults: {
        set: (key: string, value: any) => void;
        reset: () => void;
    };

    (): JQuery<TElement>;
    <Result = DataFormat | GroupedDataFormat, RemoteResult = any>(
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        options: Options<Result, RemoteResult>,
    ): JQuery<TElement>;

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
