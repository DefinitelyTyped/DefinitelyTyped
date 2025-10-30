import { ColorPalette, GradientPicker } from "@wordpress/components";
import type { ComponentProps, ComponentType, ReactNode } from "react";

declare namespace PanelColorSettings {
    interface ColorSetting {
        value: string;
        onChange: (value: string | undefined) => void;
        label: string;
    }
    interface Props {
        /** A user-provided set of color settings. */
        colorSettings?: ColorSetting[];
        /** Added to the underlying ToolsPanel instance. */
        className?: string;
        /** Array of colors to be used. */
        colors?: ComponentProps<typeof ColorPalette>["colors"];
        /** Not recommended to be used since `PanelColorSettings` resets it. */
        gradients?: ComponentProps<typeof GradientPicker>["gradients"];
        /** Whether the addition of custom colors is enabled. */
        disableCustomColors?: boolean;
        /** Not recommended to be used since `PanelColorSettings` sets it. */
        disableCustomGradients?: boolean;
        /** Displayed below the underlying `PanelColorGradientSettings` instance. */
        children?: ReactNode;
        /** Title of the underlying `ToolsPanel`. */
        title?: string;
        /** Whether to show the title of the `ToolsPanel`. */
        showTitle?: boolean;
        /** Whether this is rendered in the sidebar. */
        __experimentalIsRenderedInSidebar?: boolean;
        /** Whether to enable setting opacity when specifying a color. */
        enableAlpha?: boolean;
    }
}
declare const PanelColorSettings: ComponentType<PanelColorSettings.Props>;

export default PanelColorSettings;
