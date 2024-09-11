import { IconType } from "@wordpress/components";
import { ComponentType, PropsWithChildren } from "react";

declare namespace PluginMoreMenuItem {
    interface Props extends PropsWithChildren {
        /** When `href` is provided, then the menu item is represented as an anchor rather than a button. It corresponds to the `href` attribute of the anchor. */
        href?: string;
        /** The callback function to be executed when the user clicks the menu item. */
        onClick?: () => void;
        /** The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar. */
        icon?: IconType;
    }
}

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
 * The text within the component appears as the menu item label.
 *
 * @example
 * ```jsx
 * import { __ } from '@wordpress/i18n';
 * import { PluginMoreMenuItem } from '@wordpress/editor';
 * import { more } from '@wordpress/icons';
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * const MyButtonMoreMenuItem = () => (
 * 	<PluginMoreMenuItem
 * 		icon={ more }
 * 		onClick={ onButtonClick }
 * 	>
 * 		{ __( 'My button title' ) }
 * 	</PluginMoreMenuItem>
 * );
 * ```
 */
declare const PluginMoreMenuItem: ComponentType<PluginMoreMenuItem.Props>;

export default PluginMoreMenuItem;
