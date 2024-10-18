import { ColorPalette, PanelBody } from "@wordpress/components";
import { ComponentProps, ComponentType } from "react";

declare namespace PanelColorSettings {
    type ColorSetting =
        & Partial<ComponentProps<typeof ColorPalette>>
        & Pick<ComponentProps<typeof ColorPalette>, "onChange" | "value">
        & { label: string };
    interface Props extends Omit<ComponentProps<typeof PanelBody>, "children"> {
        colorSettings: ColorSetting[];
        disableCustomColors?: boolean | undefined;
    }
}
declare const PanelColorSettings: ComponentType<PanelColorSettings.Props>;

export default PanelColorSettings;
