import * as React from "react";
import { StatelessComponent } from "react";
import { render } from "react-dom";
import {
    AlphaPicker, BlockPicker, ChromePicker, CirclePicker,
    CompactPicker, GithubPicker, HuePicker, MaterialPicker,
    PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker,
    TwitterPicker, CustomPicker, InjectedColorProps, ColorResult,
    Color
} from "react-color";
import { Alpha, Checkboard, EditableInput, Hue, Saturation } from "react-color/lib/components/common";

interface CustomProps extends InjectedColorProps {
    color?: Color;
}

const CustomComponent: StatelessComponent<CustomProps> = (props: CustomProps) => {
    function onChange(color: ColorResult) {
        console.log(color);
    }

    return (
        <div>
            <Alpha color={ props.color } onChange={ onChange } />
            <Checkboard size={ 10 } white="transparent" grey="#333" />
            <EditableInput value={ props.color } label="Test" onChange={ onChange } />
            <Hue color={ props.color } direction="horizontal" onChange={ onChange } />
            <Saturation color={ props.color } onChange={ onChange } />
        </div>
    );
};
const Custom = CustomPicker(CustomComponent);

const colors = ["#000", "#333"];

render(<AlphaPicker height="100px" width="100px" />, document.getElementById("main"));
render(<BlockPicker colors={ colors } width="100px" />, document.getElementById("main"));
render(<ChromePicker disableAlpha styles={{ default: { picker: { width: 200 }}}} />, document.getElementById("main"));
render(<CirclePicker colors={ colors } width="100px" />, document.getElementById("main"));
render(<CompactPicker colors={ colors } />, document.getElementById("main"));
render(<GithubPicker colors={ colors } width="100px" />, document.getElementById("main"));
render(<HuePicker height="100px" width="100px" />, document.getElementById("main"));
render(<MaterialPicker />, document.getElementById("main"));
render(<PhotoshopPicker header="Test" />, document.getElementById("main"));
render(<SketchPicker disableAlpha presetColors={ colors } />, document.getElementById("main"));
render(<SliderPicker />, document.getElementById("main"));
render(<SwatchesPicker colors={ [colors] } height={ 100 } width={ 100 } />, document.getElementById("main"));
render(<TwitterPicker />, document.getElementById("main"));
render(<Custom />, document.getElementById("main"));
