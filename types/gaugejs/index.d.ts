// Type definitions for gaugeJS
// Project: https://github.com/bernii/gauge.js
// Definitions by: fisk <https://github.com/Fiskie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "gaugeJS" {
    class ValueUpdater {
        animationSpeed: number;
        constructor(addToAnimationQueue?: boolean, clear?: boolean)
        update(force: boolean): boolean
    }

    class BaseGauge extends ValueUpdater {
        displayScale: number;
        forceUpdate: boolean;

        setTextField(textField: TextRenderer | HTMLElement, fractionDigits: number): void
        setMinValue(minValue: number, updateStartValue?: boolean): void
        setOptions(options: GaugeOptions): this
        configDisplayScale(): this
        parseValue(value: any): number
    }

    class TextRenderer {
        constructor(el: HTMLElement, fractionDigits: number)
        render(gauge: Gauge): void
    }

    class Gauge extends BaseGauge {
        elem: HTMLElement;
        value: number[];
        maxValue: number;
        minValue: number;
        displayedAngle: number;
        displayedValue: number;
        lineWidth: number;
        paddingTop: number;
        paddingBottom: number;
        percentColors: any[];
        options: GaugeOptions;

        constructor(canvas: HTMLElement)
        setOptions(options?: GaugeOptions): this
        configPercentColors(): void
        set(value: any): void
        getAngle(): number
        getColorForPercentage(pct: number, grad?: boolean): string
        getColorForValue(val: number, grad?: boolean): string
        renderStaticLabels(staticLabels: StaticLabels, w: number, h: number, radius: number): void
        renderTicks(ticksOptions: TicksOptions, w: number, h: number, radius: number): void
        render(): void
    }

    class BaseDonut extends BaseGauge {
        lineWidth: number;
        displayedValue: number;
        value: number;
        maxValue: number;
        minValue: number;
        options: DonutOptions;

        constructor(canvas: HTMLElement)
        getAngle(value: number): number;
        setOptions(options?: DonutOptions): this
        set(value: any): void
        render(): void
    }

    class Donut extends BaseDonut {
        strokeGradient(w: number, h: number, start: number, stop: number): CanvasGradient
    }

    interface StaticLabels {
        font?: string;
        color?: string;
        labels?: StaticLabel[] | number[];
        fractionDigits?: number;
    }

    interface StaticLabel {
        label?: string;
        font?: string;
    }

    interface StaticZone {
        min: number;
        max: number;
        strokeStyle: string;
        height?: number;
    }

    interface TicksOptions {
        divisions?: number;
        divWidth?: number;
        divLength?: number;
        divColor?: string;
        subDivisions?: number;
        subLength?: number;
        subWidth?: number;
        subColor?: string;
    }

    interface DonutOptions {
        lineWidth?: number;
        colorStart?: string;
        colorStop?: string;
        strokeColor?: string;
        shadowColor?: string;
        angle?: number;
        radiusScale?: number;
    }

    interface GaugeOptions {
        colorStart?: string;
        colorStop?: string;
        gradientType?: number;
        strokeColor?: string;
        pointer?: PointerOptions;
        angle?: number;
        lineWidth?: number;
        radiusScale?: number;
        fontSize?: number;
        limitMax?: boolean;
        limitMin?: boolean;
        generateGradient?: boolean;
        highDpiSupport?: boolean;
        percentColors?: any[];
        staticLabels?: StaticLabels;
        staticZones?: StaticZone[];
    }

    interface PointerOptions {
        strokeWidth?: number;
        length?: number;
        color?: string;
        iconPath?: string;
        iconScale?: number;
        iconAngle?: number;
    }
}
