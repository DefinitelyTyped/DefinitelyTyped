declare const Slider_base: any;
declare class Slider extends Slider_base {
    constructor(element: any, options: any);
    _changeState: (state: any, detail: any, callback: any) => void;
    _updatePosition(evt: any): void;
    _calcValue(evt: any): {
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
    setValue(value: any): void;
    stepUp(): void;
    stepDown(): void;
    static components: WeakMap<object, any>;
    static get options(): {
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
    };
}
export default Slider;
