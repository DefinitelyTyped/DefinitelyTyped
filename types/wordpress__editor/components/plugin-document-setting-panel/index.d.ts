import { ComponentType, PropsWithChildren } from "react";
import { IconType } from "@wordpress/components"

declare namespace PluginDocumentSettingPanel {
    interface Props extends PropsWithChildren {
        /** A machine-friendly name for the panel. */
        name: string,
        /** An optional class name added to the row. */
        className?: string,
        /** The title of the panel */
        title: string,
        /** The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar. */
        icon?: IconType
    }
}
declare const PluginDocumentSettingPanel: ComponentType<PluginDocumentSettingPanel.Props>;

export default PluginDocumentSettingPanel;
