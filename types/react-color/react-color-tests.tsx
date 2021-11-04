import * as React from "react";
import { FunctionComponent } from "react";
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
    color?: Color | undefined;
}

const CustomComponent: FunctionComponent<CustomProps> = (props: CustomProps) => {
    function onChange(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) {
        console.log(color, event);
    }

    return (
        <div>
            <Alpha color={props.color} onChange={onChange} />
            <Checkboard size={10} white="transparent" grey="#333" />
            <EditableInput value={props.color} label="Test" onChange={onChange} />
            <Hue color={props.color} direction="horizontal" onChange={onChange} />
            <Saturation color={props.color} onChange={onChange} />
        </div>
    );
};
const Custom = CustomPicker(CustomComponent);

const colors = ["#000", "#333"];
const colorsAsObject = [{title: 'foo', color: "#000"}, {title: 'foo', color: "#333"}];

render(<AlphaPicker className="custom-cn" height="100px" width="100px" />, document.getElementById("main"));
render(<BlockPicker className="custom-cn" colors={colors} width="100px" />, document.getElementById("main"));
render(<ChromePicker className="custom-cn" disableAlpha styles={{ default: { picker: { width: 200 } } }} />, document.getElementById("main"));
render(<CirclePicker className="custom-cn" colors={colors} width="100px" />, document.getElementById("main"));
render(<CompactPicker className="custom-cn" colors={colors} />, document.getElementById("main"));
render(<GithubPicker className="custom-cn" colors={colors} width="100px" />, document.getElementById("main"));
render(<HuePicker className="custom-cn" height="100px" width="100px" />, document.getElementById("main"));
render(<MaterialPicker className="custom-cn" />, document.getElementById("main"));
render(<PhotoshopPicker className="custom-cn" header="Test" />, document.getElementById("main"));
render(<SketchPicker className="custom-cn" disableAlpha presetColors={colors} />, document.getElementById("main"));
render(<SketchPicker className="custom-cn" disableAlpha presetColors={colorsAsObject} />, document.getElementById("main"));
render(<SliderPicker className="custom-cn" />, document.getElementById("main"));
render(<SwatchesPicker className="custom-cn" colors={[colors]} height={100} width={100} />, document.getElementById("main"));
render(<TwitterPicker className="custom-cn" />, document.getElementById("main"));
render(<Custom />, document.getElementById("main"));
