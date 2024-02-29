import * as React from "react";
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    CustomPicker,
    CustomPickerInjectedProps,
    GithubPicker,
    HuePicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
} from "react-color";
import { Alpha, Checkboard, EditableInput, Hue, Saturation } from "react-color/lib/components/common";
import { AlphaColorResult } from "react-color/lib/components/common/Alpha";
import { EditableInputColorResult } from "react-color/lib/components/common/EditableInput";
import { HueColorResult } from "react-color/lib/components/common/Hue";
import { SaturationColorResult } from "react-color/lib/components/common/Saturation";

interface CustomProps extends CustomPickerInjectedProps {
    customProp: string;
}

const CustomComponent: React.ComponentType<CustomProps> = (props: CustomProps) => {
    const { customProp } = props;

    function onChangeAlpha(color: AlphaColorResult) {
        console.log(color);
        color.a; // $ExpectType number
        color.h; // $ExpectType number
        color.s; // $ExpectType number
        color.l; // $ExpectType number
        color.source; // $ExpectType "rgb"
    }
    function onChangeHue(color: HueColorResult) {
        console.log(color);
        color.a; // $ExpectType number
        color.h; // $ExpectType number
        color.s; // $ExpectType number
        color.l; // $ExpectType number
        color.source; // $ExpectType "hsl"
    }
    function onChangeSaturation(color: SaturationColorResult) {
        console.log(color);
        color.a; // $ExpectType number
        color.h; // $ExpectType number
        color.s; // $ExpectType number
        color.v; // $ExpectType number
        color.source; // $ExpectType "hsv"
    }
    function onChangeInput(color: EditableInputColorResult<"test">) {
        console.log(color);
        color.test; // $ExpectType string
    }
    function onChangeInputNoLabel(color: string) {
        console.log(color);
        color; // $ExpectType string
    }

    return (
        <div>
            {customProp}
            <Alpha
                style={{ checkboard: { display: "block" } }}
                radius="25px"
                shadow="5px 10px"
                direction="horizontal"
                pointer={() => <div />}
                {...props}
                onChange={onChangeAlpha}
            />
            <Checkboard
                size={10}
                white="transparent"
                grey="#333"
                renderers={{ canvas: {} }}
                borderRadius="25px"
                boxShadow="5px 10px"
            />
            <EditableInput
                label="test"
                arrowOffset={2}
                placeholder="placeholder"
                value="#000000"
                style={{ wrap: { display: "block" } }}
                dragLabel
                dragMax={10}
                {...props}
                onChange={onChangeInput}
            />
            <Hue
                direction="horizontal"
                pointer={() => <div />}
                radius="25px"
                shadow="5px 10px"
                {...props}
                onChange={onChangeHue}
            />
            <Saturation
                radius="25px"
                shadow="5px 10px"
                pointer={() => <div />}
                style={{ circle: { display: "block" } }}
                {...props}
                onChange={onChangeSaturation}
            />

            <EditableInput onChange={onChangeInputNoLabel} />
            // prettier-ignore
            {/* @ts-expect-error */}
            <EditableInput label="Fails" onChange={onChangeInput} />
        </div>
    );
};
const Custom = CustomPicker(CustomComponent);

const stringColor = "#000000";
const color = { hex: "#000000" };
const colors = ["#000", "#333"];

<AlphaPicker
    className="class-name"
    style={{ display: "block" }}
    height="100px"
    width="100px"
    direction="vertical"
    pointer={() => <div />}
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    renderers={{ canvas: {} }}
/>;

<BlockPicker
    className="class-name"
    styles={{ default: { card: { display: "block" } } }}
    colors={colors}
    color={color}
    width="100px"
    triangle="top"
    onChange={() => {}}
    onChangeComplete={() => {}}
    onSwatchHover={() => {}}
/>;

<ChromePicker
    className="class-name"
    styles={{ default: { picker: { display: "block" } } }}
    width="100px"
    disableAlpha
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    renderers={{ canvas: {} }}
/>;

<CirclePicker
    className="class-name"
    styles={{ default: { card: { display: "block" } } }}
    colors={colors}
    width="100px"
    circleSize={10}
    circleSpacing={10}
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    onSwatchHover={() => {}}
/>;

<CompactPicker
    className="class-name"
    styles={{ default: { compact: { display: "block" } } }}
    colors={colors}
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    onSwatchHover={() => {}}
/>;

<GithubPicker
    className="class-name"
    styles={{ default: { card: { display: "block" } } }}
    colors={colors}
    width="100px"
    triangle="top-left"
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    onSwatchHover={() => {}}
/>;

<HuePicker
    className="class-name"
    styles={{ default: { picker: { display: "block" } } }}
    width="100px"
    height="100px"
    direction="vertical"
    pointer={() => <div />}
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
/>;

<MaterialPicker
    className="class-name"
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
/>;

<PhotoshopPicker
    className="class-name"
    styles={{ default: { picker: { display: "block" } } }}
    header="Test"
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    onAccept={() => {}}
    onCancel={() => {}}
/>;

<SketchPicker
    className="class-name"
    styles={{ default: { picker: { display: "block" } } }}
    width="100px"
    disableAlpha
    presetColors={colors}
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    renderers={{ canvas: {} }}
    onSwatchHover={() => {}}
/>;

<SliderPicker
    className="class-name"
    styles={{ default: { hue: { display: "block" } } }}
    pointer={() => <div />}
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
/>;

<SwatchesPicker
    className=""
    styles={{ default: { picker: { display: "block" } } }}
    colors={[colors]}
    height="100px"
    width="100px"
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    onSwatchHover={() => {}}
/>;

<TwitterPicker
    className="class-name"
    styles={{ default: { card: { display: "block" } } }}
    colors={colors}
    width="100px"
    triangle="top-left"
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
    onSwatchHover={() => {}}
/>;

<Custom
    customProp="custom-prop"
    color={color}
    onChange={() => {}}
    onChangeComplete={() => {}}
/>;

<GithubPicker color={stringColor} />;
