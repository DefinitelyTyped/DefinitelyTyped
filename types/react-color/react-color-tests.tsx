import * as React from "react";
import { FunctionComponent } from "react";
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    Color,
    ColorResult,
    CompactPicker,
    CustomPicker,
    GithubPicker,
    HuePicker,
    InjectedColorProps,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
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
const colorsAsObject = [{ title: "foo", color: "#000" }, { title: "foo", color: "#333" }];

<AlphaPicker className="custom-cn" height="100px" width="100px" />;
<BlockPicker className="custom-cn" colors={colors} width="100px" />;
<ChromePicker className="custom-cn" disableAlpha styles={{ default: { picker: { width: 200 } } }} />;
<CirclePicker className="custom-cn" colors={colors} width="100px" />;
<CompactPicker className="custom-cn" colors={colors} />;
<GithubPicker className="custom-cn" colors={colors} width="100px" />;
<HuePicker className="custom-cn" height="100px" width="100px" />;
<MaterialPicker className="custom-cn" />;
<PhotoshopPicker className="custom-cn" header="Test" />;
<SketchPicker className="custom-cn" disableAlpha presetColors={colors} />;

<SketchPicker className="custom-cn" disableAlpha presetColors={colorsAsObject} />;
<SliderPicker className="custom-cn" />;

<SwatchesPicker className="custom-cn" colors={[colors]} height={100} width={100} />;
<TwitterPicker className="custom-cn" />;
<Custom />;
