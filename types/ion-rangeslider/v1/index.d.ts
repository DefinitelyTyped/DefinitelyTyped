// Type definitions for ion-rangeslider 1.9
// Project: https://github.com/IonDen/ion.rangeSlider/
// Definitions by: Douglas Eichelberger <https://github.com/dduugg>
//                 Karel van de Plassche <https://github.com/Karel-van-de-Plassche>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// API documentation: http://ionden.com/a/plugins/ion.rangeSlider/en.html

interface JQuery {
    ionRangeSlider(): JQuery;
    ionRangeSlider(options: IonRangeSliderOptions): JQuery;
    ionRangeSlider(method: string): JQuery;
    ionRangeSlider(method: string, options: IonRangeSliderOptions): JQuery;
}

interface IonRangeSliderOptions {
    disable?: boolean;
    from?: number;
    hasGrid?: boolean;
    hideFromTo?: boolean;
    hideMinMax?: boolean;
    max?: number;
    maxPostfix?: string;
    min?: number;
    onChange?: (obj: IonRangeSliderEvent) => void;
    onFinish?: (obj: IonRangeSliderEvent) => void;
    onLoad?: (obj: IonRangeSliderEvent) => void;
    postfix?: string;
    prefix?: string;
    prettify?: boolean;
    step?: number;
    to?: number;
    type?: string;
    values?: any[];
}

interface IonRangeSliderEvent {
    fromNumber: number;
    fromPers: number;
    fromValue?: any;
    fromX: number;
    fromX_pure?: number;
    input: JQuery;
    max: number;
    min: number;
    slider: JQuery;
    toNumber: number;
    toPers: number;
    toValue?: number;
    toX: number;
    toX_pure?: number;
}
