import { IconType } from "@wordpress/components";
import { ComponentType, PropsWithChildren } from "react";

declare namespace PluginDocumentSettingPanel {
    interface Props extends PropsWithChildren {
        /** A machine-friendly name for the panel. */
        name: string;
        /** An optional class name added to the row. */
        className?: string;
        /** The title of the panel */
        title?: string;
        /** The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar. */
        icon?: IconType;
    }
}

/**
 * Renders items below the Status & Availability panel in the Document Sidebar.
 *
 * @example
 * ```jsx
 * import { registerPlugin } from '@wordpress/plugins';
 * import { PluginDocumentSettingPanel } from '@wordpress/editor';
 *
 * const MyDocumentSettingTest = () => (
 * 		<PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel" name="my-panel">
 * 			<p>My Document Setting Panel</p>
 * 		</PluginDocumentSettingPanel>
 * 	);
 *
 *  registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
 * ```
 */
declare const PluginDocumentSettingPanel: ComponentType<PluginDocumentSettingPanel.Props>;

export default PluginDocumentSettingPanel;
