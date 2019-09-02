import * as React from "react";
import { render } from "react-dom";
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
    CustomPicker,
    CustomPickerInjectedProps
} from "react-color";
import {
    Alpha,
    Checkboard,
    EditableInput,
    Hue,
    Saturation
} from "react-color/lib/components/common";

interface CustomProps extends CustomPickerInjectedProps {
    customProp: string;
}

const CustomComponent: React.ComponentType<CustomProps> = (props: CustomProps) => {
    const { customProp } = props;
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
            />
            <Hue
                direction="horizontal"
                pointer={() => <div />}
                radius="25px"
                shadow="5px 10px"
                {...props}
            />
            <Saturation
                radius="25px"
                shadow="5px 10px"
                pointer={() => <div />}
                style={{ circle: { display: "block" } }}
                {...props}
            />
        </div>
    );
};
const Custom = CustomPicker(CustomComponent);

const stringColor = '#000000';
const color = { hex: "#000000" };
const colors = ["#000", "#333"];

render(
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
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
    <ChromePicker
        className="class-name"
        styles={{ default: { picker: { display: "block" } } }}
        width="100px"
        disableAlpha
        color={color}
        onChange={() => {}}
        onChangeComplete={() => {}}
        renderers={{ canvas: {} }}
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
    <CompactPicker
        className="class-name"
        styles={{ default: { compact: { display: "block" } } }}
        colors={colors}
        color={color}
        onChange={() => {}}
        onChangeComplete={() => {}}
        onSwatchHover={() => {}}
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
    <MaterialPicker
        className="class-name"
        color={color}
        onChange={() => {}}
        onChangeComplete={() => {}}
    />,
    document.getElementById("main")
);

render(
    <PhotoshopPicker
        className="class-name"
        styles={{ default: { picker: { display: "block" } } }}
        header="Test"
        color={color}
        onChange={() => {}}
        onChangeComplete={() => {}}
        onAccept={() => {}}
        onCancel={() => {}}
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
    <SliderPicker
        className="class-name"
        styles={{ default: { hue: { display: "block" } } }}
        pointer={() => <div />}
        color={color}
        onChange={() => {}}
        onChangeComplete={() => {}}
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
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
    />,
    document.getElementById("main")
);

render(
    <Custom
        customProp="custom-prop"
        color={color}
        onChange={() => {}}
        onChangeComplete={() => {}}
    />,
    document.getElementById("main")
);

render(<GithubPicker color={stringColor} />, document.getElementById('main'));
