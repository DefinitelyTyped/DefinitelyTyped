
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

    interface FusionCharts {
        clone(overrides?: Object, argsOnly?: boolean): any;

        isActive(): boolean;

        chartType(value: string, options?: any): string;

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

    }

    interface FusionChartStatic {
        new (chartObject: ChartObject): FusionCharts;

        getObjectReference(elementId: string): Element;

        addEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: Object) => void): void;

        removeEventListener(type: string | string[], listener: (eventObject?: EventObject, eventArgs?: Object) => void): void;

        ready(callback: (fusionChartStatic?: FusionChartStatic) => any, context: any): FusionChartStatic;

        transcodeData(data: string | Object, source: ChartDataFormats, target: ChartDataFormats, advanced: boolean): any;



    }

}

declare module 'FusionCharts' {
    var FusionCharts: FusionCharts.FusionChartStatic;
    export = FusionCharts;
}

declare var FusionCharts: FusionCharts.FusionChartStatic;


