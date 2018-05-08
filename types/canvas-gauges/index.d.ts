// Type definitions for canvas-gauges v2.1.3
// Project: https://github.com/Mikhus/canvas-gauges
// Definitions by: Mikhus <https://github.com/Mikhus>
// Definitions: https://github.com/Mikhus/DefinitelyTyped

declare namespace CanvasGauges {
    export type FontStyle = 'normal' | 'italic' | 'oblique';
    export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' |
        '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

    export type RenderTarget = string|HTMLElement;

    export interface AnimationRule {
        (percent: number): number;
    }

    export interface Highlight {
        from: number,
        to: number,
        color: string
    }

    export interface EventListeners {
        [key: string]: Function|[Function]
    }

    export type MajorTicks = string[]|number[];

    export interface GenericOptions {
        renderTo: RenderTarget,
        width?: number,
        height?: number,
        minValue?: number,
        maxValue?: number,
        value?: number,
        units?: string|boolean,
        exactTicks?: boolean,
        majorTicks?: MajorTicks,
        minorTicks?: number,
        strokeTicks?: boolean,
        animatedValue?: boolean,
        animateOnInit?: boolean,
        title?: string|boolean,
        borders?: boolean,
        numbersMargin?: number,
        listeners?: EventListeners,
        valueInt?: number,
        valueDec?: number,
        majorTicksInt?: number,
        majorTicksDec?: number,
        animation?: boolean,
        animationDuration?: number,
        animationRule?: string|AnimationRule,
        colorPlate?: string,
        colorPlateEnd?: string,
        colorMajorTicks?: string,
        colorMinorTicks?: string,
        colorTitle?: string,
        colorUnits?: string,
        colorNumbers?: string,
        colorNeedle?: string,
        colorNeedleEnd?: string,
        colorValueText?: string,
        colorValueTextShadow?: string,
        colorBorderShadow?: string,
        colorBorderOuter?: string,
        colorBorderOuterEnd?: string,
        colorBorderMiddle?: string,
        colorBorderMiddleEnd?: string,
        colorBorderInner?: string,
        colorBorderInnerEnd?: string,
        colorValueBoxRect?: string,
        colorValueBoxRectEnd?: string,
        colorValueBoxBackground?: string,
        colorValueBoxShadow?: string,
        colorNeedleShadowUp?: string,
        colorNeedleShadowDown?: string,
        colorBarStroke?: string,
        colorBar?: string,
        colorBarProgress?: string,
        colorBarShadow?: string,
        fontNumbers?: string,
        fontTitle?: string,
        fontUnits?: string,
        fontValue?: string,
        fontTitleSize?: number,
        fontValueSize?: number,
        fontUnitsSize?: number,
        fontNumbersSize?: number,
        fontTitleStyle?: FontStyle,
        fontValueStyle?: FontStyle,
        fontUnitsStyle?: FontStyle,
        fontNumbersStyle?: FontStyle,
        fontTitleWeight?: FontWeight,
        fontValueWeight?: FontWeight,
        fontUnitsWeight?: FontWeight,
        fontNumbersWeight?: FontWeight,
        needle?: boolean,
        needleShadow?: boolean,
        needleType?: string,
        needleStart?: number,
        needleEnd?: number,
        needleWidth?: number,
        borderOuterWidth?: number,
        borderMiddleWidth?: number,
        borderInnerWidth?: number,
        borderShadowWidth?: number,
        valueBox?: boolean,
        valueBoxWidth?: number,
        valueBoxStroke?: number,
        valueText?: string,
        valueTextShadow?: boolean,
        valueBoxBorderRadius?: number,
        highlights?: Highlight[],
        highlightsWidth?: number,
        barWidth?: number,
        barStrokeWidth?: number,
        barProgress?: boolean,
        barShadow?: number
    }

    export interface RadialGaugeOptions extends GenericOptions {
        ticksAngle?: number,
        startAngle?: number,
        colorNeedleCircleOuter?: string,
        colorNeedleCircleOuterEnd?: string,
        colorNeedleCircleInner?: string,
        colorNeedleCircleInnerEnd?: string,
        needleCircleSize?: number,
        needleCircleInner?: boolean,
        needleCircleOuter?: boolean,
        animationTarget?: string,
        useMinPath?: boolean
    }

    export interface LinearGaugeOptions extends GenericOptions {
        borderRadius?: number,
        barBeginCircle?: number,
        colorBarEnd?: string,
        colorBarProgressEnd?: string,
        tickSide?: string,
        needleSide?: string,
        numberSide?: string,
        ticksWidth?: number,
        ticksWidthMinor?: number,
        ticksPadding?: number,
        barLength?: number
    }

    export interface DrawEventCallback {
        (percent: number): any;
    }

    export interface EndEventCallback {
        (): any;
    }

    export interface rules {
        linear: AnimationRule,
        quad: AnimationRule,
        dequad: AnimationRule,
        quint: AnimationRule,
        dequint: AnimationRule,
        cycle: AnimationRule,
        decycle: AnimationRule,
        bounce: AnimationRule,
        debounce: AnimationRule,
        elastic: AnimationRule,
        delastic: AnimationRule
    }

    export class Animation {
        public duration: number;
        public rule: string|AnimationRule;
        public draw: DrawEventCallback;
        public end: EndEventCallback;

        public static rules: rules;

        constructor(rule?: string|AnimationRule, duration?: number,
                    draw?: DrawEventCallback, end?: EndEventCallback);

        public animate(draw?: DrawEventCallback, end?: EndEventCallback): any;
        public destroy(): any;
    }

    export class SmartCanvas {
        public element: HTMLCanvasElement;
        public elementClone: HTMLCanvasElement;
        public context: CanvasRenderingContext2D;
        public contextClone: CanvasRenderingContext2D;
        public drawWidth: number;
        public drawHeight: number;
        public drawX: number;
        public drawY: number;
        public minSide: number;
        public width: number;
        public height: number;

        constructor(element: HTMLCanvasElement,
                    width?: number,
                    height?: number);

        public init(): any;
        public onRedraw(): any;
        public destroy(): any;
        public commit(): SmartCanvas;
        public redraw(): SmartCanvas;

        public pixelRatio: number;
        public static redraw(): any;
        public static collection: Array<SmartCanvas>;
    }

    export class DomObserver {
        public Type: BaseGauge;
        public mutationsObserved: boolean;
        public isObservable: boolean;
        public options: GenericOptions;
        public element: string;
        public type: string;

        constructor(options: GenericOptions,
                    element: string,
                    type: string);

        public isValidNode(node: Node|HTMLElement): boolean;
        public traverse(): any;
        public observe(records: MutationRecord[]): any;
        public process(node: Node|HTMLElement): BaseGauge;

        public static parse(value: any): any;
        public static toDashed(camelCase: string): string;
        public static toAttributeName(str: string): string;
        static domReady(handler: Function): any;
    }

    export abstract class BaseGauge {
        public type: BaseGauge;
        public options: GenericOptions;
        public canvas: SmartCanvas;
        public animation: Animation;
        public value: number;
        public static readonly version: number;

        constructor(options: GenericOptions);

        public update(options: GenericOptions): BaseGauge;
        public destroy(): any;
        public abstract draw(): BaseGauge;

        public static initialize(type: string, options: GenericOptions): any;
        public static fromElement(element: HTMLElement): any;
        public static ensureValue(value: number): number;
    }

    export class RadialGauge extends BaseGauge {
        public type: RadialGauge;
        public options: RadialGaugeOptions;

        constructor(options: RadialGaugeOptions);

        public draw(): RadialGauge;
    }

    export class LinearGauge extends BaseGauge {
        public type: LinearGauge;
        public options: LinearGaugeOptions;

        constructor(options: LinearGaugeOptions);

        public draw(): LinearGauge;
    }

    export interface Collection extends Array<BaseGauge> {
        get: (id: number | string) => BaseGauge;
    }
}

declare module 'canvas-gauges' {
    export = CanvasGauges;
}

interface Document {
    gauges: CanvasGauges.Collection;
}

interface Window {
    BaseGauge: CanvasGauges.BaseGauge;
    RadialGauge: CanvasGauges.RadialGauge;
    LinearGauge: CanvasGauges.LinearGauge;
}
