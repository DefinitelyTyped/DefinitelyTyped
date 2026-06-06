import { ComponentType } from "react";

declare namespace BlockMover {
    interface Props {
        blockElementId?: string | undefined;
        clientIds: string[];
        children?: never | undefined;
        instanceId?: string | undefined;
        isDraggable?: boolean | undefined;
        isHidden?: boolean | undefined;
        onDragEnd?(): void;
        onDragStart?(): void;
    }
}
declare const BlockMover: ComponentType<BlockMover.Props>;

export default BlockMover;
