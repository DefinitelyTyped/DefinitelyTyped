// Type definitions for ion-rangeslider 11.1
// Project: https://github.com/IonDen/ion.rangeSlider/
// Definitions by: Karel van de Plassche <https://github.com/Karel-van-de-Plassche>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// API documentation: http://ionden.com/a/plugins/ion.rangeSlider/en.html
// Based on global-modifying module template file

declare global {
    interface JQuery {
        destroy(): void;
        ionRangeSlider(options?: IonRangeSliderOptions): JQuery;
        reset(): void;
        update(option: IonRangeSliderOptions): void;
    }
}

export interface IonRangeSliderOptions {
    // Put options here
}

export interface IonRangeSliderEvent {
    // Put callback here
}
