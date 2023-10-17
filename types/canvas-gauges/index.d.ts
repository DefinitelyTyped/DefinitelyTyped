declare namespace CanvasGauges {
    export type FontStyle = "normal" | "italic" | "oblique";
    export type FontWeight =
        | "normal"
        | "bold"
        | "bolder"
        | "lighter"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";

    export type RenderTarget = string | HTMLElement;

    export interface AnimationRule {
        (percent: number): number;
    }

    export interface Highlight {
        from: number;
        to: number;
        color: string;
    }

    export interface EventListeners {
        [key: string]: Function | [Function];
    }

    export type MajorTicks = string[] | number[];

    export interface GenericOptions {
        renderTo: RenderTarget;
        width?: number | undefined;
        height?: number | undefined;
        minValue?: number | undefined;
        maxValue?: number | undefined;
        value?: number | undefined;
        units?: string | boolean | undefined;
        exactTicks?: boolean | undefined;
        majorTicks?: MajorTicks | undefined;
        minorTicks?: number | undefined;
        strokeTicks?: boolean | undefined;
        animatedValue?: boolean | undefined;
        animateOnInit?: boolean | undefined;
        title?: string | boolean | undefined;
        borders?: boolean | undefined;
        numbersMargin?: number | undefined;
        listeners?: EventListeners | undefined;
        valueInt?: number | undefined;
        valueDec?: number | undefined;
        majorTicksInt?: number | undefined;
        majorTicksDec?: number | undefined;
        animation?: boolean | undefined;
        animationDuration?: number | undefined;
        animationRule?: string | AnimationRule | undefined;
        colorPlate?: string | undefined;
        colorPlateEnd?: string | undefined;
        colorMajorTicks?: string | undefined;
        colorMinorTicks?: string | undefined;
        colorTitle?: string | undefined;
        colorUnits?: string | undefined;
        colorNumbers?: string | undefined;
        colorNeedle?: string | undefined;
        colorNeedleEnd?: string | undefined;
        colorValueText?: string | undefined;
        colorValueTextShadow?: string | undefined;
        colorBorderShadow?: string | undefined;
        colorBorderOuter?: string | undefined;
        colorBorderOuterEnd?: string | undefined;
        colorBorderMiddle?: string | undefined;
        colorBorderMiddleEnd?: string | undefined;
        colorBorderInner?: string | undefined;
        colorBorderInnerEnd?: string | undefined;
        colorValueBoxRect?: string | undefined;
        colorValueBoxRectEnd?: string | undefined;
        colorValueBoxBackground?: string | undefined;
        colorValueBoxShadow?: string | undefined;
        colorNeedleShadowUp?: string | undefined;
        colorNeedleShadowDown?: string | undefined;
        colorBarStroke?: string | undefined;
        colorBar?: string | undefined;
        colorBarProgress?: string | undefined;
        colorBarShadow?: string | undefined;
        fontNumbers?: string | undefined;
        fontTitle?: string | undefined;
        fontUnits?: string | undefined;
        fontValue?: string | undefined;
        fontTitleSize?: number | undefined;
        fontValueSize?: number | undefined;
        fontUnitsSize?: number | undefined;
        fontNumbersSize?: number | undefined;
        fontTitleStyle?: FontStyle | undefined;
        fontValueStyle?: FontStyle | undefined;
        fontUnitsStyle?: FontStyle | undefined;
        fontNumbersStyle?: FontStyle | undefined;
        fontTitleWeight?: FontWeight | undefined;
        fontValueWeight?: FontWeight | undefined;
        fontUnitsWeight?: FontWeight | undefined;
        fontNumbersWeight?: FontWeight | undefined;
        needle?: boolean | undefined;
        needleShadow?: boolean | undefined;
        needleType?: string | undefined;
        needleStart?: number | undefined;
        needleEnd?: number | undefined;
        needleWidth?: number | undefined;
        borderOuterWidth?: number | undefined;
        borderMiddleWidth?: number | undefined;
        borderInnerWidth?: number | undefined;
        borderShadowWidth?: number | undefined;
        valueBox?: boolean | undefined;
        valueBoxWidth?: number | undefined;
        valueBoxStroke?: number | undefined;
        valueText?: string | undefined;
        valueTextShadow?: boolean | undefined;
        valueBoxBorderRadius?: number | undefined;
        highlights?: Highlight[] | undefined;
        highlightsWidth?: number | undefined;
        barWidth?: number | undefined;
        barStrokeWidth?: number | undefined;
        barProgress?: boolean | undefined;
        barShadow?: number | undefined;
    }

    export const GenericOptions: GenericOptions;

    export interface RadialGaugeOptions extends GenericOptions {
        ticksAngle?: number | undefined;
        startAngle?: number | undefined;
        colorNeedleCircleOuter?: string | undefined;
        colorNeedleCircleOuterEnd?: string | undefined;
        colorNeedleCircleInner?: string | undefined;
        colorNeedleCircleInnerEnd?: string | undefined;
        needleCircleSize?: number | undefined;
        needleCircleInner?: boolean | undefined;
        needleCircleOuter?: boolean | undefined;
        animationTarget?: string | undefined;
        useMinPath?: boolean | undefined;
    }

    export interface LinearGaugeOptions extends GenericOptions {
        borderRadius?: number | undefined;
        barBeginCircle?: number | undefined;
        colorBarEnd?: string | undefined;
        colorBarProgressEnd?: string | undefined;
        tickSide?: string | undefined;
        needleSide?: string | undefined;
        numberSide?: string | undefined;
        ticksWidth?: number | undefined;
        ticksWidthMinor?: number | undefined;
        ticksPadding?: number | undefined;
        barLength?: number | undefined;
    }

    export interface DrawEventCallback {
        (percent: number): any;
    }

    export interface EndEventCallback {
        (): any;
    }

    export interface rules {
        linear: AnimationRule;
        quad: AnimationRule;
        dequad: AnimationRule;
        quint: AnimationRule;
        dequint: AnimationRule;
        cycle: AnimationRule;
        decycle: AnimationRule;
        bounce: AnimationRule;
        debounce: AnimationRule;
        elastic: AnimationRule;
        delastic: AnimationRule;
    }

    export class Animation {
        public duration: number;
        public rule: string | AnimationRule;
        public draw: DrawEventCallback;
        public end: EndEventCallback;

        public static rules: rules;

        constructor(rule?: string | AnimationRule, duration?: number, draw?: DrawEventCallback, end?: EndEventCallback);

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

        constructor(element: HTMLCanvasElement, width?: number, height?: number);

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

        constructor(options: GenericOptions, element: string, type: string);

        public isValidNode(node: Node | HTMLElement): boolean;
        public traverse(): any;
        public observe(records: MutationRecord[]): any;
        public process(node: Node | HTMLElement): BaseGauge;

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

        public on(event: "init", listeners: () => void): void;
        public on(event: "render", listeners: () => void): void;
        public on(event: "destroy", listeners: () => void): void;
        public on(event: "animationStart", listeners: () => void): void;
        public on(event: "animate", listeners: (percent: number, value: number) => void): void;
        public on(event: "animationEnd", listeners: () => void): void;
        public on(event: "beforePlate", listeners: () => void): void;
        public on(event: "beforeHighlights", listeners: () => void): void;
        public on(event: "beforeMinorTicks", listeners: () => void): void;
        public on(event: "beforeMajorTicks", listeners: () => void): void;
        public on(event: "beforeNumbers", listeners: () => void): void;
        public on(event: "beforeTitle", listeners: () => void): void;
        public on(event: "beforeUnits", listeners: () => void): void;
        public on(event: "beforeProgressBar", listeners: () => void): void;
        public on(event: "beforeValueBox", listeners: () => void): void;
        public on(event: "beforeNeedle", listeners: () => void): void;
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

declare module "canvas-gauges" {
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
