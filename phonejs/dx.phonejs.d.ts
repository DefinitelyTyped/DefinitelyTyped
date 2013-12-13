// Type definitions for PhoneJS
// Project: http://phonejs.devexpress.com
// Definitions by: DevExpress Inc. <http://devexpress.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

declare module DevExpress {
    export function abstract(): void;
    interface Endpoint {
        local?: string;
        production: string;
    }
    class EndpointSelector {
        constructor(config: { [key: string]: Endpoint });
        urlFor(key: string): string;
    }
    export interface ActionOptions {
        context?: Object;
        component?: any;
        beforeExecute? (e: ActionExecuteArgs): void;
        afterExecute? (e: ActionExecuteArgs): void;
    }
    export interface ActionExecuteArgs {
        action: any;
        args: any[];
        context: any;
        component: any;
        canceled: boolean;
        handled: boolean;
    }
    export class Action {
        constructor(action?: any, config?: ActionOptions);
        execute(): any;
    }
    export module devices {
        interface Device {
            phone?: boolean;
            tablet?: boolean;
            android?: boolean;
            ios?: boolean;
            win8?: boolean;
            tizen?: boolean;
            platform?: string;
            deviceType?: string;
        }
        export function current(): Device;
        export function current(device: Device): Device;
        export var real: Device;
    }
}
declare module DevExpress.data {
    export interface ErrorHandler { (e: Error): void; }
    export interface EntityOptions { key: any; keyType: any; }
    export interface Getter { (obj: any, options?: any): any; }
    export interface Setter { (obj: any, value: any, options?: any): void; }
    export interface QueryOptions {
        errorHandler?: ErrorHandler;
        requireTotalCount?: boolean;
    }
    export interface ODataQueryOptions extends QueryOptions {
        adapter?: any;
    }
    interface IQuery {
        enumerate(): JQueryDeferred<Array<any>>;
        count(): JQueryDeferred<number>;
        slice(skip: number, take?: number): IQuery;
        sortBy(field: string[]): IQuery;
        sortBy(field: Getter[]): IQuery;
        sortBy(field: { field: string; desc?: boolean }[]): IQuery;
        sortBy(field: { field: Getter; desc?: boolean }[]): IQuery;
        thenBy(field: string[]): IQuery;
        thenBy(field: Getter[]): IQuery;
        thenBy(field: { field: string; desc?: boolean }[]): IQuery;
        thenBy(field: { field: Getter; desc?: boolean }[]): IQuery;
        filter(field: string, operator: string, value: any): IQuery;
        filter(field: string, value: any): IQuery;
        filter(criteria: any[]): IQuery;
        select(field: string): IQuery;
        select(field: string[]): IQuery;
        select(...field: string[]): IQuery;
        select(field: Getter): IQuery;
        select(field: Getter[]): IQuery;
        select(...field: Getter[]): IQuery;
        groupBy(field: string[]): IQuery;
        groupBy(field: Getter[]): IQuery;
        groupBy(field: { field: string; desc?: boolean }[]): IQuery;
        groupBy(field: { field: Getter; desc?: boolean }[]): IQuery;
        sum(getter?: string): JQueryDeferred<number>;
        min(getter?: string): JQueryDeferred<any>;
        max(getter?: string): JQueryDeferred<any>;
        avg(getter?: string): JQueryDeferred<any>;
        aggregate(step: number): JQueryDeferred<any>;
        aggregate(seed: number, step: (accumulator: any, current: any) => any, finalize?: (accumulator: any) => any): JQueryDeferred<any>;
    }
    export interface ArrayQuery extends IQuery {
        toArray(): Array<any>;
    }
    export interface RemoteQuery extends IQuery { /*todo: exec() ? */ }
    export function base64_encode(input: string): string;
    export function base64_encode(input: any[]): string;
    export function query(items?: any[]): IQuery;
    export var queryImpl: {
        remote: (url: string, queryOptions: QueryOptions) => RemoteQuery;
        array: (iter: Array<any>, queryOptions: QueryOptions) => ArrayQuery;
    };
    export class Guid {
        constructor(value?: string);
        constructor(value?: any);
        toString(): string;
        valueOf(): string;
        toJSON(): string;
    }
    export class EdmLiteral {
        constructor(value: any);
        valueOf(): any;
    }
    export module utils {
        export function normalizeSortingInfo(info: string): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: string[]): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: Getter): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: Getter[]): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { field: string; dir?: string }): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { field: string; dir?: string }[]): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { field: string; desc?: boolean }): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { field: string; desc?: boolean }[]): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { selector: string; dir?: string }): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { selector: string; dir?: string }[]): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { selector: string; desc?: boolean }): Array<{ selector: string; desc?: boolean }>;
        export function normalizeSortingInfo(info: { selector: string; desc?: boolean }[]): Array<{ selector: string; desc?: boolean }>;
        export function normalizeBinaryCriterion(criteria: Array<any>): Array<any>;
        export function keysEqual(key1: any, key2: any): boolean;
        export function keysEqual(keyExpr: any, key1: any, key2: any): boolean;
        export function toComparable(value: Date, caseSensitive?: boolean): number;
        export function toComparable(value: Guid, caseSensitive?: boolean): string;
        export function toComparable(value: string, caseSensitive?: boolean): string;
        export function compileGetter(): Getter;
        export function compileGetter(expr: any[]): Getter;
        export function compileGetter(expr: string): Getter;
        export function compileGetter(expr: "this"): Getter;
        export function compileGetter(expr: Getter): Getter;
        export function compileSetter(expr: string): Setter;
        export module odata {
            export function sendRequest(request: JQueryXHR, requestOptions?: JQueryAjaxSettings): any;
            export function serializePropName(propName: EdmLiteral): string;
            export function serializePropName(propName: string): string;
            export function serializeValue(value: Date): string;
            export function serializeValue(value: Guid): string;
            export function serializeValue(value: string): string;
            export function serializeValue(value: "string"): string;
            export function serializeValue(value: EdmLiteral): string;
            export function serializeKey(key: any): string;
            export function serializeKey(key: Date): string;
            export function serializeKey(key: Guid): string;
            export function serializeKey(key: string): string;
            export function serializeKey(key: "string"): string;
            export function serializeKey(key: EdmLiteral): string;
            export var keyConverters: {
                String(value: any): string;
                Guid(value: any): Guid;
                Int32(value: any): number;
                Int64(value: any): EdmLiteral;
            };
        }
    }
    export module queryAdapters {
        export function odata(queryOptions: ODataQueryOptions): RemoteQuery;
    }
    export interface DataSourceOptions {
        map? (item: any): any;
        postProcess? (result: any[]): any;
        pageSize: number;
        paginate: boolean;
    }
    export class DataSource {
        public changed: JQueryCallback;
        public loadError: JQueryCallback;
        public loadingChanged: JQueryCallback;
        constructor(options?: Store);
        constructor(options?: string);
        constructor(options?: Array<any>);
        constructor(options?: { store: Store });
        constructor(options?: CustomStoreOptions);
        constructor(options?: { store: Array<any> });
        constructor(options?: { store: { type: string } });
        constructor(options?: { load(options?: LoadOptions): JQueryXHR; });
        constructor(options?: { load(options?: LoadOptions): Array<any>; });
        constructor(options?: { load(options?: LoadOptions): JQueryDeferred<any>; });
        constructor(options?: DataSourceOptions);
        loadOptions(): { [key: string]: any };
        items(): Array<any>;
        store(): data.Store;
        isLastPage(): boolean;
        pageIndex(newIndex?: number): number;
        sort(expr: any[]): any[];
        group(expr: any[]): any[];
        filter(expr: any[]): any[];
        select(expr: string[]): string[];
        searchValue(value?: string): string;
        searchOperation(op?: string): string;
        searchExpr(selector: string): string;
        key(): any;
        isLoaded(): boolean;
        isLoading(): boolean;
        totalCount(): number;
        load(): JQueryDeferred<any>;
        dispose(): void;
    }
    export interface StoreOptions {
        key?: any;
        errorHandler?: ErrorHandler;
        loaded?: JQueryCallback;
        loading?: JQueryCallback;
        modified?: JQueryCallback;
        modifying?: JQueryCallback;
        inserted?: JQueryCallback;
        inserting?: JQueryCallback;
        updated?: JQueryCallback;
        updating?: JQueryCallback;
        removed?: JQueryCallback;
        removing?: JQueryCallback;
    }
    export interface LoadOptions extends QueryOptions {
        skip?: number;
        take?: number;
        sort?: any;
        select?: any;
        filter?: any;
        group?: any;
    }
    export class Store {
        loaded: JQueryCallback;
        loading: JQueryCallback;
        modified: JQueryCallback;
        modifying: JQueryCallback;
        inserted: JQueryCallback;
        inserting: JQueryCallback;
        updated: JQueryCallback;
        updating: JQueryCallback;
        removed: JQueryCallback;
        removing: JQueryCallback;
        constructor(options?: StoreOptions);
        key(): any;
        keyOf(obj: any): any;
        load(options?: LoadOptions): JQueryDeferred<any[]>;
        createQuery(options?: QueryOptions): IQuery;
        totalCount(options?: {
            filter?: any[];
            group?: string[];
        }): JQueryDeferred<number>;
        byKey(key: any, extraOptions?: {
            expand?: string[]
        }): JQueryDeferred<any>;
        remove(key: any): JQueryDeferred<any>;
        insert(values: any): JQueryDeferred<any>;
        update(key: any, values: any): JQueryDeferred<any>;
    }
    export interface CustomStoreOptions extends StoreOptions {
        load? (options?: LoadOptions): any;
        byKey? (key: any): any;
        insert? (values: any): any;
        update? (key: any, values: any): any;
        remove? (key: any): any;
        totalCount? (options?: {
            filter?: any[];
            group?: string[];
        }): any;
    }
    export class CustomStore extends Store {
        constructor(options?: CustomStoreOptions);
    }
    export interface ArrayStoreOptions extends StoreOptions {
        data?: Array<any>
    }
    export class ArrayStore extends Store {
        constructor(options?: Array<any>);
        constructor(options?: ArrayStoreOptions);
    }
    export interface LocalStoreOptions extends ArrayStoreOptions {
        name: string;
    }
    export class LocalStore extends ArrayStore {
        constructor(options?: string);
        constructor(options?: LocalStoreOptions);
        clear(): void;
    }
    export interface ODataStoreOptions extends StoreOptions {
        url?: string;
        name?: string;
        keyType?: string;
        jsonp?: boolean;
        withCredentials?: boolean;
    }
    export class ODataStore extends Store {
        constructor(options?: ODataStoreOptions);
    }
    export interface ODataContextOptions {
        url: string;
        jsonp?: boolean;
        withCredentials?: boolean;
        errorHandler?: ErrorHandler;
        beforeSend?: () => any;
        entities?: Array<any>;
    }
    export class ODataContext {
        constructor(options?: ODataContextOptions);
        get(operationName: string, params: { [key: string]: any }): JQueryDeferred<Array<any>>;
        invoke(operationName: string, params: { [key: string]: any }, httpMethod?: string): JQueryDeferred<Array<any>>;
        objectLink(entityAlias: string, key: any): { __metadata: { uri: string }; };
    }
}
declare module DevExpress.framework {
    export interface dxViewOptions {
        name: string;
        title?: string;
        layout?: string;
    }
    export class dxView extends ui.Component {
        constructor(options?: dxViewOptions);
    }
    export interface dxLayoutOptions {
        name: string;
        controller: string;
    }
    export class dxLayout extends ui.Component {
        constructor(options?: dxLayoutOptions);
    }
    export interface dxViewPlaceholderOptions {
        viewName: string;
    }
    export class dxViewPlaceholder extends ui.Component {
        constructor(options?: dxLayoutOptions);
    }
    export interface dxTransitionOptions {
        name: string;
        type: string;
    }
    export class dxTransition extends ui.Component {
        constructor(options?: dxLayoutOptions);
    }
    export interface dxContentPlaceholderOptions {
        name: string;
        transition: string;
    }
    export class dxContentPlaceholder extends ui.Component {
        constructor(options?: dxLayoutOptions);
    }
    export interface dxContentOptions {
        targetPlaceholder: string;
    }
    export class dxContent extends ui.Component {
        constructor(options?: dxLayoutOptions);
    }
    export interface dxCommandOptions extends ui.ComponentOptions {
        id: string;
        action?: any;
        icon?: string;
        title?: string;
        iconSrc?: string;
        visible?: boolean;
    }
    export class dxCommand extends ui.Component {
        public beforeExecute: JQueryCallback;
        public afterExecute: JQueryCallback;
        constructor(element: JQuery, options?: dxCommandOptions);
        constructor(element: Element, options?: dxCommandOptions);
        execute(): void;
    }
    export class dxCommandContainer extends ui.Component {
        constructor(options: ui.ComponentOptions);
        constructor(element: JQuery, options?: ui.ComponentOptions);
        constructor(element: Element, options?: ui.ComponentOptions);
    }
    export interface CommandMap {
        [containerId: string]: { commands: any[]; defaults?: any; }
    }
    export class CommandMapping {
        constructor();
        static defaultMapping: CommandMap;
        mapCommands(containerId: string, commandMappings: any[]): CommandMapping;
        unmapCommands(containerId: string, commandIds: string[]): void;
        getCommandMappingForContainer(commandId: string, containerId: string): any;
        load(config: CommandMap): CommandMapping;
    }
    interface IViewCache {
        setView(key: string, viewInfo: any): void;
        removeView(key: string): any;
        hasView(viewInfo: any): boolean;
        getView(key: string): any;
        clear(): void;
    }
    export class ViewCache implements IViewCache {
        constructor();
        setView(key: string, viewInfo: any): void;
        removeView(key: string): any;
        hasView(viewInfo: any): boolean;
        getView(key: string): any;
        clear(): void;
    }
    export class NullViewCache implements IViewCache {
        constructor();
        setView(key: string, viewInfo: any): void;
        removeView(key: string): any;
        hasView(viewInfo: any): boolean;
        getView(key: string): any;
        clear(): void;
    }
    export interface IStorage {
        getItem(key: string): any;
        setItem(key: string, value: any): void;
        removeItem(key: string): void;
    }
    export class MemoryKeyValueStorage implements IStorage {
        constructor();
        getItem(key: string): any;
        setItem(key: string, value: any): void;
        removeItem(key: string): void;
    }
    export interface StateManagerOptions {
        storage?: IStorage;
        stateSources?: any[];
    }
    export class StateManager {
        public storage: IStorage;
        public stateSources: any[];
        constructor(options?: StateManagerOptions);
        addStateSource(stateSource: any): void;
        removeStateSource(stateSource: any): void;
        saveState(): void;
        restoreState(): void;
        clearState(): void;
    }
    export class Route {
        constructor(pattern: string, defaults?: any, constraints?: any);
        parse(url: string): any;
        format(routeValues: any): string;
        formatSegment(value: any): string;
        parseSegment(): any;
    }
    export class MvcRouter {
        constructor();
        register(pattern: string, defaults?: any, constraints?: any): void;
        parse(uri: string): any;
        format(obj: any): string;
    }
    interface BrowserAdapterOptions {
        window: Window;
    }
    export class DefaultBrowserAdapter {
        constructor(options?: BrowserAdapterOptions);
        replaceState(uri: string): void;
        pushState(uri: string): void;
        createRootPage(): void;
        getWindowName(): string;
        setWindowName(windowName: string): void;
        back(): void;
        getHash(): string;
        isRootPage(): boolean;
    }
    export class OldBrowserAdapter extends DefaultBrowserAdapter { }
    export class HistorylessBrowserAdapter extends DefaultBrowserAdapter { }
    export interface INavigationDevice {
        setUri(uri: string): void;
        getUri(): string;
        back(): void;
    }
    export class BrowserNavigationDevice implements INavigationDevice {
        constructor(options?: BrowserAdapterOptions);
        setUri(uri: string): void;
        getUri(): string;
        back(): void;
    }
    export class NavigationStack {
        public items: any[];
        public currentIndex: number;
        public itemsRemoved: JQueryCallback;
        constructor();
        currentItem(): any;
        back(uri: string): void;
        forward(): void;
        navigate(uri: any, replaceCurrent?: boolean): any;
        getPreviousItem(): any;
        canBack(): boolean;
        clear(): void;
    }
    export interface NavigationManagerOptions {
        stateStorageKey?: string;
        navigationDevice?: INavigationDevice;
        keepPositionInStack?: boolean;
    }
    export class NavigationManager {
        public currentUri: string;
        public currentStack: NavigationStack;
        public navigationStacks: {
            [key: string]: NavigationStack
        };
        public navigating: JQueryCallback;
        public navigated: JQueryCallback;
        public navigatingBack: JQueryCallback;
        public navigationCanceled: JQueryCallback;
        public itemRemoved: JQueryCallback;
        constructor(options?: NavigationManagerOptions);
        navigate(uri: any, options?: {
            root?: boolean;
            target?: string;
            direction?: string;
        }): void;
        back(alternate: any): void;
        rootUri(): string;
        canBack(): boolean;
        currentItem(): any;
        currentIndex(): number;
        getPreviousItem(): any;
        getItemByIndex(index: number): any;
        saveState(storage: IStorage): void;
        restoreState(storage: IStorage): void;
        removeState(storage: IStorage): void;
        clearHistory(): void;
        static NAVIGATION_TARGETS: {
            [key: string]: string
        };
    }
    export module utils {
        export function mergeCommands(destination: any, source: any): dxCommand[];
    }
    export interface ApplicationOptions {
        router?: MvcRouter;
        namespace?: any;
        disableViewCache?: boolean;
        stateManager?: StateManager;
        navigationManager?: NavigationManager;
        navigation?: dxCommandOptions[];
        commandMapping?: CommandMap;
    }
    export class Application {
        public router: MvcRouter;
        public namespace: any;
        public components: any[];
        public stateManager: StateManager;
        public commandMapping: CommandMap;
        public navigation: dxCommand[];
        public navigationManager: NavigationManager;
        public beforeViewSetup: JQueryCallback;
        public afterViewSetup: JQueryCallback;
        public viewShowing: JQueryCallback;
        public viewShown: JQueryCallback;
        public viewHidden: JQueryCallback;
        public viewDisposing: JQueryCallback;
        public viewDisposed: JQueryCallback;
        public navigating: JQueryCallback;
        constructor(options?: ApplicationOptions);
        init(): any;
        navigate(uri?: any, options?: {
            root?: boolean;
            target?: string;
            direction?: string;
        }): void;
        back(): void;
        canBack(): boolean;
        saveState(): void;
        clearState(): void;
        restoreState(): void;
    }
    export function createActionExecutors(app: Application): {
        [key: string]: { execute(e: any): void; }
    };
}
declare module DevExpress.framework.html {
    export interface ILayoutController {
        viewReleased: JQueryCallback;
        init(options: InitLayoutControllerOptions): void;
        activate(): void;
        deactivate(): void;
        showView(viewInfo: any, direction?: string): JQueryDeferred<any>;
    }
    export interface ILayoutControllerRegistration extends devices.Device {
        name: string;
        controller: ILayoutController;
        root?: boolean;
    }
    export var layoutControllers: Array<ILayoutControllerRegistration>;
    export interface InitLayoutControllerOptions {
        $viewPort: JQuery;
        $hiddenBag: JQuery;
        navigationManager: framework.NavigationManager;
    }
    export class DefaultLayoutController implements ILayoutController {
        public viewReleased: JQueryCallback;
        constructor(options?: { layoutTemplateName: string });
        init(options: InitLayoutControllerOptions): void;
        activate(): void;
        deactivate(): void;
        showView(viewInfo: any, direction?: string): JQueryDeferred<any>;
    }
    export interface CommandManagerOptions {
        globalCommands?: framework.dxCommand[];
        commandMapping?: framework.CommandMapping;
    }
    export class CommandManager {
        public globalCommands: framework.dxCommand[];
        public commandMapping: framework.CommandMapping;
        constructor(options?: CommandManagerOptions);
        layoutCommands($markup: JQuery, extraCommands?: any): void;
    }
    export interface ITemplateEngine {
        applyTemplate(template: string, model: any): void;
        applyTemplate(template: Element, model: any): void;
        applyTemplate(template: JQuery, model: any): void;
    }
    export class KnockoutJSTemplateEngine implements ITemplateEngine {
        constructor();
        applyTemplate(template: string, model: any): void;
        applyTemplate(template: Element, model: any): void;
        applyTemplate(template: JQuery, model: any): void;
    }
    export interface TransitionExecutorOptions {
        type: string;
        source: JQuery;
        destination: JQuery;
    }
    export class TransitionExecutor {
        public container: JQuery;
        constructor(container: JQuery, options: TransitionExecutorOptions);
        finalize(): void;
        exec(): JQueryDeferred<TransitionExecutorOptions>;
        static create(container: JQuery, options: TransitionExecutorOptions): TransitionExecutor;
    }
    export interface ViewEngineOptions {
        $root?: JQuery;
        device?: devices.Device;
        commandManager: CommandManager;
        templateEngine: ITemplateEngine;
        dataOptionsAttributeName?: string;
    }
    export class ViewEngineBase {
        public $root: JQuery;
        public device: devices.Device;
        public commandManager: CommandManager;
        public templateEngine: ITemplateEngine;
        public dataOptionsAttributeName: string;
        public viewSelecting: JQueryCallback;
        public modelFromViewDataExtended: JQueryCallback;
        constructor(options?: ViewEngineOptions);
        init(): JQueryDeferred<any>;
        findViewTemplate(viewName: string): JQuery;
        afterViewSetup(viewInfo: any): void;
    }
    export class ViewEngine extends ViewEngineBase {
        public layoutSelecting: JQueryCallback;
        public layoutApplying: JQueryCallback;
        public layoutApplied: JQueryCallback;
        constructor(options?: ViewEngineOptions);
        init(): JQueryDeferred<any>;
        findLayoutTemplate(layoutName: string): JQuery;
    }
    export interface HtmlApplicationBaseOptions extends framework.ApplicationOptions {
        device?: devices.Device;
        navigationType?: string;
    }
    export class HtmlApplicationBase extends framework.Application {
        public viewRendered: JQueryCallback;
        constructor(options?: HtmlApplicationBaseOptions);
        init(): any;
        viewPort(): JQuery;
    }
    export interface HtmlApplicationOptions extends HtmlApplicationBaseOptions {
        commandManager?: CommandManager;
        templateEngine?: ITemplateEngine;
        navigateToRootViewMode?: string;
        layoutControllers?: Array<ILayoutControllerRegistration>
    }
    export class HtmlApplication extends HtmlApplicationBase {
        public viewEngine: ViewEngineBase;
        constructor(options?: HtmlApplicationOptions);
    }
}
declare module DevExpress.ui {
    interface ViewportOptions {
        allowPan?: boolean;
        allowZoom?: boolean;
    }
    export interface ITemplate {
        compile(html: string): any;
        render(template: JQuery, data: any): any;
        render(template: any, data: any): any;
    }
    class Template {
        constructor(element: HTMLElement);
        constructor(element: JQueryStatic);
        render(container: HTMLElement): any;
        render(container: JQueryStatic): any;
        dispose(): void;
    }
    interface TemplateStatic {
        new (element: HTMLElement): Template;
        new (element: JQueryStatic): Template;
    }
    class TemplateProvider {
        constructor();
        getTemplateClass(widget: any): TemplateStatic;
        getDefaultTemplate(widget: any): void; supportDefaultTemplate(): boolean;
    }
    export function initViewport(options: ViewportOptions): void;
    interface NotifyOptions {
        message: string;
        type?: string;
        displayTime?: number;
        hiddenAction: () => any;
    }
    export function notyfy(options: any): void;
    export function notify(message: string, type?: string, displayTime?: number): void;
    export module dialog {
        interface Dialog {
            show(): JQueryDeferred<any>;
            hide(value?: any): void;
        }
        interface DialogButton {
            text: string;
            icon: string;
            clickAction: () => any;
        }
        interface DialogOptions {
            message: string;
            title?: string;
        }
        export function custom(options: DialogOptions): Dialog;
        export function custom(message: string, title?: string): Dialog;
        export function alert(options: DialogOptions): JQueryDeferred<boolean>;
        export function alert(message: string, title?: string): JQueryDeferred<boolean>;
        export function confirm(options: DialogOptions): JQueryDeferred<boolean>;
        export function confirm(message: string, title?: string): JQueryDeferred<boolean>;
    }
    export interface CollectionContainerWidgetOptions extends ContainerWidgetOptions {
        items?: Array<any>;
        itemTemplate?: any;
        itemRender?: Function;
        itemClickAction?: any;
        itemRenderedAction?: any;
        noDataText?: string;
        dataSource?: data.DataSource;
    }
    export class CollectionContainerWidget extends ContainerWidget {
        constructor(element: Element, options?: CollectionContainerWidgetOptions);
        constructor(element: JQuery, options?: CollectionContainerWidgetOptions);
    }
    export interface ComponentOptions {
        disabled?: boolean;
    }
    export class Component {
        constructor(element: Element, options?: ComponentOptions);
        constructor(element: JQuery, options?: ComponentOptions);
        disposing: JQueryCallback;
        optionChanged: JQueryCallback;
        instance(): Component;
        beginUpdate(): void;
        endUpdate(): void;
        option(): any;
        option(options: string): any;
        option<T>(options: string): T;
        option(options: string, value: any): void;
        option(options: { [key: string]: any }): void;
        option(options?: any): any;
    }
    export interface ContainerWidgetOptions extends WidgetOptions {
        contentReadyAction?: any
    }
    export class ContainerWidget extends Widget {
        constructor(element: Element, options?: WidgetOptions);
        constructor(element: JQuery, options?: WidgetOptions);
        addTemplate(template: ITemplate): void;
    }
    export interface SelectableCollectionWidgetOptions extends CollectionContainerWidgetOptions {
        selectedIndex?: number;
        itemSelectAction?: any;
    }
    export class SelectableCollectionWidget extends CollectionContainerWidget {
        constructor(element: Element, options?: SelectableCollectionWidget);
        constructor(element: JQuery, options?: SelectableCollectionWidget);
    }
    export interface WidgetOptions extends ComponentOptions {
        clickAction?: any;
        width?: any;
        height?: any;
        visible?: boolean;
        activeStateEnabled?: boolean;
    }
    export class Widget extends Component {
        constructor(element: Element, options?: WidgetOptions);
        constructor(element: JQuery, options?: WidgetOptions);
        init(): void;
        repaint(): void;
    }
    export interface ActionSheetOptions extends CollectionContainerWidgetOptions {
        usePopover?: boolean;
        target?: any;
        title?: string;
        showTitle?: boolean;
        cancelText?: string;
        noDataText?: string;
    }
    export class ActionSheet extends CollectionContainerWidget {
        constructor(element: Element, options?: ActionSheetOptions);
        constructor(element: JQuery, options?: ActionSheetOptions);
        toggle(): void;
        show(): void;
        hide(): void;
    }
    export interface AutocompleteOptions extends CollectionContainerWidgetOptions {
        value?: any;
        minSearchLength?: number;
        searchTimeout?: number;
        placeholder?: string;
        filterOperator?: string;
        displayExpr?: string;
        valueUpdateAction?: any;
        valueUpdateEvent?: string;
    }
    export class Autocomplete extends CollectionContainerWidget {
        constructor(element: Element, options?: AutocompleteOptions);
        constructor(element: JQuery, options?: AutocompleteOptions);
        toggle(): void;
        show(): void;
        hide(): void;
    }
    export interface ButtonOptions extends WidgetOptions {
        type?: string;
        text?: string;
        icon?: string;
        iconSrc?: string;
    }
    export class Button extends Widget {
        constructor(element: Element, options?: ButtonOptions);
        constructor(element: JQuery, options?: ButtonOptions);
    }
    export interface CheckBoxOptions extends WidgetOptions {
        checked?: boolean;
    }
    export class CheckBox extends Widget {
        constructor(element: Element, options?: CheckBoxOptions);
        constructor(element: JQuery, options?: CheckBoxOptions);
    }
    export interface DateBoxOptions extends EditBoxOptions {
        format?: string;
        useNativePicker?: boolean;
        value?: Date;
    }
    export class DateBox extends EditBox {
        constructor(element: Element, options?: DateBoxOptions);
        constructor(element: JQuery, options?: DateBoxOptions);
    }
    export interface DropDownMenuOptions extends ContainerWidgetOptions {
        items?: Array<any>;
        itemClickAction?: any;
        dataSource?: data.DataSource;
        itemTemplate?: any;
        itemRender?: Function;
        buttonText?: string;
        buttonIcon?: string;
        buttonIconSrc?: string;
        buttonClickAction?: any;
        usePopover?: boolean;
    }
    export class DropDownMenu extends ContainerWidget {
        constructor(element: Element, options?: DropDownMenuOptions);
        constructor(element: JQuery, options?: DropDownMenuOptions);
    }
    export interface EditBoxOptions extends WidgetOptions {
        value?: any;
        valueUpdateEvent?: string;
        valueUpdateAction?: any;
        placeholder?: string;
        readOnly?: boolean;
        focusInAction?: any;
        focusOutAction?: any;
        keyDownAction?: any;
        keyPressAction?: any;
        keyUpAction?: any;
        changeAction?: any;
        enterKeyAction?: any;
        mode?: string;
    }
    export class EditBox extends Widget {
        constructor(element: Element, options?: EditBoxOptions);
        constructor(element: JQuery, options?: EditBoxOptions);
        focus(): void;
    }
    export interface ListOptions extends CollectionContainerWidgetOptions {
        pullRefreshEnabled?: boolean;
        autoPagingEnabled?: boolean;
        scrollingEnabled?: boolean;
        showScrollbar?: boolean;
        useNativeScrolling?: boolean;
        grouped?: boolean;
        editEnabled?: boolean;
        showNextButton?: boolean;
        groupTemplate?: string;
        pullingDownText?: string;
        pulledDownText?: string;
        refreshingText?: string;
        pageLoadingText?: string;
        scrollAction?: any;
        pullRefreshAction?: any;
        pageLoadingAction?: any;
        itemHoldAction?: any;
        itemSwipeAction?: any;
        itemHoldTimeout?: number;
        groupRender? (groupData: any, groupIndex: number, groupElement: Element): any;
        editConfig?: {
            itemTemplate?: any;
            itemRenderer? (itemData: any, itemIndex: number, itemElement: Element): any;
            deleteEnabled?: boolean;
            deleteMode?: string;
            selectionEnabled?: boolean;
            selectionMode?: string;
        }
        itemDeleteAction?: any;
        selectedItems?: any[];
        itemSelectAction?: any;
        itemUnselectAction?: any;
    }
    export class List extends CollectionContainerWidget {
        constructor(element: Element, options?: ListOptions);
        constructor(element: JQuery, options?: ListOptions);
        update(): JQueryDeferred<List>;
        deleteItem(itemElement: JQuery): JQueryDeferred<List>;
        deleteItem(itemElement: Element): JQueryDeferred<List>;
        clearSelectedItems(): void;
        isItemSelected(itemElement: JQuery): boolean;
        isItemSelected(itemElement: Element): boolean;
        selectItem(itemElement: JQuery): void;
        selectItem(itemElement: Element): void;
        unselectItem(itemElement: JQuery): void;
        unselectItem(itemElement: Element): void;
        getSelectedItems(): number[];
    }
    export interface LoadPanelOptions extends OverlayOptions {
        message?: string;
        width?: number;
        height?: number;
    }
    export class LoadPanel extends Overlay {
        constructor(element: Element, options?: LoadPanelOptions);
        constructor(element: JQuery, options?: LoadPanelOptions);
    }
    export interface LookupOptions extends ContainerWidgetOptions {
        dataSource?: data.DataSource;
        value?: any;
        displayValue?: string;
        title?: string;
        valueExpr?: string;
        displayExpr?: string;
        placeholder?: string;
        searchPlaceholder?: string;
        searchEnabled?: boolean;
        searchTimeout?: number;
        minFilterLength?: number;
        fullScreen?: boolean;
        valueChangeAction?: any;
        itemTemplate?: any;
        itemRender?: Function;
        showCancelButton?: boolean;
        showClearButton?: boolean;
        showDoneButton?: boolean;
    }
    export class Lookup extends ContainerWidget {
        constructor(element: Element, options?: LookupOptions);
        constructor(element: JQuery, options?: LookupOptions);
    }
    export interface MapOptions extends WidgetOptions {
        location?: any;
        width?: number;
        height?: number;
        zoom?: number;
        mapType?: string;
        provider?: string;
        markers?: Array<any>;
        routes?: Array<any>;
        key?: string;
        controls?: any;
        mapReadyAction?: any;
    }
    export class Map extends Widget {
        constructor(element: Element, options?: MapOptions);
        constructor(element: JQuery, options?: MapOptions);
        addMarker(markerOptions: any, callback: Function): JQueryDeferred<any>;
        removeMarker(marker: any): void;
        addRoute(routeOptions: any, callback: Function): JQueryDeferred<any>;
        removeRoute(route: any): void;
    }
    export interface NavBarOptions extends TabsOptions { }
    export class NavBar extends Tabs {
        constructor(element: Element, options?: NavBarOptions);
        constructor(element: JQuery, options?: NavBarOptions);
    }
    export interface NumberBoxOptions extends EditBoxOptions {
        min?: number;
        max?: number;
        value?: number;
    }
    export class NumberBox extends EditBox {
        constructor(element: Element, options?: NumberBoxOptions);
        constructor(element: JQuery, options?: NumberBoxOptions);
    }
    export interface OverlayOptions extends WidgetOptions {
        activeStateEnabled?: boolean;
        shading?: boolean;
        closeOnOutsideClick?: boolean;
        position?: any;
        animation?: any;
        showingAction?: any;
        shownAction?: any;
        hidingAction?: any;
        hiddenAction?: any;
        deferRendering?: boolean;
        targetContainer?: any;
    }
    export class Overlay extends Widget {
        constructor(element: Element, options?: OverlayOptions);
        constructor(element: JQuery, options?: OverlayOptions);
    }
    export interface PanoramaOptions extends SelectableCollectionWidgetOptions {
        title?: string;
        backgroundImage?: any;
    }
    export class Panorama extends SelectableCollectionWidget {
        constructor(element: Element, options?: PanoramaOptions);
        constructor(element: JQuery, options?: PanoramaOptions);
    }
    export interface PivotOptions extends SelectableCollectionWidgetOptions { }
    export class Pivot extends SelectableCollectionWidget {
        constructor(element: Element, options?: PivotOptions);
        constructor(element: JQuery, options?: PivotOptions);
    }
    export interface PopoverOptions extends PopupOptions {
        target?: any;
    }
    export class Popover extends Popup {
        constructor(element: Element, options?: PopoverOptions);
        constructor(element: JQuery, options?: PopoverOptions);
    }
    export interface PopupOptions extends OverlayOptions {
        title?: string;
        showTitle?: boolean;
        fullScreen?: boolean;
        cancelButton?: any;
        doneButton?: any;
        clearButton?: any;
    }
    export class Popup extends Overlay {
        constructor(element: Element, options?: PopupOptions);
        constructor(element: JQuery, options?: PopupOptions);
        content(): Element;
    }
    export interface RadioGroupOptions extends SelectableCollectionWidgetOptions {
        layout?: string;
        name?: string;
    }
    export class RadioGroup extends SelectableCollectionWidget {
        constructor(element: Element, options?: RadioGroupOptions);
        constructor(element: JQuery, options?: RadioGroupOptions);
    }
    export interface RangeSliderOptions extends SliderOptions {
        start?: number;
        end?: number;
    }
    export class RangeSlider extends Slider {
        constructor(element: Element, options?: RangeSliderOptions);
        constructor(element: JQuery, options?: RangeSliderOptions);
    }
    export interface ScrollableOptions extends ComponentOptions {
        startAction?: any;
        scrollAction?: any;
        endAction?: any;
        stopAction?: any;
        inertiaAction?: any;
        bounceAction?: any;
        updateAction?: any;
        bounceEnabled?: boolean;
        direction?: string;
        showScrollbar?: boolean;
        useNative?: boolean;
    }
    export class Scrollable extends Component {
        constructor(element: Element, options?: ScrollableOptions);
        constructor(element: JQuery, options?: ScrollableOptions);
        update(): void;
        content(): JQuery;
        location(): Object;
        clientHeight(): number;
        scrollHeight(): number;
        scrollBy(distance: number): void;
        scrollBy(distance: Object): void;
        scrollTo(targetLocation: number): void;
        scrollTo(targetLocation: Object): void;
    }
    export interface ScrollViewOptions extends ScrollableOptions {
        pullingDownText?: string;
        pulledDownText?: string;
        refreshingText?: string;
        reachBottomText?: string;
        pullDownAction?: any;
        reachBottomAction?: any;
    }
    export class ScrollView extends Scrollable {
        constructor(element: Element, options?: ScrollViewOptions);
        constructor(element: JQuery, options?: ScrollViewOptions);
        release(preventReachBottom: boolean): JQueryDeferred<any>;
        toggleLoading(showOrHide: boolean): void;
        isFull(): boolean;
    }
    export interface SelectBoxOptions extends AutocompleteOptions {
        valueChangeAction?: any;
    }
    export class SelectBox extends Autocomplete {
        constructor(element: Element, options?: SelectBoxOptions);
        constructor(element: JQuery, options?: SelectBoxOptions);
    }
    export interface SliderOptions extends WidgetOptions {
        min?: number;
        max?: number;
        step?: number;
        value?: number;
    }
    export class Slider extends Widget {
        constructor(element: Element, options?: SliderOptions);
        constructor(element: JQuery, options?: SliderOptions);
    }
    export interface SwitchOptions extends WidgetOptions {
        onText?: string;
        offText?: string;
        value?: boolean;
    }
    export class Switch extends Widget {
        constructor(element: Element, options?: SwitchOptions);
        constructor(element: JQuery, options?: SwitchOptions);
    }
    export interface TabsOptions extends SelectableCollectionWidgetOptions { }
    export class Tabs extends SelectableCollectionWidget {
        constructor(element: Element, options?: TabsOptions);
        constructor(element: JQuery, options?: TabsOptions);
    }
    export interface TextAreaOptions extends EditBoxOptions {
        cols?: number;
        rows?: number;
    }
    export class TextArea extends EditBox {
        constructor(element: Element, options?: TextAreaOptions);
        constructor(element: JQuery, options?: TextAreaOptions);
    }
    export interface TextBoxOptions extends EditBoxOptions {
        maxLength?: any;
    }
    export class TextBox extends EditBox {
        constructor(element: Element, options?: TextBoxOptions);
        constructor(element: JQuery, options?: TextBoxOptions);
    }
    export interface TileViewOptions extends CollectionContainerWidgetOptions {
        bounceEnabled?: boolean;
        showScrollbar?: boolean;
        listHeight?: number;
        baseItemWidth?: number;
        baseItemHeight?: number;
        itemMargin?: number;
    }
    export class TileView extends CollectionContainerWidget {
        constructor(element: Element, options?: TileViewOptions);
        constructor(element: JQuery, options?: TileViewOptions);
    }
    export interface ToastOptions extends OverlayOptions {
        message?: string;
        type?: string;
        displayTime?: number;
    }
    export class Toast extends Overlay {
        constructor(element: Element, options?: ToastOptions);
        constructor(element: JQuery, options?: ToastOptions);
    }
    export interface ToolbarOptions extends CollectionContainerWidgetOptions {
        menuItemRender?: Function;
        menuItemTemplate?: any;
        submenuType?: string;
    }
    export class Toolbar extends CollectionContainerWidget {
        constructor(element: Element, options?: ToolbarOptions);
        constructor(element: JQuery, options?: ToolbarOptions);
    }
}
interface JQuery {
    dxActionSheet(options?: DevExpress.ui.ActionSheetOptions): JQuery;
    dxAutocomplete(options?: DevExpress.ui.AutocompleteOptions): JQuery;
    dxButton(options?: DevExpress.ui.ButtonOptions): JQuery;
    dxCheckBox(options?: DevExpress.ui.CheckBoxOptions): JQuery;
    dxDateBox(options?: DevExpress.ui.DateBoxOptions): JQuery;
    dxDropDownMenu(options?: DevExpress.ui.DropDownMenuOptions): JQuery;
    dxEditBox(options?: DevExpress.ui.EditBoxOptions): JQuery;
    dxList(options?: DevExpress.ui.ListOptions): JQuery;
    dxLoadPanel(options?: DevExpress.ui.LoadPanelOptions): JQuery;
    dxLookup(options?: DevExpress.ui.LookupOptions): JQuery;
    dxMap(options?: DevExpress.ui.MapOptions): JQuery;
    dxNavBar(options?: DevExpress.ui.NavBarOptions): JQuery;
    dxNumberBox(options?: DevExpress.ui.NumberBoxOptions): JQuery;
    dxOverlay(options?: DevExpress.ui.OverlayOptions): JQuery;
    dxPanorama(options?: DevExpress.ui.PanoramaOptions): JQuery;
    dxPivot(options?: DevExpress.ui.PivotOptions): JQuery;
    dxPopover(options?: DevExpress.ui.PopoverOptions): JQuery;
    dxPopup(options?: DevExpress.ui.PopupOptions): JQuery;
    dxRadioGroup(options?: DevExpress.ui.RadioGroupOptions): JQuery;
    dxRangeSlider(options?: DevExpress.ui.RangeSliderOptions): JQuery;
    dxScrollable(options?: DevExpress.ui.ScrollableOptions): JQuery;
    dxScrollView(options?: DevExpress.ui.ScrollViewOptions): JQuery;
    dxSelectBox(options?: DevExpress.ui.SelectBoxOptions): JQuery;
    dxSlider(options?: DevExpress.ui.SliderOptions): JQuery;
    dxSwitch(options?: DevExpress.ui.SwitchOptions): JQuery;
    dxTabs(options?: DevExpress.ui.TabsOptions): JQuery;
    dxTextArea(options?: DevExpress.ui.TextAreaOptions): JQuery;
    dxTextBox(options?: DevExpress.ui.TextBoxOptions): JQuery;
    dxTileView(options?: DevExpress.ui.TileViewOptions): JQuery;
    dxToast(options?: DevExpress.ui.ToastOptions): JQuery;
    dxToolbar(options?: DevExpress.ui.ToolbarOptions): JQuery;
}