import { ComponentType } from '@wordpress/element';

declare namespace BlockInspector {
    interface Props {
        children?: never;
        showNoBlockSelectedMessage?: boolean;
    }
}
declare const BlockInspector: ComponentType<BlockInspector.Props>;

export default BlockInspector;
