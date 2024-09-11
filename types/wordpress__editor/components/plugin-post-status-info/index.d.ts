import { ComponentType, PropsWithChildren } from "react";

declare namespace PluginPostStatusInfo {
    interface Props extends PropsWithChildren {
        /** An optional class name added to the row. */
        className?: string;
    }
}

/**
 * Renders a row in the Summary panel of the Document sidebar.
 * It should be noted that this is named and implemented around the function it serves
 * and not its location, which may change in future iterations.
 *
 * @example
 * ```jsx
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostStatusInfo } from '@wordpress/editor';
 *
 * const MyPluginPostStatusInfo = () => (
 * 	<PluginPostStatusInfo
 * 		className="my-plugin-post-status-info"
 * 	>
 * 		{ __( 'My post status info' ) }
 * 	</PluginPostStatusInfo>
 * );
 * ```
 */
declare const PluginPostStatusInfo: ComponentType<PluginPostStatusInfo.Props>;

export default PluginPostStatusInfo;
