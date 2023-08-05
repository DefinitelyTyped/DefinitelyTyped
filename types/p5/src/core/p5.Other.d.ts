import * as p5 from '../../index';
declare module '../../index' {
    class Div extends Element {
    }
    class P extends Element {
    }
    class Span extends Element {
    }
    class Img extends Element {
    }

    class A extends Element {
    }
    class Slider extends Element {
        option(): any;
        value(): any;
    }
    class Button extends Element { }
    class Checkbox extends Element { }
    class Select extends Element {
        option(name: string, value?: string): any;
        value(): any;
        selected(value?): any;
        enable(value?: string): Select;
        disable(value?: string): Select;
    }

    class Radio extends Element {
        option(value: string, labal?: string): any;
        value(): any;
        remove(value): any;
        selected(value?): any;
        disable(value: boolean): Radio;
    }
    class ColorPicker extends Element {
        value(): any;
        color(): p5.Color;
    }
    class Input extends Element {
        size(): any;
    }
    class FileInput extends Element { }
    class Capture extends Element {
        hide(): any;
    }
}
