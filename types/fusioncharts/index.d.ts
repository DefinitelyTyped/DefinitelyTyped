// Type definitions for fusioncharts 3.11
// Project: http://www.fusioncharts.com
// Definitions by: Rohit Kumar <https://github.com/rohitkr>, Shivaraj KV <https://github.com/shivarajkv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace FusionCharts {

    type ChartDataFormats = 'json' | 'jsonurl' | 'csv' | 'xml' | 'xmlurl';

    type ImageHAlign = 'left' | 'right' | 'middle';

    type ImageVAlign = 'top' | 'bottom' | 'middle';

    interface EventObject {
        type: string;

        eventId: number;

        sender: FusionCharts;

        cancelled: boolean;

        stopPropagation: () => void;

        prevented: boolean;

        preventDefault: () => void;

        detached: boolean;

        detachHandler: () => void;
    }

    interface ChartObject {

        type?: string;

        id?: string;

        width?: number | string;

        height?: number | string;

        renderAt?: string;

        dataFormat?: ChartDataFormats;

        dataSource?: string | {};

        events?: {};

        link?: {};

        showDataLoadingMessage?: boolean;

        showChartLoadingMessage?: boolean;

        baseChartMessageFont?: string;

        baseChartMessageFontSize?: string;

        baseChartMessageColor?: string;

        dataLoadStartMessage?: string;

        dataLoadErrorMessage?: string;

        dataInvalidMessage?: string;

        dataEmptyMessage?: string;

        typeNotSupportedMessage?: string;

        loadMessage?: string;

        renderErrorMessage?: string;

        containerBackgroundColor?: string;

        containerBackgroundOpacity?: number;

        containerClassName?: string;

        baseChartMessageImageHAlign?: ImageHAlign;

        dataLoadErrorMessageImageVAlign?: ImageVAlign;

        dataLoadErrorMessageImageAlpha?: number;

        dataLoadErrorMessageImageScale?: number;

        dataLoadStartMessageImageHAlign?: ImageHAlign;

        dataLoadStartMessageImageVAlign?: ImageVAlign;

        dataLoadStartMessageImageAlpha?: number;

        dataLoadStartMessageImageScale?: number;

        dataInvalidMessageImageHAlign?: ImageHAlign;

        dataInvalidMessageImageVAlign?: ImageVAlign;

        dataInvalidMessageImageAlpha?: number;

        dataInvalidMessageImageScale?: number;

        dataEmptyMessageImageHAlign?: ImageHAlign;

        dataEmptyMessageImageVAlign?: ImageVAlign;

        dataEmptyMessageImageAlpha?: number;

        dataEmptyMessageImageScale?: number;

        renderErrorMessageImageHAlign?: ImageHAlign;

        renderErrorMessageImageVAlign?: ImageVAlign;

        renderErrorMessageImageAlpha?: number;

        renderErrorMessageImageScale?: number;

        loadMessageImageHAlign?: ImageHAlign;

        loadMessageImageVAlign?: ImageVAlign;

        loadMessageImageAlpha?: number;

        loadMessageImageScale?: number;
    }

    interface Debugger {
        outputFormat(format: any): void;

        outputTo(callback: (message: any) => any): void;

        enable(state: any, outputTo?: (message: any) => any, outputFormat?: any): void;

        enableFirebugLite(): any;
    }

    interface FusionCharts {
        clone(overrides?: {}, argsOnly?: boolean): any;

        isActive(): boolean;

        chartType(value?: string, options?: any): string;

        addEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        removeEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        configureLink(param: {} | any[], level?: number): void;

        setChartAttribute(attributes: ChartObject | string, value?: string): void;

        getChartAttribute(attribute?: string | string[]): ChartObject;

        getXMLData(): any;

        setXMLData(data: string | {}): void;

        setXMLUrl(url: string): void;

        setChartDataUrl(url: string, format: ChartDataFormats): void;

        setChartData(data: string | {}, format: ChartDataFormats): void;

        getChartData(format: ChartDataFormats): any;

        dataReady(available?: boolean): boolean;

        feedData(stream: string): void;

        getData(): any;

        getDataWithId(): any;

        setData(value: number, label: string): void;

        stopUpdate(): void;

        restartUpdate(): void;

        isUpdateActive(): boolean;

        clearChart(): void;

        getSWFHTML(): any;

        addVariable(): void;

        getXML(): any;

        setDataXML(data: string | {}): void;

        setDataURL(url: string): void;

        hasRendered(): boolean;

        setTransparent(transparency?: boolean): void;

        isPlotItemSliced(index: number): boolean;

        slicePlotItem(index: number, slice: boolean): void;

        centerLabel(labelText: string, options?: {}): void;

        startingAngle(angle?: number, relative?: boolean): void;

        zoomOut(): void;

        zoomTo(startIndex: number, endIndex: number): void;

        resetChart(): void;

        setZoomMode(yes: boolean): void;

        getViewStartIndex(): number;

        getViewEndIndex(): number;

        print(options?: {}): void;

        exportChart(options?: {}): void;

        getSVGString(): string;

        lockResize(state: boolean): boolean;

        showChartMessage(text: string, modal?: boolean, cancelable?: boolean): void;

        getJSONData(): JSON;

        setJSONData(data: string | {}): void;

        setJSONUrl(url: string): void;

        getCSVData(): any;

        getDataAsCSV(): any;

        render(containerElement?: string | Element, insertMode?: string, callback?: () => any): FusionCharts;

        resizeTo(width: number | string, height: number | string): any;

        dispose(): void;

        configure(options: {}): void;

        ref: {};

    }

    interface FusionChartStatic {
        new (chartObject: ChartObject|{}): FusionCharts;

        (chartId: string): FusionCharts;

        getObjectReference(elementId: string): Element;

        addEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        removeEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: {}) => void): void;

        ready(callback: (fusionChartStatic?: FusionChartStatic) => any, context?: any): FusionChartStatic;

        transcodeData(data: string | {}, source: ChartDataFormats, target: ChartDataFormats, advanced: boolean): any;

        batchExport(options: {}): void;

        formatNumber(num: number, type?: string, config?: {}): Element;

        setCurrentRenderer(name: string): void;

        getCurrentRenderer(): string;

        render(options?: ChartObject, callback?: () => any): FusionCharts;

        version: string[];

        items: {};

        options: {};

        debugger: Debugger;


    }

}

declare var FusionCharts: FusionCharts.FusionChartStatic;
export = FusionCharts;
export as namespace FusionCharts;
