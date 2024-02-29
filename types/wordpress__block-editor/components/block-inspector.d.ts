import { ComponentType } from "react";

declare namespace BlockInspector {
    interface Props {
        children?: never | undefined;
        showNoBlockSelectedMessage?: boolean | undefined;
    }
}
declare const BlockInspector: ComponentType<BlockInspector.Props>;

export default BlockInspector;
