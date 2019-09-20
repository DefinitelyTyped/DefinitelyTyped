import { ComponentType, MouseEventHandler } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';

declare namespace PluginBlockSettingsMenuItem {
    interface Props {
        /**
         * An array containing a list of block names for which the item should be shown. If not present,
         * it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if
         * all of them are in the whitelist.
         */
        allowedBlocks?: string[];
        /**
         * A dashicon slug, or a custom JSX element.
         * @defaultValue `"admin-plugins"`
         */
        icon?: JSX.Element | Dashicon.Icon;
        /**
         * The menu item text.
         */
        label: string;
        /**
         * Callback function to be executed when the user click the menu item.
         */
        onClick: MouseEventHandler<HTMLButtonElement>;
        /**
         * If it should be rendered smaller. (This is undocumented).
         */
        small?: boolean;
    }
}

/**
 * Renders a new item in the block settings menu.
 *
 * @example
 * ```jsx
 * import { PluginBlockSettingsMenuItem } from wp.editPost;
 *
 * const MyPluginBlockSettingsMenuItem = () => (
 *     <PluginBlockSettingsMenuItem
 *         allowedBlocks={['core/paragraph']}
 *         icon="carrot"
 *         label="Menu item text"
 *         onClick={() => console.log('clicked')}
 *     />
 * );
 * ```
 */
declare const PluginBlockSettingsMenuItem: ComponentType<PluginBlockSettingsMenuItem.Props>;

export default PluginBlockSettingsMenuItem;
