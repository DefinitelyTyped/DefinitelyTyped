import { Slot } from '@wordpress/components';
import { FC, ReactNode } from 'react';

declare namespace PluginPostStatusInfo {
    interface Props {
        children: ReactNode;
        /**
         * An optional class name added to the row.
         */
        className?: string;
    }
}

/**
 * Renders a row in the Status & Visibility panel of the Document sidebar.
 * It should be noted that this is named and implemented around the function it serves
 * and not its location, which may change in future iterations.
 *
 * @example
 * ```jsx
 * const { PluginPostStatusInfo } = wp.editPost;
 *
 * const MyPluginPostStatusInfo = () => (
 *     <PluginPostStatusInfo className="my-plugin-post-status-info">
 *         My post status info
 *     </PluginPostStatusInfo>
 * );
 * ```
 */
declare const PluginPostStatusInfo: {
    (props: PluginPostStatusInfo.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};

export default PluginPostStatusInfo;
