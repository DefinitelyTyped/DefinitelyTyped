/// <reference types="jquery" />
/*
 * Please, submit Pull Requests in the telerik/kendo-ui-core repo at
 * https://github.com/telerik/kendo-ui-core/tree/master/typescript
 *
 * See contributor instructions at
 * https://github.com/telerik/kendo-ui-core#how-to-contribute
 */

declare namespace kendo {
    function culture(): {
        name: string;
        calendar: {
            AM: string[];
            PM: string[];
            "/": string;
            ":": string;
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
            };
            months: {
                names: string[];
                namesAbbr: string[];
            };
            patterns: {
                D: string;
                F: string;
                G: string;
                M: string;
                T: string;
                Y: string;
                d: string;
                g: string;
                m: string;
                s: string;
                t: string;
                u: string;
                y: string;
            };
            firstDay: number;
            twoDigitYearMax: number;
        };
        calendars: {
            standard: {
                AM: string[];
                PM: string[];
                "/": string;
                ":": string;
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                firstDay: string;
                twoDigitYearMax: number;
            };
        };
        numberFormat: {
            currency: {
                decimals: number;
                ",": string;
                ".": string;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            ",": string;
            ".": string;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                ",": string;
                ".": string;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    };

    var cultures: {
        [culture: string]: {
            name?: string | undefined;
            calendar?: {
                AM: string[];
                PM: string[];
                "/": string;
                ":": string;
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                firstDay: number;
                twoDigitYearMax: number;
            } | undefined;
            calendars?: {
                standard: {
                    AM: string[];
                    PM: string[];
                    "/": string;
                    ":": string;
                    days: {
                        names: string[];
                        namesAbbr: string[];
                        namesShort: string[];
                    };
                    months: {
                        names: string[];
                        namesAbbr: string[];
                    };
                    patterns: {
                        D: string;
                        F: string;
                        G: string;
                        M: string;
                        T: string;
                        Y: string;
                        d: string;
                        g: string;
                        m: string;
                        s: string;
                        t: string;
                        u: string;
                        y: string;
                    };
                    firstDay: number;
                    twoDigitYearMax: number;
                };
            } | undefined;
            numberFormat?: {
                currency: {
                    decimals: number;
                    ",": string;
                    ".": string;
                    groupSize: number[];
                    pattern: string[];
                    symbol: string;
                };
                decimals: number;
                ",": string;
                ".": string;
                groupSize: number[];
                pattern: string[];
                percent: {
                    decimals: number;
                    ",": string;
                    ".": string;
                    groupSize: number[];
                    pattern: string[];
                    symbol: string;
                };
            } | undefined;
        };
    };

    function format(format: string, ...values: any[]): string;

    function fx(selector: string): effects.Element;
    function fx(element: Element): effects.Element;
    function fx(element: JQuery): effects.Element;

    function init(selector: string, ...namespaces: any[]): void;
    function init(element: JQuery, ...namespaces: any[]): void;
    function init(element: Element, ...namespaces: any[]): void;

    function observable(data: any): kendo.data.ObservableObject;
    function observableHierarchy(array: any[]): kendo.data.ObservableArray;

    function render(template: (data: any) => string, data: any[]): string;
    function template(template: string, options?: TemplateOptions): (data: any) => string;

    function guid(): string;

    function notify(widget: typeof kendo.ui.Widget, namespace?: typeof kendo.ui): void;
    function notify(widget: typeof kendo.ui.Widget, namespace?: typeof kendo.mobile.ui): void;
    function notify(widget: typeof kendo.ui.Widget, namespace?: typeof kendo.dataviz.ui): void;

    function widgetInstance(element: JQuery, suite?: typeof kendo.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite?: typeof kendo.mobile.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite?: typeof kendo.dataviz.ui): kendo.ui.Widget;

    interface MediaQueryHandler {
        mediaQueryList: MediaQueryList;
        onChange(callback: (e: MediaQueryListEvent) => void): MediaQueryHandler;
        onEnter(callback: (e: MediaQueryListEvent) => void): MediaQueryHandler;
        onLeave(callback: (e: MediaQueryListEvent) => void): MediaQueryHandler;
        destroy(): void;
    }

    function mediaQuery(query: string): MediaQueryHandler;

    var ns: string;

    var keys: {
        INSERT: number;
        DELETE: number;
        BACKSPACE: number;
        TAB: number;
        ENTER: number;
        ESC: number;
        LEFT: number;
        UP: number;
        RIGHT: number;
        DOWN: number;
        END: number;
        HOME: number;
        SPACEBAR: number;
        PAGEUP: number;
        PAGEDOWN: number;
        F2: number;
        F10: number;
        F12: number;
        NUMPAD_PLUS: number;
        NUMPAD_MINUS: number;
        NUMPAD_DOT: number;
    };

    var support: {
        touch: boolean;
        pointers: boolean;
        scrollbar(): number;
        hasHW3D: boolean;
        hasNativeScrolling: boolean;
        devicePixelRatio: number;
        placeholder: boolean;
        zoomLevel: number;
        mobileOS: {
            device: string;
            tablet: any;
            browser: string;
            name: string;
            majorVersion: string;
            minorVersion: string;
            flatVersion: number;
            appMode: boolean;
        };
        browser: {
            edge: boolean;
            msie: boolean;
            webkit: boolean;
            safari: boolean;
            opera: boolean;
            mozilla: boolean;
            version: string;
        };
    };

    var version: string;

    interface TemplateOptions {
        paramName?: string | undefined;
        useWithBlock?: boolean | undefined;
    }

    class Class {
        static fn: Class;
        static extend(prototype: Object): Class;
    }

    class Observable extends Class {
        static fn: Observable;
        static extend(prototype: Object): Observable;

        init(...args: any[]): void;

        bind(eventName: string, handler: Function): Observable;
        bind(events: string[], handler: Function): Observable;
        bind(events: string[], handlers: { [eventName: string]: Function }): Observable;

        one(eventName: string, handler: Function): Observable;
        one(events: string[], handler: Function): Observable;
        one(events: string[], handlers: { [eventName: string]: Function }): Observable;

        first(eventName: string, handler: Function): Observable;
        first(events: string[], handler: Function): Observable;
        first(events: string[], handlers: { [eventName: string]: Function }): Observable;

        trigger(eventName: string, e?: any): boolean;
        unbind(eventName?: string, handler?: any): Observable;

        angular(eventName: string, handler: Function): void;
    }

    class UserEvents extends Observable {
        static defaultThreshold(value: number): void;
        static minHold(value: number): void;

        init(...args: any[]): void;
        preventIfMoving(e?: any): void;
        destroy(): void;

        capture(): void;

        cancel(): void;

        notify(eventName?: string, data?: any): boolean;

        // API
        press(x: any, y: any, target: any): void;

        move(x: any, y: any): void;

        end(x: any, y: any): void;
    }

    interface ViewOptions {
        tagName?: string | undefined;
        wrap?: boolean | undefined;
        model?: Object | undefined;
        evalTemplate?: boolean | undefined;
        useWithBlock?: boolean | undefined;
        init?: ((e: ViewEvent) => void) | undefined;
        show?: ((e: ViewEvent) => void) | undefined;
        hide?: ((e: ViewEvent) => void) | undefined;
    }

    interface ViewEvent {
        sender: View;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class View extends Observable {
        constructor(element: Element, options?: ViewOptions);
        constructor(element: string, options?: ViewOptions);
        element: JQuery;
        content: any;
        tagName: string;
        model: Object;
        init(element: Element, options?: ViewOptions): void;
        init(element: string, options?: ViewOptions): void;
        render(container?: any): JQuery;
        destroy(): void;
    }

    class ViewContainer extends Observable {
        view: View;
    }

    class Layout extends View {
        containers: { [selector: string]: ViewContainer };
        showIn(selector: string, view: View, transitionClass?: string): void;
    }

    class History extends Observable {
        current: string;
        root: string;
        start(options: Object): void;
        stop(): void;
        change(callback: Function): void;
        navigate(location: string, silent?: boolean): void;
    }

    var history: History;

    interface RouterOptions {
        init?: ((e: RouterEvent) => void) | undefined;
        pushState?: boolean | undefined;
        hashBang?: boolean | undefined;
        root?: string | undefined;
        ignoreCase?: boolean | undefined;
        change?(e: RouterChangeEvent): void;
        routeMissing?(e: RouterRouteMissingEvent): void;
        same?(e: RouterEvent): void;
    }

    interface RouterEvent {
        sender: Router;
        url: string;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RouterChangeEvent extends RouterEvent {
        params: any;
        backButtonPressed: boolean;
    }

    interface RouterRouteMissingEvent extends RouterEvent {
        params: any;
    }

    class Route extends Class {
        route: RegExp;
        callback(url: string): void;
        worksWith(url: string): void;
    }

    class Router extends Observable {
        constructor(options?: RouterOptions);
        routes: Route[];
        init(options?: RouterOptions): void;
        start(): void;
        destroy(): void;
        route(route: string, callback: Function): void;
        navigate(location: string, silent?: boolean): void;
        replace(location: string, silent?: boolean): void;
    }
}

declare namespace kendo.effects {
    function enable(): void;
    function disable(): void;

    interface Element {
        expand(direction: string): effects.Expand;
        expandHorizontal(): effects.Expand;
        expandVertical(): effects.Expand;
        fade(direction: string): effects.Fade;
        fadeIn(): effects.Fade;
        fadeOut(): effects.Fade;
        flip(axis: string, face: JQuery, back: JQuery): effects.Flip;
        flipHorizontal(face: JQuery, back: JQuery): effects.Flip;
        flipVertical(face: JQuery, back: JQuery): effects.Flip;
        pageturn(axis: string, face: JQuery, back: JQuery): effects.PageTurn;
        pageturnHorizontal(face: JQuery, back: JQuery): effects.PageTurn;
        pageturnVertical(face: JQuery, back: JQuery): effects.PageTurn;
        slideIn(direction: string): effects.SlideIn;
        slideInDown(): effects.SlideIn;
        slideInLeft(): effects.SlideIn;
        slideInRight(): effects.SlideIn;
        slideInUp(): effects.SlideIn;
        tile(direction: string, previous: JQuery): effects.Tile;
        tileDown(previous: JQuery): effects.Tile;
        tileLeft(previous: JQuery): effects.Tile;
        tileRight(previous: JQuery): effects.Tile;
        tileUp(previous: JQuery): effects.Tile;
        transfer(target: JQuery): effects.Transfer;
        zoom(direction: string): effects.Zoom;
        zoomIn(): effects.Zoom;
        zoomOut(): effects.Zoom;
    }

    interface Effect {
        play(): JQueryPromise<any>;
        reverse(): JQueryPromise<any>;
        duration(value: number): Effect;
        add(effect: Effect): Effect;
        stop(): Effect;
    }

    interface Expand extends Effect {
        duration(value: number): Expand;
        direction(value: string): Expand;
        stop(): Expand;
        add(effect: Effect): Expand;
    }

    interface Fade extends Effect {
        duration(value: number): Fade;
        direction(value: string): Fade;
        stop(): Fade;
        add(effect: Effect): Fade;
        startValue(value: number): Fade;
        endValue(value: number): Fade;
    }

    interface Flip extends Effect {
        duration(value: number): Flip;
        direction(value: string): Flip;
        stop(): Flip;
        add(effect: Effect): Flip;
    }

    interface PageTurn extends Effect {
        duration(value: number): PageTurn;
        direction(value: string): PageTurn;
        stop(): PageTurn;
        add(effect: Effect): PageTurn;
    }

    interface SlideIn extends Effect {
        duration(value: number): SlideIn;
        direction(value: string): SlideIn;
        stop(): SlideIn;
        add(effect: Effect): SlideIn;
    }

    interface Tile extends Effect {
        duration(value: number): Tile;
        direction(value: string): Tile;
        stop(): Tile;
        add(effect: Effect): Tile;
    }

    interface Transfer extends Effect {
        duration(value: number): Transfer;
        stop(): Transfer;
        add(effect: Effect): Transfer;
    }

    interface Zoom extends Effect {
        duration(value: number): Zoom;
        direction(value: string): Zoom;
        stop(): Zoom;
        add(effect: Effect): Zoom;
        startValue(value: number): Zoom;
        endValue(value: number): Zoom;
    }
}

declare namespace kendo.data {
    interface ObservableObjectEvent {
        sender?: ObservableObject | undefined;
        field?: string | undefined;
    }

    interface ObservableObjectSetEvent extends ObservableObjectEvent {
        value?: any;
        preventDefault?: Function | undefined;
    }

    class Binding extends Observable {
        source: any;
        parents: any[];
        path: string;
        observable: boolean;
        dependencies: { [path: string]: boolean };
        constructor(parents: any[], path: string);
        change(e: Object): void;
        start(source: kendo.Observable): void;
        stop(source: kendo.Observable): void;
        get(): any;
        set(value: any): void;
        destroy(): void;
    }

    class BindingTarget {
        target: any;
        options: any;
        source: any;
    }

    class EventBinding extends Binding {
        get(): void;
    }

    class TemplateBinding extends Binding {
        constructor(source: kendo.Observable, path: string, template: Function);
        render(value: Object): string;
    }

    interface Bindings {
        [key: string]: Binding;
    }

    class Binder extends Class {
        static fn: Binder;
        element: any;
        bindings: Bindings;
        options: BinderOptions;
        constructor(element: any, bindings: Bindings, options?: BinderOptions);
        static extend(prototype: Object): Binder;
        init(element: any, bindings: Bindings, options?: BinderOptions): void;
        bind(binding: Binding, attribute: string): void;
        destroy(): void;
        refresh(): void;
        refresh(attribute: string): void;
    }

    class TypedBinder extends Binder {
        dataType(): string;
        parsedValue(): any;
    }

    interface DataSourceBinder extends Binder {
        itemChange(e: any): string;
        dataBinding(e: any): any;
        dataBound(e: any): any;
    }

    interface BinderOptions {
    }

    class ObservableObject extends Observable {
        constructor(value?: any);
        uid: string;
        init(value?: any): void;
        get(name: string): any;
        parent(): ObservableObject;
        set(name: string, value: any): void;
        toJSON(): Object;
    }

    class Model extends ObservableObject {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        idField: string;
        _defaultId: any;
        fields: DataSourceSchemaModelFields;
        defaults: {
            [field: string]: any;
        };
        id: any;
        dirty: boolean;
        dirtyFields: any[];

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof Model;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof Model;

        constructor(data?: any);
        init(data?: any): void;
        accept(data?: any): void;
        editable(field: string): boolean;
        isNew(): boolean;
    }

    interface SchedulerEventData {
        description?: string | undefined;
        end?: Date | undefined;
        endTimezone?: string | undefined;
        isAllDay?: boolean | undefined;
        id?: any;
        start?: Date | undefined;
        startTimezone?: string | undefined;
        recurrenceId?: any;
        recurrenceRule?: string | undefined;
        recurrenceException?: string | undefined;
        title?: string | undefined;
    }

    class SchedulerEvent extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        constructor(data?: SchedulerEventData);

        description: string;
        end: Date;
        endTimezone: string;
        isAllDay: boolean;
        id: any;
        start: Date;
        startTimezone: string;
        recurrenceId: any;
        recurrenceRule: string;
        recurrenceException: string;
        title: string;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof SchedulerEvent;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof SchedulerEvent;

        init(data?: SchedulerEventData): void;
        clone(options: any, updateUid: boolean): SchedulerEvent;
        duration(): number;
        expand(start: Date, end: Date, zone: any): SchedulerEvent[];
        update(eventInfo: SchedulerEventData): void;
        isMultiDay(): boolean;
        isException(): boolean;
        isOccurrence(): boolean;
        isRecurring(): boolean;
        isRecurrenceHead(): boolean;
        toOccurrence(options: any): SchedulerEvent;
    }

    class TreeListModel extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        parentId: any;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof TreeListModel;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof TreeListModel;

        constructor(data?: any);
        init(data?: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
    }

    class TreeListDataSource extends DataSource {
        load(model: kendo.data.TreeListModel): JQueryPromise<any>;
        childNodes(model: kendo.data.TreeListModel): kendo.data.TreeListModel[];
        rootNodes(): kendo.data.TreeListModel[];
        parentNode(model: kendo.data.TreeListModel): kendo.data.TreeListModel;
        level(model: kendo.data.TreeListModel): number;
        level(model: any): number;

        add(model: Object): kendo.data.TreeListModel;
        add(model: kendo.data.TreeListModel): kendo.data.TreeListModel;
        at(index: number): kendo.data.TreeListModel;
        cancelChanges(model?: kendo.data.TreeListModel): void;
        get(id: any): kendo.data.TreeListModel;
        getByUid(uid: string): kendo.data.TreeListModel;
        indexOf(value: kendo.data.TreeListModel): number;
        insert(index: number, model: kendo.data.TreeListModel): kendo.data.TreeListModel;
        insert(index: number, model: Object): kendo.data.TreeListModel;
        remove(model: kendo.data.TreeListModel): void;
    }

    class OrgChartModel extends Model {
        static idField: string;
        static nameField: string;
        static titleField: string;
        static avatarField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        parentId: any;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof OrgChartModel;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof OrgChartModel;

        constructor(data?: any);
        init(data?: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
    }

    class OrgChartDataSource extends TreeListDataSource {
        groupedItemsTree(field?: String): any[];
        itemChildren(item?: kendo.data.OrgChartModel): kendo.data.OrgChartModel[];
        itemsTree(item?: kendo.data.OrgChartModel, fromView?: boolean): kendo.data.OrgChartModel[];
        prospectParents(item: kendo.data.OrgChartModel): kendo.data.OrgChartModel[];
        toggleChildren(item: kendo.data.OrgChartModel): void;
    }

    class GanttTask extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        parentId: number;
        orderId: number;
        title: string;
        start: Date;
        end: Date;
        plannedStart: Date;
        plannedEnd: Date;
        percentComplete: number;
        summary: boolean;
        expanded: boolean;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof GanttTask;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof GanttTask;

        constructor(data?: any);
        init(data?: any): void;
    }

    class GanttDependency extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        predecessorId: number;
        successorId: number;
        type: number;

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof GanttDependency;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof GanttDependency;

        constructor(data?: any);
        init(data?: any): void;
    }

    class Node extends Model {
        children: HierarchicalDataSource;

        append(model: any): void;
        level(): number;
        load(): void;
        loaded(value: boolean): void;
        loaded(): boolean;
        parentNode(): Node;
    }

    class FileEntry extends Node {
        children: FileManagerDataSource;
    }

    class SchedulerDataSource extends DataSource {
        add(model: Object): kendo.data.SchedulerEvent;
        add(model: kendo.data.SchedulerEvent): kendo.data.SchedulerEvent;
        at(index: number): kendo.data.SchedulerEvent;
        cancelChanges(model?: kendo.data.SchedulerEvent): void;
        get(id: any): kendo.data.SchedulerEvent;
        getByUid(uid: string): kendo.data.SchedulerEvent;
        indexOf(value: kendo.data.SchedulerEvent): number;
        insert(index: number, model: kendo.data.SchedulerEvent): kendo.data.SchedulerEvent;
        insert(index: number, model: Object): kendo.data.SchedulerEvent;
        remove(model: kendo.data.SchedulerEvent): void;
        expand(start: Date, end: Date): kendo.data.SchedulerEvent[];
    }

    class GanttDataSource extends DataSource {
        add(model: Object): kendo.data.GanttTask;
        add(model: kendo.data.GanttTask): kendo.data.GanttTask;
        at(index: number): kendo.data.GanttTask;
        cancelChanges(model?: kendo.data.GanttTask): void;
        get(id: any): kendo.data.GanttTask;
        getByUid(uid: string): kendo.data.GanttTask;
        indexOf(value: kendo.data.GanttTask): number;
        insert(index: number, model: Object): kendo.data.GanttTask;
        insert(index: number, model: kendo.data.GanttTask): kendo.data.GanttTask;
        remove(model: kendo.data.GanttTask): void;
    }

    class GanttDependencyDataSource extends DataSource {
        add(model: Object): kendo.data.GanttDependency;
        add(model: kendo.data.GanttDependency): kendo.data.GanttDependency;
        at(index: number): kendo.data.GanttDependency;
        cancelChanges(model?: kendo.data.GanttDependency): void;
        get(id: any): kendo.data.GanttDependency;
        getByUid(uid: string): kendo.data.GanttDependency;
        indexOf(value: kendo.data.GanttDependency): number;
        insert(index: number, model: Object): kendo.data.GanttDependency;
        insert(index: number, model: kendo.data.GanttDependency): kendo.data.GanttDependency;
        remove(model: kendo.data.GanttDependency): void;
    }

    class HierarchicalDataSource extends DataSource {
        constructor(options?: HierarchicalDataSourceOptions);
        init(options?: HierarchicalDataSourceOptions): void;
    }

    interface HierarchicalDataSourceOptions extends DataSourceOptions {
        schema?: HierarchicalDataSourceSchema | undefined;
    }

    interface HierarchicalDataSourceSchema extends DataSourceSchemaWithOptionsModel {
        model?: HierarchicalDataSourceSchemaModel | undefined;
    }

    interface HierarchicalDataSourceSchemaModel extends DataSourceSchemaModel {
        hasChildren?: any;
        children?: any;
    }

    class FileManagerDataSource extends HierarchicalDataSource {
        constructor(options?: FileManagerDataSourceOptions);
        init(options?: FileManagerDataSourceOptions): void;
    }

    interface FileManagerDataSourceOptions extends HierarchicalDataSourceOptions {
        schema?: FileManagerDataSourceSchema | undefined;
    }

    interface FileManagerDataSourceSchema extends HierarchicalDataSourceSchema {
        model?: FileManagerDataSourceSchemaModel | undefined;
    }

    interface FileManagerDataSourceSchemaModel extends HierarchicalDataSourceSchemaModel {
        isDirectory?: any;
    }

    interface PivotDiscoverRequestRestrictionOptions {
        catalogName: string;
        cubeName: string;
    }

    interface PivotDiscoverRequestDataOptions {
        command: string;
        restrictions: PivotDiscoverRequestRestrictionOptions;
    }

    interface PivotDiscoverRequestOptions {
        data: PivotDiscoverRequestDataOptions;
    }

    interface PivotTransportConnection {
        catalog?: string | undefined;
        cube?: string | undefined;
    }

    interface PivotTransportDiscover {
        cache?: boolean | undefined;
        contentType?: string | undefined;
        data?: any;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: any;
    }

    interface PivotTransport {
        discover?: any;
        read?: any;
    }

    interface PivotTransportWithObjectOperations extends PivotTransport {
        connection: PivotTransportConnection;
        discover?: PivotTransportDiscover | undefined;
        read?: DataSourceTransportRead | undefined;
    }

    interface PivotTransportWithFunctionOperations extends PivotTransport {
        discover?: ((options: DataSourceTransportOptions) => void) | undefined;
        read?: ((options: DataSourceTransportOptions) => void) | undefined;
    }

    interface PivotDataSourceAxisOptions {
        name: string;
        expand?: boolean | undefined;
    }

    interface PivotDataSourceMeasureOptions {
        values: string[];
        axis?: string | undefined;
    }

    interface PivotDataSourceOptions extends DataSourceOptions {
        columns?: string[] | PivotDataSourceAxisOptions[] | undefined;
        measures?: string[] | PivotDataSourceMeasureOptions | undefined;
        rows?: string[] | PivotDataSourceAxisOptions[] | undefined;
        transport?: PivotTransport | undefined;
        schema?: PivotSchema | undefined;
    }

    interface PivotTupleModel {
        children: PivotTupleModel[];
        caption?: string | undefined;
        name: string;
        levelName?: string | undefined;
        levelNum: number;
        hasChildren?: boolean | undefined;
        hierarchy?: string | undefined;
    }

    interface PivotSchemaRowAxis {
        tuples: PivotTupleModel[];
    }

    interface PivotSchemaColumnAxis {
        tuples: PivotTupleModel[];
    }

    interface PivotSchemaAxes {
        rows: PivotSchemaRowAxis;
        columns: PivotSchemaColumnAxis;
    }

    interface PivotSchema extends DataSourceSchema {
        axes?: any;
        catalogs?: any;
        cubes?: any;
        cube?: any;
        data?: any;
        dimensions?: any;
        hierarchies?: any;
        levels?: any;
        measures?: any;
    }

    class PivotDataSource extends DataSource {
        axes(): PivotSchemaAxes;
        constructor(options?: PivotDataSourceOptions);
        init(options?: PivotDataSourceOptions): void;
        catalog(val: string): void;
        catalog(): string;
        columns(val: string[]): void;
        columns(): string[];
        cube(val: string): void;
        cube(): string;
        discover(options: PivotDiscoverRequestOptions): JQueryPromise<any>;
        measures(val: string[]): void;
        measures(): string[];
        measuresAxis(): string;
        rows(val: string[]): void;
        rows(): string[];
        schemaCatalogs(): JQueryPromise<any>;
        schemaCubes(): JQueryPromise<any>;
        schemaDimensions(): JQueryPromise<any>;
        schemaHierarchies(): JQueryPromise<any>;
        schemaLevels(): JQueryPromise<any>;
        schemaMeasures(): JQueryPromise<any>;
    }

    class PivotDataSourceV2 extends Observable {
        options: PivotDataSourceV2Options;

        constructor(options?: PivotDataSourceV2Options);

        axes(): any;
        catalog(): string;
        catalog(name: string): void;
        columns(): any;
        columns(val: any): void;
        cube(): string;
        cube(name: string): void;
        discover(options: string): any;
        measures(): any;
        measures(val: any): void;
        measuresAxis(): string;
        rows(): any;
        rows(val: any): void;
        schemaCatalogs(): any;
        schemaCubes(): any;
        schemaDimensions(): any;
        schemaHierarchies(dimensionName: string): any;
        schemaLevels(hierarchyName: string): any;
        schemaMeasures(): any;
    }

    interface PivotDataSourceV2Column {
        expand?: boolean;
        name?: string;
    }

    interface PivotDataSourceV2Measure {
        values?: any;
        axis?: string;
    }

    interface PivotDataSourceV2Row {
        expand?: boolean;
        name?: string;
    }

    interface PivotDataSourceV2TransportConnection {
        catalog?: string;
        cube?: string;
    }

    interface PivotDataSourceV2Transport {
        discover?: any | string | Function;
        connection?: PivotDataSourceV2TransportConnection;
    }

    interface PivotDataSourceV2Options {
        name?: string | undefined;
        columns?: PivotDataSourceV2Column[] | undefined;
        measures?: PivotDataSourceV2Measure[] | undefined;
        rows?: PivotDataSourceV2Row[] | undefined;
        transport?: PivotDataSourceV2Transport | undefined;
    }
    interface PivotDataSourceV2Event {
        sender: PivotDataSourceV2;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DataSourceTransport {
        create?: string | DataSourceTransportCreate | ((options: DataSourceTransportOptions) => void) | undefined;
        destroy?: string | DataSourceTransportDestroy | ((options: DataSourceTransportOptions) => void) | undefined;
        push?: Function | undefined;
        submit?: Function | undefined;
        batch?: DataSourceTransportBatch | ((options: DataSourceTransportOptions) => void) | undefined;
        read?: string | DataSourceTransportRead | ((options: DataSourceTransportOptions) => void) | undefined;
        signalr?: DataSourceTransportSignalr | ((options: DataSourceTransportOptions) => void) | undefined;
        update?: string | DataSourceTransportUpdate | ((options: DataSourceTransportOptions) => void) | undefined;
        parameterMap?(data: DataSourceTransportParameterMapData, type: "create" | "destroy" | "read" | "update"): any;
    }

    interface DataSourceTransportSignalrClient {
        create?: string | undefined;
        destroy?: string | undefined;
        read?: string | undefined;
        update?: string | undefined;
    }

    interface DataSourceTransportSignalrServer {
        create?: string | undefined;
        destroy?: string | undefined;
        read?: string | undefined;
        update?: string | undefined;
    }

    interface DataSourceTransportSignalr {
        client?: DataSourceTransportSignalrClient | undefined;
        hub?: any;
        promise?: any;
        server?: DataSourceTransportSignalrServer | undefined;
    }

    interface DataSourceParameterMapDataAggregate {
        field?: string | undefined;
        aggregate?: string | undefined;
    }

    interface DataSourceParameterMapDataGroup {
        aggregate?: DataSourceParameterMapDataAggregate[] | undefined;
        field?: string | undefined;
        dir?: string | undefined;
    }

    interface DataSourceParameterMapDataFilter {
        field?: string | undefined;
        filters?: DataSourceParameterMapDataFilter[] | undefined;
        logic?: string | undefined;
        operator?: string | undefined;
        value?: any;
    }

    interface DataSourceParameterMapDataSort {
        field?: string | undefined;
        dir?: string | undefined;
    }

    interface DataSourceTransportParameterMapData {
        aggregate?: DataSourceParameterMapDataAggregate[] | undefined;
        group?: DataSourceParameterMapDataGroup[] | undefined;
        filter?: DataSourceParameterMapDataFilter | undefined;
        models?: Model[] | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        skip?: number | undefined;
        sort?: DataSourceParameterMapDataSort[] | undefined;
        take?: number | undefined;
    }

    interface DataSourceSchema {
        model?: any;
    }

    interface DataSourceSchemaWithTimezone extends DataSourceSchema {
        timezone?: String | undefined;
    }

    interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
        model?: DataSourceSchemaModel | undefined;
    }

    interface DataSourceSchemaWithConstructorModel extends DataSourceSchema {
        model?: typeof Model | undefined;
    }

    interface DataSourceSchemaModel {
        id?: string | undefined;
        fields?: any;
        [index: string]: any;
    }

    interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelField[] | undefined;
    }

    interface DataSourceSchemaModelWithFieldsObject extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelFields | undefined;
    }

    interface DataSourceSchemaModelFields {
        [index: string]: DataSourceSchemaModelField;
    }

    interface DataSourceSchemaModelField {
        field?: string | undefined;
        from?: string | undefined;
        defaultValue?: any;
        editable?: boolean | undefined;
        nullable?: boolean | undefined;
        parse?: Function | undefined;
        type?: string | undefined;
        validation?: DataSourceSchemaModelFieldValidation | undefined;
    }

    interface DataSourceSchemaModelFieldValidation {
        required?: boolean | undefined;
        min?: any;
        max?: any;
        minLength?: any;
        maxLength?: any;
        [rule: string]: any;
    }

    class ObservableArray extends Observable {
        length: number;
        [index: number]: any;

        constructor(array: any[]);
        init(array: any[]): void;
        empty(): void;
        every(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        filter(callback: (item: Object, index: number, source: ObservableArray) => boolean): any[];
        find(callback: (item: Object, index: number, source: ObservableArray) => boolean): any;
        forEach(callback: (item: Object, index: number, source: ObservableArray) => void): void;
        indexOf(item: any): number;
        join(separator: string): string;
        map(callback: (item: Object, index: number, source: ObservableArray) => any): any[];
        parent(): ObservableObject;
        pop(): ObservableObject;
        push(...items: any[]): number;
        remove(item: Object): void;
        shift(): any;
        slice(begin: number, end?: number): any[];
        some(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        sort(compareFn?: (a: any, b: any) => number): any[];
        splice(start: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        toJSON(): any[];
        unshift(...items: any[]): number;
        wrap(object: Object, parent: Object): any;
        wrapAll(source: Object, target: Object): any;
    }

    interface ObservableArrayEvent {
        field?: string | undefined;
        action?: string | undefined;
        index?: number | undefined;
        items?: kendo.data.Model[] | undefined;
    }

    class DataSource extends Observable {
        options: DataSourceOptions;

        static create(options?: DataSourceOptions): DataSource;

        constructor(options?: DataSourceOptions);
        init(options?: DataSourceOptions): void;
        add(model: Object): kendo.data.Model;
        add(model: kendo.data.Model): kendo.data.Model;
        aggregate(val: any): void;
        aggregate(): any;
        aggregates(): any;
        at(index: number): kendo.data.ObservableObject;
        cancelChanges(model?: kendo.data.Model): void;
        data(): kendo.data.ObservableArray;
        data(value: any): void;
        fetch(callback?: Function): JQueryPromise<any>;
        filter(filters: DataSourceFilterItem): void;
        filter(filters: DataSourceFilterItem[]): void;
        filter(filters: DataSourceFilters): void;
        filter(): DataSourceFilters;
        get(id: any): kendo.data.Model;
        getByUid(uid: string): kendo.data.Model;
        group(groups: any): void;
        group(): any;
        hasChanges(): boolean;
        indexOf(value: kendo.data.ObservableObject): number;
        insert(index: number, model: kendo.data.Model): kendo.data.Model;
        insert(index: number, model: Object): kendo.data.Model;
        online(value: boolean): void;
        online(): boolean;
        offlineData(data: any[]): void;
        offlineData(): any[];
        page(): number;
        page(page: number): void;
        pageSize(): number;
        pageSize(size: number): void;
        pushCreate(model: Object): void;
        pushCreate(models: any[]): void;
        pushInsert(index: number, model: Object): void;
        pushInsert(index: number, models: any[]): void;
        pushDestroy(model: Object): void;
        pushDestroy(models: any[]): void;
        pushUpdate(model: Object): void;
        pushUpdate(models: any[]): void;
        query(options?: any): JQueryPromise<any>;
        read(data?: any): JQueryPromise<any>;
        remove(model: kendo.data.ObservableObject): void;
        skip(): number;
        sort(sort: DataSourceSortItem): void;
        sort(sort: DataSourceSortItem[]): void;
        sort(): DataSourceSortItem[];
        sync(): JQueryPromise<any>;
        total(): number;
        totalPages(): number;
        view(): kendo.data.ObservableArray;
    }

    class Query {
        data: any[];

        static process(data: any[], options: DataSourceTransportReadOptionsData): QueryResult;

        constructor(data: any[]);
        toArray(): any[];
        range(intex: number, count: number): kendo.data.Query;
        skip(count: number): kendo.data.Query;
        take(count: number): kendo.data.Query;
        select(selector: Function): kendo.data.Query;
        order(selector: string, dir?: string): kendo.data.Query;
        order(selector: Function, dir?: string): kendo.data.Query;
        filter(filters: DataSourceFilterItem): kendo.data.Query;
        filter(filters: DataSourceFilterItem[]): kendo.data.Query;
        filter(filters: DataSourceFilters): kendo.data.Query;
        group(descriptors: DataSourceGroupItem): kendo.data.Query;
        group(descriptors: DataSourceGroupItem[]): kendo.data.Query;
    }

    interface QueryResult {
        total?: number | undefined;
        data?: any[] | undefined;
    }

    interface DataSourceAggregateItem {
        field?: string | undefined;
        aggregate?: string | undefined;
    }

    interface DataSourceFilter {
    }

    interface DataSourceFilterItem extends DataSourceFilter {
        operator?: string | Function | undefined;
        field?: string | undefined;
        value?: any;
    }

    interface DataSourceFilters extends DataSourceFilter {
        logic?: string | undefined;
        filters?: DataSourceFilter[] | undefined;
    }

    interface DataSourceGroupItemAggregate {
        field?: string | undefined;
        aggregate?: string | undefined;
    }

    interface DataSourceGroupItem {
        field?: string | undefined;
        dir?: string | undefined;
        aggregates?: DataSourceGroupItemAggregate[] | undefined;
        compare?: ((a: DataSourceGroupCompareItem, b: DataSourceGroupCompareItem) => number) | undefined;
    }

    interface DataSourceGroupCompareItem {
        field: string;
        value: any;
        items: any[];
    }

    interface DataSourceSchema {
        aggregates?: any;
        data?: any;
        errors?: any;
        groups?: any;
        parse?: Function | undefined;
        total?: any;
        type?: string | undefined;
    }

    interface DataSourceSortItem {
        field?: string | undefined;
        dir?: string | undefined;
        compare?: Function | undefined;
    }

    interface DataSourceTransportBatch extends JQueryAjaxSettings {
        cache?: boolean | undefined;
        contentType?: string | undefined;
        data?: any;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: any;
    }

    interface DataSourceTransportCreate extends JQueryAjaxSettings {
        cache?: boolean | undefined;
        contentType?: string | undefined;
        data?: any;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: any;
    }

    interface DataSourceTransportDestroy extends JQueryAjaxSettings {
        cache?: boolean | undefined;
        contentType?: string | undefined;
        data?: any;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: any;
    }

    interface DataSourceTransportRead extends JQueryAjaxSettings {
        cache?: boolean | undefined;
        contentType?: string | undefined;
        data?: any;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: any;
    }

    interface DataSourceTransportUpdate extends JQueryAjaxSettings {
        cache?: boolean | undefined;
        contentType?: string | undefined;
        data?: any;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: any;
    }

    interface DataSourceTransportWithObjectOperations extends DataSourceTransport {
        create?: DataSourceTransportCreate | undefined;
        destroy?: DataSourceTransportDestroy | undefined;
        read?: DataSourceTransportRead | undefined;
        update?: DataSourceTransportUpdate | undefined;
    }

    interface DataSourceTransportWithFunctionOperations extends DataSourceTransport {
        create?: ((options: DataSourceTransportOptions) => void) | undefined;
        destroy?: ((options: DataSourceTransportOptions) => void) | undefined;
        read?: ((options: DataSourceTransportReadOptions) => void) | undefined;
        update?: ((options: DataSourceTransportOptions) => void) | undefined;
    }

    interface DataSourceTransportOptions {
        success: (data?: any) => void;
        error: (error?: any) => void;
        data: any;
    }

    interface DataSourceTransportReadOptionsData {
        sort?: DataSourceSortItem[] | undefined;
        filter?: DataSourceFilters | undefined;
        group?: DataSourceGroupItem[] | undefined;
        take?: number | undefined;
        skip?: number | undefined;
    }

    interface DataSourceTransportReadOptions extends DataSourceTransportOptions {
        data: DataSourceTransportReadOptionsData;
    }

    interface DataSourceTransportBatchOptionsData {
        models: any[];
    }

    interface DataSourceTransportBatchOptions extends DataSourceTransportOptions {
        data: DataSourceTransportBatchOptionsData;
    }

    interface DataSourceOptions {
        aggregate?: DataSourceAggregateItem[] | undefined;
        autoSync?: boolean | undefined;
        batch?: boolean | undefined;
        data?: any;
        filter?: any;
        group?: DataSourceGroupItem | DataSourceGroupItem[] | undefined;
        inPlaceSort?: boolean | undefined;
        offlineStorage?: any;
        page?: number | undefined;
        pageSize?: number | undefined;
        schema?: DataSourceSchema | undefined;
        serverAggregates?: boolean | undefined;
        serverFiltering?: boolean | undefined;
        serverGrouping?: boolean | undefined;
        serverPaging?: boolean | undefined;
        serverSorting?: boolean | undefined;
        sort?: any;
        transport?: DataSourceTransport | undefined;
        type?: string | undefined;
        change?(e: DataSourceChangeEvent): void;
        error?(e: DataSourceErrorEvent): void;
        push?(e: DataSourcePushEvent): void;
        sync?(e: DataSourceEvent): void;
        requestStart?(e: DataSourceRequestStartEvent): void;
        requestEnd?(e: DataSourceRequestEndEvent): void;
    }

    interface DataSourceEvent {
        sender?: DataSource | undefined;
    }

    interface DataSourceItemOrGroup {
    }

    interface DataSourceGroup extends DataSourceItemOrGroup {
        aggregates: any[];
        field: string;
        hasSubgroups: boolean;
        items: DataSourceItemOrGroup[];
        value: any;
    }

    interface DataSourceChangeEvent extends DataSourceEvent {
        field?: string | undefined;
        value?: Model | undefined;
        action?: string | undefined;
        index?: number | undefined;
        items?: DataSourceItemOrGroup[] | undefined;
        node?: any;
    }

    interface DataSourcePushEvent extends DataSourceEvent {
        items?: DataSourceItemOrGroup[] | undefined;
        type?: string | undefined;
    }

    interface DataSourceErrorEvent extends DataSourceEvent {
        xhr: JQueryXHR;
        status: string;
        errorThrown: any;
        errors?: any;
    }

    interface DataSourceRequestStartEvent extends DataSourceEvent {
        type?: string | undefined;
        preventDefault(): void;
    }

    interface DataSourceRequestEndEvent extends DataSourceEvent {
        response?: any;
        type?: string | undefined;
    }
}

declare namespace kendo.data.binders {
    class attr extends Binder {}

    class css extends Binder {}

    class style extends Binder {}

    class enabled extends Binder {}

    class disabled extends Binder {}

    class readonly extends Binder {}

    class events extends Binder {}

    class text extends Binder {}

    class visible extends Binder {}

    class invisible extends Binder {}

    class html extends Binder {}

    class value extends TypedBinder {
        change(): void;
    }

    class source extends Binder {
        container(): Element;
        template(): String;
        add(index: Number, items: any[]): void;
        remove(index: Number, items: any[]): void;
        render(): void;
    }

    function dataSourceBinding(bindingName: String, fieldName: String, setter: String): DataSourceBinder;
}

declare namespace kendo.data.binders.input {
    class checked extends TypedBinder {
        change(): void;
        value(): any;
    }
}

declare namespace kendo.data.binders.select {
    class source extends binders.source {}

    class value extends TypedBinder {
        change(): void;
    }
}

declare namespace kendo.data.binders.widget {
    class events extends Binder {}

    class checked extends Binder {
        change(): void;
        value(): any;
    }

    class start extends Binder {
        change(): void;
    }

    class end extends Binder {
        change(): void;
    }

    class visible extends Binder {}

    class invisible extends Binder {}

    class enabled extends Binder {}

    class disabled extends Binder {}

    class value extends Binder {
        change(): void;
    }

    function source(bindingName: String, fieldName: String, setter: String): DataSourceBinder;
}

declare namespace kendo.data.binders.widget.dropdowntree {
    class value extends Binder {
        change(): void;
    }
}

declare namespace kendo.data.binders.widget.gantt {
    function dependencies(bindingName: String, fieldName: String, setter: String): DataSourceBinder;
}

declare namespace kendo.data.binders.widget.multiselect {
    class value extends Binder {
        change(): void;
    }
}

declare namespace kendo.data.binders.widget.scheduler {
    function source(bindingName: String, fieldName: String, setter: String): DataSourceBinder;
}

declare namespace kendo.data.binders.widget.grid {
    function source(bindingName: String, fieldName: String, setter: String): DataSourceBinder;
}

declare namespace kendo.data.transports {
    var odata: DataSourceTransport;
    var filebrowser: DataSourceTransport;
    var imagebrowser: DataSourceTransport;
    var signalr: DataSourceTransport;
}

declare namespace kendo.data.schemas {
    var odata: DataSourceSchema;
    var filemanager: DataSourceSchema;
    var filebrowser: DataSourceSchema;
    var imagebrowser: DataSourceSchema;
}

declare namespace kendo.ui {
    function progress(container: JQuery, toggle: boolean): void;
    function icon(element: JQuery, options: string | FontIconOptions | SvgIconOptions): string;
    function icon(options: string | FontIconOptions | SvgIconOptions): string;

    var svgIcons: any;

    class Widget extends Observable {
        static fn: any;

        element: JQuery;
        options: any;
        events: string[];

        static extend(prototype: Object): Widget;

        constructor(element: Element, options?: Object);
        constructor(element: JQuery, options?: Object);
        constructor(selector: String, options?: Object);
        init(element: Element, options?: Object): void;
        init(element: JQuery, options?: Object): void;
        init(selector: String, options?: Object): void;
        destroy(): void;
        setOptions(options: Object): void;
        resize(force?: boolean): void;
    }

    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.ui, prefix?: String): void;
    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.mobile.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.mobile.ui, prefix?: String): void;
    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.dataviz.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.dataviz.ui, prefix?: String): void;

    class Draggable extends kendo.ui.Widget {
        element: JQuery;
        currentTarget: JQuery;
        constructor(element: Element, options?: DraggableOptions);
        options: DraggableOptions;

        cancelHold(): void;
    }

    interface DraggableEvent {
        sender?: Draggable | undefined;
        originalEvent: MouseEvent;
    }

    class DropTarget extends kendo.ui.Widget {
        element: JQuery;
        constructor(element: Element, options?: DropTargetOptions);
        options: DropTargetOptions;
        static destroyGroup(groupName: string): void;
    }

    interface DropTargetOptions {
        group?: string | undefined;
        dragenter?(e: DropTargetDragenterEvent): void;
        dragleave?(e: DropTargetDragleaveEvent): void;
        drop?(e: DropTargetDropEvent): void;
    }

    interface DropTargetEvent {
        sender?: DropTarget | undefined;
        draggable?: kendo.ui.Draggable | undefined;
        dropTarget?: JQuery | undefined;
    }

    interface DropTargetDragenterEvent extends DropTargetEvent {
    }

    interface DropTargetDragleaveEvent extends DropTargetEvent {
    }

    interface DropTargetDropEvent extends DropTargetEvent {
    }

    class DropTargetArea extends kendo.ui.Widget {
        element: JQuery;
        constructor(element: Element, options?: DropTargetAreaOptions);
        options: DropTargetAreaOptions;
    }

    interface DropTargetAreaOptions {
        group?: string | undefined;
        filter?: string | undefined;
        dragenter?(e: DropTargetAreaDragenterEvent): void;
        dragleave?(e: DropTargetAreaDragleaveEvent): void;
        drop?(e: DropTargetAreaDropEvent): void;
    }

    interface DropTargetAreaEvent {
        sender: DropTargetArea;
    }

    interface DropTargetAreaDragenterEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable | undefined;
        dropTarget?: JQuery | undefined;
        target?: Element | undefined;
    }

    interface DropTargetAreaDragleaveEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable | undefined;
        dropTarget?: JQuery | undefined;
        target?: Element | undefined;
    }

    interface DropTargetAreaDropEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable | undefined;
        dropTarget?: JQuery | undefined;
        target?: Element | undefined;
    }

    interface DraggableOptions {
        axis?: string | undefined;
        autoScroll?: boolean | undefined;
        container?: JQuery | undefined;
        cursorOffset?: any;
        distance?: number | undefined;
        filter?: string | undefined;
        group?: string | undefined;
        hint?: Function | JQuery | undefined;
        holdToDrag?: boolean | undefined;
        ignore?: string | undefined;
        drag?(e: DraggableEvent): void;
        dragcancel?(e: DraggableEvent): void;
        dragend?(e: DraggableEvent): void;
        dragstart?(e: DraggableEvent): void;
        hold?(e: DraggableEvent): void;
    }

    type AllEditorOptions =
        | AutoCompleteOptions
        | ColorPickerOptions
        | ComboBoxOptions
        | DateInputOptions
        | DatePickerOptions
        | DateTimePickerOptions
        | DropDownTreeOptions
        | EditorOptions
        | MaskedTextBoxOptions
        | MultiColumnComboBoxOptions
        | MultiSelectOptions
        | NumericTextBoxOptions
        | RatingOptions
        | SliderOptions
        | SwitchOptions
        | TimePickerOptions
        | DropDownListOptions;

    interface EditorDefinitionOptions {
        id?: string | undefined;
        field: string;
        title?: string | undefined;
        model: kendo.data.Model;
        editor?: string | undefined;
        editorOptions?: AllEditorOptions | undefined;
        format?: string | undefined;
    }

    interface EditorDefinition {
        (container: JQuery | Element | string, options: EditorDefinitionOptions): void;
    }
    interface EditorDefinitions {
        number: EditorDefinition;
        date: EditorDefinition;
        string: EditorDefinition;
        boolean: EditorDefinition;
        values: EditorDefinition;
        kendoEditor: EditorDefinition;
    }

    interface MobileEditorDefinitions {
        number: EditorDefinition;
        date: EditorDefinition;
        string: EditorDefinition;
        boolean: EditorDefinition;
        values: EditorDefinition;
    }

    interface EditableOptions {
        name: string;
        editors: EditorDefinitions;
        mobileEditors: MobileEditorDefinitions;
        clearContainer: boolean;
        validateOnBlur: boolean;
        validationSummary: boolean;
        errorTemplate: string;
        skipFocus: boolean;
        size?: string | undefined;
    }
    interface EditorField {
        field?: string | undefined;
        values?: any[] | undefined;
        editor?: string | undefined;
    }

    interface Editable extends Widget {
        options: EditableOptions;
        validatable?: kendo.ui.Validator | undefined;

        editor(field: string | EditorField, modelField: string | kendo.data.DataSourceSchemaModelField): void;
        refresh(): void;
        end(): void;
        destroy(): void;
    }

    interface GridColumnEditorOptions {
        field?: string | undefined;
        format?: string | undefined;
        model?: kendo.data.Model | undefined;
        values?: any[] | undefined;
    }

    interface GridColumn {
        editor?(container: JQuery, options: GridColumnEditorOptions): void;
    }

    interface TreeListEditorOptions {
        field?: string | undefined;
        format?: string | undefined;
        model?: kendo.data.Model | undefined;
        values?: any[] | undefined;
    }

    interface TreeListColumn {
        editor?(container: JQuery, options: TreeListEditorOptions): void;
    }
}

declare namespace kendo.ui.editor {
    class Toolbar extends kendo.ui.Widget {
        element: JQuery;
        options: any;
        tools: any[];
    }
}

declare namespace kendo.ui.filemanager {
    class FileManagerCommand extends kendo.Class {
        static fn: any;
        static extend(prototype: Object): any;
        exec?(): void;
    }
}

declare namespace kendo.ui.filemanager.commands {
    class CreateFolderCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class RenameCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class DeleteCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
        removeItems?(items: any): void;
    }

    class MoveCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class CopyCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class SortCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class SearchCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class ChangeViewCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class OpenDialogCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
    }

    class TogglePaneCommand extends kendo.Class {
        init?(options: any): void;
        exec?(): void;
        getResizable(): void;
    }
}

declare namespace kendo.ui.taskboard {
    class Command extends kendo.Class {
        static fn: any;
        static extend(prototype: Object): any;
        exec?(): void;
    }
}

declare namespace kendo.ui.taskboard.commands {
    class AddColumnCommand extends kendo.ui.taskboard.Command {
    }

    class EditColumnCommand extends kendo.ui.taskboard.Command {
    }

    class DeleteColumnCommand extends kendo.ui.taskboard.Command {
    }

    class SaveColumnCommand extends kendo.ui.taskboard.Command {
    }

    class CancelEditColumnCommand extends kendo.ui.taskboard.Command {
    }

    class OpenPaneCommand extends kendo.ui.taskboard.Command {
    }

    class ClosePaneCommand extends kendo.ui.taskboard.Command {
    }

    class SelectCardCommand extends kendo.ui.taskboard.Command {
    }

    class MoveFocusCommand extends kendo.ui.taskboard.Command {
    }

    class SaveChangesCommand extends kendo.ui.taskboard.Command {
    }

    class DeleteCardCommand extends kendo.ui.taskboard.Command {
    }

    class MoveCardCommand extends kendo.ui.taskboard.Command {
    }

    class EditCardCommand extends kendo.ui.taskboard.Command {
    }

    class AddCardCommand extends kendo.ui.taskboard.Command {
    }

    class SearchCommand extends kendo.ui.taskboard.Command {
    }
}

declare namespace kendo.mobile {
    function init(selector: string): void;
    function init(element: JQuery): void;
    function init(element: Element): void;

    class Application extends Observable {
        options: ApplicationOptions;
        router: kendo.Router;
        pane: kendo.mobile.ui.Pane;

        constructor(element?: any, options?: ApplicationOptions);
        init(element?: any, options?: ApplicationOptions): void;
        changeLoadingMessage(text: string): void;
        hideLoading(): void;
        navigate(url: string, transition?: string): void;
        replace(url: string, transition?: string): void;
        scroller(): kendo.mobile.ui.Scroller;
        showLoading(): void;
        skin(skin: string): string;
        view(): kendo.mobile.ui.View;
    }

    interface ApplicationOptions {
        browserHistory?: boolean | undefined;
        hashBang?: boolean | undefined;
        hideAddressBar?: boolean | undefined;
        updateDocumentTitle?: boolean | undefined;
        initial?: string | undefined;
        layout?: string | undefined;
        loading?: string | undefined;
        modelScope?: Object | undefined;
        platform?: string | undefined;
        pushState?: boolean | undefined;
        root?: string | undefined;
        retina?: boolean | undefined;
        serverNavigation?: boolean | undefined;
        skin?: string | undefined;
        statusBarStyle?: string | undefined;
        transition?: string | undefined;
        useNativeScrolling?: boolean | undefined;
        webAppCapable?: boolean | undefined;
        init?(e: ApplicationEvent): void;
    }

    interface ApplicationEvent {
        sender: Application;
    }
}

declare namespace kendo.mobile.ui {
    class Widget extends kendo.ui.Widget {
    }

    interface TouchAxis {
        location?: number | undefined;
        startLocation?: number | undefined;
        client?: number | undefined;
        delta?: number | undefined;
        velocity?: number | undefined;
    }

    interface TouchEventOptions {
        target?: JQuery | undefined;
        x?: TouchAxis | undefined;
        y?: TouchAxis | undefined;
    }

    interface Point {
        x?: number | undefined;
        y?: number | undefined;
    }
}
declare namespace kendo.dataviz.ui {
    function registerTheme(name: string, options: any): void;

    function plugin(widget: typeof kendo.ui.Widget): void;
    function plugin(widget: any): void;
}

declare namespace kendo.dataviz.map.layer {
    class Shape {
    }
}

declare namespace kendo.drawing.pdf {
    function saveAs(group: kendo.drawing.Group, fileName: string, proxyUrl?: string, callback?: Function): void;
}

declare namespace kendo.ui {
    class ActionSheet extends kendo.ui.Widget {
        static fn: ActionSheet;

        options: ActionSheetOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ActionSheet;

        constructor(element: Element, options?: ActionSheetOptions);

        close(): void;
        destroy(): void;
        fullscreen(fullscreen: boolean): void;
        open(): void;
        toggle(): void;
        visible(): boolean;
    }

    interface ActionSheetItem {
        click?: Function | undefined;
        description?: string | undefined;
        disabled?: boolean | undefined;
        group?: string | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        iconColor?: string | undefined;
        iconSize?: number | undefined;
        text?: string | undefined;
    }

    interface ActionSheetActionButton {
        click?: Function | undefined;
        disabled?: boolean | undefined;
        fillMode?: string | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        text?: string | undefined;
        themeColor?: string | undefined;
    }

    interface ActionSheetOptions {
        name?: string | undefined;
        adaptive?: boolean | undefined;
        actionButtons?: ActionSheetActionButton[] | undefined;
        closeButton?: boolean | undefined;
        contentTemplate?: string | Function | undefined;
        footerTemplate?: string | Function | undefined;
        fullscreen?: boolean | undefined;
        items?: ActionSheetItem[] | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
        activate?(e: ActionSheetEvent): void;
        close?(e: ActionSheetEvent): void;
        deactivate?(e: ActionSheetEvent): void;
        open?(e: ActionSheetEvent): void;
    }
    interface ActionSheetEvent {
        sender: ActionSheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Alert extends kendo.ui.Dialog {
        static fn: Alert;

        options: AlertOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Alert;

        constructor(element: Element, options?: AlertOptions);
    }

    interface AlertMessages {
        okText?: string | undefined;
    }

    interface AlertOptions {
        name?: string | undefined;
        messages?: AlertMessages | undefined;
    }
    interface AlertEvent {
        sender: Alert;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class AppBar extends kendo.ui.Widget {
        static fn: AppBar;

        options: AppBarOptions;
        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): AppBar;

        constructor(element: Element, options?: AppBarOptions);
    }

    interface AppBarItem {
        className?: string | undefined;
        template?: string | Function | undefined;
        type?: string | undefined;
        width?: string | number | undefined;
    }

    interface AppBarOptions {
        name?: string | undefined;
        themeColor?: string | undefined;
        items?: AppBarItem[] | undefined;
        position?: string | undefined;
        positionMode?: string | undefined;
        resize?(e: AppBarResizeEvent): void;
    }

    interface AppBarEvent {
        sender: AppBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface AppBarResizeEvent extends AppBarEvent {
    }

    class AutoComplete extends kendo.ui.Widget {
        static fn: AutoComplete;

        options: AutoCompleteOptions;

        dataSource: kendo.data.DataSource;
        list: JQuery;
        ul: JQuery;
        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): AutoComplete;

        constructor(element: Element, options?: AutoCompleteOptions);

        close(): void;
        dataItem(index: number): any;
        dataItem(index: Element): any;
        dataItem(index: JQuery): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(item: string): void;
        select(item: Element): void;
        select(item: JQuery): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        value(): string;
        value(value: string): void;
    }

    interface AutoCompleteAnimationClose {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface AutoCompleteAnimationOpen {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface AutoCompleteAnimation {
        close?: AutoCompleteAnimationClose | undefined;
        open?: AutoCompleteAnimationOpen | undefined;
    }

    interface AutoCompleteVirtual {
        itemHeight?: number | undefined;
        mapValueTo?: string | undefined;
        valueMapper?: Function | undefined;
    }

    interface AutoCompleteOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | AutoCompleteAnimation | undefined;
        autoWidth?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        clearButton?: boolean | undefined;
        dataTextField?: string | undefined;
        delay?: number | undefined;
        enable?: boolean | undefined;
        enforceMinLength?: boolean | undefined;
        fillMode?: string | undefined;
        filter?: string | undefined;
        fixedGroupTemplate?: string | Function | undefined;
        footerTemplate?: string | Function | undefined;
        label?: string | Function | BaseLabel | undefined;
        groupTemplate?: string | Function | undefined;
        height?: number | undefined;
        highlightFirst?: boolean | undefined;
        ignoreCase?: boolean | undefined;
        minLength?: number | undefined;
        noDataTemplate?: string | Function | boolean | undefined;
        placeholder?: string | undefined;
        popup?: any;
        rounded?: string | undefined;
        size?: string | undefined;
        separator?: string | any | undefined;
        suggest?: boolean | undefined;
        headerTemplate?: string | Function | undefined;
        template?: string | Function | undefined;
        value?: string | undefined;
        valuePrimitive?: boolean | undefined;
        virtual?: boolean | AutoCompleteVirtual | undefined;
        change?(e: AutoCompleteChangeEvent): void;
        close?(e: AutoCompleteCloseEvent): void;
        dataBound?(e: AutoCompleteDataBoundEvent): void;
        filtering?(e: AutoCompleteFilteringEvent): void;
        open?(e: AutoCompleteOpenEvent): void;
        select?(e: AutoCompleteSelectEvent): void;
    }
    interface AutoCompleteEvent {
        sender: AutoComplete;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface AutoCompleteChangeEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteCloseEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteDataBoundEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteFilteringEvent extends AutoCompleteEvent {
        filter?: any;
    }

    interface AutoCompleteOpenEvent extends AutoCompleteEvent {
    }

    interface AutoCompleteSelectEvent extends AutoCompleteEvent {
        dataItem?: any;
        item?: JQuery | undefined;
    }

    class Avatar extends kendo.ui.Widget {
        static fn: Avatar;

        options: AvatarOptions;
        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Avatar;

        constructor(element: Element, options?: AvatarOptions);
    }

    interface AvatarOptions {
        name?: string | undefined;
        alt?: string | undefined;
        border?: boolean | undefined;
        className?: string | undefined;
        fillMode?: string | undefined;
        icon?: string | undefined;
        image?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        style?: any | undefined;
        text?: string | undefined;
        type?: string | undefined;
    }

    class Badge extends kendo.ui.Widget {
        static fn: Badge;

        options: BadgeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Badge;

        constructor(element: Element, options?: BadgeOptions);

        hide(): void;
        icon(icon: string): void;
        rounded(rounded: string): void;
        setOptions(options: any): void;
        show(): void;
        text(text: string): void;
        text(text: number): void;
        themeColor(themeColor: string): void;
    }

    interface BadgeOptions {
        name?: string | undefined;
        align?: string | undefined;
        cutoutBorder?: boolean | undefined;
        fillMode?: string | undefined;
        icon?: string | undefined;
        max?: number | undefined;
        position?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        template?: string | Function | undefined;
        text?: string | number | undefined;
        themeColor?: string | undefined;
        visible?: boolean | undefined;
    }
    interface BadgeEvent {
        sender: Badge;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class BottomNavigation extends kendo.ui.Widget {
        static fn: BottomNavigation;

        options: BottomNavigationOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): BottomNavigation;

        constructor(element: Element, options?: BottomNavigationOptions);

        add(item: any, beforeElement?: HTMLElement): void;
        add(item: any, beforeElement?: JQuery): void;
        enable(element: HTMLElement, state?: boolean): void;
        enable(element: JQuery, state?: boolean): void;
        item(index: number): JQuery;
        item(index: string): JQuery;
        itemById(id: string): JQuery;
        items(): JQuery;
        remove(element: HTMLElement): void;
        remove(element: JQuery): void;
        select(element: HTMLElement, state?: boolean): JQuery;
        select(element: JQuery, state?: boolean): JQuery;
        showText(show: boolean): void;
    }

    interface BottomNavigationItem {
        url?: string | undefined;
        data?: any;
        icon?: string | undefined;
        text?: string | undefined;
        encoded?: boolean | undefined;
        iconClass?: string | undefined;
        cssClass?: string | undefined;
        attributes?: any;
        enabled?: boolean | undefined;
        selected?: boolean | undefined;
        template?: string | Function | undefined;
    }

    interface BottomNavigationOptions {
        name?: string | undefined;
        border?: boolean | undefined;
        shadow?: boolean | undefined;
        fill?: string | undefined;
        itemFlow?: string | undefined;
        themeColor?: string | undefined;
        items?: BottomNavigationItem[] | undefined;
        template?: string | Function | undefined;
        positionMode?: string | undefined;
        select?(e: BottomNavigationSelectEvent): void;
    }
    interface BottomNavigationEvent {
        sender: BottomNavigation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface BottomNavigationSelectEvent extends BottomNavigationEvent {
        originalEvent?: any;
        data?: any;
        item?: JQuery | undefined;
    }
    class Breadcrumb extends kendo.ui.Widget {
        static fn: Breadcrumb;

        options: BreadcrumbOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Breadcrumb;

        constructor(element: Element, options?: BreadcrumbOptions);

        value(path: string): void;
        items(items: BreadcrumbItem[]): void;
        destroy(): void;
    }

    interface BreadcrumbOptions {
        name?: string | undefined;
        items?: BreadcrumbItem[] | undefined;
        bindToLocation?: boolean | undefined;
        delimiterIcon?: string | undefined;
        editable?: boolean | undefined;
        gap?: number | undefined;
        messages?: BreadcrumbMessages | undefined;
        navigational?: boolean | undefined;
        rootIcon?: string | undefined;
        value?: string | undefined;

        change?(e: BreadcrumbChangeEvent): void;
        click?(e: BreadcrumbClickEvent): void;
    }

    interface BreadcrumbMessages {
        rootTitle?: string | undefined;
    }

    interface BreadcrumbItem {
        type?: string | undefined;
        href?: string | undefined;
        text?: string | undefined;
        icon?: string | undefined;
        itemClass?: string | undefined;
        linkClass?: string | undefined;
        iconClass?: string | undefined;
        showIcon?: boolean | undefined;
        showText?: boolean | undefined;
    }

    interface BreadcrumbEvent {
        sender: Breadcrumb;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface BreadcrumbChangeEvent extends BreadcrumbEvent {
        value?: string | undefined;
    }

    interface BreadcrumbClickEvent extends BreadcrumbEvent {
        originalEvent?: any;
        isRoot?: boolean | undefined;
        item?: BreadcrumbItem | undefined;
    }

    class Button extends kendo.ui.Widget {
        static fn: Button;

        options: ButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Button;

        constructor(element: Element, options?: ButtonOptions);

        enable(toggle: boolean): void;
    }

    interface ButtonOptions {
        name?: string | undefined;
        badge?: ButtonBadge | undefined;
        enable?: boolean | undefined;
        fillMode?: string | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        imageUrl?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        spriteCssClass?: string | undefined;
        themeColor?: string | undefined;
        click?(e: ButtonClickEvent): void;
    }

    interface ButtonBadge {
        align?: string | undefined;
        cutoutBorder?: boolean | undefined;
        fill?: string | undefined;
        icon?: string | undefined;
        max?: number | undefined;
        position?: string | undefined;
        shape?: string | undefined;
        size?: string | undefined;
        template?: string | Function | undefined;
        text?: string | number | undefined;
        themeColor?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ButtonEvent {
        sender: Button;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonClickEvent extends ButtonEvent {
        event?: any;
    }

    class ButtonGroup extends kendo.ui.Widget {
        static fn: ButtonGroup;

        options: ButtonGroupOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ButtonGroup;

        constructor(element: Element, options?: ButtonGroupOptions);

        badge(button: string, value: string): string;
        badge(button: string, value: boolean): string;
        badge(button: number, value: string): string;
        badge(button: number, value: boolean): string;
        current(): JQuery;
        destroy(): void;
        enable(enable: boolean): void;
        select(li: JQuery): void;
        select(li: number): void;
        selectedIndices: Array<number>;
    }

    interface ButtonGroupItem {
        attributes?: any;
        badge?: string | undefined;
        enabled?: boolean | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        imageUrl?: string | undefined;
        selected?: boolean | undefined;
        text?: string | undefined;
        encoded?: boolean | undefined;
    }

    interface ButtonGroupOptions {
        name?: string | undefined;
        enable?: boolean | undefined;
        index?: number | undefined;
        selection?: string | undefined;
        items?: ButtonGroupItem[] | undefined;
        fillMode?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        themeColor?: string | undefined;
        select?(e: ButtonGroupSelectEvent): void;
    }
    interface ButtonGroupEvent {
        sender: ButtonGroup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonGroupSelectEvent extends ButtonGroupEvent {
        indices?: any;
    }

    class Calendar extends kendo.ui.Widget {
        static fn: Calendar;

        options: CalendarOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Calendar;

        constructor(element: Element, options?: CalendarOptions);

        current(): Date;
        destroy(): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        navigate(value: Date, view: string): void;
        navigateDown(value: Date): void;
        navigateToFuture(): void;
        navigateToPast(): void;
        navigateUp(): void;
        selectDates(): any;
        selectDates(dates: any): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
        view(): any;
    }

    interface CalendarMessagesParentViews {
        month?: string | undefined;
        year?: string | undefined;
        decade?: string | undefined;
    }

    interface CalendarMessages {
        weekColumnHeader?: string | undefined;
        navigateTo?: string | undefined;
        parentViews?: CalendarMessagesParentViews;
        today?: string | undefined;
    }

    interface CalendarMonth {
        content?: string | undefined;
        weekNumber?: string | undefined;
        empty?: string | undefined;
    }

    interface CalendarOptions {
        name?: string | undefined;
        culture?: string | undefined;
        dates?: any;
        depth?: string | undefined;
        disableDates?: any | Function | undefined;
        footer?: boolean | string | Function | undefined;
        format?: string | undefined;
        max?: Date | undefined;
        messages?: CalendarMessages | undefined;
        min?: Date | undefined;
        month?: CalendarMonth | undefined;
        selectable?: string | undefined;
        selectDates?: any;
        weekNumber?: boolean | undefined;
        start?: string | undefined;
        value?: Date | undefined;
        change?(e: CalendarEvent): void;
        navigate?(e: CalendarEvent): void;
    }
    interface CalendarEvent {
        sender: Calendar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Captcha extends kendo.ui.Widget {
        static fn: Captcha;

        options: CaptchaOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Captcha;

        constructor(element: Element, options?: CaptchaOptions);

        enable(enable: boolean): void;
        getCaptchaId(): string;
        isValid(): boolean;
        readonly(readonly: boolean): void;
        reset(): JQueryPromise<any>;
        speak(): JQueryPromise<any>;
        validate(): JQueryPromise<any>;
    }

    interface CaptchaMessages {
        audio?: string;
        imageAlt?: string;
        reset?: string;
        success?: string;
    }

    interface CaptchaOptions {
        name?: string | undefined;
        audioButton?: boolean | undefined;
        audioHandler?: string | Function | any;
        captcha?: string | undefined;
        captchaId?: string | undefined;
        dataCaptchaField?: string | undefined;
        dataCaptchaIdField?: string | undefined;
        handler?: string | Function | any;
        messages?: CaptchaMessages | undefined;
        resetButton?: boolean | undefined;
        validateOnBlur?: boolean | undefined;
        validationHandler?: string | Function | any;
        volumeControl?: boolean | undefined;
        change?(e: CaptchaChangeEvent): void;
        requestEnd?(e: CaptchaRequestEndEvent): void;
        requestStart?(e: CaptchaRequestStartEvent): void;
        error?(e: CaptchaErrorEvent): void;
    }
    interface CaptchaEvent {
        sender: Captcha;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface CaptchaChangeEvent extends CaptchaEvent {
        value?: string;
    }

    interface CaptchaRequestEndEvent extends CaptchaEvent {
        type?: string;
    }

    interface CaptchaRequestStartEvent extends CaptchaEvent {
        type?: string;
        data?: any;
    }

    interface CaptchaErrorEvent extends CaptchaEvent {
        type?: string;
        jqXHR?: any;
        textStatus?: string;
        errorThrown?: string;
    }

    class Chat extends kendo.ui.Widget {
        static fn: Chat;

        options: ChatOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Chat;

        constructor(element: Element, options?: ChatOptions);

        getUser(): any;
        postMessage(message: string): void;
        renderAttachments(options: any, sender: any): void;
        renderMessage(message: any, sender: any): void;
        renderSuggestedActions(suggestedActions: any): void;
    }

    interface ChatMessages {
        messageListLabel?: string | undefined;
        placeholder?: string | undefined;
        sendButton?: string | undefined;
        toggleButton?: string | undefined;
    }

    interface ChatUser {
        iconUrl?: string | undefined;
        name?: string | undefined;
    }

    interface ChatRenderAttachmentsOptionsAttachments {
        content?: any;
        contentType?: string | undefined;
    }

    interface ChatRenderAttachmentsOptions {
        attachments?: ChatRenderAttachmentsOptionsAttachments | undefined;
        attachmentLayout?: string | undefined;
    }

    interface ChatRenderAttachmentsSender {
        id?: any;
        name?: string | undefined;
        iconUrl?: string | undefined;
    }

    interface ChatRenderMessageMessage {
        type?: string | undefined;
        text?: string | undefined;
    }

    interface ChatRenderMessageSender {
        id?: any;
        name?: string | undefined;
        iconUrl?: string | undefined;
    }

    interface ChatRenderSuggestedActionsSuggestedActions {
        title?: string | undefined;
        value?: string | undefined;
    }

    interface ChatOptions {
        name?: string | undefined;
        messages?: ChatMessages | undefined;
        user?: ChatUser | undefined;
        actionClick?(e: ChatActionClickEvent): void;
        post?(e: ChatPostEvent): void;
        sendMessage?(e: ChatSendMessageEvent): void;
        typingEnd?(e: ChatTypingEndEvent): void;
        typingStart?(e: ChatTypingStartEvent): void;
    }
    interface ChatEvent {
        sender: Chat;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ChatActionClickEvent extends ChatEvent {
        text?: string | undefined;
    }

    interface ChatPostEvent extends ChatEvent {
        text?: string | undefined;
        timestamp?: Date | undefined;
        from?: any;
    }

    interface ChatSendMessageEvent extends ChatEvent {
        text?: string | undefined;
    }

    interface ChatTypingEndEvent extends ChatEvent {
    }

    interface ChatTypingStartEvent extends ChatEvent {
    }

    class CheckBox extends kendo.ui.Widget {
        static fn: CheckBox;

        options: CheckBoxOptions;
        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): CheckBox;

        constructor(element: Element, options?: CheckBoxOptions);

        check(): boolean;
        check(check: boolean): void;
        toggle(): void;
        destroy(): void;
        enable(enable: boolean): void;
    }

    interface CheckBoxOptions {
        name?: string | undefined;
        checked?: boolean | undefined;
        enabled?: boolean | undefined;
        encoded?: boolean | undefined;
        label?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        value?: string | undefined;
        change?(e: CheckBoxChangeEvent): void;
    }
    interface CheckBoxEvent {
        sender: CheckBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface CheckBoxChangeEvent extends CheckBoxEvent {
        checked?: any;
    }

    class CheckBoxGroup extends kendo.ui.Widget {
        static fn: CheckBoxGroup;

        options: CheckBoxGroupOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): CheckBoxGroup;

        constructor(element: Element, options?: CheckBoxGroupOptions);

        checkAll(select: boolean): void;
        enable(enable: boolean): void;
        enableItem(enable: boolean, index: number): void;
        item(index: number): JQuery;
        items(): JQuery;
        value(): any;
        value(value: any): void;
    }

    interface CheckBoxGroupItem {
        attributes?: any;
        cssClass?: string | undefined;
        enabled?: boolean | undefined;
        encoded?: boolean | undefined;
        label?: string | undefined;
        value?: string | undefined;
    }

    interface CheckBoxGroupOptions {
        name?: string | undefined;
        enabled?: boolean | undefined;
        inputName?: string | undefined;
        inputRounded?: string | undefined;
        inputSize?: string | undefined;
        items?: CheckBoxGroupItem[] | undefined;
        labelPosition?: string | undefined;
        layout?: string | undefined;
        value?: any;
        change?(e: CheckBoxGroupChangeEvent): void;
        focus?(e: CheckBoxGroupFocusEvent): void;
        select?(e: CheckBoxGroupSelectEvent): void;
    }
    interface CheckBoxGroupEvent {
        sender: CheckBoxGroup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface CheckBoxGroupChangeEvent extends CheckBoxGroupEvent {
        target?: JQuery | undefined;
    }

    interface CheckBoxGroupFocusEvent extends CheckBoxGroupEvent {
        target?: JQuery | undefined;
    }

    interface CheckBoxGroupSelectEvent extends CheckBoxGroupEvent {
        target?: JQuery | undefined;
    }

    class Chip extends kendo.ui.Widget {
        static fn: Chip;

        options: ChipOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Chip;

        constructor(element: Element, options?: ChipOptions);

        setOptions(options: any): void;
        enable(enable: boolean): void;
        select(state: boolean): void;
        focus(): void;
        destroy(): void;
    }

    interface ChipOptions {
        name?: string | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        avatarClass?: string | undefined;
        removeIcon?: string | undefined;
        removeIconClass?: string | undefined;
        fillMode?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        label?: string | undefined;
        themeColor?: string | undefined;
        removable?: boolean | undefined;
        selectable?: boolean | undefined;
        selected?: boolean | undefined;
        enabled?: boolean | undefined;
        attributes?: any | undefined;
        click?(e: ChipClickEvent): void;
        select?(e: ChipSelectEvent): void;
        remove?(e: ChipRemoveEvent): void;
    }
    interface ChipEvent {
        sender: Chip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ChipClickEvent extends ChipEvent {
        originalEvent?: any;
    }

    interface ChipSelectEvent extends ChipEvent {
        originalEvent?: any;
    }

    interface ChipRemoveEvent extends ChipEvent {
        originalEvent?: any;
    }

    class ChipList extends kendo.ui.Widget {
        static fn: ChipList;

        options: ChipListOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ChipList;

        constructor(element: Element, options?: ChipListOptions);

        add(item: any, beforeElement?: HTMLElement): void;
        add(item: any, beforeElement?: JQuery): void;
        enable(element: HTMLElement, state?: boolean): void;
        enable(element: JQuery, state?: boolean): void;
        item(index: number): JQuery;
        item(index: string): JQuery;
        itemById(id: string): JQuery;
        items(): JQuery;
        remove(element: HTMLElement): void;
        remove(element: JQuery): void;
        select(element: HTMLElement, state?: boolean): JQuery;
        select(element: JQuery, state?: boolean): JQuery;
    }

    interface ChipListItem {
        icon?: string | undefined;
        iconClass?: string | undefined;
        avatarClass?: string | undefined;
        label?: string | undefined;
        themeColor?: string | undefined;
        selected?: boolean | undefined;
        enabled?: boolean | undefined;
        attributes?: any | undefined;
    }

    interface ChipListOptions {
        name?: string | undefined;
        fillMode?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        itemSize?: string | undefined;
        selectable?: boolean | undefined;
        items?: ChipListItem[] | undefined;
        select?(e: ChipListSelectEvent): void;
        remove?(e: ChipListRemoveEvent): void;
    }
    interface ChipListEvent {
        sender: ChipList;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ChipListSelectEvent extends ChipListEvent {
        originalEvent?: any;
        item?: kendo.ui.Chip;
    }

    interface ChipListRemoveEvent extends ChipListEvent {
        originalEvent?: any;
    }

    class CircularProgressBar extends kendo.ui.Widget {
        static fn: CircularProgressBar;

        options: CircularProgressBarOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): CircularProgressBar;

        constructor(element: Element, options?: CircularProgressBarOptions);

        redraw(): void;
        resize(): void;
        setOptions(options: any): void;
        value(): number;
        value(value: number): void;
    }

    interface CircularProgressBarColor {
        color?: string;
        from?: number | undefined;
        to?: number;
    }

    interface CircularProgressBarOptions {
        name?: string | undefined;
        ariaRole?: boolean | undefined;
        label?: string | undefined;
        labelId?: string | undefined;
        centerTemplate?: string | Function | undefined;
        color?: string | undefined;
        colors?: CircularProgressBarColor[] | undefined;
        opacity?: number | undefined;
        theme?: string | undefined;
        transitions?: boolean | undefined;
        indeterminate?: boolean | undefined;
        pointerWidth?: number | undefined;
        value?: number | undefined;
    }
    interface CircularProgressBarEvent {
        sender: CircularProgressBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ColorGradient extends kendo.ui.Widget {
        static fn: ColorGradient;

        options: ColorGradientOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ColorGradient;

        constructor(element: Element, options?: ColorGradientOptions);

        focus(): void;
        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;
    }

    interface ColorGradientContrastTool {
        backgroundColor?: string | kendo.Color;
    }

    interface ColorGradientMessages {
        contrastRatio?: string | undefined;
        fail?: string | undefined;
        pass?: string;
        gradient?: string | undefined;
        palette?: string | undefined;
        toggleFormat?: string | undefined;
        red?: string | undefined;
        green?: string | undefined;
        blue?: string | undefined;
        hex?: string | undefined;
    }

    interface ColorGradientOptions {
        name?: string | undefined;
        opacity?: boolean | undefined;
        contrastTool?: boolean | ColorGradientContrastTool | undefined;
        format?: string | undefined;
        formats?: any | undefined;
        value?: string | kendo.Color | undefined;
        messages?: ColorGradientMessages | undefined;
        change?(e: ColorGradientChangeEvent): void;
    }
    interface ColorGradientEvent {
        sender: ColorGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ColorGradientChangeEvent extends ColorGradientEvent {
        value?: string | undefined;
    }

    class ColorPalette extends kendo.ui.Widget {
        static fn: ColorPalette;

        options: ColorPaletteOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ColorPalette;

        constructor(element: Element, options?: ColorPaletteOptions);

        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;
    }

    interface ColorPaletteTileSize {
        width?: number | undefined;
        height?: number | undefined;
    }

    interface ColorPaletteOptions {
        name?: string | undefined;
        palette?: string | any | undefined;
        columns?: number | undefined;
        tileSize?: ColorPaletteTileSize | undefined;
        value?: string | undefined;
        change?(e: ColorPaletteEvent): void;
    }
    interface ColorPaletteEvent {
        sender: ColorPalette;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ColorPicker extends kendo.ui.Widget {
        static fn: ColorPicker;

        options: ColorPickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ColorPicker;

        constructor(element: Element, options?: ColorPickerOptions);

        close(): void;
        open(): void;
        toggle(): void;
        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;
        setBackgroundColor(color: string): void;
        setBackgroundColor(color: kendo.Color): void;
    }

    interface ColorPickerContrastTool {
        backgroundColor?: string | kendo.Color;
    }

    interface ColorPickerMessages {
        apply?: string;
        cancel?: string;
        clearColor?: string;
        previewInput?: string;
        contrastRatio?: string;
        fail?: string;
        pass?: string;
        gradient?: string;
        palette?: string;
        toggleFormat?: string;
        red?: string;
        green?: string;
        blue?: string;
        hex?: string;
    }

    interface ColorPickerTileSize {
        width?: number;
        height?: number;
    }

    interface ColorPickerOptions {
        name?: string | undefined;
        buttons?: boolean | undefined;
        contrastTool?: boolean | ColorPickerContrastTool | undefined;
        clearButton?: boolean | undefined;
        columns?: number | undefined;
        format?: string | undefined;
        formats?: any;
        tileSize?: ColorPickerTileSize | undefined;
        messages?: ColorPickerMessages | undefined;
        palette?: string | any;
        opacity?: boolean | undefined;
        preview?: boolean | undefined;
        toolIcon?: string | undefined;
        value?: string | kendo.Color | undefined;
        view?: string | undefined;
        views?: any;
        fillMode?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        change?(e: ColorPickerChangeEvent): void;
        select?(e: ColorPickerSelectEvent): void;
        open?(e: ColorPickerEvent): void;
        close?(e: ColorPickerEvent): void;
    }
    interface ColorPickerEvent {
        sender: ColorPicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ColorPickerChangeEvent extends ColorPickerEvent {
        value?: string;
    }

    interface ColorPickerSelectEvent extends ColorPickerEvent {
        value?: string;
    }

    class ComboBox extends kendo.ui.Widget {
        static fn: ComboBox;

        options: ComboBoxOptions;

        dataSource: kendo.data.DataSource;
        input: JQuery;
        list: JQuery;
        ul: JQuery;
        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ComboBox;

        constructor(element: Element, options?: ComboBoxOptions);

        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(): number;
        select(li: JQuery): void;
        select(li: number): void;
        select(li: Function): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface ComboBoxAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface ComboBoxAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface ComboBoxAnimation {
        close?: ComboBoxAnimationClose | undefined;
        open?: ComboBoxAnimationOpen | undefined;
    }

    interface ComboBoxPopup {
        appendTo?: string | undefined;
        origin?: string | undefined;
        position?: string | undefined;
    }

    interface ComboBoxVirtual {
        itemHeight?: number | undefined;
        mapValueTo?: string | undefined;
        valueMapper?: Function | undefined;
    }

    interface ComboBoxOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: ComboBoxAnimation | undefined;
        autoBind?: boolean | undefined;
        autoWidth?: boolean | undefined;
        cascadeFrom?: string | undefined;
        cascadeFromField?: string | undefined;
        cascadeFromParentField?: string | undefined;
        cascadeOnCustomValue?: boolean | undefined;
        clearButton?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        delay?: number | undefined;
        enable?: boolean | undefined;
        enforceMinLength?: boolean | undefined;
        fillMode?: string | undefined;
        filter?: string | undefined;
        fixedGroupTemplate?: string | Function | undefined;
        footerTemplate?: string | Function | undefined;
        label?: string | Function | BaseLabel | undefined;
        groupTemplate?: string | Function | undefined;
        height?: number | undefined;
        highlightFirst?: boolean | undefined;
        ignoreCase?: boolean | undefined;
        index?: number | undefined;
        minLength?: number | undefined;
        noDataTemplate?: string | Function | boolean | undefined;
        placeholder?: string | undefined;
        popup?: ComboBoxPopup | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        suggest?: boolean | undefined;
        syncValueAndText?: boolean | undefined;
        headerTemplate?: string | Function | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        value?: string | undefined;
        valuePrimitive?: boolean | undefined;
        virtual?: boolean | ComboBoxVirtual | undefined;
        change?(e: ComboBoxChangeEvent): void;
        close?(e: ComboBoxCloseEvent): void;
        dataBound?(e: ComboBoxDataBoundEvent): void;
        filtering?(e: ComboBoxFilteringEvent): void;
        open?(e: ComboBoxOpenEvent): void;
        select?(e: ComboBoxSelectEvent): void;
        cascade?(e: ComboBoxCascadeEvent): void;
    }
    interface ComboBoxEvent {
        sender: ComboBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ComboBoxChangeEvent extends ComboBoxEvent {
    }

    interface ComboBoxCloseEvent extends ComboBoxEvent {
    }

    interface ComboBoxDataBoundEvent extends ComboBoxEvent {
    }

    interface ComboBoxFilteringEvent extends ComboBoxEvent {
        filter?: any;
    }

    interface ComboBoxOpenEvent extends ComboBoxEvent {
    }

    interface ComboBoxSelectEvent extends ComboBoxEvent {
        dataItem?: any;
        item?: JQuery | undefined;
    }

    interface ComboBoxCascadeEvent extends ComboBoxEvent {
    }

    class Confirm extends kendo.ui.Dialog {
        static fn: Confirm;

        options: ConfirmOptions;

        result: JQueryPromise<any>;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Confirm;

        constructor(element: Element, options?: ConfirmOptions);

        open(): kendo.ui.Confirm;
    }

    interface ConfirmMessages {
        okText?: string | undefined;
        cancel?: string | undefined;
    }

    interface ConfirmOptions {
        name?: string | undefined;
        content?: string | undefined;
        messages?: ConfirmMessages | undefined;
        title?: string | boolean | undefined;
        initOpen?(e: DialogEvent): void;
        open?(e: DialogEvent): void;
    }
    interface ConfirmEvent {
        sender: Confirm;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ContextMenu extends kendo.ui.Widget {
        static fn: ContextMenu;

        options: ContextMenuOptions;

        dataSource: kendo.data.DataSource;
        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ContextMenu;

        constructor(element: Element, options?: ContextMenuOptions);

        append(item: any, referenceItem?: string): kendo.ui.ContextMenu;
        append(item: any, referenceItem?: JQuery): kendo.ui.ContextMenu;
        close(element: Element): kendo.ui.ContextMenu;
        close(element: JQuery): kendo.ui.ContextMenu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.ContextMenu;
        enable(element: Element, enable: boolean): kendo.ui.ContextMenu;
        enable(element: JQuery, enable: boolean): kendo.ui.ContextMenu;
        findByUid(uid: string): JQuery;
        insertAfter(item: any, referenceItem: string): kendo.ui.ContextMenu;
        insertAfter(item: any, referenceItem: Element): kendo.ui.ContextMenu;
        insertAfter(item: any, referenceItem: JQuery): kendo.ui.ContextMenu;
        insertBefore(item: any, referenceItem: string): kendo.ui.ContextMenu;
        insertBefore(item: any, referenceItem: Element): kendo.ui.ContextMenu;
        insertBefore(item: any, referenceItem: JQuery): kendo.ui.ContextMenu;
        open(x: number, y?: number): kendo.ui.ContextMenu;
        open(x: Element, y?: number): kendo.ui.ContextMenu;
        open(x: JQuery, y?: number): kendo.ui.ContextMenu;
        remove(element: string): kendo.ui.ContextMenu;
        remove(element: Element): kendo.ui.ContextMenu;
        remove(element: JQuery): kendo.ui.ContextMenu;
    }

    interface ContextMenuAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface ContextMenuAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface ContextMenuAnimation {
        close?: ContextMenuAnimationClose | undefined;
        open?: ContextMenuAnimationOpen | undefined;
    }

    interface ContextMenuScrollable {
        distance?: number | undefined;
    }

    interface ContextMenuOptions {
        name?: string | undefined;
        alignToAnchor?: boolean | undefined;
        animation?: boolean | ContextMenuAnimation | undefined;
        appendTo?: string | JQuery | undefined;
        closeOnClick?: boolean | undefined;
        copyAnchorStyles?: boolean | undefined;
        dataSource?: any | any | kendo.data.HierarchicalDataSource | undefined;
        dataTextField?: string | undefined;
        dataUrlField?: string | undefined;
        dataSpriteCssClassField?: string | undefined;
        dataImageUrlField?: string | undefined;
        dataContentField?: string | undefined;
        direction?: string | undefined;
        filter?: string | undefined;
        hoverDelay?: number | undefined;
        orientation?: string | undefined;
        popupCollision?: string | undefined;
        scrollable?: boolean | ContextMenuScrollable | undefined;
        showOn?: string | undefined;
        target?: string | JQuery | undefined;
        close?(e: ContextMenuCloseEvent): void;
        open?(e: ContextMenuOpenEvent): void;
        activate?(e: ContextMenuActivateEvent): void;
        deactivate?(e: ContextMenuDeactivateEvent): void;
        select?(e: ContextMenuSelectEvent): void;
    }
    interface ContextMenuEvent {
        sender: ContextMenu;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ContextMenuCloseEvent extends ContextMenuEvent {
        item?: Element | undefined;
        type?: string | undefined;
        target?: Element | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface ContextMenuOpenEvent extends ContextMenuEvent {
        item?: Element | undefined;
        type?: string | undefined;
        target?: Element | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface ContextMenuActivateEvent extends ContextMenuEvent {
        item?: Element | undefined;
        type?: string | undefined;
        target?: Element | undefined;
    }

    interface ContextMenuDeactivateEvent extends ContextMenuEvent {
        item?: Element | undefined;
        type?: string | undefined;
        target?: Element | undefined;
    }

    interface ContextMenuSelectEvent extends ContextMenuEvent {
        item?: Element | undefined;
        type?: string | undefined;
        target?: Element | undefined;
    }

    interface BaseLabel {
        content?: string | Function | undefined;
        floating?: boolean | undefined;
    }

    class DateInput extends kendo.ui.Widget {
        static fn: DateInput;

        options: DateInputOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DateInput;

        constructor(element: Element, options?: DateInputOptions);

        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        setOptions(options: any): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
    }

    interface DateInputMessages {
        year?: string | undefined;
        month?: string | undefined;
        day?: string | undefined;
        weekday?: string | undefined;
        hour?: string | undefined;
        minute?: string | undefined;
        second?: string | undefined;
        dayperiod?: string | undefined;
    }

    interface DateInputSteps {
        year?: Number | undefined;
        month?: Number | undefined;
        day?: Number | undefined;
        millisecond?: Number | undefined;
        hour?: Number | undefined;
        minute?: Number | undefined;
        second?: Number | undefined;
    }

    interface DateInputOptions {
        autoCorrectParts?: boolean | undefined;
        autoSwitchKeys?: any | undefined;
        autoSwitchParts?: boolean | undefined;
        enableMouseWheel?: boolean | undefined;
        name?: string | undefined;
        fillMode?: string | undefined;
        format?: string | undefined;
        label?: string | Function | BaseLabel | undefined;
        max?: Date | undefined;
        min?: Date | undefined;
        value?: Date | undefined;
        messages?: DateInputMessages | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        steps?: DateInputSteps | undefined;
        change?(e: DateInputChangeEvent): void;
    }
    interface DateInputEvent {
        sender: DateInput;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DateInputChangeEvent extends DateInputEvent {
    }

    class DatePicker extends kendo.ui.Widget {
        static fn: DatePicker;

        options: DatePickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DatePicker;

        constructor(element: Element, options?: DatePickerOptions);

        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(): void;
        setOptions(options: any): void;
        value(): Date;
        value(value?: Date): void;
        value(value?: string): void;
    }

    interface DatePickerAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DatePickerAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DatePickerAnimation {
        close?: DatePickerAnimationClose | undefined;
        open?: DatePickerAnimationOpen | undefined;
    }

    interface DatePickerMonth {
        content?: string | undefined;
        weekNumber?: string | undefined;
        empty?: string | undefined;
    }

    interface DatePickerMessages {
        weekColumnHeader?: string;
        dateInput?: DateInputMessages | undefined;
    }

    interface DatePickerOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | DatePickerAnimation | undefined;
        ARIATemplate?: string | undefined;
        componentType?: string | undefined;
        culture?: string | undefined;
        dateInput?: boolean | undefined;
        dates?: any;
        depth?: string | undefined;
        disableDates?: any | Function | undefined;
        footer?: boolean | string | Function | undefined;
        fillMode?: string | undefined;
        format?: string | undefined;
        label?: string | Function | BaseLabel | undefined;
        max?: Date | undefined;
        messages?: DatePickerMessages | undefined;
        min?: Date | undefined;
        month?: DatePickerMonth | undefined;
        weekNumber?: boolean | undefined;
        parseFormats?: any;
        rounded?: string | undefined;
        size?: string | undefined;
        start?: string | undefined;
        value?: Date | undefined;
        change?(e: DatePickerChangeEvent): void;
        close?(e: DatePickerCloseEvent): void;
        open?(e: DatePickerOpenEvent): void;
    }
    interface DatePickerEvent {
        sender: DatePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DatePickerChangeEvent extends DatePickerEvent {
    }

    interface DatePickerCloseEvent extends DatePickerEvent {
    }

    interface DatePickerOpenEvent extends DatePickerEvent {
    }

    class DateRangePicker extends kendo.ui.Widget {
        static fn: DateRangePicker;

        options: DateRangePickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DateRangePicker;

        constructor(element: Element, options?: DateRangePickerOptions);

        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(): void;
        range(): any;
        range(range: DateRangePickerRange): void;
        setOptions(options: any): void;
    }

    interface DateRangePickerMessages {
        startLabel?: string | undefined;
        endLabel?: string | undefined;
    }

    interface DateRangePickerMonth {
        content?: string | undefined;
        weekNumber?: string | undefined;
        empty?: string | undefined;
    }

    interface DateRangePickerRange {
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface DateRangePickerOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        ARIATemplate?: string | undefined;
        culture?: string | undefined;
        dates?: any;
        depth?: string | undefined;
        disableDates?: any | Function | undefined;
        fillMode?: string | undefined;
        footer?: string | Function | undefined;
        format?: string | undefined;
        max?: Date | undefined;
        messages?: DateRangePickerMessages | undefined;
        min?: Date | undefined;
        month?: DateRangePickerMonth | undefined;
        labels?: boolean | undefined;
        weekNumber?: boolean | undefined;
        range?: DateRangePickerRange | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        start?: string | undefined;
        change?(e: DateRangePickerChangeEvent): void;
        close?(e: DateRangePickerCloseEvent): void;
        open?(e: DateRangePickerOpenEvent): void;
    }
    interface DateRangePickerEvent {
        sender: DateRangePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DateRangePickerChangeEvent extends DateRangePickerEvent {
    }

    interface DateRangePickerCloseEvent extends DateRangePickerEvent {
    }

    interface DateRangePickerOpenEvent extends DateRangePickerEvent {
    }

    class DateTimePicker extends kendo.ui.Widget {
        static fn: DateTimePicker;

        options: DateTimePickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DateTimePicker;

        constructor(element: Element, options?: DateTimePickerOptions);

        close(view: string): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(view: string): void;
        setOptions(options: any): void;
        toggle(view: string): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
    }

    interface DateTimePickerAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DateTimePickerAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DateTimePickerAnimation {
        close?: DateTimePickerAnimationClose | undefined;
        open?: DateTimePickerAnimationOpen | undefined;
    }

    interface DateTimePickerMonth {
        content?: string | undefined;
        weekNumber?: string | undefined;
        empty?: string | undefined;
    }

    interface DateTimePickerMessages {
        weekColumnHeader?: string;
        dateInput?: DateInputMessages | undefined;
    }

    interface DateTimePickerOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | DateTimePickerAnimation | undefined;
        ARIATemplate?: string | undefined;
        culture?: string | undefined;
        dateInput?: boolean | undefined;
        dates?: any;
        depth?: string | undefined;
        disableDates?: any | Function | undefined;
        endTime?: Date | undefined;
        fillMode?: string | undefined;
        footer?: boolean | string | Function | undefined;
        format?: string | undefined;
        label?: string | Function | BaseLabel | undefined;
        interval?: number | undefined;
        max?: Date | undefined;
        messages?: DateTimePickerMessages | undefined;
        min?: Date | undefined;
        month?: DateTimePickerMonth | undefined;
        weekNumber?: boolean | undefined;
        parseFormats?: any;
        rounded?: string | undefined;
        size?: string | undefined;
        start?: string | undefined;
        startTime?: Date | undefined;
        timeFormat?: string | undefined;
        value?: Date | undefined;
        change?(e: DateTimePickerChangeEvent): void;
        close?(e: DateTimePickerCloseEvent): void;
        open?(e: DateTimePickerOpenEvent): void;
    }
    interface DateTimePickerEvent {
        sender: DateTimePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DateTimePickerChangeEvent extends DateTimePickerEvent {
    }

    interface DateTimePickerCloseEvent extends DateTimePickerEvent {
        view?: string | undefined;
    }

    interface DateTimePickerOpenEvent extends DateTimePickerEvent {
        view?: string | undefined;
    }

    class Dialog extends kendo.ui.Widget {
        static fn: Dialog;

        options: any;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Dialog;

        constructor(element: Element, options?: DialogOptions);

        center(): kendo.ui.Dialog;
        close(): kendo.ui.Dialog;
        content(): string;
        content(content?: string): kendo.ui.Dialog;
        content(content?: JQuery): kendo.ui.Dialog;
        destroy(): void;
        open(): kendo.ui.Dialog;
        title(): string;
        title(text?: string): kendo.ui.Dialog;
        toFront(): kendo.ui.Dialog;
    }

    interface DialogAction {
        text?: string | undefined;
        action?: Function | undefined;
        primary?: boolean | undefined;
    }

    interface DialogAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DialogAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DialogAnimation {
        close?: DialogAnimationClose | undefined;
        open?: DialogAnimationOpen | undefined;
    }

    interface DialogMessages {
        close?: string | undefined;
        promptInput?: string | undefined;
    }

    interface DialogModal {
        preventScroll?: string | undefined;
    }

    interface DialogOptions {
        name?: string | undefined;
        actions?: DialogAction[] | undefined;
        animation?: boolean | DialogAnimation | undefined;
        buttonLayout?: string | undefined;
        closable?: boolean | undefined;
        content?: string | undefined;
        height?: number | string | undefined;
        maxHeight?: number | undefined;
        maxWidth?: number | undefined;
        messages?: DialogMessages | undefined;
        minHeight?: number | undefined;
        minWidth?: number | undefined;
        modal?: boolean | DialogModal | undefined;
        themeColor?: string | undefined;
        title?: string | boolean | undefined;
        visible?: boolean | undefined;
        width?: number | string | undefined;
        size?: string | undefined;
        close?(e: DialogCloseEvent): void;
        hide?(e: DialogEvent): void;
        initOpen?(e: DialogEvent): void;
        open?(e: DialogEvent): void;
        show?(e: DialogEvent): void;
    }
    interface DialogEvent {
        sender: Dialog;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DialogCloseEvent extends DialogEvent {
        userTriggered?: boolean | undefined;
    }

    class Drawer extends kendo.ui.Widget {
        static fn: Drawer;

        options: DrawerOptions;

        element: JQuery;
        wrapper: JQuery;
        visible: boolean;

        static extend(proto: Object): Drawer;

        constructor(element: Element, options?: DrawerOptions);

        destroy(): void;
        hide(): void;
        show(): void;
    }

    interface DrawerMini {
        width?: number | undefined;
        template?: string | undefined;
    }

    interface DrawerOptions {
        name?: string | undefined;
        position?: string | undefined;
        mode?: string | undefined;
        template?: string | undefined;
        minHeight?: number | undefined;
        mini?: boolean | DrawerMini | undefined;
        swipeToOpen?: boolean | undefined;
        hide?(e: DrawerHideEvent): void;
        show?(e: DrawerEvent): void;
        itemClick?(e: DrawerEvent): void;
    }
    interface DrawerEvent {
        sender: Drawer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DrawerHideEvent extends DrawerEvent {
    }

    class DropDownButton extends kendo.ui.Widget {
        static fn: DropDownButton;

        options: DropDownButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DropDownButton;

        constructor(element: Element, options?: DropDownButtonOptions);

        enable(state: boolean, items: string): void;
        enable(state: boolean, items: JQuery): void;
        hide(items: string): void;
        hide(items: JQuery): void;
        show(items: string): void;
        show(items: JQuery): void;
        items(): JQuery;
        open(): void;
        close(): void;
    }

    interface DropDownButtonItem {
        attributes?: any | undefined;
        click?: Function | undefined;
        data?: Function | undefined;
        enabled?: boolean | undefined;
        hidden?: boolean | undefined;
        icon?: string | undefined;
        id?: string | undefined;
        imageUrl?: string | undefined;
        spriteCssClass?: string | undefined;
        text?: string | undefined;
    }

    interface DropDownButtonPopup {
        appendTo?: string | undefined;
    }

    interface DropDownButtonMessages {
        labelSuffix?: string | undefined;
    }

    interface DropDownButtonOptions {
        name?: string | undefined;
        enabled?: boolean | undefined;
        fillMode?: string | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        imageUrl?: string | undefined;
        items?: DropDownButtonItem[] | undefined;
        itemTemplate?: string | Function | undefined;
        popup?: DropDownButtonPopup | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        spriteCssClass?: string | undefined;
        themeColor?: string | undefined;
        messages?: DropDownButtonMessages | undefined;
        click?(e: DropDownButtonClickEvent): void;
        open?(e: DropDownButtonEvent): void;
        close?(e: DropDownButtonEvent): void;
    }
    interface DropDownButtonEvent {
        sender: DropDownButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DropDownButtonClickEvent extends DropDownButtonEvent {
        originalEvent?: any | undefined;
        target?: JQuery | undefined;
        id?: string | undefined;
    }

    class DropDownList extends kendo.ui.Widget {
        static fn: DropDownList;

        options: DropDownListOptions;

        dataSource: kendo.data.DataSource;
        span: JQuery;
        filterInput: JQuery;
        list: JQuery;
        ul: JQuery;
        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DropDownList;

        constructor(element: Element, options?: DropDownListOptions);

        close(): void;
        dataItem(index?: JQuery): any;
        dataItem(index?: number): any;
        destroy(): void;
        focus(): void;
        items(): any;
        enable(enable: boolean): void;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(): number;
        select(li: JQuery): void;
        select(li: number): void;
        select(li: Function): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface DropDownListAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DropDownListAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DropDownListAnimation {
        close?: DropDownListAnimationClose | undefined;
        open?: DropDownListAnimationOpen | undefined;
    }

    interface DropDownListPopup {
        appendTo?: string | undefined;
        origin?: string | undefined;
        position?: string | undefined;
    }

    interface DropDownListVirtual {
        itemHeight?: number | undefined;
        mapValueTo?: string | undefined;
        valueMapper?: Function | undefined;
    }

    interface DropDownListOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | DropDownListAnimation | undefined;
        autoBind?: boolean | undefined;
        autoWidth?: boolean | undefined;
        cascadeFrom?: string | undefined;
        cascadeFromField?: string | undefined;
        cascadeFromParentField?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        delay?: number | undefined;
        enable?: boolean | undefined;
        enforceMinLength?: boolean | undefined;
        fillMode?: string | undefined;
        filter?: string | undefined;
        fixedGroupTemplate?: string | Function | undefined;
        label?: string | Function | BaseLabel | undefined;
        footerTemplate?: string | Function | undefined;
        groupTemplate?: string | Function | undefined;
        height?: number | undefined;
        ignoreCase?: boolean | undefined;
        index?: number | undefined;
        filterTitle?: string | undefined;
        minLength?: number | undefined;
        noDataTemplate?: string | Function | boolean | undefined;
        popup?: DropDownListPopup | undefined;
        optionLabel?: string | any | undefined;
        optionLabelTemplate?: string | Function | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        headerTemplate?: string | Function | undefined;
        template?: string | Function | undefined;
        valueTemplate?: string | Function | undefined;
        text?: string | undefined;
        value?: string | undefined;
        valuePrimitive?: boolean | undefined;
        virtual?: boolean | DropDownListVirtual | undefined;
        change?(e: DropDownListChangeEvent): void;
        close?(e: DropDownListCloseEvent): void;
        dataBound?(e: DropDownListDataBoundEvent): void;
        filtering?(e: DropDownListFilteringEvent): void;
        open?(e: DropDownListOpenEvent): void;
        select?(e: DropDownListSelectEvent): void;
        cascade?(e: DropDownListCascadeEvent): void;
    }
    interface DropDownListEvent {
        sender: DropDownList;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DropDownListChangeEvent extends DropDownListEvent {
    }

    interface DropDownListCloseEvent extends DropDownListEvent {
    }

    interface DropDownListDataBoundEvent extends DropDownListEvent {
    }

    interface DropDownListFilteringEvent extends DropDownListEvent {
        filter?: any;
    }

    interface DropDownListOpenEvent extends DropDownListEvent {
    }

    interface DropDownListSelectEvent extends DropDownListEvent {
        dataItem?: any;
        item?: JQuery | undefined;
    }

    interface DropDownListCascadeEvent extends DropDownListEvent {
    }

    class DropDownTree extends kendo.ui.Widget {
        static fn: DropDownTree;

        options: DropDownTreeOptions;

        dataSource: kendo.data.DataSource;
        tagList: JQuery;
        tree: JQuery;
        treeview: kendo.ui.TreeView;
        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DropDownTree;

        constructor(element: Element, options?: DropDownTreeOptions);

        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        setDataSource(dataSource: kendo.data.HierarchicalDataSource): void;
        toggle(toggle?: boolean): void;
        value(): any;
        value(value: any): void;
        value(value: string): void;
    }

    interface DropDownTreeAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DropDownTreeAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface DropDownTreeAnimation {
        close?: DropDownTreeAnimationClose | undefined;
        open?: DropDownTreeAnimationOpen | undefined;
    }

    interface DropDownTreeCheckboxes {
        checkChildren?: boolean | undefined;
        name?: string | undefined;
        template?: string | Function | undefined;
    }

    interface DropDownTreeMessages {
        clear?: string | undefined;
        deleteTag?: string | undefined;
        singleTag?: string | undefined;
    }

    interface DropDownTreePopup {
        appendTo?: string | undefined;
        origin?: string | undefined;
        position?: string | undefined;
    }

    interface DropDownTreeOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | DropDownTreeAnimation | undefined;
        autoBind?: boolean | undefined;
        autoClose?: boolean | undefined;
        autoWidth?: boolean | undefined;
        checkAll?: boolean | undefined;
        checkAllTemplate?: string | Function | undefined;
        checkboxes?: boolean | DropDownTreeCheckboxes | undefined;
        clearButton?: boolean | undefined;
        dataImageUrlField?: string | undefined;
        dataSource?: any | any | kendo.data.HierarchicalDataSource | undefined;
        dataSpriteCssClassField?: string | undefined;
        dataTextField?: string | any | undefined;
        dataUrlField?: string | undefined;
        dataValueField?: string | any | undefined;
        delay?: number | undefined;
        enable?: boolean | undefined;
        enforceMinLength?: boolean | undefined;
        filter?: string | undefined;
        filterLabel?: string | undefined;
        fillMode?: string | undefined;
        label?: string | Function | BaseLabel | undefined;
        footerTemplate?: string | Function | undefined;
        height?: string | number | undefined;
        ignoreCase?: boolean | undefined;
        loadOnDemand?: boolean | undefined;
        messages?: DropDownTreeMessages | undefined;
        minLength?: number | undefined;
        noDataTemplate?: string | Function | boolean | undefined;
        placeholder?: string | undefined;
        popup?: DropDownTreePopup | undefined;
        rounded?: string | undefined;
        headerTemplate?: string | Function | undefined;
        valueTemplate?: string | Function | undefined;
        tagMode?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        value?: string | any | undefined;
        valuePrimitive?: boolean | undefined;
        size?: string | undefined;
        change?(e: DropDownTreeChangeEvent): void;
        close?(e: DropDownTreeCloseEvent): void;
        dataBound?(e: DropDownTreeDataBoundEvent): void;
        filtering?(e: DropDownTreeFilteringEvent): void;
        open?(e: DropDownTreeOpenEvent): void;
        select?(e: DropDownTreeSelectEvent): void;
    }
    interface DropDownTreeEvent {
        sender: DropDownTree;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DropDownTreeChangeEvent extends DropDownTreeEvent {
    }

    interface DropDownTreeCloseEvent extends DropDownTreeEvent {
    }

    interface DropDownTreeDataBoundEvent extends DropDownTreeEvent {
    }

    interface DropDownTreeFilteringEvent extends DropDownTreeEvent {
        filter?: any;
    }

    interface DropDownTreeOpenEvent extends DropDownTreeEvent {
    }

    interface DropDownTreeSelectEvent extends DropDownTreeEvent {
        node?: Element | undefined;
    }

    class Editor extends kendo.ui.Widget {
        static fn: Editor;

        options: EditorOptions;

        body: Element;
        toolbar: kendo.ui.editor.Toolbar;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Editor;

        constructor(element: Element, options?: EditorOptions);

        createRange(document?: Document): Range;
        destroy(): void;
        encodedValue(): string;
        exec(name: string, params: any): void;
        focus(): void;
        getRange(): Range;
        getSelection(): Selection;
        paste(html: string, options: any): void;
        selectedHtml(): string;
        refresh(): void;
        saveAsPDF(): JQueryPromise<any>;
        selectRange(range: Range): void;
        update(): void;
        state(toolName: string): boolean;
        value(): string;
        value(value: string): void;
    }

    interface EditorDeserialization {
        custom?: Function | undefined;
    }

    interface EditorFileBrowserMessages {
        uploadFile?: string | undefined;
        orderBy?: string | undefined;
        orderByName?: string | undefined;
        orderBySize?: string | undefined;
        directoryNotFound?: string | undefined;
        emptyFolder?: string | undefined;
        deleteFile?: string | undefined;
        invalidFileType?: string | undefined;
        overwriteFile?: string | undefined;
        search?: string | undefined;
    }

    interface EditorFileBrowserSchemaModelFieldsName {
        field?: string | undefined;
        parse?: Function | undefined;
    }

    interface EditorFileBrowserSchemaModelFieldsSize {
        field?: string | undefined;
        parse?: Function | undefined;
    }

    interface EditorFileBrowserSchemaModelFieldsType {
        parse?: Function | undefined;
        field?: string | undefined;
    }

    interface EditorFileBrowserSchemaModelFields {
        name?: string | EditorFileBrowserSchemaModelFieldsName | undefined;
        type?: string | EditorFileBrowserSchemaModelFieldsType | undefined;
        size?: string | EditorFileBrowserSchemaModelFieldsSize | undefined;
    }

    interface EditorFileBrowserSchemaModel {
        id?: string | undefined;
        fields?: EditorFileBrowserSchemaModelFields | undefined;
    }

    interface EditorFileBrowserSchema {
    }

    interface EditorFileBrowserTransportCreate {
        contentType?: string | undefined;
        data?: any | string | Function | undefined;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: string | Function | undefined;
    }

    interface EditorFileBrowserTransportDestroy {
        contentType?: string | undefined;
        data?: any | string | Function | undefined;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: string | Function | undefined;
    }

    interface EditorFileBrowserTransportRead {
        contentType?: string | undefined;
        data?: any | string | Function | undefined;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: string | Function | undefined;
    }

    interface EditorFileBrowserTransport {
        read?: string | Function | EditorFileBrowserTransportRead | undefined;
        uploadUrl?: string | undefined;
        fileUrl?: string | Function | undefined;
        destroy?: string | EditorFileBrowserTransportDestroy | undefined;
        create?: string | EditorFileBrowserTransportCreate | undefined;
    }

    interface EditorFileBrowser {
        fileTypes?: string | undefined;
        path?: string | undefined;
        transport?: EditorFileBrowserTransport | undefined;
        schema?: EditorFileBrowserSchema | undefined;
        messages?: EditorFileBrowserMessages | undefined;
    }

    interface EditorImageBrowserMessages {
        uploadFile?: string | undefined;
        orderBy?: string | undefined;
        orderByName?: string | undefined;
        orderBySize?: string | undefined;
        directoryNotFound?: string | undefined;
        emptyFolder?: string | undefined;
        deleteFile?: string | undefined;
        invalidFileType?: string | undefined;
        overwriteFile?: string | undefined;
        search?: string | undefined;
    }

    interface EditorImageBrowserSchemaModelFieldsName {
        field?: string | undefined;
        parse?: Function | undefined;
    }

    interface EditorImageBrowserSchemaModelFieldsSize {
        field?: string | undefined;
        parse?: Function | undefined;
    }

    interface EditorImageBrowserSchemaModelFieldsType {
        parse?: Function | undefined;
        field?: string | undefined;
    }

    interface EditorImageBrowserSchemaModelFields {
        name?: string | EditorImageBrowserSchemaModelFieldsName | undefined;
        type?: string | EditorImageBrowserSchemaModelFieldsType | undefined;
        size?: string | EditorImageBrowserSchemaModelFieldsSize | undefined;
    }

    interface EditorImageBrowserSchemaModel {
        id?: string | undefined;
        fields?: EditorImageBrowserSchemaModelFields | undefined;
    }

    interface EditorImageBrowserSchema {
    }

    interface EditorImageBrowserTransportCreate {
        contentType?: string | undefined;
        data?: any | string | Function | undefined;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: string | Function | undefined;
    }

    interface EditorImageBrowserTransportDestroy {
        contentType?: string | undefined;
        data?: any | string | Function | undefined;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: string | Function | undefined;
    }

    interface EditorImageBrowserTransportRead {
        contentType?: string | undefined;
        data?: any | string | Function | undefined;
        dataType?: string | undefined;
        type?: string | undefined;
        url?: string | Function | undefined;
    }

    interface EditorImageBrowserTransport {
        read?: string | Function | EditorImageBrowserTransportRead | undefined;
        thumbnailUrl?: string | Function | undefined;
        uploadUrl?: string | undefined;
        imageUrl?: string | Function | undefined;
        destroy?: string | EditorImageBrowserTransportDestroy | undefined;
        create?: string | EditorImageBrowserTransportCreate | undefined;
    }

    interface EditorImageBrowser {
        fileTypes?: string | undefined;
        path?: string | undefined;
        transport?: EditorImageBrowserTransport | undefined;
        schema?: EditorImageBrowserSchema | undefined;
        messages?: EditorImageBrowserMessages | undefined;
    }

    interface EditorImmutables {
        deserialization?: Function | undefined;
        serialization?: string | Function | undefined;
    }

    interface EditorMessages {
        auto?: string | undefined;
        accessibilityTab?: string | undefined;
        addColumnLeft?: string | undefined;
        addColumnRight?: string | undefined;
        addRowAbove?: string | undefined;
        addRowBelow?: string | undefined;
        alignCenter?: string | undefined;
        alignCenterBottom?: string | undefined;
        alignCenterMiddle?: string | undefined;
        alignCenterTop?: string | undefined;
        alignLeft?: string | undefined;
        alignLeftBottom?: string | undefined;
        alignLeftMiddle?: string | undefined;
        alignLeftTop?: string | undefined;
        alignRemove?: string | undefined;
        alignRight?: string | undefined;
        alignRightBottom?: string | undefined;
        alignRightMiddle?: string | undefined;
        alignRightTop?: string | undefined;
        alignment?: string | undefined;
        associateCellsWithHeaders?: string | undefined;
        backColor?: string | undefined;
        background?: string | undefined;
        bold?: string | undefined;
        border?: string | undefined;
        borderColor?: string | undefined;
        borderWidth?: string | undefined;
        style?: string | undefined;
        caption?: string | undefined;
        captionAlignment?: string | undefined;
        cellMargin?: string | undefined;
        cellPadding?: string | undefined;
        cellSpacing?: string | undefined;
        cellTab?: string | undefined;
        cleanFormatting?: string | undefined;
        collapseBorders?: string | undefined;
        columns?: string | undefined;
        createLink?: string | undefined;
        createTable?: string | undefined;
        createTableHint?: string | undefined;
        cssClass?: string | undefined;
        deleteColumn?: string | undefined;
        deleteRow?: string | undefined;
        dialogCancel?: string | undefined;
        dialogInsert?: string | undefined;
        dialogOk?: string | undefined;
        dialogUpdate?: string | undefined;
        editAreaTitle?: string | undefined;
        fileTitle?: string | undefined;
        fileWebAddress?: string | undefined;
        fontName?: string | undefined;
        fontNameInherit?: string | undefined;
        fontSize?: string | undefined;
        fontSizeInherit?: string | undefined;
        foreColor?: string | undefined;
        formatBlock?: string | undefined;
        formatting?: string | undefined;
        height?: string | undefined;
        id?: string | undefined;
        imageAltText?: string | undefined;
        imageHeight?: string | undefined;
        imageWebAddress?: string | undefined;
        imageWidth?: string | undefined;
        indent?: string | undefined;
        insertFile?: string | undefined;
        insertHtml?: string | undefined;
        insertImage?: string | undefined;
        insertOrderedList?: string | undefined;
        insertUnorderedList?: string | undefined;
        insertUpperRomanList?: string | undefined;
        insertLowerRomanList?: string | undefined;
        italic?: string | undefined;
        overflowAnchor?: string | undefined;
        fitToCell?: string | undefined;
        justifyCenter?: string | undefined;
        justifyFull?: string | undefined;
        justifyLeft?: string | undefined;
        justifyRight?: string | undefined;
        linkOpenInNewWindow?: string | undefined;
        linkText?: string | undefined;
        linkToolTip?: string | undefined;
        linkWebAddress?: string | undefined;
        outdent?: string | undefined;
        print?: string | undefined;
        rows?: string | undefined;
        selectAllCells?: string | undefined;
        applyToColumn?: string | undefined;
        applyToRow?: string | undefined;
        strikethrough?: string | undefined;
        subscript?: string | undefined;
        summary?: string | undefined;
        superscript?: string | undefined;
        tableAlignLeft?: string | undefined;
        tableAlignCenter?: string | undefined;
        tableAlignRight?: string | undefined;
        tableBackground?: string | undefined;
        tableTab?: string | undefined;
        tableWizard?: string | undefined;
        tableProperties?: string | undefined;
        tableCellProperties?: string | undefined;
        underline?: string | undefined;
        units?: string | undefined;
        unlink?: string | undefined;
        viewHtml?: string | undefined;
        width?: string | undefined;
        wrapText?: string | undefined;
        copyFormat?: string | undefined;
        applyFormat?: string | undefined;
        undo?: string | undefined;
        redo?: string | undefined;
    }

    interface EditorPasteCleanup {
        all?: boolean | undefined;
        css?: boolean | undefined;
        custom?: Function | undefined;
        keepNewLines?: boolean | undefined;
        msAllFormatting?: boolean | undefined;
        msConvertLists?: boolean | undefined;
        msTags?: boolean | undefined;
        none?: boolean | undefined;
        span?: boolean | undefined;
    }

    interface EditorPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface EditorPdf {
        author?: string | undefined;
        avoidLinks?: boolean | string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: EditorPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface EditorResizable {
        content?: boolean | undefined;
        min?: number | undefined;
        max?: number | undefined;
        toolbar?: boolean | undefined;
    }

    interface EditorSerialization {
        custom?: Function | undefined;
        entities?: boolean | undefined;
        scripts?: boolean | undefined;
        semantic?: boolean | undefined;
    }

    interface EditorToolItem {
        text?: string | undefined;
        value?: string | undefined;
        context?: string | undefined;
    }

    interface EditorTool {
        name?: string | undefined;
        tooltip?: string | undefined;
        exec?: Function | undefined;
        items?: EditorToolItem[] | undefined;
        palette?: string | any | undefined;
        columns?: number | undefined;
        template?: string | Function | undefined;
        ui?: ToolBarItem | undefined;
    }

    interface EditorExecParams {
        value?: any;
    }

    interface EditorPasteOptions {
        split?: boolean | undefined;
    }

    interface EditorOptions {
        name?: string | undefined;
        placeholder?: string | undefined;
        deserialization?: EditorDeserialization | undefined;
        domain?: string | undefined;
        encoded?: boolean | undefined;
        immutables?: boolean | EditorImmutables | undefined;
        messages?: EditorMessages | undefined;
        pasteCleanup?: EditorPasteCleanup | undefined;
        pdf?: EditorPdf | undefined;
        resizable?: boolean | EditorResizable | undefined;
        serialization?: EditorSerialization | undefined;
        stylesheets?: any;
        tools?: EditorTool[] | string[] | undefined;
        imageBrowser?: EditorImageBrowser | undefined;
        fileBrowser?: EditorFileBrowser | undefined;
        navigateOnTab?: boolean | undefined;
        change?(e: EditorEvent): void;
        execute?(e: EditorExecuteEvent): void;
        keydown?(e: EditorEvent): void;
        keyup?(e: EditorEvent): void;
        paste?(e: EditorPasteEvent): void;
        pdfExport?(e: EditorPdfExportEvent): void;
        select?(e: EditorEvent): void;
    }
    interface EditorEvent {
        sender: Editor;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface EditorExecuteEvent extends EditorEvent {
        name?: string | undefined;
        command?: any;
    }

    interface EditorPasteEvent extends EditorEvent {
        html?: any;
    }

    interface EditorPdfExportEvent extends EditorEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    class ExpansionPanel extends kendo.ui.Widget {
        static fn: ExpansionPanel;

        options: ExpansionPanelOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ExpansionPanel;

        constructor(element: Element, options?: ExpansionPanelOptions);

        destroy(): void;
        enable(enable: boolean): void;
        toggle(expand: boolean, animation: boolean): void;
    }

    interface ExpansionPanelAnimationCollapse {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface ExpansionPanelAnimationExpand {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface ExpansionPanelAnimation {
        collapse?: ExpansionPanelAnimationCollapse | undefined;
        expand?: ExpansionPanelAnimationExpand | undefined;
    }

    interface ExpansionPanelOptions {
        name?: string | undefined;
        animation?: boolean | ExpansionPanelAnimation | undefined;
        collapseIconClass?: string | undefined;
        disabled?: boolean | undefined;
        expanded?: boolean | undefined;
        expandIconClass?: string | undefined;
        height?: number | string | undefined;
        subTitle?: string | undefined;
        title?: string | undefined;
        toggleable?: boolean | undefined;
        expand?(e: ExpansionPanelEvent): void;
        collapse?(e: ExpansionPanelEvent): void;
        complete?(e: ExpansionPanelEvent): void;
    }
    interface ExpansionPanelEvent {
        sender: ExpansionPanel;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class FileManager extends kendo.ui.Widget {
        static fn: FileManager;

        options: FileManagerOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): FileManager;

        constructor(element: Element, options?: FileManagerOptions);

        path(): string;
        view(): string;
        view(view?: string): void;
        navigate(path: string): void;
        refresh(): void;
        executeCommand(command: string, args?: any): void;
        getSelected(): any | any[];
        getSize(): any;
        setDataSource(dataSource: kendo.data.FileManagerDataSource): void;
        destroy(): void;
        items(): any;
    }

    interface FileManagerBreadcrumb {
        rootIcon?: string | undefined;
        delimiterIcon?: string | undefined;
    }

    interface FileManagerContextMenuItem {
        name?: string | undefined;
        text?: string | undefined;
        spriteCssClass?: string | undefined;
        command?: string | undefined;
    }

    interface FileManagerContextMenu {
        items?: FileManagerContextMenuItem[] | undefined;

        close?(e: ContextMenuCloseEvent): void;
        open?(e: ContextMenuOpenEvent): void;
        activate?(e: ContextMenuActivateEvent): void;
        deactivate?(e: ContextMenuDeactivateEvent): void;
        select?(e: ContextMenuSelectEvent): void;
    }

    interface FileManagerDialogs {
        upload?: any;
        moveConfirm?: any;
        deleteConfirm?: any;
        renamePrompt?: any;
    }

    interface FileManagerMessagesDialogsDeleteConfirm {
        title?: string | undefined;
        content?: string | undefined;
        okText?: string | undefined;
        cancel?: string | undefined;
        close?: string | undefined;
    }

    interface FileManagerMessagesDialogsMoveConfirm {
        title?: string | undefined;
        content?: string | undefined;
        okText?: string | undefined;
        cancel?: string | undefined;
        close?: string | undefined;
    }

    interface FileManagerMessagesDialogsRenamePrompt {
        title?: string | undefined;
        content?: string | undefined;
        okText?: string | undefined;
        cancel?: string | undefined;
        close?: string | undefined;
    }

    interface FileManagerMessagesDialogsUpload {
        title?: string | undefined;
        clear?: string | undefined;
        done?: string | undefined;
    }

    interface FileManagerMessagesDialogs {
        upload?: FileManagerMessagesDialogsUpload | undefined;
        moveConfirm?: FileManagerMessagesDialogsMoveConfirm | undefined;
        deleteConfirm?: FileManagerMessagesDialogsDeleteConfirm | undefined;
        renamePrompt?: FileManagerMessagesDialogsRenamePrompt | undefined;
    }

    interface FileManagerMessagesPreviewPane {
        noFileSelected?: string | undefined;
        extension?: string | undefined;
        size?: string | undefined;
        created?: string | undefined;
        modified?: string | undefined;
        items?: string | undefined;
    }

    interface FileManagerMessagesToolbar {
        createFolder?: string | undefined;
        uploadDialog?: string | undefined;
        sortDirection?: string | undefined;
        sortDirectionAsc?: string | undefined;
        sortDirectionDesc?: string | undefined;
        sortField?: string | undefined;
        nameField?: string | undefined;
        sizeField?: string | undefined;
        typeField?: string | undefined;
        dateModifiedField?: string | undefined;
        dateCreatedField?: string | undefined;
        search?: string | undefined;
        details?: string | undefined;
        detailsChecked?: string | undefined;
        detailsUnchecked?: string | undefined;
        delete?: string | undefined;
        rename?: string | undefined;
    }

    interface FileManagerMessagesViews {
        nameField?: string | undefined;
        sizeField?: string | undefined;
        typeField?: string | undefined;
        dateModifiedField?: string | undefined;
        dateCreatedField?: string | undefined;
        items?: string | undefined;
        listViewLabel?: string | undefined;
    }

    interface FileManagerMessages {
        toolbar?: FileManagerMessagesToolbar | undefined;
        views?: FileManagerMessagesViews | undefined;
        dialogs?: FileManagerMessagesDialogs | undefined;
        previewPane?: FileManagerMessagesPreviewPane | undefined;
    }

    interface FileManagerPreviewPane {
        metaFields?: any;
        noFileTemplate?: string | Function | undefined;
        singleFileTemplate?: string | Function | undefined;
        multipleFilesTemplate?: string | Function | undefined;
    }

    interface FileManagerToolbarItem {
        type?: string | undefined;
        overflow?: string | undefined;
        command?: string | undefined;
        options?: string | undefined;
        name?: string | undefined;
        togglable?: boolean | undefined;
        text?: string | undefined;
        template?: string | Function | undefined;
        showText?: string | undefined;
        primary?: boolean | undefined;
        attributes?: any;
        enable?: boolean | undefined;
        hidden?: boolean | undefined;
        spriteCssClass?: string | undefined;
        imageUrl?: string | undefined;
        showIcon?: string | undefined;
        icon?: string | undefined;
        id?: string | undefined;
    }

    interface FileManagerToolbar {
        items?: FileManagerToolbarItem[] | undefined;
    }

    interface FileManagerViews {
        grid?: any;
        list?: any;
        tree?: any;
    }

    interface FileManagerOptions {
        name?: string | undefined;
        width?: number | string | undefined;
        height?: number | string | undefined;
        initialView?: string | undefined;
        resizable?: boolean | undefined;
        draggable?: boolean | undefined;
        dataSource?: any | any | kendo.data.FileManagerDataSource | undefined;
        upload?: any;
        uploadUrl?: string | undefined;
        toolbar?: boolean | FileManagerToolbar | undefined;
        dialogs?: FileManagerDialogs | undefined;
        contextMenu?: boolean | FileManagerContextMenu | undefined;
        views?: FileManagerViews | undefined;
        previewPane?: FileManagerPreviewPane | undefined;
        breadcrumb?: boolean | FileManagerBreadcrumb | undefined;
        messages?: FileManagerMessages | undefined;
        navigate?(e: FileManagerEvent): void;
        select?(e: FileManagerEvent): void;
        open?(e: FileManagerEvent): void;
        execute?(e: FileManagerEvent): void;
        error?(e: FileManagerEvent): void;
        dataBinding?(e: FileManagerEvent): void;
        dataBound?(e: FileManagerEvent): void;
        drop?(e: FileManagerEvent): void;
    }
    interface FileManagerEvent {
        sender: FileManager;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Filter extends kendo.ui.Widget {
        static fn: Filter;

        options: FilterOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Filter;

        constructor(element: Element, options?: FilterOptions);

        applyFilter(): void;
    }

    interface FilterField {
        defaultValue?: any;
        editorTemplate?: string | Function | undefined;
        operators?: FilterOperators | undefined;
        label?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        previewFormat?: string | undefined;
    }

    interface FilterMessages {
        and?: string | undefined;
        apply?: string | undefined;
        filterExpressionLabel?: string | undefined;
        filterLogicLabel?: string | undefined;
        mainFilterLogicLabel?: string | undefined;
        or?: string | undefined;
    }

    interface FilterOperatorsBoolean {
        eq?: string | undefined;
        neq?: string | undefined;
    }

    interface FilterOperatorsDate {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface FilterOperatorsNumber {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface FilterOperatorsString {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        isempty?: string | undefined;
        isnotempty?: string | undefined;
        startswith?: string | undefined;
        contains?: string | undefined;
        doesnotcontain?: string | undefined;
        endswith?: string | undefined;
        isnullorempty?: string | undefined;
        isnotnullorempty?: string | undefined;
    }

    interface FilterOperators {
        string?: FilterOperatorsString | undefined;
        number?: FilterOperatorsNumber | undefined;
        date?: FilterOperatorsDate | undefined;
        boolean?: FilterOperatorsBoolean | undefined;
    }

    interface FilterOptions {
        name?: string | undefined;
        applyButton?: boolean | undefined;
        dataSource?: kendo.data.DataSource | undefined;
        expression?: any;
        expressionPreview?: boolean | undefined;
        fields?: FilterField[] | undefined;
        mainLogic?: string | undefined;
        messages?: FilterMessages | undefined;
        operators?: FilterOperators | undefined;
        change?(e: FilterChangeEvent): void;
    }
    interface FilterEvent {
        sender: Filter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FilterChangeEvent extends FilterEvent {
        expression?: any;
    }

    class FilterMenu extends kendo.ui.Widget {
        static fn: FilterMenu;

        options: FilterMenuOptions;

        field: string;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): FilterMenu;

        constructor(element: Element, options?: FilterMenuOptions);

        clear(): void;
    }

    interface FilterMenuMessages {
        and?: string | undefined;
        clear?: string | undefined;
        filter?: string | undefined;
        info?: string | undefined;
        title?: string | undefined;
        additionalValue?: string | undefined;
        additionalOperator?: string | undefined;
        logic?: string | undefined;
        isFalse?: string | undefined;
        isTrue?: string | undefined;
        or?: string | undefined;
        selectValue?: string | undefined;
        buttonTitle?: string | undefined;
    }

    interface FilterMenuOperatorsDate {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface FilterMenuOperatorsEnums {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
    }

    interface FilterMenuOperatorsNumber {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface FilterMenuOperatorsString {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        isempty?: string | undefined;
        isnotempty?: string | undefined;
        startswith?: string | undefined;
        contains?: string | undefined;
        doesnotcontain?: string | undefined;
        endswith?: string | undefined;
        isnullorempty?: string | undefined;
        isnotnullorempty?: string | undefined;
    }

    interface FilterMenuOperators {
        string?: FilterMenuOperatorsString | undefined;
        number?: FilterMenuOperatorsNumber | undefined;
        date?: FilterMenuOperatorsDate | undefined;
        enums?: FilterMenuOperatorsEnums | undefined;
    }

    interface FilterMenuOptions {
        name?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        extra?: boolean | undefined;
        field?: string | undefined;
        messages?: FilterMenuMessages | undefined;
        operators?: FilterMenuOperators | undefined;
    }
    interface FilterMenuEvent {
        sender: FilterMenu;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class FlatColorPicker extends kendo.ui.Widget {
        static fn: FlatColorPicker;

        options: FlatColorPickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): FlatColorPicker;

        constructor(element: Element, options?: FlatColorPickerOptions);

        focus(): void;
        value(): string;
        value(color?: string): void;
        color(): kendo.Color;
        color(color?: kendo.Color): void;
        enable(enable?: boolean): void;
    }

    interface FlatColorPickerContrastTool {
        backgroundColor?: string | kendo.Color;
    }

    interface FlatColorPickerMessages {
        apply?: string | undefined;
        cancel?: string | undefined;
        contrastRatio?: string | undefined;
        clearColor?: string;
        fail?: string | undefined;
        pass?: string | undefined;
        gradient?: string | undefined;
        palette?: string | undefined;
        toggleFormat?: string | undefined;
        red?: string | undefined;
        green?: string | undefined;
        blue?: string | undefined;
        hex?: string | undefined;
    }

    interface FlatColorPickerOptions {
        name?: string | undefined;
        opacity?: boolean | undefined;
        buttons?: boolean | undefined;
        contrastTool?: boolean | FlatColorPickerContrastTool | undefined;
        format?: string | undefined;
        formats?: any | undefined;
        value?: string | kendo.Color | undefined;
        preview?: boolean | undefined;
        autoupdate?: boolean | undefined;
        messages?: FlatColorPickerMessages | undefined;
        change?(e: FlatColorPickerChangeEvent): void;
    }
    interface FlatColorPickerEvent {
        sender: FlatColorPicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FlatColorPickerChangeEvent extends FlatColorPickerEvent {
        value?: string | undefined;
    }

    class FloatingActionButton extends kendo.ui.Widget {
        static fn: FloatingActionButton;

        options: FloatingActionButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): FloatingActionButton;

        constructor(element: Element, options?: FloatingActionButtonOptions);

        text(text: string): void;
        icon(icon: string): void;
        themeColor(themeColor: string): void;
        shape(shape: string): void;
        enable(enable: boolean): void;
        show(): void;
        hide(): void;
        setOptions(options: any): void;
        destroy(): void;
    }

    interface FloatingActionButtonAlignOffset {
        x?: number | undefined;
        y?: number | undefined;
    }

    interface FloatingActionButtonOptions {
        icon?: string | undefined;
        text?: string | undefined;
        themeColor?: string | undefined;
        size?: string | undefined;
        rounded?: string | undefined;
        fillMode?: string | undefined;
        shape?: string | undefined;
        align?: string | undefined;
        alignOffset?: FloatingActionButtonAlignOffset | undefined;
        positionMode?: string | undefined;
        visible?: boolean | undefined;
        enabled?: boolean | undefined;
        items?: FloatingActionButtonItem[] | undefined;

        click?(e: FloatingActionButtonClickEvent): void;
        expand?(e: FloatingActionButtonExpandEvent): void;
        collapse?(e: FloatingActionButtonCollapseEvent): void;
    }

    interface FloatingActionButtonItem {
        label?: string | undefined;
        icon?: string | undefined;
        title?: string | undefined;
        enabled?: boolean | undefined;
        cssClass?: string | undefined;

        click?(e: FloatingActionButtonItemClickEvent): void;
    }

    interface FloatingActionButtonEvent {
        sender: FloatingActionButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FloatingActionButtonExpandEvent extends FloatingActionButtonEvent {
    }

    interface FloatingActionButtonCollapseEvent extends FloatingActionButtonEvent {
    }

    interface FloatingActionButtonClickEvent extends FloatingActionButtonEvent {
    }

    interface FloatingActionButtonItemClickEvent extends FloatingActionButtonEvent {
        target: JQuery;
        item: FloatingActionButtonItem | any;
    }

    class Form extends kendo.ui.Widget {
        static fn: Form;

        options: FormOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Form;

        constructor(element: Element, options?: FormOptions);

        validate(): void;
        clear(): void;
        setOptions(options: any): void;
        destroy(): void;
    }

    interface FormOptions {
        name?: string | undefined;
        orientation?: string | "horizontal" | "vertical" | undefined;
        focusFirst?: boolean | undefined;
        formatLabel?: Function | undefined;
        buttonsTemplate?: string | Function | undefined;
        items?: FormItem[] | undefined;
        formData?: FormData | undefined;
        layout?: string | "grid" | undefined;
        grid?: FormGridOptions | undefined;
        validatable?: FormValidatable | undefined;
        size?: string | undefined;

        change?(e: FormChangeEvent): void;
        validate?(e: FormValidateEvent): void;
        validateField?(e: FormValidateFieldEvent): void;
        submit?(e: FormSubmitEvent): void;
        clear?(e: FormClearEvent): void;
    }

    interface FormData {
        [key: string]: any;
    }

    interface FormItemLabel {
        text?: string | undefined;
        optional?: boolean | undefined;
        encoded?: boolean | undefined;
    }

    interface FormGridGutterOptions {
        rows?: string | number | undefined;
        cols?: string | number | undefined;
    }

    interface FormGridOptions {
        cols?: string | number | undefined;
        gutter?: string | number | FormGridGutterOptions | undefined;
    }

    interface FormItem {
        field?: string | undefined;
        type?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        hint?: string | undefined;
        title?: string | undefined;
        colSpan?: number | undefined;
        attributes?: any;
        editor?: string | Function | undefined;
        editorOptions?: any;
        label?: string | FormItemLabel | undefined;
        validation?: any;
        layout?: string | "grid" | undefined;
        grid?: FormGridOptions | undefined;
        items?: FormItem[] | undefined;
    }

    interface FormValidatable {
        validateOnBlur: boolean;
        validationSummary: boolean;
        errorTemplate: string | Function;
    }

    interface FormEvent {
        sender: Form;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FormChangeEvent extends FormEvent {
        field?: string | undefined;
        value?: any;
    }

    interface FormValidateEvent extends FormEvent {
        model?: kendo.data.Model | undefined;
        valid?: boolean | undefined;
        errors?: any[] | undefined;
    }

    interface FormValidateFieldEvent extends FormEvent {
        model?: kendo.data.Model | undefined;
        valid?: boolean | undefined;
        field?: string | undefined;
        error?: string | undefined;
        input?: Element | undefined;
    }

    interface FormSubmitEvent extends FormEvent {
        model?: kendo.data.Model | undefined;
    }

    interface FormClearEvent extends FormEvent {
    }

    class Gantt extends kendo.ui.Widget {
        static fn: Gantt;

        options: GanttOptions;

        dataSource: kendo.data.DataSource;
        dependencies: kendo.data.GanttDependencyDataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Gantt;

        constructor(element: Element, options?: GanttOptions);

        clearSelection(): void;
        dataItem(row: string): kendo.data.GanttTask;
        dataItem(row: Element): kendo.data.GanttTask;
        dataItem(row: JQuery): kendo.data.GanttTask;
        date(date?: Date): Date;
        destroy(): void;
        range(range?: any): any;
        refresh(): void;
        refreshDependencies(): void;
        removeDependency(dependency: string): void;
        removeDependency(dependency: kendo.data.GanttDependency): void;
        removeTask(task: string): void;
        removeTask(task: kendo.data.GanttTask): void;
        saveAsPDF(): JQueryPromise<any>;
        select(): JQuery;
        select(row: string): void;
        select(row: Element): void;
        select(row: JQuery): void;
        setDataSource(dataSource: kendo.data.GanttDataSource): void;
        setDependenciesDataSource(dataSource: kendo.data.GanttDependencyDataSource): void;
        view(): kendo.ui.GanttView;
        view(type?: string): void;
    }

    interface GanttAssignments {
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataResourceIdField?: string | undefined;
        dataTaskIdField?: string | undefined;
        dataValueField?: string | undefined;
    }

    interface GanttColumnFilterable {
        ui?: string | Function | undefined;
    }

    interface GanttColumnSortable {
        compare?: Function | undefined;
    }

    interface GanttColumn {
        attributes?: any;
        columns?: any;
        editable?: boolean | undefined;
        editor?: Function | undefined;
        expandable?: boolean | undefined;
        field?: string | undefined;
        filterable?: boolean | GanttColumnFilterable | undefined;
        format?: string | undefined;
        headerAttributes?: any;
        headerTemplate?: string | Function | undefined;
        hidden?: boolean | undefined;
        menu?: boolean | undefined;
        minScreenWidth?: number | undefined;
        sortable?: boolean | GanttColumnSortable | undefined;
        template?: string | Function | undefined;
        title?: string | undefined;
        width?: string | number | undefined;
    }

    interface GanttCurrentTimeMarker {
        updateInterval?: number | undefined;
    }

    interface GanttEditable {
        confirmation?: boolean | undefined;
        create?: boolean | undefined;
        dependencyCreate?: boolean | undefined;
        dependencyDestroy?: boolean | undefined;
        dragPercentComplete?: boolean | undefined;
        destroy?: boolean | undefined;
        move?: boolean | undefined;
        reorder?: boolean | undefined;
        resize?: boolean | undefined;
        template?: string | Function | undefined;
        update?: boolean | undefined;
        plannedTasks?: boolean | undefined;
    }

    interface GanttMessagesActions {
        addChild?: string | undefined;
        append?: string | undefined;
        insertAfter?: string | undefined;
        insertBefore?: string | undefined;
        pdf?: string | undefined;
    }

    interface GanttMessagesEditor {
        assignButton?: string | undefined;
        editorTitle?: string | undefined;
        end?: string | undefined;
        percentComplete?: string | undefined;
        plannedEnd?: string | undefined;
        plannedStart?: string | undefined;
        resources?: string | undefined;
        resourcesEditorTitle?: string | undefined;
        resourcesHeader?: string | undefined;
        start?: string | undefined;
        title?: string | undefined;
        unitsHeader?: string | undefined;
        parent?: string | undefined;
        addNew?: string | undefined;
        name?: string | undefined;
        percentCompleteHint?: string | undefined;
        remove?: string | undefined;
        actualStart?: string | undefined;
        actualEnd?: string | undefined;
        parentOptionLabel?: string | undefined;
        general?: string | undefined;
        predecessors?: string | undefined;
        successors?: string | undefined;
        other?: string | undefined;
        dependencyType?: string | undefined;
    }

    interface GanttMessagesPlannedTasks {
        switchText?: string | undefined;
        offsetTooltipAdvanced?: string | undefined;
        offsetTooltipDelay?: string | undefined;
        seconds?: string | undefined;
        minutes?: string | undefined;
        hours?: string | undefined;
        days?: string | undefined;
    }

    interface GanttMessagesViews {
        day?: string | undefined;
        end?: string | undefined;
        month?: string | undefined;
        start?: string | undefined;
        week?: string | undefined;
        year?: string | undefined;
    }

    interface GanttMessages {
        actions?: GanttMessagesActions | undefined;
        cancel?: string | undefined;
        deleteDependencyConfirmation?: string | undefined;
        deleteDependencyWindowTitle?: string | undefined;
        deleteTaskConfirmation?: string | undefined;
        deleteTaskWindowTitle?: string | undefined;
        destroy?: string | undefined;
        editor?: GanttMessagesEditor | undefined;
        plannedTasks?: GanttMessagesPlannedTasks | undefined;
        save?: string | undefined;
        selectView?: string | undefined;
        views?: GanttMessagesViews | undefined;
    }

    interface GanttPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface GanttPdf {
        author?: string | undefined;
        avoidLinks?: boolean | string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: GanttPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface GanttRange {
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface GanttResources {
        dataFormatField?: string | undefined;
        dataColorField?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        field?: string | undefined;
    }

    interface GanttToolbarItem {
        name?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
    }

    interface GanttTooltip {
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface GanttViewRange {
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface GanttView {
        date?: Date | undefined;
        range?: GanttViewRange | undefined;
        type?: string | undefined;
        selected?: boolean | undefined;
        slotSize?: number | string | undefined;
        timeHeaderTemplate?: string | Function | undefined;
        dayHeaderTemplate?: string | Function | undefined;
        weekHeaderTemplate?: string | Function | undefined;
        monthHeaderTemplate?: string | Function | undefined;
        yearHeaderTemplate?: string | Function | undefined;
        resizeTooltipFormat?: string | undefined;
    }

    interface GanttOptions {
        name?: string | undefined;
        assignments?: GanttAssignments | undefined;
        autoBind?: boolean | undefined;
        columnResizeHandleWidth?: number | undefined;
        columnMenu?: boolean | any | undefined;
        columns?: GanttColumn[] | undefined;
        currentTimeMarker?: boolean | GanttCurrentTimeMarker | undefined;
        dataSource?: any | any | kendo.data.GanttDataSource | undefined;
        date?: Date | undefined;
        dependencies?: any | any | kendo.data.GanttDependencyDataSource | undefined;
        editable?: boolean | GanttEditable | undefined;
        filterable?: boolean | any | undefined;
        reorderable?: boolean | undefined;
        navigatable?: boolean | undefined;
        workDayStart?: Date | undefined;
        workDayEnd?: Date | undefined;
        workWeekStart?: number | undefined;
        workWeekEnd?: number | undefined;
        hourSpan?: number | undefined;
        snap?: boolean | undefined;
        height?: number | string | undefined;
        listWidth?: string | number | undefined;
        messages?: GanttMessages | undefined;
        pdf?: GanttPdf | undefined;
        range?: GanttRange | undefined;
        resizable?: boolean | undefined;
        selectable?: boolean | undefined;
        showWorkDays?: boolean | undefined;
        showWorkHours?: boolean | undefined;
        taskTemplate?: string | Function | undefined;
        toolbar?: GanttToolbarItem[] | ToolBarItem[] | undefined;
        tooltip?: GanttTooltip | undefined;
        views?: GanttView[] | undefined;
        resources?: GanttResources | undefined;
        rowHeight?: number | string | undefined;
        dataBinding?(e: GanttDataBindingEvent): void;
        dataBound?(e: GanttDataBoundEvent): void;
        add?(e: GanttAddEvent): void;
        edit?(e: GanttEditEvent): void;
        remove?(e: GanttRemoveEvent): void;
        cancel?(e: GanttCancelEvent): void;
        save?(e: GanttSaveEvent): void;
        change?(e: GanttChangeEvent): void;
        columnResize?(e: GanttColumnResizeEvent): void;
        navigate?(e: GanttNavigateEvent): void;
        moveStart?(e: GanttMoveStartEvent): void;
        move?(e: GanttMoveEvent): void;
        moveEnd?(e: GanttMoveEndEvent): void;
        pdfExport?(e: GanttPdfExportEvent): void;
        resizeStart?(e: GanttResizeStartEvent): void;
        resize?(e: GanttResizeEvent): void;
        resizeEnd?(e: GanttResizeEndEvent): void;
        togglePlannedTasks?(e: GanttTogglePlannedTasks): void;
    }
    interface GanttEvent {
        sender: Gantt;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface GanttDataBindingEvent extends GanttEvent {
    }

    interface GanttDataBoundEvent extends GanttEvent {
    }

    interface GanttAddEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        dependency?: kendo.data.GanttDependency | undefined;
    }

    interface GanttEditEvent extends GanttEvent {
        container?: JQuery | undefined;
        task?: kendo.data.GanttTask | undefined;
    }

    interface GanttRemoveEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        dependencies?: any;
    }

    interface GanttCancelEvent extends GanttEvent {
        container?: JQuery | undefined;
        task?: kendo.data.GanttTask | undefined;
    }

    interface GanttSaveEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        values?: any;
    }

    interface GanttChangeEvent extends GanttEvent {
    }

    interface GanttColumnResizeEvent extends GanttEvent {
        column?: any;
        newWidth?: number | undefined;
        oldWidth?: number | undefined;
    }

    interface GanttNavigateEvent extends GanttEvent {
        view?: string | undefined;
    }

    interface GanttMoveStartEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
    }

    interface GanttMoveEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface GanttMoveEndEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface GanttPdfExportEvent extends GanttEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    interface GanttResizeStartEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
    }

    interface GanttResizeEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface GanttResizeEndEvent extends GanttEvent {
        task?: kendo.data.GanttTask | undefined;
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface GanttTogglePlannedTasks extends GanttEvent {
        showPlannedTasks?: boolean | undefined;
    }

    class Grid extends kendo.ui.Widget {
        static fn: Grid;

        options: GridOptions;

        dataSource: kendo.data.DataSource;
        editable?: kendo.ui.Editable | undefined;
        columns: GridColumn[];
        footer: JQuery;
        pager: kendo.ui.Pager;
        table: JQuery;
        tbody: JQuery;
        thead: JQuery;
        content: JQuery;
        lockedHeader: JQuery;
        lockedTable: JQuery;
        lockedContent: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Grid;

        constructor(element: Element, options?: GridOptions);

        addRow(): void;
        autoFitColumn(column: number): void;
        autoFitColumn(column: string): void;
        autoFitColumn(column: any): void;
        autoFitColumns(columns?: GridColumn[]): void;
        cancelChanges(): void;
        cancelRow(): void;
        cellIndex(cell: string): number;
        cellIndex(cell: Element): number;
        cellIndex(cell: JQuery): number;
        clearSelection(): void;
        closeCell(isCancel?: boolean): void;
        collapseGroup(row: string): void;
        collapseGroup(row: Element): void;
        collapseGroup(row: JQuery): void;
        collapseRow(row: string): void;
        collapseRow(row: Element): void;
        collapseRow(row: JQuery): void;
        copySelectionToClipboard(): void;
        copySelectionToClipboard(includeHeaders: Boolean): void;
        current(): JQuery;
        current(cell: JQuery): void;
        dataItem(row: string): kendo.data.ObservableObject;
        dataItem(row: Element): kendo.data.ObservableObject;
        dataItem(row: JQuery): kendo.data.ObservableObject;
        dataItems(): kendo.data.ObservableArray;
        destroy(): void;
        editCell(cell: JQuery): void;
        editRow(row: JQuery): void;
        expandGroup(row: string): void;
        expandGroup(row: Element): void;
        expandGroup(row: JQuery): void;
        expandRow(row: string): void;
        expandRow(row: Element): void;
        expandRow(row: JQuery): void;
        getOptions(): GridOptions;
        hideColumn(column: number): void;
        hideColumn(column: string): void;
        hideColumn(column: any): void;
        items(): any;
        lockColumn(column: number): void;
        lockColumn(column: string): void;
        refresh(): void;
        removeRow(row: string): void;
        removeRow(row: Element): void;
        removeRow(row: JQuery): void;
        reorderColumn(destIndex: number, column: any): void;
        resizeColumn(column: any, value: number): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        saveChanges(): void;
        saveRow(): any;
        select(): JQuery;
        select(rows: string): void;
        select(rows: Element): void;
        select(rows: JQuery): void;
        selectedKeyNames(): any;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        showColumn(column: number): void;
        showColumn(column: string): void;
        showColumn(column: any): void;
        stickColumn(column: number): void;
        stickColumn(column: string): void;
        unlockColumn(column: number): void;
        unlockColumn(column: string): void;
        unstickColumn(column: number): void;
        unstickColumn(column: string): void;
    }

    interface GridAllowCopy {
        delimeter?: string | any | undefined;
    }

    interface GridColumnMenuColumnsGroup {
        columns?: any;
        title?: string | undefined;
    }

    interface GridColumnMenuColumns {
        sort?: string | undefined;
        groups?: GridColumnMenuColumnsGroup[] | undefined;
    }

    interface GridColumnMenuMessages {
        columns?: string | undefined;
        filter?: string | undefined;
        sortAscending?: string | undefined;
        sortDescending?: string | undefined;
        setColumnPosition?: string | undefined;
        settings?: string | undefined;
        stick?: string | undefined;
        unstick?: string | undefined;
        done?: string | undefined;
        lock?: string | undefined;
        unlock?: string | undefined;
        apply?: string | undefined;
        reset?: string | undefined;
        buttonTitle?: string | undefined;
    }

    interface GridColumnMenu {
        columns?: boolean | GridColumnMenuColumns | undefined;
        filterable?: boolean | undefined;
        sortable?: boolean | undefined;
        messages?: GridColumnMenuMessages | undefined;
        componentType?: string | undefined;
    }

    interface GridColumnCommandItemIconClass {
        cancel?: string | undefined;
        edit?: string | undefined;
        update?: string | undefined;
    }

    interface GridColumnCommandItemText {
        edit?: string | undefined;
        cancel?: string | undefined;
        update?: string | undefined;
    }

    interface GridColumnCommandItem {
        className?: string | undefined;
        click?: Function | undefined;
        iconClass?: string | GridColumnCommandItemIconClass | undefined;
        name?: string | undefined;
        template?: string | undefined;
        text?: string | GridColumnCommandItemText | undefined;
        visible?: Function | undefined;
    }

    interface GridColumnExportable {
        excel?: boolean | undefined;
        pdf?: boolean | undefined;
    }

    interface GridColumnFilterableCell {
        dataSource?: any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        delay?: number | undefined;
        inputWidth?: number | undefined;
        suggestionOperator?: string | undefined;
        minLength?: number | undefined;
        enabled?: boolean | undefined;
        operator?: string | undefined;
        showOperators?: boolean | undefined;
        template?: Function | undefined;
    }

    interface GridColumnFilterable {
        cell?: GridColumnFilterableCell | undefined;
        extra?: boolean | undefined;
        multi?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        checkAll?: boolean | undefined;
        itemTemplate?: Function | undefined;
        operators?: any;
        search?: boolean | undefined;
        ignoreCase?: boolean | undefined;
        ui?: string | Function | undefined;
    }

    interface GridColumnGroupable {
        compare?: Function | undefined;
        dir?: string | undefined;
    }

    interface GridColumnSortable {
        allowUnsort?: boolean | undefined;
        compare?: Function | undefined;
        initialDirection?: string | undefined;
    }

    interface GridColumn {
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        dataSource?: kendo.data.DataSource | kendo.data.DataSourceOptions | undefined;
        aggregates?: any;
        attributes?: any;
        columns?: any;
        command?: string | string[] | GridColumnCommandItem | GridColumnCommandItem[] | undefined;
        editable?: Function | undefined;
        encoded?: boolean | undefined;
        exportable?: boolean | GridColumnExportable | undefined;
        field?: string | undefined;
        filterable?: boolean | GridColumnFilterable | undefined;
        footerAttributes?: any;
        footerTemplate?: string | Function | undefined;
        format?: string | undefined;
        groupable?: boolean | GridColumnGroupable | undefined;
        groupHeaderColumnTemplate?: string | Function | undefined;
        groupHeaderTemplate?: string | Function | undefined;
        groupFooterTemplate?: string | Function | undefined;
        headerAttributes?: any;
        headerTemplate?: string | Function | undefined;
        hidden?: boolean | undefined;
        hideOnGroup?: boolean | undefined;
        locked?: boolean | undefined;
        lockable?: boolean | undefined;
        media?: string | undefined;
        minResizableWidth?: number | undefined;
        minScreenWidth?: number | undefined;
        selectable?: boolean | undefined;
        sortable?: boolean | GridColumnSortable | undefined;
        sticky?: boolean | undefined;
        stickable?: boolean | undefined;
        template?: string | Function | undefined;
        title?: string | undefined;
        width?: string | number | undefined;
        values?: any;
        menu?: boolean | undefined;
        columnMenu?: boolean | undefined;
    }

    interface GridEditable {
        confirmation?: boolean | string | Function | undefined;
        cancelDelete?: string | undefined;
        confirmDelete?: string | undefined;
        createAt?: string | undefined;
        destroy?: boolean | undefined;
        mode?: string | undefined;
        template?: string | Function | undefined;
        update?: boolean | undefined;
        window?: any;
    }

    interface GridExcel {
        allPages?: boolean | undefined;
        fileName?: string | undefined;
        filterable?: boolean | undefined;
        forceProxy?: boolean | undefined;
        proxyURL?: string | undefined;
    }

    interface GridFilterableMessages {
        and?: string | undefined;
        clear?: string | undefined;
        filter?: string | undefined;
        info?: string | undefined;
        title?: string | undefined;
        isFalse?: string | undefined;
        isTrue?: string | undefined;
        or?: string | undefined;
        search?: string | undefined;
        selectValue?: string | undefined;
        cancel?: string | undefined;
        selectedItemsFormat?: string | undefined;
        operator?: string | undefined;
        value?: string | undefined;
        checkAll?: string | undefined;
    }

    interface GridFilterableOperatorsDate {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface GridFilterableOperatorsEnums {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
    }

    interface GridFilterableOperatorsNumber {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface GridFilterableOperatorsString {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        isempty?: string | undefined;
        isnotempty?: string | undefined;
        startswith?: string | undefined;
        contains?: string | undefined;
        doesnotcontain?: string | undefined;
        endswith?: string | undefined;
    }

    interface GridFilterableOperators {
        string?: GridFilterableOperatorsString | undefined;
        number?: GridFilterableOperatorsNumber | undefined;
        date?: GridFilterableOperatorsDate | undefined;
        enums?: GridFilterableOperatorsEnums | undefined;
    }

    interface GridFilterable {
        extra?: boolean | undefined;
        messages?: GridFilterableMessages | undefined;
        mode?: string | undefined;
        operators?: GridFilterableOperators | undefined;
    }

    interface GridGroupableMessages {
        empty?: string | undefined;
    }

    interface GridGroupable {
        enabled?: boolean | undefined;
        showFooter?: boolean | undefined;
        messages?: GridGroupableMessages | undefined;
        compare?: Function | undefined;
        dir?: string | undefined;
    }

    interface GridMessagesCommands {
        cancel?: string | undefined;
        canceledit?: string | undefined;
        create?: string | undefined;
        destroy?: string | undefined;
        edit?: string | undefined;
        excel?: string | undefined;
        save?: string | undefined;
        update?: string | undefined;
    }

    interface GridMessages {
        commands?: GridMessagesCommands | undefined;
        noRecords?: string | undefined;
        expandCollapseColumnHeader?: string | undefined;
        toolbarLabel?: string | undefined;
        groupingHeaderLabel?: string | undefined;
        filterCellTitle?: string | undefined;
    }

    interface GridNoRecords {
        template?: string | Function | undefined;
    }

    interface GridPageableMessages {
        display?: string | undefined;
        empty?: string | undefined;
        page?: string | undefined;
        of?: string | undefined;
        itemsPerPage?: string | undefined;
        first?: string | undefined;
        last?: string | undefined;
        next?: string | undefined;
        previous?: string | undefined;
        refresh?: string | undefined;
        morePages?: string | undefined;
    }

    interface GridPageable {
        alwaysVisible?: boolean | undefined;
        pageSize?: number | undefined;
        previousNext?: boolean | undefined;
        numeric?: boolean | undefined;
        buttonCount?: number | undefined;
        input?: boolean | undefined;
        pageSizes?: boolean | any | undefined;
        refresh?: boolean | undefined;
        responsive?: boolean | undefined;
        info?: boolean | undefined;
        messages?: GridPageableMessages | undefined;
        position?: string | undefined;
    }

    interface GridPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface GridPdf {
        allPages?: boolean | undefined;
        author?: string | undefined;
        avoidLinks?: boolean | string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: GridPdfMargin | undefined;
        paperSize?: string | any | undefined;
        template?: string | undefined;
        repeatHeaders?: boolean | undefined;
        scale?: number | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface GridScrollable {
        virtual?: boolean | string | undefined;
        endless?: boolean | undefined;
    }

    interface GridSearchField {
        name?: string | undefined;
        operator?: string | undefined;
    }

    interface GridSearch {
        fields?: GridSearchField[] | undefined;
    }

    interface GridSortable {
        allowUnsort?: boolean | undefined;
        showIndexes?: boolean | undefined;
        initialDirection?: string | undefined;
        mode?: string | undefined;
    }

    interface GridResizable {
        columns?: boolean | undefined;
        rows?: boolean | undefined;
    }

    interface GridToolbarItem {
        iconClass?: string | undefined;
        name?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
    }

    interface GridOptions {
        name?: string | undefined;
        allowCopy?: boolean | GridAllowCopy | undefined;
        altRowTemplate?: string | Function | undefined;
        autoBind?: boolean | undefined;
        columnResizeHandleWidth?: number | undefined;
        columns?: GridColumn[] | undefined;
        columnMenu?: boolean | GridColumnMenu | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        detailTemplate?: string | Function | undefined;
        editable?: boolean | "inline" | "incell" | "popup" | GridEditable | undefined;
        encodeTitles?: boolean | undefined;
        excel?: GridExcel | undefined;
        filterable?: boolean | GridFilterable | undefined;
        groupable?: boolean | GridGroupable | undefined;
        height?: number | string | undefined;
        loaderType?: string | undefined;
        messages?: GridMessages | undefined;
        mobile?: boolean | string | undefined;
        navigatable?: boolean | undefined;
        noRecords?: boolean | GridNoRecords | undefined;
        pageable?: boolean | GridPageable | undefined;
        pdf?: GridPdf | undefined;
        persistSelection?: boolean | undefined;
        reorderable?: boolean | undefined;
        resizable?: boolean | GridResizable | undefined;
        rowTemplate?: string | Function | undefined;
        scrollable?: boolean | GridScrollable | undefined;
        search?: GridSearch | undefined;
        selectable?: boolean | string | undefined;
        size?: string | undefined;
        sortable?: boolean | GridSortable | undefined;
        toolbar?: string | Function | (string | GridToolbarItem)[] | ToolBarItem[] | undefined;
        width?: number | string | undefined;
        beforeEdit?(e: GridBeforeEditEvent): void;
        cancel?(e: GridCancelEvent): void;
        cellClose?(e: GridCellCloseEvent): void;
        change?(e: GridChangeEvent): void;
        columnHide?(e: GridColumnHideEvent): void;
        columnLock?(e: GridColumnLockEvent): void;
        columnMenuInit?(e: GridColumnMenuInitEvent): void;
        columnMenuOpen?(e: GridColumnMenuOpenEvent): void;
        columnReorder?(e: GridColumnReorderEvent): void;
        columnResize?(e: GridColumnResizeEvent): void;
        columnShow?(e: GridColumnShowEvent): void;
        columnStick?(e: GridColumnStickEvent): void;
        columnUnlock?(e: GridColumnUnlockEvent): void;
        columnUnstick?(e: GridColumnUnstickEvent): void;
        dataBinding?(e: GridDataBindingEvent): void;
        dataBound?(e: GridDataBoundEvent): void;
        detailCollapse?(e: GridDetailCollapseEvent): void;
        detailExpand?(e: GridDetailExpandEvent): void;
        detailInit?(e: GridDetailInitEvent): void;
        edit?(e: GridEditEvent): void;
        excelExport?(e: GridExcelExportEvent): void;
        filter?(e: GridFilterEvent): void;
        filterMenuInit?(e: GridFilterMenuInitEvent): void;
        filterMenuOpen?(e: GridFilterMenuOpenEvent): void;
        group?(e: GridGroupEvent): void;
        groupCollapse?(e: GridGroupCollapseEvent): void;
        groupExpand?(e: GridGroupExpandEvent): void;
        navigate?(e: GridNavigateEvent): void;
        page?(e: GridPageEvent): void;
        pdfExport?(e: GridPdfExportEvent): void;
        remove?(e: GridRemoveEvent): void;
        save?(e: GridSaveEvent): void;
        saveChanges?(e: GridSaveChangesEvent): void;
        sort?(e: GridSortEvent): void;
    }

    interface GridEvent {
        sender: Grid;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface GridBeforeEditEvent extends GridEvent {
        model?: kendo.data.Model | undefined;
    }

    interface GridCancelEvent extends GridEvent {
        container?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
    }

    interface GridCellCloseEvent extends GridEvent {
        container?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
        type?: string | undefined;
    }

    interface GridChangeEvent extends GridEvent {
    }

    interface GridColumnHideEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnLockEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnMenuInitEvent extends GridEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface GridColumnMenuOpenEvent extends GridEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface GridColumnReorderEvent extends GridEvent {
        column?: any;
        newIndex?: number | undefined;
        oldIndex?: number | undefined;
    }

    interface GridColumnResizeEvent extends GridEvent {
        column?: any;
        newWidth?: number | undefined;
        oldWidth?: number | undefined;
    }

    interface GridColumnShowEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnStickEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnUnlockEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnUnstickEvent extends GridEvent {
        column?: any;
    }

    interface GridDataBindingEvent extends GridEvent {
        action?: string | undefined;
        index?: number | undefined;
        items?: any;
    }

    interface GridDataBoundEvent extends GridEvent {
    }

    interface GridDetailCollapseEvent extends GridEvent {
        detailRow?: JQuery | undefined;
        masterRow?: JQuery | undefined;
    }

    interface GridDetailExpandEvent extends GridEvent {
        detailRow?: JQuery | undefined;
        masterRow?: JQuery | undefined;
    }

    interface GridDetailInitEvent extends GridEvent {
        data?: kendo.data.ObservableObject | undefined;
        detailCell?: JQuery | undefined;
        detailRow?: JQuery | undefined;
        masterRow?: JQuery | undefined;
    }

    interface GridEditEvent extends GridEvent {
        container?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
    }

    interface GridExcelExportEvent extends GridEvent {
        data?: any;
        workbook?: kendo.ooxml.Workbook | undefined;
    }

    interface GridFilterEvent extends GridEvent {
        filter?: any;
        field?: string | undefined;
    }

    interface GridFilterMenuInitEvent extends GridEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface GridFilterMenuOpenEvent extends GridEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface GridGroupEvent extends GridEvent {
        groups?: any;
    }

    interface GridGroupCollapseEvent extends GridEvent {
        element?: JQuery | undefined;
        group?: any;
    }

    interface GridGroupExpandEvent extends GridEvent {
        element?: JQuery | undefined;
        group?: any;
    }

    interface GridNavigateEvent extends GridEvent {
        element?: JQuery | undefined;
    }

    interface GridPageEvent extends GridEvent {
        page?: number | undefined;
    }

    interface GridPdfExportEvent extends GridEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    interface GridRemoveEvent extends GridEvent {
        model?: kendo.data.Model | undefined;
        row?: JQuery | undefined;
    }

    interface GridSaveEvent extends GridEvent {
        model?: kendo.data.Model | undefined;
        container?: JQuery | undefined;
        values?: any;
    }

    interface GridSaveChangesEvent extends GridEvent {
    }

    interface GridSortEvent extends GridEvent {
        sort?: any;
    }

    class ImageEditor extends kendo.ui.Widget {
        static fn: ImageEditor;

        options: ImageEditorOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ImageEditor;

        constructor(element: Element, options?: ImageEditorOptions);

        drawImage(imageUrl: string): JQueryPromise<any>;
        drawCanvas(image: any): void;
        getCanvasElement(): HTMLElement;
        getCurrent2dContext(): any;
        getCurrentImage(): HTMLElement;
        getZoomLevel(): number;
        executeCommand(command: string, args?: any): void;
    }

    interface ImageEditorMessagesCommon {
        width?: string | undefined;
        height?: string | undefined;
        cancel?: string | undefined;
        confirm?: string | undefined;
        lockAspectRatio?: string | undefined;
    }

    interface ImageEditorMessagesPanesCropAspectRatioItems {
        originalRatio?: string | undefined;
    }

    interface ImageEditorMessagesPanesCrop {
        title?: string | undefined;
        aspectRatio?: string | undefined;
        aspectRatioItems?: ImageEditorMessagesPanesCropAspectRatioItems | undefined;
        orientation?: string | undefined;
        portrait?: string | undefined;
        landscape?: string | undefined;
    }

    interface ImageEditorMessagesPanesResize {
        title?: string | undefined;
        pixels?: string | undefined;
        percents?: string | undefined;
    }

    interface ImageEditorMessagesPanes {
        crop?: ImageEditorMessagesPanesCrop | undefined;
        resize?: ImageEditorMessagesPanesResize | undefined;
    }

    interface ImageEditorMessagesToolbar {
        open?: string | undefined;
        save?: string | undefined;
        undo?: string | undefined;
        redo?: string | undefined;
        crop?: string | undefined;
        resize?: string | undefined;
        zoomIn?: string | undefined;
        zoomOut?: string | undefined;
        zoomDropdown?: string | undefined;
        zoomActualSize?: string | undefined;
        zoomFitToScreen?: string | undefined;
    }

    interface ImageEditorMessages {
        toolbar?: ImageEditorMessagesToolbar | undefined;
        panes?: ImageEditorMessagesPanes | undefined;
        common?: ImageEditorMessagesCommon | undefined;
    }

    interface ImageEditorSaveAs {
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        proxyURL?: boolean | undefined;
        proxyTarget?: string | undefined;
    }

    interface ImageEditorToolbarItem {
        type?: string | undefined;
        overflow?: string | undefined;
        click?: Function | undefined;
        command?: string | undefined;
        options?: string | undefined;
        name?: string | undefined;
        togglable?: boolean | undefined;
        text?: string | undefined;
        template?: string | Function | undefined;
        showText?: string | undefined;
        primary?: boolean | undefined;
        attributes?: any;
        enable?: boolean | undefined;
        hidden?: boolean | undefined;
        spriteCssClass?: string | undefined;
        imageUrl?: string | undefined;
        showIcon?: string | undefined;
        icon?: string | undefined;
        id?: string | undefined;
    }

    interface ImageEditorToolbar {
        items?: ImageEditorToolbarItem[] | undefined;
        click?: Function | undefined;
        close?: Function | undefined;
        open?: Function | undefined;
        toggle?: Function | undefined;
        overflowClose?: Function | undefined;
        overflowOpen?: Function | undefined;
    }

    interface ImageEditorOptions {
        name?: string | undefined;
        width?: number | string | undefined;
        height?: number | string | undefined;
        imageUrl?: string | undefined;
        imageLabel?: string | undefined;
        saveAs?: ImageEditorSaveAs | undefined;
        toolbar?: boolean | ImageEditorToolbar | undefined;
        messages?: ImageEditorMessages | undefined;
        imageLoaded?(e: ImageEditorImageLoadedEvent): void;
        imageRendered?(e: ImageEditorImageRenderedEvent): void;
        execute?(e: ImageEditorExecuteEvent): void;
        error?(e: ImageEditorErrorEvent): void;
    }
    interface ImageEditorEvent {
        sender: ImageEditor;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ImageEditorImageLoadedEvent extends ImageEditorEvent {
        image?: any;
    }

    interface ImageEditorImageRenderedEvent extends ImageEditorEvent {
        image?: any;
        canvas?: HTMLElement | undefined;
        ctx?: any;
    }

    interface ImageEditorExecuteEvent extends ImageEditorEvent {
        command?: string | undefined;
        options?: any;
    }

    interface ImageEditorErrorEvent extends ImageEditorEvent {
    }

    class ListBox extends kendo.ui.Widget {
        static fn: ListBox;

        options: ListBoxOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ListBox;

        constructor(element: Element, options?: ListBoxOptions);

        clearSelection(): void;
        dataItem(element: JQuery): kendo.data.ObservableObject;
        dataItem(element: Element): kendo.data.ObservableObject;
        dataItem(element: string): kendo.data.ObservableObject;
        dataItems(): kendo.data.ObservableArray;
        destroy(): void;
        enable(element: JQuery, enable?: boolean): void;
        enable(element: Element, enable?: boolean): void;
        enable(element: string, enable?: boolean): void;
        items(): any;
        refresh(): void;
        reorder(element: JQuery, index: number): void;
        reorder(element: Element, index: number): void;
        reorder(element: string, index: number): void;
        remove(element: JQuery): void;
        remove(element: Element): void;
        remove(element: string): void;
        remove(element: any): void;
        select(): JQuery;
        select(items: JQuery): void;
        select(items: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ListBoxDraggable {
        enabled?: boolean | undefined;
        hint?: Function | string | JQuery | undefined;
        placeholder?: Function | string | JQuery | undefined;
    }

    interface ListBoxMessagesTools {
        moveDown?: string | undefined;
        moveUp?: string | undefined;
        remove?: string | undefined;
        transferAllFrom?: string | undefined;
        transferAllTo?: string | undefined;
        transferFrom?: string | undefined;
        transferTo?: string | undefined;
    }

    interface ListBoxMessages {
        tools?: ListBoxMessagesTools | undefined;
    }

    interface ListBoxToolbar {
        position?: string | undefined;
        tools?: any;
    }

    interface ListBoxOptions {
        name?: string | undefined;
        autoBind?: boolean | undefined;
        connectWith?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        draggable?: boolean | ListBoxDraggable | undefined;
        dropSources?: any;
        navigatable?: boolean | undefined;
        messages?: ListBoxMessages | undefined;
        selectable?: string | undefined;
        template?: string | Function | undefined;
        toolbar?: ListBoxToolbar | undefined;
        add?(e: ListBoxAddEvent): void;
        change?(e: ListBoxEvent): void;
        dataBound?(e: ListBoxEvent): void;
        dragstart?(e: ListBoxDragstartEvent): void;
        drag?(e: ListBoxDragEvent): void;
        drop?(e: ListBoxDropEvent): void;
        dragend?(e: ListBoxDragendEvent): void;
        remove?(e: ListBoxRemoveEvent): void;
        reorder?(e: ListBoxReorderEvent): void;
    }
    interface ListBoxEvent {
        sender: ListBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ListBoxAddEvent extends ListBoxEvent {
        items?: any;
        dataItems?: any;
    }

    interface ListBoxDragstartEvent extends ListBoxEvent {
        draggableEvent?: any;
        items?: JQuery | undefined;
    }

    interface ListBoxDragEvent extends ListBoxEvent {
        items?: JQuery | undefined;
        dataItems?: any;
        draggableEvent?: any;
    }

    interface ListBoxDropEvent extends ListBoxEvent {
        items?: any;
        dataItems?: any;
    }

    interface ListBoxDragendEvent extends ListBoxEvent {
        items?: any;
        dataItems?: any;
        draggableEvent?: any;
    }

    interface ListBoxRemoveEvent extends ListBoxEvent {
        items?: any;
        dataItems?: any;
    }

    interface ListBoxReorderEvent extends ListBoxEvent {
        items?: any;
        dataItems?: any;
        offset?: number | undefined;
    }

    class ListView extends kendo.ui.Widget {
        static fn: ListView;

        options: ListViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        content: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ListView;

        constructor(element: Element, options?: ListViewOptions);

        add(): void;
        cancel(): void;
        clearSelection(): void;
        dataItem(row: string): kendo.data.ObservableObject;
        dataItem(row: Element): kendo.data.ObservableObject;
        dataItem(row: JQuery): kendo.data.ObservableObject;
        dataItems(): kendo.data.ObservableArray;
        destroy(): void;
        edit(item: JQuery): void;
        items(): any;
        refresh(): void;
        remove(item: any): void;
        save(): void;
        select(): JQuery;
        select(items: JQuery): void;
        select(items: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ListViewOptions {
        name?: string | undefined;
        ariaLabel?: string | undefined;
        autoBind?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        editTemplate?: Function | undefined;
        height?: number | string | undefined;
        scrollable?: boolean | string | undefined;
        navigatable?: boolean | undefined;
        selectable?: boolean | string | undefined;
        pageable?: boolean | ListViewPageable | undefined;
        template?: Function | undefined;
        altTemplate?: Function | undefined;
        cancel?(e: ListViewCancelEvent): void;
        change?(e: ListViewEvent): void;
        dataBound?(e: ListViewEvent): void;
        dataBinding?(e: ListViewEvent): void;
        edit?(e: ListViewEditEvent): void;
        remove?(e: ListViewRemoveEvent): void;
        save?(e: ListViewSaveEvent): void;
    }

    interface ListViewPageableMessages {
        display?: string | undefined;
        empty?: string | undefined;
        page?: string | undefined;
        of?: string | undefined;
        itemsPerPage?: string | undefined;
        first?: string | undefined;
        last?: string | undefined;
        next?: string | undefined;
        previous?: string | undefined;
        refresh?: string | undefined;
        morePages?: string | undefined;
    }

    interface ListViewPageable {
        pageSize?: number | undefined;
        previousNext?: boolean | undefined;
        numeric?: boolean | undefined;
        buttonCount?: number | undefined;
        input?: boolean | undefined;
        pageSizes?: boolean | any | undefined;
        refresh?: boolean | undefined;
        responsive?: boolean | undefined;
        info?: boolean | undefined;
        messages?: ListViewPageableMessages | undefined;
        position?: string | undefined;
    }

    interface ListViewEvent {
        sender: ListView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ListViewCancelEvent extends ListViewEvent {
        container?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
    }

    interface ListViewEditEvent extends ListViewEvent {
        item?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
    }

    interface ListViewRemoveEvent extends ListViewEvent {
        item?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
    }

    interface ListViewSaveEvent extends ListViewEvent {
        model?: kendo.data.Model | undefined;
        item?: JQuery | undefined;
    }

    class Loader extends kendo.ui.Widget {
        static fn: Loader;

        options: LoaderOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Loader;

        constructor(element: Element, options?: LoaderOptions);

        show(): void;
        hide(): void;
        setOptions(options: any): void;
    }

    interface LoaderOptions {
        name?: string | undefined;
        themeColor?: string | undefined;
        type?: string | undefined;
        size?: string | undefined;
        visible?: boolean | undefined;
    }

    interface LoaderEvent {
        sender: Loader;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class MaskedTextBox extends kendo.ui.Widget {
        static fn: MaskedTextBox;

        options: MaskedTextBoxOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MaskedTextBox;

        constructor(element: Element, options?: MaskedTextBoxOptions);

        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        raw(): string;
        value(): string;
        value(value: string): void;
    }

    interface MaskedTextBoxLabel {
        content?: string | Function | undefined;
        floating?: boolean | undefined;
    }

    interface MaskedTextBoxOptions {
        name?: string | undefined;
        clearPromptChar?: boolean | undefined;
        culture?: string | undefined;
        fillMode?: string | undefined;
        label?: string | Function | MaskedTextBoxLabel | undefined;
        mask?: string | undefined;
        promptChar?: string | undefined;
        rounded?: string | undefined;
        rules?: any;
        size?: string | undefined;
        unmaskOnPost?: boolean | undefined;
        value?: string | undefined;
        change?(e: MaskedTextBoxChangeEvent): void;
    }
    interface MaskedTextBoxEvent {
        sender: MaskedTextBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MaskedTextBoxChangeEvent extends MaskedTextBoxEvent {
    }

    class MediaPlayer extends kendo.ui.Widget {
        static fn: MediaPlayer;

        options: MediaPlayerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MediaPlayer;

        constructor(element: Element, options?: MediaPlayerOptions);

        fullScreen(): boolean;
        fullScreen(value: boolean): void;
        media(): any;
        media(value: any): void;
        volume(): number;
        volume(value: number): void;
        mute(value: boolean): boolean;
        isEnded(): boolean;
        isPaused(): boolean;
        isPlaying(): boolean;
        pause(): void;
        play(): void;
        seek(milliseconds: number): number;
        stop(): void;
        titlebar(): JQuery;
        toolbar(): kendo.ui.ToolBar;
    }

    interface MediaPlayerMedia {
        source?: string | undefined;
        title?: string | undefined;
    }

    interface MediaPlayerMessages {
        pause?: string | undefined;
        play?: string | undefined;
        mute?: string | undefined;
        unmute?: string | undefined;
        quality?: string | undefined;
        fullscreen?: string | undefined;
    }

    interface MediaPlayerOptions {
        name?: string | undefined;
        autoPlay?: boolean | undefined;
        autoRepeat?: boolean | undefined;
        forwardSeek?: boolean | undefined;
        fullScreen?: boolean | undefined;
        media?: MediaPlayerMedia | undefined;
        messages?: MediaPlayerMessages | undefined;
        mute?: boolean | undefined;
        navigatable?: boolean | undefined;
        volume?: number | undefined;
        end?(e: MediaPlayerEvent): void;
        pause?(e: MediaPlayerEvent): void;
        play?(e: MediaPlayerEvent): void;
        ready?(e: MediaPlayerEvent): void;
        timeChange?(e: MediaPlayerEvent): void;
        volumeChange?(e: MediaPlayerEvent): void;
    }
    interface MediaPlayerEvent {
        sender: MediaPlayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Menu extends kendo.ui.Widget {
        static fn: Menu;

        options: MenuOptions;

        dataSource: kendo.data.DataSource;
        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Menu;

        constructor(element: Element, options?: MenuOptions);

        append(item: any, referenceItem?: string): kendo.ui.Menu;
        append(item: any, referenceItem?: JQuery): kendo.ui.Menu;
        close(element: string): kendo.ui.Menu;
        close(element: Element): kendo.ui.Menu;
        close(element: JQuery): kendo.ui.Menu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.Menu;
        enable(element: Element, enable: boolean): kendo.ui.Menu;
        enable(element: JQuery, enable: boolean): kendo.ui.Menu;
        findByUid(uid: string): JQuery;
        insertAfter(item: any, referenceItem: string): kendo.ui.Menu;
        insertAfter(item: any, referenceItem: Element): kendo.ui.Menu;
        insertAfter(item: any, referenceItem: JQuery): kendo.ui.Menu;
        insertBefore(item: any, referenceItem: string): kendo.ui.Menu;
        insertBefore(item: any, referenceItem: Element): kendo.ui.Menu;
        insertBefore(item: any, referenceItem: JQuery): kendo.ui.Menu;
        open(element: string): kendo.ui.Menu;
        open(element: Element): kendo.ui.Menu;
        open(element: JQuery): kendo.ui.Menu;
        remove(element: string): kendo.ui.Menu;
        remove(element: Element): kendo.ui.Menu;
        remove(element: JQuery): kendo.ui.Menu;
    }

    interface MenuAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MenuAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MenuAnimation {
        close?: MenuAnimationClose | undefined;
        open?: MenuAnimationOpen | undefined;
    }

    interface MenuOpenOnClick {
        rootMenuItems?: boolean | undefined;
        subMenuItems?: boolean | undefined;
    }

    interface MenuScrollable {
        distance?: number | undefined;
    }

    interface MenuOptions {
        name?: string | undefined;
        animation?: boolean | MenuAnimation | undefined;
        closeOnClick?: boolean | undefined;
        dataSource?: any | any | kendo.data.HierarchicalDataSource | undefined;
        dataTextField?: string | undefined;
        dataUrlField?: string | undefined;
        dataSpriteCssClassField?: string | undefined;
        dataImageUrlField?: string | undefined;
        dataContentField?: string | undefined;
        direction?: string | undefined;
        hoverDelay?: number | undefined;
        openOnClick?: boolean | MenuOpenOnClick | undefined;
        orientation?: string | undefined;
        popupCollision?: string | undefined;
        scrollable?: boolean | MenuScrollable | undefined;
        close?(e: MenuCloseEvent): void;
        open?(e: MenuOpenEvent): void;
        activate?(e: MenuActivateEvent): void;
        deactivate?(e: MenuDeactivateEvent): void;
        select?(e: MenuSelectEvent): void;
    }
    interface MenuEvent {
        sender: Menu;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MenuCloseEvent extends MenuEvent {
        item?: HTMLElement | undefined;
    }

    interface MenuOpenEvent extends MenuEvent {
        item?: HTMLElement | undefined;
    }

    interface MenuActivateEvent extends MenuEvent {
        item?: HTMLElement | undefined;
    }

    interface MenuDeactivateEvent extends MenuEvent {
        item?: HTMLElement | undefined;
    }

    interface MenuSelectEvent extends MenuEvent {
        item?: HTMLElement | undefined;
    }

    class MultiColumnComboBox extends kendo.ui.Widget {
        static fn: MultiColumnComboBox;

        options: MultiColumnComboBoxOptions;

        dataSource: kendo.data.DataSource;
        input: JQuery;
        list: JQuery;
        ul: JQuery;
        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MultiColumnComboBox;

        constructor(element: Element, options?: MultiColumnComboBoxOptions);

        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        select(): number;
        select(li: JQuery): void;
        select(li: number): void;
        select(li: Function): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        suggest(value: string): void;
        text(): string;
        text(text: string): void;
        toggle(toggle: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface MultiColumnComboBoxAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MultiColumnComboBoxAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MultiColumnComboBoxAnimation {
        close?: MultiColumnComboBoxAnimationClose | undefined;
        open?: MultiColumnComboBoxAnimationOpen | undefined;
    }

    interface MultiColumnComboBoxColumn {
        field?: string | undefined;
        title?: string | undefined;
        template?: string | Function | undefined;
        headerTemplate?: string | Function | undefined;
        width?: number | string | undefined;
    }

    interface MultiColumnComboBoxPopup {
        appendTo?: string | undefined;
        origin?: string | undefined;
        position?: string | undefined;
    }

    interface MultiColumnComboBoxVirtual {
        itemHeight?: number | undefined;
        mapValueTo?: string | undefined;
        valueMapper?: Function | undefined;
    }

    interface MultiColumnComboBoxOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: MultiColumnComboBoxAnimation | undefined;
        autoBind?: boolean | undefined;
        autoWidth?: boolean | undefined;
        cascadeFrom?: string | undefined;
        cascadeFromField?: string | undefined;
        cascadeFromParentField?: string | undefined;
        cascadeOnCustomValue?: boolean | undefined;
        columns?: MultiColumnComboBoxColumn[] | undefined;
        clearButton?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        delay?: number | undefined;
        dropDownWidth?: string | number | undefined;
        enable?: boolean | undefined;
        enforceMinLength?: boolean | undefined;
        fillMode?: string | undefined;
        filter?: string | undefined;
        filterFields?: any;
        label?: string | Function | BaseLabel | undefined;
        fixedGroupTemplate?: string | Function | undefined;
        footerTemplate?: string | Function | undefined;
        groupTemplate?: string | Function | undefined;
        height?: number | undefined;
        highlightFirst?: boolean | undefined;
        ignoreCase?: boolean | undefined;
        index?: number | undefined;
        minLength?: number | undefined;
        noDataTemplate?: string | Function | boolean | undefined;
        placeholder?: string | undefined;
        popup?: MultiColumnComboBoxPopup | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        suggest?: boolean | undefined;
        syncValueAndText?: boolean | undefined;
        headerTemplate?: string | Function | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        value?: string | undefined;
        valuePrimitive?: boolean | undefined;
        virtual?: boolean | MultiColumnComboBoxVirtual | undefined;
        change?(e: MultiColumnComboBoxChangeEvent): void;
        close?(e: MultiColumnComboBoxCloseEvent): void;
        dataBound?(e: MultiColumnComboBoxDataBoundEvent): void;
        filtering?(e: MultiColumnComboBoxFilteringEvent): void;
        open?(e: MultiColumnComboBoxOpenEvent): void;
        select?(e: MultiColumnComboBoxSelectEvent): void;
        cascade?(e: MultiColumnComboBoxCascadeEvent): void;
    }
    interface MultiColumnComboBoxEvent {
        sender: MultiColumnComboBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MultiColumnComboBoxChangeEvent extends MultiColumnComboBoxEvent {
    }

    interface MultiColumnComboBoxCloseEvent extends MultiColumnComboBoxEvent {
    }

    interface MultiColumnComboBoxDataBoundEvent extends MultiColumnComboBoxEvent {
    }

    interface MultiColumnComboBoxFilteringEvent extends MultiColumnComboBoxEvent {
        filter?: any;
    }

    interface MultiColumnComboBoxOpenEvent extends MultiColumnComboBoxEvent {
    }

    interface MultiColumnComboBoxSelectEvent extends MultiColumnComboBoxEvent {
        dataItem?: any;
        item?: JQuery | undefined;
    }

    interface MultiColumnComboBoxCascadeEvent extends MultiColumnComboBoxEvent {
    }

    class MultiSelect extends kendo.ui.Widget {
        static fn: MultiSelect;

        options: MultiSelectOptions;

        dataSource: kendo.data.DataSource;
        input: JQuery;
        list: JQuery;
        ul: JQuery;
        tagList: JQuery;
        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MultiSelect;

        constructor(element: Element, options?: MultiSelectOptions);

        close(): void;
        dataItems(): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        items(): any;
        open(): void;
        readonly(readonly: boolean): void;
        refresh(): void;
        search(word: string): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        toggle(toggle?: boolean): void;
        value(): any;
        value(value: any): void;
        value(value: string): void;
    }

    interface MultiSelectAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MultiSelectAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MultiSelectAnimation {
        close?: MultiSelectAnimationClose | undefined;
        open?: MultiSelectAnimationOpen | undefined;
    }

    interface MultiSelectPopup {
        appendTo?: string | undefined;
        origin?: string | undefined;
        position?: string | undefined;
    }

    interface MultiSelectVirtual {
        itemHeight?: number | undefined;
        mapValueTo?: string | undefined;
        valueMapper?: Function | undefined;
    }

    interface MultiSelectMessages {
        clear?: string | undefined;
        deleteTag?: string | undefined;
        downArrow?: string | undefined;
        noData?: string | undefined;
        singleTag?: string | undefined;
    }

    interface MultiSelectOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | MultiSelectAnimation | undefined;
        autoBind?: boolean | undefined;
        autoClose?: boolean | undefined;
        autoWidth?: boolean | undefined;
        clearButton?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        delay?: number | undefined;
        downArrow?: boolean | undefined;
        enable?: boolean | undefined;
        enforceMinLength?: boolean | undefined;
        fillMode?: string | undefined;
        filter?: string | undefined;
        fixedGroupTemplate?: string | Function | undefined;
        label?: string | Function | BaseLabel | undefined;
        footerTemplate?: string | Function | undefined;
        groupTemplate?: string | Function | undefined;
        height?: number | undefined;
        highlightFirst?: boolean | undefined;
        ignoreCase?: boolean | undefined;
        minLength?: number | undefined;
        maxSelectedItems?: number | undefined;
        messages?: MultiSelectMessages | undefined;
        noDataTemplate?: string | Function | boolean | undefined;
        placeholder?: string | undefined;
        popup?: MultiSelectPopup | undefined;
        headerTemplate?: string | Function | undefined;
        itemTemplate?: string | Function | undefined;
        tagTemplate?: string | Function | undefined;
        tagMode?: string | undefined;
        value?: any;
        valuePrimitive?: boolean | undefined;
        virtual?: boolean | MultiSelectVirtual | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        change?(e: MultiSelectChangeEvent): void;
        close?(e: MultiSelectCloseEvent): void;
        dataBound?(e: MultiSelectDataBoundEvent): void;
        filtering?(e: MultiSelectFilteringEvent): void;
        open?(e: MultiSelectOpenEvent): void;
        select?(e: MultiSelectSelectEvent): void;
        deselect?(e: MultiSelectDeselectEvent): void;
    }
    interface MultiSelectEvent {
        sender: MultiSelect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MultiSelectChangeEvent extends MultiSelectEvent {
    }

    interface MultiSelectCloseEvent extends MultiSelectEvent {
    }

    interface MultiSelectDataBoundEvent extends MultiSelectEvent {
    }

    interface MultiSelectFilteringEvent extends MultiSelectEvent {
        filter?: any;
    }

    interface MultiSelectOpenEvent extends MultiSelectEvent {
    }

    interface MultiSelectSelectEvent extends MultiSelectEvent {
        dataItem?: any;
        item?: JQuery | undefined;
    }

    interface MultiSelectDeselectEvent extends MultiSelectEvent {
        dataItem?: any;
        item?: JQuery | undefined;
    }

    class MultiViewCalendar extends kendo.ui.Widget {
        static fn: MultiViewCalendar;

        options: MultiViewCalendarOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MultiViewCalendar;

        constructor(element: Element, options?: MultiViewCalendarOptions);

        current(): Date;
        destroy(): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        navigate(value: Date, view: string): void;
        navigateDown(value: Date): void;
        navigateToFuture(): void;
        navigateToPast(): void;
        navigateUp(): void;
        selectDates(): any;
        selectDates(dates: any): void;
        selectRange(): any;
        selectRange(range: any): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
        view(): any;
    }

    interface MultiViewCalendarMessages {
        weekColumnHeader?: string | undefined;
    }

    interface MultiViewCalendarMonth {
        content?: string | undefined;
        weekNumber?: string | undefined;
        empty?: string | undefined;
    }

    interface MultiViewCalendarRange {
        start?: Date | undefined;
        end?: Date | undefined;
    }

    interface MultiViewCalendarOptions {
        name?: string | undefined;
        culture?: string | undefined;
        dates?: any;
        depth?: string | undefined;
        disableDates?: any | Function | undefined;
        footer?: string | Function | undefined;
        format?: string | undefined;
        max?: Date | undefined;
        messages?: MultiViewCalendarMessages | undefined;
        min?: Date | undefined;
        month?: MultiViewCalendarMonth | undefined;
        views?: number | undefined;
        range?: MultiViewCalendarRange | undefined;
        selectable?: string | undefined;
        selectDates?: any;
        showViewHeader?: boolean | undefined;
        weekNumber?: boolean | undefined;
        start?: string | undefined;
        value?: Date | undefined;
        change?(e: MultiViewCalendarEvent): void;
        navigate?(e: MultiViewCalendarEvent): void;
    }

    interface MultiViewCalendarEvent {
        sender: MultiViewCalendar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Notification extends kendo.ui.Widget {
        static fn: Notification;

        options: NotificationOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Notification;

        constructor(element: Element, options?: NotificationOptions);

        error(data: any): void;
        error(data: string): void;
        error(data: Function): void;
        getNotifications(): JQuery;
        hide(): void;
        info(data: any): void;
        info(data: string): void;
        info(data: Function): void;
        show(data: any, type: string): void;
        show(data: string, type: string): void;
        show(data: Function, type: string): void;
        showText(data: any, type: string): void;
        showText(data: string, type: string): void;
        showText(data: Function, type: string): void;
        success(data: any): void;
        success(data: string): void;
        success(data: Function): void;
        warning(data: any): void;
        warning(data: string): void;
        warning(data: Function): void;
    }

    interface NotificationPosition {
        bottom?: number | undefined;
        left?: number | undefined;
        pinned?: boolean | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface NotificationTemplate {
        type?: string | undefined;
        template?: string | undefined;
    }

    interface NotificationOptions {
        name?: string | undefined;
        allowHideAfter?: number | undefined;
        animation?: any | boolean | undefined;
        appendTo?: string | JQuery | undefined;
        autoHideAfter?: number | undefined;
        button?: boolean | undefined;
        height?: number | string | undefined;
        hideOnClick?: boolean | undefined;
        position?: NotificationPosition | undefined;
        stacking?: string | undefined;
        templates?: NotificationTemplate[] | undefined;
        title?: string | undefined;
        width?: number | string | undefined;
        hide?(e: NotificationHideEvent): void;
        show?(e: NotificationShowEvent): void;
    }
    interface NotificationEvent {
        sender: Notification;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface NotificationHideEvent extends NotificationEvent {
        element?: JQuery | undefined;
    }

    interface NotificationShowEvent extends NotificationEvent {
        element?: JQuery | undefined;
    }

    class NumericTextBox extends kendo.ui.Widget {
        static fn: NumericTextBox;

        options: NumericTextBoxOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): NumericTextBox;

        constructor(element: Element, options?: NumericTextBoxOptions);

        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        max(): number;
        max(value: number): void;
        max(value: string): void;
        min(): number;
        min(value: number): void;
        min(value: string): void;
        step(): number;
        step(value: number): void;
        step(value: string): void;
        value(): number;
        value(value: number): void;
        value(value: string): void;
    }

    interface NumericTextBoxLabel {
        content?: string | Function | undefined;
        floating?: boolean | undefined;
    }

    interface NumericTextBoxOptions {
        name?: string | undefined;
        culture?: string | undefined;
        decimals?: number | undefined;
        downArrowText?: string | undefined;
        factor?: number | undefined;
        fillMode?: string | undefined;
        format?: string | undefined;
        label?: string | Function | NumericTextBoxLabel | undefined;
        max?: number | undefined;
        min?: number | undefined;
        placeholder?: string | undefined;
        restrictDecimals?: boolean | undefined;
        round?: boolean | undefined;
        rounded?: string | undefined;
        selectOnFocus?: boolean | undefined;
        size?: string | undefined;
        spinners?: boolean | undefined;
        step?: number | undefined;
        upArrowText?: string | undefined;
        value?: number | undefined;
        change?(e: NumericTextBoxChangeEvent): void;
        spin?(e: NumericTextBoxSpinEvent): void;
    }
    interface NumericTextBoxEvent {
        sender: NumericTextBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface NumericTextBoxChangeEvent extends NumericTextBoxEvent {
    }

    interface NumericTextBoxSpinEvent extends NumericTextBoxEvent {
    }

    class OrgChart extends kendo.ui.Widget {
        static fn: OrgChart;

        options: OrgChartOptions;

        dataSource: kendo.data.OrgChartDataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): OrgChart;

        constructor(element: Element, options?: OrgChartOptions);

        append(item: any, parent: JQuery): void;
        append(item: any, parent: Element): void;
        append(item: any, parent: string): void;
        cancelChanges(): void;
        collapse(node: JQuery): void;
        collapse(node: Element): void;
        collapse(node: string): void;
        dataItem(node: JQuery): void;
        dataItem(node: Element): void;
        dataItem(node: string): void;
        delete(node: JQuery): void;
        delete(node: Element): void;
        delete(node: string): void;
        edit(node: JQuery): void;
        edit(node: Element): void;
        edit(node: string): void;
        expand(node: JQuery): void;
        expand(node: Element): void;
        expand(node: string): void;
        getCollapsedNodes(): void;
        items(): void;
        parent(node: JQuery): void;
        parent(node: Element): void;
        parent(node: string): void;
        saveChanges(): void;
        select(node: JQuery): void;
        select(node: Element): void;
        select(node: string): void;
    }

    interface OrgChartEditable {
        create?: boolean;
        destroy?: boolean;
        fields?: boolean;
        form?: any;
        parent?: boolean;
    }

    interface OrgChartMessages {
        label?: string | undefined;
        create?: string | undefined;
        edit?: string | undefined;
        destroy?: string | undefined;
        destroyContent?: string | undefined;
        destroyTitle?: string | undefined;
        cancel?: string | undefined;
        save?: string | undefined;
        menuLabel?: string | undefined;
        uploadAvatar?: string | undefined;
        parent?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        none?: string | undefined;
        expand?: string | undefined;
        collapse?: string | undefined;
    }

    interface OrgChartOptions {
        name?: string | undefined;
        cardsColors?: any | undefined;
        dataSource?: any | kendo.data.OrgChartDataSource | undefined;
        editable?: boolean | OrgChartEditable | undefined;
        groupField?: string | undefined;
        groupHeaderTemplate?: string | Function | undefined;
        messages?: OrgChartMessages | undefined;
        template?: string | Function | undefined;
        cancel?(e: OrgChartCancelEvent): void;
        change?(e: OrgChartChangeEvent): void;
        create?(e: OrgChartCreateEvent): void;
        collapse?(e: OrgChartCollapseEvent): void;
        dataBinding?(e: OrgChartDataBindingEvent): void;
        dataBound?(e: OrgChartDataBoundEvent): void;
        delete?(e: OrgChartDeleteEvent): void;
        edit?(e: OrgChartEditEvent): void;
        expand?(e: OrgChartExpandEvent): void;
        save?(e: OrgChartSaveEvent): void;
        select?(e: OrgChartSelectEvent): void;
    }
    interface OrgChartEvent {
        sender: OrgChart;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface OrgChartCancelEvent extends OrgChartEvent {
        dataItem?: any;
    }

    interface OrgChartChangeEvent extends OrgChartEvent {
    }

    interface OrgChartCollapseEvent extends OrgChartEvent {
        item?: JQuery;
        dataItems?: any;
    }

    interface OrgChartCreateEvent extends OrgChartEvent {
        dataItem?: any;
    }

    interface OrgChartDataBindingEvent extends OrgChartEvent {
    }

    interface OrgChartDataBoundEvent extends OrgChartEvent {
    }

    interface OrgChartDeleteEvent extends OrgChartEvent {
        dataItem?: any;
    }

    interface OrgChartEditEvent extends OrgChartEvent {
        dataItem?: any;
    }

    interface OrgChartExpandEvent extends OrgChartEvent {
        item?: JQuery;
        dataItems?: any;
    }

    interface OrgChartSaveEvent extends OrgChartEvent {
        dataItem?: any;
    }

    interface OrgChartSelectEvent extends OrgChartEvent {
        item?: JQuery;
        dataItems?: any;
    }

    class PDFViewer extends kendo.ui.Widget {
        static fn: PDFViewer;

        options: PDFViewerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PDFViewer;

        constructor(element: Element, options?: PDFViewerOptions);

        fromFile(file: any): void;
        activatePage(): void;
        loadPage(): void;
        execute(): void;
        setOptions(options: any): void;
        destroy(): void;
    }

    interface PDFViewerDefaultPageSize {
        width?: number | undefined;
        height?: number | undefined;
    }

    interface PDFViewerDplProcessingDownload {
        url?: string | undefined;
    }

    interface PDFViewerDplProcessingRead {
        url?: string | undefined;
        pageField?: string | undefined;
        type?: string | undefined;
        dataType?: string | undefined;
    }

    interface PDFViewerDplProcessingUpload {
        url?: string | undefined;
        saveField?: string | undefined;
    }

    interface PDFViewerDplProcessing {
        read?: PDFViewerDplProcessingRead | undefined;
        upload?: PDFViewerDplProcessingUpload | undefined;
        download?: PDFViewerDplProcessingDownload | undefined;
        loadOnDemand?: boolean | undefined;
    }

    interface PDFViewerMessagesDialogsExportAsDialogLabels {
        fileName?: string | undefined;
        saveAsType?: string | undefined;
        page?: string | undefined;
    }

    interface PDFViewerMessagesDialogsExportAsDialog {
        title?: string | undefined;
        defaultFileName?: string | undefined;
        pdf?: string | undefined;
        png?: string | undefined;
        svg?: string | undefined;
        labels?: PDFViewerMessagesDialogsExportAsDialogLabels | undefined;
    }

    interface PDFViewerMessagesDialogs {
        exportAsDialog?: PDFViewerMessagesDialogsExportAsDialog | undefined;
        okText?: string | undefined;
        save?: string | undefined;
        cancel?: string | undefined;
    }

    interface PDFViewerMessagesErrorMessages {
        notSupported?: string | undefined;
        parseError?: string | undefined;
        notFound?: string | undefined;
    }

    interface PDFViewerMessagesToolbarPager {
        first?: string | undefined;
        previous?: string | undefined;
        next?: string | undefined;
        last?: string | undefined;
        of?: string | undefined;
        page?: string | undefined;
        pages?: string | undefined;
    }

    interface PDFViewerMessagesToolbar {
        open?: string | undefined;
        exportAs?: string | undefined;
        download?: string | undefined;
        pager?: PDFViewerMessagesToolbarPager | undefined;
    }

    interface PDFViewerMessages {
        defaultFileName?: string | undefined;
        toolbar?: PDFViewerMessagesToolbar | undefined;
        errorMessages?: PDFViewerMessagesErrorMessages | undefined;
        dialogs?: PDFViewerMessagesDialogs | undefined;
    }

    interface PDFViewerPdfjsProcessing {
        file?: any | string | undefined;
    }

    interface PDFViewerToolbarItem {
        type?: string | undefined;
        overflow?: string | undefined;
        command?: string | undefined;
        name?: string | undefined;
        click?: Function | undefined;
        toggle?: Function | undefined;
        togglable?: boolean | undefined;
        text?: string | undefined;
        template?: string | Function | undefined;
        showText?: string | undefined;
        primary?: boolean | undefined;
        attributes?: any;
        enable?: boolean | undefined;
        hidden?: boolean | undefined;
        spriteCssClass?: string | undefined;
        imageUrl?: string | undefined;
        showIcon?: string | undefined;
        icon?: string | undefined;
        id?: string | undefined;
    }

    interface PDFViewerToolbar {
        items?: PDFViewerToolbarItem[] | undefined;
    }

    interface PDFViewerView {
        type?: string | undefined;
    }

    interface PDFViewerOptions {
        name?: string | undefined;
        pdfjsProcessing?: PDFViewerPdfjsProcessing | undefined;
        dplProcessing?: PDFViewerDplProcessing | undefined;
        width?: number | string | undefined;
        height?: number | string | undefined;
        defaultPageSize?: PDFViewerDefaultPageSize | undefined;
        page?: number | undefined;
        view?: PDFViewerView | undefined;
        toolbar?: boolean | PDFViewerToolbar | undefined;
        messages?: PDFViewerMessages | undefined;
        render?(e: PDFViewerRenderEvent): void;
        open?(e: PDFViewerOpenEvent): void;
        error?(e: PDFViewerErrorEvent): void;
    }
    interface PDFViewerEvent {
        sender: PDFViewer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PDFViewerRenderEvent extends PDFViewerEvent {
        page?: any;
    }

    interface PDFViewerOpenEvent extends PDFViewerEvent {
        file?: any;
    }

    interface PDFViewerErrorEvent extends PDFViewerEvent {
        dialog?: kendo.ui.Dialog | undefined;
        error?: any;
        message?: string | undefined;
    }

    class Pager extends kendo.ui.Widget {
        static fn: Pager;

        options: PagerOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Pager;

        constructor(element: Element, options?: PagerOptions);

        totalPages(): number;
        pageSize(): number;
        page(): number;
        page(page: number): void;
        refresh(): void;
        destroy(): void;
    }

    interface PagerMessages {
        display?: string | undefined;
        empty?: string | undefined;
        allPages?: string | undefined;
        numbersSelectLabel?: string | undefined;
        pageButtonLabel?: string | undefined;
        pageSizeDropDownLabel?: string | undefined;
        page?: string | undefined;
        of?: string | undefined;
        itemsPerPage?: string | undefined;
        first?: string | undefined;
        previous?: string | undefined;
        next?: string | undefined;
        last?: string | undefined;
        refresh?: string | undefined;
    }

    interface PagerOptions {
        name?: string | undefined;
        ARIATemplate?: string | undefined;
        autoBind?: boolean | undefined;
        buttonCount?: number | undefined;
        dataSource?: any | kendo.data.DataSource | undefined;
        selectTemplate?: string | undefined;
        linkTemplate?: string | undefined;
        info?: boolean | undefined;
        input?: boolean | undefined;
        numeric?: boolean | undefined;
        size?: string | undefined;
        pageSizes?: boolean | any | undefined;
        previousNext?: boolean | undefined;
        refresh?: boolean | undefined;
        responsive?: boolean | undefined;
        messages?: PagerMessages | undefined;
        navigatable?: boolean | undefined;
        change?(e: PagerChangeEvent): void;
    }
    interface PagerEvent {
        sender: Pager;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PagerChangeEvent extends PagerEvent {
    }

    class PanelBar extends kendo.ui.Widget {
        static fn: PanelBar;

        options: PanelBarOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PanelBar;

        constructor(element: Element, options?: PanelBarOptions);

        append(item: string, referenceItem?: string): kendo.ui.PanelBar;
        append(item: string, referenceItem?: Element): kendo.ui.PanelBar;
        append(item: string, referenceItem?: JQuery): kendo.ui.PanelBar;
        append(item: Element, referenceItem?: string): kendo.ui.PanelBar;
        append(item: Element, referenceItem?: Element): kendo.ui.PanelBar;
        append(item: Element, referenceItem?: JQuery): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem?: string): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem?: Element): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem?: JQuery): kendo.ui.PanelBar;
        append(item: any, referenceItem?: string): kendo.ui.PanelBar;
        append(item: any, referenceItem?: Element): kendo.ui.PanelBar;
        append(item: any, referenceItem?: JQuery): kendo.ui.PanelBar;
        clearSelection(): void;
        collapse(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        collapse(element: Element, useAnimation: boolean): kendo.ui.PanelBar;
        collapse(element: JQuery, useAnimation: boolean): kendo.ui.PanelBar;
        dataItem(node: JQuery): kendo.data.Node;
        dataItem(node: Element): kendo.data.Node;
        dataItem(node: string): kendo.data.Node;
        destroy(): void;
        enable(element: string, enable: boolean): void;
        enable(element: Element, enable: boolean): void;
        enable(element: JQuery, enable: boolean): void;
        expand(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        expand(element: Element, useAnimation: boolean): kendo.ui.PanelBar;
        expand(element: JQuery, useAnimation: boolean): kendo.ui.PanelBar;
        insertAfter(item: string, referenceItem: string): void;
        insertAfter(item: string, referenceItem: Element): void;
        insertAfter(item: string, referenceItem: JQuery): void;
        insertAfter(item: Element, referenceItem: string): void;
        insertAfter(item: Element, referenceItem: Element): void;
        insertAfter(item: Element, referenceItem: JQuery): void;
        insertAfter(item: JQuery, referenceItem: string): void;
        insertAfter(item: JQuery, referenceItem: Element): void;
        insertAfter(item: JQuery, referenceItem: JQuery): void;
        insertAfter(item: any, referenceItem: string): void;
        insertAfter(item: any, referenceItem: Element): void;
        insertAfter(item: any, referenceItem: JQuery): void;
        insertBefore(item: string, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: string, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: string, referenceItem: JQuery): kendo.ui.PanelBar;
        insertBefore(item: Element, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: Element, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: Element, referenceItem: JQuery): kendo.ui.PanelBar;
        insertBefore(item: JQuery, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: JQuery, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: JQuery, referenceItem: JQuery): kendo.ui.PanelBar;
        insertBefore(item: any, referenceItem: string): kendo.ui.PanelBar;
        insertBefore(item: any, referenceItem: Element): kendo.ui.PanelBar;
        insertBefore(item: any, referenceItem: JQuery): kendo.ui.PanelBar;
        reload(element: string): void;
        reload(element: Element): void;
        reload(element: JQuery): void;
        remove(element: string): void;
        remove(element: Element): void;
        remove(element: JQuery): void;
        select(): JQuery;
        select(element?: string): void;
        select(element?: Element): void;
        select(element?: JQuery): void;
        setDataSource(dataSource: kendo.data.HierarchicalDataSource): void;
    }

    interface PanelBarAnimationCollapse {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface PanelBarAnimationExpand {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface PanelBarAnimation {
        collapse?: PanelBarAnimationCollapse | undefined;
        expand?: PanelBarAnimationExpand | undefined;
    }

    interface PanelBarMessages {
        loading?: string | undefined;
        requestFailed?: string | undefined;
        retry?: string | undefined;
    }

    interface PanelBarOptions {
        name?: string | undefined;
        animation?: boolean | PanelBarAnimation | undefined;
        autoBind?: boolean | undefined;
        contentUrls?: any;
        dataImageUrlField?: string | undefined;
        dataSource?: any | any | kendo.data.HierarchicalDataSource | undefined;
        dataSpriteCssClassField?: string | undefined;
        dataTextField?: string | any | undefined;
        dataUrlField?: string | undefined;
        expandMode?: string | undefined;
        loadOnDemand?: boolean | undefined;
        messages?: PanelBarMessages | undefined;
        template?: string | Function | undefined;
        activate?(e: PanelBarActivateEvent): void;
        collapse?(e: PanelBarCollapseEvent): void;
        contentLoad?(e: PanelBarContentLoadEvent): void;
        dataBound?(e: PanelBarDataBoundEvent): void;
        error?(e: PanelBarErrorEvent): void;
        expand?(e: PanelBarExpandEvent): void;
        select?(e: PanelBarSelectEvent): void;
    }
    interface PanelBarEvent {
        sender: PanelBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PanelBarActivateEvent extends PanelBarEvent {
        item?: Element | undefined;
    }

    interface PanelBarCollapseEvent extends PanelBarEvent {
        item?: Element | undefined;
    }

    interface PanelBarContentLoadEvent extends PanelBarEvent {
        item?: Element | undefined;
        contentElement?: Element | undefined;
    }

    interface PanelBarDataBoundEvent extends PanelBarEvent {
        node?: JQuery | undefined;
    }

    interface PanelBarErrorEvent extends PanelBarEvent {
        xhr?: JQueryXHR | undefined;
        status?: string | undefined;
    }

    interface PanelBarExpandEvent extends PanelBarEvent {
        item?: Element | undefined;
    }

    interface PanelBarSelectEvent extends PanelBarEvent {
        item?: Element | undefined;
    }

    class PivotConfigurator extends kendo.ui.Widget {
        static fn: PivotConfigurator;

        options: PivotConfiguratorOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotConfigurator;

        constructor(element: Element, options?: PivotConfiguratorOptions);

        destroy(): void;
        refresh(): void;
        setDataSource(dataSource: kendo.data.PivotDataSource): void;
    }

    interface PivotConfiguratorMessagesFieldMenuOperators {
        contains?: string | undefined;
        doesnotcontain?: string | undefined;
        startswith?: string | undefined;
        endswith?: string | undefined;
        eq?: string | undefined;
        neq?: string | undefined;
    }

    interface PivotConfiguratorMessagesFieldMenu {
        info?: string | undefined;
        sortAscending?: string | undefined;
        sortDescending?: string | undefined;
        filterFields?: string | undefined;
        filter?: string | undefined;
        include?: string | undefined;
        title?: string | undefined;
        clear?: string | undefined;
        ok?: string | undefined;
        cancel?: string | undefined;
        operators?: PivotConfiguratorMessagesFieldMenuOperators | undefined;
    }

    interface PivotConfiguratorMessages {
        measures?: string | undefined;
        columns?: string | undefined;
        rows?: string | undefined;
        measuresLabel?: string | undefined;
        rowsLabel?: string | undefined;
        columnsLabel?: string | undefined;
        fieldsLabel?: string | undefined;
        fieldMenu?: PivotConfiguratorMessagesFieldMenu | undefined;
    }

    interface PivotConfiguratorSortable {
        allowUnsort?: boolean | undefined;
    }

    interface PivotConfiguratorOptions {
        name?: string | undefined;
        dataSource?: any | kendo.data.PivotDataSource | undefined;
        filterable?: boolean | undefined;
        sortable?: boolean | PivotConfiguratorSortable | undefined;
        height?: number | string | undefined;
        messages?: PivotConfiguratorMessages | undefined;
    }
    interface PivotConfiguratorEvent {
        sender: PivotConfigurator;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class PivotConfiguratorButton extends kendo.ui.Widget {
        static fn: PivotConfiguratorButton;

        options: PivotConfiguratorButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotConfiguratorButton;

        constructor(element: Element, options?: PivotConfiguratorButtonOptions);

        toggle(): void;
    }

    interface PivotConfiguratorButtonOptions {
        name?: string | undefined;
        configurator?: string | undefined;
        text?: string | undefined;
    }
    interface PivotConfiguratorButtonEvent {
        sender: PivotConfiguratorButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class PivotConfiguratorV2 extends kendo.ui.Widget {
        static fn: PivotConfiguratorV2;

        options: PivotConfiguratorV2Options;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotConfiguratorV2;

        constructor(element: Element, options?: PivotConfiguratorV2Options);

        destroy(): void;
        refresh(): void;
        setDataSource(dataSource: kendo.data.PivotDataSourceV2): void;
    }

    interface PivotConfiguratorV2MessagesFieldMenuOperators {
        contains?: string;
        doesnotcontain?: string;
        startswith?: string;
        endswith?: string;
        eq?: string;
        neq?: string;
    }

    interface PivotConfiguratorV2MessagesFieldMenu {
        apply?: string;
        sortAscending?: string;
        sortDescending?: string;
        filterFields?: string;
        filter?: string;
        include?: string;
        clear?: string;
        reset?: string;
        operators?: PivotConfiguratorV2MessagesFieldMenuOperators;
    }

    interface PivotConfiguratorV2Messages {
        applyButtonText?: string;
        cancelButtonText?: string;
        measures?: string;
        columns?: string;
        rows?: string;
        title?: string;
        fieldMenu?: PivotConfiguratorV2MessagesFieldMenu;
    }

    interface PivotConfiguratorV2Options {
        name?: string | undefined;
        dataSource?: any | kendo.data.PivotDataSourceV2;
        filterable?: boolean | undefined;
        sortable?: boolean | any;
        height?: number | string | undefined;
        messages?: PivotConfiguratorV2Messages | undefined;
        orientation?: string | undefined;
    }
    interface PivotConfiguratorV2Event {
        sender: PivotConfiguratorV2;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class PivotContainer extends kendo.ui.Widget {
        static fn: PivotContainer;

        options: PivotContainerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotContainer;

        constructor(element: Element, options?: PivotContainerOptions);
    }

    interface PivotContainerOptions {
        name?: string | undefined;
        configuratorPosition?: string | undefined;
    }
    interface PivotContainerEvent {
        sender: PivotContainer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class PivotGrid extends kendo.ui.Widget {
        static fn: PivotGrid;

        options: PivotGridOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotGrid;

        constructor(element: Element, options?: PivotGridOptions);

        cellInfo(columnIndex: number, rowIndex: number): any;
        cellInfoByElement(cell: string): any;
        cellInfoByElement(cell: Element): any;
        cellInfoByElement(cell: JQuery): any;
        destroy(): void;
        refresh(): void;
        setDataSource(dataSource: kendo.data.PivotDataSource): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
    }

    interface PivotGridExcel {
        fileName?: string | undefined;
        filterable?: boolean | undefined;
        forceProxy?: boolean | undefined;
        proxyURL?: string | undefined;
    }

    interface PivotGridMessagesFieldMenuOperators {
        contains?: string | undefined;
        doesnotcontain?: string | undefined;
        startswith?: string | undefined;
        endswith?: string | undefined;
        eq?: string | undefined;
        neq?: string | undefined;
    }

    interface PivotGridMessagesFieldMenu {
        info?: string | undefined;
        sortAscending?: string | undefined;
        sortDescending?: string | undefined;
        filterFields?: string | undefined;
        filter?: string | undefined;
        include?: string | undefined;
        title?: string | undefined;
        clear?: string | undefined;
        ok?: string | undefined;
        cancel?: string | undefined;
        operators?: PivotGridMessagesFieldMenuOperators | undefined;
    }

    interface PivotGridMessages {
        measureFields?: string | undefined;
        columnFields?: string | undefined;
        rowFields?: string | undefined;
        fieldMenu?: PivotGridMessagesFieldMenu | undefined;
    }

    interface PivotGridPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface PivotGridPdf {
        author?: string | undefined;
        avoidLinks?: boolean | string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: PivotGridPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface PivotGridSortable {
        allowUnsort?: boolean | undefined;
    }

    interface PivotGridOptions {
        name?: string | undefined;
        dataSource?: any | kendo.data.PivotDataSource | undefined;
        autoBind?: boolean | undefined;
        reorderable?: boolean | undefined;
        excel?: PivotGridExcel | undefined;
        pdf?: PivotGridPdf | undefined;
        filterable?: boolean | undefined;
        sortable?: boolean | PivotGridSortable | undefined;
        columnWidth?: number | undefined;
        height?: number | string | undefined;
        columnHeaderTemplate?: string | Function | undefined;
        dataCellTemplate?: string | Function | undefined;
        kpiStatusTemplate?: string | Function | undefined;
        kpiTrendTemplate?: string | Function | undefined;
        rowHeaderTemplate?: string | Function | undefined;
        messages?: PivotGridMessages | undefined;
        dataBinding?(e: PivotGridDataBindingEvent): void;
        dataBound?(e: PivotGridDataBoundEvent): void;
        expandMember?(e: PivotGridExpandMemberEvent): void;
        collapseMember?(e: PivotGridCollapseMemberEvent): void;
        excelExport?(e: PivotGridExcelExportEvent): void;
        pdfExport?(e: PivotGridPdfExportEvent): void;
    }
    interface PivotGridEvent {
        sender: PivotGrid;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PivotGridDataBindingEvent extends PivotGridEvent {
    }

    interface PivotGridDataBoundEvent extends PivotGridEvent {
    }

    interface PivotGridExpandMemberEvent extends PivotGridEvent {
        axis?: string | undefined;
        path?: string[] | undefined;
    }

    interface PivotGridCollapseMemberEvent extends PivotGridEvent {
        axis?: string | undefined;
        path?: string[] | undefined;
    }

    interface PivotGridExcelExportEvent extends PivotGridEvent {
        data?: any;
        workbook?: any;
    }

    interface PivotGridPdfExportEvent extends PivotGridEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    class PivotGridV2 extends kendo.ui.Widget {
        static fn: PivotGridV2;

        options: PivotGridV2Options;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PivotGridV2;

        constructor(element: Element, options?: PivotGridV2Options);

        cellInfo(columnIndex: number, rowIndex: number): any;
        cellInfoByElement(cell: string): any;
        cellInfoByElement(cell: Element): any;
        cellInfoByElement(cell: JQuery): any;
        destroy(): void;
        refresh(): void;
        setDataSource(dataSource: kendo.data.PivotDataSourceV2): void;
        saveAsPDF(): JQueryPromise<any>;
    }

    interface PivotGridV2PdfMargin {
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
        top?: number | string;
    }

    interface PivotGridV2Pdf {
        author?: string;
        autoPrint?: boolean;
        avoidLinks?: boolean | string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        jpegQuality?: number;
        keepPNG?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: PivotGridV2PdfMargin;
        paperSize?: string | any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface PivotGridV2Options {
        name?: string | undefined;
        dataSource?: any | kendo.data.PivotDataSourceV2;
        autoBind?: boolean | undefined;
        pdf?: PivotGridV2Pdf | undefined;
        columnWidth?: number | undefined;
        height?: number | string | undefined;
        columnHeaderTemplate?: string | Function | undefined;
        dataCellTemplate?: string | Function | undefined;
        rowHeaderTemplate?: string | Function | undefined;
        dataBinding?(e: PivotGridV2DataBindingEvent): void;
        dataBound?(e: PivotGridV2DataBoundEvent): void;
        expandMember?(e: PivotGridV2ExpandMemberEvent): void;
        collapseMember?(e: PivotGridV2CollapseMemberEvent): void;
        pdfExport?(e: PivotGridV2PdfExportEvent): void;
    }
    interface PivotGridV2Event {
        sender: PivotGridV2;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PivotGridV2DataBindingEvent extends PivotGridV2Event {
    }

    interface PivotGridV2DataBoundEvent extends PivotGridV2Event {
    }

    interface PivotGridV2ExpandMemberEvent extends PivotGridV2Event {
        axis?: string;
        path?: string;
    }

    interface PivotGridV2CollapseMemberEvent extends PivotGridV2Event {
        axis?: string;
        path?: string;
    }

    interface PivotGridV2PdfExportEvent extends PivotGridV2Event {
        promise?: JQueryPromise<any>;
    }

    class Popover extends kendo.ui.Widget {
        static fn: Popover;

        options: PopoverOptions;

        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Popover;

        constructor(element: Element, options?: PopoverOptions);

        show(element: JQuery): void;
        hide(): void;
        target(): JQuery;
    }

    interface PopoverAction {
        text?: string;
        click?: Function;
        iconClass?: Function;
    }

    interface PopoverAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface PopoverAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface PopoverAnimation {
        close?: PopoverAnimationClose;
        open?: PopoverAnimationOpen;
    }

    interface PopoverOptions {
        name?: string | undefined;
        actions?: PopoverAction[] | undefined;
        actionsPosition?: string | undefined;
        animation?: boolean | PopoverAnimation | undefined;
        body?: string | Function | undefined;
        filter?: string | undefined;
        header?: string | Function | undefined;
        height?: number | undefined;
        toggleOnClick?: boolean | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showOn?: string | undefined;
        offset?: number | undefined;
        show?(e: PopoverEvent): void;
        hide?(e: PopoverEvent): void;
    }
    interface PopoverEvent {
        sender: Popover;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Popup extends kendo.ui.Widget {
        static fn: Popup;
        static TabKeyTrap: any;

        options: PopupOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Popup;

        constructor(element: Element, options?: PopupOptions);

        close(): void;
        open(): void;
        position(): void;
        setOptions(options: any): void;
        toggle(toggle?: boolean): void;
        visible(): boolean;
    }

    interface PopupAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface PopupAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface PopupAnimation {
        close?: PopupAnimationClose | undefined;
        open?: PopupAnimationOpen | undefined;
    }

    interface PopupOptions {
        name?: string | undefined;
        adjustSize?: any;
        animation?: boolean | PopupAnimation | undefined;
        anchor?: string | JQuery | undefined;
        appendTo?: string | JQuery | undefined;
        collision?: string | undefined;
        origin?: string | undefined;
        position?: string | undefined;
        activate?(e: PopupActivateEvent): void;
        close?(e: PopupCloseEvent): void;
        deactivate?(e: PopupDeactivateEvent): void;
        open?(e: PopupOpenEvent): void;
    }
    interface PopupEvent {
        sender: Popup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PopupActivateEvent extends PopupEvent {
    }

    interface PopupCloseEvent extends PopupEvent {
    }

    interface PopupDeactivateEvent extends PopupEvent {
    }

    interface PopupOpenEvent extends PopupEvent {
    }

    class ProgressBar extends kendo.ui.Widget {
        static fn: ProgressBar;

        options: ProgressBarOptions;

        progressStatus: JQuery;
        progressWrapper: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ProgressBar;

        constructor(element: Element, options?: ProgressBarOptions);

        enable(enable: boolean): void;
        value(): number;
        value(value: boolean | number): void;
    }

    interface ProgressBarAnimation {
        duration?: number | undefined;
    }

    interface ProgressBarOptions {
        name?: string | undefined;
        animation?: boolean | ProgressBarAnimation | undefined;
        ariaRole?: boolean | undefined;
        chunkCount?: number | undefined;
        enable?: boolean | undefined;
        label?: string | undefined;
        labelId?: string | undefined;
        max?: number | undefined;
        min?: number | undefined;
        orientation?: string | undefined;
        reverse?: boolean | undefined;
        showStatus?: boolean | undefined;
        type?: string | undefined;
        value?: number | undefined;
        change?(e: ProgressBarChangeEvent): void;
        complete?(e: ProgressBarCompleteEvent): void;
    }
    interface ProgressBarEvent {
        sender: ProgressBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ProgressBarChangeEvent extends ProgressBarEvent {
        value?: number | undefined;
    }

    interface ProgressBarCompleteEvent extends ProgressBarEvent {
        value?: number | undefined;
    }

    class Prompt extends kendo.ui.Dialog {
        static fn: Prompt;

        options: PromptOptions;

        result: JQueryPromise<any>;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Prompt;

        constructor(element: Element, options?: PromptOptions);
    }

    interface PromptMessages {
        okText?: string | undefined;
        cancel?: string | undefined;
    }

    interface PromptOptions {
        name?: string | undefined;
        messages?: PromptMessages | undefined;
    }
    interface PromptEvent {
        sender: Prompt;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class RadioButton extends kendo.ui.Widget {
        static fn: RadioButton;

        options: RadioButtonOptions;
        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): RadioButton;

        constructor(element: Element, options?: RadioButtonOptions);

        check(): boolean;
        check(check: boolean): void;
        toggle(): void;
        destroy(): void;
        enable(enable: boolean): void;
    }

    interface RadioButtonOptions {
        name?: string | undefined;
        checked?: boolean | undefined;
        enabled?: boolean | undefined;
        encoded?: boolean | undefined;
        label?: string | undefined;
        size?: string | undefined;
        change?(e: RadioButtonChangeEvent): void;
    }
    interface RadioButtonEvent {
        sender: RadioButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RadioButtonChangeEvent extends RadioButtonEvent {
        checked?: any;
    }

    class RadioGroup extends kendo.ui.Widget {
        static fn: RadioGroup;

        options: RadioGroupOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): RadioGroup;

        constructor(element: Element, options?: RadioGroupOptions);

        enable(enable: boolean): void;
        enableItem(enable: boolean, index: number): void;
        item(index: number): JQuery;
        items(): JQuery;
        value(): string;
        value(value: string): void;
    }

    interface RadioGroupItem {
        attributes?: any;
        cssClass?: string | undefined;
        enabled?: boolean | undefined;
        encoded?: boolean | undefined;
        label?: string | undefined;
        value?: string | undefined;
    }

    interface RadioGroupOptions {
        name?: string | undefined;
        enabled?: boolean | undefined;
        items?: RadioGroupItem[] | undefined;
        labelPosition?: string | undefined;
        layout?: string | undefined;
        inputName?: string | undefined;
        inputSize?: string | undefined;
        value?: string | undefined;
        change?(e: RadioGroupChangeEvent): void;
        focus?(e: RadioGroupFocusEvent): void;
        select?(e: RadioGroupSelectEvent): void;
    }

    interface RadioGroupEvent {
        sender: RadioGroup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RadioGroupChangeEvent extends RadioGroupEvent {
        target?: JQuery | undefined;
        oldValue?: string | undefined;
        newValue?: string | undefined;
    }

    interface RadioGroupFocusEvent extends RadioGroupEvent {
        target?: JQuery | undefined;
    }

    interface RadioGroupSelectEvent extends RadioGroupEvent {
        target?: JQuery | undefined;
    }

    class RangeSlider extends kendo.ui.Widget {
        static fn: RangeSlider;

        options: RangeSliderOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): RangeSlider;

        constructor(element: Element, options?: RangeSliderOptions);

        destroy(): void;
        enable(enable: boolean): void;
        value(): any;
        value(startEndArray: any): void;
        values(): any;
        values(selectionStart: number, selectionEnd: number): void;
        resize(): void;
    }

    interface RangeSliderTooltip {
        enabled?: boolean | undefined;
        format?: string | undefined;
        template?: string | undefined;
    }

    interface RangeSliderOptions {
        name?: string | undefined;
        largeStep?: number | undefined;
        leftDragHandleTitle?: string | undefined;
        max?: number | undefined;
        min?: number | undefined;
        orientation?: string | undefined;
        rightDragHandleTitle?: string | undefined;
        selectionEnd?: number | undefined;
        selectionStart?: number | undefined;
        smallStep?: number | undefined;
        tickPlacement?: string | undefined;
        tooltip?: RangeSliderTooltip | undefined;
        change?(e: RangeSliderChangeEvent): void;
        slide?(e: RangeSliderSlideEvent): void;
    }
    interface RangeSliderEvent {
        sender: RangeSlider;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RangeSliderChangeEvent extends RangeSliderEvent {
        value?: any;
    }

    interface RangeSliderSlideEvent extends RangeSliderEvent {
        value?: any;
    }

    class Rating extends kendo.ui.Widget {
        static fn: Rating;

        options: RatingOptions;

        element: JQuery;
        wrapper: JQuery;
        container: JQuery;

        static extend(proto: Object): Rating;

        constructor(element: Element, options?: RatingOptions);

        value(value: number): void;
        reset(): void;
        enable(enable: boolean): void;
        readonly(enable: boolean): void;
        setOptions(options: any): void;
        destroy(): void;
    }

    interface RatingOptions {
        name?: string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        selection: string | "continuous" | "single";
        precision: string | "item" | "half";
        label?: boolean | RatingLabel | undefined;
        tooltip?: boolean | undefined;
        itemTemplate?: string | Function | undefined;
        selectedTemplate?: string | Function | undefined;
        hoveredTemplate?: string | Function | undefined;
        selectValueOnFocus?: number | undefined;
        enabled?: boolean | undefined;
        readonly?: boolean | undefined;
        change?(e: RatingChangeEvent): void;
        select?(e: RatingSelectEvent): void;
    }

    interface RatingLabel {
        template: string | Function;
    }

    interface RatingEvent {
        sender: Rating;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface RatingChangeEvent extends RatingEvent {
        target?: Element | undefined;
        oldValue?: number | undefined;
        newValue?: number | undefined;
    }

    interface RatingSelectEvent extends RatingEvent {
        target?: Element | undefined;
    }

    class ResponsivePanel extends kendo.ui.Widget {
        static fn: ResponsivePanel;

        options: ResponsivePanelOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ResponsivePanel;

        constructor(element: Element, options?: ResponsivePanelOptions);

        close(): void;
        destroy(): void;
        open(): void;
    }

    interface ResponsivePanelOptions {
        name?: string | undefined;
        autoClose?: boolean | undefined;
        breakpoint?: number | undefined;
        orientation?: string | undefined;
        toggleButton?: string | undefined;
        close?(e: ResponsivePanelEvent): void;
        open?(e: ResponsivePanelEvent): void;
    }
    interface ResponsivePanelEvent {
        sender: ResponsivePanel;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Scheduler extends kendo.ui.Widget {
        static fn: Scheduler;

        options: SchedulerOptions;

        dataSource: kendo.data.DataSource;
        resources: any;
        calendar: kendo.ui.Calendar;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Scheduler;

        constructor(element: Element, options?: SchedulerOptions);

        addEvent(data: any): void;
        cancelEvent(): void;
        data(): void;
        date(): Date;
        date(value?: Date): void;
        destroy(): void;
        editEvent(event: string): void;
        editEvent(event: kendo.data.SchedulerEvent): void;
        items(): any;
        occurrenceByUid(uid: string): kendo.data.SchedulerEvent;
        occurrencesInRange(start: Date, end: Date): any;
        refresh(): void;
        removeEvent(event: string): void;
        removeEvent(event: kendo.data.SchedulerEvent): void;
        resourcesBySlot(slot: any): any;
        saveAsPDF(): JQueryPromise<any>;
        saveEvent(): void;
        select(): void;
        select(options: SchedulerEvent[] | SchedulerSelectOptions): void;
        setDataSource(dataSource: kendo.data.SchedulerDataSource): void;
        slotByPosition(xPosition: number, yPosition: number): any;
        slotByElement(element: Element): any;
        slotByElement(element: JQuery): any;
        view(): kendo.ui.SchedulerView;
        view(type?: string): void;
        viewName(): string;
    }

    interface SchedulerSelectOptions {
        events?: SchedulerEvent[] | any[] | undefined;
        resources?: any[] | undefined;
        start?: Date | undefined;
        end?: Date | undefined;
        isAllDay?: boolean | undefined;
    }

    interface SchedulerCurrentTimeMarker {
        updateInterval?: number | undefined;
        useLocalTimezone?: boolean | undefined;
    }

    interface SchedulerEditable {
        confirmation?: boolean | string | undefined;
        create?: boolean | undefined;
        destroy?: boolean | undefined;
        editRecurringMode?: string | undefined;
        move?: boolean | undefined;
        resize?: boolean | undefined;
        template?: string | Function | undefined;
        update?: boolean | undefined;
        window?: any;
    }

    interface SchedulerFooter {
        command?: string | boolean | undefined;
    }

    interface SchedulerGroup {
        date?: boolean | undefined;
        resources?: any;
        orientation?: string | undefined;
    }

    interface SchedulerMessagesEditable {
        confirmation?: string | undefined;
    }

    interface SchedulerMessagesEditor {
        allDayEvent?: string | undefined;
        description?: string | undefined;
        editorTitle?: string | undefined;
        end?: string | undefined;
        endTimezone?: string | undefined;
        repeat?: string | undefined;
        separateTimezones?: string | undefined;
        start?: string | undefined;
        startTimezone?: string | undefined;
        timezone?: string | undefined;
        timezoneEditorButton?: string | undefined;
        timezoneEditorTitle?: string | undefined;
        title?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorDaily {
        interval?: string | undefined;
        repeatEvery?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorEnd {
        after?: string | undefined;
        occurrence?: string | undefined;
        label?: string | undefined;
        never?: string | undefined;
        mobileLabel?: string | undefined;
        on?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorFrequencies {
        daily?: string | undefined;
        monthly?: string | undefined;
        never?: string | undefined;
        weekly?: string | undefined;
        yearly?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorMonthly {
        day?: string | undefined;
        interval?: string | undefined;
        repeatEvery?: string | undefined;
        repeatOn?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorOffsetPositions {
        first?: string | undefined;
        second?: string | undefined;
        third?: string | undefined;
        fourth?: string | undefined;
        last?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorWeekdays {
        day?: string | undefined;
        weekday?: string | undefined;
        weekend?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorWeekly {
        interval?: string | undefined;
        repeatEvery?: string | undefined;
        repeatOn?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditorYearly {
        of?: string | undefined;
        repeatEvery?: string | undefined;
        repeatOn?: string | undefined;
        interval?: string | undefined;
    }

    interface SchedulerMessagesRecurrenceEditor {
        daily?: SchedulerMessagesRecurrenceEditorDaily | undefined;
        end?: SchedulerMessagesRecurrenceEditorEnd | undefined;
        frequencies?: SchedulerMessagesRecurrenceEditorFrequencies | undefined;
        monthly?: SchedulerMessagesRecurrenceEditorMonthly | undefined;
        offsetPositions?: SchedulerMessagesRecurrenceEditorOffsetPositions | undefined;
        recurrenceEditorTitle?: string | undefined;
        weekly?: SchedulerMessagesRecurrenceEditorWeekly | undefined;
        weekdays?: SchedulerMessagesRecurrenceEditorWeekdays | undefined;
        yearly?: SchedulerMessagesRecurrenceEditorYearly | undefined;
    }

    interface SchedulerMessagesRecurrenceMessages {
        deleteRecurring?: string | undefined;
        deleteWindowOccurrence?: string | undefined;
        deleteWindowSeries?: string | undefined;
        deleteWindowTitle?: string | undefined;
        editRecurring?: string | undefined;
        editWindowOccurrence?: string | undefined;
        editWindowSeries?: string | undefined;
        editWindowTitle?: string | undefined;
    }

    interface SchedulerMessagesViews {
        day?: string | undefined;
        week?: string | undefined;
        month?: string | undefined;
        agenda?: string | undefined;
        year?: string | undefined;
        timelineMonth?: string;
        timelineWeek?: string;
    }

    interface SchedulerMessages {
        allDay?: string | undefined;
        ariaEventLabel?: string | undefined;
        ariaSlotLabel?: string | undefined;
        cancel?: string | undefined;
        date?: string | undefined;
        deleteWindowTitle?: string | undefined;
        destroy?: string | undefined;
        event?: string | undefined;
        defaultRowText?: string | undefined;
        next?: string | undefined;
        pdf?: string | undefined;
        previous?: string | undefined;
        refresh?: string | undefined;
        save?: string | undefined;
        selectView?: string | undefined;
        showFullDay?: string | undefined;
        showWorkDay?: string | undefined;
        time?: string | undefined;
        today?: string | undefined;
        editable?: SchedulerMessagesEditable | undefined;
        editor?: SchedulerMessagesEditor | undefined;
        recurrenceEditor?: SchedulerMessagesRecurrenceEditor | undefined;
        recurrenceMessages?: SchedulerMessagesRecurrenceMessages | undefined;
        views?: SchedulerMessagesViews | undefined;
    }

    interface SchedulerOngoing {
        cssClass?: string | undefined;
        enabled?: boolean | undefined;
        updateInterval?: number | undefined;
        useLocalTimezone?: boolean | undefined;
    }

    interface SchedulerPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface SchedulerPdf {
        author?: string | undefined;
        avoidLinks?: boolean | string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: SchedulerPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface SchedulerResource {
        dataColorField?: string | undefined;
        dataParentValueField?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        field?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        title?: string | undefined;
        valuePrimitive?: boolean | undefined;
    }

    interface SchedulerToolbarItem {
        name?: string | undefined;
    }

    interface SchedulerToolbarItemsMobileOptions {
        main?: ToolBarItem[] | undefined;
        navigation?: ToolBarItem[] | undefined;
    }

    interface SchedulerToolbarItemsOptions {
        desktop?: ToolBarItem[] | undefined;
        mobile?: SchedulerToolbarItemsMobileOptions | undefined;
    }

    interface SchedulerToolbarOptions {
        items?: ToolBarItem[] | SchedulerToolbarItemsOptions | undefined;
    }

    interface SchedulerViewEditable {
        create?: boolean | undefined;
        destroy?: boolean | undefined;
        update?: boolean | undefined;
    }

    interface SchedulerViewGroup {
        date?: boolean | undefined;
        orientation?: string | undefined;
    }

    interface SchedulerView {
        adaptiveSlotHeight?: boolean | undefined;
        allDayEventTemplate?: string | Function | undefined;
        allDaySlot?: boolean | undefined;
        allDaySlotTemplate?: string | Function | undefined;
        columnWidth?: number | undefined;
        content?: JQuery | undefined;
        dateHeaderTemplate?: string | Function | undefined;
        dayTemplate?: string | Function | undefined;
        editable?: boolean | SchedulerViewEditable | undefined;
        endDate?(): Date;
        endTime?: Date | undefined;
        eventHeight?: number | string | undefined;
        eventSpacing?: number | undefined;
        eventsPerDay?: number | undefined;
        eventTemplate?: string | Function | undefined;
        eventTimeTemplate?: string | Function | undefined;
        group?: SchedulerViewGroup | undefined;
        majorTick?: number | undefined;
        majorTimeHeaderTemplate?: string | Function | undefined;
        minorTickCount?: number | undefined;
        minorTimeHeaderTemplate?: string | Function | undefined;
        name?: string | undefined;
        selected?: boolean | undefined;
        selectedDateFormat?: string | undefined;
        selectedShortDateFormat?: string | undefined;
        showWorkHours?: boolean | undefined;
        slotTemplate?: string | Function | undefined;
        startDate?(): Date;
        startTime?: Date | undefined;
        title?: string | undefined;
        type?: string | undefined;
        workWeekStart?: number | undefined;
        workWeekEnd?: number | undefined;
        months?: number | undefined;
        tooltipTemplate?: string | Function | undefined;
    }

    interface SchedulerOptions {
        name?: string | undefined;
        allDayEventTemplate?: string | Function | undefined;
        allDaySlot?: boolean | undefined;
        autoBind?: boolean | undefined;
        currentTimeMarker?: boolean | SchedulerCurrentTimeMarker | undefined;
        dataSource?: any | any | kendo.data.SchedulerDataSource | undefined;
        date?: Date | undefined;
        dateHeaderTemplate?: string | Function | undefined;
        editable?: boolean | SchedulerEditable | undefined;
        endTime?: Date | undefined;
        eventTemplate?: string | Function | undefined;
        footer?: boolean | SchedulerFooter | undefined;
        group?: SchedulerGroup | undefined;
        groupHeaderTemplate?: string | Function | undefined;
        height?: number | string | undefined;
        majorTick?: number | undefined;
        majorTimeHeaderTemplate?: string | Function | undefined;
        max?: Date | undefined;
        messages?: SchedulerMessages | undefined;
        min?: Date | undefined;
        minorTickCount?: number | undefined;
        minorTimeHeaderTemplate?: string | Function | undefined;
        mobile?: boolean | string | undefined;
        ongoingEvents?: boolean | SchedulerOngoing | undefined;
        pdf?: SchedulerPdf | undefined;
        resources?: SchedulerResource[] | undefined;
        selectable?: boolean | undefined;
        showWorkHours?: boolean | undefined;
        snap?: boolean | undefined;
        startTime?: Date | undefined;
        timezone?: string | undefined;
        toolbar?: SchedulerToolbarItem[] | SchedulerToolbarOptions | undefined;
        views?: SchedulerView[] | undefined;
        width?: number | string | undefined;
        workDayStart?: Date | undefined;
        workDayEnd?: Date | undefined;
        workWeekStart?: number | undefined;
        workWeekEnd?: number | undefined;
        add?(e: SchedulerAddEvent): void;
        cancel?(e: SchedulerCancelEvent): void;
        change?(e: SchedulerChangeEvent): void;
        dataBinding?(e: SchedulerDataBindingEvent): void;
        dataBound?(e: SchedulerDataBoundEvent): void;
        edit?(e: SchedulerEditEvent): void;
        moveStart?(e: SchedulerMoveStartEvent): void;
        move?(e: SchedulerMoveEvent): void;
        moveEnd?(e: SchedulerMoveEndEvent): void;
        navigate?(e: SchedulerNavigateEvent): void;
        pdfExport?(e: SchedulerPdfExportEvent): void;
        remove?(e: SchedulerRemoveEvent): void;
        resizeStart?(e: SchedulerResizeStartEvent): void;
        resize?(e: SchedulerResizeEvent): void;
        resizeEnd?(e: SchedulerResizeEndEvent): void;
        save?(e: SchedulerSaveEvent): void;
    }
    interface SchedulerEvent {
        sender: Scheduler;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SchedulerAddEvent extends SchedulerEvent {
        event?: any;
    }

    interface SchedulerCancelEvent extends SchedulerEvent {
        container?: JQuery | undefined;
        event?: kendo.data.SchedulerEvent | undefined;
    }

    interface SchedulerChangeEvent extends SchedulerEvent {
        start?: Date | undefined;
        end?: Date | undefined;
        events?: any;
        slots?: any;
        resources?: any;
    }

    interface SchedulerDataBindingEvent extends SchedulerEvent {
    }

    interface SchedulerDataBoundEvent extends SchedulerEvent {
    }

    interface SchedulerEditEvent extends SchedulerEvent {
        container?: JQuery | undefined;
        event?: kendo.data.SchedulerEvent | undefined;
    }

    interface SchedulerMoveStartEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent | undefined;
    }

    interface SchedulerMoveEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent | undefined;
        slot?: any;
    }

    interface SchedulerMoveEndEvent extends SchedulerEvent {
        start?: Date | undefined;
        end?: Date | undefined;
        event?: kendo.data.SchedulerEvent | undefined;
        slot?: any;
        resources?: any;
    }

    interface SchedulerNavigateEvent extends SchedulerEvent {
        action?: string | undefined;
        date?: Date | undefined;
        view?: string | undefined;
    }

    interface SchedulerPdfExportEvent extends SchedulerEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    interface SchedulerRemoveEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent | undefined;
    }

    interface SchedulerResizeStartEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent | undefined;
    }

    interface SchedulerResizeEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent | undefined;
        slot?: any;
    }

    interface SchedulerResizeEndEvent extends SchedulerEvent {
        start?: Date | undefined;
        end?: Date | undefined;
        event?: kendo.data.SchedulerEvent | undefined;
        slot?: any;
    }

    interface SchedulerSaveEvent extends SchedulerEvent {
        container?: JQuery | undefined;
        event?: kendo.data.SchedulerEvent | undefined;
    }

    class ScrollView extends kendo.ui.Widget {
        static fn: ScrollView;

        options: ScrollViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ScrollView;

        constructor(element: Element, options?: ScrollViewOptions);

        content(content: string): void;
        content(content: JQuery): void;
        destroy(): void;
        next(): void;
        prev(): void;
        refresh(): void;
        scrollTo(page: number, instant: boolean): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ScrollViewMessages {
        nextButtonLabel?: string | undefined;
        previousButtonLabel?: string | undefined;
        pagerLabel?: string | undefined;
    }

    interface ScrollViewPageable {
        ARIATemplate?: string | undefined;
    }

    interface ScrollViewOptions {
        name?: string | undefined;
        ARIATemplate?: string | undefined;
        autoBind?: boolean | undefined;
        bounceVelocityThreshold?: number | undefined;
        contentHeight?: number | string | undefined;
        dataSource?: kendo.data.DataSource | any | undefined;
        duration?: number | undefined;
        emptyTemplate?: string | undefined;
        enablePager?: boolean | undefined;
        messages?: ScrollViewMessages | undefined;
        navigatable?: boolean | undefined;
        pageable?: boolean | ScrollViewPageable | undefined;
        page?: number | undefined;
        template?: string | undefined;
        velocityThreshold?: number | undefined;
        change?(e: ScrollViewChangeEvent): void;
        refresh?(e: ScrollViewRefreshEvent): void;
    }
    interface ScrollViewEvent {
        sender: ScrollView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ScrollViewChangeEvent extends ScrollViewEvent {
        currentPage?: number | undefined;
        nextPage?: number | undefined;
        element?: JQuery | undefined;
        data?: any;
    }

    interface ScrollViewRefreshEvent extends ScrollViewEvent {
        pageCount?: number | undefined;
        page?: number | undefined;
    }

    class Signature extends kendo.ui.Widget {
        static fn: Signature;

        options: SignatureOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Signature;

        constructor(element: Element, options?: SignatureOptions);

        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        open(): void;
        readonly(readonly: boolean): void;
        reset(): void;
        value(): string;
        value(value: string): void;
    }

    interface SignatureOptions {
        name?: string | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        enable?: boolean | undefined;
        fillMode?: string | undefined;
        height?: number | undefined;
        hideLine?: boolean | undefined;
        label?: string | undefined;
        maximizable?: boolean | undefined;
        popupScale?: number | undefined;
        readonly?: boolean | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        smooth?: boolean | undefined;
        strokeWidth?: number | undefined;
        value?: string | undefined;
        width?: number | undefined;
        change?(e: SignatureEvent): void;
        close?(e: SignatureEvent): void;
        open?(e: SignatureEvent): void;
    }
    interface SignatureEvent {
        sender: Signature;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class SkeletonContainer extends kendo.ui.Widget {
        static fn: SkeletonContainer;

        options: SkeletonContainerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): SkeletonContainer;

        constructor(element: Element, options?: SkeletonContainerOptions);
    }

    interface SkeletonContainerGridGap {
        columns?: number | undefined;
        rows?: number | undefined;
    }

    interface SkeletonContainerGridItem {
        colStart?: number | undefined;
        colSpan?: number | undefined;
        rowStart?: number | undefined;
        rowSpan?: number | undefined;
        shape?: string | undefined;
    }

    interface SkeletonContainerGrid {
        columns?: number | undefined;
        gap?: SkeletonContainerGridGap | undefined;
        items?: SkeletonContainerGridItem[] | undefined;
        rows?: number | undefined;
    }

    interface SkeletonContainerOptions {
        name?: string | undefined;
        animation?: string | undefined;
        grid?: SkeletonContainerGrid | undefined;
        height?: string | number | undefined;
        template?: string | Function | undefined;
        width?: string | number | undefined;
    }
    interface SkeletonContainerEvent {
        sender: SkeletonContainer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Slider extends kendo.ui.Widget {
        static fn: Slider;

        options: SliderOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Slider;

        constructor(element: Element, options?: SliderOptions);

        destroy(): void;
        enable(enable: boolean): void;
        max(): number;
        max(value: number): void;
        max(value: string): void;
        min(): number;
        min(value: number): void;
        min(value: string): void;
        setOptions(options: any): void;
        value(): number;
        value(value: number): void;
        resize(): void;
    }

    interface SliderTooltip {
        enabled?: boolean | undefined;
        format?: string | undefined;
        template?: string | Function | undefined;
    }

    interface SliderOptions {
        name?: string | undefined;
        decreaseButtonTitle?: string | undefined;
        dragHandleTitle?: string | undefined;
        increaseButtonTitle?: string | undefined;
        largeStep?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        orientation?: string | undefined;
        showButtons?: boolean | undefined;
        smallStep?: number | undefined;
        tickPlacement?: string | undefined;
        tooltip?: SliderTooltip | undefined;
        value?: number | undefined;
        change?(e: SliderChangeEvent): void;
        slide?(e: SliderSlideEvent): void;
    }
    interface SliderEvent {
        sender: Slider;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SliderChangeEvent extends SliderEvent {
        value?: number | undefined;
    }

    interface SliderSlideEvent extends SliderEvent {
        value?: number | undefined;
    }

    class Sortable extends kendo.ui.Widget {
        static fn: Sortable;

        options: SortableOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Sortable;

        constructor(element: Element, options?: SortableOptions);

        indexOf(element: JQuery): number;
        items(): JQuery;
    }

    interface SortableCursorOffset {
        left?: number | undefined;
        top?: number | undefined;
    }

    interface SortableOptions {
        name?: string | undefined;
        axis?: string | undefined;
        autoScroll?: boolean | undefined;
        container?: string | JQuery | undefined;
        connectWith?: string | undefined;
        cursor?: string | undefined;
        cursorOffset?: SortableCursorOffset | undefined;
        disabled?: string | undefined;
        filter?: string | undefined;
        handler?: string | undefined;
        hint?: Function | string | JQuery | undefined;
        holdToDrag?: boolean | undefined;
        ignore?: string | undefined;
        placeholder?: Function | string | JQuery | undefined;
        start?(e: SortableStartEvent): void;
        move?(e: SortableMoveEvent): void;
        end?(e: SortableEndEvent): void;
        change?(e: SortableChangeEvent): void;
        cancel?(e: SortableCancelEvent): void;
    }
    interface SortableEvent {
        sender: Sortable;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SortableStartEvent extends SortableEvent {
        draggableEvent?: any;
        item?: JQuery | undefined;
    }

    interface SortableMoveEvent extends SortableEvent {
        item?: JQuery | undefined;
        target?: JQuery | undefined;
        list?: kendo.ui.Sortable | undefined;
        draggableEvent?: any;
    }

    interface SortableEndEvent extends SortableEvent {
        action?: string | undefined;
        item?: JQuery | undefined;
        oldIndex?: number | undefined;
        newIndex?: number | undefined;
        draggableEvent?: any;
    }

    interface SortableChangeEvent extends SortableEvent {
        action?: string | undefined;
        item?: JQuery | undefined;
        oldIndex?: number | undefined;
        newIndex?: number | undefined;
        draggableEvent?: any;
    }

    interface SortableCancelEvent extends SortableEvent {
        item?: JQuery | undefined;
    }

    class SplitButton extends kendo.ui.Widget {
        static fn: SplitButton;

        options: SplitButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): SplitButton;

        constructor(element: Element, options?: SplitButtonOptions);

        enable(state: boolean, items: string): void;
        enable(state: boolean, items: JQuery): void;
        hide(items: string): void;
        hide(items: JQuery): void;
        show(items: string): void;
        show(items: JQuery): void;
        items(): JQuery;
        open(): void;
        close(): void;
    }

    interface SplitButtonItem {
        attributes?: any | undefined;
        click?: Function | undefined;
        data?: Function | undefined;
        enabled?: boolean | undefined;
        hidden?: boolean | undefined;
        icon?: string | undefined;
        id?: string | undefined;
        imageUrl?: string | undefined;
        spriteCssClass?: string | undefined;
        text?: string | undefined;
    }

    interface SplitButtonPopup {
        appendTo?: string | undefined;
    }

    interface SplitButtonMessages {
        labelSuffix?: string | undefined;
    }

    interface SplitButtonOptions {
        name?: string | undefined;
        arrowIcon?: string | undefined;
        enabled?: boolean | undefined;
        fillMode?: string | undefined;
        icon?: string | undefined;
        iconClass?: string | undefined;
        imageUrl?: string | undefined;
        items?: SplitButtonItem[] | undefined;
        itemTemplate?: string | Function | undefined;
        popup?: SplitButtonPopup | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        spriteCssClass?: string | undefined;
        themeColor?: string | undefined;
        messages?: SplitButtonMessages | undefined;
        click?(e: SplitButtonClickEvent): void;
        open?(e: SplitButtonEvent): void;
        close?(e: SplitButtonEvent): void;
    }
    interface SplitButtonEvent {
        sender: SplitButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SplitButtonClickEvent extends SplitButtonEvent {
        originalEvent?: any | undefined;
        target?: JQuery | undefined;
        id?: string | undefined;
    }

    class Splitter extends kendo.ui.Widget {
        static fn: Splitter;

        options: SplitterOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Splitter;

        constructor(element: Element, options?: SplitterOptions);

        ajaxRequest(pane: string, url: string, data: any): void;
        ajaxRequest(pane: string, url: string, data: string): void;
        ajaxRequest(pane: Element, url: string, data: any): void;
        ajaxRequest(pane: Element, url: string, data: string): void;
        ajaxRequest(pane: JQuery, url: string, data: any): void;
        ajaxRequest(pane: JQuery, url: string, data: string): void;
        append(config?: any): JQuery;
        collapse(pane: string): void;
        collapse(pane: Element): void;
        collapse(pane: JQuery): void;
        destroy(): void;
        expand(pane: string): void;
        expand(pane: Element): void;
        expand(pane: JQuery): void;
        insertAfter(config: any, referencePane: string): JQuery;
        insertAfter(config: any, referencePane: Element): JQuery;
        insertAfter(config: any, referencePane: JQuery): JQuery;
        insertBefore(config: any, referencePane: string): JQuery;
        insertBefore(config: any, referencePane: Element): JQuery;
        insertBefore(config: any, referencePane: JQuery): JQuery;
        max(pane: string, value: string): void;
        max(pane: Element, value: string): void;
        max(pane: JQuery, value: string): void;
        min(pane: string, value: string): void;
        min(pane: Element, value: string): void;
        min(pane: JQuery, value: string): void;
        remove(pane: string): void;
        remove(pane: Element): void;
        remove(pane: JQuery): void;
        size(pane: string): any;
        size(pane: Element): any;
        size(pane: JQuery): any;
        size(pane: string, value?: string): void;
        size(pane: Element, value?: string): void;
        size(pane: JQuery, value?: string): void;
        toggle(pane: string, expand?: boolean): void;
        toggle(pane: Element, expand?: boolean): void;
        toggle(pane: JQuery, expand?: boolean): void;
    }

    interface SplitterPane {
        collapsed?: boolean | undefined;
        collapsedSize?: string | undefined;
        collapsible?: boolean | undefined;
        contentUrl?: string | undefined;
        label?: string | undefined;
        labelId?: string | undefined;
        max?: string | undefined;
        min?: string | undefined;
        resizable?: boolean | undefined;
        scrollable?: boolean | undefined;
        size?: string | undefined;
    }

    interface SplitterOptions {
        name?: string | undefined;
        orientation?: string | undefined;
        panes?: SplitterPane[] | undefined;
        collapse?(e: SplitterCollapseEvent): void;
        contentLoad?(e: SplitterContentLoadEvent): void;
        error?(e: SplitterErrorEvent): void;
        expand?(e: SplitterExpandEvent): void;
        layoutChange?(e: SplitterEvent): void;
        resize?(e: SplitterEvent): void;
    }
    interface SplitterEvent {
        sender: Splitter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SplitterCollapseEvent extends SplitterEvent {
        pane?: Element | undefined;
    }

    interface SplitterContentLoadEvent extends SplitterEvent {
        pane?: Element | undefined;
    }

    interface SplitterErrorEvent extends SplitterEvent {
        xhr?: JQueryXHR | undefined;
        status?: string | undefined;
    }

    interface SplitterExpandEvent extends SplitterEvent {
        pane?: Element | undefined;
    }

    class Spreadsheet extends kendo.ui.Widget {
        static fn: Spreadsheet;

        options: SpreadsheetOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Spreadsheet;

        constructor(element: Element, options?: SpreadsheetOptions);

        activeSheet(): kendo.spreadsheet.Sheet;
        activeSheet(sheet?: kendo.spreadsheet.Sheet): void;
        cellContextMenu(): kendo.ui.ContextMenu;
        rowHeaderContextMenu(): kendo.ui.ContextMenu;
        colHeaderContextMenu(): kendo.ui.ContextMenu;
        sheets(): any;
        fromFile(blob: Blob): JQueryPromise<any>;
        fromFile(blob: File): JQueryPromise<any>;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        sheetByName(name: string): kendo.spreadsheet.Sheet;
        sheetIndex(sheet: kendo.spreadsheet.Sheet): number;
        sheetByIndex(index: number): kendo.spreadsheet.Sheet;
        insertSheet(options: any): kendo.spreadsheet.Sheet;
        moveSheetToIndex(sheet: kendo.spreadsheet.Sheet, index: number): void;
        refresh(): void;
        removeSheet(sheet: kendo.spreadsheet.Sheet): void;
        renameSheet(sheet: kendo.spreadsheet.Sheet, newSheetName: string): kendo.spreadsheet.Sheet;
        saveJSON(): JQueryPromise<any>;
        toJSON(): any;
        fromJSON(data: any): void;
        defineName(name: string, value: string, hidden: boolean): void;
        undefineName(name: string): void;
    }

    interface SpreadsheetDefaultCellStyle {
        background?: string | undefined;
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: string | undefined;
        Italic?: boolean | undefined;
        bold?: boolean | undefined;
        underline?: boolean | undefined;
        wrap?: boolean | undefined;
    }

    interface SpreadsheetExcel {
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        proxyURL?: string | undefined;
    }

    interface SpreadsheetPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface SpreadsheetPdf {
        area?: string | undefined;
        author?: string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        fitWidth?: boolean | undefined;
        forceProxy?: boolean | undefined;
        guidelines?: boolean | undefined;
        hCenter?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: SpreadsheetPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
        vCenter?: boolean | undefined;
    }

    interface SpreadsheetSheetColumn {
        index?: number | undefined;
        width?: number | undefined;
    }

    interface SpreadsheetSheetFilterColumnCriteriaItem {
        operator?: string | undefined;
        value?: string | undefined;
    }

    interface SpreadsheetSheetFilterColumn {
        criteria?: SpreadsheetSheetFilterColumnCriteriaItem[] | undefined;
        filter?: string | undefined;
        index?: number | undefined;
        logic?: string | undefined;
        type?: string | undefined;
        value?: number | string | Date | undefined;
        values?: any;
    }

    interface SpreadsheetSheetFilter {
        columns?: SpreadsheetSheetFilterColumn[] | undefined;
        ref?: string | undefined;
    }

    interface SpreadsheetSheetRowCellBorderBottom {
        color?: string | undefined;
        size?: string | undefined;
    }

    interface SpreadsheetSheetRowCellBorderLeft {
        color?: string | undefined;
        size?: string | undefined;
    }

    interface SpreadsheetSheetRowCellBorderRight {
        color?: string | undefined;
        size?: string | undefined;
    }

    interface SpreadsheetSheetRowCellBorderTop {
        color?: string | undefined;
        size?: string | undefined;
    }

    interface SpreadsheetSheetRowCellValidation {
        type?: string | undefined;
        comparerType?: string | undefined;
        dataType?: string | undefined;
        from?: string | undefined;
        showButton?: boolean | undefined;
        to?: string | undefined;
        allowNulls?: boolean | undefined;
        messageTemplate?: string | undefined;
        titleTemplate?: string | undefined;
    }

    interface SpreadsheetSheetRowCell {
        background?: string | undefined;
        borderBottom?: SpreadsheetSheetRowCellBorderBottom | undefined;
        borderLeft?: SpreadsheetSheetRowCellBorderLeft | undefined;
        borderTop?: SpreadsheetSheetRowCellBorderTop | undefined;
        borderRight?: SpreadsheetSheetRowCellBorderRight | undefined;
        color?: string | undefined;
        comment?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        italic?: boolean | undefined;
        bold?: boolean | undefined;
        enable?: boolean | undefined;
        format?: string | undefined;
        formula?: string | undefined;
        index?: number | undefined;
        link?: string | undefined;
        textAlign?: string | undefined;
        underline?: boolean | undefined;
        value?: number | string | boolean | Date | undefined;
        validation?: SpreadsheetSheetRowCellValidation | undefined;
        verticalAlign?: string | undefined;
        wrap?: boolean | undefined;
    }

    interface SpreadsheetSheetRow {
        cells?: SpreadsheetSheetRowCell[] | undefined;
        height?: number | undefined;
        index?: number | undefined;
        type?: string | undefined;
    }

    interface SpreadsheetSheetSortColumn {
        ascending?: boolean | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetSheetSort {
        columns?: SpreadsheetSheetSortColumn[] | undefined;
        ref?: string | undefined;
    }

    interface SpreadsheetSheet {
        activeCell?: string | undefined;
        name?: string | undefined;
        columns?: SpreadsheetSheetColumn[] | undefined;
        dataSource?: kendo.data.DataSource | undefined;
        filter?: SpreadsheetSheetFilter | undefined;
        frozenColumns?: number | undefined;
        frozenRows?: number | undefined;
        mergedCells?: any;
        rows?: SpreadsheetSheetRow[] | undefined;
        selection?: string | undefined;
        showGridLines?: boolean | undefined;
        sort?: SpreadsheetSheetSort | undefined;
    }

    interface SpreadsheetToolbar {
        home?: boolean | ToolBarItem[] | any | undefined;
        insert?: boolean | ToolBarItem[] | any | undefined;
        data?: boolean | ToolBarItem[] | any | undefined;
    }

    interface SpreadsheetInsertSheetOptions {
        rows?: number | undefined;
        columns?: number | undefined;
        rowHeight?: number | undefined;
        columnWidth?: number | undefined;
        headerHeight?: number | undefined;
        headerWidth?: number | undefined;
        dataSource?: kendo.data.DataSource | undefined;
        data?: any;
    }

    interface SpreadsheetOptions {
        name?: string | undefined;
        activeSheet?: string | undefined;
        columnWidth?: number | undefined;
        columns?: number | undefined;
        defaultCellStyle?: SpreadsheetDefaultCellStyle | undefined;
        headerHeight?: number | undefined;
        headerWidth?: number | undefined;
        excel?: SpreadsheetExcel | undefined;
        pdf?: SpreadsheetPdf | undefined;
        rowHeight?: number | undefined;
        rows?: number | undefined;
        sheets?: SpreadsheetSheet[] | undefined;
        sheetsbar?: boolean | undefined;
        toolbar?: boolean | SpreadsheetToolbar | undefined;
        useCultureDecimals?: boolean | undefined;
        insertSheet?(e: SpreadsheetInsertSheetEvent): void;
        removeSheet?(e: SpreadsheetRemoveSheetEvent): void;
        renameSheet?(e: SpreadsheetRenameSheetEvent): void;
        selectSheet?(e: SpreadsheetSelectSheetEvent): void;
        unhideColumn?(e: SpreadsheetUnhideColumnEvent): void;
        unhideRow?(e: SpreadsheetUnhideRowEvent): void;
        hideColumn?(e: SpreadsheetHideColumnEvent): void;
        hideRow?(e: SpreadsheetHideRowEvent): void;
        deleteColumn?(e: SpreadsheetDeleteColumnEvent): void;
        deleteRow?(e: SpreadsheetDeleteRowEvent): void;
        insertColumn?(e: SpreadsheetInsertColumnEvent): void;
        insertRow?(e: SpreadsheetInsertRowEvent): void;
        select?(e: SpreadsheetSelectEvent): void;
        changeFormat?(e: SpreadsheetChangeFormatEvent): void;
        changing?(e: SpreadsheetChangingEvent): void;
        change?(e: SpreadsheetChangeEvent): void;
        render?(e: SpreadsheetRenderEvent): void;
        excelExport?(e: SpreadsheetExcelExportEvent): void;
        excelImport?(e: SpreadsheetExcelImportEvent): void;
        pdfExport?(e: SpreadsheetPdfExportEvent): void;
        cut?(e: SpreadsheetCutEvent): void;
        copy?(e: SpreadsheetCopyEvent): void;
        paste?(e: SpreadsheetPasteEvent): void;
        dataBinding?(e: SpreadsheetDataBindingEvent): void;
        dataBound?(e: SpreadsheetDataBoundEvent): void;
    }
    interface SpreadsheetEvent {
        sender: Spreadsheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SpreadsheetInsertSheetEvent extends SpreadsheetEvent {
    }

    interface SpreadsheetRemoveSheetEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
    }

    interface SpreadsheetRenameSheetEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        newSheetName?: string | undefined;
    }

    interface SpreadsheetSelectSheetEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
    }

    interface SpreadsheetUnhideColumnEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetUnhideRowEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetHideColumnEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetHideRowEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetDeleteColumnEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetDeleteRowEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetInsertColumnEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetInsertRowEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
        index?: number | undefined;
    }

    interface SpreadsheetSelectEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
    }

    interface SpreadsheetChangeFormatEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
    }

    interface SpreadsheetChangingEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
        data?: any;
        changeType?: string | undefined;
    }

    interface SpreadsheetChangeEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
    }

    interface SpreadsheetRenderEvent extends SpreadsheetEvent {
    }

    interface SpreadsheetExcelExportEvent extends SpreadsheetEvent {
        data?: any;
        workbook?: kendo.ooxml.Workbook | undefined;
    }

    interface SpreadsheetExcelImportEvent extends SpreadsheetEvent {
        file?: Blob | File | undefined;
        progress?: JQueryPromise<any> | undefined;
    }

    interface SpreadsheetPdfExportEvent extends SpreadsheetEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    interface SpreadsheetCopyEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
    }

    interface SpreadsheetCutEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
    }

    interface SpreadsheetPasteEvent extends SpreadsheetEvent {
        range?: kendo.spreadsheet.Range | undefined;
        clipboardContent?: any;
    }

    interface SpreadsheetDataBindingEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
    }

    interface SpreadsheetDataBoundEvent extends SpreadsheetEvent {
        sheet?: kendo.spreadsheet.Sheet | undefined;
    }

    class Switch extends kendo.ui.Widget {
        static fn: Switch;

        options: SwitchOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Switch;

        constructor(element: Element, options?: SwitchOptions);

        check(): boolean;
        check(check: boolean): void;
        destroy(): void;
        enable(enable: boolean): void;
        toggle(): void;
        readonly(readonly: boolean): void;
        setOptions(options: any): void;
    }

    interface SwitchOptions {
        name?: string | undefined;
        checked?: boolean | undefined;
        enabled?: boolean | undefined;
        readonly?: boolean | undefined;
        width?: number | string | undefined;
        messages?: SwitchMessages | undefined;
        size?: string | undefined;
        trackRounded?: string | undefined;
        thumbRounded?: string | undefined;
        change?(e: SwitchChangeEvent): void;
    }

    interface SwitchMessages {
        checked?: string | undefined;
        unchecked?: string | undefined;
    }

    interface SwitchEvent {
        sender: Switch;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SwitchChangeEvent extends SwitchEvent {
        checked?: any;
    }

    class Stepper extends kendo.ui.Widget {
        static fn: Stepper;

        options: StepperOptions;

        element: JQuery;

        static extend(proto: Object): Stepper;

        constructor(element: Element, options?: StepperOptions);

        setOptions(options: any): void;

        enable(value: boolean): void;
        insertAt(index: number, step: kendo.stepper.StepOptions): void;
        next(): void;
        previous(): void;
        removeAt(index: number): void;
        resize(): void;
        select(): kendo.stepper.Step;
        select(index: number): void;
        steps(): kendo.stepper.Step[];
        steps(steps: kendo.stepper.StepOptions[]): void;
    }

    interface StepperOptions {
        name?: string | undefined;
        orientation?: string | "horizontal" | "vertical" | undefined;
        linear?: boolean | undefined;
        indicator?: boolean | undefined;
        label?: boolean | undefined;
        selectOnFocus?: boolean | undefined;
        steps: kendo.stepper.StepOptions[] | string[];

        activate?(e: StepperActivateEvent): void;
        select?(e: StepperSelectEvent): void;
    }

    interface StepperActivateEvent {
        sender?: Stepper | undefined;
        originalEvent?: any;
        step?: kendo.stepper.Step | undefined;
    }

    interface StepperSelectEvent extends StepperActivateEvent {
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class TabStrip extends kendo.ui.Widget {
        static fn: TabStrip;

        options: TabStripOptions;

        dataSource: kendo.data.DataSource;
        tabGroup: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TabStrip;

        constructor(element: Element, options?: TabStripOptions);

        activateTab(item: JQuery): void;
        append(tab: any): kendo.ui.TabStrip;
        contentElement(itemIndex: number): Element;
        contentHolder(itemIndex: number): Element;
        deactivateTab(item: JQuery): void;
        destroy(): void;
        disable(element: string): kendo.ui.TabStrip;
        disable(element: Element): kendo.ui.TabStrip;
        disable(element: JQuery): kendo.ui.TabStrip;
        enable(element: string, enable?: boolean): kendo.ui.TabStrip;
        enable(element: Element, enable?: boolean): kendo.ui.TabStrip;
        enable(element: JQuery, enable?: boolean): kendo.ui.TabStrip;
        insertAfter(item: any, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: any, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: any, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: any, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: any, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: any, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: string, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: Element, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: Element, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: Element, referenceTab: JQuery): kendo.ui.TabStrip;
        insertBefore(item: JQuery, referenceTab: string): kendo.ui.TabStrip;
        insertBefore(item: JQuery, referenceTab: Element): kendo.ui.TabStrip;
        insertBefore(item: JQuery, referenceTab: JQuery): kendo.ui.TabStrip;
        items(): HTMLCollection;
        reload(element: string): kendo.ui.TabStrip;
        reload(element: Element): kendo.ui.TabStrip;
        reload(element: JQuery): kendo.ui.TabStrip;
        remove(element: string): kendo.ui.TabStrip;
        remove(element: number): kendo.ui.TabStrip;
        remove(element: JQuery): kendo.ui.TabStrip;
        select(): JQuery;
        select(element: string): void;
        select(element: Element): void;
        select(element: JQuery): void;
        select(element: number): void;
        setDataSource(dataSource: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface TabStripAnimationClose {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface TabStripAnimationOpen {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface TabStripAnimation {
        close?: TabStripAnimationClose | undefined;
        open?: TabStripAnimationOpen | undefined;
    }

    interface TabStripScrollable {
        distance?: number | undefined;
    }

    interface TabStripOptions {
        name?: string | undefined;
        animation?: boolean | TabStripAnimation | undefined;
        collapsible?: boolean | undefined;
        contentUrls?: any;
        dataContentField?: string | undefined;
        dataContentUrlField?: string | undefined;
        dataImageUrlField?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataSpriteCssClass?: string | undefined;
        dataTextField?: string | undefined;
        dataUrlField?: string | undefined;
        navigatable?: boolean | undefined;
        scrollable?: boolean | TabStripScrollable | undefined;
        tabPosition?: string | undefined;
        value?: string | undefined;
        activate?(e: TabStripActivateEvent): void;
        contentLoad?(e: TabStripContentLoadEvent): void;
        error?(e: TabStripErrorEvent): void;
        select?(e: TabStripSelectEvent): void;
        show?(e: TabStripShowEvent): void;
    }
    interface TabStripEvent {
        sender: TabStrip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TabStripActivateEvent extends TabStripEvent {
        item?: Element | undefined;
        contentElement?: Element | undefined;
    }

    interface TabStripContentLoadEvent extends TabStripEvent {
        item?: Element | undefined;
        contentElement?: Element | undefined;
    }

    interface TabStripErrorEvent extends TabStripEvent {
        xhr?: JQueryXHR | undefined;
        status?: string | undefined;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: Element | undefined;
        contentElement?: Element | undefined;
    }

    interface TabStripShowEvent extends TabStripEvent {
        item?: Element | undefined;
        contentElement?: Element | undefined;
    }

    class TaskBoard extends kendo.ui.Widget {
        static fn: TaskBoard;

        options: TaskBoardOptions;

        dataSource: kendo.data.DataSource;
        columnsDataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TaskBoard;

        constructor(element: Element, options?: TaskBoardOptions);

        addCard(data: any): void;
        addColumn(data: any): void;
        columns(): JQuery;
        columnByStatus(status: string): JQuery;
        deleteCard(cardElm: JQuery): void;
        deleteColumn(columnElm: JQuery): void;
        editCard(cardElm: JQuery): void;
        editColumn(columnElm: JQuery): void;
        enable(cardElm: JQuery): void;
        enableByColumn(columnElm: JQuery, state: boolean): void;
        readOnly(cardElm: JQuery): void;
        readOnlyByColumn(columnElm: JQuery, state: boolean): void;
        items(): JQuery;
        itemsByStatus(status: string): JQuery;
        itemsByColumn(columnElm: JQuery): JQuery;
        load(): void;
        previewCard(cardElm: JQuery): void;
        registerShortcut(selector: string, shortcut: any, options: any): void;
        dataItem(cardElm: JQuery): kendo.data.ObservableObject;
        columnDataItem(columnElm: JQuery): kendo.data.ObservableObject;
        saveCard(): void;
        saveColumn(): void;
        select(cardElm: JQuery): JQuery;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setDataSource(dataSource: any): void;
        setColumnsDataSource(dataSource: kendo.data.DataSource): void;
        setColumnsDataSource(dataSource: any): void;
    }

    interface TaskBoardCardMenuItem {
        name?: string | undefined;
        text?: string | undefined;
        icon?: string | undefined;
        spriteCssClass?: string | undefined;
        command?: string | undefined;
        options?: string | undefined;
    }

    interface TaskBoardColumnSettingsButton {
        name?: string | undefined;
        text?: string | undefined;
        icon?: string | undefined;
        spriteCssClass?: string | undefined;
        command?: string | undefined;
        options?: string | undefined;
    }

    interface TaskBoardColumnSettings {
        buttons?: TaskBoardColumnSettingsButton[] | undefined;
        dataStatusField?: string | undefined;
        dataTextField?: string | undefined;
        dataOrderField?: string | undefined;
        width?: string | number | undefined;
        template?: string | Function | undefined;
    }

    interface TaskBoardEditableButton {
        name?: string | undefined;
        text?: string | undefined;
        icon?: string | undefined;
        spriteCssClass?: string | undefined;
        command?: string | undefined;
        options?: string | undefined;
        primary?: boolean | undefined;
    }

    interface TaskBoardEditable {
        buttons?: TaskBoardEditableButton[] | undefined;
        form?: any;
        headerTemplate?: string | Function | undefined;
    }

    interface TaskBoardMessages {
        edit?: string | undefined;
        createNewCard?: string | undefined;
        create?: string | undefined;
        search?: string | undefined;
        previewCard?: string | undefined;
        addCard?: string | undefined;
        editCard?: string | undefined;
        deleteCard?: string | undefined;
        addColumn?: string | undefined;
        editColumn?: string | undefined;
        deleteColumn?: string | undefined;
        close?: string | undefined;
        cancel?: string | undefined;
        delete?: string | undefined;
        saveChanges?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        newColumn?: string | undefined;
        deleteColumnConfirm?: string | undefined;
        deleteCardConfirm?: string | undefined;
    }

    interface TaskBoardPreviewPaneButton {
        name?: string | undefined;
        text?: string | undefined;
        icon?: string | undefined;
        spriteCssClass?: string | undefined;
        command?: string | undefined;
        options?: string | undefined;
        primary?: boolean | undefined;
    }

    interface TaskBoardPreviewPane {
        buttons?: TaskBoardPreviewPaneButton[] | undefined;
        template?: string | Function | undefined;
        headerTemplate?: string | Function | undefined;
    }

    interface TaskBoardResource {
        dataColorField?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        dataValueField?: string | undefined;
        field?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        title?: string | undefined;
        valuePrimitive?: boolean | undefined;
    }

    interface TaskBoardToolbarItem {
        type?: string | undefined;
        overflow?: string | undefined;
        click?: Function | undefined;
        command?: string | undefined;
        options?: string | undefined;
        name?: string | undefined;
        togglable?: boolean | undefined;
        text?: string | undefined;
        template?: string | Function | undefined;
        showText?: string | undefined;
        primary?: boolean | undefined;
        attributes?: any;
        enable?: boolean | undefined;
        hidden?: boolean | undefined;
        spriteCssClass?: string | undefined;
        imageUrl?: string | undefined;
        showIcon?: string | undefined;
        icon?: string | undefined;
        id?: string | undefined;
    }

    interface TaskBoardToolbar {
        items?: TaskBoardToolbarItem[] | undefined;
    }

    interface TaskBoardRegisterShortcutOptions {
        command?: string | undefined;
        options?: string | undefined;
        handler?: Function | undefined;
    }

    interface TaskBoardOptions {
        name?: string | undefined;
        autoBind?: boolean | undefined;
        cardMenu?: TaskBoardCardMenuItem[] | undefined;
        columns?: any | any | kendo.data.DataSource | undefined;
        columnSettings?: TaskBoardColumnSettings | undefined;
        dataOrderField?: string | undefined;
        dataCategoryField?: string | undefined;
        dataDescriptionField?: string | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        dataStatusField?: string | undefined;
        dataTitleField?: string | undefined;
        editable?: boolean | TaskBoardEditable | undefined;
        height?: string | number | undefined;
        previewPane?: boolean | TaskBoardPreviewPane | undefined;
        reorderable?: boolean | undefined;
        resources?: TaskBoardResource[] | undefined;
        selectable?: boolean | undefined;
        template?: string | Function | undefined;
        toolbar?: boolean | TaskBoardToolbar | undefined;
        width?: string | number | undefined;
        messages?: TaskBoardMessages | undefined;
        columnsDataBinding?(e: TaskBoardColumnsDataBindingEvent): void;
        columnsDataBound?(e: TaskBoardColumnsDataBoundEvent): void;
        select?(e: TaskBoardSelectEvent): void;
        dataBinding?(e: TaskBoardDataBindingEvent): void;
        dataBound?(e: TaskBoardDataBoundEvent): void;
        deleteCard?(e: TaskBoardDeleteCardEvent): void;
        deleteColumn?(e: TaskBoardDeleteColumnEvent): void;
        editCard?(e: TaskBoardEditCardEvent): void;
        editColumn?(e: TaskBoardEditColumnEvent): void;
        executeCommand?(e: TaskBoardExecuteCommandEvent): void;
        move?(e: TaskBoardMoveEvent): void;
        moveEnd?(e: TaskBoardMoveEndEvent): void;
        moveStart?(e: TaskBoardMoveStartEvent): void;
        change?(e: TaskBoardChangeEvent): void;
        saveCard?(e: TaskBoardSaveCardEvent): void;
        saveColumn?(e: TaskBoardSaveColumnEvent): void;
    }
    interface TaskBoardEvent {
        sender: TaskBoard;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TaskBoardColumnsDataBindingEvent extends TaskBoardEvent {
        action?: string | undefined;
        index?: number | undefined;
        items?: any;
    }

    interface TaskBoardColumnsDataBoundEvent extends TaskBoardEvent {
    }

    interface TaskBoardSelectEvent extends TaskBoardEvent {
        card?: JQuery | undefined;
    }

    interface TaskBoardDataBindingEvent extends TaskBoardEvent {
        action?: string | undefined;
        index?: number | undefined;
        items?: any;
    }

    interface TaskBoardDataBoundEvent extends TaskBoardEvent {
    }

    interface TaskBoardDeleteCardEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
    }

    interface TaskBoardDeleteColumnEvent extends TaskBoardEvent {
        column?: kendo.data.Model | undefined;
    }

    interface TaskBoardEditCardEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
    }

    interface TaskBoardEditColumnEvent extends TaskBoardEvent {
        column?: kendo.data.Model | undefined;
    }

    interface TaskBoardExecuteCommandEvent extends TaskBoardEvent {
        command?: string | undefined;
        options?: any;
    }

    interface TaskBoardMoveEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
        cardElement?: JQuery | undefined;
        column?: kendo.data.Model | undefined;
        columnElement?: JQuery | undefined;
        item?: JQuery | undefined;
        target?: JQuery | undefined;
        list?: kendo.ui.Sortable | undefined;
        draggableEvent?: any;
    }

    interface TaskBoardMoveEndEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
        cardElement?: JQuery | undefined;
        column?: kendo.data.Model | undefined;
        columnElement?: JQuery | undefined;
        action?: string | undefined;
        item?: JQuery | undefined;
        oldIndex?: number | undefined;
        newIndex?: number | undefined;
        draggableEvent?: any;
    }

    interface TaskBoardMoveStartEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
        cardElement?: JQuery | undefined;
        column?: kendo.data.Model | undefined;
        columnElement?: JQuery | undefined;
        draggableEvent?: any;
        item?: JQuery | undefined;
    }

    interface TaskBoardChangeEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
        cardElement?: JQuery | undefined;
        column?: kendo.data.Model | undefined;
        columnElement?: JQuery | undefined;
        action?: string | undefined;
        item?: JQuery | undefined;
        oldIndex?: number | undefined;
        newIndex?: number | undefined;
        draggableEvent?: any;
    }

    interface TaskBoardSaveCardEvent extends TaskBoardEvent {
        card?: kendo.data.Model | undefined;
    }

    interface TaskBoardSaveColumnEvent extends TaskBoardEvent {
        column?: kendo.data.Model | undefined;
    }

    class TileLayout extends kendo.ui.Widget {
        static fn: TileLayout;

        options: TileLayoutOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TileLayout;

        constructor(element: Element, options?: TileLayoutOptions);
    }

    interface TileLayoutContainerHeader {
        template?: string | Function | undefined;
        text?: string | undefined;
    }

    interface TileLayoutContainer {
        bodyTemplate?: string | Function | undefined;
        colSpan?: number | undefined;
        header?: TileLayoutContainerHeader | undefined;
        rowSpan?: number | undefined;
    }

    interface TileLayoutGap {
        columns?: number | undefined;
        rows?: number | undefined;
    }

    interface TileLayoutOptions {
        name?: string | undefined;
        columns?: number | undefined;
        columnsWidth?: string | number | undefined;
        containers?: TileLayoutContainer[] | undefined;
        gap?: TileLayoutGap | undefined;
        height?: string | number | undefined;
        navigatable?: boolean | undefined;
        reorderable?: boolean | undefined;
        resizable?: boolean | undefined;
        rows?: number | undefined;
        rowsHeight?: string | number | undefined;
        width?: string | number | undefined;
        resize?(e: TileLayoutResizeEvent): void;
        reorder?(e: TileLayoutReorderEvent): void;
    }
    interface TileLayoutEvent {
        sender: TileLayout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TileLayoutResizeEvent extends TileLayoutEvent {
        container?: JQuery | undefined;
    }

    interface TileLayoutReorderEvent extends TileLayoutEvent {
        newIndex?: number | undefined;
        oldIndex?: number | undefined;
        container?: JQuery | undefined;
    }

    class TimeDurationPicker extends kendo.ui.Widget {
        static fn: TimeDurationPicker;

        options: TimeDurationPickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TimeDurationPicker;

        constructor(element: Element, options?: TimeDurationPickerOptions);

        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        value(): number;
        value(value: number): void;
    }

    interface TimeDurationPickerColumn {
        format?: string | undefined;
        max?: number | undefined;
        min?: number | undefined;
        name?: string | undefined;
        step?: number | undefined;
    }

    interface TimeDurationPickerMessages {
        cancel?: string | undefined;
        days?: string | undefined;
        hours?: string | undefined;
        milliseconds?: string | undefined;
        minutes?: string | undefined;
        seconds?: string | undefined;
        set?: string | undefined;
    }

    interface TimeDurationPickerShortcut {
        text?: string | undefined;
        value?: number | undefined;
    }

    interface TimeDurationPickerOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        columns?: TimeDurationPickerColumn[] | undefined;
        enable?: boolean | undefined;
        fillMode?: string | undefined;
        messages?: TimeDurationPickerMessages | undefined;
        readonly?: boolean | undefined;
        rounded?: string | undefined;
        separator?: string | undefined;
        shortcuts?: TimeDurationPickerShortcut[] | undefined;
        value?: number | undefined;
        size?: string | undefined;
        change?(e: TimeDurationPickerChangeEvent): void;
        close?(e: TimeDurationPickerCloseEvent): void;
        open?(e: TimeDurationPickerOpenEvent): void;
    }
    interface TimeDurationPickerEvent {
        sender: TimeDurationPicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TimeDurationPickerChangeEvent extends TimeDurationPickerEvent {
    }

    interface TimeDurationPickerCloseEvent extends TimeDurationPickerEvent {
    }

    interface TimeDurationPickerOpenEvent extends TimeDurationPickerEvent {
    }

    class TextArea extends kendo.ui.Widget {
        static fn: TextArea;

        options: TextAreaOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TextArea;

        constructor(element: Element, options?: TextAreaOptions);

        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        readonly(readonly: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface TextAreaLabel {
        content?: string | Function | undefined;
        floating?: boolean | undefined;
    }

    interface TextAreaOptions {
        name?: string | undefined;
        cols?: number | undefined;
        enable?: boolean | undefined;
        label?: string | Function | TextAreaLabel | undefined;
        maxLength?: number | undefined;
        placeholder?: string | undefined;
        readonly?: boolean | undefined;
        rows?: number | undefined;
        value?: string | undefined;
        fillMode?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        overflow?: string | undefined;
        resize?: string | undefined;
        change?(e: TextAreaChangeEvent): void;
    }
    interface TextAreaEvent {
        sender: TextArea;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TextAreaChangeEvent extends TextAreaEvent {
    }

    class TextBox extends kendo.ui.Widget {
        static fn: TextBox;

        options: TextBoxOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TextBox;

        constructor(element: Element, options?: TextBoxOptions);

        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
        readonly(readonly: boolean): void;
        value(): string;
        value(value: string): void;
    }

    interface TextBoxLabel {
        content?: string | Function | undefined;
        floating?: boolean | undefined;
    }

    interface TextBoxOptions {
        name?: string | undefined;
        enable?: boolean | undefined;
        label?: string | Function | TextBoxLabel | undefined;
        placeholder?: string | undefined;
        readonly?: boolean | undefined;
        value?: string | undefined;
        fillMode?: string | undefined;
        rounded?: string | undefined;
        size?: string | undefined;
        change?(e: TextBoxChangeEvent): void;
    }
    interface TextBoxEvent {
        sender: TextBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TextBoxChangeEvent extends TextBoxEvent {
    }

    class TimePicker extends kendo.ui.Widget {
        static fn: TimePicker;

        options: TimePickerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TimePicker;

        constructor(element: Element, options?: TimePickerOptions);

        close(): void;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        max(): Date;
        max(value: Date): void;
        max(value: string): void;
        min(): Date;
        min(value: Date): void;
        min(value: string): void;
        open(): void;
        setOptions(options: any): void;
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
    }

    interface TimePickerAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface TimePickerAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface TimePickerAnimation {
        close?: TimePickerAnimationClose | undefined;
        open?: TimePickerAnimationOpen | undefined;
    }

    interface TimePickerOptions {
        name?: string | undefined;
        adaptiveMode?: "none" | "auto" | undefined;
        animation?: boolean | TimePickerAnimation | undefined;
        culture?: string | undefined;
        dateInput?: boolean | undefined;
        dates?: any;
        fillMode?: string | undefined;
        format?: string | undefined;
        interval?: number | undefined;
        max?: Date | undefined;
        messages?: TimePickerMessages | undefined;
        min?: Date | undefined;
        parseFormats?: any;
        rounded?: string | undefined;
        size?: string | undefined;
        value?: Date | undefined;
        label?: string | Function | BaseLabel | undefined;
        change?(e: TimePickerChangeEvent): void;
        close?(e: TimePickerCloseEvent): void;
        open?(e: TimePickerOpenEvent): void;
    }

    interface TimePickerMessages {
        now?: string;
        hour?: string;
        minute?: string;
        second?: string;
        millisecond?: string;
        cancel?: string;
        set?: string;
        dateInput?: DateInputMessages | undefined;
    }
    interface TimePickerEvent {
        sender: TimePicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TimePickerChangeEvent extends TimePickerEvent {
    }

    interface TimePickerCloseEvent extends TimePickerEvent {
    }

    interface TimePickerOpenEvent extends TimePickerEvent {
    }

    class Timeline extends kendo.ui.Widget {
        static fn: Timeline;

        options: TimelineOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Timeline;

        constructor(element: Element, options?: TimelineOptions);

        expand(event: string): void;
        expand(event: Element): void;
        expand(event: JQuery): void;
        collapse(event: string): void;
        collapse(event: Element): void;
        collapse(event: JQuery): void;
        open(event: string): void;
        open(event: Element): void;
        open(event: JQuery): void;
        destroy(): void;
        next(): void;
        previous(): void;
        redraw(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface TimelineOptions {
        name?: string | undefined;
        alternatingMode?: boolean | undefined;
        orientation?: string | undefined;
        collapsibleEvents?: boolean | undefined;
        dataActionsField?: string | undefined;
        dataDescriptionField?: string | undefined;
        dataDateField?: string | undefined;
        dataImagesField?: string | undefined;
        dataImagesAltField?: string | undefined;
        dataSubTitleField?: string | undefined;
        dataTitleField?: string | undefined;
        dataSource?: kendo.data.DataSource | any | undefined;
        eventTemplate?: string | Function | undefined;
        dateformat?: string | undefined;
        eventHeight?: number | undefined;
        eventWidth?: number | undefined;
        navigatable?: boolean | undefined;
        showDateLabels?: boolean | undefined;
        change?(e: TimelineChangeEvent): void;
        dataBound?(e: TimelineDataBoundEvent): void;
        expand?(e: TimelineExpandEvent): void;
        collapse?(e: TimelineCollapseEvent): void;
        actionClick?(e: TimelineActionClickEvent): void;
        navigate?(e: TimelineNavigateEvent): void;
    }
    interface TimelineEvent {
        sender: Timeline;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TimelineChangeEvent extends TimelineEvent {
        dataItem?: kendo.data.Model | undefined;
        eventContainer?: JQuery | undefined;
    }

    interface TimelineDataBoundEvent extends TimelineEvent {
    }

    interface TimelineExpandEvent extends TimelineEvent {
        dataItem?: kendo.data.Model | undefined;
    }

    interface TimelineCollapseEvent extends TimelineEvent {
        dataItem?: kendo.data.Model | undefined;
    }

    interface TimelineActionClickEvent extends TimelineEvent {
        dataItem?: kendo.data.Model | undefined;
        element?: JQuery | undefined;
    }

    interface TimelineNavigateEvent extends TimelineEvent {
        action?: string | undefined;
    }

    class ToggleButton extends kendo.ui.Button {
        static fn: ToggleButton;

        options: ToggleButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ToggleButton;

        constructor(element: Element, options?: ToggleButtonOptions);

        toggle(toggle?: boolean): void;
    }

    interface ToggleButtonOptions extends ButtonOptions {
        group?: string | undefined;
        selected?: boolean | undefined;
        toggle?(e: ToggleButtonToggleEvent): void;
    }

    interface ToggleButtonToggleEvent {
        sender: ToggleButton;
        checked: boolean;
        group: string;
        id: string;
        target: JQuery;
    }

    class ToolBar extends kendo.ui.Widget {
        static fn: ToolBar;

        options: ToolBarOptions;

        element: JQuery;
        wrapper: JQuery;
        overflowAnchor: JQuery;

        popup: kendo.ui.Popup;

        static extend(proto: Object): ToolBar;

        constructor(element: Element, options?: ToolBarOptions);

        add(command: any): void;
        destroy(): void;
        enable(command: string, enable: boolean): void;
        enable(command: Element, enable: boolean): void;
        enable(command: JQuery, enable: boolean): void;
        getSelectedFromGroup(groupName: string): void;
        hide(command: string): void;
        hide(command: Element): void;
        hide(command: JQuery): void;
        remove(command: string): void;
        remove(command: Element): void;
        remove(command: JQuery): void;
        show(command: string): void;
        show(command: Element): void;
        show(command: JQuery): void;
        toggle(command: string, state: boolean): void;
        toggle(command: Element, state: boolean): void;
        toggle(command: JQuery, state: boolean): void;
    }

    interface ToolBarItemButton {
        attributes?: any;
        click?: Function | undefined;
        enable?: boolean | undefined;
        group?: string | undefined;
        hidden?: boolean | undefined;
        icon?: string | undefined;
        id?: string | undefined;
        imageUrl?: string | undefined;
        selected?: boolean | undefined;
        showIcon?: string | undefined;
        showText?: string | undefined;
        spriteCssClass?: string | undefined;
        toggle?: Function | undefined;
        togglable?: boolean | undefined;
        text?: string | undefined;
        url?: string | undefined;
    }

    interface ToolBarItemMenuButton {
        attributes?: any;
        enable?: boolean | undefined;
        hidden?: boolean | undefined;
        icon?: string | undefined;
        id?: string | undefined;
        imageUrl?: string | undefined;
        spriteCssClass?: string | undefined;
        text?: string | undefined;
        url?: string | undefined;
    }

    interface ToolBarItem {
        attributes?: any;
        buttons?: ToolBarItemButton[] | undefined;
        click?: Function | undefined;
        enable?: boolean | undefined;
        group?: string | undefined;
        hidden?: boolean | undefined;
        icon?: string | undefined;
        id?: string | undefined;
        imageUrl?: string | undefined;
        menuButtons?: ToolBarItemMenuButton[] | undefined;
        overflow?: string | undefined;
        overflowTemplate?: string | Function | undefined;
        primary?: boolean | undefined;
        selected?: boolean | undefined;
        showIcon?: string | undefined;
        showText?: string | undefined;
        spriteCssClass?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        togglable?: boolean | undefined;
        toggle?: Function | undefined;
        type?: string | undefined;
        url?: string | undefined;
    }

    interface ToolBarOptions {
        name?: string | undefined;
        resizable?: boolean | undefined;
        items?: ToolBarItem[] | undefined;
        navigateOnTab?: boolean | undefined;
        size?: string | undefined;
        click?(e: ToolBarClickEvent): void;
        close?(e: ToolBarCloseEvent): void;
        open?(e: ToolBarOpenEvent): void;
        toggle?(e: ToolBarToggleEvent): void;
        overflowClose?(e: ToolBarOverflowCloseEvent): void;
        overflowOpen?(e: ToolBarOverflowOpenEvent): void;
    }
    interface ToolBarEvent {
        sender: ToolBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ToolBarClickEvent extends ToolBarEvent {
        target?: JQuery | undefined;
        id?: string | undefined;
    }

    interface ToolBarCloseEvent extends ToolBarEvent {
        SplitButton?: JQuery | undefined;
    }

    interface ToolBarOpenEvent extends ToolBarEvent {
        SplitButton?: JQuery | undefined;
    }

    interface ToolBarToggleEvent extends ToolBarEvent {
        target?: JQuery | undefined;
        checked?: boolean | undefined;
        id?: string | undefined;
    }

    interface ToolBarOverflowCloseEvent extends ToolBarEvent {
    }

    interface ToolBarOverflowOpenEvent extends ToolBarEvent {
    }

    class Tooltip extends kendo.ui.Widget {
        static fn: Tooltip;

        options: TooltipOptions;

        popup: kendo.ui.Popup;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Tooltip;

        constructor(element: Element, options?: TooltipOptions);

        show(element: JQuery): void;
        hide(): void;
        refresh(): void;
        target(): JQuery;
    }

    interface TooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface TooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface TooltipAnimation {
        close?: TooltipAnimationClose | undefined;
        open?: TooltipAnimationOpen | undefined;
    }

    interface TooltipContent {
        url?: string | undefined;
    }

    interface TooltipOptions {
        name?: string | undefined;
        autoHide?: boolean | undefined;
        animation?: boolean | TooltipAnimation | undefined;
        content?: string | Function | TooltipContent | undefined;
        callout?: boolean | undefined;
        filter?: string | undefined;
        iframe?: boolean | undefined;
        height?: number | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
        contentLoad?(e: TooltipEvent): void;
        show?(e: TooltipEvent): void;
        hide?(e: TooltipEvent): void;
        requestStart?(e: TooltipRequestStartEvent): void;
        error?(e: TooltipErrorEvent): void;
    }
    interface TooltipEvent {
        sender: Tooltip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TooltipRequestStartEvent extends TooltipEvent {
        target?: JQuery | undefined;
        options?: any;
    }

    interface TooltipErrorEvent extends TooltipEvent {
        xhr?: JQueryXHR | undefined;
        status?: string | undefined;
    }

    class Touch extends kendo.ui.Widget {
        static fn: Touch;

        options: TouchOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Touch;

        constructor(element: Element, options?: TouchOptions);

        cancel(): void;
        destroy(): void;
    }

    interface TouchOptions {
        name?: string | undefined;
        filter?: string | undefined;
        surface?: JQuery | undefined;
        multiTouch?: boolean | undefined;
        enableSwipe?: boolean | undefined;
        minXDelta?: number | undefined;
        maxYDelta?: number | undefined;
        maxDuration?: number | undefined;
        minHold?: number | undefined;
        doubleTapTimeout?: number | undefined;
        touchstart?(e: TouchTouchstartEvent): void;
        dragstart?(e: TouchDragstartEvent): void;
        drag?(e: TouchDragEvent): void;
        dragend?(e: TouchDragendEvent): void;
        tap?(e: TouchTapEvent): void;
        doubletap?(e: TouchDoubletapEvent): void;
        hold?(e: TouchHoldEvent): void;
        swipe?(e: TouchSwipeEvent): void;
        gesturestart?(e: TouchGesturestartEvent): void;
        gesturechange?(e: TouchGesturechangeEvent): void;
        gestureend?(e: TouchGestureendEvent): void;
    }
    interface TouchEvent {
        sender: Touch;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TouchTouchstartEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchDragstartEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchDragEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchDragendEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchTapEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchDoubletapEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchHoldEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
    }

    interface TouchSwipeEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions | undefined;
        event?: JQueryEventObject | undefined;
        direction?: string | undefined;
    }

    interface TouchGesturestartEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject | undefined;
        distance?: number | undefined;
        center?: kendo.mobile.ui.Point | undefined;
    }

    interface TouchGesturechangeEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject | undefined;
        distance?: number | undefined;
        center?: kendo.mobile.ui.Point | undefined;
    }

    interface TouchGestureendEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject | undefined;
        distance?: number | undefined;
        center?: kendo.mobile.ui.Point | undefined;
    }

    class TreeList extends kendo.ui.Widget {
        static fn: TreeList;

        options: TreeListOptions;

        dataSource: kendo.data.DataSource;
        columns: any;
        table: JQuery;
        tbody: JQuery;
        thead: JQuery;
        content: JQuery;
        lockedHeader: JQuery;
        lockedTable: JQuery;
        lockedContent: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeList;

        constructor(element: Element, options?: TreeListOptions);

        addRow(parentRow: string): void;
        addRow(parentRow: Element): void;
        addRow(parentRow: JQuery): void;
        autoFitColumn(column: number): void;
        autoFitColumn(column: string): void;
        autoFitColumn(column: any): void;
        cancelChanges(): void;
        cancelRow(): void;
        clearSelection(): void;
        closeCell(isCancel?: boolean): void;
        collapse(row: string): JQueryPromise<any>;
        collapse(row: Element): JQueryPromise<any>;
        collapse(row: JQuery): JQueryPromise<any>;
        dataItem(row: string): kendo.data.TreeListModel;
        dataItem(row: Element): kendo.data.TreeListModel;
        dataItem(row: JQuery): kendo.data.TreeListModel;
        destroy(): void;
        editCell(cell: JQuery): void;
        editRow(row: JQuery): void;
        expand(row: string): JQueryPromise<any>;
        expand(row: Element): JQueryPromise<any>;
        expand(row: JQuery): JQueryPromise<any>;
        itemFor(model: kendo.data.TreeListModel): JQuery;
        itemFor(model: any): JQuery;
        items(): any;
        refresh(): void;
        removeRow(row: string): void;
        removeRow(row: Element): void;
        removeRow(row: JQuery): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        saveChanges(): void;
        saveRow(): void;
        select(): JQuery;
        select(rows: Element): void;
        select(rows: JQuery): void;
        setDataSource(dataSource: kendo.data.TreeListDataSource): void;
        showColumn(column: number): void;
        showColumn(column: string): void;
        hideColumn(column: number): void;
        hideColumn(column: string): void;
        lockColumn(column: number): void;
        lockColumn(column: string): void;
        unlockColumn(column: number): void;
        unlockColumn(column: string): void;
        reorderColumn(destIndex: number, column: any): void;
    }

    interface TreeListColumnMenuMessages {
        columns?: string | undefined;
        filter?: string | undefined;
        sortAscending?: string | undefined;
        sortDescending?: string | undefined;
        settings?: string | undefined;
        lock?: string | undefined;
        unlock?: string | undefined;
    }

    interface TreeListColumnMenu {
        columns?: boolean | undefined;
        filterable?: boolean | undefined;
        sortable?: boolean | undefined;
        messages?: TreeListColumnMenuMessages | undefined;
    }

    interface TreeListColumnCommandItem {
        className?: string | undefined;
        imageClass?: string | undefined;
        click?: Function | undefined;
        name?: string | undefined;
        text?: string | undefined;
    }

    interface TreeListColumnFilterable {
        ui?: string | Function | undefined;
    }

    interface TreeListColumnFilterableCell {
        dataSource?: any | kendo.data.DataSource | undefined;
        dataTextField?: string | undefined;
        delay?: number | undefined;
        inputWidth?: number | undefined;
        suggestionOperator?: string | undefined;
        minLength?: number | undefined;
        enabled?: boolean | undefined;
        operator?: string | undefined;
        showOperators?: boolean | undefined;
        template?: Function | undefined;
    }

    interface TreeListColumnFilterable {
        cell?: TreeListColumnFilterableCell | undefined;
        ui?: string | Function | undefined;
    }

    interface TreeListColumnSortable {
        compare?: Function | undefined;
    }

    interface TreeListColumn {
        attributes?: any;
        columns?: any;
        command?: TreeListColumnCommandItem[] | undefined;
        editable?: Function | undefined;
        encoded?: boolean | undefined;
        expandable?: boolean | undefined;
        field?: string | undefined;
        filterable?: boolean | TreeListColumnFilterable | undefined;
        footerTemplate?: string | Function | undefined;
        format?: string | undefined;
        headerAttributes?: any;
        headerTemplate?: string | Function | undefined;
        minScreenWidth?: number | undefined;
        selectable?: boolean | undefined;
        sortable?: boolean | TreeListColumnSortable | undefined;
        template?: string | Function | undefined;
        title?: string | undefined;
        width?: string | number | undefined;
        hidden?: boolean | undefined;
        includeChildren?: boolean | undefined;
        menu?: boolean | undefined;
        locked?: boolean | undefined;
        lockable?: boolean | undefined;
    }

    interface TreeListEditable {
        mode?: string | undefined;
        move?: boolean | TreeListEditableMove | undefined;
        template?: string | Function | undefined;
        window?: any;
    }

    interface TreeListEditableMove {
        reorderable?: boolean | undefined;
    }

    interface TreeListExcel {
        fileName?: string | undefined;
        filterable?: boolean | undefined;
        forceProxy?: boolean | undefined;
        proxyURL?: string | undefined;
    }

    interface TreeListFilterableMessages {
        and?: string | undefined;
        clear?: string | undefined;
        filter?: string | undefined;
        info?: string | undefined;
        title?: string | undefined;
        isFalse?: string | undefined;
        isTrue?: string | undefined;
        or?: string | undefined;
    }

    interface TreeListFilterableOperatorsDate {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface TreeListFilterableOperatorsNumber {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        gte?: string | undefined;
        gt?: string | undefined;
        lte?: string | undefined;
        lt?: string | undefined;
    }

    interface TreeListFilterableOperatorsString {
        eq?: string | undefined;
        neq?: string | undefined;
        isnull?: string | undefined;
        isnotnull?: string | undefined;
        isempty?: string | undefined;
        isnotempty?: string | undefined;
        startswith?: string | undefined;
        contains?: string | undefined;
        doesnotcontain?: string | undefined;
        endswith?: string | undefined;
    }

    interface TreeListFilterableOperators {
        string?: TreeListFilterableOperatorsString | undefined;
        number?: TreeListFilterableOperatorsNumber | undefined;
        date?: TreeListFilterableOperatorsDate | undefined;
    }

    interface TreeListFilterable {
        extra?: boolean | undefined;
        messages?: TreeListFilterableMessages | undefined;
        mode?: string | undefined;
        operators?: TreeListFilterableOperators | undefined;
    }

    interface TreeListMessagesCommands {
        canceledit?: string | undefined;
        create?: string | undefined;
        createchild?: string | undefined;
        destroy?: string | undefined;
        edit?: string | undefined;
        save?: string | undefined;
        cancel?: string | undefined;
        excel?: string | undefined;
        pdf?: string | undefined;
        update?: string | undefined;
    }

    interface TreeListMessages {
        commands?: TreeListMessagesCommands | undefined;
        loading?: string | undefined;
        noRows?: string | undefined;
        requestFailed?: string | undefined;
        retry?: string | undefined;
    }
    interface TreeListPageableMessages {
        display?: string | undefined;
        empty?: string | undefined;
        page?: string | undefined;
        of?: string | undefined;
        itemsPerPage?: string | undefined;
        first?: string | undefined;
        last?: string | undefined;
        next?: string | undefined;
        previous?: string | undefined;
        refresh?: string | undefined;
        morePages?: string | undefined;
    }

    interface TreeListPageable {
        alwaysVisible?: boolean | undefined;
        pageSize?: number | undefined;
        previousNext?: boolean | undefined;
        numeric?: boolean | undefined;
        buttonCount?: number | undefined;
        input?: boolean | undefined;
        pageSizes?: boolean | any | undefined;
        refresh?: boolean | undefined;
        responsive?: boolean | undefined;
        info?: boolean | undefined;
        messages?: TreeListPageableMessages | undefined;
    }

    interface TreeListPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface TreeListPdf {
        author?: string | undefined;
        avoidLinks?: boolean | string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: TreeListPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface TreeListSearch {
        fields?: any;
    }

    interface TreeListSortable {
        allowUnsort?: boolean | undefined;
        mode?: string | undefined;
    }

    interface TreeListToolbarItem {
        click?: Function | undefined;
        imageClass?: string | undefined;
        name?: string | undefined;
        text?: string | undefined;
    }
    interface TreeListOptions {
        name?: string | undefined;
        altRowTemplate?: string | Function | undefined;
        autoBind?: boolean | undefined;
        columns?: TreeListColumn[] | undefined;
        resizable?: boolean | undefined;
        reorderable?: boolean | undefined;
        columnMenu?: boolean | TreeListColumnMenu | undefined;
        dataSource?: any | any | kendo.data.TreeListDataSource | undefined;
        editable?: boolean | TreeListEditable | undefined;
        excel?: TreeListExcel | undefined;
        filterable?: boolean | TreeListFilterable | undefined;
        height?: number | string | undefined;
        messages?: TreeListMessages | undefined;
        navigatable?: boolean | undefined;
        pageable?: boolean | TreeListPageable | undefined;
        pdf?: TreeListPdf | undefined;
        rowTemplate?: string | Function | undefined;
        scrollable?: boolean | any | undefined;
        search?: TreeListSearch | undefined;
        selectable?: boolean | string | undefined;
        sortable?: boolean | TreeListSortable | undefined;
        toolbar?: TreeListToolbarItem[] | ToolBarItem[] | any | undefined;
        beforeEdit?(e: TreeListBeforeEditEvent): void;
        cancel?(e: TreeListCancelEvent): void;
        cellClose?(e: TreeListCellCloseEvent): void;
        change?(e: TreeListChangeEvent): void;
        collapse?(e: TreeListCollapseEvent): void;
        dataBinding?(e: TreeListDataBindingEvent): void;
        dataBound?(e: TreeListDataBoundEvent): void;
        dragstart?(e: TreeListDragstartEvent): void;
        drag?(e: TreeListDragEvent): void;
        dragend?(e: TreeListDragendEvent): void;
        drop?(e: TreeListDropEvent): void;
        edit?(e: TreeListEditEvent): void;
        excelExport?(e: TreeListExcelExportEvent): void;
        expand?(e: TreeListExpandEvent): void;
        filterMenuInit?(e: TreeListFilterMenuInitEvent): void;
        filterMenuOpen?(e: TreeListFilterMenuOpenEvent): void;
        pdfExport?(e: TreeListPdfExportEvent): void;
        remove?(e: TreeListRemoveEvent): void;
        save?(e: TreeListSaveEvent): void;
        saveChanges?(e: TreeListSaveChangesEvent): void;
        columnShow?(e: TreeListColumnShowEvent): void;
        columnHide?(e: TreeListColumnHideEvent): void;
        columnReorder?(e: TreeListColumnReorderEvent): void;
        columnResize?(e: TreeListColumnResizeEvent): void;
        columnMenuInit?(e: TreeListColumnMenuInitEvent): void;
        columnMenuOpen?(e: TreeListColumnMenuOpenEvent): void;
        columnLock?(e: TreeListColumnLockEvent): void;
        columnUnlock?(e: TreeListColumnUnlockEvent): void;
    }
    interface TreeListEvent {
        sender: TreeList;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeListBeforeEditEvent extends TreeListEvent {
        model?: kendo.data.Model | undefined;
    }

    interface TreeListCancelEvent extends TreeListEvent {
        container?: JQuery | undefined;
        model?: kendo.data.TreeListModel | undefined;
    }

    interface TreeListCellCloseEvent extends TreeListEvent {
        container?: JQuery | undefined;
        model?: kendo.data.Model | undefined;
        type?: string | undefined;
    }

    interface TreeListChangeEvent extends TreeListEvent {
    }

    interface TreeListCollapseEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel | undefined;
    }

    interface TreeListDataBindingEvent extends TreeListEvent {
    }

    interface TreeListDataBoundEvent extends TreeListEvent {
    }

    interface TreeListDragstartEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel | undefined;
    }

    interface TreeListDragEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel | undefined;
        target?: JQuery | undefined;
        pageX?: number | undefined;
        pageY?: number | undefined;
        status?: string | undefined;
        setStatus?: Function | undefined;
    }

    interface TreeListDragendEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel | undefined;
        destination?: kendo.data.TreeListModel | undefined;
        position?: string | undefined;
    }

    interface TreeListDropEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel | undefined;
        destination?: kendo.data.TreeListModel | undefined;
        dropTarget?: Element | undefined;
        valid?: boolean | undefined;
        setValid?: boolean | undefined;
    }

    interface TreeListEditEvent extends TreeListEvent {
        container?: JQuery | undefined;
        model?: kendo.data.TreeListModel | undefined;
    }

    interface TreeListExcelExportEvent extends TreeListEvent {
        data?: any;
        workbook?: any;
    }

    interface TreeListExpandEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel | undefined;
    }

    interface TreeListFilterMenuInitEvent extends TreeListEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface TreeListFilterMenuOpenEvent extends TreeListEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface TreeListPdfExportEvent extends TreeListEvent {
        promise?: JQueryPromise<any> | undefined;
    }

    interface TreeListRemoveEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel | undefined;
        row?: JQuery | undefined;
    }

    interface TreeListSaveEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel | undefined;
        container?: JQuery | undefined;
    }

    interface TreeListSaveChangesEvent extends TreeListEvent {
    }

    interface TreeListColumnShowEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnHideEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnReorderEvent extends TreeListEvent {
        column?: any;
        newIndex?: number | undefined;
        oldIndex?: number | undefined;
    }

    interface TreeListColumnResizeEvent extends TreeListEvent {
        column?: any;
        newWidth?: number | undefined;
        oldWidth?: number | undefined;
    }

    interface TreeListColumnMenuInitEvent extends TreeListEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface TreeListColumnMenuOpenEvent extends TreeListEvent {
        container?: JQuery | undefined;
        field?: string | undefined;
    }

    interface TreeListColumnLockEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnUnlockEvent extends TreeListEvent {
        column?: any;
    }

    class TreeView extends kendo.ui.Widget {
        static fn: TreeView;

        options: TreeViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeView;

        constructor(element: Element, options?: TreeViewOptions);

        append(nodeData: any, parentNode?: JQuery, success?: Function): JQuery;
        append(nodeData: JQuery, parentNode?: JQuery, success?: Function): JQuery;
        collapse(nodes: JQuery): void;
        collapse(nodes: Element): void;
        collapse(nodes: string): void;
        dataItem(node: JQuery): kendo.data.Node;
        dataItem(node: Element): kendo.data.Node;
        dataItem(node: string): kendo.data.Node;
        destroy(): void;
        detach(node: JQuery): JQuery;
        detach(node: Element): JQuery;
        detach(node: string): JQuery;
        enable(nodes: JQuery, enable?: boolean): void;
        enable(nodes: Element, enable?: boolean): void;
        enable(nodes: string, enable?: boolean): void;
        enable(nodes: boolean, enable?: boolean): void;
        expand(nodes: JQuery): void;
        expand(nodes: Element): void;
        expand(nodes: string): void;
        expandPath(path: any, complete: Function): void;
        expandTo(targetNode: kendo.data.Node): void;
        expandTo(targetNode: any): void;
        findByText(text: string): JQuery;
        findByUid(uid: string): JQuery;
        focus(): void;
        insertAfter(nodeData: any, referenceNode: JQuery): JQuery;
        insertBefore(nodeData: any, referenceNode: JQuery): JQuery;
        items(): any;
        parent(node: JQuery): JQuery;
        parent(node: Element): JQuery;
        parent(node: string): JQuery;
        remove(node: JQuery): void;
        remove(node: Element): void;
        remove(node: string): void;
        select(): JQuery;
        select(node?: JQuery): void;
        select(node?: Element): void;
        select(node?: string): void;
        setDataSource(dataSource: kendo.data.HierarchicalDataSource): void;
        text(node: JQuery): string;
        text(node: Element): string;
        text(node: string): string;
        text(node: JQuery, newText: string): void;
        text(node: Element, newText: string): void;
        text(node: string, newText: string): void;
        toggle(node: JQuery): void;
        toggle(node: Element): void;
        toggle(node: string): void;
        updateIndeterminate(node: JQuery): void;
    }

    interface TreeViewAnimationCollapse {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface TreeViewAnimationExpand {
        duration?: number | undefined;
        effects?: string | undefined;
    }

    interface TreeViewAnimation {
        collapse?: boolean | TreeViewAnimationCollapse | undefined;
        expand?: boolean | TreeViewAnimationExpand | undefined;
    }

    interface TreeViewCheckboxes {
        checkChildren?: boolean | undefined;
        name?: string | undefined;
        template?: string | Function | undefined;
    }

    interface TreeViewMessages {
        loading?: string | undefined;
        requestFailed?: string | undefined;
        retry?: string | undefined;
    }

    interface TreeViewOptions {
        name?: string | undefined;
        animation?: boolean | TreeViewAnimation | undefined;
        autoBind?: boolean | undefined;
        autoScroll?: boolean | undefined;
        checkboxes?: boolean | TreeViewCheckboxes | undefined;
        dataImageUrlField?: string | undefined;
        dataSource?: any | any | kendo.data.HierarchicalDataSource | undefined;
        dataSpriteCssClassField?: string | undefined;
        dataTextField?: string | any | undefined;
        dataUrlField?: string | undefined;
        dragAndDrop?: boolean | undefined;
        loadCompleted?(e: TreeViewEvent): void;
        loadOnDemand?: boolean | undefined;
        messages?: TreeViewMessages | undefined;
        template?: string | Function | undefined;
        size?: string | undefined;
        change?(e: TreeViewEvent): void;
        check?(e: TreeViewCheckEvent): void;
        collapse?(e: TreeViewCollapseEvent): void;
        dataBound?(e: TreeViewDataBoundEvent): void;
        drag?(e: TreeViewDragEvent): void;
        dragend?(e: TreeViewDragendEvent): void;
        dragstart?(e: TreeViewDragstartEvent): void;
        drop?(e: TreeViewDropEvent): void;
        expand?(e: TreeViewExpandEvent): void;
        navigate?(e: TreeViewNavigateEvent): void;
        select?(e: TreeViewSelectEvent): void;
    }
    interface TreeViewEvent {
        sender: TreeView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeViewCheckEvent extends TreeViewEvent {
        node?: Element | undefined;
    }

    interface TreeViewCollapseEvent extends TreeViewEvent {
        node?: Element | undefined;
    }

    interface TreeViewDataBoundEvent extends TreeViewEvent {
        node?: JQuery | undefined;
    }

    interface TreeViewDragEvent extends TreeViewEvent {
        sourceNode?: Element | undefined;
        dropTarget?: Element | undefined;
        pageX?: number | undefined;
        pageY?: number | undefined;
        statusClass?: string | undefined;
        setStatusClass?: Function | undefined;
    }

    interface TreeViewDragendEvent extends TreeViewEvent {
        sourceNode?: Element | undefined;
        destinationNode?: Element | undefined;
        dropPosition?: string | undefined;
    }

    interface TreeViewDragstartEvent extends TreeViewEvent {
        sourceNode?: Element | undefined;
    }

    interface TreeViewDropEvent extends TreeViewEvent {
        sourceNode?: Element | undefined;
        destinationNode?: Element | undefined;
        valid?: boolean | undefined;
        setValid?: Function | undefined;
        dropTarget?: Element | undefined;
        dropPosition?: string | undefined;
    }

    interface TreeViewExpandEvent extends TreeViewEvent {
        node?: Element | undefined;
    }

    interface TreeViewNavigateEvent extends TreeViewEvent {
        node?: Element | undefined;
    }

    interface TreeViewSelectEvent extends TreeViewEvent {
        node?: Element | undefined;
    }

    class Upload extends kendo.ui.Widget {
        static fn: Upload;

        options: UploadOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Upload;

        constructor(element: Element, options?: UploadOptions);

        clearAllFiles(): void;
        clearFile(callback: Function): void;
        clearFileByUid(uid: string): void;
        destroy(): void;
        disable(): void;
        enable(enable?: boolean): void;
        focus(): void;
        getFiles(): any;
        pause(li: JQuery): void;
        resume(li: JQuery): void;
        removeAllFiles(): void;
        removeFile(callback: Function): void;
        removeFileByUid(uid: string): void;
        toggle(enable: boolean): void;
        upload(): void;
    }

    interface UploadAsync {
        autoUpload?: boolean | undefined;
        batch?: boolean | undefined;
        chunkSize?: number | undefined;
        concurrent?: boolean | undefined;
        autoRetryAfter?: number | undefined;
        maxAutoRetries?: number | undefined;
        removeField?: string | undefined;
        removeUrl?: string | undefined;
        removeVerb?: string | undefined;
        saveField?: string | undefined;
        saveUrl?: string | undefined;
        useArrayBuffer?: boolean | undefined;
        withCredentials?: boolean | undefined;
    }

    interface UploadFile {
        extension?: string | undefined;
        name?: string | undefined;
        size?: number | undefined;
    }

    interface UploadLocalization {
        cancel?: string | undefined;
        clearSelectedFiles?: string | undefined;
        dropFilesHere?: string | undefined;
        headerStatusUploaded?: string | undefined;
        headerStatusUploading?: string | undefined;
        invalidFileExtension?: string | undefined;
        uploadSuccess?: string | undefined;
        uploadFail?: string | undefined;
        invalidFiles?: string | undefined;
        invalidMaxFileSize?: string | undefined;
        invalidMinFileSize?: string | undefined;
        remove?: string | undefined;
        retry?: string | undefined;
        select?: string | undefined;
        statusFailed?: string | undefined;
        statusUploaded?: string | undefined;
        statusUploading?: string | undefined;
        uploadSelectedFiles?: string | undefined;
    }

    interface UploadValidation {
        allowedExtensions?: any;
        maxFileSize?: number | undefined;
        minFileSize?: number | undefined;
    }

    interface UploadOptions {
        name?: string | undefined;
        async?: UploadAsync | undefined;
        directory?: boolean | undefined;
        directoryDrop?: boolean | undefined;
        dropZone?: string | undefined;
        enabled?: boolean | undefined;
        files?: UploadFile[] | undefined;
        localization?: UploadLocalization | undefined;
        multiple?: boolean | undefined;
        showFileList?: boolean | undefined;
        template?: string | Function | undefined;
        validation?: UploadValidation | undefined;
        cancel?(e: UploadCancelEvent): void;
        clear?(e: UploadClearEvent): void;
        complete?(e: UploadEvent): void;
        error?(e: UploadErrorEvent): void;
        pause?(e: UploadPauseEvent): void;
        progress?(e: UploadProgressEvent): void;
        resume?(e: UploadEvent): void;
        remove?(e: UploadRemoveEvent): void;
        select?(e: UploadSelectEvent): void;
        success?(e: UploadSuccessEvent): void;
        upload?(e: UploadUploadEvent): void;
    }
    interface UploadEvent {
        sender: Upload;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface UploadCancelEvent extends UploadEvent {
        files?: any[] | undefined;
    }

    interface UploadClearEvent extends UploadEvent {
        e?: any;
    }

    interface UploadErrorEvent extends UploadEvent {
        files?: any[] | undefined;
        operation?: string | undefined;
        XMLHttpRequest?: any;
    }

    interface UploadPauseEvent extends UploadEvent {
        e?: any;
    }

    interface UploadProgressEvent extends UploadEvent {
        files?: any[] | undefined;
        percentComplete?: number | undefined;
    }

    interface UploadRemoveEvent extends UploadEvent {
        files?: any[] | undefined;
        headers?: any;
        data?: any;
    }

    interface UploadSelectEvent extends UploadEvent {
        e?: any;
        files?: any[] | undefined;
    }

    interface UploadSuccessEvent extends UploadEvent {
        files?: any[] | undefined;
        operation?: string | undefined;
        response?: any;
        XMLHttpRequest?: any;
    }

    interface UploadUploadEvent extends UploadEvent {
        files?: any[] | undefined;
        data?: any;
        formData?: any;
        XMLHttpRequest?: any;
    }

    class Validator extends kendo.ui.Widget {
        static fn: Validator;

        options: ValidatorOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Validator;

        constructor(element: Element, options?: ValidatorOptions);

        errors(): any;
        hideMessages(): void;
        hideValidationSummary(): void;
        reset(): void;
        showValidationSummary(): void;
        validate(): boolean;
        validateInput(input: Element): boolean;
        validateInput(input: JQuery): boolean;
    }

    interface ValidatorOptions {
        name?: string | undefined;
        errorTemplate?: string | undefined;
        messages?: any;
        rules?: any;
        validateOnBlur?: boolean | undefined;
        validationSummary?: boolean | ValidationSummary | undefined;
        validate?(e: ValidatorValidateEvent): void;
        validateInput?(e: ValidatorValidateInputEvent): void;
    }
    interface ValidationSummary {
        container?: string | JQuery | undefined;
        template?: string | Function | undefined;
    }

    interface ValidatorEvent {
        sender: Validator;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ValidatorValidateEvent extends ValidatorEvent {
        valid?: boolean | undefined;
        errors?: any[] | undefined;
    }

    interface ValidatorValidateInputEvent extends ValidatorEvent {
        input?: JQuery | undefined;
        valid?: boolean | undefined;
        error?: string | undefined;
        field?: string | undefined;
    }

    class Window extends kendo.ui.Widget {
        static fn: Window;

        options: WindowOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Window;

        constructor(element: Element, options?: WindowOptions);

        center(): kendo.ui.Window;
        close(): kendo.ui.Window;
        content(): string;
        content(content?: string): kendo.ui.Window;
        content(content?: JQuery): kendo.ui.Window;
        destroy(): void;
        isMaximized(): boolean;
        isMinimized(): boolean;
        maximize(): kendo.ui.Window;
        minimize(): kendo.ui.Window;
        open(): kendo.ui.Window;
        pin(): void;
        refresh(options: any): kendo.ui.Window;
        restore(): kendo.ui.Window;
        setOptions(options: any): void;
        title(): string;
        title(text?: string): kendo.ui.Window;
        toFront(): kendo.ui.Window;
        toggleMaximization(): kendo.ui.Window;
        unpin(): void;
    }

    interface WindowAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
        reverse?: boolean | undefined;
    }

    interface WindowAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface WindowAnimation {
        close?: WindowAnimationClose | undefined;
        open?: WindowAnimationOpen | undefined;
    }

    interface WindowContent {
        url?: string | undefined;
        dataType?: string | undefined;
        iframe?: boolean | undefined;
        template?: string | undefined;
    }

    interface WindowPosition {
        top?: number | string | undefined;
        left?: number | string | undefined;
    }

    interface WindowModal {
        preventScroll?: boolean | undefined;
    }

    interface WindowRefreshOptions {
        url?: string | undefined;
        cache?: boolean | undefined;
        data?: any;
        type?: string | undefined;
        template?: string | undefined;
        iframe?: boolean | undefined;
    }

    interface WindowDraggable {
        containment?: any | string | undefined;
        dragHandle?: any | string | undefined;
        axis?: string | undefined;
    }

    interface WindowOptions {
        name?: string | undefined;
        actions?: any;
        animation?: boolean | WindowAnimation | undefined;
        appendTo?: any | string | undefined;
        autoFocus?: boolean | undefined;
        content?: string | WindowContent | undefined;
        draggable?: boolean | WindowDraggable | undefined;
        iframe?: boolean | undefined;
        height?: number | string | undefined;
        maxHeight?: number | undefined;
        maxWidth?: number | undefined;
        minHeight?: number | undefined;
        minWidth?: number | undefined;
        modal?: boolean | WindowModal | undefined;
        pinned?: boolean | undefined;
        position?: WindowPosition | undefined;
        resizable?: boolean | undefined;
        scrollable?: boolean | undefined;
        themeColor?: string | undefined;
        title?: string | boolean | undefined;
        visible?: boolean | undefined;
        width?: number | string | undefined;
        size?: string | undefined;
        activate?(e: WindowEvent): void;
        close?(e: WindowCloseEvent): void;
        deactivate?(e: WindowEvent): void;
        dragend?(e: WindowEvent): void;
        dragstart?(e: WindowEvent): void;
        error?(e: WindowErrorEvent): void;
        maximize?(e: WindowEvent): void;
        minimize?(e: WindowEvent): void;
        open?(e: WindowEvent): void;
        refresh?(e: WindowEvent): void;
        resize?(e: WindowEvent): void;
        restore?(e: WindowEvent): void;
    }
    interface WindowEvent {
        sender: Window;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface WindowCloseEvent extends WindowEvent {
        userTriggered?: boolean | undefined;
    }

    interface WindowErrorEvent extends WindowEvent {
        xhr?: JQueryXHR | undefined;
        status?: string | undefined;
    }

    class Wizard extends kendo.ui.Widget {
        static fn: Wizard;

        options: WizardOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Wizard;
        constructor(element: Element, options?: WizardOptions);

        activeStep(): kendo.wizard.Step;
        enableStep(index: number, enable: boolean): void;
        insertAt(index: number, step: any): void;
        next(): void;
        previous(): void;
        removeAt(index: number): void;
        select(index: number): void;
        steps(): kendo.wizard.Step[];
    }

    interface WizardMessages {
        done?: string | undefined;
        next?: string | undefined;
        of?: string | undefined;
        previous?: string | undefined;
        reset?: string | undefined;
        step?: string | undefined;
    }

    interface WizardStepper {
        indicator?: boolean | undefined;
        label?: boolean | undefined;
        linear?: boolean | undefined;
    }

    interface WizardStepButton {
        click?: Function | undefined;
        enabled?: boolean | undefined;
        name?: string | undefined;
        primary?: string | undefined;
        text?: string | undefined;
    }

    interface WizardStep {
        buttons?: WizardStepButton[] | undefined;
        content?: string | undefined;
        contentId?: string | undefined;
        contentUrl?: string | undefined;
        className?: string | undefined;
        enabled?: boolean | undefined;
        form?: any;
        pager?: boolean | undefined;
        title?: string | undefined;
    }

    interface WizardOptions {
        name?: string | undefined;
        actionBar?: boolean | undefined;
        contentPosition?: string | undefined;
        loadOnDemand?: boolean | undefined;
        messages?: WizardMessages | undefined;
        pager?: boolean | undefined;
        reloadOnSelect?: boolean | undefined;
        stepper?: WizardStepper | undefined;
        validateForms?: boolean | undefined;
        steps?: WizardStep[] | undefined;
        activate?(e: WizardActivateEvent): void;
        contentLoad?(e: WizardContentLoadEvent): void;
        done?(e: WizardDoneEvent): void;
        error?(e: WizardErrorEvent): void;
        reset?(e: WizardResetEvent): void;
        select?(e: WizardSelectEvent): void;
        formValidateFailed?(e: WizardFormValidateFailedEvent): void;
    }
    interface WizardEvent {
        sender: Wizard;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface WizardActivateEvent extends WizardEvent {
        step?: kendo.wizard.Step | undefined;
    }

    interface WizardContentLoadEvent extends WizardEvent {
        step?: kendo.wizard.Step | undefined;
    }

    interface WizardDoneEvent extends WizardEvent {
        originalEvent?: any;
        button?: kendo.ui.Button | undefined;
        forms?: any;
    }

    interface WizardErrorEvent extends WizardEvent {
        xhr?: JQueryXHR | undefined;
        status?: string | undefined;
        step?: kendo.wizard.Step | undefined;
    }

    interface WizardResetEvent extends WizardEvent {
        originalEvent?: any;
        button?: kendo.ui.Button | undefined;
    }

    interface WizardSelectEvent extends WizardEvent {
        originalEvent?: any;
        step?: kendo.wizard.Step | undefined;
        button?: kendo.ui.Button | undefined;
        stepper?: kendo.ui.Stepper | undefined;
    }

    interface WizardFormValidateFailedEvent extends WizardEvent {
        form?: kendo.ui.Form | undefined;
        step?: kendo.wizard.Step | undefined;
    }

    class FontIcon extends kendo.ui.Widget {
        static fn: FontIcon;

        options: FontIconOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Wizard;
        constructor(element: Element, options?: FontIconOptions);
    }

    class SvgIcon extends kendo.ui.Widget {
        static fn: FontIcon;

        options: SvgIconOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Wizard;
        constructor(element: Element, options?: FontIconOptions);
    }

    interface IconOptions {
        size?: string | undefined;
        themeColor?: string | undefined;
        flip?: "default" | "both" | "vertical" | "horizontal" | undefined;
        iconClass?: string | undefined;
    }

    interface FontIconOptions extends IconOptions {
        icon?: string | undefined;
    }

    interface SvgIconOptions extends IconOptions {
        icon?: any;
    }
}
declare namespace kendo.drawing {
    class Arc extends kendo.drawing.Element {
        options: ArcOptions;

        constructor(geometry: kendo.geometry.Arc, options?: ArcOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Arc;
        geometry(value: kendo.geometry.Arc): void;
        fill(color: string, opacity?: number): kendo.drawing.Arc;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Arc;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ArcOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Circle extends kendo.drawing.Element {
        options: CircleOptions;

        constructor(geometry: kendo.geometry.Circle, options?: CircleOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Circle;
        geometry(value: kendo.geometry.Circle): void;
        fill(color: string, opacity?: number): kendo.drawing.Circle;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Circle;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface CircleOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Element extends kendo.Class {
        options: ElementOptions;

        parent: kendo.drawing.Group;

        constructor(options?: ElementOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ElementOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        opacity?: number | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface ElementEvent {
        sender: Element;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FillOptions {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    class Gradient extends kendo.Class {
        options: GradientOptions;

        stops: any;

        constructor(options?: GradientOptions);

        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        removeStop(stop: kendo.drawing.GradientStop): void;
    }

    interface GradientOptions {
        name?: string | undefined;
        stops?: any;
    }
    interface GradientEvent {
        sender: Gradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class GradientStop extends kendo.Class {
        options: GradientStopOptions;

        constructor(options?: GradientStopOptions);
    }

    interface GradientStopOptions {
        name?: string | undefined;
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }
    interface GradientStopEvent {
        sender: GradientStop;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Group extends kendo.drawing.Element {
        options: GroupOptions;

        children: any;

        constructor(options?: GroupOptions);

        append(...elements: kendo.drawing.Element[]): void;
        clear(): void;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        insert(position: number, element: kendo.drawing.Element): void;
        opacity(): number;
        opacity(opacity: number): void;
        remove(element: kendo.drawing.Element): void;
        removeAt(index: number): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface GroupOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        opacity?: number | undefined;
        pdf?: kendo.drawing.PDFOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface GroupEvent {
        sender: Group;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Image extends kendo.drawing.Element {
        options: ImageOptions;

        constructor(src: string, rect: kendo.geometry.Rect);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        src(): string;
        src(value: string): void;
        rect(): kendo.geometry.Rect;
        rect(value: kendo.geometry.Rect): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ImageOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        opacity?: number | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface ImageEvent {
        sender: Image;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Layout extends kendo.drawing.Group {
        options: LayoutOptions;

        constructor(rect: kendo.geometry.Rect, options?: LayoutOptions);

        rect(): kendo.geometry.Rect;
        rect(rect: kendo.geometry.Rect): void;
        reflow(): void;
    }

    interface LayoutOptions {
        name?: string | undefined;
        alignContent?: string | undefined;
        alignItems?: string | undefined;
        justifyContent?: string | undefined;
        lineSpacing?: number | undefined;
        spacing?: number | undefined;
        orientation?: string | undefined;
        wrap?: boolean | undefined;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class LinearGradient extends kendo.drawing.Gradient {
        options: LinearGradientOptions;

        stops: any;

        constructor(options?: LinearGradientOptions);

        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        end(): kendo.geometry.Point;
        end(end: any): void;
        end(end: kendo.geometry.Point): void;
        start(): kendo.geometry.Point;
        start(start: any): void;
        start(start: kendo.geometry.Point): void;
        removeStop(stop: kendo.drawing.GradientStop): void;
    }

    interface LinearGradientOptions {
        name?: string | undefined;
        stops?: any;
    }
    interface LinearGradientEvent {
        sender: LinearGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class MultiPath extends kendo.drawing.Element {
        options: MultiPathOptions;

        paths: any;

        constructor(options?: MultiPathOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.MultiPath;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(
            controlOut: any,
            controlIn: kendo.geometry.Point,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: any,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.MultiPath;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: kendo.geometry.Point,
            endPoint: any,
        ): kendo.drawing.MultiPath;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: kendo.geometry.Point,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.MultiPath;
        fill(color: string, opacity?: number): kendo.drawing.MultiPath;
        lineTo(x: number, y?: number): kendo.drawing.MultiPath;
        lineTo(x: any, y?: number): kendo.drawing.MultiPath;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        moveTo(x: number, y?: number): kendo.drawing.MultiPath;
        moveTo(x: any, y?: number): kendo.drawing.MultiPath;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.MultiPath;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface MultiPathOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface MultiPathEvent {
        sender: MultiPath;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class OptionsStore extends kendo.Class {
        options: OptionsStoreOptions;

        observer: any;

        constructor(options?: OptionsStoreOptions);

        get(field: string): any;
        set(field: string, value: any): void;
    }

    interface OptionsStoreOptions {
        name?: string | undefined;
    }
    interface OptionsStoreEvent {
        sender: OptionsStore;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PDFOptions {
        creator?: string | undefined;
        date?: Date | undefined;
        imgDPI?: number | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: any;
        multiPage?: boolean | undefined;
        paperSize?: any;
        jpegQuality?: number | undefined;
        keepPNG?: boolean | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    class Path extends kendo.drawing.Element {
        options: PathOptions;

        segments: any;

        constructor(options?: PathOptions);

        static fromArc(arc: kendo.geometry.Arc, options?: any): kendo.drawing.Path;
        static fromPoints(points: any, options?: any): kendo.drawing.Path;
        static fromRect(rect: kendo.geometry.Rect, options?: any): kendo.drawing.Path;
        static parse(svgPath: string, options?: any): kendo.drawing.MultiPath;

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.Path;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: kendo.geometry.Point,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.Path;
        fill(color: string, opacity?: number): kendo.drawing.Path;
        lineTo(x: number, y?: number): kendo.drawing.Path;
        lineTo(x: any, y?: number): kendo.drawing.Path;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        moveTo(x: number, y?: number): kendo.drawing.Path;
        moveTo(x: any, y?: number): kendo.drawing.Path;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Path;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface PathOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface PathEvent {
        sender: Path;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class RadialGradient extends kendo.drawing.Gradient {
        options: RadialGradientOptions;

        stops: any;

        constructor(options?: RadialGradientOptions);

        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        center(): kendo.geometry.Point;
        center(center: any): void;
        center(center: kendo.geometry.Point): void;
        radius(): number;
        radius(value: number): void;
        removeStop(stop: kendo.drawing.GradientStop): void;
    }

    interface RadialGradientOptions {
        name?: string | undefined;
        center?: any | kendo.geometry.Point | undefined;
        radius?: number | undefined;
        stops?: any;
    }
    interface RadialGradientEvent {
        sender: RadialGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Rect extends kendo.drawing.Element {
        options: RectOptions;

        constructor(geometry: kendo.geometry.Rect, options?: RectOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Rect;
        geometry(value: kendo.geometry.Rect): void;
        fill(color: string, opacity?: number): kendo.drawing.Rect;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Rect;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface RectOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Segment extends kendo.Class {
        options: SegmentOptions;

        constructor(anchor: kendo.geometry.Point, controlIn: kendo.geometry.Point, controlOut: kendo.geometry.Point);

        anchor(): kendo.geometry.Point;
        anchor(value: kendo.geometry.Point): void;
        controlIn(): kendo.geometry.Point;
        controlIn(value: kendo.geometry.Point): void;
        controlOut(): kendo.geometry.Point;
        controlOut(value: kendo.geometry.Point): void;
    }

    interface SegmentOptions {
        name?: string | undefined;
    }
    interface SegmentEvent {
        sender: Segment;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface StrokeOptions {
        color?: string | undefined;
        dashType?: string | undefined;
        lineCap?: string | undefined;
        lineJoin?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    class Surface extends kendo.Observable {
        options: SurfaceOptions;

        constructor(options?: SurfaceOptions);

        static create(element: JQuery, options?: any): kendo.drawing.Surface;
        static create(element: Element, options?: any): kendo.drawing.Surface;

        element: JQuery;

        clear(): void;
        draw(element: kendo.drawing.Element): void;
        eventTarget(e: any): kendo.drawing.Element;
        hideTooltip(): void;
        resize(force?: boolean): void;
        showTooltip(element: kendo.drawing.Element, options?: any): void;
    }

    interface SurfaceTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface SurfaceTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface SurfaceTooltipAnimation {
        close?: SurfaceTooltipAnimationClose | undefined;
        open?: SurfaceTooltipAnimationOpen | undefined;
    }

    interface SurfaceTooltip {
        animation?: boolean | SurfaceTooltipAnimation | undefined;
        appendTo?: string | JQuery | undefined;
    }

    interface SurfaceOptions {
        name?: string | undefined;
        type?: string | undefined;
        height?: string | undefined;
        width?: string | undefined;
        tooltip?: SurfaceTooltip | undefined;
        click?(e: SurfaceClickEvent): void;
        mouseenter?(e: SurfaceMouseenterEvent): void;
        mouseleave?(e: SurfaceMouseleaveEvent): void;
        tooltipClose?(e: SurfaceTooltipCloseEvent): void;
        tooltipOpen?(e: SurfaceTooltipOpenEvent): void;
    }
    interface SurfaceEvent {
        sender: Surface;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SurfaceClickEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface SurfaceMouseenterEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface SurfaceMouseleaveEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface SurfaceTooltipCloseEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        target?: kendo.drawing.Element | undefined;
    }

    interface SurfaceTooltipOpenEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        target?: kendo.drawing.Element | undefined;
    }

    class Text extends kendo.drawing.Element {
        options: TextOptions;

        constructor(content: string, position: kendo.geometry.Point, options?: TextOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        content(): string;
        content(value: string): void;
        fill(color: string, opacity?: number): kendo.drawing.Text;
        opacity(): number;
        opacity(opacity: number): void;
        position(): kendo.geometry.Point;
        position(value: kendo.geometry.Point): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Text;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface TextOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        font?: string | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface TextEvent {
        sender: Text;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TooltipOptions {
        autoHide?: boolean | undefined;
        content?: string | Function | undefined;
        position?: string | undefined;
        height?: number | string | undefined;
        hideDelay?: number | undefined;
        offset?: number | undefined;
        shared?: boolean | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
        width?: number | string | undefined;
    }
}
declare namespace kendo.geometry {
    class Arc extends Observable {
        options: ArcOptions;

        anticlockwise: boolean;
        center: kendo.geometry.Point;
        endAngle: number;
        radiusX: number;
        radiusY: number;
        startAngle: number;

        constructor(center: any | kendo.geometry.Point, options?: ArcOptions);

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        getAnticlockwise(): boolean;
        getCenter(): kendo.geometry.Point;
        getEndAngle(): number;
        getRadiusX(): number;
        getRadiusY(): number;
        getStartAngle(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setAnticlockwise(value: boolean): kendo.geometry.Arc;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Arc;
        setEndAngle(value: number): kendo.geometry.Arc;
        setRadiusX(value: number): kendo.geometry.Arc;
        setRadiusY(value: number): kendo.geometry.Arc;
        setStartAngle(value: number): kendo.geometry.Arc;
    }

    interface ArcOptions {
        name?: string | undefined;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Circle extends Observable {
        options: CircleOptions;

        center: kendo.geometry.Point;
        radius: number;

        constructor(center: any | kendo.geometry.Point, radius: number);

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        clone(): kendo.geometry.Circle;
        equals(other: kendo.geometry.Circle): boolean;
        getCenter(): kendo.geometry.Point;
        getRadius(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Point;
        setCenter(value: any): kendo.geometry.Point;
        setRadius(value: number): kendo.geometry.Circle;
    }

    interface CircleOptions {
        name?: string | undefined;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Matrix extends Observable {
        options: MatrixOptions;

        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;

        static rotate(angle: number, x: number, y: number): kendo.geometry.Matrix;
        static scale(scaleX: number, scaleY: number): kendo.geometry.Matrix;
        static translate(x: number, y: number): kendo.geometry.Matrix;
        static unit(): kendo.geometry.Matrix;

        clone(): kendo.geometry.Matrix;
        equals(other: kendo.geometry.Matrix): boolean;
        round(digits: number): kendo.geometry.Matrix;
        multiplyCopy(matrix: kendo.geometry.Matrix): kendo.geometry.Matrix;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;
    }

    interface MatrixOptions {
        name?: string | undefined;
    }
    interface MatrixEvent {
        sender: Matrix;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Point extends Observable {
        options: PointOptions;

        x: number;
        y: number;

        constructor(x: number, y: number);

        static create(x: number, y: number): kendo.geometry.Point;
        static create(x: any, y: number): kendo.geometry.Point;
        static create(x: kendo.geometry.Point, y: number): kendo.geometry.Point;
        static min(): kendo.geometry.Point;
        static max(): kendo.geometry.Point;
        static minPoint(): kendo.geometry.Point;
        static maxPoint(): kendo.geometry.Point;

        clone(): kendo.geometry.Point;
        distanceTo(point: kendo.geometry.Point): number;
        equals(other: kendo.geometry.Point): boolean;
        getX(): number;
        getY(): number;
        move(x: number, y: number): kendo.geometry.Point;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Point;
        rotate(angle: number, center: any): kendo.geometry.Point;
        round(digits: number): kendo.geometry.Point;
        scale(scaleX: number, scaleY: number): kendo.geometry.Point;
        scaleCopy(scaleX: number, scaleY: number): kendo.geometry.Point;
        setX(value: number): kendo.geometry.Point;
        setY(value: number): kendo.geometry.Point;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;
        transform(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        transformCopy(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        translate(dx: number, dy: number): kendo.geometry.Point;
        translateWith(vector: kendo.geometry.Point): kendo.geometry.Point;
        translateWith(vector: any): kendo.geometry.Point;
    }

    interface PointOptions {
        name?: string | undefined;
    }
    interface PointEvent {
        sender: Point;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Rect extends Observable {
        options: RectOptions;

        origin: kendo.geometry.Point;
        size: kendo.geometry.Size;

        constructor(origin: kendo.geometry.Point | any, size: kendo.geometry.Size | any);

        static fromPoints(pointA: kendo.geometry.Point, pointB: kendo.geometry.Point): kendo.geometry.Rect;
        static union(rectA: kendo.geometry.Rect, rectB: kendo.geometry.Rect): kendo.geometry.Rect;

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        bottomLeft(): kendo.geometry.Point;
        bottomRight(): kendo.geometry.Point;
        center(): kendo.geometry.Point;
        clone(): kendo.geometry.Rect;
        equals(other: kendo.geometry.Rect): boolean;
        getOrigin(): kendo.geometry.Point;
        getSize(): kendo.geometry.Size;
        height(): number;
        setOrigin(value: kendo.geometry.Point): kendo.geometry.Rect;
        setOrigin(value: any): kendo.geometry.Rect;
        setSize(value: kendo.geometry.Size): kendo.geometry.Rect;
        setSize(value: any): kendo.geometry.Rect;
        topLeft(): kendo.geometry.Point;
        topRight(): kendo.geometry.Point;
        width(): number;
    }

    interface RectOptions {
        name?: string | undefined;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Size extends Observable {
        options: SizeOptions;

        width: number;
        height: number;

        static create(width: number, height: number): kendo.geometry.Size;
        static create(width: any, height: number): kendo.geometry.Size;
        static create(width: kendo.geometry.Size, height: number): kendo.geometry.Size;

        clone(): kendo.geometry.Size;
        equals(other: kendo.geometry.Size): boolean;
        getWidth(): number;
        getHeight(): number;
        setWidth(value: number): kendo.geometry.Size;
        setHeight(value: number): kendo.geometry.Size;
    }

    interface SizeOptions {
        name?: string | undefined;
    }
    interface SizeEvent {
        sender: Size;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Transformation extends Observable {
        options: TransformationOptions;

        clone(): kendo.geometry.Transformation;
        equals(other: kendo.geometry.Transformation): boolean;
        matrix(): kendo.geometry.Matrix;
        multiply(transformation: kendo.geometry.Transformation): kendo.geometry.Transformation;
        rotate(angle: number, center: any): kendo.geometry.Transformation;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Transformation;
        scale(scaleX: number, scaleY: number): kendo.geometry.Transformation;
        translate(x: number, y: number): kendo.geometry.Transformation;
    }

    interface TransformationOptions {
        name?: string | undefined;
    }
    interface TransformationEvent {
        sender: Transformation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }
}
declare namespace kendo.dataviz.ui {
    class ArcGauge extends kendo.ui.Widget {
        static fn: ArcGauge;

        options: ArcGaugeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ArcGauge;

        constructor(element: Element, options?: ArcGaugeOptions);

        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        redraw(): void;
        resize(force?: boolean): void;
        setOptions(options: any): void;
        svg(): void;
        imageDataURL(): string;
        value(): void;
    }

    interface ArcGaugeColor {
        color?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
    }

    interface ArcGaugeGaugeAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface ArcGaugeGaugeAreaMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface ArcGaugeGaugeArea {
        background?: string | undefined;
        border?: ArcGaugeGaugeAreaBorder | undefined;
        height?: number | undefined;
        margin?: number | ArcGaugeGaugeAreaMargin | undefined;
        width?: number | undefined;
    }

    interface ArcGaugeScaleLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface ArcGaugeScaleLabelsMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface ArcGaugeScaleLabelsPadding {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface ArcGaugeScaleLabels {
        background?: string | undefined;
        border?: ArcGaugeScaleLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ArcGaugeScaleLabelsMargin | undefined;
        padding?: number | ArcGaugeScaleLabelsPadding | undefined;
        position?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ArcGaugeScaleMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ArcGaugeScaleMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ArcGaugeScale {
        endAngle?: number | undefined;
        labels?: ArcGaugeScaleLabels | undefined;
        majorTicks?: ArcGaugeScaleMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorTicks?: ArcGaugeScaleMinorTicks | undefined;
        minorUnit?: number | undefined;
        rangeLineCap?: string | undefined;
        rangePlaceholderColor?: string | undefined;
        rangeSize?: number | undefined;
        rangeDistance?: number | undefined;
        reverse?: boolean | undefined;
        startAngle?: number | undefined;
    }

    interface ArcGaugeExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface ArcGaugeExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface ArcGaugeOptions {
        name?: string | undefined;
        centerTemplate?: string | Function | undefined;
        color?: string | undefined;
        colors?: ArcGaugeColor[] | undefined;
        gaugeArea?: ArcGaugeGaugeArea | undefined;
        opacity?: number | undefined;
        renderAs?: string | undefined;
        scale?: ArcGaugeScale | undefined;
        theme?: string | undefined;
        transitions?: boolean | undefined;
        value?: number | undefined;
    }
    interface ArcGaugeEvent {
        sender: ArcGauge;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Barcode extends kendo.ui.Widget {
        static fn: Barcode;

        options: BarcodeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Barcode;

        constructor(element: Element, options?: BarcodeOptions);

        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        imageDataURL(): string;
        redraw(): void;
        resize(force?: boolean): void;
        svg(): string;
        value(): string;
        value(value: number): void;
        value(value: string): void;
    }

    interface BarcodeBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface BarcodePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface BarcodeTextMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface BarcodeText {
        color?: string | undefined;
        font?: string | undefined;
        margin?: BarcodeTextMargin | undefined;
        visible?: boolean | undefined;
    }

    interface BarcodeExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface BarcodeExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface BarcodeOptions {
        name?: string | undefined;
        renderAs?: string | undefined;
        background?: string | undefined;
        border?: BarcodeBorder | undefined;
        checksum?: boolean | undefined;
        color?: string | undefined;
        height?: number | undefined;
        padding?: BarcodePadding | undefined;
        text?: BarcodeText | undefined;
        type?: string | undefined;
        value?: string | undefined;
        width?: number | undefined;
    }
    interface BarcodeEvent {
        sender: Barcode;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Chart extends kendo.ui.Widget {
        static fn: Chart;

        options: ChartOptions;

        dataSource: kendo.data.DataSource;
        surface: kendo.drawing.Surface;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Chart;

        constructor(element: Element, options?: ChartOptions);

        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        findAxisByName(name: string): kendo.dataviz.ChartAxis;
        findPaneByIndex(index: number): kendo.dataviz.ChartPane;
        findPaneByName(name: string): kendo.dataviz.ChartPane;
        findSeries(callback: Function): kendo.dataviz.ChartSeries;
        findSeriesByIndex(index: number): kendo.dataviz.ChartSeries;
        findSeriesByName(name: string): kendo.dataviz.ChartSeries;
        getAxis(name: string): kendo.dataviz.ChartAxis;
        hideTooltip(): void;
        plotArea(): kendo.dataviz.ChartPlotArea;
        redraw(): void;
        refresh(): void;
        resize(force?: boolean): void;
        saveAsPDF(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        showTooltip(filter: Function): void;
        showTooltip(filter: number): void;
        showTooltip(filter: Date): void;
        showTooltip(filter: string): void;
        svg(): string;
        imageDataURL(): string;
        toggleHighlight(show: boolean, options: any): void;
    }

    interface ChartAxisDefaultsCrosshairTooltipBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartAxisDefaultsCrosshairTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartAxisDefaultsCrosshairTooltip {
        background?: string | undefined;
        border?: ChartAxisDefaultsCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartAxisDefaultsCrosshairTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartAxisDefaultsCrosshair {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        tooltip?: ChartAxisDefaultsCrosshairTooltip | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartAxisDefaultsLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartAxisDefaultsLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartAxisDefaultsLabelsRotation {
        align?: string | undefined;
        angle?: number | string | undefined;
    }

    interface ChartAxisDefaultsLabels {
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartAxisDefaultsLabelsMargin | undefined;
        mirror?: boolean | undefined;
        padding?: number | ChartAxisDefaultsLabelsPadding | undefined;
        rotation?: string | number | ChartAxisDefaultsLabelsRotation | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartAxisDefaultsLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartAxisDefaultsMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartAxisDefaultsMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartAxisDefaultsMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartAxisDefaultsMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartAxisDefaultsPlotBand {
        color?: string | undefined;
        from?: number | undefined;
        opacity?: number | undefined;
        to?: number | undefined;
    }

    interface ChartAxisDefaultsTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartAxisDefaultsTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartAxisDefaultsTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartAxisDefaultsTitle {
        background?: string | undefined;
        border?: ChartAxisDefaultsTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartAxisDefaultsTitleMargin | undefined;
        padding?: number | ChartAxisDefaultsTitlePadding | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartAxisDefaults {
        background?: string | undefined;
        color?: string | undefined;
        crosshair?: ChartAxisDefaultsCrosshair | undefined;
        labels?: ChartAxisDefaultsLabels | undefined;
        line?: ChartAxisDefaultsLine | undefined;
        majorGridLines?: ChartAxisDefaultsMajorGridLines | undefined;
        majorTicks?: ChartAxisDefaultsMajorTicks | undefined;
        minorGridLines?: ChartAxisDefaultsMinorGridLines | undefined;
        minorTicks?: ChartAxisDefaultsMinorTicks | undefined;
        narrowRange?: boolean | undefined;
        pane?: string | undefined;
        plotBands?: ChartAxisDefaultsPlotBand[] | undefined;
        reverse?: boolean | undefined;
        startAngle?: number | undefined;
        title?: ChartAxisDefaultsTitle | undefined;
        visible?: boolean | undefined;
    }

    interface ChartCategoryAxisItemAutoBaseUnitSteps {
        milliseconds?: any;
        seconds?: any;
        minutes?: any;
        hours?: any;
        days?: any;
        weeks?: any;
        months?: any;
        years?: any;
    }

    interface ChartCategoryAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemCrosshairTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartCategoryAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: ChartCategoryAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartCategoryAxisItemCrosshairTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartCategoryAxisItemCrosshair {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        tooltip?: ChartCategoryAxisItemCrosshairTooltip | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemLabelsDateFormats {
        days?: string | undefined;
        hours?: string | undefined;
        months?: string | undefined;
        weeks?: string | undefined;
        years?: string | undefined;
    }

    interface ChartCategoryAxisItemLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartCategoryAxisItemLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartCategoryAxisItemLabelsRotation {
        align?: string | undefined;
        angle?: number | string | undefined;
    }

    interface ChartCategoryAxisItemLabels {
        background?: string | undefined;
        border?: ChartCategoryAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        culture?: string | undefined;
        dateFormats?: ChartCategoryAxisItemLabelsDateFormats | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartCategoryAxisItemLabelsMargin | undefined;
        mirror?: boolean | undefined;
        padding?: number | ChartCategoryAxisItemLabelsPadding | undefined;
        position?: string | undefined;
        rotation?: string | number | ChartCategoryAxisItemLabelsRotation | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartCategoryAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartCategoryAxisItemMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartCategoryAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartCategoryAxisItemMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartCategoryAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: ChartCategoryAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartCategoryAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: ChartCategoryAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface ChartCategoryAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: ChartCategoryAxisItemNotesDataItemIcon | undefined;
        label?: ChartCategoryAxisItemNotesDataItemLabel | undefined;
        line?: ChartCategoryAxisItemNotesDataItemLine | undefined;
    }

    interface ChartCategoryAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemNotesIcon {
        background?: string | undefined;
        border?: ChartCategoryAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartCategoryAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemNotesLabel {
        background?: string | undefined;
        border?: ChartCategoryAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface ChartCategoryAxisItemNotesLine {
        dashType?: string | undefined;
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartCategoryAxisItemNotes {
        position?: string | undefined;
        icon?: ChartCategoryAxisItemNotesIcon | undefined;
        label?: ChartCategoryAxisItemNotesLabel | undefined;
        line?: ChartCategoryAxisItemNotesLine | undefined;
        data?: ChartCategoryAxisItemNotesDataItem[] | undefined;
        visual?: Function | undefined;
    }

    interface ChartCategoryAxisItemPlotBand {
        color?: string | undefined;
        from?: number | undefined;
        opacity?: number | undefined;
        to?: number | undefined;
    }

    interface ChartCategoryAxisItemSelectMousewheel {
        reverse?: boolean | undefined;
        zoom?: string | undefined;
    }

    interface ChartCategoryAxisItemSelect {
        from?: any;
        max?: any;
        min?: any;
        mousewheel?: ChartCategoryAxisItemSelectMousewheel | undefined;
        to?: any;
    }

    interface ChartCategoryAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartCategoryAxisItemTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartCategoryAxisItemTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartCategoryAxisItemTitle {
        background?: string | undefined;
        border?: ChartCategoryAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartCategoryAxisItemTitleMargin | undefined;
        padding?: ChartCategoryAxisItemTitlePadding | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartCategoryAxisItem {
        autoBaseUnitSteps?: ChartCategoryAxisItemAutoBaseUnitSteps | undefined;
        axisCrossingValue?: any | Date | any | undefined;
        background?: string | undefined;
        baseUnit?: string | undefined;
        baseUnitStep?: any;
        categories?: any;
        color?: string | undefined;
        crosshair?: ChartCategoryAxisItemCrosshair | undefined;
        field?: string | undefined;
        justified?: boolean | undefined;
        labels?: ChartCategoryAxisItemLabels | undefined;
        line?: ChartCategoryAxisItemLine | undefined;
        majorGridLines?: ChartCategoryAxisItemMajorGridLines | undefined;
        majorTicks?: ChartCategoryAxisItemMajorTicks | undefined;
        max?: any;
        maxDateGroups?: number | undefined;
        maxDivisions?: number | undefined;
        min?: any;
        minorGridLines?: ChartCategoryAxisItemMinorGridLines | undefined;
        minorTicks?: ChartCategoryAxisItemMinorTicks | undefined;
        name?: string | undefined;
        pane?: string | undefined;
        plotBands?: ChartCategoryAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        roundToBaseUnit?: boolean | undefined;
        select?: ChartCategoryAxisItemSelect | undefined;
        startAngle?: number | undefined;
        title?: ChartCategoryAxisItemTitle | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        weekStartDay?: number | undefined;
        notes?: ChartCategoryAxisItemNotes | undefined;
    }

    interface ChartChartAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartChartAreaMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartChartArea {
        background?: string | undefined;
        border?: ChartChartAreaBorder | undefined;
        height?: number | undefined;
        margin?: number | ChartChartAreaMargin | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface ChartLegendBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartLegendInactiveItemsLabels {
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
    }

    interface ChartLegendInactiveItems {
        labels?: ChartLegendInactiveItemsLabels | undefined;
    }

    interface ChartLegendItem {
        cursor?: string | undefined;
        visual?: Function | undefined;
    }

    interface ChartLegendLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartLegendLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartLegendLabels {
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartLegendLabelsMargin | undefined;
        padding?: ChartLegendLabelsPadding | undefined;
        template?: string | Function | undefined;
    }

    interface ChartLegendMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartLegendPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartLegend {
        align?: string | undefined;
        background?: string | undefined;
        border?: ChartLegendBorder | undefined;
        height?: number | undefined;
        inactiveItems?: ChartLegendInactiveItems | undefined;
        item?: ChartLegendItem | undefined;
        labels?: ChartLegendLabels | undefined;
        margin?: number | ChartLegendMargin | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
        orientation?: string | undefined;
        padding?: number | ChartLegendPadding | undefined;
        position?: string | undefined;
        reverse?: boolean | undefined;
        spacing?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartPaneBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartPaneMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartPanePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartPaneTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartPaneTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartPaneTitle {
        background?: string | undefined;
        border?: ChartPaneTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartPaneTitleMargin | undefined;
        position?: string | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartPane {
        background?: string | undefined;
        border?: ChartPaneBorder | undefined;
        clip?: boolean | undefined;
        height?: number | undefined;
        margin?: number | ChartPaneMargin | undefined;
        name?: string | undefined;
        padding?: ChartPanePadding | undefined;
        title?: string | ChartPaneTitle | undefined;
    }

    interface ChartPannable {
        key?: string | undefined;
        lock?: string | undefined;
    }

    interface ChartPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface ChartPdf {
        author?: string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        forceProxy?: boolean | undefined;
        fileName?: string | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: ChartPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface ChartPlotAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartPlotAreaMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartPlotAreaPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartPlotArea {
        background?: string | undefined;
        border?: ChartPlotAreaBorder | undefined;
        margin?: number | ChartPlotAreaMargin | undefined;
        opacity?: number | undefined;
        padding?: number | ChartPlotAreaPadding | undefined;
    }

    interface ChartSeriesItemBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        opacity?: number | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemConnectors {
        color?: string | Function | undefined;
        padding?: number | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesItemErrorBarsLine {
        width?: number | undefined;
        dashType?: string | undefined;
    }

    interface ChartSeriesItemErrorBars {
        value?: string | number | any | Function | undefined;
        visual?: Function | undefined;
        xValue?: string | number | any | Function | undefined;
        yValue?: string | number | any | Function | undefined;
        endCaps?: boolean | undefined;
        color?: string | undefined;
        line?: ChartSeriesItemErrorBarsLine | undefined;
    }

    interface ChartSeriesItemExtremesBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemExtremes {
        background?: string | Function | undefined;
        border?: Function | ChartSeriesItemExtremesBorder | undefined;
        size?: number | Function | undefined;
        type?: string | Function | undefined;
        rotation?: number | Function | undefined;
    }

    interface ChartSeriesItemHighlightBorder {
        color?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesItemHighlightLine {
        dashType?: string | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesItemHighlight {
        border?: ChartSeriesItemHighlightBorder | undefined;
        color?: string | undefined;
        inactiveOpacity?: number | undefined;
        line?: ChartSeriesItemHighlightLine | undefined;
        opacity?: number | undefined;
        toggle?: Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartSeriesItemLabelsBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemLabelsFromBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemLabelsFromMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemLabelsFromPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemLabelsFrom {
        background?: string | Function | undefined;
        border?: ChartSeriesItemLabelsFromBorder | undefined;
        color?: string | Function | undefined;
        font?: string | Function | undefined;
        format?: string | Function | undefined;
        margin?: number | ChartSeriesItemLabelsFromMargin | undefined;
        padding?: number | ChartSeriesItemLabelsFromPadding | undefined;
        position?: string | Function | undefined;
        template?: string | Function | undefined;
        visible?: boolean | Function | undefined;
    }

    interface ChartSeriesItemLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemLabelsToBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemLabelsToMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemLabelsToPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemLabelsTo {
        background?: string | Function | undefined;
        border?: ChartSeriesItemLabelsToBorder | undefined;
        color?: string | Function | undefined;
        font?: string | Function | undefined;
        format?: string | Function | undefined;
        margin?: number | ChartSeriesItemLabelsToMargin | undefined;
        padding?: number | ChartSeriesItemLabelsToPadding | undefined;
        position?: string | Function | undefined;
        template?: string | Function | undefined;
        visible?: boolean | Function | undefined;
    }

    interface ChartSeriesItemLabels {
        align?: string | undefined;
        background?: string | Function | undefined;
        border?: ChartSeriesItemLabelsBorder | undefined;
        color?: string | Function | undefined;
        distance?: number | undefined;
        font?: string | Function | undefined;
        format?: string | Function | undefined;
        margin?: number | ChartSeriesItemLabelsMargin | undefined;
        padding?: number | ChartSeriesItemLabelsPadding | undefined;
        position?: string | Function | undefined;
        rotation?: string | number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | Function | undefined;
        visual?: Function | undefined;
        from?: ChartSeriesItemLabelsFrom | undefined;
        to?: ChartSeriesItemLabelsTo | undefined;
    }

    interface ChartSeriesItemLine {
        color?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
        style?: string | undefined;
    }

    interface ChartSeriesItemMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemMarkersBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemMarkersFromBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemMarkersFrom {
        background?: string | Function | undefined;
        border?: Function | ChartSeriesItemMarkersFromBorder | undefined;
        size?: number | Function | undefined;
        type?: string | Function | undefined;
        visible?: boolean | Function | undefined;
        visual?: Function | undefined;
        rotation?: number | Function | undefined;
    }

    interface ChartSeriesItemMarkersToBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemMarkersTo {
        background?: string | Function | undefined;
        border?: Function | ChartSeriesItemMarkersToBorder | undefined;
        size?: number | Function | undefined;
        type?: string | Function | undefined;
        visible?: boolean | Function | undefined;
        visual?: Function | undefined;
        rotation?: number | Function | undefined;
    }

    interface ChartSeriesItemMarkers {
        background?: string | Function | undefined;
        border?: Function | ChartSeriesItemMarkersBorder | undefined;
        from?: ChartSeriesItemMarkersFrom | undefined;
        size?: number | Function | undefined;
        to?: ChartSeriesItemMarkersTo | undefined;
        type?: string | Function | undefined;
        visible?: boolean | Function | undefined;
        visual?: Function | undefined;
        rotation?: number | Function | undefined;
    }

    interface ChartSeriesItemNegativeValues {
        color?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesItemNotesIcon {
        background?: string | undefined;
        border?: ChartSeriesItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesItemNotesLabel {
        background?: string | undefined;
        border?: ChartSeriesItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface ChartSeriesItemNotesLine {
        dashType?: string | undefined;
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartSeriesItemNotes {
        position?: string | undefined;
        icon?: ChartSeriesItemNotesIcon | undefined;
        label?: ChartSeriesItemNotesLabel | undefined;
        line?: ChartSeriesItemNotesLine | undefined;
        visual?: Function | undefined;
    }

    interface ChartSeriesItemOutliersBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemOutliers {
        background?: string | Function | undefined;
        border?: Function | ChartSeriesItemOutliersBorder | undefined;
        size?: number | Function | undefined;
        type?: string | Function | undefined;
        rotation?: number | Function | undefined;
    }

    interface ChartSeriesItemOverlay {
        gradient?: string | undefined;
    }

    interface ChartSeriesItemStack {
        type?: string | undefined;
        group?: string | undefined;
    }

    interface ChartSeriesItemTargetBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemTargetLine {
        width?: number | Function | undefined;
    }

    interface ChartSeriesItemTarget {
        border?: Function | ChartSeriesItemTargetBorder | undefined;
        color?: string | Function | undefined;
        line?: ChartSeriesItemTargetLine | undefined;
    }

    interface ChartSeriesItemTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesItemTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesItemTooltip {
        background?: string | undefined;
        border?: ChartSeriesItemTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartSeriesItemTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesItem {
        aggregate?: string | Function | undefined;
        axis?: string | undefined;
        border?: ChartSeriesItemBorder | undefined;
        categoryAxis?: string | undefined;
        categoryField?: string | undefined;
        closeField?: string | undefined;
        color?: string | Function | undefined;
        colorField?: string | undefined;
        connectors?: ChartSeriesItemConnectors | undefined;
        currentField?: string | undefined;
        dashType?: string | undefined;
        data?: any;
        downColor?: string | Function | undefined;
        downColorField?: string | undefined;
        segmentSpacing?: number | undefined;
        summaryField?: string | undefined;
        neckRatio?: number | undefined;
        dynamicSlope?: boolean | undefined;
        dynamicHeight?: boolean | undefined;
        errorBars?: ChartSeriesItemErrorBars | undefined;
        errorLowField?: string | undefined;
        errorHighField?: string | undefined;
        xErrorLowField?: string | undefined;
        xErrorHighField?: string | undefined;
        yErrorLowField?: string | undefined;
        yErrorHighField?: string | undefined;
        explodeField?: string | undefined;
        field?: string | undefined;
        fromField?: string | undefined;
        toField?: string | undefined;
        noteTextField?: string | undefined;
        lowerField?: string | undefined;
        q1Field?: string | undefined;
        medianField?: string | undefined;
        q3Field?: string | undefined;
        upperField?: string | undefined;
        meanField?: string | undefined;
        outliersField?: string | undefined;
        gap?: number | undefined;
        highField?: string | undefined;
        highlight?: ChartSeriesItemHighlight | undefined;
        holeSize?: number | undefined;
        labels?: ChartSeriesItemLabels | undefined;
        line?: string | ChartSeriesItemLine | undefined;
        lowField?: string | undefined;
        margin?: number | ChartSeriesItemMargin | undefined;
        markers?: ChartSeriesItemMarkers | undefined;
        outliers?: ChartSeriesItemOutliers | undefined;
        extremes?: ChartSeriesItemExtremes | undefined;
        maxSize?: number | undefined;
        minSize?: number | undefined;
        missingValues?: string | undefined;
        style?: string | undefined;
        name?: string | undefined;
        negativeColor?: string | undefined;
        negativeValues?: ChartSeriesItemNegativeValues | undefined;
        opacity?: number | undefined;
        openField?: string | undefined;
        overlay?: ChartSeriesItemOverlay | undefined;
        padding?: number | undefined;
        size?: number | undefined;
        sizeField?: string | undefined;
        spacing?: number | undefined;
        stack?: boolean | string | ChartSeriesItemStack | undefined;
        startAngle?: number | undefined;
        target?: ChartSeriesItemTarget | undefined;
        targetField?: string | undefined;
        tooltip?: ChartSeriesItemTooltip | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        visibleInLegend?: boolean | undefined;
        visibleInLegendField?: string | undefined;
        visual?: Function | undefined;
        width?: number | undefined;
        xAxis?: string | undefined;
        xField?: string | undefined;
        yAxis?: string | undefined;
        yField?: string | undefined;
        notes?: ChartSeriesItemNotes | undefined;
        zIndex?: number | undefined;
    }

    interface ChartSeriesDefaultsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsFromBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsFromMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsFromPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsFrom {
        background?: string | undefined;
        border?: ChartSeriesDefaultsLabelsFromBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartSeriesDefaultsLabelsFromMargin | undefined;
        padding?: number | ChartSeriesDefaultsLabelsFromPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesDefaultsLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsToBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsToMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsToPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsLabelsTo {
        background?: string | undefined;
        border?: ChartSeriesDefaultsLabelsToBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartSeriesDefaultsLabelsToMargin | undefined;
        padding?: number | ChartSeriesDefaultsLabelsToPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesDefaultsLabels {
        background?: string | undefined;
        border?: ChartSeriesDefaultsLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartSeriesDefaultsLabelsMargin | undefined;
        padding?: number | ChartSeriesDefaultsLabelsPadding | undefined;
        rotation?: string | number | undefined;
        template?: string | Function | undefined;
        position?: string | Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
        from?: ChartSeriesDefaultsLabelsFrom | undefined;
        to?: ChartSeriesDefaultsLabelsTo | undefined;
    }

    interface ChartSeriesDefaultsNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsNotesIcon {
        background?: string | undefined;
        border?: ChartSeriesDefaultsNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesDefaultsNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsNotesLabel {
        background?: string | undefined;
        border?: ChartSeriesDefaultsNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface ChartSeriesDefaultsNotesLine {
        dashType?: string | undefined;
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartSeriesDefaultsNotes {
        icon?: ChartSeriesDefaultsNotesIcon | undefined;
        label?: ChartSeriesDefaultsNotesLabel | undefined;
        line?: ChartSeriesDefaultsNotesLine | undefined;
        visual?: Function | undefined;
    }

    interface ChartSeriesDefaultsOverlay {
        gradient?: string | undefined;
    }

    interface ChartSeriesDefaultsStack {
        type?: string | undefined;
    }

    interface ChartSeriesDefaultsTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSeriesDefaultsTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSeriesDefaultsTooltip {
        background?: string | undefined;
        border?: ChartSeriesDefaultsTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartSeriesDefaultsTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartSeriesDefaults {
        area?: any;
        bar?: any;
        border?: ChartSeriesDefaultsBorder | undefined;
        bubble?: any;
        candlestick?: any;
        column?: any;
        donut?: any;
        gap?: number | undefined;
        labels?: ChartSeriesDefaultsLabels | undefined;
        line?: any;
        ohlc?: any;
        overlay?: ChartSeriesDefaultsOverlay | undefined;
        pie?: any;
        rangeArea?: any;
        scatter?: any;
        scatterLine?: any;
        spacing?: number | undefined;
        stack?: boolean | ChartSeriesDefaultsStack | undefined;
        type?: string | undefined;
        tooltip?: ChartSeriesDefaultsTooltip | undefined;
        verticalArea?: any;
        verticalLine?: any;
        verticalRangeArea?: any;
        visual?: Function | undefined;
        notes?: ChartSeriesDefaultsNotes | undefined;
    }

    interface ChartSubtitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartSubtitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSubtitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartSubtitle {
        align?: string | undefined;
        background?: string | undefined;
        border?: ChartSubtitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: ChartSubtitleMargin | undefined;
        padding?: ChartSubtitlePadding | undefined;
        position?: string | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartTitle {
        align?: string | undefined;
        background?: string | undefined;
        border?: ChartTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartTitleMargin | undefined;
        padding?: number | ChartTitlePadding | undefined;
        position?: string | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartTooltip {
        background?: string | undefined;
        border?: ChartTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        opacity?: number | undefined;
        padding?: ChartTooltipPadding | undefined;
        shared?: boolean | undefined;
        sharedTemplate?: string | Function | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartValueAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemCrosshairTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartValueAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: ChartValueAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartValueAxisItemCrosshairTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartValueAxisItemCrosshair {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        tooltip?: ChartValueAxisItemCrosshairTooltip | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartValueAxisItemLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartValueAxisItemLabelsRotation {
        align?: string | undefined;
        angle?: number | string | undefined;
    }

    interface ChartValueAxisItemLabels {
        background?: string | undefined;
        border?: ChartValueAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartValueAxisItemLabelsMargin | undefined;
        mirror?: boolean | undefined;
        padding?: number | ChartValueAxisItemLabelsPadding | undefined;
        rotation?: string | number | ChartValueAxisItemLabelsRotation | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartValueAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartValueAxisItemMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartValueAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartValueAxisItemMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartValueAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: ChartValueAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartValueAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: ChartValueAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface ChartValueAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartValueAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: ChartValueAxisItemNotesDataItemIcon | undefined;
        label?: ChartValueAxisItemNotesDataItemLabel | undefined;
        line?: ChartValueAxisItemNotesDataItemLine | undefined;
    }

    interface ChartValueAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemNotesIcon {
        background?: string | undefined;
        border?: ChartValueAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartValueAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemNotesLabel {
        background?: string | undefined;
        border?: ChartValueAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface ChartValueAxisItemNotesLine {
        dashType?: string | undefined;
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartValueAxisItemNotes {
        position?: string | undefined;
        icon?: ChartValueAxisItemNotesIcon | undefined;
        label?: ChartValueAxisItemNotesLabel | undefined;
        line?: ChartValueAxisItemNotesLine | undefined;
        data?: ChartValueAxisItemNotesDataItem[] | undefined;
        visual?: Function | undefined;
    }

    interface ChartValueAxisItemPlotBand {
        color?: string | undefined;
        from?: number | undefined;
        opacity?: number | undefined;
        to?: number | undefined;
    }

    interface ChartValueAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartValueAxisItemTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartValueAxisItemTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartValueAxisItemTitle {
        background?: string | undefined;
        border?: ChartValueAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartValueAxisItemTitleMargin | undefined;
        padding?: number | ChartValueAxisItemTitlePadding | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartValueAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        background?: string | undefined;
        color?: string | undefined;
        crosshair?: ChartValueAxisItemCrosshair | undefined;
        labels?: ChartValueAxisItemLabels | undefined;
        line?: ChartValueAxisItemLine | undefined;
        majorGridLines?: ChartValueAxisItemMajorGridLines | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorGridLines?: ChartValueAxisItemMinorGridLines | undefined;
        majorTicks?: ChartValueAxisItemMajorTicks | undefined;
        minorTicks?: ChartValueAxisItemMinorTicks | undefined;
        minorUnit?: number | undefined;
        name?: string | undefined;
        narrowRange?: boolean | undefined;
        pane?: string | undefined;
        plotBands?: ChartValueAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        title?: ChartValueAxisItemTitle | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        notes?: ChartValueAxisItemNotes | undefined;
    }

    interface ChartXAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemCrosshairTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartXAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: ChartXAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartXAxisItemCrosshairTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartXAxisItemCrosshair {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        tooltip?: ChartXAxisItemCrosshairTooltip | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemLabelsDateFormats {
        days?: string | undefined;
        hours?: string | undefined;
        months?: string | undefined;
        weeks?: string | undefined;
        years?: string | undefined;
    }

    interface ChartXAxisItemLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartXAxisItemLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartXAxisItemLabelsRotation {
        align?: string | undefined;
        angle?: number | string | undefined;
    }

    interface ChartXAxisItemLabels {
        background?: string | undefined;
        border?: ChartXAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        culture?: string | undefined;
        dateFormats?: ChartXAxisItemLabelsDateFormats | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartXAxisItemLabelsMargin | undefined;
        mirror?: boolean | undefined;
        padding?: number | ChartXAxisItemLabelsPadding | undefined;
        rotation?: string | number | ChartXAxisItemLabelsRotation | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartXAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartXAxisItemMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartXAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartXAxisItemMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartXAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: ChartXAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartXAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: ChartXAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface ChartXAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartXAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: ChartXAxisItemNotesDataItemIcon | undefined;
        label?: ChartXAxisItemNotesDataItemLabel | undefined;
        line?: ChartXAxisItemNotesDataItemLine | undefined;
    }

    interface ChartXAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemNotesIcon {
        background?: string | undefined;
        border?: ChartXAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartXAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemNotesLabel {
        background?: string | undefined;
        border?: ChartXAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface ChartXAxisItemNotesLine {
        dashType?: string | undefined;
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartXAxisItemNotes {
        position?: string | undefined;
        icon?: ChartXAxisItemNotesIcon | undefined;
        label?: ChartXAxisItemNotesLabel | undefined;
        line?: ChartXAxisItemNotesLine | undefined;
        data?: ChartXAxisItemNotesDataItem[] | undefined;
        visual?: Function | undefined;
    }

    interface ChartXAxisItemPlotBand {
        color?: string | undefined;
        from?: number | undefined;
        opacity?: number | undefined;
        to?: number | undefined;
    }

    interface ChartXAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartXAxisItemTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartXAxisItemTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartXAxisItemTitle {
        background?: string | undefined;
        border?: ChartXAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartXAxisItemTitleMargin | undefined;
        padding?: number | ChartXAxisItemTitlePadding | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartXAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        background?: string | undefined;
        baseUnit?: string | undefined;
        categories?: any[] | undefined;
        color?: string | undefined;
        crosshair?: ChartXAxisItemCrosshair | undefined;
        labels?: ChartXAxisItemLabels | undefined;
        line?: ChartXAxisItemLine | undefined;
        majorGridLines?: ChartXAxisItemMajorGridLines | undefined;
        minorGridLines?: ChartXAxisItemMinorGridLines | undefined;
        minorTicks?: ChartXAxisItemMinorTicks | undefined;
        majorTicks?: ChartXAxisItemMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: any;
        min?: any;
        minorUnit?: number | undefined;
        name?: string | undefined;
        narrowRange?: boolean | undefined;
        pane?: string | undefined;
        plotBands?: ChartXAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        startAngle?: number | undefined;
        title?: ChartXAxisItemTitle | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        notes?: ChartXAxisItemNotes | undefined;
    }

    interface ChartYAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemCrosshairTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartYAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: ChartYAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: ChartYAxisItemCrosshairTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface ChartYAxisItemCrosshair {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        tooltip?: ChartYAxisItemCrosshairTooltip | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemLabelsDateFormats {
        days?: string | undefined;
        hours?: string | undefined;
        months?: string | undefined;
        weeks?: string | undefined;
        years?: string | undefined;
    }

    interface ChartYAxisItemLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartYAxisItemLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartYAxisItemLabelsRotation {
        align?: string | undefined;
        angle?: number | undefined;
    }

    interface ChartYAxisItemLabels {
        background?: string | undefined;
        border?: ChartYAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        culture?: string | undefined;
        dateFormats?: ChartYAxisItemLabelsDateFormats | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | ChartYAxisItemLabelsMargin | undefined;
        mirror?: boolean | undefined;
        padding?: number | ChartYAxisItemLabelsPadding | undefined;
        rotation?: number | ChartYAxisItemLabelsRotation | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartYAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartYAxisItemMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartYAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartYAxisItemMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface ChartYAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: ChartYAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartYAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: ChartYAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface ChartYAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartYAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: ChartYAxisItemNotesDataItemIcon | undefined;
        label?: ChartYAxisItemNotesDataItemLabel | undefined;
        line?: ChartYAxisItemNotesDataItemLine | undefined;
    }

    interface ChartYAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemNotesIcon {
        background?: string | undefined;
        border?: ChartYAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface ChartYAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemNotesLabel {
        background?: string | undefined;
        border?: ChartYAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface ChartYAxisItemNotesLine {
        dashType?: string | undefined;
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface ChartYAxisItemNotes {
        position?: string | undefined;
        icon?: ChartYAxisItemNotesIcon | undefined;
        label?: ChartYAxisItemNotesLabel | undefined;
        line?: ChartYAxisItemNotesLine | undefined;
        data?: ChartYAxisItemNotesDataItem[] | undefined;
        visual?: Function | undefined;
    }

    interface ChartYAxisItemPlotBand {
        color?: string | undefined;
        from?: number | undefined;
        opacity?: number | undefined;
        to?: number | undefined;
    }

    interface ChartYAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ChartYAxisItemTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartYAxisItemTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface ChartYAxisItemTitle {
        background?: string | undefined;
        border?: ChartYAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | ChartYAxisItemTitleMargin | undefined;
        padding?: number | ChartYAxisItemTitlePadding | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
        visual?: Function | undefined;
    }

    interface ChartYAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        background?: string | undefined;
        baseUnit?: string | undefined;
        categories?: any[] | undefined;
        color?: string | undefined;
        crosshair?: ChartYAxisItemCrosshair | undefined;
        labels?: ChartYAxisItemLabels | undefined;
        line?: ChartYAxisItemLine | undefined;
        majorGridLines?: ChartYAxisItemMajorGridLines | undefined;
        minorGridLines?: ChartYAxisItemMinorGridLines | undefined;
        minorTicks?: ChartYAxisItemMinorTicks | undefined;
        majorTicks?: ChartYAxisItemMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: any;
        min?: any;
        minorUnit?: number | undefined;
        name?: string | undefined;
        narrowRange?: boolean | undefined;
        pane?: string | undefined;
        plotBands?: ChartYAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        title?: ChartYAxisItemTitle | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
        notes?: ChartYAxisItemNotes | undefined;
    }

    interface ChartZoomableMousewheel {
        lock?: string | undefined;
    }

    interface ChartZoomableSelection {
        key?: string | undefined;
        lock?: string | undefined;
    }

    interface ChartZoomable {
        mousewheel?: boolean | ChartZoomableMousewheel | undefined;
        selection?: boolean | ChartZoomableSelection | undefined;
    }

    interface ChartExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
        cors?: string | undefined;
    }

    interface ChartExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface ChartToggleHighlightOptions {
        series?: string | undefined;
        category?: string | undefined;
    }

    interface ChartSeriesClickEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
        field?: string | undefined;
    }

    interface ChartSeriesHoverEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
        field?: string | undefined;
    }

    interface ChartSeriesOverEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface ChartSeriesLeaveEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface ChartOptions {
        name?: string | undefined;
        autoBind?: boolean | undefined;
        axisDefaults?: ChartAxisDefaults | undefined;
        categoryAxis?: ChartCategoryAxisItem | ChartCategoryAxisItem[] | undefined;
        chartArea?: ChartChartArea | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        legend?: ChartLegend | undefined;
        panes?: ChartPane[] | undefined;
        pannable?: boolean | ChartPannable | undefined;
        pdf?: ChartPdf | undefined;
        persistSeriesVisibility?: boolean | undefined;
        plotArea?: ChartPlotArea | undefined;
        renderAs?: string | undefined;
        series?: ChartSeriesItem[] | undefined;
        seriesColors?: any;
        seriesDefaults?: ChartSeriesDefaults | undefined;
        theme?: string | undefined;
        subtitle?: string | ChartSubtitle | undefined;
        title?: string | ChartTitle | undefined;
        tooltip?: ChartTooltip | undefined;
        transitions?: boolean | undefined;
        valueAxis?: ChartValueAxisItem | ChartValueAxisItem[] | undefined;
        xAxis?: ChartXAxisItem | ChartXAxisItem[] | undefined;
        yAxis?: ChartYAxisItem | ChartYAxisItem[] | undefined;
        zoomable?: boolean | ChartZoomable | undefined;
        axisLabelClick?(e: ChartAxisLabelClickEvent): void;
        dataBound?(e: ChartDataBoundEvent): void;
        drag?(e: ChartDragEvent): void;
        dragEnd?(e: ChartDragEndEvent): void;
        dragStart?(e: ChartDragStartEvent): void;
        legendItemClick?(e: ChartLegendItemClickEvent): void;
        legendItemHover?(e: ChartLegendItemHoverEvent): void;
        legendItemLeave?(e: ChartLegendItemLeaveEvent): void;
        noteClick?(e: ChartNoteClickEvent): void;
        noteHover?(e: ChartNoteHoverEvent): void;
        noteLeave?(e: ChartNoteLeaveEvent): void;
        paneRender?(e: ChartPaneRenderEvent): void;
        plotAreaClick?(e: ChartPlotAreaClickEvent): void;
        plotAreaHover?(e: ChartPlotAreaHoverEvent): void;
        plotAreaLeave?(e: ChartPlotAreaLeaveEvent): void;
        render?(e: ChartRenderEvent): void;
        select?(e: ChartSelectEvent): void;
        selectEnd?(e: ChartSelectEndEvent): void;
        selectStart?(e: ChartSelectStartEvent): void;
        seriesClick?(e: ChartSeriesClickEvent): void;
        seriesHover?(e: ChartSeriesHoverEvent): void;
        seriesOver?(e: ChartSeriesOverEvent): void;
        seriesLeave?(e: ChartSeriesLeaveEvent): void;
        zoom?(e: ChartZoomEvent): void;
        zoomEnd?(e: ChartZoomEndEvent): void;
        zoomStart?(e: ChartZoomStartEvent): void;
    }
    interface ChartEvent {
        sender: Chart;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ChartAxisLabelClickEvent extends ChartEvent {
        axis?: any;
        dataItem?: any;
        element?: any;
        index?: any;
        text?: string | undefined;
        value?: any;
    }

    interface ChartDataBoundEvent extends ChartEvent {
    }

    interface ChartDragEvent extends ChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface ChartDragEndEvent extends ChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface ChartDragStartEvent extends ChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface ChartLegendItemClickEvent extends ChartEvent {
        pointIndex?: number | undefined;
        series?: any;
        seriesIndex?: number | undefined;
        text?: string | undefined;
        element?: any;
    }

    interface ChartLegendItemHoverEvent extends ChartEvent {
        element?: any;
        pointIndex?: number | undefined;
        series?: any;
        seriesIndex?: number | undefined;
        text?: string | undefined;
    }

    interface ChartLegendItemLeaveEvent extends ChartEvent {
        element?: any;
        pointIndex?: number | undefined;
        series?: any;
        seriesIndex?: number | undefined;
        text?: string | undefined;
    }

    interface ChartNoteClickEvent extends ChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        series?: any;
        value?: any;
        visual?: any;
    }

    interface ChartNoteHoverEvent extends ChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        series?: any;
        value?: any;
        visual?: any;
    }

    interface ChartNoteLeaveEvent extends ChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        series?: any;
        value?: any;
        visual?: any;
    }

    interface ChartPaneRenderEvent extends ChartEvent {
        pane?: kendo.dataviz.ChartPane | undefined;
        name?: string | undefined;
        index?: number | undefined;
    }

    interface ChartPlotAreaClickEvent extends ChartEvent {
        category?: any;
        element?: any;
        originalEvent?: any;
        value?: any;
        x?: any;
        y?: any;
    }

    interface ChartPlotAreaHoverEvent extends ChartEvent {
        category?: any;
        element?: any;
        originalEvent?: any;
        value?: any;
        x?: any;
        y?: any;
    }

    interface ChartPlotAreaLeaveEvent extends ChartEvent {
    }

    interface ChartRenderEvent extends ChartEvent {
    }

    interface ChartSelectEvent extends ChartEvent {
        axis?: any;
        from?: any;
        to?: any;
    }

    interface ChartSelectEndEvent extends ChartEvent {
        axis?: any;
        from?: any;
        to?: any;
    }

    interface ChartSelectStartEvent extends ChartEvent {
        axis?: any;
        from?: any;
        to?: any;
    }

    interface ChartSeriesClickEvent extends ChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: ChartSeriesClickEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface ChartSeriesHoverEvent extends ChartEvent {
        category?: any;
        categoryPoints?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: ChartSeriesHoverEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface ChartSeriesOverEvent extends ChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: ChartSeriesOverEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface ChartSeriesLeaveEvent extends ChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: ChartSeriesLeaveEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface ChartZoomEvent extends ChartEvent {
        axisRanges?: any;
        delta?: number | undefined;
        originalEvent?: any;
    }

    interface ChartZoomEndEvent extends ChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface ChartZoomStartEvent extends ChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    class Diagram extends kendo.ui.Widget {
        static fn: Diagram;

        options: DiagramOptions;

        dataSource: kendo.data.DataSource;
        connections: kendo.dataviz.diagram.Connection[];
        connectionsDataSource: kendo.data.DataSource;
        shapes: kendo.dataviz.diagram.Shape[];

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Diagram;

        constructor(element: Element, options?: DiagramOptions);

        addConnection(connection: any, undoable: boolean): void;
        addShape(obj: any, undoable: boolean): kendo.dataviz.diagram.Shape;
        alignShapes(direction: string): void;
        boundingBox(items: any): kendo.dataviz.diagram.Rect;
        bringIntoView(obj: any, options: any): void;
        cancelEdit(): void;
        clear(): void;
        connect(source: any, target: any, options: any): void;
        connected(source: any, target: any): void;
        copy(): void;
        createConnection(item: any): void;
        createShape(item: any): void;
        cut(): void;
        destroy(): void;
        documentToModel(point: any): any;
        documentToView(point: any): any;
        edit(item: any): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        focus(): void;
        getConnectionByModelId(id: string): kendo.dataviz.diagram.Connection;
        getConnectionByModelId(id: number): kendo.dataviz.diagram.Connection;
        getConnectionByModelUid(uid: string): kendo.dataviz.diagram.Connection;
        getShapeById(id: string): any;
        getShapeByModelId(id: string): kendo.dataviz.diagram.Shape;
        getShapeByModelId(id: number): kendo.dataviz.diagram.Shape;
        getShapeByModelUid(uid: string): kendo.dataviz.diagram.Shape;
        layerToModel(point: any): any;
        layout(options: any): void;
        load(json: string): void;
        modelToDocument(point: any): any;
        modelToLayer(point: any): any;
        modelToView(point: any): any;
        pan(pan: any): void;
        paste(): void;
        redo(): void;
        remove(items: any, undoable: boolean): void;
        resize(): void;
        save(): void;
        saveAsPdf(): JQueryPromise<any>;
        saveEdit(): void;
        select(): any;
        select(elements: kendo.dataviz.diagram.Connection, options: any): void;
        select(elements: kendo.dataviz.diagram.Shape, options: any): void;
        select(elements: any, options: any): void;
        selectAll(): void;
        selectArea(rect: kendo.dataviz.diagram.Rect): void;
        setConnectionsDataSource(dataSource: kendo.data.DataSource): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        toBack(items: any, undoable: boolean): void;
        toFront(items: any, undoable: boolean): void;
        transformPoint(p: any): void;
        transformRect(r: any): void;
        undo(): void;
        viewToDocument(point: kendo.dataviz.diagram.Point): kendo.dataviz.diagram.Point;
        viewToModel(point: kendo.dataviz.diagram.Point): kendo.dataviz.diagram.Point;
        viewport(): kendo.dataviz.diagram.Rect;
        zoom(): number;
        zoom(zoom: number, point: kendo.dataviz.diagram.Point): void;
    }

    interface DiagramConnectionDefaultsContent {
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        visual?: Function | undefined;
    }

    interface DiagramConnectionDefaultsEditableTool {
        name?: string | undefined;
    }

    interface DiagramConnectionDefaultsEditable {
        drag?: boolean | undefined;
        remove?: boolean | undefined;
        tools?: DiagramConnectionDefaultsEditableTool[] | undefined;
    }

    interface DiagramConnectionDefaultsEndCapFill {
        color?: string | undefined;
    }

    interface DiagramConnectionDefaultsEndCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramConnectionDefaultsEndCap {
        fill?: string | DiagramConnectionDefaultsEndCapFill | undefined;
        stroke?: string | DiagramConnectionDefaultsEndCapStroke | undefined;
        type?: string | undefined;
    }

    interface DiagramConnectionDefaultsHoverStroke {
        color?: string | undefined;
    }

    interface DiagramConnectionDefaultsHover {
        stroke?: DiagramConnectionDefaultsHoverStroke | undefined;
    }

    interface DiagramConnectionDefaultsSelectionHandlesFill {
        color?: string | undefined;
    }

    interface DiagramConnectionDefaultsSelectionHandlesStroke {
        color?: string | undefined;
    }

    interface DiagramConnectionDefaultsSelectionHandles {
        fill?: string | DiagramConnectionDefaultsSelectionHandlesFill | undefined;
        stroke?: DiagramConnectionDefaultsSelectionHandlesStroke | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }

    interface DiagramConnectionDefaultsSelection {
        handles?: DiagramConnectionDefaultsSelectionHandles | undefined;
    }

    interface DiagramConnectionDefaultsStartCapFill {
        color?: string | undefined;
    }

    interface DiagramConnectionDefaultsStartCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramConnectionDefaultsStartCap {
        fill?: string | DiagramConnectionDefaultsStartCapFill | undefined;
        stroke?: string | DiagramConnectionDefaultsStartCapStroke | undefined;
        type?: string | undefined;
    }

    interface DiagramConnectionDefaultsStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramConnectionDefaults {
        content?: DiagramConnectionDefaultsContent | undefined;
        editable?: boolean | DiagramConnectionDefaultsEditable | undefined;
        endCap?: string | DiagramConnectionDefaultsEndCap | undefined;
        fromConnector?: string | undefined;
        hover?: DiagramConnectionDefaultsHover | undefined;
        selectable?: boolean | undefined;
        selection?: DiagramConnectionDefaultsSelection | undefined;
        startCap?: string | DiagramConnectionDefaultsStartCap | undefined;
        stroke?: DiagramConnectionDefaultsStroke | undefined;
        toConnector?: string | undefined;
        type?: string | undefined;
    }

    interface DiagramConnectionContent {
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        visual?: Function | undefined;
    }

    interface DiagramConnectionEditableTool {
        name?: string | undefined;
    }

    interface DiagramConnectionEditable {
        tools?: DiagramConnectionEditableTool[] | undefined;
    }

    interface DiagramConnectionEndCapFill {
        color?: string | undefined;
    }

    interface DiagramConnectionEndCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramConnectionEndCap {
        fill?: string | DiagramConnectionEndCapFill | undefined;
        stroke?: string | DiagramConnectionEndCapStroke | undefined;
        type?: string | undefined;
    }

    interface DiagramConnectionFrom {
        x?: number | undefined;
        y?: number | undefined;
    }

    interface DiagramConnectionHoverStroke {
        color?: string | undefined;
    }

    interface DiagramConnectionHover {
        stroke?: DiagramConnectionHoverStroke | undefined;
    }

    interface DiagramConnectionPoint {
        x?: number | undefined;
        y?: number | undefined;
    }

    interface DiagramConnectionSelectionHandlesFill {
        color?: string | undefined;
    }

    interface DiagramConnectionSelectionHandlesStroke {
        color?: string | undefined;
    }

    interface DiagramConnectionSelectionHandles {
        fill?: string | DiagramConnectionSelectionHandlesFill | undefined;
        stroke?: DiagramConnectionSelectionHandlesStroke | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }

    interface DiagramConnectionSelection {
        handles?: DiagramConnectionSelectionHandles | undefined;
    }

    interface DiagramConnectionStartCapFill {
        color?: string | undefined;
    }

    interface DiagramConnectionStartCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramConnectionStartCap {
        fill?: string | DiagramConnectionStartCapFill | undefined;
        stroke?: string | DiagramConnectionStartCapStroke | undefined;
        type?: string | undefined;
    }

    interface DiagramConnectionStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramConnectionTo {
        x?: number | undefined;
        y?: number | undefined;
    }

    interface DiagramConnection {
        content?: DiagramConnectionContent | undefined;
        editable?: boolean | DiagramConnectionEditable | undefined;
        endCap?: string | DiagramConnectionEndCap | undefined;
        from?: string | DiagramConnectionFrom | undefined;
        fromConnector?: string | undefined;
        hover?: DiagramConnectionHover | undefined;
        points?: DiagramConnectionPoint[] | undefined;
        selection?: DiagramConnectionSelection | undefined;
        startCap?: string | DiagramConnectionStartCap | undefined;
        stroke?: DiagramConnectionStroke | undefined;
        to?: string | DiagramConnectionTo | undefined;
        toConnector?: string | undefined;
        type?: string | undefined;
    }

    interface DiagramEditableDragSnap {
        size?: number | undefined;
    }

    interface DiagramEditableDrag {
        snap?: boolean | DiagramEditableDragSnap | undefined;
    }

    interface DiagramEditableResizeHandlesFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramEditableResizeHandlesHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramEditableResizeHandlesHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramEditableResizeHandlesHover {
        fill?: string | DiagramEditableResizeHandlesHoverFill | undefined;
        stroke?: DiagramEditableResizeHandlesHoverStroke | undefined;
    }

    interface DiagramEditableResizeHandlesStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramEditableResizeHandles {
        fill?: string | DiagramEditableResizeHandlesFill | undefined;
        height?: number | undefined;
        hover?: DiagramEditableResizeHandlesHover | undefined;
        stroke?: DiagramEditableResizeHandlesStroke | undefined;
        width?: number | undefined;
    }

    interface DiagramEditableResize {
        handles?: DiagramEditableResizeHandles | undefined;
    }

    interface DiagramEditableRotateFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramEditableRotateStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramEditableRotate {
        fill?: DiagramEditableRotateFill | undefined;
        stroke?: DiagramEditableRotateStroke | undefined;
    }

    interface DiagramEditableTool {
        name?: string | undefined;
        step?: number | undefined;
    }

    interface DiagramEditable {
        connectionTemplate?: string | Function | undefined;
        drag?: boolean | DiagramEditableDrag | undefined;
        remove?: boolean | undefined;
        resize?: boolean | DiagramEditableResize | undefined;
        rotate?: boolean | DiagramEditableRotate | undefined;
        shapeTemplate?: string | Function | undefined;
        tools?: DiagramEditableTool[] | undefined;
    }

    interface DiagramLayoutGrid {
        componentSpacingX?: number | undefined;
        componentSpacingY?: number | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
        width?: number | undefined;
    }

    interface DiagramLayout {
        endRadialAngle?: number | undefined;
        grid?: DiagramLayoutGrid | undefined;
        horizontalSeparation?: number | undefined;
        iterations?: number | undefined;
        layerSeparation?: number | undefined;
        nodeDistance?: number | undefined;
        radialFirstLevelSeparation?: number | undefined;
        radialSeparation?: number | undefined;
        startRadialAngle?: number | undefined;
        subtype?: string | undefined;
        tipOverTreeStartLevel?: number | undefined;
        type?: string | undefined;
        underneathHorizontalOffset?: number | undefined;
        underneathVerticalSeparation?: number | undefined;
        underneathVerticalTopOffset?: number | undefined;
        verticalSeparation?: number | undefined;
    }

    interface DiagramPannable {
        key?: string | undefined;
    }

    interface DiagramPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface DiagramPdf {
        author?: string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        fileName?: string | undefined;
        forceProxy?: boolean | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: DiagramPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface DiagramSelectableStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramSelectable {
        key?: string | undefined;
        multiple?: boolean | undefined;
        stroke?: DiagramSelectableStroke | undefined;
    }

    interface DiagramShapeDefaultsConnectorDefaultsFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorDefaultsHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorDefaultsHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorDefaultsHover {
        fill?: string | DiagramShapeDefaultsConnectorDefaultsHoverFill | undefined;
        stroke?: string | DiagramShapeDefaultsConnectorDefaultsHoverStroke | undefined;
    }

    interface DiagramShapeDefaultsConnectorDefaultsStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorDefaults {
        width?: number | undefined;
        height?: number | undefined;
        hover?: DiagramShapeDefaultsConnectorDefaultsHover | undefined;
        fill?: string | DiagramShapeDefaultsConnectorDefaultsFill | undefined;
        stroke?: string | DiagramShapeDefaultsConnectorDefaultsStroke | undefined;
    }

    interface DiagramShapeDefaultsConnectorFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeDefaultsConnectorHover {
        fill?: string | DiagramShapeDefaultsConnectorHoverFill | undefined;
        stroke?: string | DiagramShapeDefaultsConnectorHoverStroke | undefined;
    }

    interface DiagramShapeDefaultsConnectorStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeDefaultsConnector {
        name?: string | undefined;
        position?: Function | undefined;
        width?: number | undefined;
        height?: number | undefined;
        hover?: DiagramShapeDefaultsConnectorHover | undefined;
        fill?: string | DiagramShapeDefaultsConnectorFill | undefined;
        stroke?: string | DiagramShapeDefaultsConnectorStroke | undefined;
    }

    interface DiagramShapeDefaultsContent {
        align?: string | undefined;
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
    }

    interface DiagramShapeDefaultsEditableTool {
        name?: string | undefined;
        step?: number | undefined;
    }

    interface DiagramShapeDefaultsEditable {
        connect?: boolean | undefined;
        drag?: boolean | undefined;
        remove?: boolean | undefined;
        tools?: DiagramShapeDefaultsEditableTool[] | undefined;
    }

    interface DiagramShapeDefaultsFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeDefaultsFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: DiagramShapeDefaultsFillGradientStop[] | undefined;
    }

    interface DiagramShapeDefaultsFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: DiagramShapeDefaultsFillGradient | undefined;
    }

    interface DiagramShapeDefaultsHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeDefaultsHover {
        fill?: string | DiagramShapeDefaultsHoverFill | undefined;
    }

    interface DiagramShapeDefaultsRotation {
        angle?: number | undefined;
    }

    interface DiagramShapeDefaultsStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeDefaults {
        connectors?: DiagramShapeDefaultsConnector[] | undefined;
        connectorDefaults?: DiagramShapeDefaultsConnectorDefaults | undefined;
        content?: DiagramShapeDefaultsContent | undefined;
        editable?: boolean | DiagramShapeDefaultsEditable | undefined;
        fill?: string | DiagramShapeDefaultsFill | undefined;
        height?: number | undefined;
        hover?: DiagramShapeDefaultsHover | undefined;
        minHeight?: number | undefined;
        minWidth?: number | undefined;
        path?: string | undefined;
        rotation?: DiagramShapeDefaultsRotation | undefined;
        selectable?: boolean | undefined;
        source?: string | undefined;
        stroke?: DiagramShapeDefaultsStroke | undefined;
        type?: string | undefined;
        visual?: Function | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }

    interface DiagramShapeConnectorDefaultsFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeConnectorDefaultsHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeConnectorDefaultsHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeConnectorDefaultsHover {
        fill?: string | DiagramShapeConnectorDefaultsHoverFill | undefined;
        stroke?: string | DiagramShapeConnectorDefaultsHoverStroke | undefined;
    }

    interface DiagramShapeConnectorDefaultsStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeConnectorDefaults {
        width?: number | undefined;
        height?: number | undefined;
        hover?: DiagramShapeConnectorDefaultsHover | undefined;
        fill?: string | DiagramShapeConnectorDefaultsFill | undefined;
        stroke?: string | DiagramShapeConnectorDefaultsStroke | undefined;
    }

    interface DiagramShapeConnectorFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeConnectorHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeConnectorHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeConnectorHover {
        fill?: string | DiagramShapeConnectorHoverFill | undefined;
        stroke?: string | DiagramShapeConnectorHoverStroke | undefined;
    }

    interface DiagramShapeConnectorStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShapeConnector {
        description?: string | undefined;
        name?: string | undefined;
        position?: Function | undefined;
        width?: number | undefined;
        height?: number | undefined;
        hover?: DiagramShapeConnectorHover | undefined;
        fill?: string | DiagramShapeConnectorFill | undefined;
        stroke?: string | DiagramShapeConnectorStroke | undefined;
    }

    interface DiagramShapeContent {
        align?: string | undefined;
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
    }

    interface DiagramShapeEditableTool {
        name?: string | undefined;
        step?: number | undefined;
    }

    interface DiagramShapeEditable {
        connect?: boolean | undefined;
        tools?: DiagramShapeEditableTool[] | undefined;
    }

    interface DiagramShapeFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: DiagramShapeFillGradientStop[] | undefined;
    }

    interface DiagramShapeFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: DiagramShapeFillGradient | undefined;
    }

    interface DiagramShapeHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface DiagramShapeHover {
        fill?: string | DiagramShapeHoverFill | undefined;
    }

    interface DiagramShapeRotation {
        angle?: number | undefined;
    }

    interface DiagramShapeStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface DiagramShape {
        connectors?: DiagramShapeConnector[] | undefined;
        connectorDefaults?: DiagramShapeConnectorDefaults | undefined;
        content?: DiagramShapeContent | undefined;
        editable?: boolean | DiagramShapeEditable | undefined;
        fill?: string | DiagramShapeFill | undefined;
        height?: number | undefined;
        hover?: DiagramShapeHover | undefined;
        id?: string | undefined;
        minHeight?: number | undefined;
        minWidth?: number | undefined;
        path?: string | undefined;
        rotation?: DiagramShapeRotation | undefined;
        source?: string | undefined;
        stroke?: DiagramShapeStroke | undefined;
        type?: string | undefined;
        visual?: Function | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }

    interface DiagramExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
        cors?: string | undefined;
    }

    interface DiagramExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface DiagramSelectOptions {
        addToSelection?: boolean | undefined;
    }

    interface DiagramOptions {
        name?: string | undefined;
        autoBind?: boolean | undefined;
        connectionDefaults?: DiagramConnectionDefaults | undefined;
        connections?: DiagramConnection[] | undefined;
        connectionsDataSource?: any | any | kendo.data.DataSource | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        editable?: boolean | DiagramEditable | undefined;
        layout?: DiagramLayout | undefined;
        pannable?: boolean | DiagramPannable | undefined;
        pdf?: DiagramPdf | undefined;
        selectable?: boolean | DiagramSelectable | undefined;
        shapeDefaults?: DiagramShapeDefaults | undefined;
        shapes?: DiagramShape[] | undefined;
        template?: string | Function | undefined;
        theme?: string | undefined;
        zoom?: number | undefined;
        zoomMax?: number | undefined;
        zoomMin?: number | undefined;
        zoomRate?: number | undefined;
        add?(e: DiagramAddEvent): void;
        cancel?(e: DiagramCancelEvent): void;
        change?(e: DiagramChangeEvent): void;
        click?(e: DiagramClickEvent): void;
        dataBound?(e: DiagramDataBoundEvent): void;
        drag?(e: DiagramDragEvent): void;
        dragEnd?(e: DiagramDragEndEvent): void;
        dragStart?(e: DiagramDragStartEvent): void;
        edit?(e: DiagramEditEvent): void;
        itemBoundsChange?(e: DiagramItemBoundsChangeEvent): void;
        itemRotate?(e: DiagramItemRotateEvent): void;
        mouseEnter?(e: DiagramMouseEnterEvent): void;
        mouseLeave?(e: DiagramMouseLeaveEvent): void;
        pan?(e: DiagramPanEvent): void;
        remove?(e: DiagramRemoveEvent): void;
        save?(e: DiagramSaveEvent): void;
        select?(e: DiagramSelectEvent): void;
        toolBarClick?(e: DiagramToolBarClickEvent): void;
        zoomEnd?(e: DiagramZoomEndEvent): void;
        zoomStart?(e: DiagramZoomStartEvent): void;
    }
    interface DiagramEvent {
        sender: Diagram;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DiagramAddEvent extends DiagramEvent {
        connection?: kendo.dataviz.diagram.Connection | undefined;
        shape?: kendo.dataviz.diagram.Shape | undefined;
    }

    interface DiagramCancelEvent extends DiagramEvent {
        container?: JQuery | undefined;
        connection?: kendo.data.Model | undefined;
        shape?: kendo.data.Model | undefined;
    }

    interface DiagramChangeEvent extends DiagramEvent {
        added?: any;
        removed?: any;
    }

    interface DiagramClickEvent extends DiagramEvent {
        item?: any;
        meta?: any;
        point?: kendo.dataviz.diagram.Point | undefined;
    }

    interface DiagramDataBoundEvent extends DiagramEvent {
    }

    interface DiagramDragEvent extends DiagramEvent {
        connectionHandle?: string | undefined;
        connections?: any;
        shapes?: any;
    }

    interface DiagramDragEndEvent extends DiagramEvent {
        connectionHandle?: string | undefined;
        connections?: any;
        shapes?: any;
    }

    interface DiagramDragStartEvent extends DiagramEvent {
        connectionHandle?: string | undefined;
        connections?: any;
        shapes?: any;
    }

    interface DiagramEditEvent extends DiagramEvent {
        container?: JQuery | undefined;
        connection?: kendo.data.Model | undefined;
        shape?: kendo.data.Model | undefined;
    }

    interface DiagramItemBoundsChangeEvent extends DiagramEvent {
        bounds?: kendo.dataviz.diagram.Rect | undefined;
        item?: kendo.dataviz.diagram.Shape | undefined;
    }

    interface DiagramItemRotateEvent extends DiagramEvent {
        item?: kendo.dataviz.diagram.Shape | undefined;
    }

    interface DiagramMouseEnterEvent extends DiagramEvent {
        item?: any;
    }

    interface DiagramMouseLeaveEvent extends DiagramEvent {
        item?: any;
    }

    interface DiagramPanEvent extends DiagramEvent {
        pan?: kendo.dataviz.diagram.Point | undefined;
    }

    interface DiagramRemoveEvent extends DiagramEvent {
        connection?: kendo.dataviz.diagram.Connection | undefined;
        shape?: kendo.dataviz.diagram.Shape | undefined;
    }

    interface DiagramSaveEvent extends DiagramEvent {
        container?: JQuery | undefined;
        connection?: kendo.data.Model | undefined;
        shape?: kendo.data.Model | undefined;
    }

    interface DiagramSelectEvent extends DiagramEvent {
        selected?: any;
        deselected?: any;
    }

    interface DiagramToolBarClickEvent extends DiagramEvent {
        action?: string | undefined;
        shapes?: any;
        connections?: any;
        target?: JQuery | undefined;
    }

    interface DiagramZoomEndEvent extends DiagramEvent {
        point?: kendo.dataviz.diagram.Point | undefined;
        zoom?: number | undefined;
    }

    interface DiagramZoomStartEvent extends DiagramEvent {
        point?: kendo.dataviz.diagram.Point | undefined;
        zoom?: number | undefined;
    }

    class LinearGauge extends kendo.ui.Widget {
        static fn: LinearGauge;

        options: LinearGaugeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): LinearGauge;

        constructor(element: Element, options?: LinearGaugeOptions);

        allValues(values: any): any;
        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        redraw(): void;
        resize(force?: boolean): void;
        setOptions(options: any): void;
        svg(): void;
        imageDataURL(): string;
        value(): void;
    }

    interface LinearGaugeGaugeAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface LinearGaugeGaugeAreaMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface LinearGaugeGaugeArea {
        background?: string | undefined;
        border?: LinearGaugeGaugeAreaBorder | undefined;
        height?: number | undefined;
        margin?: number | LinearGaugeGaugeAreaMargin | undefined;
        width?: number | undefined;
    }

    interface LinearGaugePointerItemBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface LinearGaugePointerItemTrackBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface LinearGaugePointerItemTrack {
        border?: LinearGaugePointerItemTrackBorder | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
    }

    interface LinearGaugePointerItem {
        border?: LinearGaugePointerItemBorder | undefined;
        color?: string | undefined;
        margin?: number | any | undefined;
        opacity?: number | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        track?: LinearGaugePointerItemTrack | undefined;
        value?: number | undefined;
    }

    interface LinearGaugeScaleLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface LinearGaugeScaleLabelsMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface LinearGaugeScaleLabelsPadding {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface LinearGaugeScaleLabels {
        background?: string | undefined;
        border?: LinearGaugeScaleLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | LinearGaugeScaleLabelsMargin | undefined;
        padding?: number | LinearGaugeScaleLabelsPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface LinearGaugeScaleLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface LinearGaugeScaleMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface LinearGaugeScaleMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface LinearGaugeScaleRange {
        from?: number | undefined;
        to?: number | undefined;
        opacity?: number | undefined;
        color?: string | undefined;
    }

    interface LinearGaugeScale {
        line?: LinearGaugeScaleLine | undefined;
        labels?: LinearGaugeScaleLabels | undefined;
        majorTicks?: LinearGaugeScaleMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorTicks?: LinearGaugeScaleMinorTicks | undefined;
        minorUnit?: number | undefined;
        mirror?: boolean | undefined;
        ranges?: LinearGaugeScaleRange[] | undefined;
        rangePlaceholderColor?: string | undefined;
        rangeSize?: number | undefined;
        reverse?: boolean | undefined;
        vertical?: boolean | undefined;
    }

    interface LinearGaugeExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface LinearGaugeExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface LinearGaugeOptions {
        name?: string | undefined;
        gaugeArea?: LinearGaugeGaugeArea | undefined;
        pointer?: LinearGaugePointerItem[] | undefined;
        renderAs?: string | undefined;
        scale?: LinearGaugeScale | undefined;
        theme?: string | undefined;
        transitions?: boolean | undefined;
    }
    interface LinearGaugeEvent {
        sender: LinearGauge;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Map extends kendo.ui.Widget {
        static fn: Map;

        options: MapOptions;

        layers: any;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Map;

        constructor(element: Element, options?: MapOptions);

        center(): kendo.dataviz.map.Location;
        center(center: any): void;
        center(center: kendo.dataviz.map.Location): void;
        destroy(): void;
        eventOffset(e: any): kendo.geometry.Point;
        eventOffset(e: JQueryEventObject): kendo.geometry.Point;
        eventToLayer(e: any): kendo.geometry.Point;
        eventToLayer(e: JQueryEventObject): kendo.geometry.Point;
        eventToLocation(e: any): kendo.geometry.Point;
        eventToLocation(e: JQueryEventObject): kendo.geometry.Point;
        eventToView(e: any): kendo.geometry.Point;
        eventToView(e: JQueryEventObject): kendo.geometry.Point;
        extent(): kendo.dataviz.map.Extent;
        extent(extent: kendo.dataviz.map.Extent): void;
        layerToLocation(point: any, zoom: number): kendo.dataviz.map.Location;
        layerToLocation(point: kendo.geometry.Point, zoom: number): kendo.dataviz.map.Location;
        locationToLayer(location: any, zoom: number): kendo.geometry.Point;
        locationToLayer(location: kendo.dataviz.map.Location, zoom: number): kendo.geometry.Point;
        locationToView(location: any): kendo.geometry.Point;
        locationToView(location: kendo.dataviz.map.Location): kendo.geometry.Point;
        resize(force?: boolean): void;
        setOptions(options: any): void;
        viewSize(): any;
        viewToLocation(point: any, zoom: number): kendo.dataviz.map.Location;
        viewToLocation(point: kendo.geometry.Point, zoom: number): kendo.dataviz.map.Location;
        zoom(): number;
        zoom(level: number): void;
    }

    interface MapControlsAttribution {
        position?: string | undefined;
    }

    interface MapControlsNavigator {
        position?: string | undefined;
    }

    interface MapControlsZoom {
        position?: string | undefined;
    }

    interface MapControls {
        attribution?: boolean | MapControlsAttribution | undefined;
        navigator?: boolean | MapControlsNavigator | undefined;
        zoom?: boolean | MapControlsZoom | undefined;
    }

    interface MapLayerDefaultsBing {
        attribution?: string | undefined;
        opacity?: number | undefined;
        key?: string | undefined;
        imagerySet?: string | undefined;
        culture?: string | undefined;
    }

    interface MapLayerDefaultsBubbleStyleFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface MapLayerDefaultsBubbleStyleStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface MapLayerDefaultsBubbleStyle {
        fill?: MapLayerDefaultsBubbleStyleFill | undefined;
        stroke?: MapLayerDefaultsBubbleStyleStroke | undefined;
    }

    interface MapLayerDefaultsBubble {
        attribution?: string | undefined;
        opacity?: number | undefined;
        maxSize?: number | undefined;
        minSize?: number | undefined;
        style?: MapLayerDefaultsBubbleStyle | undefined;
        symbol?: string | Function | undefined;
    }

    interface MapLayerDefaultsMarkerTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapLayerDefaultsMarkerTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapLayerDefaultsMarkerTooltipAnimation {
        close?: MapLayerDefaultsMarkerTooltipAnimationClose | undefined;
        open?: MapLayerDefaultsMarkerTooltipAnimationOpen | undefined;
    }

    interface MapLayerDefaultsMarkerTooltipContent {
        url?: string | undefined;
    }

    interface MapLayerDefaultsMarkerTooltip {
        autoHide?: boolean | undefined;
        animation?: MapLayerDefaultsMarkerTooltipAnimation | undefined;
        content?: string | Function | MapLayerDefaultsMarkerTooltipContent | undefined;
        template?: string | undefined;
        callout?: boolean | undefined;
        iframe?: boolean | undefined;
        height?: number | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
    }

    interface MapLayerDefaultsMarker {
        shape?: string | undefined;
        tooltip?: MapLayerDefaultsMarkerTooltip | undefined;
        opacity?: number | undefined;
    }

    interface MapLayerDefaultsShapeStyleFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface MapLayerDefaultsShapeStyleStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface MapLayerDefaultsShapeStyle {
        fill?: MapLayerDefaultsShapeStyleFill | undefined;
        stroke?: MapLayerDefaultsShapeStyleStroke | undefined;
    }

    interface MapLayerDefaultsShape {
        attribution?: string | undefined;
        opacity?: number | undefined;
        style?: MapLayerDefaultsShapeStyle | undefined;
    }

    interface MapLayerDefaultsTile {
        urlTemplate?: string | undefined;
        attribution?: string | undefined;
        subdomains?: any;
        opacity?: number | undefined;
    }

    interface MapLayerDefaults {
        marker?: MapLayerDefaultsMarker | undefined;
        shape?: MapLayerDefaultsShape | undefined;
        bubble?: MapLayerDefaultsBubble | undefined;
        tileSize?: number | undefined;
        tile?: MapLayerDefaultsTile | undefined;
        bing?: MapLayerDefaultsBing | undefined;
    }

    interface MapLayerStyleFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface MapLayerStyleStroke {
        color?: string | undefined;
        dashType?: number | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface MapLayerStyle {
        fill?: MapLayerStyleFill | undefined;
        stroke?: MapLayerStyleStroke | undefined;
    }

    interface MapLayerTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapLayerTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapLayerTooltipAnimation {
        close?: MapLayerTooltipAnimationClose | undefined;
        open?: MapLayerTooltipAnimationOpen | undefined;
    }

    interface MapLayerTooltipContent {
        url?: string | undefined;
    }

    interface MapLayerTooltip {
        autoHide?: boolean | undefined;
        animation?: MapLayerTooltipAnimation | undefined;
        content?: string | Function | MapLayerTooltipContent | undefined;
        template?: string | undefined;
        callout?: boolean | undefined;
        iframe?: boolean | undefined;
        height?: number | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
    }

    interface MapLayer {
        attribution?: string | undefined;
        autoBind?: boolean | undefined;
        dataSource?: any | any | kendo.data.DataSource | undefined;
        extent?: any | kendo.dataviz.map.Extent | undefined;
        key?: string | undefined;
        imagerySet?: string | undefined;
        culture?: string | undefined;
        locationField?: string | undefined;
        shape?: string | undefined;
        tileSize?: number | undefined;
        titleField?: string | undefined;
        tooltip?: MapLayerTooltip | undefined;
        maxSize?: number | undefined;
        minSize?: number | undefined;
        maxZoom?: number | undefined;
        minZoom?: number | undefined;
        opacity?: number | undefined;
        subdomains?: any;
        symbol?: string | Function | undefined;
        type?: string | undefined;
        style?: MapLayerStyle | undefined;
        urlTemplate?: string | undefined;
        valueField?: string | undefined;
        zIndex?: number | undefined;
    }

    interface MapMarkerDefaultsTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapMarkerDefaultsTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapMarkerDefaultsTooltipAnimation {
        close?: MapMarkerDefaultsTooltipAnimationClose | undefined;
        open?: MapMarkerDefaultsTooltipAnimationOpen | undefined;
    }

    interface MapMarkerDefaultsTooltipContent {
        url?: string | undefined;
    }

    interface MapMarkerDefaultsTooltip {
        autoHide?: boolean | undefined;
        animation?: MapMarkerDefaultsTooltipAnimation | undefined;
        content?: string | Function | MapMarkerDefaultsTooltipContent | undefined;
        template?: string | undefined;
        callout?: boolean | undefined;
        iframe?: boolean | undefined;
        height?: number | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
    }

    interface MapMarkerDefaults {
        shape?: string | undefined;
        tooltip?: MapMarkerDefaultsTooltip | undefined;
    }

    interface MapMarkerTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapMarkerTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MapMarkerTooltipAnimation {
        close?: MapMarkerTooltipAnimationClose | undefined;
        open?: MapMarkerTooltipAnimationOpen | undefined;
    }

    interface MapMarkerTooltipContent {
        url?: string | undefined;
    }

    interface MapMarkerTooltip {
        autoHide?: boolean | undefined;
        animation?: MapMarkerTooltipAnimation | undefined;
        content?: string | Function | MapMarkerTooltipContent | undefined;
        template?: string | undefined;
        callout?: boolean | undefined;
        iframe?: boolean | undefined;
        height?: number | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
    }

    interface MapMarker {
        location?: any | kendo.dataviz.map.Location | undefined;
        shape?: string | undefined;
        title?: string | undefined;
        tooltip?: MapMarkerTooltip | undefined;
    }

    interface MapMessages {
        tileTitle?: string | undefined;
    }

    interface MapOptions {
        name?: string | undefined;
        center?: any | kendo.dataviz.map.Location | undefined;
        controls?: MapControls | undefined;
        layerDefaults?: MapLayerDefaults | undefined;
        layers?: MapLayer[] | undefined;
        markerDefaults?: MapMarkerDefaults | undefined;
        markers?: MapMarker[] | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        minSize?: number | undefined;
        messages?: MapMessages | undefined;
        pannable?: boolean | undefined;
        wraparound?: boolean | undefined;
        zoom?: number | undefined;
        zoomable?: boolean | undefined;
        beforeReset?(e: MapBeforeResetEvent): void;
        click?(e: MapClickEvent): void;
        markerActivate?(e: MapMarkerActivateEvent): void;
        markerCreated?(e: MapMarkerCreatedEvent): void;
        markerClick?(e: MapMarkerClickEvent): void;
        pan?(e: MapPanEvent): void;
        panEnd?(e: MapPanEndEvent): void;
        reset?(e: MapResetEvent): void;
        shapeClick?(e: MapShapeClickEvent): void;
        shapeCreated?(e: MapShapeCreatedEvent): void;
        shapeFeatureCreated?(e: MapShapeFeatureCreatedEvent): void;
        shapeMouseEnter?(e: MapShapeMouseEnterEvent): void;
        shapeMouseLeave?(e: MapShapeMouseLeaveEvent): void;
        zoomStart?(e: MapZoomStartEvent): void;
        zoomEnd?(e: MapZoomEndEvent): void;
    }
    interface MapEvent {
        sender: Map;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MapBeforeResetEvent extends MapEvent {
    }

    interface MapClickEvent extends MapEvent {
        location?: kendo.dataviz.map.Location | undefined;
        originalEvent?: any;
    }

    interface MapMarkerActivateEvent extends MapEvent {
        marker?: kendo.dataviz.map.Marker | undefined;
        layer?: kendo.dataviz.map.Marker | undefined;
    }

    interface MapMarkerCreatedEvent extends MapEvent {
        marker?: kendo.dataviz.map.Marker | undefined;
        layer?: kendo.dataviz.map.Marker | undefined;
    }

    interface MapMarkerClickEvent extends MapEvent {
        marker?: kendo.dataviz.map.Marker | undefined;
        layer?: kendo.dataviz.map.Marker | undefined;
    }

    interface MapPanEvent extends MapEvent {
        origin?: kendo.dataviz.map.Location | undefined;
        center?: kendo.dataviz.map.Location | undefined;
        originalEvent?: any;
    }

    interface MapPanEndEvent extends MapEvent {
        origin?: kendo.dataviz.map.Location | undefined;
        center?: kendo.dataviz.map.Location | undefined;
        originalEvent?: any;
    }

    interface MapResetEvent extends MapEvent {
    }

    interface MapShapeClickEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape | undefined;
        shape?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface MapShapeCreatedEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape | undefined;
        shape?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface MapShapeFeatureCreatedEvent extends MapEvent {
        dataItem?: any;
        layer?: kendo.dataviz.map.layer.Shape | undefined;
        group?: kendo.drawing.Group | undefined;
        properties?: any;
    }

    interface MapShapeMouseEnterEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape | undefined;
        shape?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface MapShapeMouseLeaveEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape | undefined;
        shape?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface MapZoomStartEvent extends MapEvent {
        originalEvent?: any;
    }

    interface MapZoomEndEvent extends MapEvent {
        originalEvent?: any;
    }

    class QRCode extends kendo.ui.Widget {
        static fn: QRCode;

        options: QRCodeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): QRCode;

        constructor(element: Element, options?: QRCodeOptions);

        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        imageDataURL(): string;
        redraw(): void;
        resize(force?: boolean): void;
        setOptions(options: any): void;
        svg(): string;
        value(options: string): void;
        value(options: number): void;
    }

    interface QRCodeBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface QRCodeOverlay {
        height?: number | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | undefined;
    }

    interface QRCodeExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface QRCodeExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface QRCodeOptions {
        name?: string | undefined;
        background?: string | undefined;
        border?: QRCodeBorder | undefined;
        color?: string | undefined;
        encoding?: string | undefined;
        errorCorrection?: string | undefined;
        overlay?: QRCodeOverlay | undefined;
        padding?: number | undefined;
        renderAs?: string | undefined;
        size?: number | string | undefined;
        value?: number | string | undefined;
    }
    interface QRCodeEvent {
        sender: QRCode;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class RadialGauge extends kendo.ui.Widget {
        static fn: RadialGauge;

        options: RadialGaugeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): RadialGauge;

        constructor(element: Element, options?: RadialGaugeOptions);

        allValues(values?: any): any;
        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        redraw(): void;
        resize(force?: boolean): void;
        setOptions(options: any): void;
        svg(): void;
        imageDataURL(): string;
        value(): void;
    }

    interface RadialGaugeGaugeAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface RadialGaugeGaugeAreaMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface RadialGaugeGaugeArea {
        background?: string | undefined;
        border?: RadialGaugeGaugeAreaBorder | undefined;
        height?: number | undefined;
        margin?: number | RadialGaugeGaugeAreaMargin | undefined;
        width?: number | undefined;
    }

    interface RadialGaugePointerItemCap {
        color?: string | undefined;
        size?: number | undefined;
    }

    interface RadialGaugePointerItem {
        cap?: RadialGaugePointerItemCap | undefined;
        color?: string | undefined;
        length?: number | undefined;
        value?: number | undefined;
    }

    interface RadialGaugeScaleLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface RadialGaugeScaleLabelsMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface RadialGaugeScaleLabelsPadding {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface RadialGaugeScaleLabels {
        background?: string | undefined;
        border?: RadialGaugeScaleLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | RadialGaugeScaleLabelsMargin | undefined;
        padding?: number | RadialGaugeScaleLabelsPadding | undefined;
        position?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface RadialGaugeScaleMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface RadialGaugeScaleMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface RadialGaugeScaleRange {
        from?: number | undefined;
        to?: number | undefined;
        opacity?: number | undefined;
        color?: string | undefined;
    }

    interface RadialGaugeScale {
        endAngle?: number | undefined;
        labels?: RadialGaugeScaleLabels | undefined;
        majorTicks?: RadialGaugeScaleMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorTicks?: RadialGaugeScaleMinorTicks | undefined;
        minorUnit?: number | undefined;
        ranges?: RadialGaugeScaleRange[] | undefined;
        rangePlaceholderColor?: string | undefined;
        rangeSize?: number | undefined;
        rangeDistance?: number | undefined;
        reverse?: boolean | undefined;
        startAngle?: number | undefined;
    }

    interface RadialGaugeExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface RadialGaugeExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface RadialGaugeOptions {
        name?: string | undefined;
        gaugeArea?: RadialGaugeGaugeArea | undefined;
        pointer?: RadialGaugePointerItem[] | undefined;
        renderAs?: string | undefined;
        scale?: RadialGaugeScale | undefined;
        theme?: string | undefined;
        transitions?: boolean | undefined;
    }
    interface RadialGaugeEvent {
        sender: RadialGauge;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Sparkline extends kendo.ui.Widget {
        static fn: Sparkline;

        options: SparklineOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Sparkline;

        constructor(element: Element, options?: SparklineOptions);

        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        refresh(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        svg(): string;
        imageDataURL(): string;
    }

    interface SparklineCategoryAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineCategoryAxisItemCrosshair {
        color?: string | undefined;
        width?: number | undefined;
        opacity?: number | undefined;
        dashType?: number | undefined;
        visible?: boolean | undefined;
        tooltip?: SparklineCategoryAxisItemCrosshairTooltip | undefined;
    }

    interface SparklineCategoryAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemLabels {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        mirror?: boolean | undefined;
        padding?: number | any | undefined;
        rotation?: number | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        culture?: string | undefined;
        dateFormats?: any;
    }

    interface SparklineCategoryAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineCategoryAxisItemMajorTicks {
        size?: number | undefined;
        visible?: boolean | undefined;
        color?: string | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineCategoryAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineCategoryAxisItemMinorTicks {
        size?: number | undefined;
        visible?: boolean | undefined;
        color?: string | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineCategoryAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface SparklineCategoryAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: SparklineCategoryAxisItemNotesDataItemIcon | undefined;
        label?: SparklineCategoryAxisItemNotesDataItemLabel | undefined;
        line?: SparklineCategoryAxisItemNotesDataItemLine | undefined;
    }

    interface SparklineCategoryAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotesIcon {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineCategoryAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotesLabel {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface SparklineCategoryAxisItemNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface SparklineCategoryAxisItemNotes {
        position?: string | undefined;
        icon?: SparklineCategoryAxisItemNotesIcon | undefined;
        label?: SparklineCategoryAxisItemNotesLabel | undefined;
        line?: SparklineCategoryAxisItemNotesLine | undefined;
        data?: SparklineCategoryAxisItemNotesDataItem[] | undefined;
    }

    interface SparklineCategoryAxisItemPlotBand {
        from?: number | undefined;
        to?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface SparklineCategoryAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineCategoryAxisItemTitle {
        background?: string | undefined;
        border?: SparklineCategoryAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | any | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineCategoryAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        categories?: any;
        color?: string | undefined;
        field?: string | undefined;
        justified?: boolean | undefined;
        labels?: SparklineCategoryAxisItemLabels | undefined;
        line?: SparklineCategoryAxisItemLine | undefined;
        majorGridLines?: SparklineCategoryAxisItemMajorGridLines | undefined;
        majorTicks?: SparklineCategoryAxisItemMajorTicks | undefined;
        minorGridLines?: SparklineCategoryAxisItemMinorGridLines | undefined;
        minorTicks?: SparklineCategoryAxisItemMinorTicks | undefined;
        name?: string | undefined;
        plotBands?: SparklineCategoryAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        title?: SparklineCategoryAxisItemTitle | undefined;
        type?: string | undefined;
        autoBaseUnitSteps?: any;
        baseUnit?: string | undefined;
        baseUnitStep?: any;
        max?: any;
        min?: any;
        roundToBaseUnit?: boolean | undefined;
        weekStartDay?: number | undefined;
        maxDateGroups?: number | undefined;
        maxDivisions?: number | undefined;
        visible?: boolean | undefined;
        crosshair?: SparklineCategoryAxisItemCrosshair | undefined;
        notes?: SparklineCategoryAxisItemNotes | undefined;
    }

    interface SparklineChartAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineChartArea {
        background?: string | undefined;
        opacity?: number | undefined;
        border?: SparklineChartAreaBorder | undefined;
        height?: number | undefined;
        margin?: number | any | undefined;
        width?: number | undefined;
    }

    interface SparklinePlotAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklinePlotArea {
        background?: string | undefined;
        opacity?: number | undefined;
        border?: SparklinePlotAreaBorder | undefined;
        margin?: number | any | undefined;
    }

    interface SparklineSeriesItemBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        opacity?: number | Function | undefined;
        width?: number | Function | undefined;
    }

    interface SparklineSeriesItemConnectors {
        color?: string | undefined;
        padding?: number | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesItemHighlightBorder {
        width?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface SparklineSeriesItemHighlight {
        border?: SparklineSeriesItemHighlightBorder | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineSeriesItemLabelsBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface SparklineSeriesItemLabels {
        align?: string | undefined;
        background?: string | Function | undefined;
        border?: SparklineSeriesItemLabelsBorder | undefined;
        color?: string | Function | undefined;
        distance?: number | undefined;
        font?: string | Function | undefined;
        format?: string | Function | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        position?: string | Function | undefined;
        template?: string | Function | undefined;
        visible?: boolean | Function | undefined;
    }

    interface SparklineSeriesItemLine {
        color?: string | undefined;
        opacity?: number | undefined;
        width?: string | undefined;
        style?: string | undefined;
    }

    interface SparklineSeriesItemMarkersBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface SparklineSeriesItemMarkers {
        background?: string | Function | undefined;
        border?: Function | SparklineSeriesItemMarkersBorder | undefined;
        size?: number | Function | undefined;
        type?: string | Function | undefined;
        visible?: boolean | Function | undefined;
        rotation?: number | Function | undefined;
    }

    interface SparklineSeriesItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesItemNotesIcon {
        background?: string | undefined;
        border?: SparklineSeriesItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineSeriesItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesItemNotesLabel {
        background?: string | undefined;
        border?: SparklineSeriesItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface SparklineSeriesItemNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface SparklineSeriesItemNotes {
        position?: string | undefined;
        icon?: SparklineSeriesItemNotesIcon | undefined;
        label?: SparklineSeriesItemNotesLabel | undefined;
        line?: SparklineSeriesItemNotesLine | undefined;
    }

    interface SparklineSeriesItemOverlay {
        gradient?: string | undefined;
    }

    interface SparklineSeriesItemStack {
        type?: string | undefined;
        group?: string | undefined;
    }

    interface SparklineSeriesItemTargetBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesItemTargetLine {
        width?: any | Function | undefined;
    }

    interface SparklineSeriesItemTarget {
        line?: SparklineSeriesItemTargetLine | undefined;
        color?: string | Function | undefined;
        border?: Function | SparklineSeriesItemTargetBorder | undefined;
    }

    interface SparklineSeriesItemTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesItemTooltip {
        background?: string | undefined;
        border?: SparklineSeriesItemTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineSeriesItem {
        type?: string | undefined;
        dashType?: string | undefined;
        data?: any;
        explodeField?: string | undefined;
        currentField?: string | undefined;
        targetField?: string | undefined;
        field?: string | undefined;
        name?: string | undefined;
        highlight?: SparklineSeriesItemHighlight | undefined;
        aggregate?: string | Function | undefined;
        axis?: string | undefined;
        border?: SparklineSeriesItemBorder | undefined;
        categoryField?: string | undefined;
        color?: string | Function | undefined;
        colorField?: string | undefined;
        connectors?: SparklineSeriesItemConnectors | undefined;
        gap?: number | undefined;
        labels?: SparklineSeriesItemLabels | undefined;
        line?: string | SparklineSeriesItemLine | undefined;
        markers?: SparklineSeriesItemMarkers | undefined;
        missingValues?: string | undefined;
        style?: string | undefined;
        negativeColor?: string | undefined;
        opacity?: number | undefined;
        overlay?: SparklineSeriesItemOverlay | undefined;
        padding?: number | undefined;
        size?: number | undefined;
        startAngle?: number | undefined;
        spacing?: number | undefined;
        stack?: boolean | string | SparklineSeriesItemStack | undefined;
        tooltip?: SparklineSeriesItemTooltip | undefined;
        width?: number | undefined;
        target?: SparklineSeriesItemTarget | undefined;
        notes?: SparklineSeriesItemNotes | undefined;
        zIndex?: number | undefined;
    }

    interface SparklineSeriesDefaultsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesDefaultsLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesDefaultsLabels {
        background?: string | undefined;
        border?: SparklineSeriesDefaultsLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineSeriesDefaultsStack {
        type?: string | undefined;
    }

    interface SparklineSeriesDefaultsTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineSeriesDefaultsTooltip {
        background?: string | undefined;
        border?: SparklineSeriesDefaultsTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineSeriesDefaults {
        area?: any;
        bar?: any;
        border?: SparklineSeriesDefaultsBorder | undefined;
        column?: any;
        gap?: number | undefined;
        labels?: SparklineSeriesDefaultsLabels | undefined;
        line?: any;
        overlay?: any;
        pie?: any;
        spacing?: number | undefined;
        stack?: boolean | SparklineSeriesDefaultsStack | undefined;
        type?: string | undefined;
        tooltip?: SparklineSeriesDefaultsTooltip | undefined;
    }

    interface SparklineTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineTooltip {
        background?: string | undefined;
        border?: SparklineTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        shared?: boolean | undefined;
        sharedTemplate?: string | undefined;
    }

    interface SparklineValueAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: SparklineValueAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineValueAxisItemCrosshair {
        color?: string | undefined;
        width?: number | undefined;
        opacity?: number | undefined;
        dashType?: number | undefined;
        visible?: boolean | undefined;
        tooltip?: SparklineValueAxisItemCrosshairTooltip | undefined;
    }

    interface SparklineValueAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemLabels {
        background?: string | undefined;
        border?: SparklineValueAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        mirror?: boolean | undefined;
        padding?: number | any | undefined;
        rotation?: number | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineValueAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemMajorGridLines {
        color?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineValueAxisItemMajorTicks {
        size?: number | undefined;
        visible?: boolean | undefined;
        color?: string | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineValueAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineValueAxisItemMinorTicks {
        size?: number | undefined;
        color?: string | undefined;
        width?: number | undefined;
        visible?: boolean | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface SparklineValueAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: SparklineValueAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineValueAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: SparklineValueAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface SparklineValueAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface SparklineValueAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: SparklineValueAxisItemNotesDataItemIcon | undefined;
        label?: SparklineValueAxisItemNotesDataItemLabel | undefined;
        line?: SparklineValueAxisItemNotesDataItemLine | undefined;
    }

    interface SparklineValueAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemNotesIcon {
        background?: string | undefined;
        border?: SparklineValueAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineValueAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemNotesLabel {
        background?: string | undefined;
        border?: SparklineValueAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface SparklineValueAxisItemNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface SparklineValueAxisItemNotes {
        position?: string | undefined;
        icon?: SparklineValueAxisItemNotesIcon | undefined;
        label?: SparklineValueAxisItemNotesLabel | undefined;
        line?: SparklineValueAxisItemNotesLine | undefined;
        data?: SparklineValueAxisItemNotesDataItem[] | undefined;
    }

    interface SparklineValueAxisItemPlotBand {
        from?: number | undefined;
        to?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface SparklineValueAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface SparklineValueAxisItemTitle {
        background?: string | undefined;
        border?: SparklineValueAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface SparklineValueAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        color?: string | undefined;
        labels?: SparklineValueAxisItemLabels | undefined;
        line?: SparklineValueAxisItemLine | undefined;
        majorGridLines?: SparklineValueAxisItemMajorGridLines | undefined;
        majorTicks?: SparklineValueAxisItemMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorGridLines?: SparklineValueAxisItemMinorGridLines | undefined;
        minorTicks?: SparklineValueAxisItemMinorTicks | undefined;
        minorUnit?: number | undefined;
        name?: any;
        narrowRange?: boolean | undefined;
        plotBands?: SparklineValueAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        title?: SparklineValueAxisItemTitle | undefined;
        visible?: boolean | undefined;
        crosshair?: SparklineValueAxisItemCrosshair | undefined;
        notes?: SparklineValueAxisItemNotes | undefined;
    }

    interface SparklineExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface SparklineExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface SparklineSeriesClickEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface SparklineSeriesHoverEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface SparklineSeriesOverEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface SparklineSeriesLeaveEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface SparklineOptions {
        name?: string | undefined;
        axisDefaults?: any;
        categoryAxis?: SparklineCategoryAxisItem | SparklineCategoryAxisItem[] | undefined;
        chartArea?: SparklineChartArea | undefined;
        data?: any;
        dataSource?: any;
        autoBind?: boolean | undefined;
        plotArea?: SparklinePlotArea | undefined;
        pointWidth?: number | undefined;
        renderAs?: string | undefined;
        series?: SparklineSeriesItem[] | undefined;
        seriesColors?: any;
        seriesDefaults?: SparklineSeriesDefaults | undefined;
        theme?: string | undefined;
        tooltip?: SparklineTooltip | undefined;
        transitions?: boolean | undefined;
        type?: string | undefined;
        valueAxis?: SparklineValueAxisItem | SparklineValueAxisItem[] | undefined;
        axisLabelClick?(e: SparklineAxisLabelClickEvent): void;
        dataBound?(e: SparklineEvent): void;
        dragStart?(e: SparklineDragStartEvent): void;
        drag?(e: SparklineDragEvent): void;
        dragEnd?(e: SparklineDragEndEvent): void;
        paneRender?(e: SparklinePaneRenderEvent): void;
        plotAreaClick?(e: SparklinePlotAreaClickEvent): void;
        plotAreaHover?(e: SparklinePlotAreaHoverEvent): void;
        plotAreaLeave?(e: SparklinePlotAreaLeaveEvent): void;
        seriesClick?(e: SparklineSeriesClickEvent): void;
        seriesHover?(e: SparklineSeriesHoverEvent): void;
        seriesOver?(e: SparklineSeriesOverEvent): void;
        seriesLeave?(e: SparklineSeriesLeaveEvent): void;
        zoomStart?(e: SparklineZoomStartEvent): void;
        zoom?(e: SparklineZoomEvent): void;
        zoomEnd?(e: SparklineZoomEndEvent): void;
    }
    interface SparklineEvent {
        sender: Sparkline;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SparklineAxisLabelClickEvent extends SparklineEvent {
        axis?: any;
        value?: any;
        text?: any;
        index?: any;
        dataItem?: any;
        element?: any;
    }

    interface SparklineDragStartEvent extends SparklineEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface SparklineDragEvent extends SparklineEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface SparklineDragEndEvent extends SparklineEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface SparklinePaneRenderEvent extends SparklineEvent {
        pane?: kendo.dataviz.ChartPane | undefined;
        name?: string | undefined;
        index?: number | undefined;
    }

    interface SparklinePlotAreaClickEvent extends SparklineEvent {
        value?: any;
        category?: any;
        element?: any;
        x?: any;
        y?: any;
    }

    interface SparklinePlotAreaHoverEvent extends SparklineEvent {
        category?: any;
        element?: any;
        originalEvent?: any;
        value?: any;
    }

    interface SparklinePlotAreaLeaveEvent extends SparklineEvent {
    }

    interface SparklineSeriesClickEvent extends SparklineEvent {
        value?: any;
        category?: any;
        series?: SparklineSeriesClickEventSeries | undefined;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface SparklineSeriesHoverEvent extends SparklineEvent {
        value?: any;
        category?: any;
        series?: SparklineSeriesHoverEventSeries | undefined;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface SparklineSeriesOverEvent extends SparklineEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: SparklineSeriesOverEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface SparklineSeriesLeaveEvent extends SparklineEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: SparklineSeriesLeaveEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface SparklineZoomStartEvent extends SparklineEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface SparklineZoomEvent extends SparklineEvent {
        axisRanges?: any;
        delta?: number | undefined;
        originalEvent?: any;
    }

    interface SparklineZoomEndEvent extends SparklineEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    class StockChart extends kendo.ui.Widget {
        static fn: StockChart;

        options: StockChartOptions;

        dataSource: kendo.data.DataSource;
        navigator: kendo.dataviz.Navigator;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): StockChart;

        constructor(element: Element, options?: StockChartOptions);

        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        redraw(): void;
        refresh(): void;
        resize(force?: boolean): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        svg(): string;
        imageDataURL(): string;
    }

    interface StockChartCategoryAxisItemAutoBaseUnitSteps {
        days?: any;
        hours?: any;
        minutes?: any;
        months?: any;
        weeks?: any;
        years?: any;
    }

    interface StockChartCategoryAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartCategoryAxisItemCrosshair {
        color?: string | undefined;
        width?: number | undefined;
        opacity?: number | undefined;
        dashType?: number | undefined;
        visible?: boolean | undefined;
        tooltip?: StockChartCategoryAxisItemCrosshairTooltip | undefined;
    }

    interface StockChartCategoryAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemLabels {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        mirror?: boolean | undefined;
        padding?: number | any | undefined;
        rotation?: number | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        culture?: string | undefined;
        dateFormats?: any;
    }

    interface StockChartCategoryAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartCategoryAxisItemMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        width?: number | undefined;
        visible?: boolean | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartCategoryAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartCategoryAxisItemMinorTicks {
        size?: number | undefined;
        visible?: boolean | undefined;
        color?: string | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartCategoryAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartCategoryAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: StockChartCategoryAxisItemNotesDataItemIcon | undefined;
        label?: StockChartCategoryAxisItemNotesDataItemLabel | undefined;
        line?: StockChartCategoryAxisItemNotesDataItemLine | undefined;
    }

    interface StockChartCategoryAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotesIcon {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartCategoryAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotesLabel {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartCategoryAxisItemNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartCategoryAxisItemNotes {
        position?: string | undefined;
        icon?: StockChartCategoryAxisItemNotesIcon | undefined;
        label?: StockChartCategoryAxisItemNotesLabel | undefined;
        line?: StockChartCategoryAxisItemNotesLine | undefined;
        data?: StockChartCategoryAxisItemNotesDataItem[] | undefined;
    }

    interface StockChartCategoryAxisItemPlotBand {
        from?: number | undefined;
        to?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface StockChartCategoryAxisItemSelectMousewheel {
        reverse?: boolean | undefined;
        zoom?: string | undefined;
    }

    interface StockChartCategoryAxisItemSelect {
        from?: string | Date | undefined;
        to?: string | Date | undefined;
        min?: any;
        max?: any;
        mousewheel?: StockChartCategoryAxisItemSelectMousewheel | undefined;
    }

    interface StockChartCategoryAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartCategoryAxisItemTitle {
        background?: string | undefined;
        border?: StockChartCategoryAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | any | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartCategoryAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        categories?: any;
        color?: string | undefined;
        field?: string | undefined;
        justified?: boolean | undefined;
        labels?: StockChartCategoryAxisItemLabels | undefined;
        line?: StockChartCategoryAxisItemLine | undefined;
        majorGridLines?: StockChartCategoryAxisItemMajorGridLines | undefined;
        majorTicks?: StockChartCategoryAxisItemMajorTicks | undefined;
        minorGridLines?: StockChartCategoryAxisItemMinorGridLines | undefined;
        minorTicks?: StockChartCategoryAxisItemMinorTicks | undefined;
        name?: string | undefined;
        pane?: string | undefined;
        plotBands?: StockChartCategoryAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        select?: StockChartCategoryAxisItemSelect | undefined;
        title?: StockChartCategoryAxisItemTitle | undefined;
        type?: string | undefined;
        autoBaseUnitSteps?: StockChartCategoryAxisItemAutoBaseUnitSteps | undefined;
        background?: string | undefined;
        baseUnit?: string | undefined;
        baseUnitStep?: any;
        max?: any;
        min?: any;
        roundToBaseUnit?: boolean | undefined;
        weekStartDay?: number | undefined;
        maxDateGroups?: number | undefined;
        maxDivisions?: number | undefined;
        visible?: boolean | undefined;
        crosshair?: StockChartCategoryAxisItemCrosshair | undefined;
        notes?: StockChartCategoryAxisItemNotes | undefined;
    }

    interface StockChartChartAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartChartArea {
        background?: string | undefined;
        opacity?: number | undefined;
        border?: StockChartChartAreaBorder | undefined;
        height?: number | undefined;
        margin?: number | any | undefined;
        width?: number | undefined;
    }

    interface StockChartLegendBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartLegendInactiveItemsLabels {
        color?: string | undefined;
        font?: string | undefined;
        template?: string | undefined;
    }

    interface StockChartLegendInactiveItemsMarkers {
        color?: string | undefined;
    }

    interface StockChartLegendInactiveItems {
        labels?: StockChartLegendInactiveItemsLabels | undefined;
        markers?: StockChartLegendInactiveItemsMarkers | undefined;
    }

    interface StockChartLegendItem {
        cursor?: string | undefined;
        visual?: Function | undefined;
    }

    interface StockChartLegendLabels {
        color?: string | undefined;
        font?: string | undefined;
        template?: string | undefined;
    }

    interface StockChartLegend {
        background?: string | undefined;
        border?: StockChartLegendBorder | undefined;
        item?: StockChartLegendItem | undefined;
        labels?: StockChartLegendLabels | undefined;
        margin?: number | any | undefined;
        offsetX?: number | undefined;
        offsetY?: number | undefined;
        padding?: number | any | undefined;
        position?: string | undefined;
        reverse?: boolean | undefined;
        visible?: boolean | undefined;
        inactiveItems?: StockChartLegendInactiveItems | undefined;
    }

    interface StockChartNavigatorCategoryAxisAutoBaseUnitSteps {
        seconds?: any;
        minutes?: any;
        hours?: any;
        days?: any;
        weeks?: any;
        months?: any;
        years?: any;
    }

    interface StockChartNavigatorCategoryAxisCrosshairTooltipBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisCrosshairTooltipPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisCrosshairTooltip {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: StockChartNavigatorCategoryAxisCrosshairTooltipPadding | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorCategoryAxisCrosshair {
        color?: string | undefined;
        opacity?: number | undefined;
        tooltip?: StockChartNavigatorCategoryAxisCrosshairTooltip | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisLabelsDateFormats {
        days?: string | undefined;
        hours?: string | undefined;
        months?: string | undefined;
        weeks?: string | undefined;
        years?: string | undefined;
    }

    interface StockChartNavigatorCategoryAxisLabelsMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisLabelsPadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisLabels {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisLabelsBorder | undefined;
        color?: string | undefined;
        culture?: string | undefined;
        dateFormats?: StockChartNavigatorCategoryAxisLabelsDateFormats | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | StockChartNavigatorCategoryAxisLabelsMargin | undefined;
        mirror?: boolean | undefined;
        padding?: number | StockChartNavigatorCategoryAxisLabelsPadding | undefined;
        rotation?: number | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorCategoryAxisLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisMajorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesDataItemIcon {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesDataItemLabel {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: StockChartNavigatorCategoryAxisNotesDataItemIcon | undefined;
        label?: StockChartNavigatorCategoryAxisNotesDataItemLabel | undefined;
        line?: StockChartNavigatorCategoryAxisNotesDataItemLine | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesIcon {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesLabel {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisNotes {
        position?: string | undefined;
        icon?: StockChartNavigatorCategoryAxisNotesIcon | undefined;
        label?: StockChartNavigatorCategoryAxisNotesLabel | undefined;
        line?: StockChartNavigatorCategoryAxisNotesLine | undefined;
        data?: StockChartNavigatorCategoryAxisNotesDataItem[] | undefined;
    }

    interface StockChartNavigatorCategoryAxisPlotBand {
        color?: string | undefined;
        from?: number | undefined;
        opacity?: number | undefined;
        to?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisTitlePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorCategoryAxisTitle {
        background?: string | undefined;
        border?: StockChartNavigatorCategoryAxisTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | StockChartNavigatorCategoryAxisTitleMargin | undefined;
        padding?: number | StockChartNavigatorCategoryAxisTitlePadding | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorCategoryAxis {
        autoBaseUnitSteps?: StockChartNavigatorCategoryAxisAutoBaseUnitSteps | undefined;
        axisCrossingValue?: any | Date | any | undefined;
        background?: string | undefined;
        baseUnit?: string | undefined;
        baseUnitStep?: any;
        categories?: any;
        color?: string | undefined;
        crosshair?: StockChartNavigatorCategoryAxisCrosshair | undefined;
        field?: string | undefined;
        justified?: boolean | undefined;
        labels?: StockChartNavigatorCategoryAxisLabels | undefined;
        line?: StockChartNavigatorCategoryAxisLine | undefined;
        majorGridLines?: StockChartNavigatorCategoryAxisMajorGridLines | undefined;
        majorTicks?: StockChartNavigatorCategoryAxisMajorTicks | undefined;
        max?: any;
        maxDateGroups?: number | undefined;
        min?: any;
        minorGridLines?: StockChartNavigatorCategoryAxisMinorGridLines | undefined;
        minorTicks?: StockChartNavigatorCategoryAxisMinorTicks | undefined;
        plotBands?: StockChartNavigatorCategoryAxisPlotBand[] | undefined;
        reverse?: boolean | undefined;
        roundToBaseUnit?: boolean | undefined;
        title?: StockChartNavigatorCategoryAxisTitle | undefined;
        visible?: boolean | undefined;
        weekStartDay?: number | undefined;
        notes?: StockChartNavigatorCategoryAxisNotes | undefined;
    }

    interface StockChartNavigatorHint {
        visible?: boolean | undefined;
        template?: string | Function | undefined;
        format?: string | undefined;
    }

    interface StockChartNavigatorPaneBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorPaneMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorPanePadding {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorPaneTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorPaneTitleMargin {
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }

    interface StockChartNavigatorPaneTitle {
        background?: string | undefined;
        border?: StockChartNavigatorPaneTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | StockChartNavigatorPaneTitleMargin | undefined;
        position?: string | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorPane {
        background?: string | undefined;
        border?: StockChartNavigatorPaneBorder | undefined;
        height?: number | undefined;
        margin?: number | StockChartNavigatorPaneMargin | undefined;
        name?: string | undefined;
        padding?: number | StockChartNavigatorPanePadding | undefined;
        title?: string | StockChartNavigatorPaneTitle | undefined;
    }

    interface StockChartNavigatorSelectMousewheel {
        reverse?: boolean | undefined;
        zoom?: string | undefined;
    }

    interface StockChartNavigatorSelect {
        from?: Date | undefined;
        mousewheel?: boolean | StockChartNavigatorSelectMousewheel | undefined;
        to?: Date | undefined;
    }

    interface StockChartNavigatorSeriesItemBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorSeriesItemHighlightBorder {
        width?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface StockChartNavigatorSeriesItemHighlightLine {
        width?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface StockChartNavigatorSeriesItemHighlight {
        border?: StockChartNavigatorSeriesItemHighlightBorder | undefined;
        color?: string | undefined;
        line?: StockChartNavigatorSeriesItemHighlightLine | undefined;
        opacity?: number | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorSeriesItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorSeriesItemLabels {
        background?: string | undefined;
        border?: StockChartNavigatorSeriesItemLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        position?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorSeriesItemLine {
        color?: string | undefined;
        opacity?: number | undefined;
        width?: string | undefined;
    }

    interface StockChartNavigatorSeriesItemMarkersBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorSeriesItemMarkers {
        background?: string | undefined;
        border?: StockChartNavigatorSeriesItemMarkersBorder | undefined;
        rotation?: number | Function | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorSeriesItemOverlay {
        gradient?: string | undefined;
    }

    interface StockChartNavigatorSeriesItemStack {
        type?: string | undefined;
        group?: string | undefined;
    }

    interface StockChartNavigatorSeriesItemTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigatorSeriesItemTooltip {
        background?: string | undefined;
        border?: StockChartNavigatorSeriesItemTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartNavigatorSeriesItem {
        type?: string | undefined;
        dashType?: string | undefined;
        data?: any;
        highField?: string | undefined;
        field?: string | undefined;
        categoryField?: string | undefined;
        name?: string | undefined;
        highlight?: StockChartNavigatorSeriesItemHighlight | undefined;
        aggregate?: string | Function | undefined;
        axis?: string | undefined;
        border?: StockChartNavigatorSeriesItemBorder | undefined;
        closeField?: string | undefined;
        color?: string | undefined;
        colorField?: string | undefined;
        downColor?: string | undefined;
        downColorField?: string | undefined;
        gap?: number | undefined;
        labels?: StockChartNavigatorSeriesItemLabels | undefined;
        line?: string | StockChartNavigatorSeriesItemLine | undefined;
        lowField?: string | undefined;
        markers?: StockChartNavigatorSeriesItemMarkers | undefined;
        missingValues?: string | undefined;
        style?: string | undefined;
        opacity?: number | undefined;
        openField?: string | undefined;
        overlay?: StockChartNavigatorSeriesItemOverlay | undefined;
        spacing?: number | undefined;
        stack?: boolean | string | StockChartNavigatorSeriesItemStack | undefined;
        tooltip?: StockChartNavigatorSeriesItemTooltip | undefined;
        width?: number | undefined;
    }

    interface StockChartNavigator {
        categoryAxis?: StockChartNavigatorCategoryAxis | undefined;
        dataSource?: any;
        autoBind?: boolean | undefined;
        dateField?: string | undefined;
        pane?: StockChartNavigatorPane | undefined;
        series?: StockChartNavigatorSeriesItem[] | undefined;
        select?: StockChartNavigatorSelect | undefined;
        hint?: StockChartNavigatorHint | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartPaneBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartPaneTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartPaneTitle {
        background?: string | undefined;
        border?: StockChartPaneTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | any | undefined;
        position?: string | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartPane {
        name?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        background?: string | undefined;
        border?: StockChartPaneBorder | undefined;
        clip?: boolean | undefined;
        height?: number | undefined;
        title?: string | StockChartPaneTitle | undefined;
    }

    interface StockChartPdfMargin {
        bottom?: number | string | undefined;
        left?: number | string | undefined;
        right?: number | string | undefined;
        top?: number | string | undefined;
    }

    interface StockChartPdf {
        author?: string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        forceProxy?: boolean | undefined;
        fileName?: string | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: StockChartPdfMargin | undefined;
        paperSize?: string | any | undefined;
        proxyURL?: string | undefined;
        proxyTarget?: string | undefined;
        subject?: string | undefined;
        title?: string | undefined;
    }

    interface StockChartPlotAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartPlotArea {
        background?: string | undefined;
        opacity?: number | undefined;
        border?: StockChartPlotAreaBorder | undefined;
        margin?: number | any | undefined;
    }

    interface StockChartSeriesItemBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        opacity?: number | Function | undefined;
        width?: number | Function | undefined;
    }

    interface StockChartSeriesItemHighlightBorder {
        width?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface StockChartSeriesItemHighlightLine {
        width?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface StockChartSeriesItemHighlight {
        visible?: boolean | undefined;
        border?: StockChartSeriesItemHighlightBorder | undefined;
        color?: string | undefined;
        line?: StockChartSeriesItemHighlightLine | undefined;
        opacity?: number | undefined;
    }

    interface StockChartSeriesItemLabelsBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface StockChartSeriesItemLabels {
        background?: string | Function | undefined;
        border?: StockChartSeriesItemLabelsBorder | undefined;
        color?: string | Function | undefined;
        font?: string | Function | undefined;
        format?: string | Function | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        position?: string | Function | undefined;
        template?: string | Function | undefined;
        visible?: boolean | Function | undefined;
    }

    interface StockChartSeriesItemLine {
        color?: string | undefined;
        opacity?: number | undefined;
        width?: string | undefined;
        style?: string | undefined;
    }

    interface StockChartSeriesItemMarkersBorder {
        color?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface StockChartSeriesItemMarkers {
        background?: string | Function | undefined;
        border?: Function | StockChartSeriesItemMarkersBorder | undefined;
        size?: number | Function | undefined;
        rotation?: number | Function | undefined;
        type?: string | Function | undefined;
        visible?: boolean | Function | undefined;
    }

    interface StockChartSeriesItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartSeriesItemNotesIcon {
        background?: string | undefined;
        border?: StockChartSeriesItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartSeriesItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartSeriesItemNotesLabel {
        background?: string | undefined;
        border?: StockChartSeriesItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartSeriesItemNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartSeriesItemNotes {
        position?: string | undefined;
        icon?: StockChartSeriesItemNotesIcon | undefined;
        label?: StockChartSeriesItemNotesLabel | undefined;
        line?: StockChartSeriesItemNotesLine | undefined;
    }

    interface StockChartSeriesItemOverlay {
        gradient?: string | undefined;
    }

    interface StockChartSeriesItemStack {
        type?: string | undefined;
        group?: string | undefined;
    }

    interface StockChartSeriesItemTargetBorder {
        color?: string | Function | undefined;
        dashType?: string | Function | undefined;
        width?: number | Function | undefined;
    }

    interface StockChartSeriesItemTargetLine {
        width?: any | Function | undefined;
    }

    interface StockChartSeriesItemTarget {
        line?: StockChartSeriesItemTargetLine | undefined;
        color?: string | Function | undefined;
        border?: Function | StockChartSeriesItemTargetBorder | undefined;
    }

    interface StockChartSeriesItemTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartSeriesItemTooltip {
        background?: string | undefined;
        border?: StockChartSeriesItemTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartSeriesItem {
        type?: string | undefined;
        dashType?: string | undefined;
        data?: any;
        highField?: string | undefined;
        field?: string | undefined;
        categoryField?: string | undefined;
        currentField?: string | undefined;
        targetField?: string | undefined;
        name?: string | undefined;
        highlight?: StockChartSeriesItemHighlight | undefined;
        aggregate?: string | Function | undefined;
        axis?: string | undefined;
        border?: StockChartSeriesItemBorder | undefined;
        closeField?: string | undefined;
        color?: string | Function | undefined;
        colorField?: string | undefined;
        downColor?: string | Function | undefined;
        downColorField?: string | undefined;
        gap?: number | undefined;
        labels?: StockChartSeriesItemLabels | undefined;
        line?: string | StockChartSeriesItemLine | undefined;
        lowField?: string | undefined;
        markers?: StockChartSeriesItemMarkers | undefined;
        missingValues?: string | undefined;
        style?: string | undefined;
        negativeColor?: string | undefined;
        opacity?: number | undefined;
        openField?: string | undefined;
        overlay?: StockChartSeriesItemOverlay | undefined;
        spacing?: number | undefined;
        stack?: boolean | string | StockChartSeriesItemStack | undefined;
        tooltip?: StockChartSeriesItemTooltip | undefined;
        visibleInLegend?: boolean | undefined;
        width?: number | undefined;
        target?: StockChartSeriesItemTarget | undefined;
        notes?: StockChartSeriesItemNotes | undefined;
        zIndex?: number | undefined;
    }

    interface StockChartSeriesDefaultsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartSeriesDefaultsLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartSeriesDefaultsLabels {
        background?: string | undefined;
        border?: StockChartSeriesDefaultsLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartSeriesDefaultsStack {
        type?: string | undefined;
    }

    interface StockChartSeriesDefaultsTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartSeriesDefaultsTooltip {
        background?: string | undefined;
        border?: StockChartSeriesDefaultsTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartSeriesDefaults {
        area?: any;
        candlestick?: any;
        ohlc?: any;
        border?: StockChartSeriesDefaultsBorder | undefined;
        column?: any;
        gap?: number | undefined;
        labels?: StockChartSeriesDefaultsLabels | undefined;
        line?: any;
        overlay?: any;
        pie?: any;
        spacing?: number | undefined;
        stack?: boolean | StockChartSeriesDefaultsStack | undefined;
        type?: string | undefined;
        tooltip?: StockChartSeriesDefaultsTooltip | undefined;
    }

    interface StockChartTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartTitle {
        align?: string | undefined;
        background?: string | undefined;
        border?: StockChartTitleBorder | undefined;
        font?: string | undefined;
        color?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        position?: string | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartTooltip {
        background?: string | undefined;
        border?: StockChartTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        shared?: boolean | undefined;
        sharedTemplate?: string | undefined;
    }

    interface StockChartValueAxisItemCrosshairTooltipBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemCrosshairTooltip {
        background?: string | undefined;
        border?: StockChartValueAxisItemCrosshairTooltipBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        padding?: number | any | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartValueAxisItemCrosshair {
        color?: string | undefined;
        width?: number | undefined;
        opacity?: number | undefined;
        dashType?: number | undefined;
        visible?: boolean | undefined;
        tooltip?: StockChartValueAxisItemCrosshairTooltip | undefined;
    }

    interface StockChartValueAxisItemLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemLabels {
        background?: string | undefined;
        border?: StockChartValueAxisItemLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: number | any | undefined;
        mirror?: boolean | undefined;
        padding?: number | any | undefined;
        rotation?: number | undefined;
        skip?: number | undefined;
        step?: number | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartValueAxisItemLine {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemMajorGridLines {
        color?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartValueAxisItemMajorTicks {
        size?: number | undefined;
        visible?: boolean | undefined;
        color?: string | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartValueAxisItemMinorGridLines {
        color?: string | undefined;
        dashType?: string | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartValueAxisItemMinorTicks {
        size?: number | undefined;
        color?: string | undefined;
        width?: number | undefined;
        visible?: boolean | undefined;
        step?: number | undefined;
        skip?: number | undefined;
    }

    interface StockChartValueAxisItemNotesDataItemIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemNotesDataItemIcon {
        background?: string | undefined;
        border?: StockChartValueAxisItemNotesDataItemIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartValueAxisItemNotesDataItemLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemNotesDataItemLabel {
        background?: string | undefined;
        border?: StockChartValueAxisItemNotesDataItemLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        text?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartValueAxisItemNotesDataItemLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartValueAxisItemNotesDataItem {
        value?: any;
        position?: string | undefined;
        icon?: StockChartValueAxisItemNotesDataItemIcon | undefined;
        label?: StockChartValueAxisItemNotesDataItemLabel | undefined;
        line?: StockChartValueAxisItemNotesDataItemLine | undefined;
    }

    interface StockChartValueAxisItemNotesIconBorder {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemNotesIcon {
        background?: string | undefined;
        border?: StockChartValueAxisItemNotesIconBorder | undefined;
        size?: number | undefined;
        type?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartValueAxisItemNotesLabelBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemNotesLabel {
        background?: string | undefined;
        border?: StockChartValueAxisItemNotesLabelBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
        rotation?: number | undefined;
        format?: string | undefined;
        position?: string | undefined;
    }

    interface StockChartValueAxisItemNotesLine {
        width?: number | undefined;
        color?: string | undefined;
        length?: number | undefined;
    }

    interface StockChartValueAxisItemNotes {
        position?: string | undefined;
        icon?: StockChartValueAxisItemNotesIcon | undefined;
        label?: StockChartValueAxisItemNotesLabel | undefined;
        line?: StockChartValueAxisItemNotesLine | undefined;
        data?: StockChartValueAxisItemNotesDataItem[] | undefined;
    }

    interface StockChartValueAxisItemPlotBand {
        from?: number | undefined;
        to?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface StockChartValueAxisItemTitleBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface StockChartValueAxisItemTitle {
        background?: string | undefined;
        border?: StockChartValueAxisItemTitleBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        margin?: number | any | undefined;
        padding?: number | any | undefined;
        position?: string | undefined;
        rotation?: number | undefined;
        text?: string | undefined;
        visible?: boolean | undefined;
    }

    interface StockChartValueAxisItem {
        axisCrossingValue?: any | Date | any | undefined;
        background?: string | undefined;
        color?: string | undefined;
        labels?: StockChartValueAxisItemLabels | undefined;
        line?: StockChartValueAxisItemLine | undefined;
        majorGridLines?: StockChartValueAxisItemMajorGridLines | undefined;
        majorTicks?: StockChartValueAxisItemMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorGridLines?: StockChartValueAxisItemMinorGridLines | undefined;
        minorTicks?: StockChartValueAxisItemMinorTicks | undefined;
        minorUnit?: number | undefined;
        name?: any;
        narrowRange?: boolean | undefined;
        pane?: string | undefined;
        plotBands?: StockChartValueAxisItemPlotBand[] | undefined;
        reverse?: boolean | undefined;
        title?: StockChartValueAxisItemTitle | undefined;
        visible?: boolean | undefined;
        crosshair?: StockChartValueAxisItemCrosshair | undefined;
        notes?: StockChartValueAxisItemNotes | undefined;
    }

    interface StockChartExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface StockChartExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface StockChartSeriesClickEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface StockChartSeriesHoverEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface StockChartSeriesOverEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface StockChartSeriesLeaveEventSeries {
        type?: string | undefined;
        name?: string | undefined;
        data?: any;
    }

    interface StockChartOptions {
        name?: string | undefined;
        dateField?: string | undefined;
        navigator?: StockChartNavigator | undefined;
        axisDefaults?: any;
        categoryAxis?: StockChartCategoryAxisItem | StockChartCategoryAxisItem[] | undefined;
        chartArea?: StockChartChartArea | undefined;
        dataSource?: any;
        autoBind?: boolean | undefined;
        legend?: StockChartLegend | undefined;
        panes?: StockChartPane[] | undefined;
        pdf?: StockChartPdf | undefined;
        persistSeriesVisibility?: boolean | undefined;
        plotArea?: StockChartPlotArea | undefined;
        renderAs?: string | undefined;
        series?: StockChartSeriesItem[] | undefined;
        seriesColors?: any;
        seriesDefaults?: StockChartSeriesDefaults | undefined;
        theme?: string | undefined;
        title?: StockChartTitle | undefined;
        tooltip?: StockChartTooltip | undefined;
        transitions?: boolean | undefined;
        valueAxis?: StockChartValueAxisItem | StockChartValueAxisItem[] | undefined;
        axisLabelClick?(e: StockChartAxisLabelClickEvent): void;
        dataBound?(e: StockChartEvent): void;
        dragStart?(e: StockChartDragStartEvent): void;
        drag?(e: StockChartDragEvent): void;
        dragEnd?(e: StockChartDragEndEvent): void;
        legendItemClick?(e: StockChartLegendItemClickEvent): void;
        legendItemHover?(e: StockChartLegendItemHoverEvent): void;
        legendItemLeave?(e: StockChartLegendItemLeaveEvent): void;
        noteClick?(e: StockChartNoteClickEvent): void;
        noteHover?(e: StockChartNoteHoverEvent): void;
        noteLeave?(e: StockChartNoteLeaveEvent): void;
        paneRender?(e: StockChartPaneRenderEvent): void;
        plotAreaClick?(e: StockChartPlotAreaClickEvent): void;
        plotAreaHover?(e: StockChartPlotAreaHoverEvent): void;
        plotAreaLeave?(e: StockChartPlotAreaLeaveEvent): void;
        render?(e: StockChartRenderEvent): void;
        select?(e: StockChartSelectEvent): void;
        selectEnd?(e: StockChartSelectEndEvent): void;
        selectStart?(e: StockChartSelectStartEvent): void;
        seriesClick?(e: StockChartSeriesClickEvent): void;
        seriesHover?(e: StockChartSeriesHoverEvent): void;
        seriesOver?(e: StockChartSeriesOverEvent): void;
        seriesLeave?(e: StockChartSeriesLeaveEvent): void;
        zoomStart?(e: StockChartZoomStartEvent): void;
        zoom?(e: StockChartZoomEvent): void;
        zoomEnd?(e: StockChartZoomEndEvent): void;
    }
    interface StockChartEvent {
        sender: StockChart;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface StockChartAxisLabelClickEvent extends StockChartEvent {
        axis?: any;
        value?: any;
        text?: any;
        index?: any;
        dataItem?: any;
        element?: any;
    }

    interface StockChartDragStartEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface StockChartDragEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface StockChartDragEndEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface StockChartLegendItemClickEvent extends StockChartEvent {
        text?: string | undefined;
        series?: any;
        seriesIndex?: number | undefined;
        pointIndex?: number | undefined;
        element?: any;
    }

    interface StockChartLegendItemHoverEvent extends StockChartEvent {
        text?: string | undefined;
        series?: any;
        seriesIndex?: number | undefined;
        pointIndex?: number | undefined;
        element?: any;
    }

    interface StockChartLegendItemLeaveEvent extends StockChartEvent {
        element?: any;
        pointIndex?: number | undefined;
        series?: any;
        seriesIndex?: number | undefined;
        text?: string | undefined;
    }

    interface StockChartNoteClickEvent extends StockChartEvent {
        category?: any;
        element?: any;
        value?: any;
        series?: any;
        dataItem?: any;
    }

    interface StockChartNoteHoverEvent extends StockChartEvent {
        category?: any;
        element?: any;
        value?: any;
        series?: any;
        dataItem?: any;
    }

    interface StockChartNoteLeaveEvent extends StockChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        series?: any;
        value?: any;
        visual?: any;
    }

    interface StockChartPaneRenderEvent extends StockChartEvent {
        pane?: kendo.dataviz.ui.StockChart | undefined;
        name?: string | undefined;
        index?: number | undefined;
    }

    interface StockChartPlotAreaClickEvent extends StockChartEvent {
        value?: any;
        category?: any;
        element?: any;
        x?: any;
        y?: any;
    }

    interface StockChartPlotAreaHoverEvent extends StockChartEvent {
        category?: any;
        element?: any;
        originalEvent?: any;
        value?: any;
        x?: any;
        y?: any;
    }

    interface StockChartPlotAreaLeaveEvent extends StockChartEvent {
    }

    interface StockChartRenderEvent extends StockChartEvent {
    }

    interface StockChartSelectEvent extends StockChartEvent {
        axis?: any;
        from?: Date | undefined;
        to?: Date | undefined;
    }

    interface StockChartSelectEndEvent extends StockChartEvent {
        axis?: any;
        from?: Date | undefined;
        to?: Date | undefined;
    }

    interface StockChartSelectStartEvent extends StockChartEvent {
        axis?: any;
        from?: Date | undefined;
        to?: Date | undefined;
    }

    interface StockChartSeriesClickEvent extends StockChartEvent {
        value?: any;
        category?: any;
        series?: StockChartSeriesClickEventSeries | undefined;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface StockChartSeriesHoverEvent extends StockChartEvent {
        value?: any;
        category?: any;
        series?: StockChartSeriesHoverEventSeries | undefined;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface StockChartSeriesOverEvent extends StockChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: StockChartSeriesOverEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface StockChartSeriesLeaveEvent extends StockChartEvent {
        category?: any;
        dataItem?: any;
        element?: any;
        originalEvent?: any;
        percentage?: any;
        series?: StockChartSeriesLeaveEventSeries | undefined;
        stackValue?: any;
        value?: any;
    }

    interface StockChartZoomStartEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface StockChartZoomEvent extends StockChartEvent {
        axisRanges?: any;
        delta?: number | undefined;
        originalEvent?: any;
    }

    interface StockChartZoomEndEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    class CircularGauge extends kendo.ui.Widget {
        static fn: CircularGauge;

        options: CircularGaugeOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): CircularGauge;

        constructor(element: Element, options?: CircularGaugeOptions);

        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        redraw(): void;
        resize(force?: boolean): void;
        setOptions(options: any): void;
        svg(): void;
        imageDataURL(): string;
        value(): void;
        value(): void;
    }

    interface CircularGaugeColor {
        color?: string | undefined;
        from?: number | undefined;
        to?: number | undefined;
    }

    interface CircularGaugeGaugeAreaBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface CircularGaugeGaugeAreaMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface CircularGaugeGaugeArea {
        background?: string | undefined;
        border?: CircularGaugeGaugeAreaBorder | undefined;
        height?: number | undefined;
        margin?: CircularGaugeGaugeAreaMargin | undefined;
        width?: number | undefined;
    }

    interface CircularGaugeScaleLabelsBorder {
        color?: string | undefined;
        dashType?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    interface CircularGaugeScaleLabelsMargin {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface CircularGaugeScaleLabelsPadding {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    }

    interface CircularGaugeScaleLabels {
        background?: string | undefined;
        border?: CircularGaugeScaleLabelsBorder | undefined;
        color?: string | undefined;
        font?: string | undefined;
        format?: string | undefined;
        margin?: CircularGaugeScaleLabelsMargin | undefined;
        padding?: CircularGaugeScaleLabelsPadding | undefined;
        position?: string | undefined;
        template?: string | Function | undefined;
        visible?: boolean | undefined;
    }

    interface CircularGaugeScaleMajorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface CircularGaugeScaleMinorTicks {
        color?: string | undefined;
        size?: number | undefined;
        visible?: boolean | undefined;
        width?: number | undefined;
    }

    interface CircularGaugeScale {
        labels?: CircularGaugeScaleLabels | undefined;
        majorTicks?: CircularGaugeScaleMajorTicks | undefined;
        majorUnit?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        minorTicks?: CircularGaugeScaleMinorTicks | undefined;
        minorUnit?: number | undefined;
        rangePlaceholderColor?: string | undefined;
        rangeSize?: number | undefined;
        rangeDistance?: number | undefined;
        reverse?: boolean | undefined;
        startAngle?: number | undefined;
    }

    interface CircularGaugeExportImageOptions {
        width?: string | undefined;
        height?: string | undefined;
    }

    interface CircularGaugeExportSVGOptions {
        raw?: boolean | undefined;
    }

    interface CircularGaugeOptions {
        name?: string | undefined;
        centerTemplate?: string | Function | undefined;
        color?: string | undefined;
        colors?: CircularGaugeColor[] | undefined;
        gaugeArea?: CircularGaugeGaugeArea | undefined;
        opacity?: number | undefined;
        renderAs?: string | undefined;
        scale?: CircularGaugeScale | undefined;
        theme?: string | undefined;
        transitions?: boolean | undefined;
        value?: number | undefined;
    }
    interface CircularGaugeEvent {
        sender: CircularGauge;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class TreeMap extends kendo.ui.Widget {
        static fn: TreeMap;

        options: TreeMapOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeMap;

        constructor(element: Element, options?: TreeMapOptions);
    }

    interface TreeMapOptions {
        name?: string | undefined;
        dataSource?: any | any | kendo.data.HierarchicalDataSource | undefined;
        autoBind?: boolean | undefined;
        type?: string | undefined;
        theme?: string | undefined;
        valueField?: string | undefined;
        colorField?: string | undefined;
        textField?: string | undefined;
        template?: string | Function | undefined;
        colors?: any;
        itemCreated?(e: TreeMapItemCreatedEvent): void;
        dataBound?(e: TreeMapDataBoundEvent): void;
    }
    interface TreeMapEvent {
        sender: TreeMap;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeMapItemCreatedEvent extends TreeMapEvent {
        element?: JQuery | Element | undefined;
    }

    interface TreeMapDataBoundEvent extends TreeMapEvent {
    }
}
declare namespace kendo.dataviz.map {
    class BingLayer extends kendo.dataviz.map.TileLayer {
        options: BingLayerOptions;

        map: kendo.dataviz.ui.Map;

        constructor(map: kendo.dataviz.ui.Map, options?: BingLayerOptions);

        show(): void;
        hide(): void;
        imagerySet(): void;
    }

    interface BingLayerOptions {
        name?: string | undefined;
        baseUrl?: string | undefined;
        imagerySet?: string | undefined;
    }
    interface BingLayerEvent {
        sender: BingLayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Extent extends kendo.Class {
        options: ExtentOptions;

        nw: kendo.dataviz.map.Location;
        se: kendo.dataviz.map.Location;

        constructor(nw: kendo.dataviz.map.Location | any, se: kendo.dataviz.map.Location | any);

        static create(a: kendo.dataviz.map.Location, b?: kendo.dataviz.map.Location): kendo.dataviz.map.Extent;
        static create(a: kendo.dataviz.map.Location, b?: any): kendo.dataviz.map.Extent;
        static create(a: any, b?: kendo.dataviz.map.Location): kendo.dataviz.map.Extent;
        static create(a: any, b?: any): kendo.dataviz.map.Extent;

        contains(location: kendo.dataviz.map.Location): boolean;
        containsAny(locations: any): boolean;
        center(): kendo.dataviz.map.Location;
        include(location: kendo.dataviz.map.Location): void;
        includeAll(locations: any): void;
        edges(): any;
        toArray(): any;
        overlaps(extent: kendo.dataviz.map.Extent): boolean;
    }

    interface ExtentOptions {
        name?: string | undefined;
    }
    interface ExtentEvent {
        sender: Extent;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Layer extends kendo.Class {
        options: LayerOptions;

        map: kendo.dataviz.ui.Map;

        constructor(map: kendo.dataviz.ui.Map, options?: LayerOptions);

        show(): void;
        hide(): void;
    }

    interface LayerOptions {
        name?: string | undefined;
    }
    interface LayerEvent {
        sender: Layer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Location extends kendo.Class {
        options: LocationOptions;

        lat: number;
        lng: number;

        constructor(lat: number, lng: number);

        static create(lat: number, lng?: number): kendo.dataviz.map.Location;
        static create(lat: any, lng?: number): kendo.dataviz.map.Location;
        static create(lat: kendo.dataviz.map.Location, lng?: number): kendo.dataviz.map.Location;
        static fromLngLat(lnglat: any): kendo.dataviz.map.Location;
        static fromLatLng(lnglat: any): kendo.dataviz.map.Location;

        clone(): kendo.dataviz.map.Location;
        destination(destination: kendo.dataviz.map.Location, bearing: number): number;
        distanceTo(distance: number, bearing: number): kendo.dataviz.map.Location;
        equals(location: kendo.dataviz.map.Location): boolean;
        round(digits: number): kendo.dataviz.map.Location;
        toArray(): any;
        toString(): string;
        wrap(): kendo.dataviz.map.Location;
    }

    interface LocationOptions {
        name?: string | undefined;
    }
    interface LocationEvent {
        sender: Location;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Marker extends Observable {
        options: MarkerOptions;

        constructor(options?: MarkerOptions);

        location(): kendo.dataviz.map.Location;
        location(location: any): void;
        location(location: kendo.dataviz.map.Location): void;
    }

    interface MarkerTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MarkerTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface MarkerTooltipAnimation {
        close?: MarkerTooltipAnimationClose | undefined;
        open?: MarkerTooltipAnimationOpen | undefined;
    }

    interface MarkerTooltipContent {
        url?: string | undefined;
    }

    interface MarkerTooltip {
        autoHide?: boolean | undefined;
        animation?: MarkerTooltipAnimation | undefined;
        content?: string | Function | MarkerTooltipContent | undefined;
        template?: string | undefined;
        callout?: boolean | undefined;
        iframe?: boolean | undefined;
        height?: number | undefined;
        width?: number | undefined;
        position?: string | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
    }

    interface MarkerOptions {
        name?: string | undefined;
        location?: any | kendo.dataviz.map.Location | undefined;
        shape?: string | undefined;
        title?: string | undefined;
        tooltip?: MarkerTooltip | undefined;
    }
    interface MarkerEvent {
        sender: Marker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class MarkerLayer extends kendo.dataviz.map.Layer {
        options: MarkerLayerOptions;

        map: kendo.dataviz.ui.Map;
        items: any;

        constructor(map: kendo.dataviz.ui.Map, options?: MarkerLayerOptions);

        add(marker: kendo.dataviz.map.Marker): void;
        clear(): void;
        hide(): void;
        remove(marker: kendo.dataviz.map.Marker): void;
        setDataSource(dataSource: any): void;
        show(): void;
    }

    interface MarkerLayerOptions {
        name?: string | undefined;
    }
    interface MarkerLayerEvent {
        sender: MarkerLayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ShapeLayer extends kendo.dataviz.map.Layer {
        options: ShapeLayerOptions;

        map: kendo.dataviz.ui.Map;

        constructor(map: kendo.dataviz.ui.Map, options?: ShapeLayerOptions);

        show(): void;
        hide(): void;
        setDataSource(): void;
    }

    interface ShapeLayerOptions {
        name?: string | undefined;
    }
    interface ShapeLayerEvent {
        sender: ShapeLayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class TileLayer extends kendo.dataviz.map.Layer {
        options: TileLayerOptions;

        map: kendo.dataviz.ui.Map;

        constructor(map: kendo.dataviz.ui.Map, options?: TileLayerOptions);

        show(): void;
        hide(): void;
    }

    interface TileLayerOptions {
        name?: string | undefined;
        urlTemplate?: string | undefined;
        subdomains?: any;
        tileSize?: number | undefined;
    }
    interface TileLayerEvent {
        sender: TileLayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }
}
declare namespace kendo.dataviz {
    class ChartAxis extends Observable {
        options: ChartAxisOptions;

        range(): any;
        slot(from: string, to?: string, limit?: boolean): kendo.geometry.Rect;
        slot(from: string, to?: number, limit?: boolean): kendo.geometry.Rect;
        slot(from: string, to?: Date, limit?: boolean): kendo.geometry.Rect;
        slot(from: number, to?: string, limit?: boolean): kendo.geometry.Rect;
        slot(from: number, to?: number, limit?: boolean): kendo.geometry.Rect;
        slot(from: number, to?: Date, limit?: boolean): kendo.geometry.Rect;
        slot(from: Date, to?: string, limit?: boolean): kendo.geometry.Rect;
        slot(from: Date, to?: number, limit?: boolean): kendo.geometry.Rect;
        slot(from: Date, to?: Date, limit?: boolean): kendo.geometry.Rect;
        value(point: kendo.geometry.Point): void;
        valueRange(): any;
    }

    interface ChartAxisOptions {
        name?: string | undefined;
    }
    interface ChartAxisEvent {
        sender: ChartAxis;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ChartPane extends Observable {
        options: ChartPaneOptions;

        chartsVisual: kendo.drawing.Group;
        visual: kendo.drawing.Group;

        findAxisByName(name: string): kendo.dataviz.ChartAxis;
        series(): any;
    }

    interface ChartPaneOptions {
        name?: string | undefined;
    }
    interface ChartPaneEvent {
        sender: ChartPane;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ChartPlotArea extends Observable {
        options: ChartPlotAreaOptions;

        backgroundVisual: kendo.drawing.MultiPath;
        visual: kendo.drawing.Group;
    }

    interface ChartPlotAreaOptions {
        name?: string | undefined;
    }
    interface ChartPlotAreaEvent {
        sender: ChartPlotArea;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ChartPoint extends Observable {
        options: ChartPointOptions;

        category: string | Date | number;
        dataItem: any;
        percentage: number;
        runningTotal: number;
        total: number;
        value: number;
        visual: kendo.drawing.Element;
    }

    interface ChartPointOptions {
        name?: string | undefined;
    }
    interface ChartPointEvent {
        sender: ChartPoint;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ChartSeries extends Observable {
        options: ChartSeriesOptions;

        data(): any;
        data(data: any): void;
        findPoint(callback: Function): kendo.dataviz.ChartPoint;
        points(): any;
        points(filter: Function): void;
        toggleHighlight(show: boolean, filter: Function): void;
        toggleHighlight(show: boolean, filter: any): void;
        toggleVisibility(show: boolean, filter: Function): void;
    }

    interface ChartSeriesOptions {
        name?: string | undefined;
    }
    interface ChartSeriesEvent {
        sender: ChartSeries;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Navigator extends kendo.Observable {
        options: NavigatorOptions;

        select(): any;
    }

    interface NavigatorOptions {
        name?: string | undefined;
    }
    interface NavigatorEvent {
        sender: Navigator;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }
}
declare namespace kendo.dataviz.diagram {
    class Circle extends Observable {
        options: CircleOptions;

        drawingElement: kendo.drawing.Circle;

        constructor(options?: CircleOptions);

        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface CircleFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface CircleFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: CircleFillGradientStop[] | undefined;
    }

    interface CircleFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: CircleFillGradient | undefined;
    }

    interface CircleStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface CircleOptions {
        name?: string | undefined;
        fill?: string | CircleFill | undefined;
        stroke?: CircleStroke | undefined;
        center?: any;
        radius?: number | undefined;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Connection extends Observable {
        options: ConnectionOptions;

        dataItem: any;
        from: kendo.dataviz.diagram.Shape;
        sourceConnector: kendo.dataviz.diagram.Connector;
        targetConnector: kendo.dataviz.diagram.Connector;
        to: kendo.dataviz.diagram.Shape;

        constructor(from?: kendo.dataviz.diagram.Shape, to?: kendo.dataviz.diagram.Shape, options?: ConnectionOptions);

        source(): any;
        source(source: kendo.dataviz.diagram.Shape): void;
        source(source: kendo.dataviz.diagram.Point): void;
        source(source: kendo.dataviz.diagram.Connector): void;
        sourcePoint(): kendo.dataviz.diagram.Point;
        target(): any;
        target(target: kendo.dataviz.diagram.Shape): void;
        target(target: kendo.dataviz.diagram.Point): void;
        target(target: kendo.dataviz.diagram.Connector): void;
        targetPoint(): kendo.dataviz.diagram.Point;
        select(value: boolean): void;
        type(): void;
        type(value: string): void;
        points(): any;
        allPoints(): any;
        redraw(options?: any): void;
    }

    interface ConnectionContent {
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        template?: string | Function | undefined;
        text?: string | undefined;
        visual?: Function | undefined;
    }

    interface ConnectionEndCapFill {
        color?: string | undefined;
    }

    interface ConnectionEndCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ConnectionEndCap {
        fill?: string | ConnectionEndCapFill | undefined;
        stroke?: string | ConnectionEndCapStroke | undefined;
        type?: string | undefined;
    }

    interface ConnectionHoverStroke {
        color?: string | undefined;
    }

    interface ConnectionHover {
        stroke?: ConnectionHoverStroke | undefined;
    }

    interface ConnectionPoint {
        x?: number | undefined;
        y?: number | undefined;
    }

    interface ConnectionStartCapFill {
        color?: string | undefined;
    }

    interface ConnectionStartCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ConnectionStartCap {
        fill?: string | ConnectionStartCapFill | undefined;
        stroke?: string | ConnectionStartCapStroke | undefined;
        type?: string | undefined;
    }

    interface ConnectionStroke {
        color?: string | undefined;
    }

    interface ConnectionOptions {
        name?: string | undefined;
        content?: ConnectionContent | undefined;
        fromConnector?: string | undefined;
        fromX?: number | undefined;
        fromY?: number | undefined;
        stroke?: ConnectionStroke | undefined;
        hover?: ConnectionHover | undefined;
        startCap?: string | ConnectionStartCap | undefined;
        endCap?: string | ConnectionEndCap | undefined;
        points?: ConnectionPoint[] | undefined;
        selectable?: boolean | undefined;
        toConnector?: string | undefined;
        toX?: number | undefined;
        toY?: number | undefined;
        type?: string | undefined;
    }
    interface ConnectionEvent {
        sender: Connection;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Connector extends Observable {
        options: ConnectorOptions;

        connections: any;
        shape: kendo.dataviz.diagram.Shape;

        constructor(options?: ConnectorOptions);

        position(): kendo.dataviz.diagram.Point;
    }

    interface ConnectorFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface ConnectorHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface ConnectorHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ConnectorHover {
        fill?: string | ConnectorHoverFill | undefined;
        stroke?: string | ConnectorHoverStroke | undefined;
    }

    interface ConnectorStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ConnectorOptions {
        name?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        hover?: ConnectorHover | undefined;
        fill?: string | ConnectorFill | undefined;
        stroke?: string | ConnectorStroke | undefined;
    }
    interface ConnectorEvent {
        sender: Connector;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Group extends Observable {
        options: GroupOptions;

        drawingElement: kendo.drawing.Group;

        constructor(options?: GroupOptions);

        append(element: any): void;
        clear(): void;
        remove(element: any): void;
        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface GroupOptions {
        name?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }
    interface GroupEvent {
        sender: Group;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Image extends Observable {
        options: ImageOptions;

        drawingElement: kendo.drawing.Image;

        constructor(options?: ImageOptions);

        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ImageOptions {
        name?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        source?: string | undefined;
    }
    interface ImageEvent {
        sender: Image;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Layout extends Observable {
        options: LayoutOptions;

        drawingElement: kendo.drawing.Layout;

        constructor(rect: kendo.dataviz.diagram.Rect, options?: LayoutOptions);

        append(element: any): void;
        clear(): void;
        rect(): kendo.dataviz.diagram.Rect;
        rect(rect: kendo.dataviz.diagram.Rect): void;
        reflow(): void;
        remove(element: any): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface LayoutOptions {
        name?: string | undefined;
        alignContent?: string | undefined;
        alignItems?: string | undefined;
        justifyContent?: string | undefined;
        lineSpacing?: number | undefined;
        spacing?: number | undefined;
        orientation?: string | undefined;
        wrap?: boolean | undefined;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Line extends Observable {
        options: LineOptions;

        drawingElement: kendo.drawing.Path;

        constructor(options?: LineOptions);

        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface LineStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface LineOptions {
        name?: string | undefined;
        stroke?: LineStroke | undefined;
        from?: any;
        to?: any;
    }
    interface LineEvent {
        sender: Line;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Path extends Observable {
        options: PathOptions;

        drawingElement: kendo.drawing.Path;

        constructor(options?: PathOptions);

        data(): string;
        data(path: string): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface PathEndCapFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface PathEndCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface PathEndCap {
        fill?: string | PathEndCapFill | undefined;
        stroke?: string | PathEndCapStroke | undefined;
        type?: string | undefined;
    }

    interface PathFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface PathFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: PathFillGradientStop[] | undefined;
    }

    interface PathFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: PathFillGradient | undefined;
    }

    interface PathStartCapFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface PathStartCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface PathStartCap {
        fill?: string | PathStartCapFill | undefined;
        stroke?: string | PathStartCapStroke | undefined;
        type?: string | undefined;
    }

    interface PathStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface PathOptions {
        name?: string | undefined;
        data?: string | undefined;
        endCap?: string | PathEndCap | undefined;
        fill?: string | PathFill | undefined;
        height?: number | undefined;
        startCap?: string | PathStartCap | undefined;
        stroke?: PathStroke | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }
    interface PathEvent {
        sender: Path;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Point extends Observable {
        options: PointOptions;

        x: number;
        y: number;

        constructor(x: number, y: number);
    }

    interface PointOptions {
        name?: string | undefined;
    }
    interface PointEvent {
        sender: Point;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Polyline extends Observable {
        options: PolylineOptions;

        drawingElement: kendo.drawing.Path;

        constructor(options?: PolylineOptions);

        points(): any;
        points(points: any): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface PolylineEndCapFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface PolylineEndCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface PolylineEndCap {
        fill?: string | PolylineEndCapFill | undefined;
        stroke?: string | PolylineEndCapStroke | undefined;
        type?: string | undefined;
    }

    interface PolylineFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface PolylineFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: PolylineFillGradientStop[] | undefined;
    }

    interface PolylineFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: PolylineFillGradient | undefined;
    }

    interface PolylineStartCapFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface PolylineStartCapStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface PolylineStartCap {
        fill?: string | PolylineStartCapFill | undefined;
        stroke?: string | PolylineStartCapStroke | undefined;
        type?: string | undefined;
    }

    interface PolylineStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface PolylineOptions {
        name?: string | undefined;
        endCap?: string | PolylineEndCap | undefined;
        fill?: string | PolylineFill | undefined;
        startCap?: string | PolylineStartCap | undefined;
        stroke?: PolylineStroke | undefined;
    }
    interface PolylineEvent {
        sender: Polyline;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Rect extends Observable {
        options: RectOptions;

        constructor(x?: number, y?: number, width?: number, height?: number);

        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface RectOptions {
        name?: string | undefined;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Rectangle extends Observable {
        options: RectangleOptions;

        drawingElement: kendo.drawing.Path;

        constructor(options?: RectangleOptions);

        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface RectangleFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface RectangleFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: RectangleFillGradientStop[] | undefined;
    }

    interface RectangleFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: RectangleFillGradient | undefined;
    }

    interface RectangleStroke {
        color?: string | undefined;
        width?: number | undefined;
    }

    interface RectangleOptions {
        name?: string | undefined;
        fill?: string | RectangleFill | undefined;
        height?: number | undefined;
        stroke?: RectangleStroke | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }
    interface RectangleEvent {
        sender: Rectangle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Shape extends Observable {
        options: ShapeOptions;

        connectors: any;
        dataItem: any;
        shapeVisual: any;
        visual: kendo.dataviz.diagram.Group;

        constructor(options?: ShapeOptions);

        position(): void;
        position(point: kendo.dataviz.diagram.Point): void;
        clone(): kendo.dataviz.diagram.Shape;
        select(value: boolean): void;
        connections(type?: string): any;
        getConnector(): void;
        getPosition(side: string): void;
        redraw(options: any): void;
        redrawVisual(): void;
    }

    interface ShapeConnectorDefaultsFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface ShapeConnectorDefaultsHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface ShapeConnectorDefaultsHoverStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ShapeConnectorDefaultsHover {
        fill?: string | ShapeConnectorDefaultsHoverFill | undefined;
        stroke?: string | ShapeConnectorDefaultsHoverStroke | undefined;
    }

    interface ShapeConnectorDefaultsStroke {
        color?: string | undefined;
        dashType?: string | undefined;
        width?: number | undefined;
    }

    interface ShapeConnectorDefaults {
        width?: number | undefined;
        height?: number | undefined;
        hover?: ShapeConnectorDefaultsHover | undefined;
        fill?: string | ShapeConnectorDefaultsFill | undefined;
        stroke?: string | ShapeConnectorDefaultsStroke | undefined;
    }

    interface ShapeConnector {
        name?: string | undefined;
        description?: string | undefined;
        position?: Function | undefined;
    }

    interface ShapeContent {
        align?: string | undefined;
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        text?: string | undefined;
    }

    interface ShapeEditable {
        connect?: boolean | undefined;
    }

    interface ShapeFillGradientStop {
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface ShapeFillGradient {
        type?: string | undefined;
        center?: any;
        radius?: number | undefined;
        start?: any;
        end?: any;
        stops?: ShapeFillGradientStop[] | undefined;
    }

    interface ShapeFill {
        color?: string | undefined;
        opacity?: number | undefined;
        gradient?: ShapeFillGradient | undefined;
    }

    interface ShapeHoverFill {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    interface ShapeHover {
        fill?: string | ShapeHoverFill | undefined;
    }

    interface ShapeRotation {
        angle?: number | undefined;
    }

    interface ShapeStroke {
        color?: string | undefined;
        width?: number | undefined;
        dashType?: string | undefined;
    }

    interface ShapeOptions {
        name?: string | undefined;
        id?: string | undefined;
        editable?: boolean | ShapeEditable | undefined;
        path?: string | undefined;
        stroke?: ShapeStroke | undefined;
        type?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
        minWidth?: number | undefined;
        minHeight?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        fill?: string | ShapeFill | undefined;
        hover?: ShapeHover | undefined;
        connectors?: ShapeConnector[] | undefined;
        rotation?: ShapeRotation | undefined;
        content?: ShapeContent | undefined;
        selectable?: boolean | undefined;
        visual?: Function | undefined;
        connectorDefaults?: ShapeConnectorDefaults | undefined;
    }
    interface ShapeEvent {
        sender: Shape;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class TextBlock extends Observable {
        options: TextBlockOptions;

        drawingElement: kendo.drawing.Text;

        constructor(options?: TextBlockOptions);

        content(): string;
        content(content: string): void;
        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface TextBlockOptions {
        name?: string | undefined;
        color?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        height?: number | undefined;
        text?: string | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }
    interface TextBlockEvent {
        sender: TextBlock;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }
}
declare namespace kendo {
    class Color extends Observable {
        options: ColorOptions;

        diff(): number;
        equals(): boolean;
        toHSV(): any;
        toRGB(): any;
        toBytes(): any;
        toHex(): string;
        toCss(): string;
        toCssRgba(): string;
        toDisplay(): string;
    }

    interface ColorOptions {
        name?: string | undefined;
    }
    interface ColorEvent {
        sender: Color;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    namespace date {
        var MS_PER_DAY: number;
        var MS_PER_HOUR: number;
        var MS_PER_MINUTE: number;

        function setDayOfWeek(targetDate: Date, dayOfWeek: number, direction: number): void;
        function dayOfWeek(targetDate: Date, dayOfWeek: number, direction: number): Date;
        function weekInYear(date: Date, weekStart?: number): number;
        function getDate(date: Date): Date;
        function isInDateRange(targetDate: Date, lowerLimitDate: Date, upperLimitDate: Date): boolean;
        function isInTimeRange(targetDate: Date, lowerLimitDate: Date, upperLimitDate: Date): boolean;
        function isToday(targetDate: Date): boolean;
        function nextDay(targetDate: Date): Date;
        function previousDay(targetDate: Date): Date;
        function toUtcTime(targetDate: Date): number;
        function setTime(targetDate: Date, millisecondsToAdd: number, ignoreDST: boolean): void;
        function setHours(targetDate: Date, sourceDate: number): Date;
        function addDays(targetDate: Date, numberOfDaysToAdd: number): Date;
        function today(): Date;
        function toInvariantTime(targetDate: Date): Date;
        function firstDayOfMonth(targetDate: Date): Date;
        function lastDayOfMonth(targetDate: Date): Date;
        function getMilliseconds(targetDate: Date): number;
    }

    namespace drawing {
        function align(elements: any, rect: kendo.geometry.Rect, alignment: string): void;
        function drawDOM(element: JQuery, options: any): JQueryPromise<any>;
        function exportImage(group: kendo.drawing.Group, options?: any): JQueryPromise<any>;
        function exportPDF(group: kendo.drawing.Group, options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        function exportSVG(group: kendo.drawing.Group, options?: any): JQueryPromise<any>;
        function fit(element: kendo.drawing.Element, rect: kendo.geometry.Rect): void;
        function stack(elements: any): void;
        function vAlign(elements: any, rect: kendo.geometry.Rect, alignment: string): void;
        function vStack(elements: any): void;
        function vWrap(elements: any, rect: kendo.geometry.Rect): any;
        function wrap(elements: any, rect: kendo.geometry.Rect): any;
    }

    namespace effects {
        function box(element: HTMLElement): any;
        function fillScale(firstElement: HTMLElement, secondElement: HTMLElement): number;
        function fitScale(firstElement: HTMLElement, secondElement: HTMLElement): number;
        function transformOrigin(firstElement: HTMLElement, secondElement: HTMLElement): any;
    }

    function alert(text: string): void;
    function antiForgeryTokens(): any;
    function bind(element: string, viewModel: any, namespace?: any): void;
    function bind(element: string, viewModel: kendo.data.ObservableObject, namespace?: any): void;
    function bind(element: JQuery, viewModel: any, namespace?: any): void;
    function bind(element: JQuery, viewModel: kendo.data.ObservableObject, namespace?: any): void;
    function bind(element: Element, viewModel: any, namespace?: any): void;
    function bind(element: Element, viewModel: kendo.data.ObservableObject, namespace?: any): void;
    function confirm(text: string): JQueryPromise<any>;
    function culture(culture: string): void;
    function destroy(element: string): void;
    function destroy(element: JQuery): void;
    function destroy(element: Element): void;
    function guid(): string;
    function htmlEncode(value: string): string;
    function observableHierarchy(array: any): void;
    function observableFileManagerData(array: any): void;
    function parseDate(value: string, formats?: string, culture?: string): Date | null;
    function parseDate(value: string, formats?: any, culture?: string): Date | null;
    function parseExactDate(value: string, formats?: string, culture?: string): Date | null;
    function parseExactDate(value: string, formats?: any, culture?: string): Date | null;
    function parseFloat(value: string, culture?: string): number;
    function parseInt(value: string, culture?: string): number;
    function parseColor(color: string, noerror: boolean): kendo.Color;
    function prompt(text: string, defaultValue: string): JQueryPromise<any>;
    function proxyModelSetters(): void;
    function proxyModelSetters(data: kendo.data.Model): void;
    function resize(element: string, force: boolean): void;
    function resize(element: JQuery, force: boolean): void;
    function resize(element: Element, force: boolean): void;
    function saveAs(options: any): void;
    function stringify(value: any): string;
    function throttle(fn: Function, timeout: number): Function;
    function touchScroller(element: string): void;
    function touchScroller(element: JQuery): void;
    function touchScroller(element: Element): void;
    function toString(value: Date, format: string, culture?: string): string;
    function toString(value: number, format: string, culture?: string): string;
    function unbind(element: string): void;
    function unbind(element: JQuery): void;
    function unbind(element: Element): void;

    namespace pdf {
        function defineFont(map: any): void;
    }

    namespace timezone {
        function offset(utcTime: Date, timezone: string): number;
        function offset(utcTime: number, timezone: string): number;
        function convert(targetDate: Date, fromOffset: number, toOffset: number): Date;
        function convert(targetDate: Date, fromOffset: number, toOffset: string): Date;
        function convert(targetDate: Date, fromOffset: string, toOffset: number): Date;
        function convert(targetDate: Date, fromOffset: string, toOffset: string): Date;
        function apply(targetDate: Date, offset: number): Date;
        function apply(targetDate: Date, offset: string): Date;
        function remove(targetDate: Date, offset: number): Date;
        function remove(targetDate: Date, offset: string): Date;
        function abbr(targetDate: Date, timezone: string): string;
        function toLocalDate(targetDate: Date): Date;
        function toLocalDate(targetDate: number): Date;
    }
}
declare namespace kendo.spreadsheet {
    class CustomFilter extends Observable {
        options: CustomFilterOptions;

        init(options: any): void;
    }

    interface CustomFilterOptions {
        name?: string | undefined;
    }

    interface CustomFilterEvent {
        sender: CustomFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class DynamicFilter extends Observable {
        options: DynamicFilterOptions;

        init(options: any): void;
    }

    interface DynamicFilterOptions {
        name?: string | undefined;
    }

    interface DynamicFilterEvent {
        sender: DynamicFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Range extends Observable {
        options: RangeOptions;

        background(): string;
        background(value?: string): void;
        bold(): boolean;
        bold(value?: boolean): void;
        borderBottom(): any;
        borderBottom(value?: any): void;
        borderLeft(): any;
        borderLeft(value?: any): void;
        borderRight(): any;
        borderRight(value?: any): void;
        borderTop(): any;
        borderTop(value?: any): void;
        color(): string;
        color(value?: string): void;
        comment(): string;
        comment(value?: string): void;
        clear(options?: any): void;
        clearFilter(indices: any): void;
        clearFilter(indices: number): void;
        editor(): string;
        editor(value?: string): void;
        enable(): boolean;
        enable(value?: boolean): void;
        fillFrom(srcRange: Range, direction?: number): void;
        fillFrom(srcRange: string, direction?: number): void;
        filter(filter: boolean): void;
        filter(filter: any): void;
        fontFamily(): string;
        fontFamily(value?: string): void;
        fontSize(): number;
        fontSize(value?: number): void;
        forEachCell(callback: Function): void;
        format(): string;
        format(format?: string): void;
        formula(): string;
        formula(formula?: string): void;
        hasFilter(): boolean;
        input(): any;
        input(value?: string): void;
        input(value?: number): void;
        input(value?: Date): void;
        isSortable(): boolean;
        isFilterable(): boolean;
        italic(): boolean;
        italic(value?: boolean): void;
        link(): string;
        link(url?: string): void;
        merge(): void;
        select(): void;
        sort(sort: number): void;
        sort(sort: any): void;
        textAlign(): string;
        textAlign(value?: string): void;
        unmerge(): void;
        values(): any;
        values(values: any): void;
        validation(): any;
        validation(value?: any): void;
        value(): any;
        value(value?: string): void;
        value(value?: number): void;
        value(value?: Date): void;
        verticalAlign(): string;
        verticalAlign(value?: string): void;
        wrap(): boolean;
        wrap(value?: boolean): void;
    }

    interface RangeOptions {
        name?: string | undefined;
    }

    interface RangeEvent {
        sender: Range;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Sheet extends Observable {
        options: SheetOptions;

        clearFilter(indexes: number): void;
        clearFilter(indexes: any): void;
        columnWidth(): void;
        columnWidth(index: number, width?: number): void;
        batch(callback: Function, changeEventArgs: any): void;
        deleteColumn(index: number): void;
        deleteRow(index: number): void;
        fromJSON(data: any): void;
        frozenColumns(): number;
        frozenColumns(count?: number): void;
        frozenRows(): number;
        frozenRows(count?: number): void;
        hideColumn(index: number): void;
        hideRow(index: number): void;
        insertColumn(index: number): void;
        insertRow(index: number): void;
        range(ref: string): kendo.spreadsheet.Range;
        range(rowIndex: number, columnIndex: number, rowCount?: number, columnCount?: number): kendo.spreadsheet.Range;
        rowHeight(): void;
        rowHeight(index: number, width?: number): void;
        selection(): kendo.spreadsheet.Range;
        setDataSource(dataSource: kendo.data.DataSource, columns?: any): void;
        showGridLines(): boolean;
        showGridLines(showGridLines?: boolean): void;
        toJSON(): void;
        unhideColumn(index: number): void;
        unhideRow(index: number): void;
    }

    interface SheetOptions {
        name?: string | undefined;
        change?(e: SheetChangeEvent): void;
    }

    interface SheetEvent {
        sender: Sheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SheetChangeEvent extends SheetEvent {
    }

    class TopFilter extends Observable {
        options: TopFilterOptions;

        init(options: any): void;
    }

    interface TopFilterOptions {
        name?: string | undefined;
    }

    interface TopFilterEvent {
        sender: TopFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ValueFilter extends Observable {
        options: ValueFilterOptions;

        init(options: any): void;
    }

    interface ValueFilterOptions {
        name?: string | undefined;
    }

    interface ValueFilterEvent {
        sender: ValueFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    function defineFunction(name: String, handler: Function): any;
}

declare namespace kendo.stepper {
    class Step extends kendo.Class {
        options: StepOptions;

        constructor(options?: StepOptions);

        deselect(): void;
        enable(value: boolean): void;
        select(): void;

        getEnabled(): boolean;
        getIndex(): number;
        setPrevious(value: boolean): void;
        getSelected(): boolean;
        getSelectable(): boolean;
        setValid(value: boolean): void;
    }

    interface StepOptions {
        label?: string | undefined;
        icon?: string | undefined;
        successIcon?: string | undefined;
        iconTemplate?: string | Function | undefined;
        enabled?: boolean | undefined;
        error?: boolean | undefined;
        selected?: boolean | undefined;
        isFirstStep?: boolean | undefined;
        isLastStep?: boolean | undefined;
        indicatorVisible?: boolean | undefined;
        labelVisible?: boolean | undefined;
        index?: number | undefined;
        previous?: boolean | undefined;
        selectable?: boolean | undefined;
    }
}

declare namespace kendo.wizard {
    class Step extends kendo.Class {
        options: WizardStepOptions;

        buttons(): any[];
        load(): void;
        resetButtons(): void;
    }

    interface WizardStepOptions {
        index?: number | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        contentId?: string | undefined;
        markupContainer?: JQuery | undefined;
        form?: any;
        formTag?: string | undefined;
        actionBar?: boolean | undefined;
        buttons?: any[] | undefined;
        pager?: boolean | undefined;
        selected?: boolean | undefined;
        enabled?: boolean | undefined;
        className?: string | undefined;
        totalSteps: number;
        wizardId?: string | undefined;
        messages?: any;
    }
}

declare namespace kendo.mobile.ui {
    class ActionSheet extends kendo.mobile.ui.Widget {
        static fn: ActionSheet;

        options: ActionSheetOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ActionSheet;

        constructor(element: Element, options?: ActionSheetOptions);

        close(): void;
        destroy(): void;
        open(target: JQuery, context: any): void;
    }

    interface ActionSheetPopup {
        direction?: number | string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ActionSheetOptions {
        name?: string | undefined;
        cancel?: string | undefined;
        popup?: ActionSheetPopup | undefined;
        type?: string | undefined;
        close?(e: ActionSheetEvent): void;
        open?(e: ActionSheetOpenEvent): void;
    }
    interface ActionSheetEvent {
        sender: ActionSheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ActionSheetOpenEvent extends ActionSheetEvent {
        target?: JQuery | undefined;
        context?: JQuery | undefined;
    }

    class BackButton extends kendo.mobile.ui.Widget {
        static fn: BackButton;

        options: BackButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): BackButton;

        constructor(element: Element, options?: BackButtonOptions);

        destroy(): void;
    }

    interface BackButtonOptions {
        name?: string | undefined;
        click?(e: BackButtonClickEvent): void;
    }
    interface BackButtonEvent {
        sender: BackButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface BackButtonClickEvent extends BackButtonEvent {
        target?: JQuery | undefined;
        button?: JQuery | undefined;
    }

    class Button extends kendo.mobile.ui.Widget {
        static fn: Button;

        options: ButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Button;

        constructor(element: Element, options?: ButtonOptions);

        badge(value: string): string;
        badge(value: boolean): string;
        destroy(): void;
        enable(enable: boolean): void;
    }

    interface ButtonOptions {
        name?: string | undefined;
        badge?: string | undefined;
        clickOn?: string | undefined;
        enable?: boolean | undefined;
        icon?: string | undefined;
        click?(e: ButtonClickEvent): void;
    }
    interface ButtonEvent {
        sender: Button;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonClickEvent extends ButtonEvent {
        target?: JQuery | undefined;
        button?: JQuery | undefined;
    }

    class ButtonGroup extends kendo.mobile.ui.Widget {
        static fn: ButtonGroup;

        options: ButtonGroupOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ButtonGroup;

        constructor(element: Element, options?: ButtonGroupOptions);

        badge(button: string, value: string): string;
        badge(button: string, value: boolean): string;
        badge(button: number, value: string): string;
        badge(button: number, value: boolean): string;
        current(): JQuery;
        destroy(): void;
        enable(enable: boolean): void;
        select(li: JQuery): void;
        select(li: number): void;
    }

    interface ButtonGroupOptions {
        name?: string | undefined;
        enable?: boolean | undefined;
        index?: number | undefined;
        selectOn?: string | undefined;
        select?(e: ButtonGroupSelectEvent): void;
    }
    interface ButtonGroupEvent {
        sender: ButtonGroup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonGroupSelectEvent extends ButtonGroupEvent {
        index?: number | undefined;
    }

    class Collapsible extends kendo.mobile.ui.Widget {
        static fn: Collapsible;

        options: CollapsibleOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Collapsible;

        constructor(element: Element, options?: CollapsibleOptions);

        collapse(instant: boolean): void;
        destroy(): void;
        expand(instant?: boolean): void;
        resize(): void;
        toggle(instant?: boolean): void;
    }

    interface CollapsibleOptions {
        name?: string | undefined;
        animation?: boolean | undefined;
        collapsed?: boolean | undefined;
        expandIcon?: string | undefined;
        iconPosition?: string | undefined;
        inset?: boolean | undefined;
        collapse?(e: CollapsibleEvent): void;
        expand?(e: CollapsibleEvent): void;
    }
    interface CollapsibleEvent {
        sender: Collapsible;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class DetailButton extends kendo.mobile.ui.Widget {
        static fn: DetailButton;

        options: DetailButtonOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DetailButton;

        constructor(element: Element, options?: DetailButtonOptions);

        destroy(): void;
    }

    interface DetailButtonOptions {
        name?: string | undefined;
        click?(e: DetailButtonClickEvent): void;
    }
    interface DetailButtonEvent {
        sender: DetailButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DetailButtonClickEvent extends DetailButtonEvent {
        target?: JQuery | undefined;
        button?: JQuery | undefined;
    }

    class Drawer extends kendo.mobile.ui.Widget {
        static fn: Drawer;

        options: DrawerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Drawer;

        constructor(element: Element, options?: DrawerOptions);

        destroy(): void;
        hide(): void;
        show(): void;
    }

    interface DrawerOptions {
        name?: string | undefined;
        container?: JQuery | undefined;
        position?: string | undefined;
        swipeToOpen?: boolean | undefined;
        swipeToOpenViews?: any;
        title?: string | undefined;
        views?: any;
        afterHide?(e: DrawerAfterHideEvent): void;
        beforeShow?(e: DrawerEvent): void;
        hide?(e: DrawerHideEvent): void;
        init?(e: DrawerInitEvent): void;
        show?(e: DrawerShowEvent): void;
    }
    interface DrawerEvent {
        sender: Drawer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DrawerAfterHideEvent extends DrawerEvent {
    }

    interface DrawerHideEvent extends DrawerEvent {
    }

    interface DrawerInitEvent extends DrawerEvent {
    }

    interface DrawerShowEvent extends DrawerEvent {
    }

    class Layout extends kendo.mobile.ui.Widget {
        static fn: Layout;

        options: LayoutOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Layout;

        constructor(element: Element, options?: LayoutOptions);
    }

    interface LayoutOptions {
        name?: string | undefined;
        id?: string | undefined;
        platform?: string | undefined;
        hide?(e: LayoutHideEvent): void;
        init?(e: LayoutInitEvent): void;
        show?(e: LayoutShowEvent): void;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface LayoutHideEvent extends LayoutEvent {
        layout?: JQuery | undefined;
        view?: JQuery | undefined;
    }

    interface LayoutInitEvent extends LayoutEvent {
        layout?: JQuery | undefined;
    }

    interface LayoutShowEvent extends LayoutEvent {
        layout?: JQuery | undefined;
        view?: JQuery | undefined;
    }

    class ListView extends kendo.mobile.ui.Widget {
        static fn: ListView;

        options: ListViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ListView;

        constructor(element: Element, options?: ListViewOptions);

        append(dataItems: any): void;
        prepend(dataItems: any): void;
        replace(dataItems: any): void;
        remove(dataItems: any): void;
        setDataItem(item: JQuery, dataItem: kendo.data.Model): void;
        destroy(): void;
        items(): JQuery;
        refresh(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ListViewFilterable {
        placeholder?: string | undefined;
        autoFilter?: boolean | undefined;
        field?: string | undefined;
        ignoreCase?: boolean | undefined;
        operator?: string | undefined;
    }

    interface ListViewMessages {
        loadMoreText?: string | undefined;
        pullTemplate?: string | undefined;
        refreshTemplate?: string | undefined;
        releaseTemplate?: string | undefined;
    }

    interface ListViewOptions {
        name?: string | undefined;
        appendOnRefresh?: boolean | undefined;
        autoBind?: boolean | undefined;
        dataSource?: kendo.data.DataSource | any | undefined;
        endlessScroll?: boolean | undefined;
        fixedHeaders?: boolean | undefined;
        headerTemplate?: string | Function | undefined;
        loadMore?: boolean | undefined;
        messages?: ListViewMessages | undefined;
        pullToRefresh?: boolean | undefined;
        pullParameters?: Function | undefined;
        style?: string | undefined;
        template?: string | Function | undefined;
        type?: string | undefined;
        filterable?: boolean | ListViewFilterable | undefined;
        virtualViewSize?: number | undefined;
        click?(e: ListViewClickEvent): void;
        dataBound?(e: ListViewEvent): void;
        dataBinding?(e: ListViewEvent): void;
        itemChange?(e: ListViewEvent): void;
    }
    interface ListViewEvent {
        sender: ListView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ListViewClickEvent extends ListViewEvent {
        item?: JQuery | undefined;
        target?: JQuery | undefined;
        dataItem?: any;
        button?: kendo.mobile.ui.Button | undefined;
    }

    class Loader extends kendo.mobile.ui.Widget {
        static fn: Loader;

        options: LoaderOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Loader;

        constructor(element: Element, options?: LoaderOptions);

        hide(): void;
        show(): void;
    }

    interface LoaderOptions {
        name?: string | undefined;
    }
    interface LoaderEvent {
        sender: Loader;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class ModalView extends kendo.mobile.ui.Widget {
        static fn: ModalView;

        options: ModalViewOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ModalView;

        constructor(element: Element, options?: ModalViewOptions);

        close(): void;
        destroy(): void;
        open(target?: JQuery): void;
    }

    interface ModalViewOptions {
        name?: string | undefined;
        height?: number | undefined;
        modal?: boolean | undefined;
        width?: number | undefined;
        beforeOpen?(e: ModalViewBeforeOpenEvent): void;
        close?(e: ModalViewCloseEvent): void;
        init?(e: ModalViewInitEvent): void;
        open?(e: ModalViewOpenEvent): void;
    }
    interface ModalViewEvent {
        sender: ModalView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ModalViewBeforeOpenEvent extends ModalViewEvent {
        target?: JQuery | undefined;
    }

    interface ModalViewCloseEvent extends ModalViewEvent {
    }

    interface ModalViewInitEvent extends ModalViewEvent {
    }

    interface ModalViewOpenEvent extends ModalViewEvent {
        target?: JQuery | undefined;
    }

    class NavBar extends kendo.mobile.ui.Widget {
        static fn: NavBar;

        options: NavBarOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): NavBar;

        constructor(element: Element, options?: NavBarOptions);

        destroy(): void;
        title(value: string): void;
    }

    interface NavBarOptions {
        name?: string | undefined;
    }
    interface NavBarEvent {
        sender: NavBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Pane extends kendo.mobile.ui.Widget {
        static fn: Pane;

        options: PaneOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Pane;

        constructor(element: Element, options?: PaneOptions);

        destroy(): void;
        hideLoading(): void;
        navigate(url: string, transition: string): void;
        replace(url: string, transition: string): void;
        showLoading(): void;
        view(): kendo.mobile.ui.View;
    }

    interface PaneOptions {
        name?: string | undefined;
        collapsible?: boolean | undefined;
        initial?: string | undefined;
        layout?: string | undefined;
        loading?: string | undefined;
        portraitWidth?: number | undefined;
        transition?: string | undefined;
        navigate?(e: PaneNavigateEvent): void;
        viewShow?(e: PaneViewShowEvent): void;
    }
    interface PaneEvent {
        sender: Pane;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PaneNavigateEvent extends PaneEvent {
        url?: JQuery | undefined;
    }

    interface PaneViewShowEvent extends PaneEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    class PopOver extends kendo.mobile.ui.Widget {
        static fn: PopOver;

        options: PopOverOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): PopOver;

        constructor(element: Element, options?: PopOverOptions);

        close(): void;
        destroy(): void;
        open(target: JQuery): void;
    }

    interface PopOverPane {
        initial?: string | undefined;
        layout?: string | undefined;
        loading?: string | undefined;
        transition?: string | undefined;
    }

    interface PopOverPopup {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface PopOverOptions {
        name?: string | undefined;
        pane?: PopOverPane | undefined;
        popup?: PopOverPopup | undefined;
        close?(e: PopOverCloseEvent): void;
        open?(e: PopOverOpenEvent): void;
    }
    interface PopOverEvent {
        sender: PopOver;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PopOverCloseEvent extends PopOverEvent {
    }

    interface PopOverOpenEvent extends PopOverEvent {
        target?: JQuery | undefined;
    }

    class ScrollView extends kendo.mobile.ui.Widget {
        static fn: ScrollView;

        options: ScrollViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ScrollView;

        constructor(element: Element, options?: ScrollViewOptions);

        content(content: string): void;
        content(content: JQuery): void;
        destroy(): void;
        next(): void;
        prev(): void;
        refresh(): void;
        scrollTo(page: number, instant: boolean): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        value(dataItem: any): any;
    }

    interface ScrollViewOptions {
        name?: string | undefined;
        autoBind?: boolean | undefined;
        bounceVelocityThreshold?: number | undefined;
        contentHeight?: number | string | undefined;
        dataSource?: kendo.data.DataSource | any | undefined;
        duration?: number | undefined;
        emptyTemplate?: string | undefined;
        enablePager?: boolean | undefined;
        itemsPerPage?: number | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        template?: string | undefined;
        velocityThreshold?: number | undefined;
        changing?(e: ScrollViewChangingEvent): void;
        change?(e: ScrollViewChangeEvent): void;
        refresh?(e: ScrollViewRefreshEvent): void;
    }
    interface ScrollViewEvent {
        sender: ScrollView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ScrollViewChangingEvent extends ScrollViewEvent {
        currentPage?: number | undefined;
        nextPage?: number | undefined;
    }

    interface ScrollViewChangeEvent extends ScrollViewEvent {
        page?: number | undefined;
        element?: JQuery | undefined;
        data?: any;
    }

    interface ScrollViewRefreshEvent extends ScrollViewEvent {
        pageCount?: number | undefined;
        page?: number | undefined;
    }

    class Scroller extends kendo.mobile.ui.Widget {
        static fn: Scroller;

        options: ScrollerOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Scroller;

        constructor(element: Element, options?: ScrollerOptions);

        animatedScrollTo(x: number, y: number): void;
        contentResized(): void;
        destroy(): void;
        disable(): void;
        enable(): void;
        height(): number;
        pullHandled(): void;
        reset(): void;
        scrollHeight(): void;
        scrollTo(x: number, y: number): void;
        scrollWidth(): void;
        zoomOut(): void;
    }

    interface ScrollerMessages {
        pullTemplate?: string | undefined;
        refreshTemplate?: string | undefined;
        releaseTemplate?: string | undefined;
    }

    interface ScrollerOptions {
        name?: string | undefined;
        elastic?: boolean | undefined;
        messages?: ScrollerMessages | undefined;
        pullOffset?: number | undefined;
        pullToRefresh?: boolean | undefined;
        useNative?: boolean | undefined;
        visibleScrollHints?: boolean | undefined;
        zoom?: boolean | undefined;
        pull?(e: ScrollerEvent): void;
        resize?(e: ScrollerEvent): void;
        scroll?(e: ScrollerScrollEvent): void;
    }
    interface ScrollerEvent {
        sender: Scroller;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ScrollerScrollEvent extends ScrollerEvent {
        scrollTop?: number | undefined;
        scrollLeft?: number | undefined;
    }

    class SplitView extends kendo.mobile.ui.Widget {
        static fn: SplitView;

        options: SplitViewOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): SplitView;

        constructor(element: Element, options?: SplitViewOptions);

        destroy(): void;
        expandPanes(): void;
        collapsePanes(): void;
    }

    interface SplitViewOptions {
        name?: string | undefined;
        style?: string | undefined;
        init?(e: SplitViewInitEvent): void;
        show?(e: SplitViewShowEvent): void;
    }
    interface SplitViewEvent {
        sender: SplitView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SplitViewInitEvent extends SplitViewEvent {
        view?: JQuery | undefined;
    }

    interface SplitViewShowEvent extends SplitViewEvent {
        view?: JQuery | undefined;
    }

    class Switch extends kendo.mobile.ui.Widget {
        static fn: Switch;

        options: SwitchOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Switch;

        constructor(element: Element, options?: SwitchOptions);

        check(): boolean;
        check(check: boolean): void;
        destroy(): void;
        enable(enable: boolean): void;
        refresh(): void;
        toggle(): void;
    }

    interface SwitchOptions {
        name?: string | undefined;
        checked?: boolean | undefined;
        enable?: boolean | undefined;
        offLabel?: string | undefined;
        onLabel?: string | undefined;
        change?(e: SwitchChangeEvent): void;
    }
    interface SwitchEvent {
        sender: Switch;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SwitchChangeEvent extends SwitchEvent {
        checked?: any;
    }

    class TabStrip extends kendo.mobile.ui.Widget {
        static fn: TabStrip;

        options: TabStripOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TabStrip;

        constructor(element: Element, options?: TabStripOptions);

        badge(tab: string, value: string): string;
        badge(tab: string, value: boolean): string;
        badge(tab: number, value: string): string;
        badge(tab: number, value: boolean): string;
        currentItem(): JQuery;
        destroy(): void;
        switchTo(url: string): void;
        switchTo(url: number): void;
        switchByFullUrl(url: string): void;
        clear(): void;
    }

    interface TabStripOptions {
        name?: string | undefined;
        selectedIndex?: number | undefined;
        select?(e: TabStripSelectEvent): void;
    }
    interface TabStripEvent {
        sender: TabStrip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: JQuery | undefined;
    }

    class View extends kendo.mobile.ui.Widget {
        static fn: View;

        options: ViewOptions;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): View;

        constructor(element: Element, options?: ViewOptions);

        contentElement(): void;
        destroy(): void;
        enable(enable: boolean): void;
    }

    interface ViewOptions {
        name?: string | undefined;
        model?: string | undefined;
        reload?: boolean | undefined;
        scroller?: any;
        stretch?: boolean | undefined;
        title?: string | undefined;
        useNativeScrolling?: boolean | undefined;
        zoom?: boolean | undefined;
        afterShow?(e: ViewAfterShowEvent): void;
        beforeHide?(e: ViewBeforeHideEvent): void;
        beforeShow?(e: ViewBeforeShowEvent): void;
        hide?(e: ViewHideEvent): void;
        init?(e: ViewInitEvent): void;
        show?(e: ViewShowEvent): void;
        transitionStart?(e: ViewTransitionStartEvent): void;
        transitionEnd?(e: ViewTransitionEndEvent): void;
    }
    interface ViewEvent {
        sender: View;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ViewAfterShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    interface ViewBeforeHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    interface ViewBeforeShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    interface ViewHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    interface ViewInitEvent extends ViewEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    interface ViewShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View | undefined;
    }

    interface ViewTransitionStartEvent extends ViewEvent {
        type?: string | undefined;
    }

    interface ViewTransitionEndEvent extends ViewEvent {
        type?: string | undefined;
    }
}
declare namespace kendo.ooxml {
    class Workbook extends Observable {
        options: WorkbookOptions;

        sheets: WorkbookSheet[];

        constructor(options?: WorkbookOptions);

        toDataURL(): string;
        toDataURLAsync(): JQueryPromise<any>;
    }

    interface WorkbookSheetColumn {
        autoWidth?: boolean | undefined;
        index?: number | undefined;
        width?: number | undefined;
    }

    interface WorkbookSheetFilter {
        from?: number | undefined;
        to?: number | undefined;
    }

    interface WorkbookSheetFreezePane {
        colSplit?: number | undefined;
        rowSplit?: number | undefined;
    }

    interface WorkbookSheetRowCellBorderBottom {
        color?: string | undefined;
        size?: number | undefined;
    }

    interface WorkbookSheetRowCellBorderLeft {
        color?: string | undefined;
        size?: number | undefined;
    }

    interface WorkbookSheetRowCellBorderRight {
        color?: string | undefined;
        size?: number | undefined;
    }

    interface WorkbookSheetRowCellBorderTop {
        color?: string | undefined;
        size?: number | undefined;
    }

    interface WorkbookSheetRowCell {
        background?: string | undefined;
        borderBottom?: WorkbookSheetRowCellBorderBottom | undefined;
        borderLeft?: WorkbookSheetRowCellBorderLeft | undefined;
        borderTop?: WorkbookSheetRowCellBorderTop | undefined;
        borderRight?: WorkbookSheetRowCellBorderRight | undefined;
        bold?: boolean | undefined;
        color?: string | undefined;
        colSpan?: number | undefined;
        fontFamily?: string | undefined;
        fontName?: string | undefined;
        fontSize?: number | undefined;
        format?: string | undefined;
        formula?: string | undefined;
        hAlign?: string | undefined;
        index?: any;
        italic?: boolean | undefined;
        rowSpan?: number | undefined;
        textAlign?: string | undefined;
        underline?: boolean | undefined;
        wrap?: boolean | undefined;
        vAlign?: string | undefined;
        verticalAlign?: string | undefined;
        value?: Date | number | string | boolean | undefined;
    }

    interface WorkbookSheetRow {
        cells?: WorkbookSheetRowCell[] | undefined;
        index?: number | undefined;
        height?: number | undefined;
        type?: string | undefined;
    }

    interface WorkbookSheet {
        columns?: WorkbookSheetColumn[] | undefined;
        freezePane?: WorkbookSheetFreezePane | undefined;
        frozenColumns?: number | undefined;
        frozenRows?: number | undefined;
        filter?: WorkbookSheetFilter | undefined;
        mergedCells?: any;
        name?: string | undefined;
        rows?: WorkbookSheetRow[] | undefined;
        showGridLines?: boolean | undefined;
        title?: string | undefined;
    }

    interface WorkbookOptions {
        name?: string | undefined;
        creator?: string | undefined;
        date?: Date | undefined;
        sheets?: WorkbookSheet[] | undefined;
    }
    interface WorkbookEvent {
        sender: Workbook;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }
}

declare namespace kendo.dataviz.drawing {
    class Arc extends kendo.drawing.Element {
        options: ArcOptions;

        constructor(geometry: kendo.geometry.Arc, options?: ArcOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Arc;
        geometry(value: kendo.geometry.Arc): void;
        fill(color: string, opacity?: number): kendo.drawing.Arc;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Arc;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ArcOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Circle extends kendo.drawing.Element {
        options: CircleOptions;

        constructor(geometry: kendo.geometry.Circle, options?: CircleOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Circle;
        geometry(value: kendo.geometry.Circle): void;
        fill(color: string, opacity?: number): kendo.drawing.Circle;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Circle;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface CircleOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Element extends kendo.Class {
        options: ElementOptions;

        parent: kendo.drawing.Group;

        constructor(options?: ElementOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ElementOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        opacity?: number | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface ElementEvent {
        sender: Element;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FillOptions {
        color?: string | undefined;
        opacity?: number | undefined;
    }

    class Gradient extends kendo.Class {
        options: GradientOptions;

        stops: any;

        constructor(options?: GradientOptions);

        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        removeStop(stop: kendo.drawing.GradientStop): void;
    }

    interface GradientOptions {
        name?: string | undefined;
        stops?: any;
    }
    interface GradientEvent {
        sender: Gradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class GradientStop extends kendo.Class {
        options: GradientStopOptions;

        constructor(options?: GradientStopOptions);
    }

    interface GradientStopOptions {
        name?: string | undefined;
        offset?: number | undefined;
        color?: string | undefined;
        opacity?: number | undefined;
    }
    interface GradientStopEvent {
        sender: GradientStop;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Group extends kendo.drawing.Element {
        options: GroupOptions;

        children: any;

        constructor(options?: GroupOptions);

        append(element: kendo.drawing.Element): void;
        clear(): void;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        insert(position: number, element: kendo.drawing.Element): void;
        opacity(): number;
        opacity(opacity: number): void;
        remove(element: kendo.drawing.Element): void;
        removeAt(index: number): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface GroupOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        opacity?: number | undefined;
        pdf?: kendo.drawing.PDFOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface GroupEvent {
        sender: Group;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Image extends kendo.drawing.Element {
        options: ImageOptions;

        constructor(src: string, rect: kendo.geometry.Rect);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        opacity(): number;
        opacity(opacity: number): void;
        src(): string;
        src(value: string): void;
        rect(): kendo.geometry.Rect;
        rect(value: kendo.geometry.Rect): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface ImageOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        opacity?: number | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface ImageEvent {
        sender: Image;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Layout extends kendo.drawing.Group {
        options: LayoutOptions;

        constructor(rect: kendo.geometry.Rect, options?: LayoutOptions);

        rect(): kendo.geometry.Rect;
        rect(rect: kendo.geometry.Rect): void;
        reflow(): void;
    }

    interface LayoutOptions {
        name?: string | undefined;
        alignContent?: string | undefined;
        alignItems?: string | undefined;
        justifyContent?: string | undefined;
        lineSpacing?: number | undefined;
        spacing?: number | undefined;
        orientation?: string | undefined;
        wrap?: boolean | undefined;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class LinearGradient extends kendo.drawing.Gradient {
        options: LinearGradientOptions;

        stops: any;

        constructor(options?: LinearGradientOptions);

        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        end(): kendo.geometry.Point;
        end(end: any): void;
        end(end: kendo.geometry.Point): void;
        start(): kendo.geometry.Point;
        start(start: any): void;
        start(start: kendo.geometry.Point): void;
        removeStop(stop: kendo.drawing.GradientStop): void;
    }

    interface LinearGradientOptions {
        name?: string | undefined;
        stops?: any;
    }
    interface LinearGradientEvent {
        sender: LinearGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class MultiPath extends kendo.drawing.Element {
        options: MultiPathOptions;

        paths: any;

        constructor(options?: MultiPathOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.MultiPath;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(
            controlOut: any,
            controlIn: kendo.geometry.Point,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: any,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.MultiPath;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: kendo.geometry.Point,
            endPoint: any,
        ): kendo.drawing.MultiPath;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: kendo.geometry.Point,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.MultiPath;
        fill(color: string, opacity?: number): kendo.drawing.MultiPath;
        lineTo(x: number, y?: number): kendo.drawing.MultiPath;
        lineTo(x: any, y?: number): kendo.drawing.MultiPath;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        moveTo(x: number, y?: number): kendo.drawing.MultiPath;
        moveTo(x: any, y?: number): kendo.drawing.MultiPath;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.MultiPath;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.MultiPath;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface MultiPathOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface MultiPathEvent {
        sender: MultiPath;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class OptionsStore extends kendo.Class {
        options: OptionsStoreOptions;

        observer: any;

        constructor(options?: OptionsStoreOptions);

        get(field: string): any;
        set(field: string, value: any): void;
    }

    interface OptionsStoreOptions {
        name?: string | undefined;
    }
    interface OptionsStoreEvent {
        sender: OptionsStore;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PDFOptions {
        creator?: string | undefined;
        date?: Date | undefined;
        imgDPI?: number | undefined;
        keywords?: string | undefined;
        landscape?: boolean | undefined;
        margin?: any;
        paperSize?: any;
        subject?: string | undefined;
        title?: string | undefined;
    }

    class Path extends kendo.drawing.Element {
        options: PathOptions;

        segments: any;

        constructor(options?: PathOptions);

        static fromArc(arc: kendo.geometry.Arc, options?: any): kendo.drawing.Path;
        static fromPoints(points: any, options?: any): kendo.drawing.Path;
        static fromRect(rect: kendo.geometry.Rect, options?: any): kendo.drawing.Path;
        static parse(svgPath: string, options?: any): kendo.drawing.MultiPath;

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.Path;
        containsPoint(point: kendo.geometry.Point): boolean;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(
            controlOut: kendo.geometry.Point,
            controlIn: kendo.geometry.Point,
            endPoint: kendo.geometry.Point,
        ): kendo.drawing.Path;
        fill(color: string, opacity?: number): kendo.drawing.Path;
        lineTo(x: number, y?: number): kendo.drawing.Path;
        lineTo(x: any, y?: number): kendo.drawing.Path;
        lineTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        moveTo(x: number, y?: number): kendo.drawing.Path;
        moveTo(x: any, y?: number): kendo.drawing.Path;
        moveTo(x: kendo.geometry.Point, y?: number): kendo.drawing.Path;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Path;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface PathOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface PathEvent {
        sender: Path;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class RadialGradient extends kendo.drawing.Gradient {
        options: RadialGradientOptions;

        stops: any;

        constructor(options?: RadialGradientOptions);

        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        center(): kendo.geometry.Point;
        center(center: any): void;
        center(center: kendo.geometry.Point): void;
        radius(): number;
        radius(value: number): void;
        removeStop(stop: kendo.drawing.GradientStop): void;
    }

    interface RadialGradientOptions {
        name?: string | undefined;
        center?: any | kendo.geometry.Point | undefined;
        radius?: number | undefined;
        stops?: any;
    }
    interface RadialGradientEvent {
        sender: RadialGradient;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Rect extends kendo.drawing.Element {
        options: RectOptions;

        constructor(geometry: kendo.geometry.Rect, options?: RectOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        geometry(): kendo.geometry.Rect;
        geometry(value: kendo.geometry.Rect): void;
        fill(color: string, opacity?: number): kendo.drawing.Rect;
        opacity(): number;
        opacity(opacity: number): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Rect;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface RectOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Segment extends kendo.Class {
        options: SegmentOptions;

        constructor(anchor: kendo.geometry.Point, controlIn: kendo.geometry.Point, controlOut: kendo.geometry.Point);

        anchor(): kendo.geometry.Point;
        anchor(value: kendo.geometry.Point): void;
        controlIn(): kendo.geometry.Point;
        controlIn(value: kendo.geometry.Point): void;
        controlOut(): kendo.geometry.Point;
        controlOut(value: kendo.geometry.Point): void;
    }

    interface SegmentOptions {
        name?: string | undefined;
    }
    interface SegmentEvent {
        sender: Segment;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface StrokeOptions {
        color?: string | undefined;
        dashType?: string | undefined;
        lineCap?: string | undefined;
        lineJoin?: string | undefined;
        opacity?: number | undefined;
        width?: number | undefined;
    }

    class Surface extends kendo.Observable {
        options: SurfaceOptions;

        constructor(options?: SurfaceOptions);

        static create(element: JQuery, options?: any): kendo.drawing.Surface;
        static create(element: Element, options?: any): kendo.drawing.Surface;

        element: JQuery;

        clear(): void;
        draw(element: kendo.drawing.Element): void;
        eventTarget(e: any): kendo.drawing.Element;
        hideTooltip(): void;
        resize(force?: boolean): void;
        showTooltip(element: kendo.drawing.Element, options?: any): void;
    }

    interface SurfaceTooltipAnimationClose {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface SurfaceTooltipAnimationOpen {
        effects?: string | undefined;
        duration?: number | undefined;
    }

    interface SurfaceTooltipAnimation {
        close?: SurfaceTooltipAnimationClose | undefined;
        open?: SurfaceTooltipAnimationOpen | undefined;
    }

    interface SurfaceTooltip {
        animation?: boolean | SurfaceTooltipAnimation | undefined;
        appendTo?: string | JQuery | undefined;
    }

    interface SurfaceOptions {
        name?: string | undefined;
        type?: string | undefined;
        height?: string | undefined;
        width?: string | undefined;
        tooltip?: SurfaceTooltip | undefined;
        click?(e: SurfaceClickEvent): void;
        mouseenter?(e: SurfaceMouseenterEvent): void;
        mouseleave?(e: SurfaceMouseleaveEvent): void;
        tooltipClose?(e: SurfaceTooltipCloseEvent): void;
        tooltipOpen?(e: SurfaceTooltipOpenEvent): void;
    }
    interface SurfaceEvent {
        sender: Surface;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SurfaceClickEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface SurfaceMouseenterEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface SurfaceMouseleaveEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        originalEvent?: any;
    }

    interface SurfaceTooltipCloseEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        target?: kendo.drawing.Element | undefined;
    }

    interface SurfaceTooltipOpenEvent extends SurfaceEvent {
        element?: kendo.drawing.Element | undefined;
        target?: kendo.drawing.Element | undefined;
    }

    class Text extends kendo.drawing.Element {
        options: TextOptions;

        constructor(content: string, position: kendo.geometry.Point, options?: TextOptions);

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        containsPoint(point: kendo.geometry.Point): boolean;
        content(): string;
        content(value: string): void;
        fill(color: string, opacity?: number): kendo.drawing.Text;
        opacity(): number;
        opacity(opacity: number): void;
        position(): kendo.geometry.Point;
        position(value: kendo.geometry.Point): void;
        stroke(color: string, width?: number, opacity?: number): kendo.drawing.Text;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;
    }

    interface TextOptions {
        name?: string | undefined;
        clip?: kendo.drawing.Path | undefined;
        cursor?: string | undefined;
        fill?: kendo.drawing.FillOptions | undefined;
        font?: string | undefined;
        opacity?: number | undefined;
        stroke?: kendo.drawing.StrokeOptions | undefined;
        tooltip?: kendo.drawing.TooltipOptions | undefined;
        transform?: kendo.geometry.Transformation | undefined;
        visible?: boolean | undefined;
    }
    interface TextEvent {
        sender: Text;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TooltipOptions {
        autoHide?: boolean | undefined;
        content?: string | Function | undefined;
        position?: string | undefined;
        height?: number | string | undefined;
        hideDelay?: number | undefined;
        offset?: number | undefined;
        shared?: boolean | undefined;
        showAfter?: number | undefined;
        showOn?: string | undefined;
        width?: number | string | undefined;
    }
}
declare namespace kendo.dataviz.geometry {
    class Arc extends Observable {
        options: ArcOptions;

        anticlockwise: boolean;
        center: kendo.geometry.Point;
        endAngle: number;
        radiusX: number;
        radiusY: number;
        startAngle: number;

        constructor(center: any | kendo.geometry.Point, options?: ArcOptions);

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        getAnticlockwise(): boolean;
        getCenter(): kendo.geometry.Point;
        getEndAngle(): number;
        getRadiusX(): number;
        getRadiusY(): number;
        getStartAngle(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setAnticlockwise(value: boolean): kendo.geometry.Arc;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Arc;
        setEndAngle(value: number): kendo.geometry.Arc;
        setRadiusX(value: number): kendo.geometry.Arc;
        setRadiusY(value: number): kendo.geometry.Arc;
        setStartAngle(value: number): kendo.geometry.Arc;
    }

    interface ArcOptions {
        name?: string | undefined;
    }
    interface ArcEvent {
        sender: Arc;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Circle extends Observable {
        options: CircleOptions;

        center: kendo.geometry.Point;
        radius: number;

        constructor(center: any | kendo.geometry.Point, radius: number);

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        clone(): kendo.geometry.Circle;
        equals(other: kendo.geometry.Circle): boolean;
        getCenter(): kendo.geometry.Point;
        getRadius(): number;
        pointAt(angle: number): kendo.geometry.Point;
        setCenter(value: kendo.geometry.Point): kendo.geometry.Point;
        setCenter(value: any): kendo.geometry.Point;
        setRadius(value: number): kendo.geometry.Circle;
    }

    interface CircleOptions {
        name?: string | undefined;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Matrix extends Observable {
        options: MatrixOptions;

        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;

        static rotate(angle: number, x: number, y: number): kendo.geometry.Matrix;
        static scale(scaleX: number, scaleY: number): kendo.geometry.Matrix;
        static translate(x: number, y: number): kendo.geometry.Matrix;
        static unit(): kendo.geometry.Matrix;

        clone(): kendo.geometry.Matrix;
        equals(other: kendo.geometry.Matrix): boolean;
        round(digits: number): kendo.geometry.Matrix;
        multiplyCopy(matrix: kendo.geometry.Matrix): kendo.geometry.Matrix;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;
    }

    interface MatrixOptions {
        name?: string | undefined;
    }
    interface MatrixEvent {
        sender: Matrix;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Point extends Observable {
        options: PointOptions;

        x: number;
        y: number;

        constructor(x: number, y: number);

        static create(x: number, y: number): kendo.geometry.Point;
        static create(x: any, y: number): kendo.geometry.Point;
        static create(x: kendo.geometry.Point, y: number): kendo.geometry.Point;
        static min(): kendo.geometry.Point;
        static max(): kendo.geometry.Point;
        static minPoint(): kendo.geometry.Point;
        static maxPoint(): kendo.geometry.Point;

        clone(): kendo.geometry.Point;
        distanceTo(point: kendo.geometry.Point): number;
        equals(other: kendo.geometry.Point): boolean;
        getX(): number;
        getY(): number;
        move(x: number, y: number): kendo.geometry.Point;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Point;
        rotate(angle: number, center: any): kendo.geometry.Point;
        round(digits: number): kendo.geometry.Point;
        scale(scaleX: number, scaleY: number): kendo.geometry.Point;
        scaleCopy(scaleX: number, scaleY: number): kendo.geometry.Point;
        setX(value: number): kendo.geometry.Point;
        setY(value: number): kendo.geometry.Point;
        toArray(digits: number): any;
        toString(digits: number, separator: string): string;
        transform(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        transformCopy(tansformation: kendo.geometry.Transformation): kendo.geometry.Point;
        translate(dx: number, dy: number): kendo.geometry.Point;
        translateWith(vector: kendo.geometry.Point): kendo.geometry.Point;
        translateWith(vector: any): kendo.geometry.Point;
    }

    interface PointOptions {
        name?: string | undefined;
    }
    interface PointEvent {
        sender: Point;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Rect extends Observable {
        options: RectOptions;

        origin: kendo.geometry.Point;
        size: kendo.geometry.Size;

        constructor(origin: kendo.geometry.Point | any, size: kendo.geometry.Size | any);

        static fromPoints(pointA: kendo.geometry.Point, pointB: kendo.geometry.Point): kendo.geometry.Rect;
        static union(rectA: kendo.geometry.Rect, rectB: kendo.geometry.Rect): kendo.geometry.Rect;

        bbox(matrix: kendo.geometry.Matrix): kendo.geometry.Rect;
        bottomLeft(): kendo.geometry.Point;
        bottomRight(): kendo.geometry.Point;
        center(): kendo.geometry.Point;
        clone(): kendo.geometry.Rect;
        equals(other: kendo.geometry.Rect): boolean;
        getOrigin(): kendo.geometry.Point;
        getSize(): kendo.geometry.Size;
        height(): number;
        setOrigin(value: kendo.geometry.Point): kendo.geometry.Rect;
        setOrigin(value: any): kendo.geometry.Rect;
        setSize(value: kendo.geometry.Size): kendo.geometry.Rect;
        setSize(value: any): kendo.geometry.Rect;
        topLeft(): kendo.geometry.Point;
        topRight(): kendo.geometry.Point;
        width(): number;
    }

    interface RectOptions {
        name?: string | undefined;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Size extends Observable {
        options: SizeOptions;

        width: number;
        height: number;

        static create(width: number, height: number): kendo.geometry.Size;
        static create(width: any, height: number): kendo.geometry.Size;
        static create(width: kendo.geometry.Size, height: number): kendo.geometry.Size;

        clone(): kendo.geometry.Size;
        equals(other: kendo.geometry.Size): boolean;
        getWidth(): number;
        getHeight(): number;
        setWidth(value: number): kendo.geometry.Size;
        setHeight(value: number): kendo.geometry.Size;
    }

    interface SizeOptions {
        name?: string | undefined;
    }
    interface SizeEvent {
        sender: Size;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    class Transformation extends Observable {
        options: TransformationOptions;

        clone(): kendo.geometry.Transformation;
        equals(other: kendo.geometry.Transformation): boolean;
        matrix(): kendo.geometry.Matrix;
        multiply(transformation: kendo.geometry.Transformation): kendo.geometry.Transformation;
        rotate(angle: number, center: any): kendo.geometry.Transformation;
        rotate(angle: number, center: kendo.geometry.Point): kendo.geometry.Transformation;
        scale(scaleX: number, scaleY: number): kendo.geometry.Transformation;
        translate(x: number, y: number): kendo.geometry.Transformation;
    }

    interface TransformationOptions {
        name?: string | undefined;
    }
    interface TransformationEvent {
        sender: Transformation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }
}

interface HTMLElement {
    kendoBindingTarget: kendo.data.BindingTarget;
}

interface JQueryAjaxSettings {
}

interface JQueryXHR {
}

interface JQueryEventObject {
}

interface JQueryPromise<T> {
}

interface JQuery {
    data(key: any): any;

    kendoActionSheet(): JQuery;
    kendoActionSheet(options: kendo.ui.ActionSheetOptions): JQuery;
    data(key: "kendoActionSheet"): kendo.ui.ActionSheet | undefined;

    kendoAlert(): JQuery;
    kendoAlert(options: kendo.ui.AlertOptions): JQuery;
    data(key: "kendoAlert"): kendo.ui.Alert | undefined;

    kendoAppBar(): JQuery;
    kendoAppBar(options: kendo.ui.AppBarOptions): JQuery;
    data(key: "kendoAppBar"): kendo.ui.AppBar | undefined;

    kendoArcGauge(): JQuery;
    kendoArcGauge(options: kendo.dataviz.ui.ArcGaugeOptions): JQuery;
    data(key: "kendoArcGauge"): kendo.dataviz.ui.ArcGauge | undefined;

    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo.ui.AutoCompleteOptions): JQuery;
    data(key: "kendoAutoComplete"): kendo.ui.AutoComplete | undefined;

    kendoAvatar(): JQuery;
    kendoAvatar(options: kendo.ui.AvatarOptions): JQuery;
    data(key: "kendoAvatar"): kendo.ui.Avatar;

    kendoBadge(): JQuery;
    kendoBadge(options: kendo.ui.BadgeOptions): JQuery;
    data(key: "kendoBadge"): kendo.ui.Badge | undefined;

    kendoBarcode(): JQuery;
    kendoBarcode(options: kendo.dataviz.ui.BarcodeOptions): JQuery;
    data(key: "kendoBarcode"): kendo.dataviz.ui.Barcode | undefined;

    kendoBottomNavigation(): JQuery;
    kendoBottomNavigation(options: kendo.ui.BottomNavigationOptions): JQuery;
    data(key: "kendoBottomNavigation"): kendo.ui.BottomNavigation | undefined;

    kendoButton(): JQuery;
    kendoButton(options: kendo.ui.ButtonOptions): JQuery;
    data(key: "kendoButton"): kendo.ui.Button | undefined;

    kendoButtonGroup(): JQuery;
    kendoButtonGroup(options: kendo.ui.ButtonGroupOptions): JQuery;
    data(key: "kendoButtonGroup"): kendo.ui.ButtonGroup | undefined;

    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo.ui.CalendarOptions): JQuery;
    data(key: "kendoCalendar"): kendo.ui.Calendar | undefined;

    kendoCaptcha(): JQuery;
    kendoCaptcha(options: kendo.ui.CaptchaOptions): JQuery;
    data(key: "kendoCaptcha"): kendo.ui.Captcha | undefined;

    kendoChart(): JQuery;
    kendoChart(options: kendo.dataviz.ui.ChartOptions): JQuery;
    data(key: "kendoChart"): kendo.dataviz.ui.Chart | undefined;

    kendoChat(): JQuery;
    kendoChat(options: kendo.ui.ChatOptions): JQuery;
    data(key: "kendoChat"): kendo.ui.Chat | undefined;

    kendoCheckBox(): JQuery;
    kendoCheckBox(options: kendo.ui.CheckBoxOptions): JQuery;
    data(key: "kendoCheckBox"): kendo.ui.CheckBox;

    kendoCheckBoxGroup(): JQuery;
    kendoCheckBoxGroup(options: kendo.ui.CheckBoxGroupOptions): JQuery;
    data(key: "kendoCheckBoxGroup"): kendo.ui.CheckBoxGroup | undefined;

    kendoChip(): JQuery;
    kendoChip(options: kendo.ui.ChipOptions): JQuery;
    data(key: "kendoChip"): kendo.ui.Chip;

    kendoChipList(): JQuery;
    kendoChipList(options: kendo.ui.ChipListOptions): JQuery;
    data(key: "kendoChipList"): kendo.ui.ChipList;

    kendoCircularGauge(): JQuery;
    kendoCircularGauge(options: kendo.dataviz.ui.CircularGaugeOptions): JQuery;
    data(key: "kendoCircularGauge"): kendo.dataviz.ui.CircularGauge | undefined;

    kendoCircularProgressBar(): JQuery;
    kendoCircularProgressBar(options: kendo.ui.CircularProgressBarOptions): JQuery;
    data(key: "kendoCircularProgressBar"): kendo.ui.CircularProgressBar | undefined;

    kendoColorGradient(): JQuery;
    kendoColorGradient(options: kendo.ui.ColorGradientOptions): JQuery;
    data(key: "kendoColorGradient"): kendo.ui.ColorGradient | undefined;

    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo.ui.ColorPaletteOptions): JQuery;
    data(key: "kendoColorPalette"): kendo.ui.ColorPalette | undefined;

    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo.ui.ColorPickerOptions): JQuery;
    data(key: "kendoColorPicker"): kendo.ui.ColorPicker | undefined;

    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo.ui.ComboBoxOptions): JQuery;
    data(key: "kendoComboBox"): kendo.ui.ComboBox | undefined;

    kendoConfirm(): JQuery;
    kendoConfirm(options: kendo.ui.ConfirmOptions): JQuery;
    data(key: "kendoConfirm"): kendo.ui.Confirm | undefined;

    kendoContextMenu(): JQuery;
    kendoContextMenu(options: kendo.ui.ContextMenuOptions): JQuery;
    data(key: "kendoContextMenu"): kendo.ui.ContextMenu | undefined;

    kendoDateInput(): JQuery;
    kendoDateInput(options: kendo.ui.DateInputOptions): JQuery;
    data(key: "kendoDateInput"): kendo.ui.DateInput | undefined;

    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo.ui.DatePickerOptions): JQuery;
    data(key: "kendoDatePicker"): kendo.ui.DatePicker | undefined;

    kendoDateRangePicker(): JQuery;
    kendoDateRangePicker(options: kendo.ui.DateRangePickerOptions): JQuery;
    data(key: "kendoDateRangePicker"): kendo.ui.DateRangePicker | undefined;

    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(options: kendo.ui.DateTimePickerOptions): JQuery;
    data(key: "kendoDateTimePicker"): kendo.ui.DateTimePicker | undefined;

    kendoDiagram(): JQuery;
    kendoDiagram(options: kendo.dataviz.ui.DiagramOptions): JQuery;
    data(key: "kendoDiagram"): kendo.dataviz.ui.Diagram | undefined;

    kendoDialog(): JQuery;
    kendoDialog(options: kendo.ui.DialogOptions): JQuery;
    data(key: "kendoDialog"): kendo.ui.Dialog | undefined;

    kendoDrawer(): JQuery;
    kendoDrawer(options: kendo.ui.DrawerOptions): JQuery;
    data(key: "kendoDrawer"): kendo.ui.Drawer | undefined;

    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;
    data(key: "kendoDraggable"): kendo.ui.Draggable | undefined;

    kendoDropDownButton(): JQuery;
    kendoDropDownButton(options: kendo.ui.DropDownButtonOptions): JQuery;
    data(key: "kendoDropDownButton"): kendo.ui.DropDownButton;

    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo.ui.DropDownListOptions): JQuery;
    data(key: "kendoDropDownList"): kendo.ui.DropDownList | undefined;

    kendoDropDownTree(): JQuery;
    kendoDropDownTree(options: kendo.ui.DropDownTreeOptions): JQuery;
    data(key: "kendoDropDownTree"): kendo.ui.DropDownTree | undefined;

    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo.ui.DropTargetOptions): JQuery;
    data(key: "kendoDropTarget"): kendo.ui.DropTarget | undefined;

    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo.ui.DropTargetAreaOptions): JQuery;
    data(key: "kendoDropTargetArea"): kendo.ui.DropTargetArea | undefined;

    kendoEditor(): JQuery;
    kendoEditor(options: kendo.ui.EditorOptions): JQuery;
    data(key: "kendoEditor"): kendo.ui.Editor | undefined;

    kendoExpansionPanel(): JQuery;
    kendoExpansionPanel(options: kendo.ui.ExpansionPanelOptions): JQuery;
    data(key: "kendoExpansionPanel"): kendo.ui.ExpansionPanel | undefined;

    kendoFilter(): JQuery;
    kendoFilter(options: kendo.ui.FilterOptions): JQuery;
    data(key: "kendoFilter"): kendo.ui.Filter | undefined;

    kendoFilterMenu(): JQuery;
    kendoFilterMenu(options: kendo.ui.FilterMenuOptions): JQuery;
    data(key: "kendoFilterMenu"): kendo.ui.FilterMenu | undefined;

    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(options: kendo.ui.FlatColorPickerOptions): JQuery;
    data(key: "kendoFlatColorPicker"): kendo.ui.FlatColorPicker | undefined;

    kendoFloatingActionButton(): JQuery;
    kendoFloatingActionButton(options: kendo.ui.FloatingActionButtonOptions): JQuery;
    data(key: "kendoFloatingActionButton"): kendo.ui.FloatingActionButton | undefined;

    kendoForm(): JQuery;
    kendoForm(options: kendo.ui.FormOptions): JQuery;
    data(key: "kendoForm"): kendo.ui.Form | undefined;

    kendoGantt(): JQuery;
    kendoGantt(options: kendo.ui.GanttOptions): JQuery;
    data(key: "kendoGantt"): kendo.ui.Gantt | undefined;

    kendoGrid(): JQuery;
    kendoGrid(options: kendo.ui.GridOptions): JQuery;
    data(key: "kendoGrid"): kendo.ui.Grid | undefined;

    kendoImageEditor(): JQuery;
    kendoImageEditor(options: kendo.ui.ImageEditorOptions): JQuery;
    data(key: "kendoImageEditor"): kendo.ui.ImageEditor | undefined;

    kendoLinearGauge(): JQuery;
    kendoLinearGauge(options: kendo.dataviz.ui.LinearGaugeOptions): JQuery;
    data(key: "kendoLinearGauge"): kendo.dataviz.ui.LinearGauge | undefined;

    kendoListBox(): JQuery;
    kendoListBox(options: kendo.ui.ListBoxOptions): JQuery;
    data(key: "kendoListBox"): kendo.ui.ListBox | undefined;

    kendoListView(): JQuery;
    kendoListView(options: kendo.ui.ListViewOptions): JQuery;
    data(key: "kendoListView"): kendo.ui.ListView;

    kendoLoader(): JQuery;
    kendoLoader(options: kendo.ui.LoaderOptions): JQuery;
    data(key: "kendoLoader"): kendo.ui.Loader | undefined;

    kendoMap(): JQuery;
    kendoMap(options: kendo.dataviz.ui.MapOptions): JQuery;
    data(key: "kendoMap"): kendo.dataviz.ui.Map | undefined;

    kendoMaskedTextBox(): JQuery;
    kendoMaskedTextBox(options: kendo.ui.MaskedTextBoxOptions): JQuery;
    data(key: "kendoMaskedTextBox"): kendo.ui.MaskedTextBox | undefined;

    kendoMediaPlayer(): JQuery;
    kendoMediaPlayer(options: kendo.ui.MediaPlayerOptions): JQuery;
    data(key: "kendoMediaPlayer"): kendo.ui.MediaPlayer | undefined;

    kendoMenu(): JQuery;
    kendoMenu(options: kendo.ui.MenuOptions): JQuery;
    data(key: "kendoMenu"): kendo.ui.Menu | undefined;

    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(options: kendo.mobile.ui.ActionSheetOptions): JQuery;
    data(key: "kendoMobileActionSheet"): kendo.mobile.ui.ActionSheet | undefined;

    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(options: kendo.mobile.ui.BackButtonOptions): JQuery;
    data(key: "kendoMobileBackButton"): kendo.mobile.ui.BackButton | undefined;

    kendoMobileButton(): JQuery;
    kendoMobileButton(options: kendo.mobile.ui.ButtonOptions): JQuery;
    data(key: "kendoMobileButton"): kendo.mobile.ui.Button | undefined;

    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(options: kendo.mobile.ui.ButtonGroupOptions): JQuery;
    data(key: "kendoMobileButtonGroup"): kendo.mobile.ui.ButtonGroup | undefined;

    kendoMobileCollapsible(): JQuery;
    kendoMobileCollapsible(options: kendo.mobile.ui.CollapsibleOptions): JQuery;
    data(key: "kendoMobileCollapsible"): kendo.mobile.ui.Collapsible | undefined;

    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(options: kendo.mobile.ui.DetailButtonOptions): JQuery;
    data(key: "kendoMobileDetailButton"): kendo.mobile.ui.DetailButton | undefined;

    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(options: kendo.mobile.ui.DrawerOptions): JQuery;
    data(key: "kendoMobileDrawer"): kendo.mobile.ui.Drawer | undefined;

    kendoMobileLayout(): JQuery;
    kendoMobileLayout(options: kendo.mobile.ui.LayoutOptions): JQuery;
    data(key: "kendoMobileLayout"): kendo.mobile.ui.Layout | undefined;

    kendoMobileListView(): JQuery;
    kendoMobileListView(options: kendo.mobile.ui.ListViewOptions): JQuery;
    data(key: "kendoMobileListView"): kendo.mobile.ui.ListView | undefined;

    kendoMobileLoader(): JQuery;
    kendoMobileLoader(options: kendo.mobile.ui.LoaderOptions): JQuery;
    data(key: "kendoMobileLoader"): kendo.mobile.ui.Loader | undefined;

    kendoMobileModalView(): JQuery;
    kendoMobileModalView(options: kendo.mobile.ui.ModalViewOptions): JQuery;
    data(key: "kendoMobileModalView"): kendo.mobile.ui.ModalView | undefined;

    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(options: kendo.mobile.ui.NavBarOptions): JQuery;
    data(key: "kendoMobileNavBar"): kendo.mobile.ui.NavBar | undefined;

    kendoMobilePane(): JQuery;
    kendoMobilePane(options: kendo.mobile.ui.PaneOptions): JQuery;
    data(key: "kendoMobilePane"): kendo.mobile.ui.Pane | undefined;

    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(options: kendo.mobile.ui.PopOverOptions): JQuery;
    data(key: "kendoMobilePopOver"): kendo.mobile.ui.PopOver | undefined;

    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(options: kendo.mobile.ui.ScrollViewOptions): JQuery;
    data(key: "kendoMobileScrollView"): kendo.mobile.ui.ScrollView | undefined;

    kendoMobileScroller(): JQuery;
    kendoMobileScroller(options: kendo.mobile.ui.ScrollerOptions): JQuery;
    data(key: "kendoMobileScroller"): kendo.mobile.ui.Scroller | undefined;

    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(options: kendo.mobile.ui.SplitViewOptions): JQuery;
    data(key: "kendoMobileSplitView"): kendo.mobile.ui.SplitView | undefined;

    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(options: kendo.mobile.ui.SwitchOptions): JQuery;
    data(key: "kendoMobileSwitch"): kendo.mobile.ui.Switch | undefined;

    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(options: kendo.mobile.ui.TabStripOptions): JQuery;
    data(key: "kendoMobileTabStrip"): kendo.mobile.ui.TabStrip | undefined;

    kendoMobileView(): JQuery;
    kendoMobileView(options: kendo.mobile.ui.ViewOptions): JQuery;
    data(key: "kendoMobileView"): kendo.mobile.ui.View | undefined;

    kendoMultiColumnComboBox(): JQuery;
    kendoMultiColumnComboBox(options: kendo.ui.MultiColumnComboBoxOptions): JQuery;
    data(key: "kendoMultiColumnComboBox"): kendo.ui.MultiColumnComboBox | undefined;

    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo.ui.MultiSelectOptions): JQuery;
    data(key: "kendoMultiSelect"): kendo.ui.MultiSelect | undefined;

    kendoMultiViewCalendar(): JQuery;
    kendoMultiViewCalendar(options: kendo.ui.MultiViewCalendarOptions): JQuery;
    data(key: "kendoMultiViewCalendar"): kendo.ui.MultiViewCalendar | undefined;

    kendoNotification(): JQuery;
    kendoNotification(options: kendo.ui.NotificationOptions): JQuery;
    data(key: "kendoNotification"): kendo.ui.Notification | undefined;

    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(options: kendo.ui.NumericTextBoxOptions): JQuery;
    data(key: "kendoNumericTextBox"): kendo.ui.NumericTextBox | undefined;

    kendoOrgChart(): JQuery;
    kendoOrgChart(options: kendo.ui.OrgChartOptions): JQuery;
    data(key: "kendoOrgChart"): kendo.ui.OrgChart;

    kendoPDFViewer(): JQuery;
    kendoPDFViewer(options: kendo.ui.PDFViewerOptions): JQuery;
    data(key: "kendoPDFViewer"): kendo.ui.PDFViewer | undefined;

    kendoPager(): JQuery;
    kendoPager(options: kendo.ui.PagerOptions): JQuery;
    data(key: "kendoPager"): kendo.ui.Pager | undefined;

    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo.ui.PanelBarOptions): JQuery;
    data(key: "kendoPanelBar"): kendo.ui.PanelBar | undefined;

    kendoPivotConfigurator(): JQuery;
    kendoPivotConfigurator(options: kendo.ui.PivotConfiguratorOptions): JQuery;
    data(key: "kendoPivotConfigurator"): kendo.ui.PivotConfigurator | undefined;

    kendoPivotConfiguratorButton(): JQuery;
    kendoPivotConfiguratorButton(options: kendo.ui.PivotConfiguratorButtonOptions): JQuery;
    data(key: "kendoPivotConfiguratorButton"): kendo.ui.PivotConfiguratorButton | undefined;

    kendoPivotConfiguratorV2(): JQuery;
    kendoPivotConfiguratorV2(options: kendo.ui.PivotConfiguratorV2Options): JQuery;
    data(key: "kendoPivotConfiguratorV2"): kendo.ui.PivotConfiguratorV2 | undefined;

    kendoPivotContainer(): JQuery;
    kendoPivotContainer(options: kendo.ui.PivotContainerOptions): JQuery;
    data(key: "kendoPivotContainer"): kendo.ui.PivotContainer | undefined;

    kendoPivotGrid(): JQuery;
    kendoPivotGrid(options: kendo.ui.PivotGridOptions): JQuery;
    data(key: "kendoPivotGrid"): kendo.ui.PivotGrid | undefined;

    kendoPivotGridV2(): JQuery;
    kendoPivotGridV2(options: kendo.ui.PivotGridV2Options): JQuery;
    data(key: "kendoPivotGridV2"): kendo.ui.PivotGridV2 | undefined;

    kendoPopover(): JQuery;
    kendoPopover(options: kendo.ui.PopoverOptions): JQuery;
    data(key: "kendoPopover"): kendo.ui.Popover | undefined;

    kendoPopup(): JQuery;
    kendoPopup(options: kendo.ui.PopupOptions): JQuery;
    data(key: "kendoPopup"): kendo.ui.Popup | undefined;

    kendoProgressBar(): JQuery;
    kendoProgressBar(options: kendo.ui.ProgressBarOptions): JQuery;
    data(key: "kendoProgressBar"): kendo.ui.ProgressBar | undefined;

    kendoPrompt(): JQuery;
    kendoPrompt(options: kendo.ui.PromptOptions): JQuery;
    data(key: "kendoPrompt"): kendo.ui.Prompt | undefined;

    kendoQRCode(): JQuery;
    kendoQRCode(options: kendo.dataviz.ui.QRCodeOptions): JQuery;
    data(key: "kendoQRCode"): kendo.dataviz.ui.QRCode | undefined;

    kendoRadialGauge(): JQuery;
    kendoRadialGauge(options: kendo.dataviz.ui.RadialGaugeOptions): JQuery;
    data(key: "kendoRadialGauge"): kendo.dataviz.ui.RadialGauge | undefined;

    kendoRadioButton(): JQuery;
    kendoRadioButton(options: kendo.ui.RadioButtonOptions): JQuery;
    data(key: "kendoRadioButton"): kendo.ui.RadioButton;

    kendoRadioGroup(): JQuery;
    kendoRadioGroup(options: kendo.ui.RadioGroupOptions): JQuery;
    data(key: "kendoRadioGroup"): kendo.ui.RadioGroup | undefined;

    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo.ui.RangeSliderOptions): JQuery;
    data(key: "kendoRangeSlider"): kendo.ui.RangeSlider | undefined;

    kendoRating(): JQuery;
    kendoRating(options: kendo.ui.RatingOptions): JQuery;
    data(key: "kendoRating"): kendo.ui.Rating | undefined;

    kendoResponsivePanel(): JQuery;
    kendoResponsivePanel(options: kendo.ui.ResponsivePanelOptions): JQuery;
    data(key: "kendoResponsivePanel"): kendo.ui.ResponsivePanel | undefined;

    kendoScheduler(): JQuery;
    kendoScheduler(options: kendo.ui.SchedulerOptions): JQuery;
    data(key: "kendoScheduler"): kendo.ui.Scheduler | undefined;

    kendoScrollView(): JQuery;
    kendoScrollView(options: kendo.ui.ScrollViewOptions): JQuery;
    data(key: "kendoScrollView"): kendo.ui.ScrollView | undefined;

    kendoSignature(): JQuery;
    kendoSignature(options: kendo.ui.SignatureOptions): JQuery;
    data(key: "kendoSignature"): kendo.ui.Signature | undefined;

    kendoSkeletonContainer(): JQuery;
    kendoSkeletonContainer(options: kendo.ui.SkeletonContainerOptions): JQuery;
    data(key: "kendoSkeletonContainer"): kendo.ui.SkeletonContainer | undefined;

    kendoSlider(): JQuery;
    kendoSlider(options: kendo.ui.SliderOptions): JQuery;
    data(key: "kendoSlider"): kendo.ui.Slider | undefined;

    kendoSortable(): JQuery;
    kendoSortable(options: kendo.ui.SortableOptions): JQuery;
    data(key: "kendoSortable"): kendo.ui.Sortable | undefined;

    kendoSparkline(): JQuery;
    kendoSparkline(options: kendo.dataviz.ui.SparklineOptions): JQuery;
    data(key: "kendoSparkline"): kendo.dataviz.ui.Sparkline | undefined;

    kendoSplitButton(): JQuery;
    kendoSplitButton(options: kendo.ui.SplitButtonOptions): JQuery;
    data(key: "kendoSplitButton"): kendo.ui.SplitButton;

    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo.ui.SplitterOptions): JQuery;
    data(key: "kendoSplitter"): kendo.ui.Splitter | undefined;

    kendoSpreadsheet(): JQuery;
    kendoSpreadsheet(options: kendo.ui.SpreadsheetOptions): JQuery;
    data(key: "kendoSpreadsheet"): kendo.ui.Spreadsheet | undefined;

    kendoStockChart(): JQuery;
    kendoStockChart(options: kendo.dataviz.ui.StockChartOptions): JQuery;
    data(key: "kendoStockChart"): kendo.dataviz.ui.StockChart | undefined;

    kendoSwitch(): JQuery;
    kendoSwitch(options: kendo.ui.SwitchOptions): JQuery;
    data(key: "kendoSwitch"): kendo.ui.Switch | undefined;

    kendoStepper(): JQuery;
    kendoStepper(options: kendo.ui.StepperOptions): JQuery;
    data(key: "kendoStepper"): kendo.ui.Stepper | undefined;

    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo.ui.TabStripOptions): JQuery;
    data(key: "kendoTabStrip"): kendo.ui.TabStrip | undefined;

    kendoTextArea(): JQuery;
    kendoTextArea(options: kendo.ui.TextAreaOptions): JQuery;
    data(key: "kendoTextArea"): kendo.ui.TextArea | undefined;

    kendoTextBox(): JQuery;
    kendoTextBox(options: kendo.ui.TextBoxOptions): JQuery;
    data(key: "kendoTextBox"): kendo.ui.TextBox | undefined;

    kendoTileLayout(): JQuery;
    kendoTileLayout(options: kendo.ui.TileLayoutOptions): JQuery;
    data(key: "kendoTileLayout"): kendo.ui.TileLayout | undefined;

    kendoTimeDurationPicker(): JQuery;
    kendoTimeDurationPicker(options: kendo.ui.TimeDurationPickerOptions): JQuery;
    data(key: "kendoTimeDurationPicker"): kendo.ui.TimeDurationPicker;

    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo.ui.TimePickerOptions): JQuery;
    data(key: "kendoTimePicker"): kendo.ui.TimePicker | undefined;

    kendoTimeline(): JQuery;
    kendoTimeline(options: kendo.ui.TimelineOptions): JQuery;
    data(key: "kendoTimeline"): kendo.ui.Timeline | undefined;

    kendoToggleButton(): JQuery;
    kendoToggleButton(options: kendo.ui.ToggleButtonOptions): JQuery;
    data(key: "kendoToggleButton"): kendo.ui.ToggleButton | undefined;

    kendoToolBar(): JQuery;
    kendoToolBar(options: kendo.ui.ToolBarOptions): JQuery;
    data(key: "kendoToolBar"): kendo.ui.ToolBar | undefined;

    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo.ui.TooltipOptions): JQuery;
    data(key: "kendoTooltip"): kendo.ui.Tooltip | undefined;

    kendoTouch(): JQuery;
    kendoTouch(options: kendo.ui.TouchOptions): JQuery;
    data(key: "kendoTouch"): kendo.ui.Touch | undefined;

    kendoTreeList(): JQuery;
    kendoTreeList(options: kendo.ui.TreeListOptions): JQuery;
    data(key: "kendoTreeList"): kendo.ui.TreeList | undefined;

    kendoTreeMap(): JQuery;
    kendoTreeMap(options: kendo.dataviz.ui.TreeMapOptions): JQuery;
    data(key: "kendoTreeMap"): kendo.dataviz.ui.TreeMap | undefined;

    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo.ui.TreeViewOptions): JQuery;
    data(key: "kendoTreeView"): kendo.ui.TreeView | undefined;

    kendoUpload(): JQuery;
    kendoUpload(options: kendo.ui.UploadOptions): JQuery;
    data(key: "kendoUpload"): kendo.ui.Upload | undefined;

    kendoValidator(): JQuery;
    kendoValidator(options: kendo.ui.ValidatorOptions): JQuery;
    data(key: "kendoValidator"): kendo.ui.Validator | undefined;

    kendoWindow(): JQuery;
    kendoWindow(options: kendo.ui.WindowOptions): JQuery;
    data(key: "kendoWindow"): kendo.ui.Window | undefined;

    kendoWizard(): JQuery;
    kendoWizard(options: kendo.ui.WizardOptions): JQuery;
    data(key: "kendoWizard"): kendo.ui.Wizard | undefined;

    kendoFontIcon(): JQuery;
    kendoFontIcon(options: kendo.ui.FontIconOptions): JQuery;
    data(key: "kendoFontIcon"): kendo.ui.FontIcon | undefined;

    kendoSvgIcon(): JQuery;
    kendoSvgIcon(options: kendo.ui.SvgIconOptions): JQuery;
    data(key: "kendoSvgIcon"): kendo.ui.SvgIcon | undefined;
}

declare namespace KendoLicensing {
    function setScriptKey(key: string): void;
}

declare namespace KendoLicensing {
    function setScriptKey(key: string): void;
}
