// Type definitions for Kendo UI Professional v2016.1.112
// Project: http://www.telerik.com/kendo-ui
// Definitions by: Telerik <https://github.com/telerik/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module kendo {
    function culture(): {
        name: string;
        calendar: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
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
            twoDigitYearMax: number;
        };
        calendars: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
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
                twoDigitYearMax: number;
            };
        };
        numberFormat: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    };

    var cultures: {[culture: string] : {
        name?: string;
        calendar?: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
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
            twoDigitYearMax: number;
        };
        calendars?: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
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
                twoDigitYearMax: number;
            };
        };
        numberFormat?: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    }};

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

    function widgetInstance(element: JQuery, suite: typeof kendo.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite: typeof kendo.mobile.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite: typeof kendo.dataviz.ui): kendo.ui.Widget;


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
    };

    var support: {
        touch: boolean;
        pointers: boolean;
        scrollbar(): number;
        hasHW3D: boolean;
        hasNativeScrolling: boolean;
        devicePixelRatio: number;
        placeHolder: boolean;
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
            msie: boolean;
            webkit: boolean;
            safari: boolean;
            opera: boolean;
            version: string;
        };
    };

    interface TemplateOptions {
        paramName?: string;
        useWithBlock?: boolean;
    }

    class Class {
        static fn: Class;
        static extend(prototype: Object): Class;
    }

    class Observable extends Class {
        static fn: Observable;
        static extend(prototype: Object): Observable;

        bind(eventName: string, handler: Function): Observable;
        one(eventName: string, handler: Function): Observable;
        trigger(eventName: string, e?: any): boolean;
        unbind(eventName: string, handler?: any): Observable;
    }

    interface ViewOptions {
        tagName?: string;
        wrap?: boolean;
        model?: Object;
        evalTemplate?: boolean;
        init?: (e: ViewEvent) => void;
        show?: (e: ViewEvent) => void;
        hide?: (e: ViewEvent) => void;
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
        containers: { [selector: string]: ViewContainer; };
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
        pushState?: boolean;
        hashBang?: boolean;
        root?: string;
        ignoreCase?: boolean;
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

declare module kendo.effects {
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

declare module kendo.data {
    interface ObservableObjectEvent {
        sender?: ObservableObject;
        field?: string;
    }

    interface ObservableObjectSetEvent extends ObservableObjectEvent {
        value?: any;
        preventDefault?: Function;
    }


    class Binding extends Observable {
        source: any;
        parents: any[];
        path: string;
        observable: boolean;
        dependencies: { [path: string]: boolean; };
        constructor(parents: any[], path: string);
        change(e: Object): void;
        start(source: kendo.Observable): void;
        stop(source: kendo.Observable): void;
        get (): any;
        set (value: any): void;
        destroy(): void;
    }

    class BindingTarget {
        target: any;
        options: any;
        source: any;
    }

    class EventBinding extends Binding {
        get (): void;
    }

    class TemplateBinding extends Binding {
        constructor(source: kendo.Observable, path: string, template: Function);
        render(value: Object): string;
    }

    module binders { }

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

    interface BinderOptions {
    }

    class ObservableObject extends Observable{
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

        static define(options: DataSourceSchemaModelWithFieldsObject): typeof Model;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof Model;

        constructor(data?: any);
        init(data?: any): void;
        accept(data?: any): void;
        editable(field: string): boolean;
        isNew(): boolean;
    }

    interface SchedulerEventData {
        description?: string;
        end?: Date;
        endTimezone?: string;
        isAllDay?: boolean;
        id?: any;
        start?: Date;
        startTimezone?: string;
        recurrenceId?: any;
        recurrenceRule?: string;
        recurrenceException?: string;
        title?: string;
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

    class GanttTask extends Model {
        static idField: string;
        static fields: DataSourceSchemaModelFields;

        id: any;
        parentId: number;
        orderId: number;
        title: string;
        start: Date;
        end: Date;
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
        load(id: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
        parentNode(): Node;
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
        schema?: HierarchicalDataSourceSchema;
    }


    interface HierarchicalDataSourceSchema extends DataSourceSchemaWithOptionsModel {
        model?: HierarchicalDataSourceSchemaModel;
    }

    interface HierarchicalDataSourceSchemaModel extends DataSourceSchemaModel {
        hasChildren?: any;
        children?: any;
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
        catalog?: string;
        cube?: string;
    }

    interface PivotTransportDiscover {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface PivotTransport {
        discover?: any;
        read?: any;
    }

    interface PivotTransportWithObjectOperations extends PivotTransport {
        connection: PivotTransportConnection;
        discover?: PivotTransportDiscover;
        read?: DataSourceTransportRead;
    }

    interface PivotTransportWithFunctionOperations extends PivotTransport {
        discover?: (options: DataSourceTransportOptions) => void;
        read?: (options: DataSourceTransportOptions) => void;
    }

    interface PivotDataSourceAxisOptions {
        name: string;
        expand?: boolean;
    }

    interface PivotDataSourceMeasureOptions {
        values: string[];
        axis?: string;
    }

    interface PivotDataSourceOptions extends DataSourceOptions {
        columns?: PivotDataSourceAxisOptions[];
        measures?: PivotDataSourceMeasureOptions[];
        rows?: PivotDataSourceAxisOptions[];
        transport?: PivotTransport;
        schema?: PivotSchema;
    }

    interface PivotTupleModel {
        children: PivotTupleModel[];
        caption?: string;
        name: string;
        levelName?: string;
        levelNum: number;
        hasChildren?: boolean;
        hierarchy?: string;
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

    interface PivotSchema extends DataSourceSchema{
        axes?: any;
        catalogs?: any;
        cubes?: any;
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
        columns(val: string[]): string[];
        cube(val: string): void;
        discover(options: PivotDiscoverRequestOptions): JQueryPromise<any>;
        measures(val: string[]): string[];
        measuresAxis(): string;
        rows(val: string[]): string[];
        schemaCatalogs(): JQueryPromise<any>;
        schemaCubes(): JQueryPromise<any>;
        schemaDimensions(): JQueryPromise<any>;
        schemaHierarchies(): JQueryPromise<any>;
        schemaLevels(): JQueryPromise<any>;
        schemaMeasures(): JQueryPromise<any>;
    }

    interface DataSourceTransport {
        create?: DataSourceTransportCreate;
        destroy?: DataSourceTransportDestroy;
        push?: Function;
        read?: DataSourceTransportRead;
        signalr?: DataSourceTransportSignalr;
        update?: DataSourceTransportUpdate;

        parameterMap?(data: DataSourceTransportParameterMapData, type: string): any;
    }

    interface DataSourceTransportSignalrClient {
        create?: string;
        destroy?: string;
        read?: string;
        update?: string;
    }

    interface DataSourceTransportSignalrServer {
        create?: string;
        destroy?: string;
        read?: string;
        update?: string;
    }

    interface DataSourceTransportSignalr {
        client?: DataSourceTransportSignalrClient;
        hub?: any;
        promise?: any;
        server?: DataSourceTransportSignalrServer;
    }


    interface DataSourceParameterMapDataAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceParameterMapDataGroup {
        aggregate?: DataSourceParameterMapDataAggregate[];
        field?: string;
        dir?: string;
    }

    interface DataSourceParameterMapDataFilter {
        field?: string;
        filters?: DataSourceParameterMapDataFilter[];
        logic?: string;
        operator?: string;
        value?: any;
    }

    interface DataSourceParameterMapDataSort {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportParameterMapData {
        aggregate?: DataSourceParameterMapDataAggregate[];
        group?: DataSourceParameterMapDataGroup[];
        filter?: DataSourceParameterMapDataFilter;
        models?: Model[];
        page?: number;
        pageSize?: number;
        skip?: number;
        sort?: DataSourceParameterMapDataSort[];
        take?: number;
    }

    interface DataSourceSchema {
        model?: any;
    }

    interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
        model?: DataSourceSchemaModel;
    }

    interface DataSourceSchemaWithConstructorModel extends DataSourceSchema {
        model?:  typeof Model;
    }

    interface DataSourceSchemaModel {
        id?: string;
        fields?: any;
        [index: string]: any;
    }

    interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelField[];
    }

    interface DataSourceSchemaModelWithFieldsObject extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelFields;
    }

    interface DataSourceSchemaModelFields {
        [index: string]: DataSourceSchemaModelField;
    }

    interface DataSourceSchemaModelField {
        field?: string;
        from?: string;
        defaultValue?: any;
        editable?: boolean;
        nullable?: boolean;
        parse?: Function;
        type?: string;
        validation?: DataSourceSchemaModelFieldValidation;
    }

    interface DataSourceSchemaModelFieldValidation {
        required?: boolean;
        min?: any;
        max?: any;
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
        forEach(callback: (item: Object, index: number, source: ObservableArray) => void ): void;
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
        splice(start: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        toJSON(): any[];
        unshift(...items: any[]): number;
        wrap(object: Object, parent: Object): any;
        wrapAll(source: Object, target: Object): any;
    }

    interface ObservableArrayEvent {
        field?: string;
        action?: string;
        index?: number;
        items?: kendo.data.Model[];
    }

    class DataSource extends Observable{
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
        pushDestroy(model: Object): void;
        pushDestroy(models: any[]): void;
        pushUpdate(model: Object): void;
        pushUpdate(models: any[]): void;
        query(options?: any): JQueryPromise<any>;
        read(data?: any): JQueryPromise<any>;
        remove(model: kendo.data.ObservableObject): void;
        sort(sort: DataSourceSortItem): void;
        sort(sort: DataSourceSortItem[]): void;
        sort(): DataSourceSortItem[];
        sync(): JQueryPromise<any>;
        total(): number;
        totalPages(): number;
        view(): kendo.data.ObservableArray;
    }

    interface DataSourceAggregateItem {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceFilter {
    }

    interface DataSourceFilterItem extends DataSourceFilter {
        operator?: string;
        field?: string;
        value?: any;
    }

    interface DataSourceFilters extends DataSourceFilter {
        logic?: string;
        filters?: DataSourceFilter[];
    }

    interface DataSourceGroupItemAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceGroupItem {
        field?: string;
        dir?: string;
        aggregates?: DataSourceGroupItemAggregate[];
    }

    interface DataSourceSchema {
        aggregates?: any;
        data?: any;
        errors?: any;
        groups?: any;
        parse?: Function;
        total?: any;
        type?: string;
    }

    interface DataSourceSortItem {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportCreate extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportDestroy extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportRead extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportUpdate extends JQueryAjaxSettings {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportWithObjectOperations extends DataSourceTransport {
        create?: DataSourceTransportCreate;
        destroy?: DataSourceTransportDestroy;
        read?: DataSourceTransportRead;
        update?: DataSourceTransportUpdate;
    }

    interface DataSourceTransportWithFunctionOperations extends DataSourceTransport {
        create?: (options: DataSourceTransportOptions) => void;
        destroy?: (options: DataSourceTransportOptions) => void;
        read?: (options: DataSourceTransportReadOptions) => void;
        update?: (options: DataSourceTransportOptions) => void;
    }

    interface DataSourceTransportOptions {
        success: (data?: any) => void;
        error: (error?: any) => void;
        data: any;
    }

    interface DataSourceTransportReadOptionsData {
        sort?: DataSourceSortItem[];
        filter?: DataSourceFilters;
        group?: DataSourceGroupItem[];
        take?: number;
        skip?: number;
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
        aggregate?: DataSourceAggregateItem[];
        autoSync?: boolean;
        batch?: boolean;
        data?: any;
        filter?: any;
        group?: DataSourceGroupItem[];
        offlineStorage?: any;
        page?: number;
        pageSize?: number;
        schema?: DataSourceSchema;
        serverAggregates?: boolean;
        serverFiltering?: boolean;
        serverGrouping?: boolean;
        serverPaging?: boolean;
        serverSorting?: boolean;
        sort?: any;
        transport?: DataSourceTransport;
        type?: string;
        change? (e: DataSourceChangeEvent): void;
        error?(e: DataSourceErrorEvent): void;
        sync?(e: DataSourceEvent): void;
        requestStart?(e: DataSourceRequestStartEvent): void;
        requestEnd?(e: DataSourceRequestEndEvent): void;
    }

    interface DataSourceEvent {
        sender?: DataSource;
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
        field?: string;
        value?: Model;
        action?: string;
        index?: number;
        items?: DataSourceItemOrGroup[];
        node?: any;
    }

    interface DataSourceErrorEvent extends DataSourceEvent {
        xhr: JQueryXHR;
        status: string;
        errorThrown: any;
        errors?: any;
    }

    interface DataSourceRequestStartEvent extends DataSourceEvent {
        type?: string;
    }

    interface DataSourceRequestEndEvent extends DataSourceEvent {
        response?: any;
        type?: string;
    }
}

declare module kendo.data.transports {
    var odata: DataSourceTransport;
}

declare module kendo.ui {
    function progress(container: JQuery, toggle: boolean): void;

    class Widget extends Observable {
        static fn: Widget;

        element: JQuery;
        options: Object;
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

    class Draggable extends kendo.ui.Widget{
        element: JQuery;
        currentTarget: JQuery;
        constructor(element: Element, options?: DraggableOptions);
        options: DraggableOptions;
    }

    interface DraggableEvent {
        sender?: Draggable;
    }

    class DropTarget extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetOptions);
        options: DropTargetOptions;
        static destroyGroup(groupName: string): void;
    }

    interface DropTargetOptions {
        group?: string;
        dragenter?(e: DropTargetDragenterEvent): void;
        dragleave?(e: DropTargetDragleaveEvent): void;
        drop?(e: DropTargetDropEvent): void;
    }

    interface DropTargetEvent {
        sender?: DropTarget;
    }

    interface DropTargetDragenterEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDragleaveEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDropEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    class DropTargetArea extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetAreaOptions);
        options: DropTargetAreaOptions;
    }

    interface DropTargetAreaOptions {
        group?: string;
        filter?: string;
        dragenter?(e: DropTargetAreaDragenterEvent): void;
        dragleave?(e: DropTargetAreaDragleaveEvent): void;
        drop?(e: DropTargetAreaDropEvent): void;
    }

    interface DropTargetAreaEvent {
        sender: DropTargetArea;
    }

    interface DropTargetAreaDragenterEvent extends DropTargetAreaEvent {
        draggable?: JQuery;
        dropTarget?: JQuery;
    }

    interface DropTargetAreaDragleaveEvent extends DropTargetAreaEvent {
        draggable?: JQuery;
        dropTarget?: JQuery;
    }

    interface DropTargetAreaDropEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable;
        dropTarget?: JQuery;
    }

    interface DraggableOptions {
        axis?: string;
        container?: JQuery;
        cursorOffset?: any;
        distance?: number;
        filter?: string;
        group?: string;
        hint?: Function;
        ignore?: string;
        drag?(e: DraggableEvent): void;
        dragcancel?(e: DraggableEvent): void;
        dragend?(e: DraggableEvent): void;
        dragstart?(e: DraggableEvent): void;
    }

    interface GridColumnEditorOptions {
        field?: string;
        format?: string;
        model?: kendo.data.Model;
        values?: any[];
    }

    interface GridColumn {
        editor?(container: JQuery, options: GridColumnEditorOptions): void;
    }

    interface TreeListEditorOptions {
        field?: string;
        format?: string;
        model?: kendo.data.Model;
        values?: any[];
    }

    interface TreeListColumn {
        editor?(container: JQuery, options: TreeListEditorOptions): void;
    }
}

declare module kendo.mobile {
    function init(selector: string): void;
    function init(element: JQuery): void;
    function init(element: Element): void;

    class Application extends Observable {
        options: ApplicationOptions;
        router: kendo.Router;
        pane: kendo.mobile.ui.Pane;

        constructor(element?: any, options?: ApplicationOptions);
        init(element?: any, options?: ApplicationOptions): void;
        hideLoading(): void;
        navigate(url: string, transition?: string): void;
        replace(url: string, transition?: string): void;
        scroller(): kendo.mobile.ui.Scroller;
        showLoading(): void;
        view(): kendo.mobile.ui.View;
    }

    interface ApplicationOptions {
        hideAddressBar?: boolean;
        updateDocumentTitle?: boolean;
        initial?: string;
        layout?: string;
        loading?: string;
        platform?: string;
        serverNavigation?: boolean;
        transition?: string;
    }

    interface ApplicationEvent {
        sender: Application;
    }
}

declare module kendo.mobile.ui {

    class Widget extends kendo.ui.Widget {
    }

    interface TouchAxis {
        location?: number;
        startLocation?: number;
        client?: number;
        delta?: number;
        velocity?: number;
    }

    interface TouchEventOptions {
        target?: JQuery;
        x?: TouchAxis;
        y?: TouchAxis;
    }

    interface Point {
        x?: number;
        y?: number;
    }
}
declare module kendo.dataviz.ui {
    function registerTheme(name: string, options: any): void;

    function plugin(widget: typeof kendo.ui.Widget): void;
    function plugin(widget: any): void;
}

declare module kendo.dataviz.map {
    class Marker {
    }
}

declare module kendo.dataviz.map.layer {
    class Shape {
    }
}

declare module kendo.drawing.pdf {
    function saveAs(group: kendo.drawing.Group, fileName: string,
                    proxyUrl?: string, callback?: Function): void;
}

declare module kendo.geometry {
    class Arc extends Observable {


        options: ArcOptions;

        anticlockwise: boolean;
        center: kendo.geometry.Point;
        endAngle: number;
        radiusX: number;
        radiusY: number;
        startAngle: number;



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
        name?: string;
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
        name?: string;
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
        name?: string;
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
        name?: string;
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

        constructor(origin: kendo.geometry.Point, size: kendo.geometry.Size);

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
        name?: string;
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
        name?: string;
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
        name?: string;
    }
    interface TransformationEvent {
        sender: Transformation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo.drawing {
    class Arc extends kendo.drawing.Element {


        options: ArcOptions;


        constructor(geometry: kendo.geometry.Arc, options?: ArcOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Element extends kendo.Class {


        options: ElementOptions;


        constructor(options?: ElementOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        opacity(): number;
        opacity(opacity: number): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ElementOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ElementEvent {
        sender: Element;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface FillOptions  {



        color?: string;
        opacity?: number;




    }



    class Gradient extends kendo.Class {


        options: GradientOptions;

        stops: any;

        constructor(options?: GradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface GradientOptions {
        name?: string;
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
        name?: string;
        offset?: number;
        color?: string;
        opacity?: number;
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
        insert(position: number, element: kendo.drawing.Element): void;
        opacity(): number;
        opacity(opacity: number): void;
        remove(element: kendo.drawing.Element): void;
        removeAt(index: number): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface GroupOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        pdf?: kendo.drawing.PDFOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        alignContent?: string;
        alignItems?: string;
        justifyContent?: string;
        lineSpacing?: number;
        spacing?: number;
        orientation?: string;
        wrap?: boolean;
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
        name?: string;
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
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
    }
    interface OptionsStoreEvent {
        sender: OptionsStore;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface PDFOptions  {



        creator?: string;
        date?: Date;
        keywords?: string;
        landscape?: boolean;
        margin?: any;
        paperSize?: any;
        subject?: string;
        title?: string;




    }



    class Path extends kendo.drawing.Element {


        options: PathOptions;

        segments: any;

        constructor(options?: PathOptions);

        static fromPoints(points: any): kendo.drawing.Path;
        static fromRect(rect: kendo.geometry.Rect): kendo.drawing.Path;
        static parse(svgPath: string, options?: any): kendo.drawing.Path;

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        center?: any|kendo.geometry.Point;
        radius?: number;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
    }
    interface SegmentEvent {
        sender: Segment;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface StrokeOptions  {



        color?: string;
        dashType?: string;
        lineCap?: string;
        lineJoin?: string;
        opacity?: number;
        width?: number;




    }



    class Surface extends kendo.Observable {


        options: SurfaceOptions;


        constructor(options?: SurfaceOptions);

        static create(element: JQuery, options?: any): kendo.drawing.Surface;
        static create(element: Element, options?: any): kendo.drawing.Surface;

        clear(): void;
        draw(element: kendo.drawing.Element): void;
        eventTarget(e: any): kendo.drawing.Element;
        resize(force?: boolean): void;

    }

    interface SurfaceOptions {
        name?: string;
        type?: string;
        height?: string;
        width?: string;
        click?(e: SurfaceClickEvent): void;
        mouseenter?(e: SurfaceMouseenterEvent): void;
        mouseleave?(e: SurfaceMouseleaveEvent): void;
    }
    interface SurfaceEvent {
        sender: Surface;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SurfaceClickEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseenterEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseleaveEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }


    class Text extends kendo.drawing.Element {


        options: TextOptions;


        constructor(content: string, position: kendo.geometry.Point, options?: TextOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        font?: string;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface TextEvent {
        sender: Text;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo.ui {
    class AutoComplete extends kendo.ui.Widget {

        static fn: AutoComplete;

        options: AutoCompleteOptions;

        dataSource: kendo.data.DataSource;
        list: JQuery;
        ul: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): AutoComplete;

        constructor(element: Element, options?: AutoCompleteOptions);


        close(): void;
        dataItem(index: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        focus(): void;
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
        duration?: number;
        effects?: string;
    }

    interface AutoCompleteAnimationOpen {
        duration?: number;
        effects?: string;
    }

    interface AutoCompleteAnimation {
        close?: AutoCompleteAnimationClose;
        open?: AutoCompleteAnimationOpen;
    }

    interface AutoCompleteVirtual {
        itemHeight?: number;
        valueMapper?: Function;
    }

    interface AutoCompleteOptions {
        name?: string;
        animation?: AutoCompleteAnimation;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: boolean;
        minLength?: number;
        placeholder?: string;
        popup?: any;
        separator?: string;
        suggest?: boolean;
        headerTemplate?: string|Function;
        template?: string|Function;
        valuePrimitive?: boolean;
        virtual?: AutoCompleteVirtual;
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
        item?: JQuery;
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
        name?: string;
        enable?: boolean;
        icon?: string;
        imageUrl?: string;
        spriteCssClass?: string;
        click?(e: ButtonClickEvent): void;
    }
    interface ButtonEvent {
        sender: Button;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonClickEvent extends ButtonEvent {
        event?: any;
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
        value(): Date;
        value(value: Date): void;
        value(value: string): void;
        view(): any;

    }

    interface CalendarMonth {
        content?: string;
        empty?: string;
    }

    interface CalendarOptions {
        name?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        disableDates?: any|Function;
        footer?: string|Function;
        format?: string;
        max?: Date;
        min?: Date;
        month?: CalendarMonth;
        start?: string;
        value?: Date;
        change?(e: CalendarEvent): void;
        navigate?(e: CalendarEvent): void;
    }
    interface CalendarEvent {
        sender: Calendar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
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
        width?: number;
        height?: number;
    }

    interface ColorPaletteOptions {
        name?: string;
        palette?: string|any;
        columns?: number;
        tileSize?: ColorPaletteTileSize;
        value?: string;
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

    }

    interface ColorPickerMessages {
        apply?: string;
        cancel?: string;
    }

    interface ColorPickerTileSize {
        width?: number;
        height?: number;
    }

    interface ColorPickerOptions {
        name?: string;
        buttons?: boolean;
        columns?: number;
        tileSize?: ColorPickerTileSize;
        messages?: ColorPickerMessages;
        palette?: string|any;
        opacity?: boolean;
        preview?: boolean;
        toolIcon?: string;
        value?: string;
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

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ComboBox;

        constructor(element: Element, options?: ComboBoxOptions);


        close(): void;
        dataItem(index?: number): any;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        open(): void;
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
        effects?: string;
        duration?: number;
    }

    interface ComboBoxAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface ComboBoxAnimation {
        close?: ComboBoxAnimationClose;
        open?: ComboBoxAnimationOpen;
    }

    interface ComboBoxVirtual {
        itemHeight?: number;
        valueMapper?: Function;
    }

    interface ComboBoxOptions {
        name?: string;
        animation?: ComboBoxAnimation;
        autoBind?: boolean;
        cascadeFrom?: string;
        cascadeFromField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: string;
        index?: number;
        minLength?: number;
        placeholder?: string;
        popup?: any;
        suggest?: boolean;
        headerTemplate?: string|Function;
        template?: string|Function;
        text?: string;
        value?: string;
        valuePrimitive?: boolean;
        virtual?: ComboBoxVirtual;
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
        item?: JQuery;
    }

    interface ComboBoxCascadeEvent extends ComboBoxEvent {
    }


    class ContextMenu extends kendo.ui.Widget {

        static fn: ContextMenu;

        options: ContextMenuOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ContextMenu;

        constructor(element: Element, options?: ContextMenuOptions);


        append(item: any, referenceItem: string): kendo.ui.ContextMenu;
        append(item: any, referenceItem: JQuery): kendo.ui.ContextMenu;
        close(element: Element): kendo.ui.ContextMenu;
        close(element: JQuery): kendo.ui.ContextMenu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.ContextMenu;
        enable(element: Element, enable: boolean): kendo.ui.ContextMenu;
        enable(element: JQuery, enable: boolean): kendo.ui.ContextMenu;
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
        effects?: string;
        duration?: number;
    }

    interface ContextMenuAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface ContextMenuAnimation {
        close?: ContextMenuAnimationClose;
        open?: ContextMenuAnimationOpen;
    }

    interface ContextMenuOptions {
        name?: string;
        alignToAnchor?: boolean;
        animation?: ContextMenuAnimation;
        closeOnClick?: boolean;
        dataSource?: any|any;
        direction?: string;
        filter?: string;
        hoverDelay?: number;
        orientation?: string;
        popupCollision?: string;
        showOn?: string;
        target?: string|JQuery;
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
        item?: Element;
        type?: string;
        target?: Element;
        event?: JQueryEventObject;
    }

    interface ContextMenuOpenEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
        event?: JQueryEventObject;
    }

    interface ContextMenuActivateEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
    }

    interface ContextMenuDeactivateEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
    }

    interface ContextMenuSelectEvent extends ContextMenuEvent {
        item?: Element;
        type?: string;
        target?: Element;
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
        value(value: Date): void;
        value(value: string): void;

    }

    interface DatePickerAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface DatePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DatePickerAnimation {
        close?: DatePickerAnimationClose;
        open?: DatePickerAnimationOpen;
    }

    interface DatePickerMonth {
        content?: string;
        empty?: string;
    }

    interface DatePickerOptions {
        name?: string;
        animation?: DatePickerAnimation;
        ARIATemplate?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        disableDates?: any|Function;
        footer?: string|Function;
        format?: string;
        max?: Date;
        min?: Date;
        month?: DatePickerMonth;
        parseFormats?: any;
        start?: string;
        value?: Date;
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
        effects?: string;
        duration?: number;
    }

    interface DateTimePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DateTimePickerAnimation {
        close?: DateTimePickerAnimationClose;
        open?: DateTimePickerAnimationOpen;
    }

    interface DateTimePickerMonth {
        content?: string;
        empty?: string;
    }

    interface DateTimePickerOptions {
        name?: string;
        animation?: DateTimePickerAnimation;
        ARIATemplate?: string;
        culture?: string;
        dates?: any;
        depth?: string;
        disableDates?: any|Function;
        footer?: string;
        format?: string;
        interval?: number;
        max?: Date;
        min?: Date;
        month?: DateTimePickerMonth;
        parseFormats?: any;
        start?: string;
        timeFormat?: string;
        value?: Date;
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
        view?: string;
    }

    interface DateTimePickerOpenEvent extends DateTimePickerEvent {
        view?: string;
    }


    class DropDownList extends kendo.ui.Widget {

        static fn: DropDownList;

        options: DropDownListOptions;

        dataSource: kendo.data.DataSource;
        span: JQuery;
        filterInput: JQuery;
        list: JQuery;
        ul: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): DropDownList;

        constructor(element: Element, options?: DropDownListOptions);


        close(): void;
        dataItem(index?: JQuery): any;
        dataItem(index?: number): any;
        destroy(): void;
        focus(): void;
        open(): void;
        enable(enable: boolean): void;
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
        effects?: string;
        duration?: number;
    }

    interface DropDownListAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface DropDownListAnimation {
        close?: DropDownListAnimationClose;
        open?: DropDownListAnimationOpen;
    }

    interface DropDownListVirtual {
        itemHeight?: number;
        valueMapper?: Function;
    }

    interface DropDownListOptions {
        name?: string;
        animation?: DropDownListAnimation;
        autoBind?: boolean;
        cascadeFrom?: string;
        cascadeFromField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        ignoreCase?: string;
        index?: number;
        minLength?: number;
        popup?: any;
        optionLabel?: string|any;
        optionLabelTemplate?: string|Function;
        headerTemplate?: string|Function;
        template?: string|Function;
        valueTemplate?: string|Function;
        text?: string;
        value?: string;
        valuePrimitive?: boolean;
        virtual?: DropDownListVirtual;
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
        item?: JQuery;
    }

    interface DropDownListCascadeEvent extends DropDownListEvent {
    }


    class Editor extends kendo.ui.Widget {

        static fn: Editor;

        options: EditorOptions;

        body: Element;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Editor;

        constructor(element: Element, options?: EditorOptions);


        createRange(document?: Document): Range;
        destroy(): void;
        encodedValue(): void;
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

    interface EditorFileBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorFileBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorFileBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorFileBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorFileBrowserSchemaModelFields {
        name?: EditorFileBrowserSchemaModelFieldsName;
        type?: EditorFileBrowserSchemaModelFieldsType;
        size?: EditorFileBrowserSchemaModelFieldsSize;
    }

    interface EditorFileBrowserSchemaModel {
        id?: string;
        fields?: EditorFileBrowserSchemaModelFields;
    }

    interface EditorFileBrowserSchema {
    }

    interface EditorFileBrowserTransportCreate {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorFileBrowserTransportDestroy {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorFileBrowserTransportRead {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorFileBrowserTransport {
        read?: EditorFileBrowserTransportRead;
        uploadUrl?: string;
        fileUrl?: string|Function;
        destroy?: EditorFileBrowserTransportDestroy;
        create?: EditorFileBrowserTransportCreate;
    }

    interface EditorFileBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorFileBrowserTransport;
        schema?: EditorFileBrowserSchema;
        messages?: EditorFileBrowserMessages;
    }

    interface EditorImageBrowserMessages {
        uploadFile?: string;
        orderBy?: string;
        orderByName?: string;
        orderBySize?: string;
        directoryNotFound?: string;
        emptyFolder?: string;
        deleteFile?: string;
        invalidFileType?: string;
        overwriteFile?: string;
        search?: string;
    }

    interface EditorImageBrowserSchemaModelFieldsName {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsSize {
        field?: string;
        parse?: Function;
    }

    interface EditorImageBrowserSchemaModelFieldsType {
        parse?: Function;
        field?: string;
    }

    interface EditorImageBrowserSchemaModelFields {
        name?: EditorImageBrowserSchemaModelFieldsName;
        type?: EditorImageBrowserSchemaModelFieldsType;
        size?: EditorImageBrowserSchemaModelFieldsSize;
    }

    interface EditorImageBrowserSchemaModel {
        id?: string;
        fields?: EditorImageBrowserSchemaModelFields;
    }

    interface EditorImageBrowserSchema {
    }

    interface EditorImageBrowserTransportCreate {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorImageBrowserTransportDestroy {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorImageBrowserTransportRead {
        contentType?: string;
        data?: any|string|Function;
        dataType?: string;
        type?: string;
        url?: string|Function;
    }

    interface EditorImageBrowserTransport {
        read?: EditorImageBrowserTransportRead;
        thumbnailUrl?: string|Function;
        uploadUrl?: string;
        imageUrl?: string|Function;
        destroy?: EditorImageBrowserTransportDestroy;
        create?: EditorImageBrowserTransportCreate;
    }

    interface EditorImageBrowser {
        fileTypes?: string;
        path?: string;
        transport?: EditorImageBrowserTransport;
        schema?: EditorImageBrowserSchema;
        messages?: EditorImageBrowserMessages;
    }

    interface EditorMessages {
        bold?: string;
        italic?: string;
        underline?: string;
        strikethrough?: string;
        superscript?: string;
        subscript?: string;
        justifyCenter?: string;
        justifyLeft?: string;
        justifyRight?: string;
        justifyFull?: string;
        insertUnorderedList?: string;
        insertOrderedList?: string;
        indent?: string;
        outdent?: string;
        createLink?: string;
        unlink?: string;
        insertImage?: string;
        insertFile?: string;
        insertHtml?: string;
        viewHtml?: string;
        fontName?: string;
        fontNameInherit?: string;
        fontSize?: string;
        fontSizeInherit?: string;
        formatBlock?: string;
        formatting?: string;
        foreColor?: string;
        backColor?: string;
        style?: string;
        emptyFolder?: string;
        uploadFile?: string;
        editAreaTitle?: string;
        orderBy?: string;
        orderBySize?: string;
        orderByName?: string;
        invalidFileType?: string;
        deleteFile?: string;
        overwriteFile?: string;
        directoryNotFound?: string;
        imageWebAddress?: string;
        imageAltText?: string;
        imageWidth?: string;
        imageHeight?: string;
        fileWebAddress?: string;
        fileTitle?: string;
        linkWebAddress?: string;
        linkText?: string;
        linkToolTip?: string;
        linkOpenInNewWindow?: string;
        dialogUpdate?: string;
        dialogInsert?: string;
        dialogCancel?: string;
        createTable?: string;
        createTableHint?: string;
        addColumnLeft?: string;
        addColumnRight?: string;
        addRowAbove?: string;
        addRowBelow?: string;
        deleteRow?: string;
        deleteColumn?: string;
    }

    interface EditorPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface EditorPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: EditorPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface EditorResizable {
        content?: boolean;
        min?: number;
        max?: number;
        toolbar?: boolean;
    }

    interface EditorSerialization {
        entities?: boolean;
        scripts?: boolean;
        semantic?: boolean;
    }

    interface EditorToolItem {
        text?: string;
        value?: string;
        context?: string;
    }

    interface EditorTool {
        name?: string;
        tooltip?: string;
        exec?: Function;
        items?: EditorToolItem[];
        template?: string;
    }

    interface EditorExecParams {
        value?: any;
    }

    interface EditorPasteOptions {
        split?: boolean;
    }

    interface EditorOptions {
        name?: string;
        domain?: string;
        encoded?: boolean;
        messages?: EditorMessages;
        pdf?: EditorPdf;
        resizable?: EditorResizable;
        serialization?: EditorSerialization;
        stylesheets?: any;
        tools?: EditorTool[];
        imageBrowser?: EditorImageBrowser;
        fileBrowser?: EditorFileBrowser;
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
        name?: string;
        command?: any;
    }

    interface EditorPasteEvent extends EditorEvent {
        html?: any;
    }

    interface EditorPdfExportEvent extends EditorEvent {
        promise?: JQueryPromise<any>;
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

    interface FlatColorPickerMessages {
        apply?: string;
        cancel?: string;
    }

    interface FlatColorPickerOptions {
        name?: string;
        opacity?: boolean;
        buttons?: boolean;
        value?: string;
        preview?: boolean;
        autoupdate?: boolean;
        messages?: FlatColorPickerMessages;
        change?(e: FlatColorPickerChangeEvent): void;
    }
    interface FlatColorPickerEvent {
        sender: FlatColorPicker;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface FlatColorPickerChangeEvent extends FlatColorPickerEvent {
        value?: string;
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
        destroy(): void;
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
        dataSource?: any|any|kendo.data.DataSource;
        dataResourceIdField?: string;
        dataTaskIdField?: string;
        dataValueField?: string;
    }

    interface GanttColumn {
        field?: string;
        title?: string;
        format?: string;
        width?: string|number;
        editable?: boolean;
        sortable?: boolean;
    }

    interface GanttCurrentTimeMarker {
        updateInterval?: number;
    }

    interface GanttEditable {
        confirmation?: boolean;
        template?: string|Function;
    }

    interface GanttMessagesActions {
        addChild?: string;
        append?: string;
        insertAfter?: string;
        insertBefore?: string;
        pdf?: string;
    }

    interface GanttMessagesEditor {
        assignButton?: string;
        editorTitle?: string;
        end?: string;
        percentComplete?: string;
        resources?: string;
        resourcesEditorTitle?: string;
        resourcesHeader?: string;
        start?: string;
        title?: string;
        unitsHeader?: string;
    }

    interface GanttMessagesViews {
        day?: string;
        end?: string;
        month?: string;
        start?: string;
        week?: string;
        year?: string;
    }

    interface GanttMessages {
        actions?: GanttMessagesActions;
        cancel?: string;
        deleteDependencyConfirmation?: string;
        deleteDependencyWindowTitle?: string;
        deleteTaskConfirmation?: string;
        deleteTaskWindowTitle?: string;
        destroy?: string;
        editor?: GanttMessagesEditor;
        save?: string;
        views?: GanttMessagesViews;
    }

    interface GanttPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface GanttPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: GanttPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface GanttResources {
        dataFormatField?: string;
        dataColorField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        field?: string;
    }

    interface GanttToolbarItem {
        name?: string;
        template?: string|Function;
        text?: string;
    }

    interface GanttTooltip {
        template?: string|Function;
        visible?: boolean;
    }

    interface GanttView {
        type?: string;
        selected?: boolean;
        slotSize?: number|string;
        timeHeaderTemplate?: string|Function;
        dayHeaderTemplate?: string|Function;
        weekHeaderTemplate?: string|Function;
        monthHeaderTemplate?: string|Function;
        yearHeaderTemplate?: string|Function;
        resizeTooltipFormat?: string;
    }

    interface GanttOptions {
        name?: string;
        assignments?: GanttAssignments;
        autoBind?: boolean;
        columnResizeHandleWidth?: number;
        columns?: GanttColumn[];
        currentTimeMarker?: GanttCurrentTimeMarker;
        dataSource?: any|any|kendo.data.GanttDataSource;
        dependencies?: any|any|kendo.data.GanttDependencyDataSource;
        editable?: GanttEditable;
        navigatable?: boolean;
        workDayStart?: Date;
        workDayEnd?: Date;
        workWeekStart?: number;
        workWeekEnd?: number;
        hourSpan?: number;
        snap?: boolean;
        height?: number|string;
        listWidth?: string|number;
        messages?: GanttMessages;
        pdf?: GanttPdf;
        resizable?: boolean;
        selectable?: boolean;
        showWorkDays?: boolean;
        showWorkHours?: boolean;
        taskTemplate?: string|Function;
        toolbar?: GanttToolbarItem[];
        tooltip?: GanttTooltip;
        views?: GanttView[];
        resources?: GanttResources;
        rowHeight?: number|string;
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
        task?: kendo.data.GanttTask;
        dependency?: kendo.data.GanttDependency;
    }

    interface GanttEditEvent extends GanttEvent {
        container?: JQuery;
        task?: kendo.data.GanttTask;
    }

    interface GanttRemoveEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        dependencies?: any;
    }

    interface GanttCancelEvent extends GanttEvent {
        container?: JQuery;
        task?: kendo.data.GanttTask;
    }

    interface GanttSaveEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        values?: any;
    }

    interface GanttChangeEvent extends GanttEvent {
    }

    interface GanttColumnResizeEvent extends GanttEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface GanttNavigateEvent extends GanttEvent {
        view?: string;
    }

    interface GanttMoveStartEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
    }

    interface GanttMoveEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }

    interface GanttMoveEndEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }

    interface GanttPdfExportEvent extends GanttEvent {
        promise?: JQueryPromise<any>;
    }

    interface GanttResizeStartEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
    }

    interface GanttResizeEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }

    interface GanttResizeEndEvent extends GanttEvent {
        task?: kendo.data.GanttTask;
        start?: Date;
        end?: Date;
    }


    class Grid extends kendo.ui.Widget {

        static fn: Grid;

        options: GridOptions;

        dataSource: kendo.data.DataSource;
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
        current(): JQuery;
        current(cell: JQuery): void;
        dataItem(row: string): kendo.data.ObservableObject;
        dataItem(row: Element): kendo.data.ObservableObject;
        dataItem(row: JQuery): kendo.data.ObservableObject;
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
        lockColumn(column: number): void;
        lockColumn(column: string): void;
        refresh(): void;
        removeRow(row: string): void;
        removeRow(row: Element): void;
        removeRow(row: JQuery): void;
        reorderColumn(destIndex: number, column: any): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
        saveChanges(): void;
        saveRow(): void;
        select(): JQuery;
        select(rows: string): void;
        select(rows: Element): void;
        select(rows: JQuery): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        showColumn(column: number): void;
        showColumn(column: string): void;
        showColumn(column: any): void;
        unlockColumn(column: number): void;
        unlockColumn(column: string): void;

    }

    interface GridAllowCopy {
        delimeter?: string|any;
    }

    interface GridColumnMenuMessages {
        columns?: string;
        filter?: string;
        sortAscending?: string;
        sortDescending?: string;
        settings?: string;
        done?: string;
        lock?: string;
        unlock?: string;
    }

    interface GridColumnMenu {
        columns?: boolean;
        filterable?: boolean;
        sortable?: boolean;
        messages?: GridColumnMenuMessages;
    }

    interface GridColumnCommandItemText {
        edit?: string;
        cancel?: string;
        update?: string;
    }

    interface GridColumnCommandItem {
        name?: string;
        text?: GridColumnCommandItemText;
        className?: string;
        click?: Function;
    }

    interface GridColumnFilterableCell {
        dataSource?: any|kendo.data.DataSource;
        dataTextField?: string;
        delay?: number;
        inputWidth?: number;
        suggestionOperator?: string;
        minLength?: number;
        enabled?: boolean;
        operator?: string;
        showOperators?: boolean;
        template?: Function;
    }

    interface GridColumnFilterable {
        cell?: GridColumnFilterableCell;
        multi?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        checkAll?: boolean;
        itemTemplate?: Function;
        search?: boolean;
        ignoreCase?: boolean;
        ui?: string|Function;
    }

    interface GridColumnSortable {
        compare?: Function;
    }

    interface GridColumn {
        aggregates?: any;
        attributes?: any;
        columns?: any;
        command?: GridColumnCommandItem[];
        encoded?: boolean;
        field?: string;
        filterable?: GridColumnFilterable;
        footerTemplate?: string|Function;
        format?: string;
        groupable?: boolean;
        groupHeaderTemplate?: string|Function;
        groupFooterTemplate?: string|Function;
        headerAttributes?: any;
        headerTemplate?: string|Function;
        hidden?: boolean;
        locked?: boolean;
        lockable?: boolean;
        minScreenWidth?: number;
        sortable?: GridColumnSortable;
        template?: string|Function;
        title?: string;
        width?: string|number;
        values?: any;
        menu?: boolean;
    }

    interface GridEditable {
        confirmation?: boolean|string|Function;
        cancelDelete?: string;
        confirmDelete?: string;
        createAt?: string;
        destroy?: boolean;
        mode?: string;
        template?: string|Function;
        update?: boolean;
        window?: any;
    }

    interface GridExcel {
        allPages?: boolean;
        fileName?: string;
        filterable?: boolean;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface GridFilterableMessages {
        and?: string;
        clear?: string;
        filter?: string;
        info?: string;
        isFalse?: string;
        isTrue?: string;
        or?: string;
        selectValue?: string;
        cancel?: string;
        operator?: string;
        value?: string;
        checkAll?: string;
    }

    interface GridFilterableOperatorsDate {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface GridFilterableOperatorsEnums {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
    }

    interface GridFilterableOperatorsNumber {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        gte?: string;
        gt?: string;
        lte?: string;
        lt?: string;
    }

    interface GridFilterableOperatorsString {
        eq?: string;
        neq?: string;
        isnull?: string;
        isnotnull?: string;
        isempty?: string;
        isnotempty?: string;
        startswith?: string;
        contains?: string;
        doesnotcontain?: string;
        endswith?: string;
    }

    interface GridFilterableOperators {
        string?: GridFilterableOperatorsString;
        number?: GridFilterableOperatorsNumber;
        date?: GridFilterableOperatorsDate;
        enums?: GridFilterableOperatorsEnums;
    }

    interface GridFilterable {
        extra?: boolean;
        messages?: GridFilterableMessages;
        operators?: GridFilterableOperators;
        mode?: string;
    }

    interface GridGroupableMessages {
        empty?: string;
    }

    interface GridGroupable {
        enabled?: boolean;
        showFooter?: boolean;
        messages?: GridGroupableMessages;
    }

    interface GridMessagesCommands {
        cancel?: string;
        canceledit?: string;
        create?: string;
        destroy?: string;
        edit?: string;
        excel?: string;
        save?: string;
        update?: string;
    }

    interface GridMessages {
        commands?: GridMessagesCommands;
        noRecords?: string;
    }

    interface GridNoRecords {
        template?: string|Function;
    }

    interface GridPageableMessages {
        display?: string;
        empty?: string;
        page?: string;
        of?: string;
        itemsPerPage?: string;
        first?: string;
        last?: string;
        next?: string;
        previous?: string;
        refresh?: string;
        morePages?: string;
    }

    interface GridPageable {
        pageSize?: number;
        previousNext?: boolean;
        numeric?: boolean;
        buttonCount?: number;
        input?: boolean;
        pageSizes?: boolean|any;
        refresh?: boolean;
        info?: boolean;
        messages?: GridPageableMessages;
    }

    interface GridPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface GridPdf {
        allPages?: boolean;
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: GridPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface GridScrollable {
        virtual?: boolean;
    }

    interface GridSortable {
        allowUnsort?: boolean;
        mode?: string;
    }

    interface GridToolbarItem {
        name?: string;
        template?: string|Function;
        text?: string;
    }

    interface GridOptions {
        name?: string;
        allowCopy?: GridAllowCopy;
        altRowTemplate?: string|Function;
        autoBind?: boolean;
        columnResizeHandleWidth?: number;
        columns?: GridColumn[];
        columnMenu?: GridColumnMenu;
        dataSource?: any|any|kendo.data.DataSource;
        detailTemplate?: string|Function;
        editable?: GridEditable;
        excel?: GridExcel;
        filterable?: GridFilterable;
        groupable?: GridGroupable;
        height?: number|string;
        messages?: GridMessages;
        mobile?: boolean|string;
        navigatable?: boolean;
        noRecords?: GridNoRecords;
        pageable?: GridPageable;
        pdf?: GridPdf;
        reorderable?: boolean;
        resizable?: boolean;
        rowTemplate?: string|Function;
        scrollable?: GridScrollable;
        selectable?: boolean|string;
        sortable?: GridSortable;
        toolbar?: GridToolbarItem[];
        cancel?(e: GridCancelEvent): void;
        change?(e: GridChangeEvent): void;
        columnHide?(e: GridColumnHideEvent): void;
        columnMenuInit?(e: GridColumnMenuInitEvent): void;
        columnReorder?(e: GridColumnReorderEvent): void;
        columnResize?(e: GridColumnResizeEvent): void;
        columnShow?(e: GridColumnShowEvent): void;
        dataBinding?(e: GridDataBindingEvent): void;
        dataBound?(e: GridDataBoundEvent): void;
        detailCollapse?(e: GridDetailCollapseEvent): void;
        detailExpand?(e: GridDetailExpandEvent): void;
        detailInit?(e: GridDetailInitEvent): void;
        edit?(e: GridEditEvent): void;
        excelExport?(e: GridExcelExportEvent): void;
        pdfExport?(e: GridPdfExportEvent): void;
        filterMenuInit?(e: GridFilterMenuInitEvent): void;
        remove?(e: GridRemoveEvent): void;
        save?(e: GridSaveEvent): void;
        saveChanges?(e: GridSaveChangesEvent): void;
        columnLock?(e: GridColumnLockEvent): void;
        columnUnlock?(e: GridColumnUnlockEvent): void;
        navigate?(e: GridNavigateEvent): void;
    }
    interface GridEvent {
        sender: Grid;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface GridCancelEvent extends GridEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface GridChangeEvent extends GridEvent {
    }

    interface GridColumnHideEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnMenuInitEvent extends GridEvent {
        container?: JQuery;
        field?: string;
    }

    interface GridColumnReorderEvent extends GridEvent {
        column?: any;
        newIndex?: number;
        oldIndex?: number;
    }

    interface GridColumnResizeEvent extends GridEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface GridColumnShowEvent extends GridEvent {
        column?: any;
    }

    interface GridDataBindingEvent extends GridEvent {
        action?: string;
        index?: number;
        items?: any;
    }

    interface GridDataBoundEvent extends GridEvent {
    }

    interface GridDetailCollapseEvent extends GridEvent {
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridDetailExpandEvent extends GridEvent {
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridDetailInitEvent extends GridEvent {
        data?: kendo.data.ObservableObject;
        detailCell?: JQuery;
        detailRow?: JQuery;
        masterRow?: JQuery;
    }

    interface GridEditEvent extends GridEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface GridExcelExportEvent extends GridEvent {
        data?: any;
        workbook?: kendo.ooxml.Workbook;
    }

    interface GridPdfExportEvent extends GridEvent {
        promise?: JQueryPromise<any>;
    }

    interface GridFilterMenuInitEvent extends GridEvent {
        container?: JQuery;
        field?: string;
    }

    interface GridRemoveEvent extends GridEvent {
        model?: kendo.data.Model;
        row?: JQuery;
    }

    interface GridSaveEvent extends GridEvent {
        model?: kendo.data.Model;
        container?: JQuery;
        values?: any;
    }

    interface GridSaveChangesEvent extends GridEvent {
    }

    interface GridColumnLockEvent extends GridEvent {
        column?: any;
    }

    interface GridColumnUnlockEvent extends GridEvent {
        column?: any;
    }

    interface GridNavigateEvent extends GridEvent {
        element?: JQuery;
    }


    class ListView extends kendo.ui.Widget {

        static fn: ListView;

        options: ListViewOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): ListView;

        constructor(element: Element, options?: ListViewOptions);


        add(): void;
        cancel(): void;
        clearSelection(): void;
        dataItem(row: string): kendo.data.ObservableObject;
        dataItem(row: Element): kendo.data.ObservableObject;
        dataItem(row: JQuery): kendo.data.ObservableObject;
        dataItems(): void;
        destroy(): void;
        edit(item: JQuery): void;
        refresh(): void;
        remove(item: any): void;
        save(): void;
        select(): JQuery;
        select(items: JQuery): void;
        select(items: any): void;
        setDataSource(dataSource: kendo.data.DataSource): void;

    }

    interface ListViewOptions {
        name?: string;
        autoBind?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        editTemplate?: Function;
        navigatable?: boolean;
        selectable?: boolean|string;
        template?: Function;
        altTemplate?: Function;
        cancel?(e: ListViewCancelEvent): void;
        change?(e: ListViewEvent): void;
        dataBound?(e: ListViewEvent): void;
        dataBinding?(e: ListViewEvent): void;
        edit?(e: ListViewEditEvent): void;
        remove?(e: ListViewRemoveEvent): void;
        save?(e: ListViewSaveEvent): void;
    }
    interface ListViewEvent {
        sender: ListView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ListViewCancelEvent extends ListViewEvent {
        container?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewEditEvent extends ListViewEvent {
        item?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewRemoveEvent extends ListViewEvent {
        item?: JQuery;
        model?: kendo.data.Model;
    }

    interface ListViewSaveEvent extends ListViewEvent {
        model?: kendo.data.Model;
        item?: JQuery;
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

    interface MaskedTextBoxOptions {
        name?: string;
        clearPromptChar?: boolean;
        culture?: string;
        mask?: string;
        promptChar?: string;
        rules?: any;
        unmaskOnPost?: boolean;
        value?: string;
        change?(e: MaskedTextBoxChangeEvent): void;
    }
    interface MaskedTextBoxEvent {
        sender: MaskedTextBox;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface MaskedTextBoxChangeEvent extends MaskedTextBoxEvent {
    }


    class Menu extends kendo.ui.Widget {

        static fn: Menu;

        options: MenuOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Menu;

        constructor(element: Element, options?: MenuOptions);


        append(item: any, referenceItem: string): kendo.ui.Menu;
        append(item: any, referenceItem: JQuery): kendo.ui.Menu;
        close(element: string): kendo.ui.Menu;
        close(element: Element): kendo.ui.Menu;
        close(element: JQuery): kendo.ui.Menu;
        destroy(): void;
        enable(element: string, enable: boolean): kendo.ui.Menu;
        enable(element: Element, enable: boolean): kendo.ui.Menu;
        enable(element: JQuery, enable: boolean): kendo.ui.Menu;
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
        effects?: string;
        duration?: number;
    }

    interface MenuAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MenuAnimation {
        close?: MenuAnimationClose;
        open?: MenuAnimationOpen;
    }

    interface MenuOptions {
        name?: string;
        animation?: MenuAnimation;
        closeOnClick?: boolean;
        dataSource?: any|any;
        direction?: string;
        hoverDelay?: number;
        openOnClick?: boolean;
        orientation?: string;
        popupCollision?: string;
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
        item?: HTMLElement;
    }

    interface MenuOpenEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuActivateEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuDeactivateEvent extends MenuEvent {
        item?: HTMLElement;
    }

    interface MenuSelectEvent extends MenuEvent {
        item?: HTMLElement;
    }


    class MultiSelect extends kendo.ui.Widget {

        static fn: MultiSelect;

        options: MultiSelectOptions;

        dataSource: kendo.data.DataSource;
        input: JQuery;
        list: JQuery;
        ul: JQuery;
        tagList: JQuery;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): MultiSelect;

        constructor(element: Element, options?: MultiSelectOptions);


        close(): void;
        dataItems(): any;
        destroy(): void;
        enable(enable: boolean): void;
        readonly(readonly: boolean): void;
        focus(): void;
        open(): void;
        refresh(): void;
        search(word: string): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        toggle(toggle: boolean): void;
        value(): any;
        value(value: any): void;
        value(value: string): void;

    }

    interface MultiSelectAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MultiSelectAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MultiSelectAnimation {
        close?: MultiSelectAnimationClose;
        open?: MultiSelectAnimationOpen;
    }

    interface MultiSelectVirtual {
        itemHeight?: number;
        valueMapper?: Function;
    }

    interface MultiSelectOptions {
        name?: string;
        animation?: MultiSelectAnimation;
        autoBind?: boolean;
        autoClose?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        delay?: number;
        enable?: boolean;
        filter?: string;
        fixedGroupTemplate?: string|Function;
        groupTemplate?: string|Function;
        height?: number;
        highlightFirst?: boolean;
        ignoreCase?: string;
        minLength?: number;
        maxSelectedItems?: number;
        placeholder?: string;
        popup?: any;
        headerTemplate?: string|Function;
        itemTemplate?: string|Function;
        tagTemplate?: string;
        tagMode?: string;
        value?: any;
        valuePrimitive?: boolean;
        virtual?: MultiSelectVirtual;
        change?(e: MultiSelectChangeEvent): void;
        close?(e: MultiSelectCloseEvent): void;
        dataBound?(e: MultiSelectDataBoundEvent): void;
        filtering?(e: MultiSelectFilteringEvent): void;
        open?(e: MultiSelectOpenEvent): void;
        select?(e: MultiSelectSelectEvent): void;
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
        item?: JQuery;
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
        success(data: any): void;
        success(data: string): void;
        success(data: Function): void;
        warning(data: any): void;
        warning(data: string): void;
        warning(data: Function): void;

    }

    interface NotificationPosition {
        bottom?: number;
        left?: number;
        pinned?: boolean;
        right?: number;
        top?: number;
    }

    interface NotificationTemplate {
        type?: string;
        template?: string;
    }

    interface NotificationOptions {
        name?: string;
        allowHideAfter?: number;
        animation?: any|boolean;
        appendTo?: string|JQuery;
        autoHideAfter?: number;
        button?: boolean;
        height?: number|string;
        hideOnClick?: boolean;
        position?: NotificationPosition;
        stacking?: string;
        templates?: NotificationTemplate[];
        width?: number|string;
        hide?(e: NotificationHideEvent): void;
        show?(e: NotificationShowEvent): void;
    }
    interface NotificationEvent {
        sender: Notification;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface NotificationHideEvent extends NotificationEvent {
        element?: JQuery;
    }

    interface NotificationShowEvent extends NotificationEvent {
        element?: JQuery;
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

    interface NumericTextBoxOptions {
        name?: string;
        culture?: string;
        decimals?: number;
        downArrowText?: string;
        format?: string;
        max?: number;
        min?: number;
        placeholder?: string;
        spinners?: boolean;
        step?: number;
        upArrowText?: string;
        value?: number;
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
        page(page: number): number;
        refresh(): void;
        destroy(): void;

    }

    interface PagerMessages {
        display?: string;
        empty?: string;
        allPages?: string;
        page?: string;
        of?: string;
        itemsPerPage?: string;
        first?: string;
        previous?: string;
        next?: string;
        last?: string;
        refresh?: string;
    }

    interface PagerOptions {
        name?: string;
        autoBind?: boolean;
        buttonCount?: number;
        dataSource?: any|kendo.data.DataSource;
        selectTemplate?: string;
        linkTemplate?: string;
        info?: boolean;
        input?: boolean;
        numeric?: boolean;
        pageSizes?: boolean|any;
        previousNext?: boolean;
        refresh?: boolean;
        messages?: PagerMessages;
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


        append(item: string, referenceItem: string): kendo.ui.PanelBar;
        append(item: string, referenceItem: Element): kendo.ui.PanelBar;
        append(item: string, referenceItem: JQuery): kendo.ui.PanelBar;
        append(item: Element, referenceItem: string): kendo.ui.PanelBar;
        append(item: Element, referenceItem: Element): kendo.ui.PanelBar;
        append(item: Element, referenceItem: JQuery): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem: string): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem: Element): kendo.ui.PanelBar;
        append(item: JQuery, referenceItem: JQuery): kendo.ui.PanelBar;
        append(item: any, referenceItem: string): kendo.ui.PanelBar;
        append(item: any, referenceItem: Element): kendo.ui.PanelBar;
        append(item: any, referenceItem: JQuery): kendo.ui.PanelBar;
        clearSelection(): void;
        collapse(element: string, useAnimation: boolean): kendo.ui.PanelBar;
        collapse(element: Element, useAnimation: boolean): kendo.ui.PanelBar;
        collapse(element: JQuery, useAnimation: boolean): kendo.ui.PanelBar;
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

    }

    interface PanelBarAnimationCollapse {
        duration?: number;
        effects?: string;
    }

    interface PanelBarAnimationExpand {
        duration?: number;
        effects?: string;
    }

    interface PanelBarAnimation {
        collapse?: PanelBarAnimationCollapse;
        expand?: PanelBarAnimationExpand;
    }

    interface PanelBarOptions {
        name?: string;
        animation?: PanelBarAnimation;
        contentUrls?: any;
        dataSource?: any|any;
        expandMode?: string;
        activate?(e: PanelBarActivateEvent): void;
        collapse?(e: PanelBarCollapseEvent): void;
        contentLoad?(e: PanelBarContentLoadEvent): void;
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
        item?: Element;
    }

    interface PanelBarCollapseEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarContentLoadEvent extends PanelBarEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface PanelBarErrorEvent extends PanelBarEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface PanelBarExpandEvent extends PanelBarEvent {
        item?: Element;
    }

    interface PanelBarSelectEvent extends PanelBarEvent {
        item?: Element;
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
        contains?: string;
        doesnotcontain?: string;
        startswith?: string;
        endswith?: string;
        eq?: string;
        neq?: string;
    }

    interface PivotConfiguratorMessagesFieldMenu {
        info?: string;
        sortAscending?: string;
        sortDescending?: string;
        filterFields?: string;
        filter?: string;
        include?: string;
        title?: string;
        clear?: string;
        ok?: string;
        cancel?: string;
        operators?: PivotConfiguratorMessagesFieldMenuOperators;
    }

    interface PivotConfiguratorMessages {
        measures?: string;
        columns?: string;
        rows?: string;
        measuresLabel?: string;
        rowsLabel?: string;
        columnsLabel?: string;
        fieldsLabel?: string;
        fieldMenu?: PivotConfiguratorMessagesFieldMenu;
    }

    interface PivotConfiguratorSortable {
        allowUnsort?: boolean;
    }

    interface PivotConfiguratorOptions {
        name?: string;
        dataSource?: any|kendo.data.PivotDataSource;
        filterable?: boolean;
        sortable?: PivotConfiguratorSortable;
        height?: number|string;
        messages?: PivotConfiguratorMessages;
    }
    interface PivotConfiguratorEvent {
        sender: PivotConfigurator;
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
        fileName?: string;
        filterable?: boolean;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface PivotGridMessagesFieldMenuOperators {
        contains?: string;
        doesnotcontain?: string;
        startswith?: string;
        endswith?: string;
        eq?: string;
        neq?: string;
    }

    interface PivotGridMessagesFieldMenu {
        info?: string;
        sortAscending?: string;
        sortDescending?: string;
        filterFields?: string;
        filter?: string;
        include?: string;
        title?: string;
        clear?: string;
        ok?: string;
        cancel?: string;
        operators?: PivotGridMessagesFieldMenuOperators;
    }

    interface PivotGridMessages {
        measureFields?: string;
        columnFields?: string;
        rowFields?: string;
        fieldMenu?: PivotGridMessagesFieldMenu;
    }

    interface PivotGridPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface PivotGridPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: PivotGridPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface PivotGridSortable {
        allowUnsort?: boolean;
    }

    interface PivotGridOptions {
        name?: string;
        dataSource?: any|kendo.data.PivotDataSource;
        autoBind?: boolean;
        reorderable?: boolean;
        excel?: PivotGridExcel;
        pdf?: PivotGridPdf;
        filterable?: boolean;
        sortable?: PivotGridSortable;
        columnWidth?: number;
        height?: number|string;
        columnHeaderTemplate?: string|Function;
        dataCellTemplate?: string|Function;
        kpiStatusTemplate?: string|Function;
        kpiTrendTemplate?: string|Function;
        rowHeaderTemplate?: string|Function;
        messages?: PivotGridMessages;
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
        axis?: string;
        path?: string;
    }

    interface PivotGridCollapseMemberEvent extends PivotGridEvent {
        axis?: string;
        path?: string;
    }

    interface PivotGridExcelExportEvent extends PivotGridEvent {
        data?: any;
        workbook?: any;
    }

    interface PivotGridPdfExportEvent extends PivotGridEvent {
        promise?: JQueryPromise<any>;
    }


    class Popup extends kendo.ui.Widget {

        static fn: Popup;

        options: PopupOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Popup;

        constructor(element: Element, options?: PopupOptions);


        close(): void;
        open(): void;
        position(): void;
        setOptions(options: any): void;
        visible(): boolean;

    }

    interface PopupAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface PopupAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface PopupAnimation {
        close?: PopupAnimationClose;
        open?: PopupAnimationOpen;
    }

    interface PopupOptions {
        name?: string;
        animation?: PopupAnimation;
        anchor?: string|JQuery;
        appendTo?: string|JQuery;
        origin?: string;
        position?: string;
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
        value(value: number): void;

    }

    interface ProgressBarAnimation {
        duration?: number;
    }

    interface ProgressBarOptions {
        name?: string;
        animation?: ProgressBarAnimation;
        chunkCount?: number;
        enable?: boolean;
        max?: number;
        min?: number;
        orientation?: string;
        reverse?: boolean;
        showStatus?: boolean;
        type?: string;
        value?: number;
        change?(e: ProgressBarChangeEvent): void;
        complete?(e: ProgressBarCompleteEvent): void;
    }
    interface ProgressBarEvent {
        sender: ProgressBar;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ProgressBarChangeEvent extends ProgressBarEvent {
        value?: number;
    }

    interface ProgressBarCompleteEvent extends ProgressBarEvent {
        value?: number;
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
        value(selectionStart: number, selectionEnd: number): void;
        resize(): void;

    }

    interface RangeSliderTooltip {
        enabled?: boolean;
        format?: string;
        template?: string;
    }

    interface RangeSliderOptions {
        name?: string;
        largeStep?: number;
        max?: number;
        min?: number;
        orientation?: string;
        selectionEnd?: number;
        selectionStart?: number;
        smallStep?: number;
        tickPlacement?: string;
        tooltip?: RangeSliderTooltip;
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
        name?: string;
        autoClose?: boolean;
        breakpoint?: number;
        orientation?: string;
        toggleButton?: string;
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
        occurrenceByUid(uid: string): kendo.data.SchedulerEvent;
        occurrencesInRange(start: Date, end: Date): any;
        refresh(): void;
        removeEvent(event: string): void;
        removeEvent(event: kendo.data.SchedulerEvent): void;
        resourcesBySlot(slot: any): any;
        saveAsPDF(): JQueryPromise<any>;
        saveEvent(): void;
        select(): void;
        select(events: any, options: any): void;
        setDataSource(dataSource: kendo.data.SchedulerDataSource): void;
        slotByPosition(xPosition: number, yPosition: number): any;
        slotByElement(element: Element): any;
        slotByElement(element: JQuery): any;
        view(): kendo.ui.SchedulerView;
        view(type?: string): void;
        viewName(): string;

    }

    interface SchedulerCurrentTimeMarker {
        updateInterval?: number;
        useLocalTimezone?: boolean;
    }

    interface SchedulerEditable {
        confirmation?: boolean|string;
        create?: boolean;
        destroy?: boolean;
        editRecurringMode?: string;
        move?: boolean;
        resize?: boolean;
        template?: string|Function;
        update?: boolean;
        window?: any;
    }

    interface SchedulerFooter {
        command?: string|boolean;
    }

    interface SchedulerGroup {
        resources?: any;
        orientation?: string;
    }

    interface SchedulerMessagesEditable {
        confirmation?: string;
    }

    interface SchedulerMessagesEditor {
        allDayEvent?: string;
        description?: string;
        editorTitle?: string;
        end?: string;
        endTimezone?: string;
        repeat?: string;
        separateTimezones?: string;
        start?: string;
        startTimezone?: string;
        timezone?: string;
        timezoneEditorButton?: string;
        timezoneEditorTitle?: string;
        title?: string;
    }

    interface SchedulerMessagesRecurrenceEditorDaily {
        interval?: string;
        repeatEvery?: string;
    }

    interface SchedulerMessagesRecurrenceEditorEnd {
        after?: string;
        occurrence?: string;
        label?: string;
        never?: string;
        mobileLabel?: string;
        on?: string;
    }

    interface SchedulerMessagesRecurrenceEditorFrequencies {
        daily?: string;
        monthly?: string;
        never?: string;
        weekly?: string;
        yearly?: string;
    }

    interface SchedulerMessagesRecurrenceEditorMonthly {
        day?: string;
        interval?: string;
        repeatEvery?: string;
        repeatOn?: string;
    }

    interface SchedulerMessagesRecurrenceEditorOffsetPositions {
        first?: string;
        second?: string;
        third?: string;
        fourth?: string;
        last?: string;
    }

    interface SchedulerMessagesRecurrenceEditorWeekdays {
        day?: string;
        weekday?: string;
        weekend?: string;
    }

    interface SchedulerMessagesRecurrenceEditorWeekly {
        interval?: string;
        repeatEvery?: string;
        repeatOn?: string;
    }

    interface SchedulerMessagesRecurrenceEditorYearly {
        of?: string;
        repeatEvery?: string;
        repeatOn?: string;
        interval?: string;
    }

    interface SchedulerMessagesRecurrenceEditor {
        daily?: SchedulerMessagesRecurrenceEditorDaily;
        end?: SchedulerMessagesRecurrenceEditorEnd;
        frequencies?: SchedulerMessagesRecurrenceEditorFrequencies;
        monthly?: SchedulerMessagesRecurrenceEditorMonthly;
        offsetPositions?: SchedulerMessagesRecurrenceEditorOffsetPositions;
        weekly?: SchedulerMessagesRecurrenceEditorWeekly;
        weekdays?: SchedulerMessagesRecurrenceEditorWeekdays;
        yearly?: SchedulerMessagesRecurrenceEditorYearly;
    }

    interface SchedulerMessagesRecurrenceMessages {
        deleteRecurring?: string;
        deleteWindowOccurrence?: string;
        deleteWindowSeries?: string;
        deleteWindowTitle?: string;
        editRecurring?: string;
        editWindowOccurrence?: string;
        editWindowSeries?: string;
        editWindowTitle?: string;
    }

    interface SchedulerMessagesViews {
        day?: string;
        week?: string;
        month?: string;
        agenda?: string;
    }

    interface SchedulerMessages {
        allDay?: string;
        ariaEventLabel?: string;
        ariaSlotLabel?: string;
        cancel?: string;
        date?: string;
        deleteWindowTitle?: string;
        destroy?: string;
        event?: string;
        defaultRowText?: string;
        pdf?: string;
        save?: string;
        showFullDay?: string;
        showWorkDay?: string;
        time?: string;
        today?: string;
        editable?: SchedulerMessagesEditable;
        editor?: SchedulerMessagesEditor;
        recurrenceEditor?: SchedulerMessagesRecurrenceEditor;
        recurrenceMessages?: SchedulerMessagesRecurrenceMessages;
        views?: SchedulerMessagesViews;
    }

    interface SchedulerPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface SchedulerPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: SchedulerPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface SchedulerResource {
        dataColorField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataTextField?: string;
        dataValueField?: string;
        field?: string;
        multiple?: boolean;
        name?: string;
        title?: string;
        valuePrimitive?: boolean;
    }

    interface SchedulerToolbarItem {
        name?: string;
    }

    interface SchedulerViewEditable {
        create?: boolean;
        destroy?: boolean;
        update?: boolean;
    }

    interface SchedulerViewGroup {
        orientation?: string;
    }

    interface SchedulerView {
        allDayEventTemplate?: string|Function;
        allDaySlot?: boolean;
        allDaySlotTemplate?: string|Function;
        columnWidth?: number;
        dateHeaderTemplate?: string|Function;
        dayTemplate?: string|Function;
        editable?: SchedulerViewEditable;
        endTime?: Date;
        eventHeight?: number;
        eventTemplate?: string|Function;
        eventTimeTemplate?: string|Function;
        group?: SchedulerViewGroup;
        majorTick?: number;
        majorTimeHeaderTemplate?: string|Function;
        minorTickCount?: number;
        minorTimeHeaderTemplate?: string|Function;
        selected?: boolean;
        selectedDateFormat?: string;
        showWorkHours?: boolean;
        slotTemplate?: string|Function;
        startTime?: Date;
        title?: string;
        type?: string;
        workWeekStart?: number;
        workWeekEnd?: number;
    }

    interface SchedulerSelectOptions {
        events?: any;
        resources?: any;
        start?: Date;
        end?: Date;
        isAllDay?: boolean;
    }

    interface SchedulerOptions {
        name?: string;
        allDayEventTemplate?: string|Function;
        allDaySlot?: boolean;
        autoBind?: boolean;
        currentTimeMarker?: SchedulerCurrentTimeMarker;
        dataSource?: any|any|kendo.data.SchedulerDataSource;
        date?: Date;
        dateHeaderTemplate?: string|Function;
        editable?: SchedulerEditable;
        endTime?: Date;
        eventTemplate?: string|Function;
        footer?: SchedulerFooter;
        group?: SchedulerGroup;
        height?: number|string;
        majorTick?: number;
        majorTimeHeaderTemplate?: string|Function;
        max?: Date;
        messages?: SchedulerMessages;
        min?: Date;
        minorTickCount?: number;
        minorTimeHeaderTemplate?: string|Function;
        mobile?: boolean|string;
        pdf?: SchedulerPdf;
        resources?: SchedulerResource[];
        selectable?: boolean;
        showWorkHours?: boolean;
        snap?: boolean;
        startTime?: Date;
        timezone?: string;
        toolbar?: SchedulerToolbarItem[];
        views?: SchedulerView[];
        groupHeaderTemplate?: string|Function;
        width?: number|string;
        workDayStart?: Date;
        workDayEnd?: Date;
        workWeekStart?: number;
        workWeekEnd?: number;
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
        container?: JQuery;
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerChangeEvent extends SchedulerEvent {
        start?: Date;
        end?: Date;
        events?: any;
        slots?: any;
        resources?: any;
    }

    interface SchedulerDataBindingEvent extends SchedulerEvent {
    }

    interface SchedulerDataBoundEvent extends SchedulerEvent {
    }

    interface SchedulerEditEvent extends SchedulerEvent {
        container?: JQuery;
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerMoveStartEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerMoveEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
        slot?: any;
    }

    interface SchedulerMoveEndEvent extends SchedulerEvent {
        start?: Date;
        end?: Date;
        event?: kendo.data.SchedulerEvent;
        slot?: any;
        resources?: any;
    }

    interface SchedulerNavigateEvent extends SchedulerEvent {
        action?: string;
        date?: Date;
        view?: string;
    }

    interface SchedulerPdfExportEvent extends SchedulerEvent {
        promise?: JQueryPromise<any>;
    }

    interface SchedulerRemoveEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerResizeStartEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
    }

    interface SchedulerResizeEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
        slot?: any;
    }

    interface SchedulerResizeEndEvent extends SchedulerEvent {
        event?: kendo.data.SchedulerEvent;
        slot?: any;
    }

    interface SchedulerSaveEvent extends SchedulerEvent {
        container?: JQuery;
        event?: kendo.data.SchedulerEvent;
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
        value(): number;
        value(value: number): void;
        resize(): void;

    }

    interface SliderTooltip {
        enabled?: boolean;
        format?: string;
        template?: string;
    }

    interface SliderOptions {
        name?: string;
        decreaseButtonTitle?: string;
        increaseButtonTitle?: string;
        largeStep?: number;
        max?: number;
        min?: number;
        orientation?: string;
        showButtons?: boolean;
        smallStep?: number;
        tickPlacement?: string;
        tooltip?: SliderTooltip;
        value?: number;
        change?(e: SliderChangeEvent): void;
        slide?(e: SliderSlideEvent): void;
    }
    interface SliderEvent {
        sender: Slider;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SliderChangeEvent extends SliderEvent {
        value?: number;
    }

    interface SliderSlideEvent extends SliderEvent {
        value?: number;
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
        left?: number;
        top?: number;
    }

    interface SortableOptions {
        name?: string;
        axis?: string;
        autoScroll?: boolean;
        container?: string|JQuery;
        connectWith?: string;
        cursor?: string;
        cursorOffset?: SortableCursorOffset;
        disabled?: string;
        filter?: string;
        handler?: string;
        hint?: Function|string|JQuery;
        holdToDrag?: boolean;
        ignore?: string;
        placeholder?: Function|string|JQuery;
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
        item?: JQuery;
    }

    interface SortableMoveEvent extends SortableEvent {
        item?: JQuery;
        target?: JQuery;
        list?: kendo.ui.Sortable;
        draggableEvent?: any;
    }

    interface SortableEndEvent extends SortableEvent {
        action?: string;
        item?: JQuery;
        oldIndex?: number;
        newIndex?: number;
        draggableEvent?: any;
    }

    interface SortableChangeEvent extends SortableEvent {
        action?: string;
        item?: JQuery;
        oldIndex?: number;
        newIndex?: number;
        draggableEvent?: any;
    }

    interface SortableCancelEvent extends SortableEvent {
        item?: JQuery;
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
        size(pane: string, value: string): void;
        size(pane: Element, value: string): void;
        size(pane: JQuery, value: string): void;
        toggle(pane: string, expand?: boolean): void;
        toggle(pane: Element, expand?: boolean): void;
        toggle(pane: JQuery, expand?: boolean): void;

    }

    interface SplitterPane {
        collapsed?: boolean;
        collapsedSize?: string;
        collapsible?: boolean;
        contentUrl?: string;
        max?: string;
        min?: string;
        resizable?: boolean;
        scrollable?: boolean;
        size?: string;
    }

    interface SplitterOptions {
        name?: string;
        orientation?: string;
        panes?: SplitterPane[];
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
        pane?: Element;
    }

    interface SplitterContentLoadEvent extends SplitterEvent {
        pane?: Element;
    }

    interface SplitterErrorEvent extends SplitterEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface SplitterExpandEvent extends SplitterEvent {
        pane?: Element;
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
        removeSheet(sheet: kendo.spreadsheet.Sheet): void;
        renameSheet(sheet: kendo.spreadsheet.Sheet, newSheetName: string): kendo.spreadsheet.Sheet;
        toJSON(): any;
        fromJSON(data: any): void;

    }

    interface SpreadsheetExcel {
        fileName?: string;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface SpreadsheetPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface SpreadsheetPdf {
        area?: string;
        author?: string;
        creator?: string;
        date?: Date;
        fileName?: string;
        fitWidth?: boolean;
        forceProxy?: boolean;
        guidelines?: boolean;
        hCenter?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: SpreadsheetPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
        vCenter?: boolean;
    }

    interface SpreadsheetSheetColumn {
        index?: number;
        width?: number;
    }

    interface SpreadsheetSheetFilterColumnCriteriaItem {
        operator?: string;
        value?: string;
    }

    interface SpreadsheetSheetFilterColumn {
        criteria?: SpreadsheetSheetFilterColumnCriteriaItem[];
        filter?: string;
        index?: number;
        logic?: string;
        type?: string;
        value?: number|string|Date;
        values?: any;
    }

    interface SpreadsheetSheetFilter {
        columns?: SpreadsheetSheetFilterColumn[];
        ref?: string;
    }

    interface SpreadsheetSheetRowCellBorderBottom {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellBorderLeft {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellBorderRight {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellBorderTop {
        color?: string;
        size?: string;
    }

    interface SpreadsheetSheetRowCellValidation {
        type?: string;
        comparerType?: string;
        dataType?: string;
        from?: string;
        to?: string;
        allowNulls?: boolean;
        messageTemplate?: string;
        titleTemplate?: string;
    }

    interface SpreadsheetSheetRowCell {
        background?: string;
        borderBottom?: SpreadsheetSheetRowCellBorderBottom;
        borderLeft?: SpreadsheetSheetRowCellBorderLeft;
        borderTop?: SpreadsheetSheetRowCellBorderTop;
        borderRight?: SpreadsheetSheetRowCellBorderRight;
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        italic?: boolean;
        bold?: boolean;
        enable?: boolean;
        format?: string;
        formula?: string;
        index?: number;
        textAlign?: string;
        underline?: boolean;
        value?: number|string|boolean|Date;
        validation?: SpreadsheetSheetRowCellValidation;
        verticalAlign?: string;
        wrap?: boolean;
    }

    interface SpreadsheetSheetRow {
        cells?: SpreadsheetSheetRowCell[];
        height?: number;
        index?: number;
    }

    interface SpreadsheetSheetSortColumn {
        ascending?: boolean;
        index?: number;
    }

    interface SpreadsheetSheetSort {
        columns?: SpreadsheetSheetSortColumn[];
        ref?: string;
    }

    interface SpreadsheetSheet {
        activeCell?: string;
        name?: string;
        columns?: SpreadsheetSheetColumn[];
        dataSource?: kendo.data.DataSource;
        filter?: SpreadsheetSheetFilter;
        frozenColumns?: number;
        frozenRows?: number;
        mergedCells?: any;
        rows?: SpreadsheetSheetRow[];
        selection?: string;
        sort?: SpreadsheetSheetSort;
    }

    interface SpreadsheetInsertSheetOptions {
        rows?: number;
        columns?: number;
        rowHeight?: number;
        columnWidth?: number;
        headerHeight?: number;
        headerWidth?: number;
        dataSource?: kendo.data.DataSource;
        data?: any;
    }

    interface SpreadsheetOptions {
        name?: string;
        activeSheet?: string;
        columnWidth?: number;
        columns?: number;
        headerHeight?: number;
        headerWidth?: number;
        excel?: SpreadsheetExcel;
        pdf?: SpreadsheetPdf;
        rowHeight?: number;
        rows?: number;
        sheets?: SpreadsheetSheet[];
        sheetsbar?: boolean;
        toolbar?: boolean;
        render?(e: SpreadsheetRenderEvent): void;
        excelExport?(e: SpreadsheetExcelExportEvent): void;
        excelImport?(e: SpreadsheetExcelImportEvent): void;
        pdfExport?(e: SpreadsheetPdfExportEvent): void;
    }
    interface SpreadsheetEvent {
        sender: Spreadsheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SpreadsheetRenderEvent extends SpreadsheetEvent {
    }

    interface SpreadsheetExcelExportEvent extends SpreadsheetEvent {
        data?: any;
        workbook?: kendo.ooxml.Workbook;
    }

    interface SpreadsheetExcelImportEvent extends SpreadsheetEvent {
        file?: Blob|File;
        progress?: JQueryPromise<any>;
    }

    interface SpreadsheetPdfExportEvent extends SpreadsheetEvent {
        promise?: JQueryPromise<any>;
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
        insertAfter(item: string, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: string, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: Element, referenceTab: JQuery): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: string): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: Element): kendo.ui.TabStrip;
        insertAfter(item: JQuery, referenceTab: JQuery): kendo.ui.TabStrip;
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
        duration?: number;
        effects?: string;
    }

    interface TabStripAnimationOpen {
        duration?: number;
        effects?: string;
    }

    interface TabStripAnimation {
        close?: TabStripAnimationClose;
        open?: TabStripAnimationOpen;
    }

    interface TabStripScrollable {
        distance?: number;
    }

    interface TabStripOptions {
        name?: string;
        animation?: TabStripAnimation;
        collapsible?: boolean;
        contentUrls?: any;
        dataContentField?: string;
        dataContentUrlField?: string;
        dataImageUrlField?: string;
        dataSource?: any|any|kendo.data.DataSource;
        dataSpriteCssClass?: string;
        dataTextField?: string;
        dataUrlField?: string;
        navigatable?: boolean;
        scrollable?: TabStripScrollable;
        tabPosition?: string;
        value?: string;
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
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripContentLoadEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripErrorEvent extends TabStripEvent {
        xhr?: JQueryXHR;
        status?: string;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
    }

    interface TabStripShowEvent extends TabStripEvent {
        item?: Element;
        contentElement?: Element;
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
        effects?: string;
        duration?: number;
    }

    interface TimePickerAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface TimePickerAnimation {
        close?: TimePickerAnimationClose;
        open?: TimePickerAnimationOpen;
    }

    interface TimePickerOptions {
        name?: string;
        animation?: TimePickerAnimation;
        culture?: string;
        dates?: any;
        format?: string;
        interval?: number;
        max?: Date;
        min?: Date;
        parseFormats?: any;
        value?: Date;
        change?(e: TimePickerChangeEvent): void;
        close?(e: TimePickerCloseEvent): void;
        open?(e: TimePickerOpenEvent): void;
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


    class ToolBar extends kendo.ui.Widget {

        static fn: ToolBar;

        options: ToolBarOptions;


        element: JQuery;
        wrapper: JQuery;

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
        toggle(): void;

    }

    interface ToolBarItemButton {
        attributes?: any;
        click?: Function;
        enable?: boolean;
        group?: string;
        hidden?: boolean;
        icon?: string;
        id?: string;
        imageUrl?: string;
        selected?: boolean;
        showIcon?: string;
        showText?: string;
        spriteCssClass?: string;
        toggle?: Function;
        togglable?: boolean;
        text?: string;
        url?: string;
    }

    interface ToolBarItemMenuButton {
        attributes?: any;
        enable?: boolean;
        hidden?: boolean;
        icon?: string;
        id?: string;
        imageUrl?: string;
        spriteCssClass?: string;
        text?: string;
        url?: string;
    }

    interface ToolBarItem {
        attributes?: any;
        buttons?: ToolBarItemButton[];
        click?: Function;
        enable?: boolean;
        group?: string;
        hidden?: boolean;
        icon?: string;
        id?: string;
        imageUrl?: string;
        menuButtons?: ToolBarItemMenuButton[];
        overflow?: string;
        overflowTemplate?: string|Function;
        primary?: boolean;
        selected?: boolean;
        showIcon?: string;
        showText?: string;
        spriteCssClass?: string;
        template?: string|Function;
        text?: string;
        togglable?: boolean;
        toggle?: Function;
        type?: string;
        url?: string;
    }

    interface ToolBarOptions {
        name?: string;
        resizable?: boolean;
        items?: ToolBarItem[];
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
        target?: JQuery;
        id?: string;
    }

    interface ToolBarCloseEvent extends ToolBarEvent {
        SplitButton?: JQuery;
    }

    interface ToolBarOpenEvent extends ToolBarEvent {
        SplitButton?: JQuery;
    }

    interface ToolBarToggleEvent extends ToolBarEvent {
        target?: JQuery;
        checked?: boolean;
        id?: string;
    }

    interface ToolBarOverflowCloseEvent extends ToolBarEvent {
    }

    interface ToolBarOverflowOpenEvent extends ToolBarEvent {
    }


    class Tooltip extends kendo.ui.Widget {

        static fn: Tooltip;

        options: TooltipOptions;


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
        effects?: string;
        duration?: number;
    }

    interface TooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface TooltipAnimation {
        close?: TooltipAnimationClose;
        open?: TooltipAnimationOpen;
    }

    interface TooltipContent {
        url?: string;
    }

    interface TooltipOptions {
        name?: string;
        autoHide?: boolean;
        animation?: TooltipAnimation;
        content?: TooltipContent;
        callout?: boolean;
        filter?: string;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
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
        target?: JQuery;
        options?: any;
    }

    interface TooltipErrorEvent extends TooltipEvent {
        xhr?: JQueryXHR;
        status?: string;
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
        name?: string;
        filter?: string;
        surface?: JQuery;
        multiTouch?: boolean;
        enableSwipe?: boolean;
        minXDelta?: number;
        maxYDelta?: number;
        maxDuration?: number;
        minHold?: number;
        doubleTapTimeout?: number;
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
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDragstartEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDragEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDragendEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchTapEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchDoubletapEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchHoldEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchSwipeEvent extends TouchEvent {
        touch?: kendo.mobile.ui.TouchEventOptions;
        event?: JQueryEventObject;
    }

    interface TouchGesturestartEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject;
        distance?: number;
        center?: kendo.mobile.ui.Point;
    }

    interface TouchGesturechangeEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject;
        distance?: number;
        center?: kendo.mobile.ui.Point;
    }

    interface TouchGestureendEvent extends TouchEvent {
        touches?: any;
        event?: JQueryEventObject;
        distance?: number;
        center?: kendo.mobile.ui.Point;
    }


    class TreeList extends kendo.ui.Widget {

        static fn: TreeList;

        options: TreeListOptions;

        dataSource: kendo.data.DataSource;

        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): TreeList;

        constructor(element: Element, options?: TreeListOptions);


        addRow(parentRow: string): void;
        addRow(parentRow: Element): void;
        addRow(parentRow: JQuery): void;
        cancelRow(): void;
        clearSelection(): void;
        collapse(): void;
        dataItem(row: string): kendo.data.TreeListModel;
        dataItem(row: Element): kendo.data.TreeListModel;
        dataItem(row: JQuery): kendo.data.TreeListModel;
        destroy(): void;
        editRow(row: JQuery): void;
        expand(): void;
        itemFor(model: kendo.data.TreeListModel): JQuery;
        itemFor(model: any): JQuery;
        refresh(): void;
        removeRow(row: string): void;
        removeRow(row: Element): void;
        removeRow(row: JQuery): void;
        saveAsExcel(): void;
        saveAsPDF(): JQueryPromise<any>;
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
        columns?: string;
        filter?: string;
        sortAscending?: string;
        sortDescending?: string;
    }

    interface TreeListColumnMenu {
        columns?: boolean;
        filterable?: boolean;
        sortable?: boolean;
        messages?: TreeListColumnMenuMessages;
    }

    interface TreeListColumnCommandItem {
        className?: string;
        click?: Function;
        name?: string;
        text?: string;
    }

    interface TreeListColumnFilterable {
        ui?: string|Function;
    }

    interface TreeListColumnSortable {
        compare?: Function;
    }

    interface TreeListColumn {
        attributes?: any;
        command?: TreeListColumnCommandItem[];
        encoded?: boolean;
        expandable?: boolean;
        field?: string;
        filterable?: TreeListColumnFilterable;
        footerTemplate?: string|Function;
        format?: string;
        headerAttributes?: any;
        headerTemplate?: string|Function;
        minScreenWidth?: number;
        sortable?: TreeListColumnSortable;
        template?: string|Function;
        title?: string;
        width?: string|number;
        hidden?: boolean;
        menu?: boolean;
        locked?: boolean;
        lockable?: boolean;
    }

    interface TreeListEditable {
        mode?: string;
        move?: boolean;
        template?: string|Function;
        window?: any;
    }

    interface TreeListExcel {
        fileName?: string;
        filterable?: boolean;
        forceProxy?: boolean;
        proxyURL?: string;
    }

    interface TreeListFilterableMessages {
        and?: string;
        clear?: string;
        filter?: string;
        info?: string;
        isFalse?: string;
        isTrue?: string;
        or?: string;
        selectValue?: string;
        cancel?: string;
        operator?: string;
    }

    interface TreeListFilterable {
        extra?: boolean;
        messages?: TreeListFilterableMessages;
    }

    interface TreeListMessagesCommands {
        canceledit?: string;
        create?: string;
        createchild?: string;
        destroy?: string;
        edit?: string;
        excel?: string;
        pdf?: string;
        update?: string;
    }

    interface TreeListMessages {
        commands?: TreeListMessagesCommands;
        loading?: string;
        noRows?: string;
        requestFailed?: string;
        retry?: string;
    }

    interface TreeListPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface TreeListPdf {
        author?: string;
        avoidLinks?: boolean|string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: TreeListPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface TreeListSortable {
        allowUnsort?: boolean;
        mode?: string;
    }

    interface TreeListToolbarItem {
        name?: string;
        text?: string;
    }

    interface TreeListOptions {
        name?: string;
        autoBind?: boolean;
        columns?: TreeListColumn[];
        resizable?: boolean;
        reorderable?: boolean;
        columnMenu?: TreeListColumnMenu;
        dataSource?: any|any|kendo.data.TreeListDataSource;
        editable?: TreeListEditable;
        excel?: TreeListExcel;
        filterable?: TreeListFilterable;
        height?: number|string;
        messages?: TreeListMessages;
        pdf?: TreeListPdf;
        scrollable?: boolean|any;
        selectable?: boolean|string;
        sortable?: TreeListSortable;
        toolbar?: TreeListToolbarItem[];
        cancel?(e: TreeListCancelEvent): void;
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
        pdfExport?(e: TreeListPdfExportEvent): void;
        remove?(e: TreeListRemoveEvent): void;
        save?(e: TreeListSaveEvent): void;
        columnShow?(e: TreeListColumnShowEvent): void;
        columnHide?(e: TreeListColumnHideEvent): void;
        columnReorder?(e: TreeListColumnReorderEvent): void;
        columnResize?(e: TreeListColumnResizeEvent): void;
        columnMenuInit?(e: TreeListColumnMenuInitEvent): void;
        columnLock?(e: TreeListColumnLockEvent): void;
        columnUnlock?(e: TreeListColumnUnlockEvent): void;
    }
    interface TreeListEvent {
        sender: TreeList;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TreeListCancelEvent extends TreeListEvent {
        container?: JQuery;
        model?: kendo.data.TreeListModel;
    }

    interface TreeListChangeEvent extends TreeListEvent {
    }

    interface TreeListCollapseEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
    }

    interface TreeListDataBindingEvent extends TreeListEvent {
    }

    interface TreeListDataBoundEvent extends TreeListEvent {
    }

    interface TreeListDragstartEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
    }

    interface TreeListDragEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
        target?: JQuery;
    }

    interface TreeListDragendEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
        destination?: kendo.data.TreeListModel;
    }

    interface TreeListDropEvent extends TreeListEvent {
        source?: kendo.data.TreeListModel;
        destination?: kendo.data.TreeListModel;
        valid?: boolean;
        setValid?: boolean;
    }

    interface TreeListEditEvent extends TreeListEvent {
        container?: JQuery;
        model?: kendo.data.TreeListModel;
    }

    interface TreeListExcelExportEvent extends TreeListEvent {
        data?: any;
        workbook?: any;
    }

    interface TreeListExpandEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
    }

    interface TreeListFilterMenuInitEvent extends TreeListEvent {
        container?: JQuery;
        field?: string;
    }

    interface TreeListPdfExportEvent extends TreeListEvent {
        promise?: JQueryPromise<any>;
    }

    interface TreeListRemoveEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
        row?: JQuery;
    }

    interface TreeListSaveEvent extends TreeListEvent {
        model?: kendo.data.TreeListModel;
        container?: JQuery;
    }

    interface TreeListColumnShowEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnHideEvent extends TreeListEvent {
        column?: any;
    }

    interface TreeListColumnReorderEvent extends TreeListEvent {
        column?: any;
        newIndex?: number;
        oldIndex?: number;
    }

    interface TreeListColumnResizeEvent extends TreeListEvent {
        column?: any;
        newWidth?: number;
        oldWidth?: number;
    }

    interface TreeListColumnMenuInitEvent extends TreeListEvent {
        container?: JQuery;
        field?: string;
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
        expand(nodes: JQuery): void;
        expand(nodes: Element): void;
        expand(nodes: string): void;
        expandPath(path: any, complete: Function): void;
        expandTo(targetNode: kendo.data.Node): void;
        expandTo(targetNode: any): void;
        findByText(text: string): JQuery;
        findByUid(text: string): JQuery;
        insertAfter(nodeData: any, referenceNode: JQuery): void;
        insertBefore(nodeData: any, referenceNode: JQuery): void;
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
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimationExpand {
        duration?: number;
        effects?: string;
    }

    interface TreeViewAnimation {
        collapse?: TreeViewAnimationCollapse;
        expand?: TreeViewAnimationExpand;
    }

    interface TreeViewCheckboxes {
        checkChildren?: boolean;
        name?: string;
        template?: string|Function;
    }

    interface TreeViewMessages {
        loading?: string;
        requestFailed?: string;
        retry?: string;
    }

    interface TreeViewOptions {
        name?: string;
        animation?: TreeViewAnimation;
        autoBind?: boolean;
        autoScroll?: boolean;
        checkboxes?: TreeViewCheckboxes;
        dataImageUrlField?: string;
        dataSource?: any|any|kendo.data.HierarchicalDataSource;
        dataSpriteCssClassField?: string;
        dataTextField?: string|any;
        dataUrlField?: string;
        dragAndDrop?: boolean;
        loadOnDemand?: boolean;
        messages?: TreeViewMessages;
        template?: string|Function;
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
        node?: Element;
    }

    interface TreeViewCollapseEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewDataBoundEvent extends TreeViewEvent {
        node?: JQuery;
    }

    interface TreeViewDragEvent extends TreeViewEvent {
        sourceNode?: Element;
        dropTarget?: Element;
        pageX?: number;
        pageY?: number;
        statusClass?: string;
        setStatusClass?: Function;
    }

    interface TreeViewDragendEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        dropPosition?: string;
    }

    interface TreeViewDragstartEvent extends TreeViewEvent {
        sourceNode?: Element;
    }

    interface TreeViewDropEvent extends TreeViewEvent {
        sourceNode?: Element;
        destinationNode?: Element;
        valid?: boolean;
        setValid?: Function;
        dropTarget?: Element;
        dropPosition?: string;
    }

    interface TreeViewExpandEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewNavigateEvent extends TreeViewEvent {
        node?: Element;
    }

    interface TreeViewSelectEvent extends TreeViewEvent {
        node?: Element;
    }


    class Upload extends kendo.ui.Widget {

        static fn: Upload;

        options: UploadOptions;


        element: JQuery;
        wrapper: JQuery;

        static extend(proto: Object): Upload;

        constructor(element: Element, options?: UploadOptions);


        destroy(): void;
        disable(): void;
        enable(enable?: boolean): void;
        toggle(enable: boolean): void;

    }

    interface UploadAsync {
        autoUpload?: boolean;
        batch?: boolean;
        removeField?: string;
        removeUrl?: string;
        removeVerb?: string;
        saveField?: string;
        saveUrl?: string;
        withCredentials?: boolean;
    }

    interface UploadFile {
        extension?: string;
        name?: string;
        size?: number;
    }

    interface UploadLocalization {
        cancel?: string;
        dropFilesHere?: string;
        headerStatusUploaded?: string;
        headerStatusUploading?: string;
        remove?: string;
        retry?: string;
        select?: string;
        statusFailed?: string;
        statusUploaded?: string;
        statusUploading?: string;
        uploadSelectedFiles?: string;
    }

    interface UploadOptions {
        name?: string;
        async?: UploadAsync;
        enabled?: boolean;
        files?: UploadFile[];
        localization?: UploadLocalization;
        multiple?: boolean;
        showFileList?: boolean;
        template?: string|Function;
        cancel?(e: UploadCancelEvent): void;
        complete?(e: UploadEvent): void;
        error?(e: UploadErrorEvent): void;
        progress?(e: UploadProgressEvent): void;
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
        files?: UploadFile[];
    }

    interface UploadErrorEvent extends UploadEvent {
        files?: UploadFile[];
        operation?: string;
        XMLHttpRequest?: any;
    }

    interface UploadProgressEvent extends UploadEvent {
        files?: UploadFile[];
        percentComplete?: number;
    }

    interface UploadRemoveEvent extends UploadEvent {
        files?: UploadFile[];
        data?: any;
    }

    interface UploadSelectEvent extends UploadEvent {
        e?: any;
        files?: UploadFile[];
    }

    interface UploadSuccessEvent extends UploadEvent {
        files?: UploadFile[];
        operation?: string;
        response?: any;
        XMLHttpRequest?: any;
    }

    interface UploadUploadEvent extends UploadEvent {
        files?: UploadFile[];
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
        validate(): boolean;
        validateInput(input: Element): boolean;
        validateInput(input: JQuery): boolean;

    }

    interface ValidatorOptions {
        name?: string;
        errorTemplate?: string;
        messages?: any;
        rules?: any;
        validateOnBlur?: boolean;
        validate?(e: ValidatorValidateEvent): void;
    }
    interface ValidatorEvent {
        sender: Validator;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ValidatorValidateEvent extends ValidatorEvent {
        valid?: boolean;
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
        content(): any;
        content(content?: string): void;
        content(content?: JQuery): void;
        destroy(): void;
        maximize(): kendo.ui.Window;
        minimize(): kendo.ui.Window;
        open(): kendo.ui.Window;
        pin(): void;
        refresh(options: any): kendo.ui.Window;
        restore(): kendo.ui.Window;
        setOptions(options: any): void;
        title(): kendo.ui.Window;
        title(text?: string): void;
        toFront(): kendo.ui.Window;
        toggleMaximization(): kendo.ui.Window;
        unpin(): void;

    }

    interface WindowAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface WindowAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface WindowAnimation {
        close?: WindowAnimationClose;
        open?: WindowAnimationOpen;
    }

    interface WindowContent {
        template?: string;
    }

    interface WindowPosition {
        top?: number|string;
        left?: number|string;
    }

    interface WindowRefreshOptions {
        url?: string;
        data?: any;
        type?: string;
        template?: string;
        iframe?: boolean;
    }

    interface WindowOptions {
        name?: string;
        actions?: any;
        animation?: WindowAnimation;
        appendTo?: any|string;
        autoFocus?: boolean;
        content?: WindowContent;
        draggable?: boolean;
        iframe?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        pinned?: boolean;
        position?: WindowPosition;
        resizable?: boolean;
        scrollable?: boolean;
        title?: string|boolean;
        visible?: boolean;
        width?: number|string;
        height?: number|string;
        activate?(e: WindowEvent): void;
        close?(e: WindowCloseEvent): void;
        deactivate?(e: WindowEvent): void;
        dragend?(e: WindowEvent): void;
        dragstart?(e: WindowEvent): void;
        error?(e: WindowErrorEvent): void;
        open?(e: WindowEvent): void;
        refresh?(e: WindowEvent): void;
        resize?(e: WindowEvent): void;
    }
    interface WindowEvent {
        sender: Window;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface WindowCloseEvent extends WindowEvent {
        userTriggered?: boolean;
    }

    interface WindowErrorEvent extends WindowEvent {
        xhr?: JQueryXHR;
        status?: string;
    }


}
declare module kendo.dataviz.ui {
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
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface BarcodePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface BarcodeTextMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface BarcodeText {
        color?: string;
        font?: string;
        margin?: BarcodeTextMargin;
        visible?: boolean;
    }

    interface BarcodeExportImageOptions {
        width?: string;
        height?: string;
    }

    interface BarcodeExportSVGOptions {
        raw?: boolean;
    }

    interface BarcodeOptions {
        name?: string;
        renderAs?: string;
        background?: string;
        border?: BarcodeBorder;
        checksum?: boolean;
        color?: string;
        height?: number;
        padding?: BarcodePadding;
        text?: BarcodeText;
        type?: string;
        value?: string;
        width?: number;
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
        getAxis(name: string): kendo.dataviz.ChartAxis;
        redraw(): void;
        refresh(): void;
        resize(force?: boolean): void;
        saveAsPDF(): void;
        setDataSource(dataSource: kendo.data.DataSource): void;
        setOptions(options: any): void;
        svg(): string;
        imageDataURL(): string;
        toggleHighlight(show: boolean, options: any): void;

    }

    interface ChartCategoryAxisItemAutoBaseUnitSteps {
        seconds?: any;
        minutes?: any;
        hours?: any;
        days?: any;
        weeks?: any;
        months?: any;
        years?: any;
    }

    interface ChartCategoryAxisItemCrosshairTooltipBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemCrosshairTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartCategoryAxisItemCrosshairTooltip {
        background?: string;
        border?: ChartCategoryAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartCategoryAxisItemCrosshairTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartCategoryAxisItemCrosshair {
        color?: string;
        opacity?: number;
        tooltip?: ChartCategoryAxisItemCrosshairTooltip;
        visible?: boolean;
        width?: number;
    }

    interface ChartCategoryAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemLabelsDateFormats {
        days?: string;
        hours?: string;
        months?: string;
        weeks?: string;
        years?: string;
    }

    interface ChartCategoryAxisItemLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartCategoryAxisItemLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartCategoryAxisItemLabelsRotation {
        align?: string;
        angle?: number|string;
    }

    interface ChartCategoryAxisItemLabels {
        background?: string;
        border?: ChartCategoryAxisItemLabelsBorder;
        color?: string;
        culture?: string;
        dateFormats?: ChartCategoryAxisItemLabelsDateFormats;
        font?: string;
        format?: string;
        margin?: ChartCategoryAxisItemLabelsMargin;
        mirror?: boolean;
        padding?: ChartCategoryAxisItemLabelsPadding;
        rotation?: ChartCategoryAxisItemLabelsRotation;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartCategoryAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface ChartCategoryAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartCategoryAxisItemMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartCategoryAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartCategoryAxisItemMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartCategoryAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemNotesDataItemIcon {
        background?: string;
        border?: ChartCategoryAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartCategoryAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemNotesDataItemLabel {
        background?: string;
        border?: ChartCategoryAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface ChartCategoryAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: ChartCategoryAxisItemNotesDataItemIcon;
        label?: ChartCategoryAxisItemNotesDataItemLabel;
        line?: ChartCategoryAxisItemNotesDataItemLine;
    }

    interface ChartCategoryAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemNotesIcon {
        background?: string;
        border?: ChartCategoryAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartCategoryAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemNotesLabel {
        background?: string;
        border?: ChartCategoryAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface ChartCategoryAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartCategoryAxisItemNotes {
        position?: string;
        icon?: ChartCategoryAxisItemNotesIcon;
        label?: ChartCategoryAxisItemNotesLabel;
        line?: ChartCategoryAxisItemNotesLine;
        data?: ChartCategoryAxisItemNotesDataItem[];
        visual?: Function;
    }

    interface ChartCategoryAxisItemPlotBand {
        color?: string;
        from?: number;
        opacity?: number;
        to?: number;
    }

    interface ChartCategoryAxisItemSelectMousewheel {
        reverse?: boolean;
        zoom?: string;
    }

    interface ChartCategoryAxisItemSelect {
        from?: any;
        max?: any;
        min?: any;
        mousewheel?: ChartCategoryAxisItemSelectMousewheel;
        to?: any;
    }

    interface ChartCategoryAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartCategoryAxisItemTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartCategoryAxisItemTitlePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartCategoryAxisItemTitle {
        background?: string;
        border?: ChartCategoryAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: ChartCategoryAxisItemTitleMargin;
        padding?: ChartCategoryAxisItemTitlePadding;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartCategoryAxisItem {
        autoBaseUnitSteps?: ChartCategoryAxisItemAutoBaseUnitSteps;
        axisCrossingValue?: any|Date|any;
        background?: string;
        baseUnit?: string;
        baseUnitStep?: any;
        categories?: any;
        color?: string;
        crosshair?: ChartCategoryAxisItemCrosshair;
        field?: string;
        justified?: boolean;
        labels?: ChartCategoryAxisItemLabels;
        line?: ChartCategoryAxisItemLine;
        majorGridLines?: ChartCategoryAxisItemMajorGridLines;
        majorTicks?: ChartCategoryAxisItemMajorTicks;
        max?: any;
        maxDateGroups?: number;
        min?: any;
        minorGridLines?: ChartCategoryAxisItemMinorGridLines;
        minorTicks?: ChartCategoryAxisItemMinorTicks;
        name?: string;
        pane?: string;
        plotBands?: ChartCategoryAxisItemPlotBand[];
        reverse?: boolean;
        roundToBaseUnit?: boolean;
        select?: ChartCategoryAxisItemSelect;
        startAngle?: number;
        title?: ChartCategoryAxisItemTitle;
        type?: string;
        visible?: boolean;
        weekStartDay?: number;
        notes?: ChartCategoryAxisItemNotes;
    }

    interface ChartChartAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartChartAreaMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartChartArea {
        background?: string;
        border?: ChartChartAreaBorder;
        height?: number;
        margin?: ChartChartAreaMargin;
        opacity?: number;
        width?: number;
    }

    interface ChartLegendBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartLegendInactiveItemsLabels {
        color?: string;
        font?: string;
        template?: string|Function;
    }

    interface ChartLegendInactiveItems {
        labels?: ChartLegendInactiveItemsLabels;
    }

    interface ChartLegendItem {
        cursor?: string;
        visual?: Function;
    }

    interface ChartLegendLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartLegendLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartLegendLabels {
        color?: string;
        font?: string;
        margin?: ChartLegendLabelsMargin;
        padding?: ChartLegendLabelsPadding;
        template?: string|Function;
    }

    interface ChartLegendMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartLegendPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartLegend {
        align?: string;
        background?: string;
        border?: ChartLegendBorder;
        height?: number;
        inactiveItems?: ChartLegendInactiveItems;
        item?: ChartLegendItem;
        labels?: ChartLegendLabels;
        margin?: ChartLegendMargin;
        offsetX?: number;
        offsetY?: number;
        orientation?: string;
        padding?: ChartLegendPadding;
        position?: string;
        reverse?: boolean;
        visible?: boolean;
        width?: number;
    }

    interface ChartPaneBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartPaneMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartPanePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartPaneTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartPaneTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartPaneTitle {
        background?: string;
        border?: ChartPaneTitleBorder;
        color?: string;
        font?: string;
        margin?: ChartPaneTitleMargin;
        position?: string;
        text?: string;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartPane {
        background?: string;
        border?: ChartPaneBorder;
        clip?: boolean;
        height?: number;
        margin?: ChartPaneMargin;
        name?: string;
        padding?: ChartPanePadding;
        title?: ChartPaneTitle;
    }

    interface ChartPannable {
        key?: string;
        lock?: string;
    }

    interface ChartPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface ChartPdf {
        author?: string;
        creator?: string;
        date?: Date;
        forceProxy?: boolean;
        fileName?: string;
        keywords?: string;
        landscape?: boolean;
        margin?: ChartPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface ChartPlotAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartPlotAreaMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartPlotAreaPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartPlotArea {
        background?: string;
        border?: ChartPlotAreaBorder;
        margin?: ChartPlotAreaMargin;
        opacity?: number;
        padding?: ChartPlotAreaPadding;
    }

    interface ChartSeriesItemBorder {
        color?: string|Function;
        dashType?: string|Function;
        opacity?: number|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemConnectors {
        color?: string;
        padding?: number;
        width?: number;
    }

    interface ChartSeriesItemErrorBarsLine {
        width?: number;
        dashType?: string;
    }

    interface ChartSeriesItemErrorBars {
        value?: string|number|any|Function;
        visual?: Function;
        xValue?: string|number|any|Function;
        yValue?: string|number|any|Function;
        endCaps?: boolean;
        color?: string;
        line?: ChartSeriesItemErrorBarsLine;
    }

    interface ChartSeriesItemExtremesBorder {
        color?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemExtremes {
        background?: string|Function;
        border?: ChartSeriesItemExtremesBorder;
        size?: number|Function;
        type?: string|Function;
        rotation?: number|Function;
    }

    interface ChartSeriesItemHighlightBorder {
        color?: string;
        opacity?: number;
        width?: number;
    }

    interface ChartSeriesItemHighlightLine {
        color?: string;
        opacity?: number;
        width?: number;
    }

    interface ChartSeriesItemHighlight {
        border?: ChartSeriesItemHighlightBorder;
        color?: string;
        line?: ChartSeriesItemHighlightLine;
        opacity?: number;
        toggle?: Function;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartSeriesItemLabelsBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemLabelsFromBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemLabelsFromMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemLabelsFromPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemLabelsFrom {
        background?: string|Function;
        border?: ChartSeriesItemLabelsFromBorder;
        color?: string|Function;
        font?: string|Function;
        format?: string|Function;
        margin?: ChartSeriesItemLabelsFromMargin;
        padding?: ChartSeriesItemLabelsFromPadding;
        position?: string|Function;
        template?: string|Function;
        visible?: boolean|Function;
    }

    interface ChartSeriesItemLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemLabelsToBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemLabelsToMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemLabelsToPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemLabelsTo {
        background?: string|Function;
        border?: ChartSeriesItemLabelsToBorder;
        color?: string|Function;
        font?: string|Function;
        format?: string|Function;
        margin?: ChartSeriesItemLabelsToMargin;
        padding?: ChartSeriesItemLabelsToPadding;
        position?: string|Function;
        template?: string|Function;
        visible?: boolean|Function;
    }

    interface ChartSeriesItemLabels {
        align?: string;
        background?: string|Function;
        border?: ChartSeriesItemLabelsBorder;
        color?: string|Function;
        distance?: number;
        font?: string|Function;
        format?: string|Function;
        margin?: ChartSeriesItemLabelsMargin;
        padding?: ChartSeriesItemLabelsPadding;
        position?: string|Function;
        template?: string|Function;
        visible?: boolean|Function;
        visual?: Function;
        from?: ChartSeriesItemLabelsFrom;
        to?: ChartSeriesItemLabelsTo;
    }

    interface ChartSeriesItemLine {
        color?: string;
        opacity?: number;
        width?: string;
        style?: string;
    }

    interface ChartSeriesItemMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemMarkersBorder {
        color?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemMarkers {
        background?: string|Function;
        border?: ChartSeriesItemMarkersBorder;
        size?: number|Function;
        type?: string|Function;
        visible?: boolean|Function;
        visual?: Function;
        rotation?: number|Function;
    }

    interface ChartSeriesItemNegativeValues {
        color?: string;
        visible?: boolean;
    }

    interface ChartSeriesItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartSeriesItemNotesIcon {
        background?: string;
        border?: ChartSeriesItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartSeriesItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartSeriesItemNotesLabel {
        background?: string;
        border?: ChartSeriesItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface ChartSeriesItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartSeriesItemNotes {
        position?: string;
        icon?: ChartSeriesItemNotesIcon;
        label?: ChartSeriesItemNotesLabel;
        line?: ChartSeriesItemNotesLine;
        visual?: Function;
    }

    interface ChartSeriesItemOutliersBorder {
        color?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemOutliers {
        background?: string|Function;
        border?: ChartSeriesItemOutliersBorder;
        size?: number|Function;
        type?: string|Function;
        rotation?: number|Function;
    }

    interface ChartSeriesItemOverlay {
        gradient?: string;
    }

    interface ChartSeriesItemStack {
        type?: string;
        group?: string;
    }

    interface ChartSeriesItemTargetBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface ChartSeriesItemTargetLine {
        width?: any|Function;
    }

    interface ChartSeriesItemTarget {
        border?: ChartSeriesItemTargetBorder;
        color?: string|Function;
        line?: ChartSeriesItemTargetLine;
    }

    interface ChartSeriesItemTooltipBorder {
        color?: string;
        width?: number;
    }

    interface ChartSeriesItemTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesItemTooltip {
        background?: string;
        border?: ChartSeriesItemTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartSeriesItemTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartSeriesItem {
        aggregate?: string|Function;
        axis?: string;
        border?: ChartSeriesItemBorder;
        categoryField?: string;
        closeField?: string;
        color?: string|Function;
        colorField?: string;
        connectors?: ChartSeriesItemConnectors;
        currentField?: string;
        dashType?: string;
        data?: any;
        downColor?: string|Function;
        downColorField?: string;
        segmentSpacing?: number;
        summaryField?: string;
        neckRatio?: number;
        dynamicSlope?: boolean;
        dynamicHeight?: boolean;
        errorBars?: ChartSeriesItemErrorBars;
        errorLowField?: string;
        errorHighField?: string;
        xErrorLowField?: string;
        xErrorHighField?: string;
        yErrorLowField?: string;
        yErrorHighField?: string;
        explodeField?: string;
        field?: string;
        fromField?: string;
        toField?: string;
        noteTextField?: string;
        lowerField?: string;
        q1Field?: string;
        medianField?: string;
        q3Field?: string;
        upperField?: string;
        meanField?: string;
        outliersField?: string;
        gap?: number;
        highField?: string;
        highlight?: ChartSeriesItemHighlight;
        holeSize?: number;
        labels?: ChartSeriesItemLabels;
        line?: ChartSeriesItemLine;
        lowField?: string;
        margin?: ChartSeriesItemMargin;
        markers?: ChartSeriesItemMarkers;
        outliers?: ChartSeriesItemOutliers;
        extremes?: ChartSeriesItemExtremes;
        maxSize?: number;
        minSize?: number;
        missingValues?: string;
        style?: string;
        name?: string;
        negativeColor?: string;
        negativeValues?: ChartSeriesItemNegativeValues;
        opacity?: number;
        openField?: string;
        overlay?: ChartSeriesItemOverlay;
        padding?: number;
        size?: number;
        sizeField?: string;
        spacing?: number;
        stack?: ChartSeriesItemStack;
        startAngle?: number;
        target?: ChartSeriesItemTarget;
        targetField?: string;
        tooltip?: ChartSeriesItemTooltip;
        type?: string;
        visible?: boolean;
        visibleInLegend?: boolean;
        visibleInLegendField?: string;
        visual?: Function;
        width?: number;
        xAxis?: string;
        xField?: string;
        yAxis?: string;
        yField?: string;
        notes?: ChartSeriesItemNotes;
        zIndex?: number;
    }

    interface ChartSeriesDefaultsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsLabelsFromBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsLabelsFromMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsFromPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsFrom {
        background?: string;
        border?: ChartSeriesDefaultsLabelsFromBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: ChartSeriesDefaultsLabelsFromMargin;
        padding?: ChartSeriesDefaultsLabelsFromPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartSeriesDefaultsLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsToBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsLabelsToMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsToPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsTo {
        background?: string;
        border?: ChartSeriesDefaultsLabelsToBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: ChartSeriesDefaultsLabelsToMargin;
        padding?: ChartSeriesDefaultsLabelsToPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartSeriesDefaultsLabels {
        background?: string;
        border?: ChartSeriesDefaultsLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: ChartSeriesDefaultsLabelsMargin;
        padding?: ChartSeriesDefaultsLabelsPadding;
        template?: string|Function;
        visible?: boolean;
        visual?: Function;
        from?: ChartSeriesDefaultsLabelsFrom;
        to?: ChartSeriesDefaultsLabelsTo;
    }

    interface ChartSeriesDefaultsNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsNotesIcon {
        background?: string;
        border?: ChartSeriesDefaultsNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartSeriesDefaultsNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsNotesLabel {
        background?: string;
        border?: ChartSeriesDefaultsNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface ChartSeriesDefaultsNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartSeriesDefaultsNotes {
        icon?: ChartSeriesDefaultsNotesIcon;
        label?: ChartSeriesDefaultsNotesLabel;
        line?: ChartSeriesDefaultsNotesLine;
        visual?: Function;
    }

    interface ChartSeriesDefaultsOverlay {
        gradient?: string;
    }

    interface ChartSeriesDefaultsStack {
        type?: string;
    }

    interface ChartSeriesDefaultsTooltipBorder {
        color?: string;
        width?: number;
    }

    interface ChartSeriesDefaultsTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartSeriesDefaultsTooltip {
        background?: string;
        border?: ChartSeriesDefaultsTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartSeriesDefaultsTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartSeriesDefaults {
        area?: any;
        bar?: any;
        border?: ChartSeriesDefaultsBorder;
        bubble?: any;
        candlestick?: any;
        column?: any;
        donut?: any;
        gap?: number;
        labels?: ChartSeriesDefaultsLabels;
        line?: any;
        ohlc?: any;
        overlay?: ChartSeriesDefaultsOverlay;
        pie?: any;
        scatter?: any;
        scatterLine?: any;
        spacing?: number;
        stack?: ChartSeriesDefaultsStack;
        type?: string;
        tooltip?: ChartSeriesDefaultsTooltip;
        verticalArea?: any;
        verticalLine?: any;
        visual?: Function;
        notes?: ChartSeriesDefaultsNotes;
    }

    interface ChartTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartTitlePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartTitle {
        align?: string;
        background?: string;
        border?: ChartTitleBorder;
        color?: string;
        font?: string;
        margin?: ChartTitleMargin;
        padding?: ChartTitlePadding;
        position?: string;
        text?: string;
        visible?: boolean;
    }

    interface ChartTooltipBorder {
        color?: string;
        width?: number;
    }

    interface ChartTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartTooltip {
        background?: string;
        border?: ChartTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartTooltipPadding;
        shared?: boolean;
        sharedTemplate?: string|Function;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartValueAxisItemCrosshairTooltipBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartValueAxisItemCrosshairTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartValueAxisItemCrosshairTooltip {
        background?: string;
        border?: ChartValueAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartValueAxisItemCrosshairTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartValueAxisItemCrosshair {
        color?: string;
        opacity?: number;
        tooltip?: ChartValueAxisItemCrosshairTooltip;
        visible?: boolean;
        width?: number;
    }

    interface ChartValueAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartValueAxisItemLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartValueAxisItemLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartValueAxisItemLabelsRotation {
        align?: string;
        angle?: number|string;
    }

    interface ChartValueAxisItemLabels {
        background?: string;
        border?: ChartValueAxisItemLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: ChartValueAxisItemLabelsMargin;
        mirror?: boolean;
        padding?: ChartValueAxisItemLabelsPadding;
        rotation?: ChartValueAxisItemLabelsRotation;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartValueAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface ChartValueAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        type?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartValueAxisItemMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        step?: number;
        skip?: number;
    }

    interface ChartValueAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        type?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartValueAxisItemMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartValueAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartValueAxisItemNotesDataItemIcon {
        background?: string;
        border?: ChartValueAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartValueAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartValueAxisItemNotesDataItemLabel {
        background?: string;
        border?: ChartValueAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface ChartValueAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartValueAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: ChartValueAxisItemNotesDataItemIcon;
        label?: ChartValueAxisItemNotesDataItemLabel;
        line?: ChartValueAxisItemNotesDataItemLine;
    }

    interface ChartValueAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartValueAxisItemNotesIcon {
        background?: string;
        border?: ChartValueAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartValueAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartValueAxisItemNotesLabel {
        background?: string;
        border?: ChartValueAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface ChartValueAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartValueAxisItemNotes {
        position?: string;
        icon?: ChartValueAxisItemNotesIcon;
        label?: ChartValueAxisItemNotesLabel;
        line?: ChartValueAxisItemNotesLine;
        data?: ChartValueAxisItemNotesDataItem[];
        visual?: Function;
    }

    interface ChartValueAxisItemPlotBand {
        color?: string;
        from?: number;
        opacity?: number;
        to?: number;
    }

    interface ChartValueAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartValueAxisItemTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartValueAxisItemTitlePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartValueAxisItemTitle {
        background?: string;
        border?: ChartValueAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: ChartValueAxisItemTitleMargin;
        padding?: ChartValueAxisItemTitlePadding;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartValueAxisItem {
        axisCrossingValue?: any|Date|any;
        background?: string;
        color?: string;
        crosshair?: ChartValueAxisItemCrosshair;
        labels?: ChartValueAxisItemLabels;
        line?: ChartValueAxisItemLine;
        majorGridLines?: ChartValueAxisItemMajorGridLines;
        majorUnit?: number;
        max?: number;
        min?: number;
        minorGridLines?: ChartValueAxisItemMinorGridLines;
        majorTicks?: ChartValueAxisItemMajorTicks;
        minorTicks?: ChartValueAxisItemMinorTicks;
        minorUnit?: number;
        name?: string;
        narrowRange?: boolean;
        pane?: string;
        plotBands?: ChartValueAxisItemPlotBand[];
        reverse?: boolean;
        title?: ChartValueAxisItemTitle;
        type?: string;
        visible?: boolean;
        notes?: ChartValueAxisItemNotes;
    }

    interface ChartXAxisItemCrosshairTooltipBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartXAxisItemCrosshairTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartXAxisItemCrosshairTooltip {
        background?: string;
        border?: ChartXAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartXAxisItemCrosshairTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartXAxisItemCrosshair {
        color?: string;
        opacity?: number;
        tooltip?: ChartXAxisItemCrosshairTooltip;
        visible?: boolean;
        width?: number;
    }

    interface ChartXAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartXAxisItemLabelsDateFormats {
        days?: string;
        hours?: string;
        months?: string;
        weeks?: string;
        years?: string;
    }

    interface ChartXAxisItemLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartXAxisItemLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartXAxisItemLabelsRotation {
        align?: string;
        angle?: number|string;
    }

    interface ChartXAxisItemLabels {
        background?: string;
        border?: ChartXAxisItemLabelsBorder;
        color?: string;
        culture?: string;
        dateFormats?: ChartXAxisItemLabelsDateFormats;
        font?: string;
        format?: string;
        margin?: ChartXAxisItemLabelsMargin;
        mirror?: boolean;
        padding?: ChartXAxisItemLabelsPadding;
        rotation?: ChartXAxisItemLabelsRotation;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartXAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface ChartXAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartXAxisItemMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartXAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartXAxisItemMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartXAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartXAxisItemNotesDataItemIcon {
        background?: string;
        border?: ChartXAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartXAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartXAxisItemNotesDataItemLabel {
        background?: string;
        border?: ChartXAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface ChartXAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartXAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: ChartXAxisItemNotesDataItemIcon;
        label?: ChartXAxisItemNotesDataItemLabel;
        line?: ChartXAxisItemNotesDataItemLine;
    }

    interface ChartXAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartXAxisItemNotesIcon {
        background?: string;
        border?: ChartXAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartXAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartXAxisItemNotesLabel {
        background?: string;
        border?: ChartXAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface ChartXAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartXAxisItemNotes {
        position?: string;
        icon?: ChartXAxisItemNotesIcon;
        label?: ChartXAxisItemNotesLabel;
        line?: ChartXAxisItemNotesLine;
        data?: ChartXAxisItemNotesDataItem[];
        visual?: Function;
    }

    interface ChartXAxisItemPlotBand {
        color?: string;
        from?: number;
        opacity?: number;
        to?: number;
    }

    interface ChartXAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartXAxisItemTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartXAxisItemTitlePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartXAxisItemTitle {
        background?: string;
        border?: ChartXAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: ChartXAxisItemTitleMargin;
        padding?: ChartXAxisItemTitlePadding;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartXAxisItem {
        axisCrossingValue?: any|Date|any;
        background?: string;
        baseUnit?: string;
        color?: string;
        crosshair?: ChartXAxisItemCrosshair;
        labels?: ChartXAxisItemLabels;
        line?: ChartXAxisItemLine;
        majorGridLines?: ChartXAxisItemMajorGridLines;
        minorGridLines?: ChartXAxisItemMinorGridLines;
        minorTicks?: ChartXAxisItemMinorTicks;
        majorTicks?: ChartXAxisItemMajorTicks;
        majorUnit?: number;
        max?: any;
        min?: any;
        minorUnit?: number;
        name?: string;
        narrowRange?: boolean;
        pane?: string;
        plotBands?: ChartXAxisItemPlotBand[];
        reverse?: boolean;
        startAngle?: number;
        title?: ChartXAxisItemTitle;
        type?: string;
        visible?: boolean;
        notes?: ChartXAxisItemNotes;
    }

    interface ChartYAxisItemCrosshairTooltipBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartYAxisItemCrosshairTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartYAxisItemCrosshairTooltip {
        background?: string;
        border?: ChartYAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: ChartYAxisItemCrosshairTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface ChartYAxisItemCrosshair {
        color?: string;
        opacity?: number;
        tooltip?: ChartYAxisItemCrosshairTooltip;
        visible?: boolean;
        width?: number;
    }

    interface ChartYAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartYAxisItemLabelsDateFormats {
        days?: string;
        hours?: string;
        months?: string;
        weeks?: string;
        years?: string;
    }

    interface ChartYAxisItemLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartYAxisItemLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartYAxisItemLabelsRotation {
        align?: string;
        angle?: number;
    }

    interface ChartYAxisItemLabels {
        background?: string;
        border?: ChartYAxisItemLabelsBorder;
        color?: string;
        culture?: string;
        dateFormats?: ChartYAxisItemLabelsDateFormats;
        font?: string;
        format?: string;
        margin?: ChartYAxisItemLabelsMargin;
        mirror?: boolean;
        padding?: ChartYAxisItemLabelsPadding;
        rotation?: ChartYAxisItemLabelsRotation;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartYAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface ChartYAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartYAxisItemMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartYAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartYAxisItemMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface ChartYAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartYAxisItemNotesDataItemIcon {
        background?: string;
        border?: ChartYAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartYAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartYAxisItemNotesDataItemLabel {
        background?: string;
        border?: ChartYAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface ChartYAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartYAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: ChartYAxisItemNotesDataItemIcon;
        label?: ChartYAxisItemNotesDataItemLabel;
        line?: ChartYAxisItemNotesDataItemLine;
    }

    interface ChartYAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface ChartYAxisItemNotesIcon {
        background?: string;
        border?: ChartYAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface ChartYAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartYAxisItemNotesLabel {
        background?: string;
        border?: ChartYAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface ChartYAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface ChartYAxisItemNotes {
        position?: string;
        icon?: ChartYAxisItemNotesIcon;
        label?: ChartYAxisItemNotesLabel;
        line?: ChartYAxisItemNotesLine;
        data?: ChartYAxisItemNotesDataItem[];
        visual?: Function;
    }

    interface ChartYAxisItemPlotBand {
        color?: string;
        from?: number;
        opacity?: number;
        to?: number;
    }

    interface ChartYAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ChartYAxisItemTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartYAxisItemTitlePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface ChartYAxisItemTitle {
        background?: string;
        border?: ChartYAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: ChartYAxisItemTitleMargin;
        padding?: ChartYAxisItemTitlePadding;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
        visual?: Function;
    }

    interface ChartYAxisItem {
        axisCrossingValue?: any|Date|any;
        background?: string;
        baseUnit?: string;
        color?: string;
        crosshair?: ChartYAxisItemCrosshair;
        labels?: ChartYAxisItemLabels;
        line?: ChartYAxisItemLine;
        majorGridLines?: ChartYAxisItemMajorGridLines;
        minorGridLines?: ChartYAxisItemMinorGridLines;
        minorTicks?: ChartYAxisItemMinorTicks;
        majorTicks?: ChartYAxisItemMajorTicks;
        majorUnit?: number;
        max?: any;
        min?: any;
        minorUnit?: number;
        name?: string;
        narrowRange?: boolean;
        pane?: string;
        plotBands?: ChartYAxisItemPlotBand[];
        reverse?: boolean;
        title?: ChartYAxisItemTitle;
        type?: string;
        visible?: boolean;
        notes?: ChartYAxisItemNotes;
    }

    interface ChartZoomableMousewheel {
        lock?: string;
    }

    interface ChartZoomableSelection {
        key?: string;
        lock?: string;
    }

    interface ChartZoomable {
        mousewheel?: ChartZoomableMousewheel;
        selection?: ChartZoomableSelection;
    }

    interface ChartExportImageOptions {
        width?: string;
        height?: string;
    }

    interface ChartExportSVGOptions {
        raw?: boolean;
    }

    interface ChartToggleHighlightOptions {
        series?: string;
        category?: string;
    }

    interface ChartSeriesClickEventSeries {
        type?: string;
        name?: string;
        data?: any;
    }

    interface ChartSeriesHoverEventSeries {
        type?: string;
        name?: string;
        data?: any;
    }

    interface ChartOptions {
        name?: string;
        autoBind?: boolean;
        axisDefaults?: any;
        categoryAxis?: ChartCategoryAxisItem[];
        chartArea?: ChartChartArea;
        dataSource?: any|any|kendo.data.DataSource;
        legend?: ChartLegend;
        panes?: ChartPane[];
        pannable?: ChartPannable;
        pdf?: ChartPdf;
        plotArea?: ChartPlotArea;
        renderAs?: string;
        series?: ChartSeriesItem[];
        seriesColors?: any;
        seriesDefaults?: ChartSeriesDefaults;
        theme?: string;
        title?: ChartTitle;
        tooltip?: ChartTooltip;
        transitions?: boolean;
        valueAxis?: ChartValueAxisItem[];
        xAxis?: ChartXAxisItem[];
        yAxis?: ChartYAxisItem[];
        zoomable?: ChartZoomable;
        axisLabelClick?(e: ChartAxisLabelClickEvent): void;
        legendItemClick?(e: ChartLegendItemClickEvent): void;
        legendItemHover?(e: ChartLegendItemHoverEvent): void;
        dataBound?(e: ChartDataBoundEvent): void;
        drag?(e: ChartDragEvent): void;
        dragEnd?(e: ChartDragEndEvent): void;
        dragStart?(e: ChartDragStartEvent): void;
        noteClick?(e: ChartNoteClickEvent): void;
        noteHover?(e: ChartNoteHoverEvent): void;
        plotAreaClick?(e: ChartPlotAreaClickEvent): void;
        render?(e: ChartEvent): void;
        select?(e: ChartSelectEvent): void;
        selectEnd?(e: ChartSelectEndEvent): void;
        selectStart?(e: ChartSelectStartEvent): void;
        seriesClick?(e: ChartSeriesClickEvent): void;
        seriesHover?(e: ChartSeriesHoverEvent): void;
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
        text?: string;
        value?: any;
    }

    interface ChartLegendItemClickEvent extends ChartEvent {
        text?: string;
        series?: any;
        seriesIndex?: number;
        pointIndex?: number;
        element?: any;
    }

    interface ChartLegendItemHoverEvent extends ChartEvent {
        text?: string;
        series?: any;
        seriesIndex?: number;
        pointIndex?: number;
        element?: any;
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

    interface ChartNoteClickEvent extends ChartEvent {
        category?: any;
        element?: any;
        value?: any;
        series?: any;
        dataItem?: any;
        visual?: any;
    }

    interface ChartNoteHoverEvent extends ChartEvent {
        category?: any;
        element?: any;
        value?: any;
        series?: any;
        dataItem?: any;
        visual?: any;
    }

    interface ChartPlotAreaClickEvent extends ChartEvent {
        category?: any;
        element?: any;
        originalEvent?: any;
        value?: any;
        x?: any;
        y?: any;
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
        element?: any;
        originalEvent?: any;
        series?: ChartSeriesClickEventSeries;
        dataItem?: any;
        value?: any;
        percentage?: any;
    }

    interface ChartSeriesHoverEvent extends ChartEvent {
        category?: any;
        categoryPoints?: any;
        element?: any;
        originalEvent?: any;
        series?: ChartSeriesHoverEventSeries;
        dataItem?: any;
        value?: any;
        percentage?: any;
    }

    interface ChartZoomEvent extends ChartEvent {
        axisRanges?: any;
        delta?: number;
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
        connections: DiagramConnection[];
        shapes: DiagramShape[];

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
        getShapeById(id: string): any;
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
        viewToDocument(point: any): any;
        viewToModel(point: any): any;
        viewport(): void;
        zoom(zoom: number, point: any): void;

    }

    interface DiagramConnectionDefaultsContent {
        template?: string|Function;
        text?: string;
        visual?: Function;
    }

    interface DiagramConnectionDefaultsEditableTool {
        name?: string;
    }

    interface DiagramConnectionDefaultsEditable {
        drag?: boolean;
        remove?: boolean;
        tools?: DiagramConnectionDefaultsEditableTool[];
    }

    interface DiagramConnectionDefaultsEndCapFill {
        color?: string;
    }

    interface DiagramConnectionDefaultsEndCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramConnectionDefaultsEndCap {
        fill?: DiagramConnectionDefaultsEndCapFill;
        stroke?: DiagramConnectionDefaultsEndCapStroke;
        type?: string;
    }

    interface DiagramConnectionDefaultsHoverStroke {
        color?: string;
    }

    interface DiagramConnectionDefaultsHover {
        stroke?: DiagramConnectionDefaultsHoverStroke;
    }

    interface DiagramConnectionDefaultsSelectionHandlesFill {
        color?: string;
    }

    interface DiagramConnectionDefaultsSelectionHandlesStroke {
        color?: string;
    }

    interface DiagramConnectionDefaultsSelectionHandles {
        fill?: DiagramConnectionDefaultsSelectionHandlesFill;
        stroke?: DiagramConnectionDefaultsSelectionHandlesStroke;
    }

    interface DiagramConnectionDefaultsSelection {
        handles?: DiagramConnectionDefaultsSelectionHandles;
    }

    interface DiagramConnectionDefaultsStartCapFill {
        color?: string;
    }

    interface DiagramConnectionDefaultsStartCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramConnectionDefaultsStartCap {
        fill?: DiagramConnectionDefaultsStartCapFill;
        stroke?: DiagramConnectionDefaultsStartCapStroke;
        type?: string;
    }

    interface DiagramConnectionDefaultsStroke {
        color?: string;
        width?: number;
    }

    interface DiagramConnectionDefaults {
        content?: DiagramConnectionDefaultsContent;
        editable?: DiagramConnectionDefaultsEditable;
        endCap?: DiagramConnectionDefaultsEndCap;
        fromConnector?: string;
        hover?: DiagramConnectionDefaultsHover;
        selectable?: boolean;
        selection?: DiagramConnectionDefaultsSelection;
        startCap?: DiagramConnectionDefaultsStartCap;
        stroke?: DiagramConnectionDefaultsStroke;
        toConnector?: string;
        type?: string;
    }

    interface DiagramConnectionContent {
        template?: string|Function;
        text?: string;
        visual?: Function;
    }

    interface DiagramConnectionEditableTool {
        name?: string;
    }

    interface DiagramConnectionEditable {
        tools?: DiagramConnectionEditableTool[];
    }

    interface DiagramConnectionEndCapFill {
        color?: string;
    }

    interface DiagramConnectionEndCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramConnectionEndCap {
        fill?: DiagramConnectionEndCapFill;
        stroke?: DiagramConnectionEndCapStroke;
        type?: string;
    }

    interface DiagramConnectionFrom {
        x?: number;
        y?: number;
    }

    interface DiagramConnectionHoverStroke {
        color?: string;
    }

    interface DiagramConnectionHover {
        stroke?: DiagramConnectionHoverStroke;
    }

    interface DiagramConnectionPoint {
        x?: number;
        y?: number;
    }

    interface DiagramConnectionSelectionHandlesFill {
        color?: string;
    }

    interface DiagramConnectionSelectionHandlesStroke {
        color?: string;
    }

    interface DiagramConnectionSelectionHandles {
        fill?: DiagramConnectionSelectionHandlesFill;
        stroke?: DiagramConnectionSelectionHandlesStroke;
    }

    interface DiagramConnectionSelection {
        handles?: DiagramConnectionSelectionHandles;
    }

    interface DiagramConnectionStartCapFill {
        color?: string;
    }

    interface DiagramConnectionStartCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramConnectionStartCap {
        fill?: DiagramConnectionStartCapFill;
        stroke?: DiagramConnectionStartCapStroke;
        type?: string;
    }

    interface DiagramConnectionStroke {
        color?: string;
        width?: number;
    }

    interface DiagramConnectionTo {
        x?: number;
        y?: number;
    }

    interface DiagramConnection {
        content?: DiagramConnectionContent;
        editable?: DiagramConnectionEditable;
        endCap?: DiagramConnectionEndCap;
        from?: DiagramConnectionFrom;
        fromConnector?: string;
        hover?: DiagramConnectionHover;
        points?: DiagramConnectionPoint[];
        selection?: DiagramConnectionSelection;
        startCap?: DiagramConnectionStartCap;
        stroke?: DiagramConnectionStroke;
        to?: DiagramConnectionTo;
        toConnector?: string;
        type?: string;
    }

    interface DiagramEditableDragSnap {
        size?: number;
    }

    interface DiagramEditableDrag {
        snap?: DiagramEditableDragSnap;
    }

    interface DiagramEditableResizeHandlesFill {
        color?: string;
        opacity?: number;
    }

    interface DiagramEditableResizeHandlesHoverFill {
        color?: string;
        opacity?: number;
    }

    interface DiagramEditableResizeHandlesHoverStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramEditableResizeHandlesHover {
        fill?: DiagramEditableResizeHandlesHoverFill;
        stroke?: DiagramEditableResizeHandlesHoverStroke;
    }

    interface DiagramEditableResizeHandlesStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramEditableResizeHandles {
        fill?: DiagramEditableResizeHandlesFill;
        height?: number;
        hover?: DiagramEditableResizeHandlesHover;
        stroke?: DiagramEditableResizeHandlesStroke;
        width?: number;
    }

    interface DiagramEditableResize {
        handles?: DiagramEditableResizeHandles;
    }

    interface DiagramEditableRotateFill {
        color?: string;
        opacity?: number;
    }

    interface DiagramEditableRotateStroke {
        color?: string;
        width?: number;
    }

    interface DiagramEditableRotate {
        fill?: DiagramEditableRotateFill;
        stroke?: DiagramEditableRotateStroke;
    }

    interface DiagramEditableTool {
        name?: string;
        step?: number;
    }

    interface DiagramEditable {
        connectionTemplate?: string|Function;
        drag?: DiagramEditableDrag;
        remove?: boolean;
        resize?: DiagramEditableResize;
        rotate?: DiagramEditableRotate;
        shapeTemplate?: string|Function;
        tools?: DiagramEditableTool[];
    }

    interface DiagramLayoutGrid {
        componentSpacingX?: number;
        componentSpacingY?: number;
        offsetX?: number;
        offsetY?: number;
        width?: number;
    }

    interface DiagramLayout {
        endRadialAngle?: number;
        grid?: DiagramLayoutGrid;
        horizontalSeparation?: number;
        iterations?: number;
        layerSeparation?: number;
        nodeDistance?: number;
        radialFirstLevelSeparation?: number;
        radialSeparation?: number;
        startRadialAngle?: number;
        subtype?: string;
        tipOverTreeStartLevel?: number;
        type?: string;
        underneathHorizontalOffset?: number;
        underneathVerticalSeparation?: number;
        underneathVerticalTopOffset?: number;
        verticalSeparation?: number;
    }

    interface DiagramPannable {
        key?: string;
    }

    interface DiagramPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface DiagramPdf {
        author?: string;
        creator?: string;
        date?: Date;
        fileName?: string;
        forceProxy?: boolean;
        keywords?: string;
        landscape?: boolean;
        margin?: DiagramPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface DiagramSelectableStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramSelectable {
        key?: string;
        stroke?: DiagramSelectableStroke;
    }

    interface DiagramShapeDefaultsConnector {
        name?: string;
        position?: Function;
    }

    interface DiagramShapeDefaultsContent {
        align?: string;
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        template?: string|Function;
        text?: string;
    }

    interface DiagramShapeDefaultsEditableTool {
        name?: string;
        step?: number;
    }

    interface DiagramShapeDefaultsEditable {
        connect?: boolean;
        drag?: boolean;
        remove?: boolean;
        tools?: DiagramShapeDefaultsEditableTool[];
    }

    interface DiagramShapeDefaultsFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface DiagramShapeDefaultsFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: DiagramShapeDefaultsFillGradientStop[];
    }

    interface DiagramShapeDefaultsFill {
        color?: string;
        opacity?: number;
        gradient?: DiagramShapeDefaultsFillGradient;
    }

    interface DiagramShapeDefaultsHoverFill {
        color?: string;
        opacity?: number;
    }

    interface DiagramShapeDefaultsHover {
        fill?: DiagramShapeDefaultsHoverFill;
    }

    interface DiagramShapeDefaultsRotation {
        angle?: number;
    }

    interface DiagramShapeDefaultsStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramShapeDefaults {
        connectors?: DiagramShapeDefaultsConnector[];
        content?: DiagramShapeDefaultsContent;
        editable?: DiagramShapeDefaultsEditable;
        fill?: DiagramShapeDefaultsFill;
        height?: number;
        hover?: DiagramShapeDefaultsHover;
        minHeight?: number;
        minWidth?: number;
        path?: string;
        rotation?: DiagramShapeDefaultsRotation;
        selectable?: boolean;
        source?: string;
        stroke?: DiagramShapeDefaultsStroke;
        type?: string;
        visual?: Function;
        width?: number;
        x?: number;
        y?: number;
    }

    interface DiagramShapeConnector {
        description?: string;
        name?: string;
        position?: Function;
    }

    interface DiagramShapeContent {
        align?: string;
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        template?: string|Function;
        text?: string;
    }

    interface DiagramShapeEditableTool {
        name?: string;
        step?: number;
    }

    interface DiagramShapeEditable {
        connect?: boolean;
        tools?: DiagramShapeEditableTool[];
    }

    interface DiagramShapeFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface DiagramShapeFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: DiagramShapeFillGradientStop[];
    }

    interface DiagramShapeFill {
        color?: string;
        opacity?: number;
        gradient?: DiagramShapeFillGradient;
    }

    interface DiagramShapeHoverFill {
        color?: string;
        opacity?: number;
    }

    interface DiagramShapeHover {
        fill?: DiagramShapeHoverFill;
    }

    interface DiagramShapeRotation {
        angle?: number;
    }

    interface DiagramShapeStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface DiagramShape {
        connectors?: DiagramShapeConnector[];
        content?: DiagramShapeContent;
        editable?: DiagramShapeEditable;
        fill?: DiagramShapeFill;
        height?: number;
        hover?: DiagramShapeHover;
        id?: string;
        minHeight?: number;
        minWidth?: number;
        path?: string;
        rotation?: DiagramShapeRotation;
        source?: string;
        stroke?: DiagramShapeStroke;
        type?: string;
        visual?: Function;
        width?: number;
        x?: number;
        y?: number;
    }

    interface DiagramExportImageOptions {
        width?: string;
        height?: string;
    }

    interface DiagramExportSVGOptions {
        raw?: boolean;
    }

    interface DiagramSelectOptions {
        addToSelection?: boolean;
    }

    interface DiagramOptions {
        name?: string;
        autoBind?: boolean;
        connectionDefaults?: DiagramConnectionDefaults;
        connections?: DiagramConnection[];
        connectionsDataSource?: any|any|kendo.data.DataSource;
        dataSource?: any|any|kendo.data.DataSource;
        editable?: DiagramEditable;
        layout?: DiagramLayout;
        pannable?: DiagramPannable;
        pdf?: DiagramPdf;
        selectable?: DiagramSelectable;
        shapeDefaults?: DiagramShapeDefaults;
        shapes?: DiagramShape[];
        template?: string|Function;
        zoom?: number;
        zoomMax?: number;
        zoomMin?: number;
        zoomRate?: number;
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
        zoomEnd?(e: DiagramZoomEndEvent): void;
        zoomStart?(e: DiagramZoomStartEvent): void;
    }
    interface DiagramEvent {
        sender: Diagram;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DiagramAddEvent extends DiagramEvent {
        connection?: kendo.dataviz.diagram.Connection;
        shape?: kendo.dataviz.diagram.Shape;
    }

    interface DiagramCancelEvent extends DiagramEvent {
        container?: JQuery;
        connection?: kendo.data.Model;
        shape?: kendo.data.Model;
    }

    interface DiagramChangeEvent extends DiagramEvent {
        added?: any;
        removed?: any;
    }

    interface DiagramClickEvent extends DiagramEvent {
        item?: any;
        meta?: any;
        point?: kendo.dataviz.diagram.Point;
    }

    interface DiagramDataBoundEvent extends DiagramEvent {
    }

    interface DiagramDragEvent extends DiagramEvent {
        connections?: any;
        shapes?: any;
    }

    interface DiagramDragEndEvent extends DiagramEvent {
        connections?: any;
        shapes?: any;
    }

    interface DiagramDragStartEvent extends DiagramEvent {
        connections?: any;
        shapes?: any;
    }

    interface DiagramEditEvent extends DiagramEvent {
        container?: JQuery;
        connection?: kendo.data.Model;
        shape?: kendo.data.Model;
    }

    interface DiagramItemBoundsChangeEvent extends DiagramEvent {
        bounds?: kendo.dataviz.diagram.Rect;
        item?: kendo.dataviz.diagram.Shape;
    }

    interface DiagramItemRotateEvent extends DiagramEvent {
        item?: kendo.dataviz.diagram.Shape;
    }

    interface DiagramMouseEnterEvent extends DiagramEvent {
        item?: any;
    }

    interface DiagramMouseLeaveEvent extends DiagramEvent {
        item?: any;
    }

    interface DiagramPanEvent extends DiagramEvent {
        pan?: kendo.dataviz.diagram.Point;
    }

    interface DiagramRemoveEvent extends DiagramEvent {
        connection?: kendo.dataviz.diagram.Connection;
        shape?: kendo.dataviz.diagram.Shape;
    }

    interface DiagramSaveEvent extends DiagramEvent {
        container?: JQuery;
        connection?: kendo.data.Model;
        shape?: kendo.data.Model;
    }

    interface DiagramSelectEvent extends DiagramEvent {
        selected?: any;
        deselected?: any;
    }

    interface DiagramZoomEndEvent extends DiagramEvent {
        point?: kendo.dataviz.diagram.Point;
        zoom?: number;
    }

    interface DiagramZoomStartEvent extends DiagramEvent {
        point?: kendo.dataviz.diagram.Point;
        zoom?: number;
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
        svg(): void;
        imageDataURL(): string;
        value(): void;

    }

    interface LinearGaugeGaugeAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface LinearGaugeGaugeAreaMargin {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface LinearGaugeGaugeArea {
        background?: any;
        border?: LinearGaugeGaugeAreaBorder;
        height?: number;
        margin?: LinearGaugeGaugeAreaMargin;
        width?: number;
    }

    interface LinearGaugePointerItemBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface LinearGaugePointerItemTrackBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface LinearGaugePointerItemTrack {
        border?: LinearGaugePointerItemTrackBorder;
        color?: string;
        opacity?: number;
        size?: number;
        visible?: boolean;
    }

    interface LinearGaugePointerItem {
        border?: LinearGaugePointerItemBorder;
        color?: string;
        margin?: number|any;
        opacity?: number;
        shape?: string;
        size?: number;
        track?: LinearGaugePointerItemTrack;
        value?: number;
    }

    interface LinearGaugeScaleLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface LinearGaugeScaleLabelsMargin {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface LinearGaugeScaleLabelsPadding {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface LinearGaugeScaleLabels {
        background?: string;
        border?: LinearGaugeScaleLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: LinearGaugeScaleLabelsMargin;
        padding?: LinearGaugeScaleLabelsPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface LinearGaugeScaleLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface LinearGaugeScaleMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
    }

    interface LinearGaugeScaleMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
    }

    interface LinearGaugeScaleRange {
        from?: number;
        to?: number;
        opacity?: number;
        color?: string;
    }

    interface LinearGaugeScale {
        line?: LinearGaugeScaleLine;
        labels?: LinearGaugeScaleLabels;
        majorTicks?: LinearGaugeScaleMajorTicks;
        majorUnit?: number;
        max?: number;
        min?: number;
        minorTicks?: LinearGaugeScaleMinorTicks;
        minorUnit?: number;
        mirror?: boolean;
        ranges?: LinearGaugeScaleRange[];
        rangePlaceholderColor?: string;
        rangeSize?: number;
        reverse?: boolean;
        vertical?: boolean;
    }

    interface LinearGaugeExportImageOptions {
        width?: string;
        height?: string;
    }

    interface LinearGaugeExportSVGOptions {
        raw?: boolean;
    }

    interface LinearGaugeOptions {
        name?: string;
        gaugeArea?: LinearGaugeGaugeArea;
        pointer?: LinearGaugePointerItem[];
        renderAs?: string;
        scale?: LinearGaugeScale;
        transitions?: boolean;
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
        position?: string;
    }

    interface MapControlsNavigator {
        position?: string;
    }

    interface MapControlsZoom {
        position?: string;
    }

    interface MapControls {
        attribution?: MapControlsAttribution;
        navigator?: MapControlsNavigator;
        zoom?: MapControlsZoom;
    }

    interface MapLayerDefaultsBing {
        attribution?: string;
        opacity?: number;
        key?: string;
        imagerySet?: string;
        culture?: string;
    }

    interface MapLayerDefaultsBubbleStyleFill {
        color?: string;
        opacity?: number;
    }

    interface MapLayerDefaultsBubbleStyleStroke {
        color?: string;
        dashType?: string;
        opacity?: number;
        width?: number;
    }

    interface MapLayerDefaultsBubbleStyle {
        fill?: MapLayerDefaultsBubbleStyleFill;
        stroke?: MapLayerDefaultsBubbleStyleStroke;
    }

    interface MapLayerDefaultsBubble {
        attribution?: string;
        opacity?: number;
        maxSize?: number;
        minSize?: number;
        style?: MapLayerDefaultsBubbleStyle;
        symbol?: string|Function;
    }

    interface MapLayerDefaultsMarkerTooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MapLayerDefaultsMarkerTooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MapLayerDefaultsMarkerTooltipAnimation {
        close?: MapLayerDefaultsMarkerTooltipAnimationClose;
        open?: MapLayerDefaultsMarkerTooltipAnimationOpen;
    }

    interface MapLayerDefaultsMarkerTooltipContent {
        url?: string;
    }

    interface MapLayerDefaultsMarkerTooltip {
        autoHide?: boolean;
        animation?: MapLayerDefaultsMarkerTooltipAnimation;
        content?: MapLayerDefaultsMarkerTooltipContent;
        template?: string;
        callout?: boolean;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
    }

    interface MapLayerDefaultsMarker {
        shape?: string;
        tooltip?: MapLayerDefaultsMarkerTooltip;
        opacity?: number;
    }

    interface MapLayerDefaultsShapeStyleFill {
        color?: string;
        opacity?: number;
    }

    interface MapLayerDefaultsShapeStyleStroke {
        color?: string;
        dashType?: string;
        opacity?: number;
        width?: number;
    }

    interface MapLayerDefaultsShapeStyle {
        fill?: MapLayerDefaultsShapeStyleFill;
        stroke?: MapLayerDefaultsShapeStyleStroke;
    }

    interface MapLayerDefaultsShape {
        attribution?: string;
        opacity?: number;
        style?: MapLayerDefaultsShapeStyle;
    }

    interface MapLayerDefaultsTile {
        urlTemplate?: string;
        attribution?: string;
        subdomains?: any;
        opacity?: number;
    }

    interface MapLayerDefaults {
        marker?: MapLayerDefaultsMarker;
        shape?: MapLayerDefaultsShape;
        bubble?: MapLayerDefaultsBubble;
        tileSize?: number;
        tile?: MapLayerDefaultsTile;
        bing?: MapLayerDefaultsBing;
    }

    interface MapLayerStyleFill {
        color?: string;
        opacity?: number;
    }

    interface MapLayerStyleStroke {
        color?: string;
        dashType?: number;
        opacity?: number;
        width?: number;
    }

    interface MapLayerStyle {
        fill?: MapLayerStyleFill;
        stroke?: MapLayerStyleStroke;
    }

    interface MapLayerTooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MapLayerTooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MapLayerTooltipAnimation {
        close?: MapLayerTooltipAnimationClose;
        open?: MapLayerTooltipAnimationOpen;
    }

    interface MapLayerTooltipContent {
        url?: string;
    }

    interface MapLayerTooltip {
        autoHide?: boolean;
        animation?: MapLayerTooltipAnimation;
        content?: MapLayerTooltipContent;
        template?: string;
        callout?: boolean;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
    }

    interface MapLayer {
        attribution?: string;
        autoBind?: boolean;
        dataSource?: any|any|kendo.data.DataSource;
        extent?: any|kendo.dataviz.map.Extent;
        key?: string;
        imagerySet?: string;
        culture?: string;
        locationField?: string;
        shape?: string;
        tileSize?: number;
        titleField?: string;
        tooltip?: MapLayerTooltip;
        maxSize?: number;
        minSize?: number;
        opacity?: number;
        subdomains?: any;
        symbol?: string|Function;
        type?: string;
        style?: MapLayerStyle;
        urlTemplate?: string;
        valueField?: string;
        zIndex?: number;
    }

    interface MapMarkerDefaultsTooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MapMarkerDefaultsTooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MapMarkerDefaultsTooltipAnimation {
        close?: MapMarkerDefaultsTooltipAnimationClose;
        open?: MapMarkerDefaultsTooltipAnimationOpen;
    }

    interface MapMarkerDefaultsTooltipContent {
        url?: string;
    }

    interface MapMarkerDefaultsTooltip {
        autoHide?: boolean;
        animation?: MapMarkerDefaultsTooltipAnimation;
        content?: MapMarkerDefaultsTooltipContent;
        template?: string;
        callout?: boolean;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
    }

    interface MapMarkerDefaults {
        shape?: string;
        tooltip?: MapMarkerDefaultsTooltip;
    }

    interface MapMarkerTooltipAnimationClose {
        effects?: string;
        duration?: number;
    }

    interface MapMarkerTooltipAnimationOpen {
        effects?: string;
        duration?: number;
    }

    interface MapMarkerTooltipAnimation {
        close?: MapMarkerTooltipAnimationClose;
        open?: MapMarkerTooltipAnimationOpen;
    }

    interface MapMarkerTooltipContent {
        url?: string;
    }

    interface MapMarkerTooltip {
        autoHide?: boolean;
        animation?: MapMarkerTooltipAnimation;
        content?: MapMarkerTooltipContent;
        template?: string;
        callout?: boolean;
        iframe?: boolean;
        height?: number;
        width?: number;
        position?: string;
        showAfter?: number;
        showOn?: string;
    }

    interface MapMarker {
        location?: any|kendo.dataviz.map.Location;
        shape?: string;
        title?: string;
        tooltip?: MapMarkerTooltip;
    }

    interface MapOptions {
        name?: string;
        center?: any|kendo.dataviz.map.Location;
        controls?: MapControls;
        layerDefaults?: MapLayerDefaults;
        layers?: MapLayer[];
        markerDefaults?: MapMarkerDefaults;
        markers?: MapMarker[];
        minZoom?: number;
        maxZoom?: number;
        minSize?: number;
        pannable?: boolean;
        wraparound?: boolean;
        zoom?: number;
        zoomable?: boolean;
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
        location?: kendo.dataviz.map.Location;
        originalEvent?: any;
    }

    interface MapMarkerActivateEvent extends MapEvent {
        marker?: kendo.dataviz.map.Marker;
        layer?: kendo.dataviz.map.Marker;
    }

    interface MapMarkerCreatedEvent extends MapEvent {
        marker?: kendo.dataviz.map.Marker;
        layer?: kendo.dataviz.map.Marker;
    }

    interface MapMarkerClickEvent extends MapEvent {
        marker?: kendo.dataviz.map.Marker;
        layer?: kendo.dataviz.map.Marker;
    }

    interface MapPanEvent extends MapEvent {
        origin?: kendo.dataviz.map.Location;
        center?: kendo.dataviz.map.Location;
        originalEvent?: any;
    }

    interface MapPanEndEvent extends MapEvent {
        origin?: kendo.dataviz.map.Location;
        center?: kendo.dataviz.map.Location;
        originalEvent?: any;
    }

    interface MapResetEvent extends MapEvent {
    }

    interface MapShapeClickEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape;
        shape?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface MapShapeCreatedEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape;
        shape?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface MapShapeMouseEnterEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape;
        shape?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface MapShapeMouseLeaveEvent extends MapEvent {
        layer?: kendo.dataviz.map.layer.Shape;
        shape?: kendo.drawing.Element;
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
        color?: string;
        width?: number;
    }

    interface QRCodeExportImageOptions {
        width?: string;
        height?: string;
    }

    interface QRCodeExportSVGOptions {
        raw?: boolean;
    }

    interface QRCodeOptions {
        name?: string;
        background?: string;
        border?: QRCodeBorder;
        color?: string;
        encoding?: string;
        errorCorrection?: string;
        padding?: number;
        renderAs?: string;
        size?: number|string;
        value?: number|string;
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


        allValues(values: any): any;
        destroy(): void;
        exportImage(options: any): JQueryPromise<any>;
        exportPDF(options?: kendo.drawing.PDFOptions): JQueryPromise<any>;
        exportSVG(options: any): JQueryPromise<any>;
        redraw(): void;
        resize(force?: boolean): void;
        svg(): void;
        imageDataURL(): string;
        value(): void;

    }

    interface RadialGaugeGaugeAreaBorder {
        color?: string;
        dashType?: string;
        opacity?: number;
        width?: number;
    }

    interface RadialGaugeGaugeAreaMargin {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface RadialGaugeGaugeArea {
        background?: any;
        border?: RadialGaugeGaugeAreaBorder;
        height?: number;
        margin?: RadialGaugeGaugeAreaMargin;
        width?: number;
    }

    interface RadialGaugePointerItemCap {
        color?: string;
        size?: number;
    }

    interface RadialGaugePointerItem {
        cap?: RadialGaugePointerItemCap;
        color?: string;
        value?: number;
    }

    interface RadialGaugeScaleLabelsBorder {
        color?: string;
        dashType?: string;
        opacity?: number;
        width?: number;
    }

    interface RadialGaugeScaleLabelsMargin {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface RadialGaugeScaleLabelsPadding {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }

    interface RadialGaugeScaleLabels {
        background?: string;
        border?: RadialGaugeScaleLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: RadialGaugeScaleLabelsMargin;
        padding?: RadialGaugeScaleLabelsPadding;
        position?: string;
        template?: string|Function;
        visible?: boolean;
    }

    interface RadialGaugeScaleMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
    }

    interface RadialGaugeScaleMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
    }

    interface RadialGaugeScaleRange {
        from?: number;
        to?: number;
        opacity?: number;
        color?: string;
    }

    interface RadialGaugeScale {
        endAngle?: number;
        labels?: RadialGaugeScaleLabels;
        majorTicks?: RadialGaugeScaleMajorTicks;
        majorUnit?: number;
        max?: number;
        min?: number;
        minorTicks?: RadialGaugeScaleMinorTicks;
        minorUnit?: number;
        ranges?: RadialGaugeScaleRange[];
        rangePlaceholderColor?: string;
        rangeSize?: number;
        rangeDistance?: number;
        reverse?: boolean;
        startAngle?: number;
    }

    interface RadialGaugeExportImageOptions {
        width?: string;
        height?: string;
    }

    interface RadialGaugeExportSVGOptions {
        raw?: boolean;
    }

    interface RadialGaugeOptions {
        name?: string;
        gaugeArea?: RadialGaugeGaugeArea;
        pointer?: RadialGaugePointerItem[];
        renderAs?: string;
        scale?: RadialGaugeScale;
        transitions?: boolean;
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
        color?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemCrosshairTooltip {
        background?: string;
        border?: SparklineCategoryAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface SparklineCategoryAxisItemCrosshair {
        color?: string;
        width?: number;
        opacity?: number;
        dashType?: number;
        visible?: boolean;
        tooltip?: SparklineCategoryAxisItemCrosshairTooltip;
    }

    interface SparklineCategoryAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemLabels {
        background?: string;
        border?: SparklineCategoryAxisItemLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        mirror?: boolean;
        padding?: number|any;
        rotation?: number;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
        culture?: string;
        dateFormats?: any;
    }

    interface SparklineCategoryAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface SparklineCategoryAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineCategoryAxisItemMajorTicks {
        size?: number;
        visible?: boolean;
        color?: string;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineCategoryAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineCategoryAxisItemMinorTicks {
        size?: number;
        visible?: boolean;
        color?: string;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItemIcon {
        background?: string;
        border?: SparklineCategoryAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface SparklineCategoryAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItemLabel {
        background?: string;
        border?: SparklineCategoryAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface SparklineCategoryAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: SparklineCategoryAxisItemNotesDataItemIcon;
        label?: SparklineCategoryAxisItemNotesDataItemLabel;
        line?: SparklineCategoryAxisItemNotesDataItemLine;
    }

    interface SparklineCategoryAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesIcon {
        background?: string;
        border?: SparklineCategoryAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface SparklineCategoryAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesLabel {
        background?: string;
        border?: SparklineCategoryAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface SparklineCategoryAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface SparklineCategoryAxisItemNotes {
        position?: string;
        icon?: SparklineCategoryAxisItemNotesIcon;
        label?: SparklineCategoryAxisItemNotesLabel;
        line?: SparklineCategoryAxisItemNotesLine;
        data?: SparklineCategoryAxisItemNotesDataItem[];
    }

    interface SparklineCategoryAxisItemPlotBand {
        from?: number;
        to?: number;
        color?: string;
        opacity?: number;
    }

    interface SparklineCategoryAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineCategoryAxisItemTitle {
        background?: string;
        border?: SparklineCategoryAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: number|any;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
    }

    interface SparklineCategoryAxisItem {
        axisCrossingValue?: any|Date|any;
        categories?: any;
        color?: string;
        field?: string;
        justified?: boolean;
        labels?: SparklineCategoryAxisItemLabels;
        line?: SparklineCategoryAxisItemLine;
        majorGridLines?: SparklineCategoryAxisItemMajorGridLines;
        majorTicks?: SparklineCategoryAxisItemMajorTicks;
        minorGridLines?: SparklineCategoryAxisItemMinorGridLines;
        minorTicks?: SparklineCategoryAxisItemMinorTicks;
        name?: string;
        plotBands?: SparklineCategoryAxisItemPlotBand[];
        reverse?: boolean;
        title?: SparklineCategoryAxisItemTitle;
        type?: string;
        autoBaseUnitSteps?: any;
        baseUnit?: string;
        baseUnitStep?: any;
        max?: any;
        min?: any;
        roundToBaseUnit?: boolean;
        weekStartDay?: number;
        maxDateGroups?: number;
        visible?: boolean;
        crosshair?: SparklineCategoryAxisItemCrosshair;
        notes?: SparklineCategoryAxisItemNotes;
    }

    interface SparklineChartAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineChartArea {
        background?: string;
        opacity?: number;
        border?: SparklineChartAreaBorder;
        height?: number;
        margin?: number|any;
        width?: number;
    }

    interface SparklinePlotAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklinePlotArea {
        background?: string;
        opacity?: number;
        border?: SparklinePlotAreaBorder;
        margin?: number|any;
    }

    interface SparklineSeriesItemBorder {
        color?: string|Function;
        dashType?: string|Function;
        opacity?: number|Function;
        width?: number|Function;
    }

    interface SparklineSeriesItemConnectors {
        color?: string;
        padding?: number;
        width?: number;
    }

    interface SparklineSeriesItemHighlightBorder {
        width?: number;
        color?: string;
        opacity?: number;
    }

    interface SparklineSeriesItemHighlight {
        border?: SparklineSeriesItemHighlightBorder;
        color?: string;
        opacity?: number;
        visible?: boolean;
    }

    interface SparklineSeriesItemLabelsBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface SparklineSeriesItemLabels {
        align?: string;
        background?: string|Function;
        border?: SparklineSeriesItemLabelsBorder;
        color?: string|Function;
        distance?: number;
        font?: string|Function;
        format?: string|Function;
        margin?: number|any;
        padding?: number|any;
        position?: string|Function;
        template?: string|Function;
        visible?: boolean|Function;
    }

    interface SparklineSeriesItemLine {
        color?: string;
        opacity?: number;
        width?: string;
        style?: string;
    }

    interface SparklineSeriesItemMarkersBorder {
        color?: string|Function;
        width?: number|Function;
    }

    interface SparklineSeriesItemMarkers {
        background?: string|Function;
        border?: SparklineSeriesItemMarkersBorder;
        size?: number|Function;
        type?: string|Function;
        visible?: boolean|Function;
        rotation?: number|Function;
    }

    interface SparklineSeriesItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface SparklineSeriesItemNotesIcon {
        background?: string;
        border?: SparklineSeriesItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface SparklineSeriesItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineSeriesItemNotesLabel {
        background?: string;
        border?: SparklineSeriesItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface SparklineSeriesItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface SparklineSeriesItemNotes {
        position?: string;
        icon?: SparklineSeriesItemNotesIcon;
        label?: SparklineSeriesItemNotesLabel;
        line?: SparklineSeriesItemNotesLine;
    }

    interface SparklineSeriesItemOverlay {
        gradient?: string;
    }

    interface SparklineSeriesItemStack {
        type?: string;
        group?: string;
    }

    interface SparklineSeriesItemTargetBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number;
    }

    interface SparklineSeriesItemTargetLine {
        width?: any|Function;
    }

    interface SparklineSeriesItemTarget {
        line?: SparklineSeriesItemTargetLine;
        color?: string|Function;
        border?: SparklineSeriesItemTargetBorder;
    }

    interface SparklineSeriesItemTooltipBorder {
        color?: string;
        width?: number;
    }

    interface SparklineSeriesItemTooltip {
        background?: string;
        border?: SparklineSeriesItemTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface SparklineSeriesItem {
        type?: string;
        dashType?: string;
        data?: any;
        explodeField?: string;
        currentField?: string;
        targetField?: string;
        field?: string;
        name?: string;
        highlight?: SparklineSeriesItemHighlight;
        aggregate?: string|Function;
        axis?: string;
        border?: SparklineSeriesItemBorder;
        categoryField?: string;
        color?: string|Function;
        colorField?: string;
        connectors?: SparklineSeriesItemConnectors;
        gap?: number;
        labels?: SparklineSeriesItemLabels;
        line?: SparklineSeriesItemLine;
        markers?: SparklineSeriesItemMarkers;
        missingValues?: string;
        style?: string;
        negativeColor?: string;
        opacity?: number;
        overlay?: SparklineSeriesItemOverlay;
        padding?: number;
        size?: number;
        startAngle?: number;
        spacing?: number;
        stack?: SparklineSeriesItemStack;
        tooltip?: SparklineSeriesItemTooltip;
        width?: number;
        target?: SparklineSeriesItemTarget;
        notes?: SparklineSeriesItemNotes;
        zIndex?: number;
    }

    interface SparklineSeriesDefaultsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineSeriesDefaultsLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineSeriesDefaultsLabels {
        background?: string;
        border?: SparklineSeriesDefaultsLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface SparklineSeriesDefaultsStack {
        type?: string;
    }

    interface SparklineSeriesDefaultsTooltipBorder {
        color?: string;
        width?: number;
    }

    interface SparklineSeriesDefaultsTooltip {
        background?: string;
        border?: SparklineSeriesDefaultsTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface SparklineSeriesDefaults {
        area?: any;
        bar?: any;
        border?: SparklineSeriesDefaultsBorder;
        column?: any;
        gap?: number;
        labels?: SparklineSeriesDefaultsLabels;
        line?: any;
        overlay?: any;
        pie?: any;
        spacing?: number;
        stack?: SparklineSeriesDefaultsStack;
        type?: string;
        tooltip?: SparklineSeriesDefaultsTooltip;
    }

    interface SparklineTooltipBorder {
        color?: string;
        width?: number;
    }

    interface SparklineTooltip {
        background?: string;
        border?: SparklineTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
        shared?: boolean;
        sharedTemplate?: string;
    }

    interface SparklineValueAxisItemCrosshairTooltipBorder {
        color?: string;
        width?: number;
    }

    interface SparklineValueAxisItemCrosshairTooltip {
        background?: string;
        border?: SparklineValueAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface SparklineValueAxisItemCrosshair {
        color?: string;
        width?: number;
        opacity?: number;
        dashType?: number;
        visible?: boolean;
        tooltip?: SparklineValueAxisItemCrosshairTooltip;
    }

    interface SparklineValueAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineValueAxisItemLabels {
        background?: string;
        border?: SparklineValueAxisItemLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        mirror?: boolean;
        padding?: number|any;
        rotation?: number;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
    }

    interface SparklineValueAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface SparklineValueAxisItemMajorGridLines {
        color?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineValueAxisItemMajorTicks {
        size?: number;
        visible?: boolean;
        color?: string;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineValueAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface SparklineValueAxisItemMinorTicks {
        size?: number;
        color?: string;
        width?: number;
        visible?: boolean;
        step?: number;
        skip?: number;
    }

    interface SparklineValueAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface SparklineValueAxisItemNotesDataItemIcon {
        background?: string;
        border?: SparklineValueAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface SparklineValueAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineValueAxisItemNotesDataItemLabel {
        background?: string;
        border?: SparklineValueAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface SparklineValueAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface SparklineValueAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: SparklineValueAxisItemNotesDataItemIcon;
        label?: SparklineValueAxisItemNotesDataItemLabel;
        line?: SparklineValueAxisItemNotesDataItemLine;
    }

    interface SparklineValueAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface SparklineValueAxisItemNotesIcon {
        background?: string;
        border?: SparklineValueAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface SparklineValueAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineValueAxisItemNotesLabel {
        background?: string;
        border?: SparklineValueAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface SparklineValueAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface SparklineValueAxisItemNotes {
        position?: string;
        icon?: SparklineValueAxisItemNotesIcon;
        label?: SparklineValueAxisItemNotesLabel;
        line?: SparklineValueAxisItemNotesLine;
        data?: SparklineValueAxisItemNotesDataItem[];
    }

    interface SparklineValueAxisItemPlotBand {
        from?: number;
        to?: number;
        color?: string;
        opacity?: number;
    }

    interface SparklineValueAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface SparklineValueAxisItemTitle {
        background?: string;
        border?: SparklineValueAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: number|any;
        padding?: number|any;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
    }

    interface SparklineValueAxisItem {
        axisCrossingValue?: any|Date|any;
        color?: string;
        labels?: SparklineValueAxisItemLabels;
        line?: SparklineValueAxisItemLine;
        majorGridLines?: SparklineValueAxisItemMajorGridLines;
        majorTicks?: SparklineValueAxisItemMajorTicks;
        majorUnit?: number;
        max?: number;
        min?: number;
        minorGridLines?: SparklineValueAxisItemMinorGridLines;
        minorTicks?: SparklineValueAxisItemMinorTicks;
        minorUnit?: number;
        name?: any;
        narrowRange?: boolean;
        plotBands?: SparklineValueAxisItemPlotBand[];
        reverse?: boolean;
        title?: SparklineValueAxisItemTitle;
        visible?: boolean;
        crosshair?: SparklineValueAxisItemCrosshair;
        notes?: SparklineValueAxisItemNotes;
    }

    interface SparklineExportImageOptions {
        width?: string;
        height?: string;
    }

    interface SparklineExportSVGOptions {
        raw?: boolean;
    }

    interface SparklineSeriesClickEventSeries {
        type?: string;
        name?: string;
        data?: any;
    }

    interface SparklineSeriesHoverEventSeries {
        type?: string;
        name?: string;
        data?: any;
    }

    interface SparklineOptions {
        name?: string;
        axisDefaults?: any;
        categoryAxis?: SparklineCategoryAxisItem[];
        chartArea?: SparklineChartArea;
        data?: any;
        dataSource?: any;
        autoBind?: boolean;
        plotArea?: SparklinePlotArea;
        pointWidth?: number;
        renderAs?: string;
        series?: SparklineSeriesItem[];
        seriesColors?: any;
        seriesDefaults?: SparklineSeriesDefaults;
        theme?: string;
        tooltip?: SparklineTooltip;
        transitions?: boolean;
        type?: string;
        valueAxis?: SparklineValueAxisItem[];
        axisLabelClick?(e: SparklineAxisLabelClickEvent): void;
        dataBound?(e: SparklineEvent): void;
        dragStart?(e: SparklineDragStartEvent): void;
        drag?(e: SparklineDragEvent): void;
        dragEnd?(e: SparklineDragEndEvent): void;
        plotAreaClick?(e: SparklinePlotAreaClickEvent): void;
        seriesClick?(e: SparklineSeriesClickEvent): void;
        seriesHover?(e: SparklineSeriesHoverEvent): void;
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

    interface SparklinePlotAreaClickEvent extends SparklineEvent {
        value?: any;
        category?: any;
        element?: any;
        x?: any;
        y?: any;
    }

    interface SparklineSeriesClickEvent extends SparklineEvent {
        value?: any;
        category?: any;
        series?: SparklineSeriesClickEventSeries;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface SparklineSeriesHoverEvent extends SparklineEvent {
        value?: any;
        category?: any;
        series?: SparklineSeriesHoverEventSeries;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface SparklineZoomStartEvent extends SparklineEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface SparklineZoomEvent extends SparklineEvent {
        axisRanges?: any;
        delta?: number;
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
        color?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemCrosshairTooltip {
        background?: string;
        border?: StockChartCategoryAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartCategoryAxisItemCrosshair {
        color?: string;
        width?: number;
        opacity?: number;
        dashType?: number;
        visible?: boolean;
        tooltip?: StockChartCategoryAxisItemCrosshairTooltip;
    }

    interface StockChartCategoryAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemLabels {
        background?: string;
        border?: StockChartCategoryAxisItemLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        mirror?: boolean;
        padding?: number|any;
        rotation?: number;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
        culture?: string;
        dateFormats?: any;
    }

    interface StockChartCategoryAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface StockChartCategoryAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartCategoryAxisItemMajorTicks {
        color?: string;
        size?: number;
        width?: number;
        visible?: boolean;
        step?: number;
        skip?: number;
    }

    interface StockChartCategoryAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartCategoryAxisItemMinorTicks {
        size?: number;
        visible?: boolean;
        color?: string;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItemIcon {
        background?: string;
        border?: StockChartCategoryAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartCategoryAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItemLabel {
        background?: string;
        border?: StockChartCategoryAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface StockChartCategoryAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: StockChartCategoryAxisItemNotesDataItemIcon;
        label?: StockChartCategoryAxisItemNotesDataItemLabel;
        line?: StockChartCategoryAxisItemNotesDataItemLine;
    }

    interface StockChartCategoryAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesIcon {
        background?: string;
        border?: StockChartCategoryAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartCategoryAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesLabel {
        background?: string;
        border?: StockChartCategoryAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface StockChartCategoryAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartCategoryAxisItemNotes {
        position?: string;
        icon?: StockChartCategoryAxisItemNotesIcon;
        label?: StockChartCategoryAxisItemNotesLabel;
        line?: StockChartCategoryAxisItemNotesLine;
        data?: StockChartCategoryAxisItemNotesDataItem[];
    }

    interface StockChartCategoryAxisItemPlotBand {
        from?: number;
        to?: number;
        color?: string;
        opacity?: number;
    }

    interface StockChartCategoryAxisItemSelectMousewheel {
        reverse?: boolean;
        zoom?: string;
    }

    interface StockChartCategoryAxisItemSelect {
        from?: any;
        to?: any;
        min?: any;
        max?: any;
        mousewheel?: StockChartCategoryAxisItemSelectMousewheel;
    }

    interface StockChartCategoryAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartCategoryAxisItemTitle {
        background?: string;
        border?: StockChartCategoryAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: number|any;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
    }

    interface StockChartCategoryAxisItem {
        axisCrossingValue?: any|Date|any;
        categories?: any;
        color?: string;
        field?: string;
        justified?: boolean;
        labels?: StockChartCategoryAxisItemLabels;
        line?: StockChartCategoryAxisItemLine;
        majorGridLines?: StockChartCategoryAxisItemMajorGridLines;
        majorTicks?: StockChartCategoryAxisItemMajorTicks;
        minorGridLines?: StockChartCategoryAxisItemMinorGridLines;
        minorTicks?: StockChartCategoryAxisItemMinorTicks;
        name?: string;
        pane?: string;
        plotBands?: StockChartCategoryAxisItemPlotBand[];
        reverse?: boolean;
        select?: StockChartCategoryAxisItemSelect;
        title?: StockChartCategoryAxisItemTitle;
        type?: string;
        autoBaseUnitSteps?: StockChartCategoryAxisItemAutoBaseUnitSteps;
        background?: string;
        baseUnit?: string;
        baseUnitStep?: any;
        max?: any;
        min?: any;
        roundToBaseUnit?: boolean;
        weekStartDay?: number;
        maxDateGroups?: number;
        visible?: boolean;
        crosshair?: StockChartCategoryAxisItemCrosshair;
        notes?: StockChartCategoryAxisItemNotes;
    }

    interface StockChartChartAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartChartArea {
        background?: string;
        opacity?: number;
        border?: StockChartChartAreaBorder;
        height?: number;
        margin?: number|any;
        width?: number;
    }

    interface StockChartLegendBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartLegendInactiveItemsLabels {
        color?: string;
        font?: string;
        template?: string;
    }

    interface StockChartLegendInactiveItemsMarkers {
        color?: string;
    }

    interface StockChartLegendInactiveItems {
        labels?: StockChartLegendInactiveItemsLabels;
        markers?: StockChartLegendInactiveItemsMarkers;
    }

    interface StockChartLegendItem {
        cursor?: string;
        visual?: Function;
    }

    interface StockChartLegendLabels {
        color?: string;
        font?: string;
        template?: string;
    }

    interface StockChartLegend {
        background?: string;
        border?: StockChartLegendBorder;
        item?: StockChartLegendItem;
        labels?: StockChartLegendLabels;
        margin?: number|any;
        offsetX?: number;
        offsetY?: number;
        padding?: number|any;
        position?: string;
        reverse?: boolean;
        visible?: boolean;
        inactiveItems?: StockChartLegendInactiveItems;
    }

    interface StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps {
        seconds?: any;
        minutes?: any;
        hours?: any;
        days?: any;
        weeks?: any;
        months?: any;
        years?: any;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshairTooltip {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshair {
        color?: string;
        opacity?: number;
        tooltip?: StockChartNavigatorCategoryAxisItemCrosshairTooltip;
        visible?: boolean;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsDateFormats {
        days?: string;
        hours?: string;
        months?: string;
        weeks?: string;
        years?: string;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsPadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabels {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemLabelsBorder;
        color?: string;
        culture?: string;
        dateFormats?: StockChartNavigatorCategoryAxisItemLabelsDateFormats;
        font?: string;
        format?: string;
        margin?: StockChartNavigatorCategoryAxisItemLabelsMargin;
        mirror?: boolean;
        padding?: StockChartNavigatorCategoryAxisItemLabelsPadding;
        rotation?: number;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMajorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMajorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMinorTicks {
        color?: string;
        size?: number;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemIcon {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemLabel {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: StockChartNavigatorCategoryAxisItemNotesDataItemIcon;
        label?: StockChartNavigatorCategoryAxisItemNotesDataItemLabel;
        line?: StockChartNavigatorCategoryAxisItemNotesDataItemLine;
    }

    interface StockChartNavigatorCategoryAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesIcon {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesLabel {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface StockChartNavigatorCategoryAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotes {
        position?: string;
        icon?: StockChartNavigatorCategoryAxisItemNotesIcon;
        label?: StockChartNavigatorCategoryAxisItemNotesLabel;
        line?: StockChartNavigatorCategoryAxisItemNotesLine;
        data?: StockChartNavigatorCategoryAxisItemNotesDataItem[];
    }

    interface StockChartNavigatorCategoryAxisItemPlotBand {
        color?: string;
        from?: number;
        opacity?: number;
        to?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitlePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitle {
        background?: string;
        border?: StockChartNavigatorCategoryAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: StockChartNavigatorCategoryAxisItemTitleMargin;
        padding?: StockChartNavigatorCategoryAxisItemTitlePadding;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItem {
        autoBaseUnitSteps?: StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps;
        axisCrossingValue?: any|Date|any;
        background?: string;
        baseUnit?: string;
        baseUnitStep?: any;
        categories?: any;
        color?: string;
        crosshair?: StockChartNavigatorCategoryAxisItemCrosshair;
        field?: string;
        justified?: boolean;
        labels?: StockChartNavigatorCategoryAxisItemLabels;
        line?: StockChartNavigatorCategoryAxisItemLine;
        majorGridLines?: StockChartNavigatorCategoryAxisItemMajorGridLines;
        majorTicks?: StockChartNavigatorCategoryAxisItemMajorTicks;
        max?: any;
        maxDateGroups?: number;
        min?: any;
        minorGridLines?: StockChartNavigatorCategoryAxisItemMinorGridLines;
        minorTicks?: StockChartNavigatorCategoryAxisItemMinorTicks;
        plotBands?: StockChartNavigatorCategoryAxisItemPlotBand[];
        reverse?: boolean;
        roundToBaseUnit?: boolean;
        title?: StockChartNavigatorCategoryAxisItemTitle;
        visible?: boolean;
        weekStartDay?: number;
        notes?: StockChartNavigatorCategoryAxisItemNotes;
    }

    interface StockChartNavigatorHint {
        visible?: boolean;
        template?: string|Function;
        format?: string;
    }

    interface StockChartNavigatorPaneBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorPaneMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorPanePadding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorPaneTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorPaneTitleMargin {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }

    interface StockChartNavigatorPaneTitle {
        background?: string;
        border?: StockChartNavigatorPaneTitleBorder;
        color?: string;
        font?: string;
        margin?: StockChartNavigatorPaneTitleMargin;
        position?: string;
        text?: string;
        visible?: boolean;
    }

    interface StockChartNavigatorPane {
        background?: string;
        border?: StockChartNavigatorPaneBorder;
        height?: number;
        margin?: StockChartNavigatorPaneMargin;
        name?: string;
        padding?: StockChartNavigatorPanePadding;
        title?: StockChartNavigatorPaneTitle;
    }

    interface StockChartNavigatorSelect {
        from?: Date;
        to?: Date;
    }

    interface StockChartNavigatorSeriesItemBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorSeriesItemHighlightBorder {
        width?: number;
        color?: string;
        opacity?: number;
    }

    interface StockChartNavigatorSeriesItemHighlightLine {
        width?: number;
        color?: string;
        opacity?: number;
    }

    interface StockChartNavigatorSeriesItemHighlight {
        border?: StockChartNavigatorSeriesItemHighlightBorder;
        color?: string;
        line?: StockChartNavigatorSeriesItemHighlightLine;
        opacity?: number;
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartNavigatorSeriesItemLabels {
        background?: string;
        border?: StockChartNavigatorSeriesItemLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        padding?: number|any;
        position?: string;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItemLine {
        color?: string;
        opacity?: number;
        width?: string;
    }

    interface StockChartNavigatorSeriesItemMarkersBorder {
        color?: string;
        width?: number;
    }

    interface StockChartNavigatorSeriesItemMarkers {
        background?: string;
        border?: StockChartNavigatorSeriesItemMarkersBorder;
        rotation?: number|Function;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItemOverlay {
        gradient?: string;
    }

    interface StockChartNavigatorSeriesItemStack {
        type?: string;
        group?: string;
    }

    interface StockChartNavigatorSeriesItemTooltipBorder {
        color?: string;
        width?: number;
    }

    interface StockChartNavigatorSeriesItemTooltip {
        background?: string;
        border?: StockChartNavigatorSeriesItemTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItem {
        type?: string;
        dashType?: string;
        data?: any;
        highField?: string;
        field?: string;
        categoryField?: string;
        name?: string;
        highlight?: StockChartNavigatorSeriesItemHighlight;
        aggregate?: string|Function;
        axis?: string;
        border?: StockChartNavigatorSeriesItemBorder;
        closeField?: string;
        color?: string;
        colorField?: string;
        downColor?: string;
        downColorField?: string;
        gap?: number;
        labels?: StockChartNavigatorSeriesItemLabels;
        line?: StockChartNavigatorSeriesItemLine;
        lowField?: string;
        markers?: StockChartNavigatorSeriesItemMarkers;
        missingValues?: string;
        style?: string;
        opacity?: number;
        openField?: string;
        overlay?: StockChartNavigatorSeriesItemOverlay;
        spacing?: number;
        stack?: StockChartNavigatorSeriesItemStack;
        tooltip?: StockChartNavigatorSeriesItemTooltip;
        width?: number;
    }

    interface StockChartNavigator {
        categoryAxis?: StockChartNavigatorCategoryAxisItem[];
        dataSource?: any;
        autoBind?: boolean;
        dateField?: string;
        pane?: StockChartNavigatorPane;
        visible?: boolean;
        series?: StockChartNavigatorSeriesItem[];
        select?: StockChartNavigatorSelect;
        hint?: StockChartNavigatorHint;
    }

    interface StockChartPaneBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartPaneTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartPaneTitle {
        background?: string;
        border?: StockChartPaneTitleBorder;
        color?: string;
        font?: string;
        margin?: number|any;
        position?: string;
        text?: string;
        visible?: boolean;
    }

    interface StockChartPane {
        name?: string;
        margin?: number|any;
        padding?: number|any;
        background?: string;
        border?: StockChartPaneBorder;
        clip?: boolean;
        height?: number;
        title?: StockChartPaneTitle;
    }

    interface StockChartPdfMargin {
        bottom?: number|string;
        left?: number|string;
        right?: number|string;
        top?: number|string;
    }

    interface StockChartPdf {
        author?: string;
        creator?: string;
        date?: Date;
        forceProxy?: boolean;
        fileName?: string;
        keywords?: string;
        landscape?: boolean;
        margin?: StockChartPdfMargin;
        paperSize?: string|any;
        proxyURL?: string;
        proxyTarget?: string;
        subject?: string;
        title?: string;
    }

    interface StockChartPlotAreaBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartPlotArea {
        background?: string;
        opacity?: number;
        border?: StockChartPlotAreaBorder;
        margin?: number|any;
    }

    interface StockChartSeriesItemBorder {
        color?: string|Function;
        dashType?: string|Function;
        opacity?: number|Function;
        width?: number|Function;
    }

    interface StockChartSeriesItemHighlightBorder {
        width?: number;
        color?: string;
        opacity?: number;
    }

    interface StockChartSeriesItemHighlightLine {
        width?: number;
        color?: string;
        opacity?: number;
    }

    interface StockChartSeriesItemHighlight {
        visible?: boolean;
        border?: StockChartSeriesItemHighlightBorder;
        color?: string;
        line?: StockChartSeriesItemHighlightLine;
        opacity?: number;
    }

    interface StockChartSeriesItemLabelsBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface StockChartSeriesItemLabels {
        background?: string|Function;
        border?: StockChartSeriesItemLabelsBorder;
        color?: string|Function;
        font?: string|Function;
        format?: string|Function;
        margin?: number|any;
        padding?: number|any;
        position?: string|Function;
        template?: string|Function;
        visible?: boolean|Function;
    }

    interface StockChartSeriesItemLine {
        color?: string;
        opacity?: number;
        width?: string;
        style?: string;
    }

    interface StockChartSeriesItemMarkersBorder {
        color?: string|Function;
        width?: number|Function;
    }

    interface StockChartSeriesItemMarkers {
        background?: string|Function;
        border?: StockChartSeriesItemMarkersBorder;
        size?: number|Function;
        rotation?: number|Function;
        type?: string|Function;
        visible?: boolean|Function;
    }

    interface StockChartSeriesItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartSeriesItemNotesIcon {
        background?: string;
        border?: StockChartSeriesItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartSeriesItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartSeriesItemNotesLabel {
        background?: string;
        border?: StockChartSeriesItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface StockChartSeriesItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartSeriesItemNotes {
        position?: string;
        icon?: StockChartSeriesItemNotesIcon;
        label?: StockChartSeriesItemNotesLabel;
        line?: StockChartSeriesItemNotesLine;
    }

    interface StockChartSeriesItemOverlay {
        gradient?: string;
    }

    interface StockChartSeriesItemStack {
        type?: string;
        group?: string;
    }

    interface StockChartSeriesItemTargetBorder {
        color?: string|Function;
        dashType?: string|Function;
        width?: number|Function;
    }

    interface StockChartSeriesItemTargetLine {
        width?: any|Function;
    }

    interface StockChartSeriesItemTarget {
        line?: StockChartSeriesItemTargetLine;
        color?: string|Function;
        border?: StockChartSeriesItemTargetBorder;
    }

    interface StockChartSeriesItemTooltipBorder {
        color?: string;
        width?: number;
    }

    interface StockChartSeriesItemTooltip {
        background?: string;
        border?: StockChartSeriesItemTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartSeriesItem {
        type?: string;
        dashType?: string;
        data?: any;
        highField?: string;
        field?: string;
        categoryField?: string;
        currentField?: string;
        targetField?: string;
        name?: string;
        highlight?: StockChartSeriesItemHighlight;
        aggregate?: string|Function;
        axis?: string;
        border?: StockChartSeriesItemBorder;
        closeField?: string;
        color?: string|Function;
        colorField?: string;
        downColor?: string|Function;
        downColorField?: string;
        gap?: number;
        labels?: StockChartSeriesItemLabels;
        line?: StockChartSeriesItemLine;
        lowField?: string;
        markers?: StockChartSeriesItemMarkers;
        missingValues?: string;
        style?: string;
        negativeColor?: string;
        opacity?: number;
        openField?: string;
        overlay?: StockChartSeriesItemOverlay;
        spacing?: number;
        stack?: StockChartSeriesItemStack;
        tooltip?: StockChartSeriesItemTooltip;
        visibleInLegend?: boolean;
        width?: number;
        target?: StockChartSeriesItemTarget;
        notes?: StockChartSeriesItemNotes;
        zIndex?: number;
    }

    interface StockChartSeriesDefaultsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartSeriesDefaultsLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartSeriesDefaultsLabels {
        background?: string;
        border?: StockChartSeriesDefaultsLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartSeriesDefaultsStack {
        type?: string;
    }

    interface StockChartSeriesDefaultsTooltipBorder {
        color?: string;
        width?: number;
    }

    interface StockChartSeriesDefaultsTooltip {
        background?: string;
        border?: StockChartSeriesDefaultsTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartSeriesDefaults {
        area?: any;
        candlestick?: any;
        ohlc?: any;
        border?: StockChartSeriesDefaultsBorder;
        column?: any;
        gap?: number;
        labels?: StockChartSeriesDefaultsLabels;
        line?: any;
        overlay?: any;
        pie?: any;
        spacing?: number;
        stack?: StockChartSeriesDefaultsStack;
        type?: string;
        tooltip?: StockChartSeriesDefaultsTooltip;
    }

    interface StockChartTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartTitle {
        align?: string;
        background?: string;
        border?: StockChartTitleBorder;
        font?: string;
        color?: string;
        margin?: number|any;
        padding?: number|any;
        position?: string;
        text?: string;
        visible?: boolean;
    }

    interface StockChartTooltipBorder {
        color?: string;
        width?: number;
    }

    interface StockChartTooltip {
        background?: string;
        border?: StockChartTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
        shared?: boolean;
        sharedTemplate?: string;
    }

    interface StockChartValueAxisItemCrosshairTooltipBorder {
        color?: string;
        width?: number;
    }

    interface StockChartValueAxisItemCrosshairTooltip {
        background?: string;
        border?: StockChartValueAxisItemCrosshairTooltipBorder;
        color?: string;
        font?: string;
        format?: string;
        padding?: number|any;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartValueAxisItemCrosshair {
        color?: string;
        width?: number;
        opacity?: number;
        dashType?: number;
        visible?: boolean;
        tooltip?: StockChartValueAxisItemCrosshairTooltip;
    }

    interface StockChartValueAxisItemLabelsBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartValueAxisItemLabels {
        background?: string;
        border?: StockChartValueAxisItemLabelsBorder;
        color?: string;
        font?: string;
        format?: string;
        margin?: number|any;
        mirror?: boolean;
        padding?: number|any;
        rotation?: number;
        skip?: number;
        step?: number;
        template?: string|Function;
        visible?: boolean;
    }

    interface StockChartValueAxisItemLine {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
    }

    interface StockChartValueAxisItemMajorGridLines {
        color?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartValueAxisItemMajorTicks {
        size?: number;
        visible?: boolean;
        color?: string;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartValueAxisItemMinorGridLines {
        color?: string;
        dashType?: string;
        visible?: boolean;
        width?: number;
        step?: number;
        skip?: number;
    }

    interface StockChartValueAxisItemMinorTicks {
        size?: number;
        color?: string;
        width?: number;
        visible?: boolean;
        step?: number;
        skip?: number;
    }

    interface StockChartValueAxisItemNotesDataItemIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartValueAxisItemNotesDataItemIcon {
        background?: string;
        border?: StockChartValueAxisItemNotesDataItemIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartValueAxisItemNotesDataItemLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartValueAxisItemNotesDataItemLabel {
        background?: string;
        border?: StockChartValueAxisItemNotesDataItemLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        text?: string;
        position?: string;
    }

    interface StockChartValueAxisItemNotesDataItemLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartValueAxisItemNotesDataItem {
        value?: any;
        position?: string;
        icon?: StockChartValueAxisItemNotesDataItemIcon;
        label?: StockChartValueAxisItemNotesDataItemLabel;
        line?: StockChartValueAxisItemNotesDataItemLine;
    }

    interface StockChartValueAxisItemNotesIconBorder {
        color?: string;
        width?: number;
    }

    interface StockChartValueAxisItemNotesIcon {
        background?: string;
        border?: StockChartValueAxisItemNotesIconBorder;
        size?: number;
        type?: string;
        visible?: boolean;
    }

    interface StockChartValueAxisItemNotesLabelBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartValueAxisItemNotesLabel {
        background?: string;
        border?: StockChartValueAxisItemNotesLabelBorder;
        color?: string;
        font?: string;
        template?: string|Function;
        visible?: boolean;
        rotation?: number;
        format?: string;
        position?: string;
    }

    interface StockChartValueAxisItemNotesLine {
        width?: number;
        color?: string;
        length?: number;
    }

    interface StockChartValueAxisItemNotes {
        position?: string;
        icon?: StockChartValueAxisItemNotesIcon;
        label?: StockChartValueAxisItemNotesLabel;
        line?: StockChartValueAxisItemNotesLine;
        data?: StockChartValueAxisItemNotesDataItem[];
    }

    interface StockChartValueAxisItemPlotBand {
        from?: number;
        to?: number;
        color?: string;
        opacity?: number;
    }

    interface StockChartValueAxisItemTitleBorder {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface StockChartValueAxisItemTitle {
        background?: string;
        border?: StockChartValueAxisItemTitleBorder;
        color?: string;
        font?: string;
        margin?: number|any;
        padding?: number|any;
        position?: string;
        rotation?: number;
        text?: string;
        visible?: boolean;
    }

    interface StockChartValueAxisItem {
        axisCrossingValue?: any|Date|any;
        background?: string;
        color?: string;
        labels?: StockChartValueAxisItemLabels;
        line?: StockChartValueAxisItemLine;
        majorGridLines?: StockChartValueAxisItemMajorGridLines;
        majorTicks?: StockChartValueAxisItemMajorTicks;
        majorUnit?: number;
        max?: number;
        min?: number;
        minorGridLines?: StockChartValueAxisItemMinorGridLines;
        minorTicks?: StockChartValueAxisItemMinorTicks;
        minorUnit?: number;
        name?: any;
        narrowRange?: boolean;
        pane?: string;
        plotBands?: StockChartValueAxisItemPlotBand[];
        reverse?: boolean;
        title?: StockChartValueAxisItemTitle;
        visible?: boolean;
        crosshair?: StockChartValueAxisItemCrosshair;
        notes?: StockChartValueAxisItemNotes;
    }

    interface StockChartExportImageOptions {
        width?: string;
        height?: string;
    }

    interface StockChartExportSVGOptions {
        raw?: boolean;
    }

    interface StockChartSeriesClickEventSeries {
        type?: string;
        name?: string;
        data?: any;
    }

    interface StockChartSeriesHoverEventSeries {
        type?: string;
        name?: string;
        data?: any;
    }

    interface StockChartOptions {
        name?: string;
        dateField?: string;
        navigator?: StockChartNavigator;
        axisDefaults?: any;
        categoryAxis?: StockChartCategoryAxisItem[];
        chartArea?: StockChartChartArea;
        dataSource?: any;
        autoBind?: boolean;
        legend?: StockChartLegend;
        panes?: StockChartPane[];
        pdf?: StockChartPdf;
        plotArea?: StockChartPlotArea;
        renderAs?: string;
        series?: StockChartSeriesItem[];
        seriesColors?: any;
        seriesDefaults?: StockChartSeriesDefaults;
        theme?: string;
        title?: StockChartTitle;
        tooltip?: StockChartTooltip;
        transitions?: boolean;
        valueAxis?: StockChartValueAxisItem[];
        axisLabelClick?(e: StockChartAxisLabelClickEvent): void;
        legendItemClick?(e: StockChartLegendItemClickEvent): void;
        legendItemHover?(e: StockChartLegendItemHoverEvent): void;
        dataBound?(e: StockChartEvent): void;
        dragStart?(e: StockChartDragStartEvent): void;
        drag?(e: StockChartDragEvent): void;
        dragEnd?(e: StockChartDragEndEvent): void;
        noteClick?(e: StockChartNoteClickEvent): void;
        noteHover?(e: StockChartNoteHoverEvent): void;
        plotAreaClick?(e: StockChartPlotAreaClickEvent): void;
        render?(e: StockChartEvent): void;
        seriesClick?(e: StockChartSeriesClickEvent): void;
        seriesHover?(e: StockChartSeriesHoverEvent): void;
        zoomStart?(e: StockChartZoomStartEvent): void;
        zoom?(e: StockChartZoomEvent): void;
        zoomEnd?(e: StockChartZoomEndEvent): void;
        selectStart?(e: StockChartSelectStartEvent): void;
        select?(e: StockChartSelectEvent): void;
        selectEnd?(e: StockChartSelectEndEvent): void;
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

    interface StockChartLegendItemClickEvent extends StockChartEvent {
        text?: string;
        series?: any;
        seriesIndex?: number;
        pointIndex?: number;
        element?: any;
    }

    interface StockChartLegendItemHoverEvent extends StockChartEvent {
        text?: string;
        series?: any;
        seriesIndex?: number;
        pointIndex?: number;
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

    interface StockChartPlotAreaClickEvent extends StockChartEvent {
        value?: any;
        category?: any;
        element?: any;
        x?: any;
        y?: any;
    }

    interface StockChartSeriesClickEvent extends StockChartEvent {
        value?: any;
        category?: any;
        series?: StockChartSeriesClickEventSeries;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface StockChartSeriesHoverEvent extends StockChartEvent {
        value?: any;
        category?: any;
        series?: StockChartSeriesHoverEventSeries;
        dataItem?: any;
        element?: any;
        percentage?: any;
    }

    interface StockChartZoomStartEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface StockChartZoomEvent extends StockChartEvent {
        axisRanges?: any;
        delta?: number;
        originalEvent?: any;
    }

    interface StockChartZoomEndEvent extends StockChartEvent {
        axisRanges?: any;
        originalEvent?: any;
    }

    interface StockChartSelectStartEvent extends StockChartEvent {
        axis?: any;
        from?: any;
        to?: any;
    }

    interface StockChartSelectEvent extends StockChartEvent {
        axis?: any;
        from?: any;
        to?: any;
    }

    interface StockChartSelectEndEvent extends StockChartEvent {
        axis?: any;
        from?: any;
        to?: any;
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
        name?: string;
        dataSource?: any|any|kendo.data.HierarchicalDataSource;
        autoBind?: boolean;
        type?: string;
        theme?: string;
        valueField?: string;
        colorField?: string;
        textField?: string;
        template?: string|Function;
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
        element?: JQuery|Element;
    }

    interface TreeMapDataBoundEvent extends TreeMapEvent {
    }


}
declare module kendo.dataviz.map {
    class BingLayer extends kendo.dataviz.map.TileLayer {


        options: BingLayerOptions;

        map: kendo.dataviz.ui.Map;

        constructor(map: kendo.dataviz.ui.Map, options?: BingLayerOptions);


        show(): void;
        hide(): void;
        imagerySet(): void;

    }

    interface BingLayerOptions {
        name?: string;
        baseUrl?: string;
        imagerySet?: string;
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

        constructor(nw: kendo.dataviz.map.Location, se: kendo.dataviz.map.Location);

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
        name?: string;
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
        name?: string;
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
        name?: string;
    }
    interface LocationEvent {
        sender: Location;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class MarkerLayer extends kendo.dataviz.map.Layer {


        options: MarkerLayerOptions;

        map: kendo.dataviz.ui.Map;

        constructor(map: kendo.dataviz.ui.Map, options?: MarkerLayerOptions);


        show(): void;
        hide(): void;
        setDataSource(): void;

    }

    interface MarkerLayerOptions {
        name?: string;
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
        name?: string;
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
        name?: string;
        urlTemplate?: string;
        subdomains?: any;
        tileSize?: number;
    }
    interface TileLayerEvent {
        sender: TileLayer;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo.dataviz {
    class ChartAxis extends Observable {


        options: ChartAxisOptions;




        range(): any;
        slot(from: string, to?: string): kendo.geometry.Rect;
        slot(from: string, to?: number): kendo.geometry.Rect;
        slot(from: string, to?: Date): kendo.geometry.Rect;
        slot(from: number, to?: string): kendo.geometry.Rect;
        slot(from: number, to?: number): kendo.geometry.Rect;
        slot(from: number, to?: Date): kendo.geometry.Rect;
        slot(from: Date, to?: string): kendo.geometry.Rect;
        slot(from: Date, to?: number): kendo.geometry.Rect;
        slot(from: Date, to?: Date): kendo.geometry.Rect;

    }

    interface ChartAxisOptions {
        name?: string;
    }
    interface ChartAxisEvent {
        sender: ChartAxis;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo.dataviz.diagram {
    class Circle extends Observable {


        options: CircleOptions;


        constructor(options?: CircleOptions);


        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface CircleFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface CircleFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: CircleFillGradientStop[];
    }

    interface CircleFill {
        color?: string;
        opacity?: number;
        gradient?: CircleFillGradient;
    }

    interface CircleStroke {
        color?: string;
        width?: number;
    }

    interface CircleOptions {
        name?: string;
        fill?: CircleFill;
        stroke?: CircleStroke;
        center?: any;
        radius?: number;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Connection extends Observable {


        options: ConnectionOptions;


        constructor(options?: ConnectionOptions);


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
        redraw(): void;

    }

    interface ConnectionContent {
        template?: string|Function;
        text?: string;
        visual?: Function;
    }

    interface ConnectionEndCapFill {
        color?: string;
    }

    interface ConnectionEndCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ConnectionEndCap {
        fill?: ConnectionEndCapFill;
        stroke?: ConnectionEndCapStroke;
        type?: string;
    }

    interface ConnectionHoverStroke {
        color?: string;
    }

    interface ConnectionHover {
        stroke?: ConnectionHoverStroke;
    }

    interface ConnectionPoint {
        x?: number;
        y?: number;
    }

    interface ConnectionStartCapFill {
        color?: string;
    }

    interface ConnectionStartCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface ConnectionStartCap {
        fill?: ConnectionStartCapFill;
        stroke?: ConnectionStartCapStroke;
        type?: string;
    }

    interface ConnectionStroke {
        color?: string;
    }

    interface ConnectionOptions {
        name?: string;
        content?: ConnectionContent;
        fromConnector?: string;
        stroke?: ConnectionStroke;
        hover?: ConnectionHover;
        startCap?: ConnectionStartCap;
        endCap?: ConnectionEndCap;
        points?: ConnectionPoint[];
        selectable?: boolean;
        toConnector?: string;
        type?: string;
    }
    interface ConnectionEvent {
        sender: Connection;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Connector extends Observable {


        options: ConnectorOptions;


        constructor(options?: ConnectorOptions);


        position(): kendo.dataviz.diagram.Point;

    }

    interface ConnectorFill {
        color?: string;
        opacity?: number;
    }

    interface ConnectorOptions {
        name?: string;
        width?: number;
        height?: number;
        fill?: ConnectorFill;
    }
    interface ConnectorEvent {
        sender: Connector;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Group extends Observable {


        options: GroupOptions;


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
        name?: string;
        x?: number;
        y?: number;
    }
    interface GroupEvent {
        sender: Group;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Image extends Observable {


        options: ImageOptions;


        constructor(options?: ImageOptions);


        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ImageOptions {
        name?: string;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
        source?: string;
    }
    interface ImageEvent {
        sender: Image;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Layout extends Observable {


        options: LayoutOptions;


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
        name?: string;
        alignContent?: string;
        alignItems?: string;
        justifyContent?: string;
        lineSpacing?: number;
        spacing?: number;
        orientation?: string;
        wrap?: boolean;
    }
    interface LayoutEvent {
        sender: Layout;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Line extends Observable {


        options: LineOptions;


        constructor(options?: LineOptions);


        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface LineStroke {
        color?: string;
        width?: number;
    }

    interface LineOptions {
        name?: string;
        stroke?: LineStroke;
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


        constructor(options?: PathOptions);


        data(): string;
        data(path: string): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface PathEndCapFill {
        color?: string;
        opacity?: number;
    }

    interface PathEndCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface PathEndCap {
        fill?: PathEndCapFill;
        stroke?: PathEndCapStroke;
        type?: string;
    }

    interface PathFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface PathFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: PathFillGradientStop[];
    }

    interface PathFill {
        color?: string;
        opacity?: number;
        gradient?: PathFillGradient;
    }

    interface PathStartCapFill {
        color?: string;
        opacity?: number;
    }

    interface PathStartCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface PathStartCap {
        fill?: PathStartCapFill;
        stroke?: PathStartCapStroke;
        type?: string;
    }

    interface PathStroke {
        color?: string;
        width?: number;
    }

    interface PathOptions {
        name?: string;
        data?: string;
        endCap?: PathEndCap;
        fill?: PathFill;
        height?: number;
        startCap?: PathStartCap;
        stroke?: PathStroke;
        width?: number;
        x?: number;
        y?: number;
    }
    interface PathEvent {
        sender: Path;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Point extends Observable {


        options: PointOptions;


        constructor(options?: PointOptions);



    }

    interface PointOptions {
        name?: string;
        x?: number;
        y?: number;
    }
    interface PointEvent {
        sender: Point;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Polyline extends Observable {


        options: PolylineOptions;


        constructor(options?: PolylineOptions);


        points(): any;
        points(points: any): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface PolylineEndCapFill {
        color?: string;
        opacity?: number;
    }

    interface PolylineEndCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface PolylineEndCap {
        fill?: PolylineEndCapFill;
        stroke?: PolylineEndCapStroke;
        type?: string;
    }

    interface PolylineFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface PolylineFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: PolylineFillGradientStop[];
    }

    interface PolylineFill {
        color?: string;
        opacity?: number;
        gradient?: PolylineFillGradient;
    }

    interface PolylineStartCapFill {
        color?: string;
        opacity?: number;
    }

    interface PolylineStartCapStroke {
        color?: string;
        dashType?: string;
        width?: number;
    }

    interface PolylineStartCap {
        fill?: PolylineStartCapFill;
        stroke?: PolylineStartCapStroke;
        type?: string;
    }

    interface PolylineStroke {
        color?: string;
        width?: number;
    }

    interface PolylineOptions {
        name?: string;
        endCap?: PolylineEndCap;
        fill?: PolylineFill;
        startCap?: PolylineStartCap;
        stroke?: PolylineStroke;
    }
    interface PolylineEvent {
        sender: Polyline;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Rect extends Observable {


        options: RectOptions;


        constructor(options?: RectOptions);


        position(): void;
        position(offset: kendo.dataviz.diagram.Point): void;
        rotate(angle: number, center: kendo.dataviz.diagram.Point): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface RectOptions {
        name?: string;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
    }
    interface RectEvent {
        sender: Rect;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Rectangle extends Observable {


        options: RectangleOptions;


        constructor(options?: RectangleOptions);


        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface RectangleFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface RectangleFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: RectangleFillGradientStop[];
    }

    interface RectangleFill {
        color?: string;
        opacity?: number;
        gradient?: RectangleFillGradient;
    }

    interface RectangleStroke {
        color?: string;
        width?: number;
    }

    interface RectangleOptions {
        name?: string;
        fill?: RectangleFill;
        height?: number;
        stroke?: RectangleStroke;
        width?: number;
        x?: number;
        y?: number;
    }
    interface RectangleEvent {
        sender: Rectangle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Shape extends Observable {


        options: ShapeOptions;


        constructor(options?: ShapeOptions);


        position(): void;
        position(point: kendo.dataviz.diagram.Point): void;
        clone(): kendo.dataviz.diagram.Shape;
        select(value: boolean): void;
        connections(type: string): void;
        getConnector(): void;
        getPosition(side: string): void;
        redraw(): void;

    }

    interface ShapeConnector {
        name?: string;
        description?: string;
        position?: Function;
    }

    interface ShapeContent {
        text?: string;
        align?: string;
    }

    interface ShapeEditable {
        connect?: boolean;
    }

    interface ShapeFillGradientStop {
        offset?: number;
        color?: string;
        opacity?: number;
    }

    interface ShapeFillGradient {
        type?: string;
        center?: any;
        radius?: number;
        start?: any;
        end?: any;
        stops?: ShapeFillGradientStop[];
    }

    interface ShapeFill {
        color?: string;
        opacity?: number;
        gradient?: ShapeFillGradient;
    }

    interface ShapeHoverFill {
        color?: string;
        opacity?: number;
    }

    interface ShapeHover {
        fill?: ShapeHoverFill;
    }

    interface ShapeRotation {
        angle?: number;
    }

    interface ShapeStroke {
        color?: string;
        width?: number;
        dashType?: string;
    }

    interface ShapeOptions {
        name?: string;
        id?: string;
        editable?: ShapeEditable;
        path?: string;
        stroke?: ShapeStroke;
        type?: string;
        x?: number;
        y?: number;
        minWidth?: number;
        minHeight?: number;
        width?: number;
        height?: number;
        fill?: ShapeFill;
        hover?: ShapeHover;
        connectors?: ShapeConnector[];
        rotation?: ShapeRotation;
        content?: ShapeContent;
        selectable?: boolean;
        visual?: Function;
    }
    interface ShapeEvent {
        sender: Shape;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class TextBlock extends Observable {


        options: TextBlockOptions;


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
        name?: string;
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        height?: number;
        text?: string;
        width?: number;
        x?: number;
        y?: number;
    }
    interface TextBlockEvent {
        sender: TextBlock;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo {
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
        name?: string;
    }
    interface ColorEvent {
        sender: Color;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    module drawing {
        function align(elements: any, rect: kendo.geometry.Rect, alignment: string): void;
        function drawDOM(element: JQuery, options: any): JQueryPromise<any>;
        function exportImage(group: kendo.drawing.Group, options: any): JQueryPromise<any>;
        function exportPDF(group: kendo.drawing.Group, options: kendo.drawing.PDFOptions): JQueryPromise<any>;
        function exportSVG(group: kendo.drawing.Group, options: any): JQueryPromise<any>;
        function fit(element: kendo.drawing.Element, rect: kendo.geometry.Rect): void;
        function stack(elements: any): void;
        function vAlign(elements: any, rect: kendo.geometry.Rect, alignment: string): void;
        function vStack(elements: any): void;
        function vWrap(elements: any, rect: kendo.geometry.Rect): any;
        function wrap(elements: any, rect: kendo.geometry.Rect): any;
    }

    module effects {
        function box(element: HTMLElement): any;
        function fillScale(firstElement: HTMLElement, secondElement: HTMLElement): number;
        function fitScale(firstElement: HTMLElement, secondElement: HTMLElement): number;
        function transformOrigin(firstElement: HTMLElement, secondElement: HTMLElement): any;
    }

        function antiForgeryTokens(): any;
        function bind(element: string, viewModel: any, namespace?: any): void;
        function bind(element: string, viewModel: kendo.data.ObservableObject, namespace?: any): void;
        function bind(element: JQuery, viewModel: any, namespace?: any): void;
        function bind(element: JQuery, viewModel: kendo.data.ObservableObject, namespace?: any): void;
        function bind(element: Element, viewModel: any, namespace?: any): void;
        function bind(element: Element, viewModel: kendo.data.ObservableObject, namespace?: any): void;
        function observableHierarchy(array: any): void;
        function culture(culture: string): void;
        function destroy(element: string): void;
        function destroy(element: JQuery): void;
        function destroy(element: Element): void;
        function htmlEncode(value: string): string;
        function parseDate(value: string, formats?: string, culture?: string): Date;
        function parseDate(value: string, formats?: any, culture?: string): Date;
        function parseFloat(value: string, culture?: string): number;
        function parseInt(value: string, culture?: string): number;
        function parseColor(color: string, noerror: boolean): kendo.Color;
        function proxyModelSetters(): void;
        function proxyModelSetters(data: kendo.data.Model): void;
        function resize(element: string, force: boolean): void;
        function resize(element: JQuery, force: boolean): void;
        function resize(element: Element, force: boolean): void;
        function saveAs(options: any): void;
        function stringify(value: any): string;
        function throttle(fn: Function, timeout: number): void;
        function touchScroller(element: string): void;
        function touchScroller(element: JQuery): void;
        function touchScroller(element: Element): void;
        function toString(value: Date, format: string, culture?: string): string;
        function toString(value: number, format: string, culture?: string): string;
        function unbind(element: string): void;
        function unbind(element: JQuery): void;
        function unbind(element: Element): void;

}
declare module kendo.spreadsheet {
    class CustomFilter extends Observable {


        options: CustomFilterOptions;




        init(options: any): void;

    }

    interface CustomFilterOptions {
        name?: string;
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
        name?: string;
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
        clear(options?: any): void;
        clearFilter(indices: any): void;
        clearFilter(indices: number): void;
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
        merge(): void;
        select(): void;
        sort(sort: number): void;
        sort(sort: any): void;
        textAlign(): string;
        textAlign(value?: string): void;
        unmerge(): void;
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
        name?: string;
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
        deleteColumn(index: number): void;
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
        rowHeight(): void;
        rowHeight(index: number, width?: number): void;
        selection(): kendo.spreadsheet.Range;
        toJSON(): void;
        unhideColumn(index: number): void;
        unhideRow(index: number): void;

    }

    interface SheetOptions {
        name?: string;
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
        name?: string;
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
        name?: string;
    }
    interface ValueFilterEvent {
        sender: ValueFilter;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo.mobile.ui {
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
        direction?: number|string;
        height?: number|string;
        width?: number|string;
    }

    interface ActionSheetOptions {
        name?: string;
        cancel?: string;
        popup?: ActionSheetPopup;
        type?: string;
        close?(e: ActionSheetEvent): void;
        open?(e: ActionSheetOpenEvent): void;
    }
    interface ActionSheetEvent {
        sender: ActionSheet;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ActionSheetOpenEvent extends ActionSheetEvent {
        target?: JQuery;
        context?: JQuery;
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
        name?: string;
        click?(e: BackButtonClickEvent): void;
    }
    interface BackButtonEvent {
        sender: BackButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface BackButtonClickEvent extends BackButtonEvent {
        target?: JQuery;
        button?: JQuery;
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
        name?: string;
        badge?: string;
        clickOn?: string;
        enable?: boolean;
        icon?: string;
        click?(e: ButtonClickEvent): void;
    }
    interface ButtonEvent {
        sender: Button;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonClickEvent extends ButtonEvent {
        target?: JQuery;
        button?: JQuery;
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
        name?: string;
        enable?: boolean;
        index?: number;
        selectOn?: string;
        select?(e: ButtonGroupSelectEvent): void;
    }
    interface ButtonGroupEvent {
        sender: ButtonGroup;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface ButtonGroupSelectEvent extends ButtonGroupEvent {
        index?: number;
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
        name?: string;
        animation?: boolean;
        collapsed?: boolean;
        expandIcon?: string;
        iconPosition?: string;
        inset?: boolean;
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
        name?: string;
        click?(e: DetailButtonClickEvent): void;
    }
    interface DetailButtonEvent {
        sender: DetailButton;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface DetailButtonClickEvent extends DetailButtonEvent {
        target?: JQuery;
        button?: JQuery;
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
        name?: string;
        container?: JQuery;
        position?: string;
        swipeToOpen?: boolean;
        swipeToOpenViews?: any;
        title?: string;
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
        name?: string;
        id?: string;
        platform?: string;
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
        layout?: JQuery;
        view?: JQuery;
    }

    interface LayoutInitEvent extends LayoutEvent {
        layout?: JQuery;
    }

    interface LayoutShowEvent extends LayoutEvent {
        layout?: JQuery;
        view?: JQuery;
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
        placeholder?: string;
        autoFilter?: boolean;
        field?: string;
        ignoreCase?: boolean;
        operator?: string;
    }

    interface ListViewMessages {
        loadMoreText?: string;
        pullTemplate?: string;
        refreshTemplate?: string;
        releaseTemplate?: string;
    }

    interface ListViewOptions {
        name?: string;
        appendOnRefresh?: boolean;
        autoBind?: boolean;
        dataSource?: kendo.data.DataSource|any;
        endlessScroll?: boolean;
        fixedHeaders?: boolean;
        headerTemplate?: string|Function;
        loadMore?: boolean;
        messages?: ListViewMessages;
        pullToRefresh?: boolean;
        pullParameters?: Function;
        style?: string;
        template?: string|Function;
        type?: string;
        filterable?: ListViewFilterable;
        virtualViewSize?: number;
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
        item?: JQuery;
        target?: JQuery;
        dataItem?: any;
        button?: kendo.mobile.ui.Button;
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
        name?: string;
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
        name?: string;
        height?: number;
        modal?: boolean;
        width?: number;
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
        target?: JQuery;
    }

    interface ModalViewCloseEvent extends ModalViewEvent {
    }

    interface ModalViewInitEvent extends ModalViewEvent {
    }

    interface ModalViewOpenEvent extends ModalViewEvent {
        target?: JQuery;
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
        name?: string;
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
        name?: string;
        collapsible?: boolean;
        initial?: string;
        layout?: string;
        loading?: string;
        portraitWidth?: number;
        transition?: string;
        navigate?(e: PaneNavigateEvent): void;
        viewShow?(e: PaneViewShowEvent): void;
    }
    interface PaneEvent {
        sender: Pane;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface PaneNavigateEvent extends PaneEvent {
        url?: JQuery;
    }

    interface PaneViewShowEvent extends PaneEvent {
        view?: kendo.mobile.ui.View;
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
        initial?: string;
        layout?: string;
        loading?: string;
        transition?: string;
    }

    interface PopOverPopup {
        height?: number|string;
        width?: number|string;
    }

    interface PopOverOptions {
        name?: string;
        pane?: PopOverPane;
        popup?: PopOverPopup;
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
        target?: JQuery;
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
        name?: string;
        autoBind?: boolean;
        bounceVelocityThreshold?: number;
        contentHeight?: number|string;
        dataSource?: kendo.data.DataSource|any;
        duration?: number;
        emptyTemplate?: string;
        enablePager?: boolean;
        itemsPerPage?: number;
        page?: number;
        pageSize?: number;
        template?: string;
        velocityThreshold?: number;
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
        currentPage?: number;
        nextPage?: number;
    }

    interface ScrollViewChangeEvent extends ScrollViewEvent {
        page?: number;
        element?: JQuery;
        data?: any;
    }

    interface ScrollViewRefreshEvent extends ScrollViewEvent {
        pageCount?: number;
        page?: number;
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
        pullTemplate?: string;
        refreshTemplate?: string;
        releaseTemplate?: string;
    }

    interface ScrollerOptions {
        name?: string;
        elastic?: boolean;
        messages?: ScrollerMessages;
        pullOffset?: number;
        pullToRefresh?: boolean;
        useNative?: boolean;
        visibleScrollHints?: boolean;
        zoom?: boolean;
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
        scrollTop?: number;
        scrollLeft?: number;
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
        name?: string;
        style?: string;
        init?(e: SplitViewInitEvent): void;
        show?(e: SplitViewShowEvent): void;
    }
    interface SplitViewEvent {
        sender: SplitView;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SplitViewInitEvent extends SplitViewEvent {
        view?: JQuery;
    }

    interface SplitViewShowEvent extends SplitViewEvent {
        view?: JQuery;
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
        name?: string;
        checked?: boolean;
        enable?: boolean;
        offLabel?: string;
        onLabel?: string;
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
        name?: string;
        selectedIndex?: number;
        select?(e: TabStripSelectEvent): void;
    }
    interface TabStripEvent {
        sender: TabStrip;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        item?: JQuery;
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
        name?: string;
        model?: string;
        reload?: boolean;
        scroller?: any;
        stretch?: boolean;
        title?: string;
        useNativeScrolling?: boolean;
        zoom?: boolean;
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
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewHideEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewInitEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewShowEvent extends ViewEvent {
        view?: kendo.mobile.ui.View;
    }

    interface ViewTransitionStartEvent extends ViewEvent {
        type?: string;
    }

    interface ViewTransitionEndEvent extends ViewEvent {
        type?: string;
    }


}
declare module kendo.ooxml {
    class Workbook extends Observable {


        options: WorkbookOptions;

        sheets: WorkbookSheet[];

        constructor(options?: WorkbookOptions);


        toDataURL(): string;

    }

    interface WorkbookSheetColumn {
        autoWidth?: boolean;
        index?: number;
        width?: number;
    }

    interface WorkbookSheetFilter {
        from?: number;
        to?: number;
    }

    interface WorkbookSheetFreezePane {
        colSplit?: number;
        rowSplit?: number;
    }

    interface WorkbookSheetRowCellBorderBottom {
        color?: string;
        size?: string;
    }

    interface WorkbookSheetRowCellBorderLeft {
        color?: string;
        size?: string;
    }

    interface WorkbookSheetRowCellBorderRight {
        color?: string;
        size?: string;
    }

    interface WorkbookSheetRowCellBorderTop {
        color?: string;
        size?: string;
    }

    interface WorkbookSheetRowCell {
        background?: string;
        borderBottom?: WorkbookSheetRowCellBorderBottom;
        borderLeft?: WorkbookSheetRowCellBorderLeft;
        borderTop?: WorkbookSheetRowCellBorderTop;
        borderRight?: WorkbookSheetRowCellBorderRight;
        bold?: boolean;
        color?: string;
        colSpan?: number;
        fontFamily?: string;
        fontName?: string;
        fontSize?: number;
        format?: string;
        hAlign?: string;
        index?: any;
        italic?: boolean;
        rowSpan?: number;
        textAlign?: string;
        underline?: boolean;
        wrap?: boolean;
        vAlign?: string;
        verticalAlign?: string;
        value?: Date|number|string|boolean;
    }

    interface WorkbookSheetRow {
        cells?: WorkbookSheetRowCell[];
        index?: number;
        height?: number;
    }

    interface WorkbookSheet {
        columns?: WorkbookSheetColumn[];
        freezePane?: WorkbookSheetFreezePane;
        frozenColumns?: number;
        frozenRows?: number;
        filter?: WorkbookSheetFilter;
        name?: string;
        rows?: WorkbookSheetRow[];
        title?: string;
    }

    interface WorkbookOptions {
        name?: string;
        creator?: string;
        date?: Date;
        sheets?: WorkbookSheet[];
    }
    interface WorkbookEvent {
        sender: Workbook;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}

declare module kendo.dataviz.geometry {
    class Arc extends Observable {


        options: ArcOptions;

        anticlockwise: boolean;
        center: kendo.geometry.Point;
        endAngle: number;
        radiusX: number;
        radiusY: number;
        startAngle: number;



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
        name?: string;
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
        name?: string;
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
        name?: string;
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
        name?: string;
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

        constructor(origin: kendo.geometry.Point, size: kendo.geometry.Size);

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
        name?: string;
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
        name?: string;
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
        name?: string;
    }
    interface TransformationEvent {
        sender: Transformation;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}
declare module kendo.dataviz.drawing {
    class Arc extends kendo.drawing.Element {


        options: ArcOptions;


        constructor(geometry: kendo.geometry.Arc, options?: ArcOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface CircleEvent {
        sender: Circle;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    class Element extends kendo.Class {


        options: ElementOptions;


        constructor(options?: ElementOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        opacity(): number;
        opacity(opacity: number): void;
        transform(): kendo.geometry.Transformation;
        transform(transform: kendo.geometry.Transformation): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface ElementOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface ElementEvent {
        sender: Element;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface FillOptions  {



        color?: string;
        opacity?: number;




    }



    class Gradient extends kendo.Class {


        options: GradientOptions;

        stops: any;

        constructor(options?: GradientOptions);


        addStop(offset: number, color: string, opacity: number): kendo.drawing.GradientStop;
        removeStop(stop: kendo.drawing.GradientStop): void;

    }

    interface GradientOptions {
        name?: string;
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
        name?: string;
        offset?: number;
        color?: string;
        opacity?: number;
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
        insert(position: number, element: kendo.drawing.Element): void;
        opacity(): number;
        opacity(opacity: number): void;
        remove(element: kendo.drawing.Element): void;
        removeAt(index: number): void;
        visible(): boolean;
        visible(visible: boolean): void;

    }

    interface GroupOptions {
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        pdf?: kendo.drawing.PDFOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        opacity?: number;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        alignContent?: string;
        alignItems?: string;
        justifyContent?: string;
        lineSpacing?: number;
        spacing?: number;
        orientation?: string;
        wrap?: boolean;
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
        name?: string;
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
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.MultiPath;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.MultiPath;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
    }
    interface OptionsStoreEvent {
        sender: OptionsStore;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface PDFOptions  {



        creator?: string;
        date?: Date;
        keywords?: string;
        landscape?: boolean;
        margin?: any;
        paperSize?: any;
        subject?: string;
        title?: string;




    }



    class Path extends kendo.drawing.Element {


        options: PathOptions;

        segments: any;

        constructor(options?: PathOptions);

        static fromPoints(points: any): kendo.drawing.Path;
        static fromRect(rect: kendo.geometry.Rect): kendo.drawing.Path;
        static parse(svgPath: string, options?: any): kendo.drawing.Path;

        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
        close(): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: any, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: any, endPoint: kendo.geometry.Point): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: any): kendo.drawing.Path;
        curveTo(controlOut: kendo.geometry.Point, controlIn: kendo.geometry.Point, endPoint: kendo.geometry.Point): kendo.drawing.Path;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
        center?: any|kendo.geometry.Point;
        radius?: number;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
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
        name?: string;
    }
    interface SegmentEvent {
        sender: Segment;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


    interface StrokeOptions  {



        color?: string;
        dashType?: string;
        lineCap?: string;
        lineJoin?: string;
        opacity?: number;
        width?: number;




    }



    class Surface extends kendo.Observable {


        options: SurfaceOptions;


        constructor(options?: SurfaceOptions);

        static create(element: JQuery, options?: any): kendo.drawing.Surface;
        static create(element: Element, options?: any): kendo.drawing.Surface;

        clear(): void;
        draw(element: kendo.drawing.Element): void;
        eventTarget(e: any): kendo.drawing.Element;
        resize(force?: boolean): void;

    }

    interface SurfaceOptions {
        name?: string;
        type?: string;
        height?: string;
        width?: string;
        click?(e: SurfaceClickEvent): void;
        mouseenter?(e: SurfaceMouseenterEvent): void;
        mouseleave?(e: SurfaceMouseleaveEvent): void;
    }
    interface SurfaceEvent {
        sender: Surface;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }

    interface SurfaceClickEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseenterEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }

    interface SurfaceMouseleaveEvent extends SurfaceEvent {
        element?: kendo.drawing.Element;
        originalEvent?: any;
    }


    class Text extends kendo.drawing.Element {


        options: TextOptions;


        constructor(content: string, position: kendo.geometry.Point, options?: TextOptions);


        bbox(): kendo.geometry.Rect;
        clip(): kendo.drawing.Path;
        clip(clip: kendo.drawing.Path): void;
        clippedBBox(): kendo.geometry.Rect;
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
        name?: string;
        clip?: kendo.drawing.Path;
        cursor?: string;
        fill?: kendo.drawing.FillOptions;
        font?: string;
        opacity?: number;
        stroke?: kendo.drawing.StrokeOptions;
        transform?: kendo.geometry.Transformation;
        visible?: boolean;
    }
    interface TextEvent {
        sender: Text;
        preventDefault: Function;
        isDefaultPrevented(): boolean;
    }


}

interface HTMLElement {
    kendoBindingTarget: kendo.data.BindingTarget;
}

interface JQueryXHR {
}

interface JQueryEventObject {
}

interface JQueryPromise<T> {
}

interface JQuery {

    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;

    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo.ui.DropTargetOptions): JQuery;

    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo.ui.DropTargetAreaOptions): JQuery;

    data(key: any): any;

    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo.ui.AutoCompleteOptions): JQuery;
    data(key: "kendoAutoComplete"): kendo.ui.AutoComplete;

    kendoBarcode(): JQuery;
    kendoBarcode(options: kendo.dataviz.ui.BarcodeOptions): JQuery;
    data(key: "kendoBarcode"): kendo.dataviz.ui.Barcode;

    kendoButton(): JQuery;
    kendoButton(options: kendo.ui.ButtonOptions): JQuery;
    data(key: "kendoButton"): kendo.ui.Button;

    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo.ui.CalendarOptions): JQuery;
    data(key: "kendoCalendar"): kendo.ui.Calendar;

    kendoChart(): JQuery;
    kendoChart(options: kendo.dataviz.ui.ChartOptions): JQuery;
    data(key: "kendoChart"): kendo.dataviz.ui.Chart;

    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo.ui.ColorPaletteOptions): JQuery;
    data(key: "kendoColorPalette"): kendo.ui.ColorPalette;

    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo.ui.ColorPickerOptions): JQuery;
    data(key: "kendoColorPicker"): kendo.ui.ColorPicker;

    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo.ui.ComboBoxOptions): JQuery;
    data(key: "kendoComboBox"): kendo.ui.ComboBox;

    kendoContextMenu(): JQuery;
    kendoContextMenu(options: kendo.ui.ContextMenuOptions): JQuery;
    data(key: "kendoContextMenu"): kendo.ui.ContextMenu;

    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo.ui.DatePickerOptions): JQuery;
    data(key: "kendoDatePicker"): kendo.ui.DatePicker;

    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(options: kendo.ui.DateTimePickerOptions): JQuery;
    data(key: "kendoDateTimePicker"): kendo.ui.DateTimePicker;

    kendoDiagram(): JQuery;
    kendoDiagram(options: kendo.dataviz.ui.DiagramOptions): JQuery;
    data(key: "kendoDiagram"): kendo.dataviz.ui.Diagram;

    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo.ui.DropDownListOptions): JQuery;
    data(key: "kendoDropDownList"): kendo.ui.DropDownList;

    kendoEditor(): JQuery;
    kendoEditor(options: kendo.ui.EditorOptions): JQuery;
    data(key: "kendoEditor"): kendo.ui.Editor;

    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(options: kendo.ui.FlatColorPickerOptions): JQuery;
    data(key: "kendoFlatColorPicker"): kendo.ui.FlatColorPicker;

    kendoGantt(): JQuery;
    kendoGantt(options: kendo.ui.GanttOptions): JQuery;
    data(key: "kendoGantt"): kendo.ui.Gantt;

    kendoGrid(): JQuery;
    kendoGrid(options: kendo.ui.GridOptions): JQuery;
    data(key: "kendoGrid"): kendo.ui.Grid;

    kendoLinearGauge(): JQuery;
    kendoLinearGauge(options: kendo.dataviz.ui.LinearGaugeOptions): JQuery;
    data(key: "kendoLinearGauge"): kendo.dataviz.ui.LinearGauge;

    kendoListView(): JQuery;
    kendoListView(options: kendo.ui.ListViewOptions): JQuery;
    data(key: "kendoListView"): kendo.ui.ListView;

    kendoMap(): JQuery;
    kendoMap(options: kendo.dataviz.ui.MapOptions): JQuery;
    data(key: "kendoMap"): kendo.dataviz.ui.Map;

    kendoMaskedTextBox(): JQuery;
    kendoMaskedTextBox(options: kendo.ui.MaskedTextBoxOptions): JQuery;
    data(key: "kendoMaskedTextBox"): kendo.ui.MaskedTextBox;

    kendoMenu(): JQuery;
    kendoMenu(options: kendo.ui.MenuOptions): JQuery;
    data(key: "kendoMenu"): kendo.ui.Menu;

    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(options: kendo.mobile.ui.ActionSheetOptions): JQuery;
    data(key: "kendoMobileActionSheet"): kendo.mobile.ui.ActionSheet;

    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(options: kendo.mobile.ui.BackButtonOptions): JQuery;
    data(key: "kendoMobileBackButton"): kendo.mobile.ui.BackButton;

    kendoMobileButton(): JQuery;
    kendoMobileButton(options: kendo.mobile.ui.ButtonOptions): JQuery;
    data(key: "kendoMobileButton"): kendo.mobile.ui.Button;

    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(options: kendo.mobile.ui.ButtonGroupOptions): JQuery;
    data(key: "kendoMobileButtonGroup"): kendo.mobile.ui.ButtonGroup;

    kendoMobileCollapsible(): JQuery;
    kendoMobileCollapsible(options: kendo.mobile.ui.CollapsibleOptions): JQuery;
    data(key: "kendoMobileCollapsible"): kendo.mobile.ui.Collapsible;

    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(options: kendo.mobile.ui.DetailButtonOptions): JQuery;
    data(key: "kendoMobileDetailButton"): kendo.mobile.ui.DetailButton;

    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(options: kendo.mobile.ui.DrawerOptions): JQuery;
    data(key: "kendoMobileDrawer"): kendo.mobile.ui.Drawer;

    kendoMobileLayout(): JQuery;
    kendoMobileLayout(options: kendo.mobile.ui.LayoutOptions): JQuery;
    data(key: "kendoMobileLayout"): kendo.mobile.ui.Layout;

    kendoMobileListView(): JQuery;
    kendoMobileListView(options: kendo.mobile.ui.ListViewOptions): JQuery;
    data(key: "kendoMobileListView"): kendo.mobile.ui.ListView;

    kendoMobileLoader(): JQuery;
    kendoMobileLoader(options: kendo.mobile.ui.LoaderOptions): JQuery;
    data(key: "kendoMobileLoader"): kendo.mobile.ui.Loader;

    kendoMobileModalView(): JQuery;
    kendoMobileModalView(options: kendo.mobile.ui.ModalViewOptions): JQuery;
    data(key: "kendoMobileModalView"): kendo.mobile.ui.ModalView;

    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(options: kendo.mobile.ui.NavBarOptions): JQuery;
    data(key: "kendoMobileNavBar"): kendo.mobile.ui.NavBar;

    kendoMobilePane(): JQuery;
    kendoMobilePane(options: kendo.mobile.ui.PaneOptions): JQuery;
    data(key: "kendoMobilePane"): kendo.mobile.ui.Pane;

    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(options: kendo.mobile.ui.PopOverOptions): JQuery;
    data(key: "kendoMobilePopOver"): kendo.mobile.ui.PopOver;

    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(options: kendo.mobile.ui.ScrollViewOptions): JQuery;
    data(key: "kendoMobileScrollView"): kendo.mobile.ui.ScrollView;

    kendoMobileScroller(): JQuery;
    kendoMobileScroller(options: kendo.mobile.ui.ScrollerOptions): JQuery;
    data(key: "kendoMobileScroller"): kendo.mobile.ui.Scroller;

    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(options: kendo.mobile.ui.SplitViewOptions): JQuery;
    data(key: "kendoMobileSplitView"): kendo.mobile.ui.SplitView;

    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(options: kendo.mobile.ui.SwitchOptions): JQuery;
    data(key: "kendoMobileSwitch"): kendo.mobile.ui.Switch;

    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(options: kendo.mobile.ui.TabStripOptions): JQuery;
    data(key: "kendoMobileTabStrip"): kendo.mobile.ui.TabStrip;

    kendoMobileView(): JQuery;
    kendoMobileView(options: kendo.mobile.ui.ViewOptions): JQuery;
    data(key: "kendoMobileView"): kendo.mobile.ui.View;

    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo.ui.MultiSelectOptions): JQuery;
    data(key: "kendoMultiSelect"): kendo.ui.MultiSelect;

    kendoNotification(): JQuery;
    kendoNotification(options: kendo.ui.NotificationOptions): JQuery;
    data(key: "kendoNotification"): kendo.ui.Notification;

    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(options: kendo.ui.NumericTextBoxOptions): JQuery;
    data(key: "kendoNumericTextBox"): kendo.ui.NumericTextBox;

    kendoPager(): JQuery;
    kendoPager(options: kendo.ui.PagerOptions): JQuery;
    data(key: "kendoPager"): kendo.ui.Pager;

    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo.ui.PanelBarOptions): JQuery;
    data(key: "kendoPanelBar"): kendo.ui.PanelBar;

    kendoPivotConfigurator(): JQuery;
    kendoPivotConfigurator(options: kendo.ui.PivotConfiguratorOptions): JQuery;
    data(key: "kendoPivotConfigurator"): kendo.ui.PivotConfigurator;

    kendoPivotGrid(): JQuery;
    kendoPivotGrid(options: kendo.ui.PivotGridOptions): JQuery;
    data(key: "kendoPivotGrid"): kendo.ui.PivotGrid;

    kendoPopup(): JQuery;
    kendoPopup(options: kendo.ui.PopupOptions): JQuery;
    data(key: "kendoPopup"): kendo.ui.Popup;

    kendoProgressBar(): JQuery;
    kendoProgressBar(options: kendo.ui.ProgressBarOptions): JQuery;
    data(key: "kendoProgressBar"): kendo.ui.ProgressBar;

    kendoQRCode(): JQuery;
    kendoQRCode(options: kendo.dataviz.ui.QRCodeOptions): JQuery;
    data(key: "kendoQRCode"): kendo.dataviz.ui.QRCode;

    kendoRadialGauge(): JQuery;
    kendoRadialGauge(options: kendo.dataviz.ui.RadialGaugeOptions): JQuery;
    data(key: "kendoRadialGauge"): kendo.dataviz.ui.RadialGauge;

    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo.ui.RangeSliderOptions): JQuery;
    data(key: "kendoRangeSlider"): kendo.ui.RangeSlider;

    kendoResponsivePanel(): JQuery;
    kendoResponsivePanel(options: kendo.ui.ResponsivePanelOptions): JQuery;
    data(key: "kendoResponsivePanel"): kendo.ui.ResponsivePanel;

    kendoScheduler(): JQuery;
    kendoScheduler(options: kendo.ui.SchedulerOptions): JQuery;
    data(key: "kendoScheduler"): kendo.ui.Scheduler;

    kendoSlider(): JQuery;
    kendoSlider(options: kendo.ui.SliderOptions): JQuery;
    data(key: "kendoSlider"): kendo.ui.Slider;

    kendoSortable(): JQuery;
    kendoSortable(options: kendo.ui.SortableOptions): JQuery;
    data(key: "kendoSortable"): kendo.ui.Sortable;

    kendoSparkline(): JQuery;
    kendoSparkline(options: kendo.dataviz.ui.SparklineOptions): JQuery;
    data(key: "kendoSparkline"): kendo.dataviz.ui.Sparkline;

    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo.ui.SplitterOptions): JQuery;
    data(key: "kendoSplitter"): kendo.ui.Splitter;

    kendoSpreadsheet(): JQuery;
    kendoSpreadsheet(options: kendo.ui.SpreadsheetOptions): JQuery;
    data(key: "kendoSpreadsheet"): kendo.ui.Spreadsheet;

    kendoStockChart(): JQuery;
    kendoStockChart(options: kendo.dataviz.ui.StockChartOptions): JQuery;
    data(key: "kendoStockChart"): kendo.dataviz.ui.StockChart;

    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo.ui.TabStripOptions): JQuery;
    data(key: "kendoTabStrip"): kendo.ui.TabStrip;

    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo.ui.TimePickerOptions): JQuery;
    data(key: "kendoTimePicker"): kendo.ui.TimePicker;

    kendoToolBar(): JQuery;
    kendoToolBar(options: kendo.ui.ToolBarOptions): JQuery;
    data(key: "kendoToolBar"): kendo.ui.ToolBar;

    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo.ui.TooltipOptions): JQuery;
    data(key: "kendoTooltip"): kendo.ui.Tooltip;

    kendoTouch(): JQuery;
    kendoTouch(options: kendo.ui.TouchOptions): JQuery;
    data(key: "kendoTouch"): kendo.ui.Touch;

    kendoTreeList(): JQuery;
    kendoTreeList(options: kendo.ui.TreeListOptions): JQuery;
    data(key: "kendoTreeList"): kendo.ui.TreeList;

    kendoTreeMap(): JQuery;
    kendoTreeMap(options: kendo.dataviz.ui.TreeMapOptions): JQuery;
    data(key: "kendoTreeMap"): kendo.dataviz.ui.TreeMap;

    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo.ui.TreeViewOptions): JQuery;
    data(key: "kendoTreeView"): kendo.ui.TreeView;

    kendoUpload(): JQuery;
    kendoUpload(options: kendo.ui.UploadOptions): JQuery;
    data(key: "kendoUpload"): kendo.ui.Upload;

    kendoValidator(): JQuery;
    kendoValidator(options: kendo.ui.ValidatorOptions): JQuery;
    data(key: "kendoValidator"): kendo.ui.Validator;

    kendoWindow(): JQuery;
    kendoWindow(options: kendo.ui.WindowOptions): JQuery;
    data(key: "kendoWindow"): kendo.ui.Window;

}
