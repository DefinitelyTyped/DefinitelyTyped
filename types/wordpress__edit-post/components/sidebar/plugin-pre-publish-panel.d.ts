import { Slot } from '@wordpress/components';
import { FC, ReactNode } from '@wordpress/element';

declare namespace PluginPrePublishPanel {
    interface Props {
        children: ReactNode;
        /**
         * An optional class name added to the panel.
         */
        className?: string;
        /**
         * Whether to have the panel initially opened. When no title is provided it is always
         * opened.
         * @defaultValue `false`
         */
        initialOpen?: boolean;
        /**
         * Title displayed at the top of the panel.
         */
        title?: string;
    }
}

/**
 * Renders provided content to the pre-publish side panel in the publish flow (side panel that opens
 * when a user first pushes "Publish" from the main editor).
 *
 * @example
 * ```jsx
 * const { PluginPrePublishPanel } = wp.editPost;
 *
 * const MyPluginPrePublishPanel = () => (
 *     <PluginPrePublishPanel
 *         className="my-plugin-pre-publish-panel"
 *         title="My panel title"
 *         initialOpen={true}
 *     >
 *         My panel content
 *     </PluginPrePublishPanel>
 * );
 * ```
 */
declare const PluginPrePublishPanel: {
    (props: PluginPrePublishPanel.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default PluginPrePublishPanel;
