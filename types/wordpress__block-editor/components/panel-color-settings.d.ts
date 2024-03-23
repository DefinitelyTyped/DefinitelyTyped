import { ColorPalette, PanelBody } from "@wordpress/components";
import { ComponentType } from "react";

declare namespace PanelColorSettings {
    type ColorSetting =
        & Partial<Parameters<typeof ColorPalette>[0]>
        & Pick<Parameters<typeof ColorPalette>[0], "onChange" | "value">
        & { label: string };
    interface Props extends Omit<Parameters<typeof PanelBody>[0], "children"> {
        colorSettings: ColorSetting[];
        disableCustomColors?: boolean | undefined;
    }
}
declare const PanelColorSettings: ComponentType<PanelColorSettings.Props>;

export default PanelColorSettings;
