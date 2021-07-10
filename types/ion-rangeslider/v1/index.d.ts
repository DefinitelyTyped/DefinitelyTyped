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
    disable?: boolean | undefined;
    from?: number | undefined;
    hasGrid?: boolean | undefined;
    hideFromTo?: boolean | undefined;
    hideMinMax?: boolean | undefined;
    max?: number | undefined;
    maxPostfix?: string | undefined;
    min?: number | undefined;
    onChange?: ((obj: IonRangeSliderEvent) => void) | undefined;
    onFinish?: ((obj: IonRangeSliderEvent) => void) | undefined;
    onLoad?: ((obj: IonRangeSliderEvent) => void) | undefined;
    postfix?: string | undefined;
    prefix?: string | undefined;
    prettify?: boolean | undefined;
    step?: number | undefined;
    to?: number | undefined;
    type?: string | undefined;
    values?: any[] | undefined;
}

interface IonRangeSliderEvent {
    fromNumber: number;
    fromPers: number;
    fromValue?: any;
    fromX: number;
    fromX_pure?: number | undefined;
    input: JQuery;
    max: number;
    min: number;
    slider: JQuery;
    toNumber: number;
    toPers: number;
    toValue?: number | undefined;
    toX: number;
    toX_pure?: number | undefined;
}
