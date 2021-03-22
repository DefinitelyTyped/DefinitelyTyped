import { Dashicon, MenuItem } from '@wordpress/components';
import { ComponentType, ReactNode } from 'react';

declare namespace PluginMoreMenuItem {
    interface Props extends Omit<MenuItem.Props, 'href'> {
        children: ReactNode;
        /**
         * When `href` is provided then the menu item is represented as an anchor rather than
         * button. It corresponds to the `href` attribute of the anchor.
         */
        href?: string;
        /**
         * A Dashicon slug or a custom JSX element to be rendered to the left of the menu item
         * label.
         */
        icon?: Dashicon.Icon | JSX.Element;
        /**
         * The callback function to be executed when the user clicks the menu item.
         */
        onClick?(): void;
    }
}

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button
 * or link depending on the props provided.  The text within the component appears as the menu item
 * label.
 *
 * @example
 * ```jsx
 * const { PluginMoreMenuItem } = wp.editPost;
 *
 * const MyButtonMoreMenuItem = () => (
 *     <PluginMoreMenuItem
 *         icon="smiley"
 *         onClick={() => console.log('clicked!')}
 *     >
 *         My button title
 *     </PluginMoreMenuItem>
 * );
 * ```
 */
declare const PluginMoreMenuItem: ComponentType<PluginMoreMenuItem.Props>;

export default PluginMoreMenuItem;
