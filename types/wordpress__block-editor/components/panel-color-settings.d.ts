import { ColorPaletteProps } from "@wordpress/components/build-types/color-palette/types";
import { PanelBodyProps } from "@wordpress/components/build-types/panel/types";
import { ComponentType } from "react";

declare namespace PanelColorSettings {
    type ColorSetting =
        & Partial<ColorPaletteProps>
        & Pick<ColorPaletteProps, "onChange" | "value">
        & { label: string };
    interface Props extends Omit<PanelBodyProps, "children"> {
        colorSettings: ColorSetting[];
        disableCustomColors?: boolean | undefined;
    }
}
declare const PanelColorSettings: ComponentType<PanelColorSettings.Props>;

export default PanelColorSettings;
