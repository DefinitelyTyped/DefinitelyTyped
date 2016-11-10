// Type definitions for react-color v2.3.4
// Project: https://casesandberg.github.io/react-color/
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactColor {
    import React = __React

    interface HSLColor {
        a?: number
        h: number
        l: number
        s: number
    }

    interface RGBColor {
        a?: number
        b: number
        g: number
        r: number
    }

    type Color = string | HSLColor | RGBColor

    interface ColorResult {
        hex: string
        hsl: HSLColor
        rgb: RGBColor
    }

    type ColorChangeHandler = (color: ColorResult) => void

    interface ColorPickerProps<A> extends React.ClassAttributes<A> {
        color?: Color
        onChange?: ColorChangeHandler
        onChangeComplete?: ColorChangeHandler
    }

    /* Predefined pickers */
    interface AlphaPickerProps extends ColorPickerProps<AlphaPicker> {
        height?: string
        width?: string
    }
    interface AlphaPicker extends React.ComponentClass<AlphaPickerProps> {}
    const AlphaPicker: AlphaPicker

    interface BlockPickerProps extends ColorPickerProps<BlockPicker> {
        colors?: Array<string>
        width?: string
    }
    interface BlockPicker extends React.ComponentClass<BlockPickerProps> {}
    const BlockPicker: BlockPicker

    interface ChromePickerProps extends ColorPickerProps<ChromePicker> {
        disableAlpha?: boolean
    }
    interface ChromePicker extends React.ComponentClass<ChromePickerProps> {}
    const ChromePicker: ChromePicker

    interface CirclePickerProps extends ColorPickerProps<CirclePicker> {
        colors?: Array<string>
        width?: string
    }
    interface CirclePicker extends React.ComponentClass<CirclePickerProps> {}
    const CirclePicker: CirclePicker

    interface CompactPickerProps extends ColorPickerProps<CompactPicker> {
        colors?: Array<string>
    }
    interface CompactPicker extends React.ComponentClass<CompactPickerProps> {}
    const CompactPicker: CompactPicker

    interface GithubPickerProps extends ColorPickerProps<GithubPicker> {
        colors?: Array<string>
        width?: string
    }
    interface GithubPicker extends React.ComponentClass<GithubPickerProps> {}
    const GithubPicker: GithubPicker

    interface HuePickerProps extends ColorPickerProps<HuePicker> {
        height?: string
        width?: string
    }
    interface HuePicker extends React.ComponentClass<HuePickerProps> {}
    const HuePicker: HuePicker

    interface MaterialPickerProps extends ColorPickerProps<MaterialPicker> {}
    interface MaterialPicker extends React.ComponentClass<MaterialPickerProps> {}
    const MaterialPicker: MaterialPicker

    interface PhotoshopPickerProps extends ColorPickerProps<PhotoshopPicker> {
        header?: string
        onAccept?: ColorChangeHandler
        onCancel?: ColorChangeHandler
    }
    interface PhotoshopPicker extends React.ComponentClass<PhotoshopPickerProps> {}
    const PhotoshopPicker: PhotoshopPicker

    interface SketchPickerProps extends ColorPickerProps<SketchPicker> {
        disableAlpha?: boolean
        presetColors?: Array<string>
        width?: string
    }
    interface SketchPicker extends React.ComponentClass<SketchPickerProps> {}
    const SketchPicker: SketchPicker

    interface SliderPickerProps extends ColorPickerProps<SliderPicker> {}
    interface SliderPicker extends React.ComponentClass<SliderPickerProps> {}
    const SliderPicker: SliderPicker

    interface SwatchesPickerProps extends ColorPickerProps<SwatchesPicker> {
        colors?: Array<Array<string>>
        height?: number
        width?: number
    }
    interface SwatchesPicker extends React.ComponentClass<SwatchesPickerProps> {}
    const SwatchesPicker: SwatchesPicker

    interface TwitterPickerProps extends ColorPickerProps<TwitterPicker> {}
    interface TwitterPicker extends React.ComponentClass<TwitterPickerProps> {}
    const TwitterPicker: TwitterPicker

    /* For custom picker */
    interface InjectedColorProps {
        hex?: string
        hsl?: HSLColor
        rgb?: RGBColor
        onChange?: ColorChangeHandler
    }

    function CustomPicker<A>(component: React.ComponentClass<A> | React.StatelessComponent<A>): React.ComponentClass<A & InjectedColorProps>

    interface CustomPickerProps<A> extends React.ClassAttributes<A> {
        color?: Color
        pointer?: React.ReactNode
        onChange?: ColorChangeHandler
    }

    interface AlphaProps extends CustomPickerProps<Alpha> {}
    interface Alpha extends React.ComponentClass<AlphaProps> {}
    const Alpha: Alpha

    interface EditableInputStyles {
        input?: React.CSSProperties
        label?: React.CSSProperties
        wrap?: React.CSSProperties
    }
    interface EditableInputProps extends React.ClassAttributes<Alpha> {
        color?: Color
        label?: string
        onChange?: ColorChangeHandler
        styles?: EditableInputStyles
        value?: any
    }
    interface EditableInput extends React.ComponentClass<EditableInputProps> {}
    const EditableInput: EditableInput

    interface HueProps extends CustomPickerProps<Hue> {
        direction?: "horizontal" | "vertical"
    }
    interface Hue extends React.ComponentClass<HueProps> {}
    const Hue: Hue

    interface SaturationProps extends CustomPickerProps<Saturation> {}
    interface Saturation extends React.ComponentClass<SaturationProps> {}
    const Saturation: Saturation

    interface CheckboardProps extends React.ClassAttributes<Checkboard> {
        grey?: string
        size?: number
        white?: string
    }
    interface Checkboard extends React.ComponentClass<CheckboardProps> {}
    const Checkboard: Checkboard
}

declare module "react-color/lib/components/common/Alpha" { export default ReactColor.Alpha }
declare module "react-color/lib/components/common/Checkboard" { export default ReactColor.Checkboard }
declare module "react-color/lib/components/common/EditableInput" { export default ReactColor.EditableInput }
declare module "react-color/lib/components/common/Hue" { export default ReactColor.Hue }
declare module "react-color/lib/components/common/Saturation" { export default ReactColor.Saturation }
declare module "react-color/lib/components/common/ColorWrap" { export default ReactColor.CustomPicker }

declare module "react-color/lib/components/common" {
    import Alpha from "react-color/lib/components/common/Alpha"
    import Checkboard from "react-color/lib/components/common/Checkboard"
    import EditableInput from "react-color/lib/components/common/EditableInput"
    import Hue from "react-color/lib/components/common/Hue"
    import Saturation from "react-color/lib/components/common/Saturation"

    export {
        Alpha,
        Checkboard,
        EditableInput,
        Hue,
        Saturation
    }
}

declare module "react-color/lib/components/alpha/Alpha" { export default ReactColor.AlphaPicker }
declare module "react-color/lib/components/block/Block" { export default ReactColor.BlockPicker }
declare module "react-color/lib/components/chrome/Chrome" { export default ReactColor.ChromePicker }
declare module "react-color/lib/components/circle/Circle" { export default ReactColor.CirclePicker }
declare module "react-color/lib/components/compact/Compact" { export default ReactColor.CompactPicker }
declare module "react-color/lib/components/github/Github" { export default ReactColor.GithubPicker }
declare module "react-color/lib/components/hue/Hue" { export default ReactColor.HuePicker }
declare module "react-color/lib/components/meterial/Material" { export default ReactColor.MaterialPicker }
declare module "react-color/lib/components/photoshop/Photoshop" { export default ReactColor.PhotoshopPicker }
declare module "react-color/lib/components/sketch/Sketch" { export default ReactColor.SketchPicker }
declare module "react-color/lib/components/slider/Slider" { export default ReactColor.SliderPicker }
declare module "react-color/lib/components/swatches/Swatches" { export default ReactColor.SwatchesPicker }
declare module "react-color/lib/components/twitter/Twitter" { export default ReactColor.TwitterPicker }

declare module "react-color" {
    import AlphaPicker from "react-color/lib/components/alpha/Alpha"
    import BlockPicker from "react-color/lib/components/block/Block"
    import ChromePicker from "react-color/lib/components/chrome/Chrome"
    import CirclePicker from "react-color/lib/components/circle/Circle"
    import CompactPicker from "react-color/lib/components/compact/Compact"
    import GithubPicker from "react-color/lib/components/github/Github"
    import HuePicker from "react-color/lib/components/hue/Hue"
    import MaterialPicker from "react-color/lib/components/meterial/Material"
    import PhotoshopPicker from "react-color/lib/components/photoshop/Photoshop"
    import SketchPicker from "react-color/lib/components/sketch/Sketch"
    import SliderPicker from "react-color/lib/components/slider/Slider"
    import SwatchesPicker from "react-color/lib/components/swatches/Swatches"
    import TwitterPicker from "react-color/lib/components/twitter/Twitter"
    import CustomPicker from "react-color/lib/components/common/ColorWrap"

    export type CustomPickerProps<A> = ReactColor.CustomPickerProps<A>

    export {
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
        CustomPicker
    }
}
