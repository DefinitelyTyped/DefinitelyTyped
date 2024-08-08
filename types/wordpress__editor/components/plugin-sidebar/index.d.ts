import { IconType } from "@wordpress/components";
import { ComponentType, PropsWithChildren } from "react";

declare namespace PluginSidebar {
    interface Props extends PropsWithChildren {
        /** A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin. */
        name: string;
        /** An optional class name added to the sidebar body. */
        className?: string;
        /** Title displayed at the top of the sidebar. */
        title?: string;
        /** Whether to allow to pin sidebar to the toolbar. When set to `true` it also automatically renders a corresponding menu item. */
        isPinnable?: boolean;
        /** The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar. */
        icon?: IconType;
    }
}

/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.
 * It also automatically renders a corresponding `PluginSidebarMenuItem` component when `isPinnable` flag is set to `true`.
 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API:
 *
 * ```js
 * wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
 * ```
 *
 * @see PluginSidebarMoreMenuItem

 * @example
 * ```jsx
 * import { __ } from '@wordpress/i18n';
 * import { PanelBody } from '@wordpress/components';
 * import { PluginSidebar } from '@wordpress/editor';
 * import { more } from '@wordpress/icons';
 *
 * const MyPluginSidebar = () => (
 * 	<PluginSidebar
 * 		name="my-sidebar"
 * 		title="My sidebar title"
 * 		icon={ more }
 * 	>
 * 		<PanelBody>
 * 			{ __( 'My sidebar content' ) }
 * 		</PanelBody>
 * 	</PluginSidebar>
 * );
 * ```
 */
declare const PluginSidebar: ComponentType<PluginSidebar.Props>;

export default PluginSidebar;
