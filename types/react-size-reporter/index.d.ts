// Type definitions for react-size-reporter 2.0
// Project: https://github.com/berrtech/react-size-reporter
// Definitions by: Mattias Martens <https://github.com/MattiasMartens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { FC, ReactNode, Ref } from 'react';

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
