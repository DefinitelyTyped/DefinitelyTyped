import { ComponentType } from '@wordpress/element';

declare namespace BlockMover {
    interface Props {
        blockElementId?: string;
        clientIds: string[];
        children?: never;
        instanceId?: string;
        isDraggable?: boolean;
        isHidden?: boolean;
        onDragEnd?(): void;
        onDragStart?(): void;
    }
}
declare const BlockMover: ComponentType<BlockMover.Props>;

export default BlockMover;
