// Type definitions for gaugeJS 1.3
// Project: https://github.com/bernii/gauge.js#readme
// Definitions by: Bradley Odell <https://github.com/BTOdell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PointerOptions {
    length: number;
    strokeWidth: number;
    color: string;
}

interface BaseOptions {
    angle: number;
    lineWidth: number;
    radiusScale: number;
    pointer: PointerOptions;
    limitMax: boolean;
    limitMin: boolean;
    colorStart: string;
    colorStop: string;
    strokeColor: string;
    generateGradient: boolean;
    highDpiSupport: boolean;
}

interface StaticZoneOptions {
    strokeStyle: string;
    min: number;
    max: number;
}

export interface GaugeOptions extends BaseOptions {
    percentColors?: Array<[number, string]>;
    staticLabels?: {
        font: string;
        labels: number[];
        color?: string;
        fractionDigits?: number;
    };
    staticZones?: StaticZoneOptions[] | Array<StaticZoneOptions & { height: number; }>;
    renderTicks?: {
        divisions: number;
        divWidth: number;
        divLength: number;
        divColor: string;
        subDivisions: number;
        subWidth: number;
        subLength: number;
        subColor: string;
    };
    pointer: PointerOptions & {
        iconPath?: string;
        iconScale?: number;
        iconAngle?: number;
    };
}

export interface TextRendererElement {
    innerHTML: string;
    style: {
        fontSize: string;
    };
}

declare class TextRenderer {
    constructor(element: TextRendererElement, fractionalDigits: number);

    private render(gauge: Gauge): string;
}

declare class ValueUpdater {
    /**
     * The animation speed of the gauge pointer (default is 32)
     */
    animationSpeed: number;

    constructor(addToAnimationQueue?: boolean | null, clear?: boolean | null);

    update(force?: boolean | null): boolean;
}

declare class BaseGauge extends ValueUpdater {
    /**
     * ?
     * @param textField
     */
    setTextField(textField: TextRenderer | TextRendererElement): TextRenderer;

    /**
     * Sets the minimum gauge value (prefer over gauge.minValue)
     * @param minValue
     */
    setMinValue(minValue: number): number[] | undefined;

    /**
     * Configure the gauge renderer with the given options.
     * @param options The configuration options for the gauge.
     */
    setOptions(options?: GaugeOptions | null): this;
}

export class Gauge extends BaseGauge {
    /**
     * The max gauge value.
     */
    maxValue: number;

    /**
     * Creates a new gauge renderer for the given canvas element.
     * @param canvas The canvas element to render to.
     */
    constructor(canvas: HTMLCanvasElement);

    /**
     * Configure the gauge renderer with the given options.
     * @param options The configuration options for the gauge.
     */
    setOptions(options?: GaugeOptions | null): this;

    /**
     * Sets the current value of the gauge pointer.
     * @param value
     */
    set(value: number): boolean;
}

export { };
