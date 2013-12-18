// Type definitions for ChartJS
// Project: http://chartjs.devexpress.com
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
}
declare module DevExpress.viz {
    export class Chart extends ui.Component {
        constructor(element: Element, options?: viz.charts.ChartOptions);
        constructor(element: JQuery, options?: viz.charts.ChartOptions);
        clearSelection(): void;
        getSeries(): viz.charts.series.Series;
        hidiTooltip(): void;
        render(options: viz.charts.RenderOptions): void;
        render(): void;
        zoomArgument(minArg: any, maxArg: any): void;
        getSeriesByPos(seriesIndex: number): viz.charts.series.Series;
        getSeriesByName(seriesName: string): viz.charts.series.Series;
        getAllSeries(): Array<viz.charts.series.Series>;
        instance(): Chart;
    }
    export class PieChart extends ui.Component {
        constructor(element: Element, options?: viz.charts.PieOptions);
        constructor(element: JQuery, options?: viz.charts.PieOptions);
        clearSelection(): void;
        getSeries(): viz.charts.series.PieSeries;
        hidiTooltip(): void;
        render(options: viz.charts.RenderOptions): void;
        render(): void;
        instance(): PieChart;
    }
    export class RangeSelector extends ui.Component {
        constructor(element: Element, options?: viz.rangeSelector.RangeSelectorOptions);
        constructor(element: JQuery, options?: viz.rangeSelector.RangeSelectorOptions);
        getSelectedRange: () => viz.rangeSelector.SelectedRange;
        setSelectedRange: (selectedRange: viz.rangeSelector.SelectedRange) => void;
        instance(): RangeSelector;
    }
    export class CircularGauge extends ui.Component {
        constructor(element: Element, options?: viz.gauges.CircularGaugeOptions);
        constructor(element: JQuery, options?: viz.gauges.CircularGaugeOptions);
        value(): number;
        value(val: number): CircularGauge;
        subvalues(): Array<number>;
        subvalues(values: Array<number>): CircularGauge;
        instance(): CircularGauge;
    }
    export class LinearGauge extends ui.Component {
        constructor(element: Element, options?: viz.gauges.LinearGaugeOptions);
        constructor(element: JQuery, options?: viz.gauges.LinearGaugeOptions);
        value(): number;
        value(val: number): LinearGauge;
        subvalues(): Array<number>;
        subvalues(values: Array<number>): LinearGauge;
        instance(): LinearGauge;
    }
    export class Sparkline extends ui.Component {
        constructor(element: Element, options?: viz.sparklines.SparklineOptions);
        constructor(element: JQuery, options?: viz.sparklines.SparklineOptions);
        render(): Sparkline;
        instance(): Sparkline;
    }
    export class Bullet extends ui.Component {
        constructor(element: Element, options?: viz.sparklines.BulletOptions);
        constructor(element: JQuery, options?: viz.sparklines.BulletOptions);
        render(): Bullet;
        instance(): Bullet;
    }
    export class Map extends ui.Component {
        constructor(element: Element, options?: viz.map.VectorMapOptions);
        constructor(element: JQuery, options?: viz.map.VectorMapOptions);
        render(): void;
        instance(): Map;
        getAreas(): Array<viz.map.Proxy>;
        getMarkers(): Array<viz.map.Proxy>;
        clearAreaSelection(): void;
        clearMarkerSelection(): void;
        clearSelection(): void;
    }
}
declare module DevExpress.viz.charts {
    interface z_BaseLegendOptions {
        backgroundColor?: string;
        hoverMode?: string;
        customizeText?: (arg: {
            seriesName: string;
            seriesNumber: number;
            seriesColor: string;
        }) => string;
        verticalAlignment?: string;
        horizontalAlignment?: string;
        itemTextPosition?: string;
        equalColumnWidth?: boolean;
        font?: viz.common.FontOptions;
        visible?: boolean;
        margin?: number;
        markerSize?: number;
        border?: {
            visible?: boolean;
            width?: number;
            color?: string;
            cornerRadius?: number;
            opacity?: number;
            dashStyle?: string;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        columnsCount?: number;
        rowsCount?: number;
        columnItemSpacing?: number;
        rowItemSpacing?: number;
    }
    interface z_BaseTooltipCustomizeArgument {
        value?: any;
        valueText: string;
        originalValue: string;
        argument: any;
        argumentText: string;
        originalArgument: any;
        percent?: any;
        percentText?: string;
        seriesName: string;
    }
    interface z_BaseTooltipOptions {
        enabled?: boolean;
        color?: string;
        customizeText?: (arg: z_BaseTooltipCustomizeArgument) => string;
        format?: string;
        argumentFormat?: string;
        precision?: number;
        argumentPrecision?: number;
        percentPrecision?: number;
        font?: viz.common.FontOptions;
        arrowLength?: number;
        paddingLeftRight?: number;
        paddingTopBottom?: number;
    }
    interface z_ChartTooltipCustomizeArgument extends z_BaseTooltipCustomizeArgument {
        closeValueText?: string;
        highValueText?: string;
        lowValueText?: string;
        openValueText?: string;
        originalCloseValue?: any;
        originalHighValue?: any;
        originalLowValue?: any;
        originalOpenValue?: any;
        closeValue?: any;
        highValue?: any;
        lowValue?: any;
        openValue?: any;
        reductionValue?: any;
        reductionValueText?: string;
        originalMinValue?: any;
        rangeValue1?: any;
        rangeValue1Text?: string;
        rangeValue2?: any;
        rangeValue2Text?: string;
        point: series.Point;
    }
    interface z_ChartTooltipOptions extends z_BaseTooltipOptions {
        customizeText?: (arg: z_ChartTooltipCustomizeArgument) => string;
        shared?: boolean;
    }
    interface z_BaseChartOptions extends ui.ComponentOptions {
        incidentOccured?: () => void;
        done?: () => void;
        drawn?: () => void;
        tooltipShown?: () => void;
        tooltipHidden?: () => void;
        pointSelectionMode?: string;
        redrawOnResize?: boolean;
        tooltip?: z_BaseTooltipOptions;
        margin?: {
            left?: number;
            top?: number;
            right?: number;
            bottom?: number;
        };
        size?: {
            width?: number;
            height?: number;
        };
        title?: {
            horizontalAlignment?: string;
            verticalAlignment?: string;
            font?: viz.common.FontOptions;
            text?: string;
            placeholderSize?: number;
        };
        dataSource?: any;
        palette?: any; legend?: z_BaseLegendOptions;
        theme?: string;
        animation?: {
            enabled?: boolean;
            duration?: number;
            easing?: string;
            maxPointCountSupported?: number;
            asyncSeriesRendering?: boolean;
            asyncTrackersRendering?: boolean;
            trackerRenderingDelay?: number;
        };
    }
    export interface CommonPaneSettings {
        backgroundColor?: string;
        border?: {
            color?: string;
            bottom?: boolean;
            left?: boolean;
            right?: boolean;
            top?: boolean;
            dashStyle?: string;
            visible?: boolean;
            width?: number;
            opacity?: number;
        };
    }
    export interface PaneSettings extends CommonPaneSettings {
        name: string;
    }
    export interface ChartLegendOptions extends z_BaseLegendOptions {
        hoverMode?: string;
        position?: string;
    }
    interface z_CommonAxisLabelSettings {
        alignment?: string;
        font?: viz.common.FontOptions;
        indentFromAxis?: number;
        overlappingBehavior?: {
            mode?: string;
            rotationAngle?: number;
            staggeringSpacing?: number;
        };
        rotationAngle?: number;
        staggered?: boolean;
        staggeringSpacing?: number;
    }
    interface z_BaseConstantLineLabel {
        visible?: boolean;
        position?: string;
        font?: viz.common.FontOptions;
    }
    interface ConstantLineAxisLabel extends z_BaseConstantLineLabel {
        horizontalAlignment?: string;
        verticalAlignment?: string;
    }
    export interface ConstantLineLabel extends ConstantLineAxisLabel {
        text?: string;
    }
    export interface CommonConstantLineStyle {
        paddingLeftRight?: number;
        paddingTopBottom?: number;
        width?: number;
        dashStyle?: string;
        color?: string;
        label?: z_BaseConstantLineLabel;
    }
    export interface ConstantLineOptions extends CommonConstantLineStyle {
        value?: any;
        label?: ConstantLineLabel;
    }
    interface z_AxisConstantLineStyle extends CommonConstantLineStyle {
        label?: ConstantLineAxisLabel;
    }
    interface z_StripStyle {
        label?: {
            font?: viz.common.FontOptions;
            horizontalAlignment?: string;
            verticalAlignment?: string;
        };
        paddingLeftRight?: number;
        paddingTopBottom?: number;
    }
    export interface CommonAxisSettings {
        color?: string;
        discreteAxisDivisionMode?: string;
        grid?: {
            color?: string;
            opacity?: string;
            visible?: boolean;
            width?: number;
        }
        inverted?: boolean;
        label?: z_CommonAxisLabelSettings;
        maxValueMargin?: number;
        minValueMargin?: number;
        opacity?: number;
        placeholderSize?: number;
        setTicksAtUnitBeginning?: boolean;
        stripStyle?: z_StripStyle
        constantLineStyle?: CommonConstantLineStyle;
        tick?: {
            color?: string;
            opacity?: number;
            visible?: boolean;
        };
        title?: {
            font?: viz.common.FontOptions;
            margin?: number;
            text?: string;
        };
        valueMarginsEnabled?: boolean;
        visible?: boolean;
        width?: number;
    }
    export interface StripOptions extends z_StripStyle {
        color?: string;
        endValue: any;
        startValue: any;
        label?: {
            font?: viz.common.FontOptions;
            horizontalAlignment?: string;
            verticalAlignment?: string;
            text?: string;
        };
    }
    interface z_AxisLabelSettings extends z_CommonAxisLabelSettings {
        customizeText: (arg: {
            value: any;
            valueText: string;
        }) => string;
    }
    export interface ArgumentAxisOptions extends CommonAxisSettings {
        argumentType?: string;
        axisDivisionFactor?: number;
        categories?: Array<string>;
        hoverMode?: string;
        label?: z_AxisLabelSettings;
        max?: number;
        min?: number;
        tickInterval?: any;
        position?: string;
        constantLineStyle?: z_AxisConstantLineStyle;
        strips?: Array<StripOptions>;
        constantLines?: Array<ConstantLineOptions>;
        type?: string;
    }
    export interface ValueAxisOptions extends CommonAxisSettings {
        valueType?: string;
        axisDivisionFactor?: number;
        categories?: Array<any>;
        hoverMode?: string;
        max?: number;
        min?: number;
        tickInterval?: any; position?: string;
        strips?: Array<StripOptions>;
        constantLines?: Array<ConstantLineOptions>;
        constantLineStyle?: z_AxisConstantLineStyle;
        type?: string;
        name?: string;
        label?: z_AxisLabelSettings;
    }
    interface z_CrosshairLine {
        color?: string;
        width?: number;
        dashStyle?: string;
        opacity?: number;
    }
    interface z_CrosshairOptions extends z_CrosshairLine {
        enabled?: boolean;
        verticalLine?: z_CrosshairLine;
        horizontalLine?: z_CrosshairLine;
    }
    export interface ChartOptions extends z_BaseChartOptions {
        needAggregate?: boolean;
        defaultPane?: string;
        adjustOnZoom?: boolean;
        rotated?: boolean;
        synchronizeMultiAxes?: boolean;
        equalBarWidth?: {
            spacing?: number;
            width?: number;
        };
        customizePoint?: (arg: {
            index: number;
            argument: any;
            seriesName: string;
            tag: any;
            value?: any;
            rangeValue1?: any;
            rangeValue2?: any;
        }) => series.BasePointOptions;
        commonPaneSettings?: CommonPaneSettings;
        panes?: Array<PaneSettings>;
        containerBackgroundColor?: string;
        seriesTemplate?: {
            nameField?: string;
            customizeSeries?: (valueFromNameField: string) => viz.charts.series.SeriesOptions;
        };
        crosshair?: z_CrosshairOptions;
        seriesSelectionMode?: string;
        tooltip?: z_ChartTooltipOptions;
        dataPrepareSettings?: {
            checkTypeForAllData?: boolean;
            convertToAxisDataType?: boolean;
            sortingMethod?: any;
        };
        useAggregation?: boolean;
        argumentAxisClick?: (axis: any, argument: any, event: JQueryMouseEventObject) => void;
        legend?: ChartLegendOptions;
        argumentAxis?: ArgumentAxisOptions;
        valueAxis?: Array<ValueAxisOptions>;
        commonAxisSettings?: CommonAxisSettings;
        series?: Array<viz.charts.series.SeriesOptions>;
        commonSeriesSettings?: viz.charts.series.commonSeriesSettings;
        seriesClick?: (series: viz.charts.series.Series, event: JQueryMouseEventObject) => void;
        seriesHover?: (series: viz.charts.series.Series) => void;
        seriesSelected?: (series: viz.charts.series.Series) => void;
        seriesHoverChanged?: (series: viz.charts.series.Series) => void;
        pointClick?: (point: viz.charts.series.Point, event: JQueryMouseEventObject) => void;
        legendClick?: (obj: any, event: JQueryMouseEventObject) => void; pointHover?: (point: viz.charts.series.Point) => void;
        pointSelected?: (point: viz.charts.series.Point) => void;
        seriesSelectionChanged?: (series: viz.charts.series.Series) => void;
        pointSelectionChanged?: (point: viz.charts.series.Point) => void;
        pointHoverChanged?: (point: viz.charts.series.Point) => void;
    }
    export interface PieOptions extends z_BaseChartOptions {
        pointClick?: (point: viz.charts.series.PiePoint, event: JQueryMouseEventObject) => void;
        legendClick?: (point: viz.charts.series.PiePoint, event: JQueryMouseEventObject) => void;
        pointHover?: (point: viz.charts.series.PiePoint) => void;
        pointSelected?: (point: viz.charts.series.PiePoint) => void;
        pointSelectionChanged?: (point: viz.charts.series.PiePoint) => void;
        pointHoverChanged?: (point: viz.charts.series.PiePoint) => void;
        series?: viz.charts.series.PieSeriesOptions;
    }
    export interface RenderOptions {
        force?: boolean;
        animate?: boolean;
        asyncSeriesRendering?: boolean;
    }
}
declare module DevExpress.viz.charts.series {
    export interface z_BasePointStyle {
        color?: string;
        border?: {
            visible?: boolean;
            width?: number;
            color?: string;
        };
        size?: number;
    }
    interface BasePointOptions extends z_BasePointStyle {
        hoverMode?: string;
        selectionMode?: string;
        visible?: boolean;
        symbol?: string;
        image?: any;
        hoverStyle?: z_BasePointStyle;
        selectionStyle?: z_BasePointStyle;
    }
    interface z_BaseSeriesOptions {
        argumentField?: string;
        hoverMode?: string;
        maxLabelCount?: number;
        label?: z_BaseLabelOptions;
        selectionMode?: string;
        showInLegend?: boolean;
        tagField?: string;
    }
    interface z_BaseLabelOptions {
        visible?: boolean;
        alignment?: string;
        rotationAngle?: number;
        format?: string;
        precision?: number;
        argumentFormat?: string;
        argumentPrecision?: number;
        precission?: number;
        percentPrecision?: number;
        font?: viz.common.FontOptions;
        backgroundColor?: string;
        border?: {
            visible?: boolean;
            width?: number;
            color?: string;
            dashStyle?: string;
        };
        connector?: {
            visible?: boolean;
            width?: number;
            color?: string;
        }
    }
    interface z_BaseChartSeriesLabelOptions extends z_BaseLabelOptions {
        horizontalOffset?: number;
        verticalOffset?: number;
        customizeText?: (arg: {
            originalValue: any;
            value: any;
            valueText: string;
            originalArgument: any;
            argument: any;
            argumentText: string;
            seriesName: string;
        }) => string;
    }
    interface z_BaseSeriesStyle {
        color?: string;
    }
    export interface ScatterSeriesOptions extends z_BaseSeriesOptions, z_BaseSeriesStyle {
        selectionStyle?: z_BaseSeriesStyle;
        hoverStyle?: z_BaseSeriesStyle;
        valueField?: string;
        point?: BasePointOptions;
        axis?: string;
        pane?: string;
    }
    export interface LineSeriesStyle extends z_BaseSeriesStyle {
        dashStyle?: string;
        width?: number;
    }
    export interface LineSeriesOptions extends LineSeriesStyle, z_BaseSeriesOptions {
        selectionStyle?: LineSeriesStyle;
        hoverStyle?: LineSeriesStyle;
        valueField?: string;
        point?: BasePointOptions;
        pane?: string;
    }
    export interface AreaSeriesStyle extends z_BaseSeriesStyle {
        hatching?: {
            direction?: string;
            width?: number;
            step?: number;
            opacity?: number
        };
        border?: {
            visible?: boolean;
            width?: number;
            color?: string;
        };
    }
    export interface AreaSeriesOptions extends AreaSeriesStyle, z_BaseSeriesOptions {
        selectionStyle?: AreaSeriesStyle;
        hoverStyle?: AreaSeriesStyle;
        valueField?: string;
        point?: BasePointOptions;
        pane?: string;
        axis?: string;
    }
    export interface BarSeriesLabel extends z_BaseChartSeriesLabelOptions {
        position?: string;
        showForZeroValues?: boolean;
    }
    export interface BarSeriesStyle extends AreaSeriesStyle { }
    interface z_BaseBarSeriesOptions extends z_BaseSeriesOptions, BarSeriesStyle {
        minBarSize?: number;
        cornerRadius?: number;
        label?: BarSeriesLabel;
        selectionStyle?: BarSeriesStyle;
        hoverStyle?: BarSeriesStyle;
        pane?: string;
        axis?: string;
    }
    export interface BarSeriesOptions extends z_BaseBarSeriesOptions {
        valueField?: string;
    }
    export interface OHLCSeriesStyle extends z_BaseSeriesStyle {
        width?: number;
    }
    interface z_BaseOHLCSeries extends z_BaseSeriesOptions {
        openValueField?: string;
        highValueField?: string;
        lowValueField?: string;
        closeValueField?: string;
        reduction?: {
            color?: string;
            level?: string;
        };
        pane?: string;
        axis?: string;
    }
    export interface CandleStickSeriesOptions extends z_BaseOHLCSeries, OHLCSeriesStyle {
        innerColor?: string;
        selectionStyle?: OHLCSeriesStyle;
        hoverStyle?: OHLCSeriesStyle;
    }
    export interface StockSeriesOptions extends z_BaseOHLCSeries, OHLCSeriesStyle {
        selectionStyle?: OHLCSeriesStyle;
        hoverStyle?: OHLCSeriesStyle;
    }
    export interface FullStackedAreaSeriesOptions extends z_BaseSeriesOptions, AreaSeriesOptions {
        valueField?: string;
        selectionStyle?: AreaSeriesStyle;
        hoverStyle?: AreaSeriesStyle;
        point?: BasePointOptions;
    }
    export interface FullStackedBarSeriesOptions extends BarSeriesOptions {
        stack?: string;
    }
    export interface FullStackedLineSeriesOptions extends LineSeriesOptions {
        point?: BasePointOptions;
    }
    interface z_BaseRangeSeriesOptions extends z_BaseSeriesOptions {
        rangeValue1Field?: string;
        rangeValue2Field?: string;
        pane?: string;
        axis?: string;
    }
    export interface RangeAreaSeriesOptions extends z_BaseSeriesOptions, AreaSeriesStyle {
        selectionStyle?: AreaSeriesStyle;
        hoverStyle?: AreaSeriesStyle;
        point?: BasePointOptions;
    }
    export interface RangeBarSeriesOptions extends z_BaseBarSeriesOptions {
        rangeValue1Field?: string;
        rangeValue2Field?: string;
        pane?: string;
        axis?: string;
    }
    export interface SplineSeriesOptions extends LineSeriesOptions { }
    export interface SplineAreaSeries extends AreaSeriesOptions { }
    export interface StackedLineSeries extends LineSeriesOptions { }
    export interface StackedAreaSeries extends AreaSeriesOptions { }
    export interface StackedBasrSeriesOptions extends BarSeriesOptions {
        stack?: string;
    }
    export interface BubbleSeriesStyle extends AreaSeriesStyle { }
    export interface BubbleSeriesOptions extends z_BaseBarSeriesOptions, BubbleSeriesStyle {
        selectionStyle?: LineSeriesStyle;
        hoverStyle?: LineSeriesStyle;
        valueField?: string;
        pane?: string;
        sizeField?: string;
    }
    export interface StepLineSeries extends LineSeriesOptions { }
    export interface StepAreaSeries extends AreaSeriesOptions { }
    export interface PieSeriesStyle extends AreaSeriesStyle { }
    interface PieSeriesLabelOptions extends z_BaseLabelOptions {
        customizeText: (arg: {
            value: any;
            valueText: string;
            originalValue: any;
            argument: any;
            argumentText: string;
            originalArgument: any;
            percent: any;
            percentText: string;
            seriesName: string;
        }) => string;
        radialOffset?: number;
    }
    export interface PieSeriesOptions extends z_BaseSeriesOptions, PieSeriesStyle {
        valueField?: string;
        minSegmentSize?: string;
        selectionStyle?: PieSeriesStyle;
        hoverStyle?: PieSeriesStyle;
        segmentsDirection?: string;
        type?: string;
        label?: PieSeriesLabelOptions;
    }
    interface AllSeriesStyleOptions extends z_BaseSeriesStyle, AreaSeriesStyle, LineSeriesStyle { }
    interface z_AllLabelsOptions extends z_BaseChartSeriesLabelOptions, BarSeriesLabel { }
    export interface CommonSeriesOptions extends z_BaseSeriesOptions, z_BaseBarSeriesOptions, z_BaseRangeSeriesOptions, z_BaseOHLCSeries, AllSeriesStyleOptions, BubbleSeriesOptions {
        selectionStyle?: AllSeriesStyleOptions;
        hoverStyle?: AllSeriesStyleOptions;
        label?: z_AllLabelsOptions;
        valueField?: string;
    }
    export interface SeriesOptions extends CommonSeriesOptions {
        tag?: any;
        name?: string;
        type?: string;
    }
    export interface commonSeriesSettings extends CommonSeriesOptions {
        area?: AreaSeriesOptions;
        bar?: BarSeriesOptions;
        candlestick?: CandleStickSeriesOptions;
        fullstackedarea?: FullStackedAreaSeriesOptions;
        fullstackedbar?: FullStackedBarSeriesOptions;
        fullstackedline?: FullStackedLineSeriesOptions;
        line?: LineSeriesOptions;
        rangearea?: RangeAreaSeriesOptions;
        rangebar?: RangeBarSeriesOptions;
        scatter?: ScatterSeriesOptions;
        spline?: SplineSeriesOptions;
        splinearea?: SplineAreaSeries;
        stackedarea?: StackedAreaSeries;
        stackedbar?: StackedBasrSeriesOptions;
        stackedline?: StackedLineSeries;
        steparea?: StepAreaSeries;
        stepline?: StepLineSeries;
        stock?: StockSeriesOptions;
        bubble?: BubbleSeriesOptions;
    }
    export class Point {
        fullState: number;
        originalArgument: any;
        originalValue: any;
        series: Series;
        tag: any;
        clearSelection(): void;
        select(): void;
        hideTootip(): void;
        isSelected(): boolean;
        isHovered(): boolean;
    }
    export class PiePoint {
        fullState: number;
        originalArgument: any;
        originalValue: any;
        percent: any;
        series: PieSeries;
        tag: any;
        clearSelection(): void;
        select(): void;
        hideTootip(): void;
        isSelected(): boolean;
        isHovered(): boolean;
    }
    export class Series {
        axis: string;
        fullState: number;
        name: string;
        pane: string;
        tag: any;
        type: string;
        clearSelection(): void;
        deselectPoint(point: Point): void;
        getAllPoints(): Array<Point>
        getPointByArg(pointArg: any): Point;
        getPointByPos(positionIndex: number): Point;
        select(): void;
        selectPoint(point: Point): void;
        isSelected(): boolean;
        isHovered(): boolean;
    }
    export class PieSeries {
        fullState: number;
        type: string;
        clearSelection(): void;
        deselectPoint(point: PiePoint): void;
        getAllPoints(): Array<PiePoint>
        getPointByArg(pointArg: any): PiePoint;
        getPointByPos(positionIndex: number): PiePoint;
        select(): void;
        selectPoint(point: PiePoint): void;
        isSelected(): boolean;
        isHovered(): boolean;
    }
}
declare module DevExpress.viz.common {
    export interface FontOptions {
        color?: string;
        family?: string;
        opacity?: number;
        size?: number;
        weight?: number;
    }
    export interface tickIntervalObject {
        years?: number;
        quarters?: number;
        months?: number;
        days?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        milliseconds?: number;
    }
}
declare module DevExpress.viz.gauges {
    interface CustomizeTextArgument {
        value: number;
        valueText: string;
    }
    interface z_textOptions {
        format?: string;
        precision?: number;
        customizeText?: (arg: CustomizeTextArgument) => string;
        font?: viz.common.FontOptions;
    }
    interface z_textOptionsWithIndent extends z_textOptions {
        indent?: number;
    }
    interface z_BaseGaugeOptions {
        size?: {
            width?: number;
            height?: number;
        };
        margin?: {
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
        };
        containerBackgroundColor?: string;
        animationEnabled?: boolean;
        animationDuration?: number;
        redrawOnResize?: boolean;
        title?: {
            position?: string;
            text?: string;
            font?: viz.common.FontOptions;
        };
        subtitle?: {
            text?: string;
            font?: viz.common.FontOptions;
        };
        tooltip?: {
            enabled?: boolean;
            format?: string;
            precision?: number;
            customizeText?: (arg: CustomizeTextArgument) => string;
            font?: viz.common.FontOptions;
        };
        value?: number;
        subvalues?: Array<number>
    }
    interface z_BaseRangeContainer {
        offset?: number;
        backgroundColor?: string;
        ranges?: Array<{
            startValue?: number;
            endValue?: number;
            color?: string;
        }>
    }
    interface z_BaseScale {
        startValue?: number;
        endValue?: number;
        hideFirstTick?: boolean;
        hideLastTick?: boolean;
        hideFirstLabel?: boolean;
        hideLastLabel?: boolean;
        majorTick?: {
            color?: string;
            length?: number;
            width?: number;
            customTickValues?: Array<number>;
            useTicksAutoArrangement?: boolean;
            tickInterval?: number;
            showCalculatedTicks?: boolean;
            visible?: boolean;
        };
        minorTick?: {
            color?: string;
            length?: number;
            width?: number;
            customTickValues?: Array<number>;
            tickInterval?: number;
            showCalculatedTicks?: boolean;
            visible?: boolean;
        };
        label?: z_textOptions;
    }
    interface z_BaseValueIndicator {
        color?: string;
        baseValue?: number;
        size?: number;
        backgroundColor?: string;
        text?: z_textOptionsWithIndent;
    }
    interface z_BaseSubValueIndicator {
        type?: string;
        length?: number;
        width?: number;
        color?: string;
        arrowLength?: number;
        text?: z_textOptions;
    }
    export interface CircularGaugeRangeContainer extends z_BaseRangeContainer {
        width?: number;
        orientation?: string;
    }
    export interface CircularGaugeScale extends z_BaseScale {
        orientation: string;
        label: {
            format?: string;
            precision?: number;
            customizeText?: (arg: CustomizeTextArgument) => string;
            font?: viz.common.FontOptions;
            indentFromTick?: number;
        }
    }
    export interface CircularGaugeValueIndicator extends z_BaseValueIndicator {
        type?: string;
        offset?: number;
        indentFromCenter?: number;
        width?: number;
        secondColor?: string;
        secondFraction?: number;
        spindleSize?: number;
        spindleGapSize?: number;
    }
    export interface CircularGaugeSubValueIndicator extends z_BaseSubValueIndicator {
        offset?: number;
    }
    export interface CircularGaugeOptions extends z_BaseGaugeOptions {
        rangeContainer?: CircularGaugeRangeContainer;
        geometry?: {
            startAngle?: number;
            endAngle?: number;
        };
        scale?: CircularGaugeScale;
        valueIndicator?: CircularGaugeValueIndicator;
        spindle?: {
            visible?: boolean;
            size?: number;
            gapSize?: number;
            color?: string;
        }
    }
    export interface LinearGaugeScale extends z_BaseScale {
        verticalOrientation?: string;
        horizontalOrientation?: string;
        label?: {
            format?: string;
            precision?: number;
            customizeText?: (arg: CustomizeTextArgument) => string;
            font?: viz.common.FontOptions;
            indentFromTick?: number;
        }
    }
    export interface LinearGaugeRangeContainer extends z_BaseRangeContainer {
        width?: {
            start?: number;
            end?: number;
        };
        verticalOrientation?: string;
        horizontalOrientation?: string;
    }
    export interface LinearGaugeValueIndicator extends z_BaseValueIndicator {
        offset?: number;
        horizontalOrientation?: string;
        verticalOrientation?: string;
        length?: number;
        width?: number;
    }
    export interface LinearGaugeSubValueIndicator extends z_BaseSubValueIndicator {
        offset?: number;
        horizontalOrientation?: string;
        verticalOrientation?: string;
    }
    export interface LinearGaugeOptions extends z_BaseGaugeOptions {
        geometry?: {
            orientation?: string;
        };
        scale?: LinearGaugeScale;
        valueIndicator?: LinearGaugeValueIndicator;
    }
}
declare module DevExpress.viz.map {
    export interface VectorMapOptions {
        size?: {
            width?: number;
            height?: number;
        };
        theme?: string;
        background?: {
            borderColor?: string;
            color?: string;
        };
        mapData?: any;
        areaSettings?: {
            borderColor?: string;
            color?: string;
            hoveredBorderColor?: string;
            hoveredColor?: string;
            selectedBorderColor?: string;
            selectedColor?: string;
            hoverEnabled?: boolean;
            selectionMode?: string;
            palette?: any;
            paletteSize?: number;
            customize?: (arg: any) => AreaOptions;
            click?: (arg: Proxy) => void;
            selectionChanged?: (arg: Proxy) => void;
        };
        markers?: any;
        markerSettings?: {
            borderColor?: string;
            color?: string;
            hoveredBorderColor?: string;
            hoveredColor?: string;
            selectedBorderColor?: string;
            selectedColor?: string;
            font?: common.FontOptions;
            hoverEnabled?: boolean;
            selectionMode?: string;
            customize?: (arg: any) => MarkerOptions;
            click?: (arg: Proxy) => void;
            selectionChanged?: (arg: Proxy) => void;
        };
        controlBar?: {
            enabled?: boolean;
            borderColor?: string;
            color?: string;
        };
        tooltip?: {
            enabled?: boolean;
            borderColor?: string;
            color?: string;
            font?: common.FontOptions;
        };
        bounds?: {
            minLat?: number;
            maxLat?: number;
            minLon?: number;
            maxLon?: number;
        };
        center?: {
            lat?: number;
            lon?: number;
        };
        zoomFactor?: number;
    }
    export interface AreaOptions {
        borderColor?: string;
        color?: string;
        hoveredBorderColor?: string;
        hoveredColor?: string;
        selectedBorderColor?: string;
        selectedColor?: string;
        paletteIndex?: number;
        isSelected?: boolean;
    }
    export interface MarkerOptions {
        borderColor?: string;
        color?: string;
        hoveredBorderColor?: string;
        hoveredColor?: string;
        selectedBorderColor?: string;
        selectedColor?: string;
        isSelected?: boolean;
    }
    export class Proxy {
        type: string;
        attribute(name: string): any;
        selected(state: boolean): void;
        selected(): boolean;
    }
}
declare module DevExpress.viz.rangeSelector {
    export interface SelectedRange {
        startValue: any; endValue: any;
    }
    interface CustomizeTextArgument {
        value: any;
        valueText: string;
    }
    export interface RangeSelectorOptions {
        background?: {
            color?: string;
            image?: {
                location?: string;
                url?: string;
            }
            visible?: boolean;
        };
        behavior?: {
            allowSlidersSwap?: boolean;
            animationEnabled?: boolean;
            callSelectedRangeChanged?: string;
            manualRangeSelectionEnabled?: boolean;
            moveSelectedRangeByClick?: boolean;
            snapToTicks?: boolean;
        };
        chart?: {
            bottomIndent?: number;
            equalBarWidth?: {
                spacing?: number;
                width?: number;
            };
            dataPrepareSettings?: {
                checkTypeForAllData?: boolean;
                convertToAxisDataType?: boolean;
                sortingMethod?: any;
            };
            useAggregation?: boolean;
            series?: Array<viz.charts.series.SeriesOptions>;
            commonSeriesSettings?: viz.charts.series.commonSeriesSettings;
            topIndent?: number;
            valueAxis?: {
                max?: any; min?: any; inverted?: boolean;
                valueType?: string;
            };
        }
        containerBackgroundColor?: string;
        dataSource?: Array<{}>;
        dataSourceField?: string;
        margin?: {
            left?: number;
            top?: number;
            right?: number;
            bottom?: number;
        };
        redrawOnResize?: boolean;
        scale?: {
            startValue?: any; endValue?: any;
            label?: {
                customizeText?: (arg: CustomizeTextArgument) => string;
                font?: viz.common.FontOptions;
                format?: string;
                precision?: number;
                topIndent?: number;
                visible?: boolean;
            };
            majorTickInterval?: any; marker?: {
                label?: {
                    customizeText?: (arg: CustomizeTextArgument) => string;
                    format?: string;
                };
                separatorHeight?: number;
                textLeftIndent?: number;
                textTopIndent?: number;
                topIndent?: number;
                visible?: boolean;
            };
            maxRange?: any; minorTickCount?: number;
            placeHolderHeight?: number;
            setTicksAtUnitBeginning?: boolean;
            showCustomBoundaryTicks?: boolean;
            showMinorTicks?: boolean;
            tick?: {
                color?: string;
                opacity?: number;
                width?: number;
            };
            minorTickInterval?: any; useTicksAutoArrangement?: boolean;
            valueType?: string;
        }
        selectedRange?: SelectedRange;
        selectedRangeChaged?: (startValue: any, endValue: any) => void;
        shutter?: {
            color?: string;
            opacity?: string;
        }
        size?: {
            width?: number;
            height?: number;
        };
        sliderHandle?: {
            color?: string;
            opacity?: number;
            width?: string;
        };
        sliderMarker?: {
            color?: string;
            customizeText?: (arg: CustomizeTextArgument) => string;
            font?: viz.common.FontOptions;
            format?: string;
            invalidRangeColor?: string;
            padding?: number;
            placeHolderSize?: {
                height?: number;
                width?: {
                    left?: number;
                    right?: number;
                }
                precission?: number;
                visible?: boolean;
            }
        };
        theme?: string;
    }
}
declare module DevExpress.viz.sparklines {
    interface SparklineTooltipOptions {
        customizeText?: (arg: {
            firstValue?: string;
            lastValue?: string;
            maxValue?: string;
            minValue?: string;
            originalFirstValue?: any;
            originalLastValue?: any;
            originalMaxValue?: any;
            originalMinValue?: any;
        }) => string;
        enabled?: boolean;
        allowContainerResizing?: boolean;
        position?: string;
        format?: string;
        precision?: number;
        color?: string;
        font?: common.FontOptions;
    }
    interface z_BaseSparklineSettings {
        theme?: string;
        size?: {
            width?: number;
            height?: number;
        };
        tooltip?: SparklineTooltipOptions;
    }
    interface SparklineOptions extends z_BaseSparklineSettings {
        dataSource?: Array<any>;
        argumentField?: string;
        valueField?: string;
        type?: string;
        lineColor?: string;
        lineWidth?: number;
        showFirstLast?: boolean;
        showMinMax?: boolean;
        minColor?: string;
        maxColor?: string;
        firstLastColor?: string;
        barPositiveColor?: string;
        barNegativeColor?: string;
        winColor?: string;
        lossColor?: string;
        pointSymbol?: string;
        pointSize?: number;
        pointColor?: string;
        winlossThreshold?: number;
    }
    interface BulletTooltipOptions extends SparklineTooltipOptions {
        customizeText?: (arg: {
            originalValue?: any;
            originalTarget?: any;
            value?: string;
            target?: string;
        }) => string;
    }
    interface BulletOptions extends z_BaseSparklineSettings {
        value?: number;
        target?: number;
        endScaleValue?: number;
        color?: string;
        targetColor?: string;
        targetWidth?: number;
        targetVisible?: boolean;
        tooltip?: BulletTooltipOptions;
    }
}
interface JQuery {
    dxChart(options?: DevExpress.viz.charts.ChartOptions): JQuery;
    dxChart(method: string, param1?: any, param2?: any): any;
    dxPieChart(options?: DevExpress.viz.charts.PieOptions): JQuery;
    dxPieChart(method: string, param1?: any, param2?: any): any;
    dxRangeSelector(options?: DevExpress.viz.rangeSelector.RangeSelectorOptions): JQuery;
    dxRangeSelector(method: string, param1?: any, param2?: any): any;
    dxCircularGauge(options?: DevExpress.viz.gauges.CircularGaugeOptions): JQuery;
    dxCircularGauge(method: string, param1?: any, param2?: any): any;
    dxLinearGauge(options?: DevExpress.viz.gauges.LinearGaugeOptions): JQuery;
    dxLinearGauge(method: string, param1?: any, param2?: any): any;
    dxSparkline(options?: DevExpress.viz.sparklines.SparklineOptions): JQuery;
    dxSparkline(method: string, param1?: any, param2?: any): any;
    dxBullet(options?: DevExpress.viz.sparklines.BulletOptions): JQuery;
    dxBullet(method: string, param1?: any, param2?: any): any;
    dxVectorMap(options?: DevExpress.viz.map.VectorMapOptions): JQuery;
    dxVectorMap(method: string, param1?: any, param2?: any): any;
}