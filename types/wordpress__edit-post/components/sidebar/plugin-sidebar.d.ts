import { Dashicon } from '@wordpress/components';
import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PluginSidebar {
    interface Props {
        children: ReactNode;
        /**
         * An optional class name added to the sidebar body.
         */
        className?: string;
        /**
         * A Dashicon slug or a custom JSX element to be rendered when the sidebar is pinned to
         * toolbar.
         */
        icon?: Dashicon.Icon | JSX.Element;
        /**
         * Whether to allow to pin sidebar to toolbar.
         * @defaultValue `true`
         */
        isPinnable?: boolean;
        /**
         * A string identifying the sidebar. Must be unique for every sidebar registered within the
         * scope of your plugin.
         */
        name: string;
        /**
         * Title displayed at the top of the sidebar.
         */
        title: string;
    }
}

/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content
 * within the sidebar.
 *
 * @see {@link PluginSidebarMoreMenuItem }
 *
 * @example
 * ```jsx
 * const { PanelBody } = wp.components;
 * const { PluginSidebar } = wp.editPost;
 *
 * const MyPluginSidebar = () => (
 *     <PluginSidebar
 *         name="my-sidebar"
 *         title="My sidebar title"
 *         icon="smiley"
 *     >
 *         <PanelBody>
 *             My sidebar content
 *         </PanelBody>
 *     </PluginSidebar>
 * );
 *
 * // If you wish to display the sidebar, you can with use the
 * // `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API
 * wp.data.dispatch('core/edit-post').openGeneralSidebar('plugin-name/my-sidebar');
 * ```
 */
declare const PluginSidebar: ComponentType<PluginSidebar.Props>;

export default PluginSidebar;
