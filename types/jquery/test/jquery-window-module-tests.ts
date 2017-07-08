import * as jq from 'jquery';

const $window = jq(window);
// $ExpectType JQuery<HTMLElement>
$window;

class CanvasLayersDirective {
    private readonly $renderingCanvas: JQuery<HTMLCanvasElement>;
    private readonly $offscreenCanvas: JQuery<HTMLCanvasElement>;

    constructor(elementRef: { nativeElement: any; }) {
        // This type assertion results in an error when exporting 'typeof factory & JQueryStatic' where
        // 'factory' is jQuery's factory function.
        const $Canvas = $ as JQueryStatic<HTMLCanvasElement>;
        this.$renderingCanvas = $Canvas(elementRef.nativeElement);
        this.$offscreenCanvas = $Canvas(document.createElement('canvas'));
    }
}
