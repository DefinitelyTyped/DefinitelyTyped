// Type definitions for canvas-gauges
// Project: https://github.com/Mikhus/canvas-gauges
// Definitions by: Mikhus <ttps://github.com/Mikhus>
// Definitions: https://github.com/Mikhus/DefinitelyTyped

declare type RenderTarget = string|HTMLElement;

interface AnimationRule {
    (percent: number): number;
}

interface Highlight {
    from: number,
    to: number,
    color: string
}

declare type MajorTicks = string[]|number[];

interface GenericOptions {
    renderTo: RenderTarget,
    width?: number,
    height?: number,
    minValue?: number,
    maxValue?: number,
    value?: number,
    units?: string|boolean,
    majorTicks?: MajorTicks,
    minorTicks?: number,
    strokeTicks?: boolean,
    animatedValue?: boolean,
    title?: string|boolean,
    borders?: boolean,
    valueInt?: number,
    valueDec?: number,
    majorTicksInt?: number,
    majorTicksDec?: number,
    animation?: boolean,
    animationDuration?: number,
    animationRule?: string|AnimationRule,
    colorPlate?: string,
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
    valueBoxStroke?: number,
    valueText?: string,
    valueTextShadow?: boolean,
    valueBoxBorderRadius?: number,
    highlights?: Highlight[],
    fontNumbers?: string,
    fontTitle?: string,
    fontUnits?: string,
    fontValue?: string,
    fontTitleSize?: number,
    fontValueSize?: number,
    fontUnitsSize?: number,
    fontNumbersSize?: number
}

interface RadialGaugeOptions extends GenericOptions {
    ticksAngle?: number,
    startAngle?: number,
    colorNeedleCircleOuter?: string,
    colorNeedleCircleOuterEnd?: string,
    colorNeedleCircleInner?: string,
    colorNeedleCircleInnerEnd?: string,
    needleCircleSize?: number,
    needleCircleInner?: boolean,
    needleCircleOuter?: boolean,
    animationTarget?: string
}

interface LinearGaugeOptions extends GenericOptions {
    borderRadius?: number,
    barBeginCircle?: number,
    barWidth?: number,
    barStrokeWidth?: number,
    barProgress?: boolean,
    colorBar?: string,
    colorBarEnd?: string,
    colorBarStroke?: string,
    colorBarProgress?: string,
    colorBarProgressEnd?: string,
    tickSide?: string,
    needleSide?: string,
    numberSide?: string,
    ticksWidth?: number,
    ticksWidthMinor?: number,
    ticksPadding?: number,
    barLength?: number
}

interface DrawEventCallback {
    (percent: number): any;
}

interface EndEventCallback {
    (): any;
}

interface rules {
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

declare class Animation {
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

declare class SmartCanvas {
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

declare class DomObserver {
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

declare abstract class BaseGauge {
    public type: BaseGauge;
    public options: GenericOptions;
    public canvas: SmartCanvas;
    public animation: Animation;
    public value: number;

    constructor(options: GenericOptions);

    public update(options: GenericOptions): BaseGauge;
    public destroy(): any;
    public abstract draw(): BaseGauge;

    public static initialize(type: string, options: GenericOptions): any;
}

declare class RadialGauge extends BaseGauge {
    public type: RadialGauge;
    public options: RadialGaugeOptions;

    constructor(options: RadialGaugeOptions);

    public draw(): RadialGauge;
}

declare class LinearGauge extends BaseGauge {
    public type: LinearGauge;
    public options: LinearGaugeOptions;

    constructor(options: LinearGaugeOptions);

    public draw(): LinearGauge;
}

interface Collection extends Array<BaseGauge> {
    get: (id: number | string) => BaseGauge;
}

interface DocumentWithGauges extends Document {
    gauges: Collection
}
