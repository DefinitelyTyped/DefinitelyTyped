// Type definitions for FusionCharts 3.11.2
// Project: http://www.fusioncharts.com
// Definitions by: Shivaraj KV <https://github.com/shivarajkv>
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

        dataSource?: string | Object;

        events?: Object;

        link?: Object;

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

        enable(state:any,outputTo?:(message: any) =>any,outputFormat?:any):void

        enableFirebugLite():any;
    }

    interface FusionCharts {
        clone(overrides?: Object, argsOnly?: boolean): any;

        isActive(): boolean;

        chartType(value?: string, options?: any): string;

        addEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: Object) => void): void;

        removeEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: Object) => void): void;

        configureLink(param: Object | any[], level?: number): void;

        setChartAttribute(attributes: ChartObject | String, value?: string): void;

        getChartAttribute(attribute?: string | string[]): ChartObject;

        getXMLData(): any;

        setXMLData(data: string | Object): void;

        setXMLUrl(url: string): void;

        setChartDataUrl(url: string, format: ChartDataFormats): void;

        setChartData(data: string | Object, format: ChartDataFormats): void;

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

        setDataXML(data: string | Object): void;

        setDataURL(url: string): void;

        hasRendered(): boolean;

        setTransparent(transparency?: boolean): void;

        isPlotItemSliced(index: number): boolean;

        slicePlotItem(index: number, slice: boolean): void;

        centerLabel(labelText: string, options?: Object): void;

        startingAngle(angle?: number, relative?: boolean): void;

        zoomOut(): void;

        zoomTo(startIndex: number, endIndex: number): void;

        resetChart(): void;

        setZoomMode(yes: boolean): void;

        getViewStartIndex(): number;

        getViewEndIndex(): number;

        print(options?: Object): void;

        exportChart(options?: Object): void;

        getSVGString(): string;

        lockResize(state: boolean): boolean;

        showChartMessage(text: string, modal?: boolean, cancelable?: boolean): void;

        getJSONData(): JSON;

        setJSONData(data: string | Object): void;

        setJSONUrl(url: string): void;

        getCSVData(): any;

        getDataAsCSV(): any;

        render(containerElement?: string | Element, insertMode?: string, callback?: () => any): FusionCharts;

        resizeTo(width: number | string, height: number | string): any;

        dispose(): void;

        configure(options: Object): void;

        ref: Object;

    }

    interface FusionChartStatic {
        new (chartObject: ChartObject|Object): FusionCharts;

        (chartId: string): FusionCharts;

        getObjectReference(elementId: string): Element;

        addEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: Object) => void): void;

        removeEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: Object) => void): void;

        ready(callback: (fusionChartStatic?: FusionChartStatic) => any, context?: any): FusionChartStatic;

        transcodeData(data: string | Object, source: ChartDataFormats, target: ChartDataFormats, advanced: boolean): any;

        batchExport(options: Object): void;

        formatNumber(num: number, type?: string, config?: Object): Element;

        setCurrentRenderer(name: string): void

        getCurrentRenderer(): string;

        render(options?: ChartObject, callback?: () => any): FusionCharts;

        version: string[];

        items: Object;

        options: Object;

        debugger:Debugger;


    }

}

declare module 'FusionCharts' {
    var FusionCharts: FusionCharts.FusionChartStatic;
    export = FusionCharts;
}

declare var FusionCharts: FusionCharts.FusionChartStatic;


