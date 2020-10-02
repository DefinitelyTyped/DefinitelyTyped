import { Slot } from '@wordpress/components';
import { FC, ReactNode } from 'react';

declare namespace PluginPostPublishPanel {
    interface Props {
        children: ReactNode;
        /**
         * An optional class name added to the panel.
         */
        className?: string;
        /**
         * Title displayed at the top of the panel.
         */
        title?: string;
        /**
         * Whether to have the panel initially opened. When no title is provided it is always
         * opened.
         * @defaultValue `false`
         */
        initialOpen?: boolean;
    }
}

/**
 * Renders provided content to the post-publish panel in the publish flow (side panel that opens
 * after a user publishes the post).
 *
 * @example
 * ```jsx
 * const { PluginPostPublishPanel } = wp.editPost;
 *
 * const MyPluginPostPublishPanel = () => (
 *     <PluginPostPublishPanel
 *         className="my-plugin-post-publish-panel"
 *         title="My panel title"
 *         initialOpen={true}
 *     >
 *         My panel content
 *     </PluginPostPublishPanel>
 * );
 * ```
 */
declare const PluginPostPublishPanel: {
    (props: PluginPostPublishPanel.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default PluginPostPublishPanel;
