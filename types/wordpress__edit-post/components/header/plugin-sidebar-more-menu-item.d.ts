import { Dashicon } from '@wordpress/components';
import { ComponentType, ReactNode } from 'react';

declare namespace PluginSidebarMoreMenuItem {
    interface Props {
        children: ReactNode;
        /**
         * A string identifying the target sidebar you wish to be activated by this menu item. Must
         * be the same as the `name` prop you have given to that sidebar.
         */
        target: string;
        /**
         * A Dashicon slug or a custom JSX element to be rendered to the left of the menu item
         * label.
         */
        icon?: Dashicon.Icon | JSX.Element;
    }
}

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to activate the
 * corresponding `PluginSidebar` component.  The text within the component appears as the menu item
 * label.
 *
 * @example
 * ```jsx
 * const { PluginSidebarMoreMenuItem } = wp.editPost;
 *
 * const MySidebarMoreMenuItem = () => (
 *     <PluginSidebarMoreMenuItem
 *         target="my-sidebar"
 *         icon="smiley"
 *     >
 *         My sidebar title
 *     </PluginSidebarMoreMenuItem>
 * );
 * ```
 */
declare const PluginSidebarMoreMenuItem: ComponentType<PluginSidebarMoreMenuItem.Props>;

export default PluginSidebarMoreMenuItem;
