import { IconType } from "@wordpress/components";
import { ComponentType, PropsWithChildren } from "react";

declare namespace PluginSidebarMoreMenuItem {
    interface Props extends PropsWithChildren {
        target?: string;
        icon?: IconType;
    }
}

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down,
 * and can be used to activate the corresponding `PluginSidebar` component.
 * The text within the component appears as the menu item label. *
 *
 * @example
 * ```jsx
 * import { __ } from '@wordpress/i18n';
 * import { PluginSidebarMoreMenuItem } from '@wordpress/editor';
 * import { more } from '@wordpress/icons';
 *
 * const MySidebarMoreMenuItem = () => (
 * 	<PluginSidebarMoreMenuItem
 * 		target="my-sidebar"
 * 		icon={ more }
 * 	>
 * 		{ __( 'My sidebar title' ) }
 * 	</PluginSidebarMoreMenuItem>
 * );
 * ```
 */
declare const PluginSidebarMoreMenuItem: ComponentType<PluginSidebarMoreMenuItem.Props>;

export default PluginSidebarMoreMenuItem;
