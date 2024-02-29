export as namespace steelseries;

/* Tools */
export class rgbaColor {
    constructor(r: number, g: number, b: number, a: number);
    getRed(): number;
    getGreen(): number;
    getBlue(): number;
    setRed(r: number): void;
    setGreen(g: number): void;
    setBlue(b: number): void;
    setAlpha(a: number): void;
    getRgbaColor(): string;
    getRgbColor(): string;
    getHrxColor(): string;
}

export class ConicalGradient {
    constructor(fractions: number[], colors: rgbaColor[]);
    fillCircle(cts: CanvasRenderingContext2D, centerX: number, centerY: number, innerX: number, outerX: number): void;
    fillRect(
        ctx: CanvasRenderingContext2D,
        centerX: number,
        centerY: number,
        width: number,
        height: number,
        thicknessX: number,
        thicknessY: number,
    ): void;
}

export class gradientWrapper {
    constructor(start: number, end: number, fractions: number[], colors: rgbaColor[]);
    getColorAt(fraction: number): rgbaColor | number[];
    getStart(): number;
    getEnd(): number;
}

export function setAlpha(hex: string, alpha: number): string;

export function getColorFromFraction(
    sourceColor: rgbaColor,
    destinationColor: rgbaColor,
    range: number,
    fraction: number,
    returnRawData?: boolean,
): rgbaColor | number[];

export interface Section {
    start: number;
    stop: number;
    color: string;
}
export function Section(start: number, stop: number, color: string): Section;

/* Constants */
declare class Type {
    constructor(type: string);
    type: string;
}

export class BackgroundColor {
    constructor(
        gradientStart: rgbaColor,
        gradientFraction: rgbaColor,
        gradientStop: rgbaColor,
        labelColor: rgbaColor,
        symbolColor: rgbaColor,
        name: string,
    );
    gradientStart: rgbaColor;
    gradientFraction: rgbaColor;
    gradientStop: rgbaColor;
    labelColor: rgbaColor;
    symbolColor: rgbaColor;
    name: string;
}
export namespace BackgroundColor {
    const DARK_GRAY: BackgroundColor;
    const SATIN_GRAY: BackgroundColor;
    const LIGHT_GRAY: BackgroundColor;
    const WHITE: BackgroundColor;
    const BLACK: BackgroundColor;
    const BEIGE: BackgroundColor;
    const BROWN: BackgroundColor;
    const RED: BackgroundColor;
    const GREEN: BackgroundColor;
    const BLUE: BackgroundColor;
    const ANTHRACITE: BackgroundColor;
    const MUD: BackgroundColor;
    const PUNCHED_SHEET: BackgroundColor;
    const CARBON: BackgroundColor;
    const STAINLESS: BackgroundColor;
    const BRUSHED_METAL: BackgroundColor;
    const BRUSHED_STAINLESS: BackgroundColor;
    const TURNED: BackgroundColor;
}

export class LcdColor {
    constructor(
        gradientStartColor: string,
        gradientFraction1Color: string,
        gradientFraction2Color: string,
        gradientFraction3Color: string,
        gradientStopColor: string,
        textColor: string,
    );
    gradientStartColor: string;
    gradientFraction1Color: string;
    gradientFraction2Color: string;
    gradientFraction3Color: string;
    gradientStopColor: string;
    textColor: string;
}
export namespace LcdColor {
    const BEIGE: LcdColor;
    const BLUE: LcdColor;
    const ORANGE: LcdColor;
    const RED: LcdColor;
    const YELLOW: LcdColor;
    const WHITE: LcdColor;
    const GRAY: LcdColor;
    const BLACK: LcdColor;
    const GREEN: LcdColor;
    const BLUE2: LcdColor;
    const BLUE_BLACK: LcdColor;
    const BLUE_DARKBLUE: LcdColor;
    const BLUE_GRAY: LcdColor;
    const STANDARD: LcdColor;
    const STANDARD_GREEN: LcdColor;
    const BLUE_BLUE: LcdColor;
    const RED_DARKRED: LcdColor;
    const DARKBLUE: LcdColor;
    const LILA: LcdColor;
    const BLACKRED: LcdColor;
    const DARKGREEN: LcdColor;
    const AMBER: LcdColor;
    const LIGHTBLUE: LcdColor;
    const SECTIONS: LcdColor;
}

export class ColorDef {
    constructor(
        veryDark: rgbaColor,
        dark: rgbaColor,
        medium: rgbaColor,
        light: rgbaColor,
        lighter: rgbaColor,
        veryLight: rgbaColor,
    );
    veryDark: rgbaColor;
    dark: rgbaColor;
    medium: rgbaColor;
    light: rgbaColor;
    lighter: rgbaColor;
    veryLight: rgbaColor;
}
export namespace ColorDef {
    const RED: ColorDef;
    const GREEN: ColorDef;
    const BLUE: ColorDef;
    const ORANGE: ColorDef;
    const YELLOW: ColorDef;
    const CYAN: ColorDef;
    const MAGENTA: ColorDef;
    const WHITE: ColorDef;
    const GRAY: ColorDef;
    const BLACK: ColorDef;
    const RAITH: ColorDef;
    const GREEN_LCD: ColorDef;
    const JUG_GREEN: ColorDef;
}

export class LedColor {
    constructor(
        innerColor1_ON: string,
        innerColor2_ON: string,
        outerColor_ON: string,
        coronaColor: string,
        innerColor1_OFF: string,
        innerColor2_OFF: string,
        outerColor_OFF: string,
    );
    innerColor1_ON: string;
    innerColor2_ON: string;
    outerColor_ON: string;
    coronaColor: string;
    innerColor1_OFF: string;
    innerColor2_OFF: string;
    outerColor_OFF: string;
}
export namespace LedColor {
    const RED_LED: LedColor;
    const GREEN_LED: LedColor;
    const BLUE_LED: LedColor;
    const ORANGE_LED: LedColor;
    const YELLOW_LED: LedColor;
    const CYAN_LED: LedColor;
    const MAGENTA_LED: LedColor;
}

export class GaugeType extends Type {}
export namespace GaugeType {
    const TYPE1: GaugeType;
    const TYPE2: GaugeType;
    const TYPE3: GaugeType;
    const TYPE4: GaugeType;
    const TYPE5: GaugeType;
}

export class Orientation extends Type {}
export namespace Orientation {
    const NORTH: Orientation;
    const SOUTH: Orientation;
    const EAST: Orientation;
    const WEST: Orientation;
}

export class KnobType extends Type {}
export namespace KnobType {
    const STANDARD_KNOB: KnobType;
    const METAL_KNOB: KnobType;
}

export class KnobStyle {
    constructor(style: string);
    style: string;
}
export namespace KnobStyle {
    const BLACK: KnobStyle;
    const BRASS: KnobStyle;
    const SILVER: KnobStyle;
}

export class FrameDesign {
    constructor(design: string);
    design: string;
}
export namespace FrameDesign {
    const BLACK_METAL: any;
    const METAL: any;
    const SHINY_METAL: any;
    const BRASS: any;
    const STEEL: any;
    const CHROME: any;
    const GOLD: any;
    const ANTHRACITE: any;
    const TILTED_GRAY: any;
    const TILTED_BLACK: any;
    const GLOSSY_METAL: any;
}

export class PointerType extends Type {}
export namespace PointerType {
    const TYPE1: PointerType;
    const TYPE2: PointerType;
    const TYPE3: PointerType;
    const TYPE4: PointerType;
    const TYPE5: PointerType;
    const TYPE6: PointerType;
    const TYPE7: PointerType;
    const TYPE8: PointerType;
    const TYPE9: PointerType;
    const TYPE10: PointerType;
    const TYPE11: PointerType;
    const TYPE12: PointerType;
    const TYPE13: PointerType;
    const TYPE14: PointerType;
    const TYPE15: PointerType;
    const TYPE16: PointerType;
}

export class ForegroundType extends Type {}
export namespace ForegroundType {
    const TYPE1: ForegroundType;
    const TYPE2: ForegroundType;
    const TYPE3: ForegroundType;
    const TYPE4: ForegroundType;
    const TYPE5: ForegroundType;
}

export class LabelNumberFormat {
    constructor(format: string);
    format: string;
}
export namespace LabelNumberFormat {
    const STANDARD: LabelNumberFormat;
    const FRACTIONAL: LabelNumberFormat;
    const SCIENTIFIC: LabelNumberFormat;
}

export class TickLabelOrientation extends Type {}
export namespace TickLabelOrientation {
    const NORMAL: TickLabelOrientation;
    const HORIZONTAL: TickLabelOrientation;
    const TANGENT: TickLabelOrientation;
}

export class TrendState {
    constructor(state: string);
    state: string;
}
export namespace TrendState {
    const UP: TrendState;
    const STEADY: TrendState;
    const DOWN: TrendState;
    const OFF: TrendState;
}

/* Images */
export function drawFrame(
    ctx: CanvasRenderingContext2D,
    frameDesign: FrameDesign,
    centerX: number,
    centerY: number,
    imageWidth: number,
    imageHeight: number,
): any;

export function drawBackground(
    ctx: CanvasRenderingContext2D,
    backgroundColor: BackgroundColor,
    centerX: number,
    centerY: number,
    imageWidth: number,
    imageHeight: number,
): any;

export function drawForeground(
    ctx: CanvasRenderingContext2D,
    foregroundType: ForegroundType,
    imageWidth: number,
    imageHeight: number,
    withCenterKnob: boolean,
    knob?: KnobType,
    style?: KnobStyle,
    gaugeType?: GaugeType,
    orientation?: Orientation,
): any;

/* Gauge Params Interfaces */

// Frame, Background and Foreground
interface FrameStruct {
    frameDesign?: FrameDesign | undefined;
    frameVisible?: boolean | undefined;
    backgroundColor?: BackgroundColor | undefined; // Omit<> in Horizon
    backgroundVisible?: boolean | undefined; // Omit<> in Horizon
    foregroundType?: ForegroundType | undefined; // Omit<> in Linear*
    foregroundVisible?: boolean | undefined;
}

// Pointer & Knob
interface PointKnob {
    knobType?: KnobType | undefined; // Omit<> in Clock
    knobStyle?: KnobStyle | undefined; // Omit<> in Clock
    pointerType?: PointerType | undefined; // Omit<> in Altimeter, WindDir
    pointerColor?: ColorDef | undefined; // Omit<> in Altimeter
}

// Lcd
interface Lcd {
    lcdColor?: LcdColor | undefined;
    digitalFont?: boolean | undefined;
    lcdVisible?: boolean | undefined; // Omit<> in DisplayMulti, DisplaySingle
    lcdDecimals?: number | undefined; // Omit<> in Altimeter, WindDir
}

// All Linear and Radial common parameters
interface LinearRadialCommon {
    minValue?: number | undefined;
    maxValue?: number | undefined;
    minMeasuredValueVisible?: boolean | undefined; // Omit<> in RadialBargraph
    maxMeasuredValueVisible?: boolean | undefined; // Omit<> in RadialBargraph
    niceScale?: boolean | undefined;
    labelNumberFormat?: LabelNumberFormat | undefined;
    threshold?: number | undefined;
    thresholdRising?: boolean | undefined;
    thresholdVisible?: boolean | undefined;
    fullScaleDeflectionTime?: number | undefined; // & WindDir
    playAlarm?: boolean | undefined;
    alarmSound?: string | undefined;

    titleString?: string | undefined;
    unitString?: string | undefined;

    ledColor?: LedColor | undefined;
    ledVisible?: boolean | undefined;
}

/* Gauges */

export interface RadialParams extends FrameStruct, PointKnob, Lcd, LinearRadialCommon {
    size?: number | undefined;
    gaugeType?: GaugeType | undefined;
    fractionalScaleDecimals?: number | undefined;
    tickLabelOrientation?: TickLabelOrientation | undefined;
    trendVisible?: boolean | undefined;
    trendColors?: [LedColor, LedColor, LedColor] | undefined;
    userLedColor?: LedColor | undefined;
    userLedVisible?: boolean | undefined;
    section?: Section[] | undefined;
    area?: Section[] | undefined;
    useOdometer?: boolean | undefined;
    odometerParams?: OdometerParams | undefined;
    odometerUseValue?: boolean | undefined;

    customLayer?: any;
}
export class Radial {
    constructor(canvas: HTMLCanvasElement | string, parameters?: RadialParams);
    setValue(newValue: number): this;
    getValue(): number;
    setOdoValue(newValue: number): this;
    getOdoValue(): number;
    setValueAnimated(newValue: number, callback?: () => void): this;
    resetMinMeasuredValue(): void;
    resetMaxMeasuredValue(): this;
    setMinMeasuredValueVisible(visible: boolean): this;
    setMaxMeasuredValueVisible(visible: boolean): this;
    setMinMeasuredValue(newValue: number): this;
    setMaxMeasuredValue(newValue: number): this;
    setMinValue(newValue: number): this;
    getMinValue(): number;
    setMaxValue(newValue: number): this;
    getMaxValue(): number;
    setThreshold(newValue: number): this;
    setArea(areaVal: Section[]): this;
    setSection(areaSec: Section[]): this;
    setThresholdVisible(visible: boolean): this;
    setThresholdRising(rising: boolean): this;
    setLcdDecimals(decimals: number): this;
    setTrend(newValue: TrendState): this;
    setTrendVisible(visible: boolean): this;
    setFractionalScaleDecimals(decimals: number): this;

    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerType(newPointerType: PointerType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    setLedColor(newLedColor: LedColor): this;
    setUserLedColor(newLedColor: LedColor): this;
    toggleUserLed(): this;
    setUserLedOnOff(on: boolean): this;
    blinkUserLed(blink: boolean): this;
    setLedVisible(visible: boolean): this;
    setUserLedVisible(visible: boolean): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setTitleString(title: string): this;
    setUnitString(unit: string): this;
    setLabelNumberFormat(fomat: LabelNumberFormat): this;
    repaint(): void;
}

export interface RadialBargraphParams
    extends
        FrameStruct,
        Lcd,
        Omit<LinearRadialCommon, "minMeasuredValueVisible" | "maxMeasuredValueVisible" | "thresholdVisible">
{
    size?: number | undefined;
    gaugeType?: GaugeType | undefined;
    fractionalScaleDecimals?: number | undefined;
    tickLabelOrientation?: TickLabelOrientation | undefined;
    trendVisible?: boolean | undefined;
    trendColors?: [LedColor, LedColor, LedColor] | undefined;
    userLedColor?: LedColor | undefined;
    userLedVisible?: boolean | undefined;
    valueColor?: ColorDef | undefined;
    section?: Section[] | undefined;
    useSectionColors?: boolean | undefined;
    valueGradient?: gradientWrapper | null | undefined;
    useValueGradient?: boolean | undefined;

    customLayer?: any;
}
export class RadialBargraph {
    constructor(canvas: HTMLCanvasElement | string, parameters?: RadialBargraphParams);
    setValue(newValue: number): this;
    getValue(): number;
    setValueAnimated(newValue: number, callback?: () => void): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setValueColor(newValueColor: ColorDef): this;
    setLedColor(newLedColor: LedColor): this;
    setUserLedColor(newLedColor: LedColor): this;
    toggleUserLed(): this;
    setUserLedOnOff(on: boolean): this;
    blinkUserLed(blink: boolean): this;
    setLedVisible(visible: boolean): this;
    setUserLedVisible(visible: boolean): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setLcdDecimals(decimals: number): this;
    setSection(areaSec: Section[]): this;
    setSectionActive(value: boolean): this;
    setGradient(grad: gradientWrapper | null): this;
    setGradientActive(value: boolean): this;
    setMinValue(newValue: number): this;
    getMinValue(): number;
    setMaxValue(newValue: number): this;
    getMaxValue(): number;
    setThreshold(newValue: number): this;
    setThresholdRising(rising: boolean): this;
    setTitleString(title: string): this;
    setUnitString(unit: string): this;
    setTrend(newValue: TrendState): this;
    setTrendVisible(visible: boolean): this;
    setFractionalScaleDecimals(decimals: number): this;
    setLabelNumberFormat(fomat: LabelNumberFormat): this;
    repaint(): void;
}

export interface RadialVerticalParams extends FrameStruct, PointKnob, LinearRadialCommon {
    size?: number | undefined;
    orientation?: Orientation | undefined;
    section?: Section[] | undefined;
    area?: Section[] | undefined;
}
export class RadialVertical {
    constructor(canvas: HTMLCanvasElement | string, parameters?: RadialVerticalParams);
    setValue(newValue: number): this;
    getValue(): number;
    setValueAnimated(newValue: number, callback: () => void): this;
    setMinValue(newValue: number): this;
    getMinValue(): number;
    setMaxValue(newValue: number): this;
    getMaxValue(): this;
    setMaxMeasuredValue(newValue: number): this;
    setMinMeasuredValue(newValue: number): this;
    resetMinMeasuredValue(): this;
    resetMaxMeasuredValue(): this;
    setMinMeasuredValueVisible(visible: boolean): this;
    setMaxMeasuredValueVisible(visible: boolean): this;
    setThresholdVisible(visible: boolean): this;
    setThresholdRising(rising: boolean): this;

    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerType(newPointerType: PointerType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    setLedColor(newLedColor: LedColor): this;
    setLedVisible(visible: boolean): this;
    repaint(): void;
}

export interface LinearParams extends Omit<FrameStruct, "foregroundType">, Lcd, LinearRadialCommon {
    width?: number | undefined;
    height?: number | undefined;
    gaugeType?: GaugeType | undefined;
    valueColor?: ColorDef | undefined;
}
export class Linear {
    constructor(canvas: HTMLCanvasElement | string, parameters?: LinearParams);
    setValue(newValue: number): this;
    getValue(): number;
    setValueAnimated(newValue: number, callback: () => void): this;
    resetMinMeasuredValue(): this;
    resetMaxMeasuredValue(): this;
    setMaxMeasuredValue(newValue: number): this;
    setMinMeasuredValue(newValue: number): this;
    setMinValue(newValue: number): this;
    getMinValue(): number;
    setMaxValue(newValue: number): this;
    getMaxValue(): number;
    setThreshold(threshVal: number): this;
    setThresholdVisible(visible: boolean): this;
    setThresholdRising(rising: boolean): this;

    setMinMeasuredValueVisible(visible: boolean): this;
    setMaxMeasuredValueVisible(visible: boolean): this;
    setLcdDecimals(decimals: number): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setValueColor(newValueColor: ColorDef): this;
    setLedColor(newLedColor: LedColor): this;
    setLedVisible(visible: boolean): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setTitleString(title: string): this;
    setUnitString(title: string): this;
    repaint(): void;
}

export interface LinearBargraphParams extends Omit<FrameStruct, "foregroundType">, Lcd, LinearRadialCommon {
    width?: number | undefined;
    height?: number | undefined;
    section?: Section[] | undefined;
    valueColor?: ColorDef | undefined;
    valueGradient?: gradientWrapper | null | undefined;
    useValueGradient?: boolean | undefined;
}
export class LinearBargraph {
    constructor(canvas: HTMLCanvasElement | string, parameters?: LinearBargraphParams);
    setValue(newValue: number): this;
    getValue(): number;
    setValueAnimated(newValue: number, callback?: () => void): this;
    resetMinMeasuredValue(): this;
    resetMaxMeasuredValue(): this;
    setThresholdRising(rising: boolean): this;
    setMaxMeasuredValue(newValue: number): this;
    setMinMeasuredValue(newValue: number): this;
    setMinValue(newValue: number): this;
    getMinValue(): number;
    setMaxValue(newValue: number): this;
    getMaxValue(): number;
    setThreshold(threshVal: number): this;

    setMinMeasuredValueVisible(visible: boolean): this;
    setMaxMeasuredValueVisible(visible: boolean): this;
    setThresholdVisible(visible: boolean): this;
    setLcdDecimals(decimals: number): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setValueColor(newValueColor: ColorDef): this;
    setLedColor(newLedColor: LedColor): this;
    setLedVisible(visible: boolean): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setSection(areaSec: Section[]): this;
    setSectionActive(value: boolean): this;
    setGradient(grad: gradientWrapper | null): this;
    setGradientActive(value: boolean): this;
    setTitleString(title: string): this;
    setUnitString(title: string): this;
    repaint(): void;
}

export interface DisplaySingleParams extends Omit<Lcd, "lcdVisible"> {
    width?: number | undefined;
    height?: number | undefined;
    section?: Section[] | undefined;
    unitString?: string | undefined;
    unitStringVisible?: boolean | undefined;
    headerString?: string | undefined;
    headerStringVisible?: boolean | undefined;
    valuesNumeric?: boolean | undefined;
    value?: string | number | undefined;
    alwaysScroll?: boolean | undefined;
    autoScroll?: boolean | undefined;
}
export class DisplaySingle {
    constructor(canvas: HTMLCanvasElement | string, parameters?: DisplaySingleParams);
    setValue(newValue: number | string): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setSection(newSection: Section[]): this;
    setScrolling(scroll: boolean): this;
    repaint(): void;
}

export interface DisplayMultiParams extends Omit<Lcd, "lcdVisible"> {
    width?: number | undefined;
    height?: number | undefined;
    headerString?: string | undefined;
    headerStringVisible?: boolean | undefined;
    detailString?: string | undefined;
    detailStringVisible?: boolean | undefined;
    linkAltValue?: boolean | undefined;
    unitString?: string | undefined;
    unitStringVisible?: boolean | undefined;
    valuesNumeric?: boolean | undefined;
    value?: string | number | undefined;
    altValue?: string | number | undefined;
}
export class DisplayMulti {
    constructor(canvas: HTMLCanvasElement | string, parameters?: DisplayMultiParams);
    setValue(newValue: number | string): this;
    setAltValue(altValueNew: number | string): this;
    setLcdColor(newLcdColor: LcdColor): this;
    repaint(): void;
}

export interface LevelParams extends FrameStruct {
    size?: number | undefined;
    decimalsVisible?: boolean | undefined;
    textOrientationFixed?: boolean | undefined;
    pointerColor?: ColorDef | undefined;
    rotateFace?: boolean | undefined;
}
export class Level {
    constructor(canvas: HTMLCanvasElement | string, parameters?: LevelParams);
    setValue(newValue: number): this;
    getValue(): number;
    setValueAnimated(newValue: number, callback?: () => void): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    repaint(): void;
}

export interface CompassParams extends FrameStruct, PointKnob {
    size?: number | undefined;
    pointSymbols?: string[] | undefined;
    pointSymbolsVisible?: boolean | undefined;
    degreeScale?: boolean | undefined;
    roseVisible?: boolean | undefined;
    rotateFace?: boolean | undefined;

    customLayer?: any;
}
export class Compass {
    constructor(canvas: HTMLCanvasElement | string, parameters?: CompassParams);
    setValue(newValue: number): this;
    getValue(): number;
    setValueAnimated(newValue: number, callback?: () => void): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    setPointerType(newPointerType: PointerType): this;
    setPointSymbols(newPointSymbols: string[]): this;
    repaint(): void;
}

export interface WindDirectionParams extends FrameStruct, Omit<PointKnob, "pointerType">, Omit<Lcd, "lcdDecimals"> {
    size?: number | undefined;
    section?: Section[] | undefined;
    area?: Section[] | undefined;
    fullScaleDeflectionTime?: number | undefined;
    pointerTypeLatest?: PointerType | undefined;
    pointerTypeAverage?: PointerType | undefined;
    pointerColorAverage?: ColorDef | undefined;
    pointSymbols?: string[] | undefined;
    pointSymbolsVisible?: boolean | undefined;
    degreeScale?: boolean | undefined;
    degreeScaleHalf?: boolean | undefined;
    roseVisible?: boolean | undefined;
    lcdTitleStrings?: string[] | undefined;
    titleString?: string | undefined;
    useColorLabels?: boolean | undefined;

    customLayer?: any;
}
export class WindDirection {
    constructor(canvas: HTMLCanvasElement | string, parameters?: WindDirectionParams);
    setValueLatest(newValue: number): this;
    getValueLatest(): number;
    setValueAverage(newValue: number): this;
    getValueAverage(): number;
    setValueAnimatedLatest(newValue: number, callback?: () => void): this;
    setValueAnimatedAverage(newValue: number, callback?: () => void): this;
    setArea(areaVal: Section[]): this;
    setSection(areaSec: Section[]): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    setPointerColorAverage(newPointerColor: ColorDef): this;
    setPointerType(newPointerType: PointerType): this;
    setPointerTypeAverage(newPointerType: PointerType): this;
    setPointSymbols(newPointSymbols: string[]): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setLcdTitleStrings(titles: string[]): this;
    repaint(): void;
}

export interface HorizonParams extends Omit<FrameStruct, "backgroundColor" | "backgroundVisible"> {
    size?: number | undefined;
    pointerColor?: ColorDef | undefined;
}
export class Horizon {
    constructor(canvas: HTMLCanvasElement | string, parameters?: HorizonParams);
    setRoll(newRoll: number): this;
    getRoll(): number;
    setRollAnimated(newRoll: number, callback?: () => void): this;
    setPitch(newPitch: number): this;
    getPitch(): number;
    setPitchAnimated(newPitch: number, callback?: () => void): this;
    setPitchOffset(newPitchOffset: number): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    repaint(): void;
}

export interface LedParams {
    size?: number | undefined;
    ledColor?: LedColor | undefined;
}
export class Led {
    constructor(canvas: HTMLCanvasElement | string, parameters?: LedParams);
    toggleLed(): this;
    setLedColor(newColor: LedColor): this;
    setLedOnOff(on: boolean): this;
    blink(blink: boolean): this;
}

export interface ClockParams extends FrameStruct, Omit<PointKnob, "knobType" | "knobStyle"> {
    size: number;
    isAutomatic: boolean;
    hour: number;
    minute: number;
    second: number;
    secondMovesContinuous: boolean;
    timeZoneOffsetHour: number;
    timeZoneOffsetMinute: number;
    secondPointerVisible: boolean;

    customLayer: any;
}
export class Clock {
    constructor(canvas: HTMLCanvasElement | string, parameters?: ClockParams);
    getAutomatic(): boolean;
    setAutomatic(newValue: boolean): this;
    getHour(): number;
    setHour(newValue: number): this;
    getMinute(): number;
    setMinute(newValue: number): this;
    getSecond(): number;
    setSecond(newValue: number): this;
    getTimeZoneOffsetHour(): number;
    setTimeZoneOffsetHour(newValue: number): this;
    getTimeZoneOffsetMinute(): number;
    setTimeZoneOffsetMinute(newValue: number): this;
    getSecondPointerVisible(): boolean;
    setSecondPointerVisible(neweValue: boolean): this;
    getSecondMovesContinuous(): boolean;
    setSecondMovesContinuous(newValue: boolean): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerType(newPointerType: PointerType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    repaint(): void;
}

export interface BatteryParams {
    size?: number | undefined;
    value?: number | undefined;
}
export class Battery {
    constructor(canvas: HTMLCanvasElement | string, parameters?: BatteryParams);
    setValue(newValue: number): this;
    getValue(): number;
    repaint(): void;
}

export interface StopwatchParams extends FrameStruct {
    size?: number | undefined;
    pointerColor?: ColorDef | undefined;
    customLayer?: any;
}
export class Stopwatch {
    constructor(canvas: HTMLCanvasElement | string, parameters?: StopwatchParams);
    isRunning(): boolean;
    start(): this;
    stop(): this;
    reset(): this;
    lap(): this;
    getMeasuredTime(): string;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setPointerColor(newPointerColor: ColorDef): this;
    repaint(): void;
}

export interface AltimeterParams
    extends FrameStruct, Omit<PointKnob, "pointerType" | "pointerColor">, Omit<Lcd, "lcdDecimals">
{
    size?: number | undefined;
    unitAltPos?: boolean | undefined;

    customLayer?: any;
}
export class Altimeter {
    constructor(canvas: HTMLCanvasElement | string, parameters?: AltimeterParams);
    setValue(newValue: number): void;
    getValue(): number;
    setValueAnimated(newValue: number, callback?: () => void): this;
    setFrameDesign(newFrameDesign: FrameDesign): this;
    setBackgroundColor(newBackgroundColor: BackgroundColor): this;
    setForegroundType(newForegroundType: ForegroundType): this;
    setLcdColor(newLcdColor: LcdColor): this;
    setTitleString(title: string): this;
    setUnitString(unit: string): this;
    repaint(): void;
}

export interface TrafficlightParams {
    width?: number | undefined;
    height?: number | undefined;
}
export class Trafficlight {
    constructor(canvas: HTMLCanvasElement | string, parameters?: TrafficlightParams);
    setRedOn(on: boolean): this;
    isRedOn(): boolean;
    setYellowOn(on: boolean): this;
    isYellowOn(): boolean;
    setGreenOn(on: boolean): this;
    isGreenOn(): boolean;
    repaint(): void;
}

export interface LightbulbParams {
    width: number;
    height: number;
    glowColor: string;
}
export class Lightbulb {
    constructor(canvas: HTMLCanvasElement | string, parameters?: LightbulbParams);
    setOn(on: boolean): this;
    isOn(): boolean;
    setAlpha(a: number): this;
    getAlpha(): number;
    setGlowColor(color: string): this;
    getGlowColor(): string;
    repaint(): void;
}

export interface OdometerParams {
    _context?: RenderingContext | undefined;
    height?: number | undefined;
    digits?: number | undefined;
    decimals?: number | undefined;
    decimalBackColor?: string | undefined;
    decimalForeColor?: string | undefined;
    font?: string | undefined;
    value?: number | undefined;
    valueBackColor?: string | undefined;
    valueForeColor?: string | undefined;
    wobbleFactor?: number | undefined;
}
export class Odometer {
    constructor(canvas: HTMLCanvasElement | string, parameters?: OdometerParams);
    setValueAnimated(newValue: number, callback?: () => void): this;
    setValue(newValue: number): this;
    getValue(): number;
    repaint(): void;
}

export {};
