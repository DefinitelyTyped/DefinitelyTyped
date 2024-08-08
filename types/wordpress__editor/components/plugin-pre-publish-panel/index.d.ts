import { IconType } from "@wordpress/components";
import { ComponentType, PropsWithChildren } from "react";

declare namespace PluginPrePublishPanel {
    interface Props extends PropsWithChildren {
        /** An optional class name added to the panel. */
        className?: string;
        /** Title displayed at the top of the panel. */
        title?: string;
        /** Whether to have the panel initially opened. When no title is provided it is always opened. */
        initialOpen?: boolean;
        /** The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar. */
        icon?: IconType;
    }
}

/**
 * Renders provided content to the pre-publish side panel in the publish flow
 * (side panel that opens when a user first pushes "Publish" from the main editor).
 *
 * @example
 * ```jsx
 * import { __ } from '@wordpress/i18n';
 * import { PluginPrePublishPanel } from '@wordpress/editor';
 *
 * const MyPluginPrePublishPanel = () => (
 * 	<PluginPrePublishPanel
 * 		className="my-plugin-pre-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 * 	    { __( 'My panel content' ) }
 * 	</PluginPrePublishPanel>
 * );
 * ```
 */
declare const PluginPrePublishPanel: ComponentType<PluginPrePublishPanel.Props>;

export default PluginPrePublishPanel;
