interface SliderOptions {
    selectorInit: string;
    selectorTrack: string;
    selectorFilledTrack: string;
    selectorThumb: string;
    selectorInput: string;
    classDisabled: string;
    classThumbClicked: string;
    eventBeforeSliderValueChange: string;
    eventAfterSliderValueChange: string;
    stepMultiplier: number;
}

declare const Slider_base: any;
declare class Slider extends Slider_base {
    constructor(element: HTMLElement, options?: Partial<SliderOptions>);
    _changeState: (state: string, detail: { value: number }, callback?: () => void) => void;
    _updatePosition(evt?: MouseEvent): void;
    _calcValue(
        evt?: MouseEvent,
    ): {
        left: number;
        newValue: number;
    };
    _updateInput(): void;
    getInputProps(): {
        value: number;
        min: number;
        max: number;
        step: number;
    };
    setValue(value: number | string): void;
    stepUp(): void;
    stepDown(): void;
    static components: WeakMap<object, any>;
    static get options(): SliderOptions;
}
export default Slider;
