import * as p5 from '../../index';
declare module '../../index' {
    class Div extends p5.Element {
    }
    class P extends p5.Element {
    }
    class Span extends p5.Element {
    }
    class Img extends p5.Element {
    }

    class A extends p5.Element {
    }
    class Slider extends p5.Element {
        option()
        value()
    }
    class Button extends p5.Element { }
    class Checkbox extends p5.Element { }
    class Select extends p5.Element {
        option(name: string, value?: string)
        value()
        selected(value?)
        enable(value?: string): Select
        disable(value?: string): Select
    }

    class Radio extends p5.Element {
        option(value: string, labal?: string)
        value()
        remove(value)
        selected(value?)
        disable(value: boolean): Radio
    }
    class ColorPicker extends p5.Element {
        value()
        color(): p5.Color
    }
    class Input extends p5.Element {
        size()
    }
    class FileInput extends p5.Element { }
    class Capture extends p5.Element {
        hide()
    }
}
