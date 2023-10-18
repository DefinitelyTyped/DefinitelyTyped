import { FC, ReactNode, Ref } from "react";

export interface ReactSizeReporterRef {
    // Use this if for any reason onSizeChange doesn't trigger anymore.
    reattachResizeListener: () => void;
}

declare const ReactSizeReporter: FC<{
    // Children with static or dynamic height or width
    children: ReactNode;
    ref?: Ref<ReactSizeReporterRef>;
    // Callback called on mount and size changes.
    onSizeChange: (newDimensions: { height: number; width: number }) => void;
}>;

export type ReactSizeReporter = typeof ReactSizeReporter;
export default ReactSizeReporter;
