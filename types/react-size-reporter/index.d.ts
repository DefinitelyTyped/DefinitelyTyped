// Type definitions for react-size-reporter 2.0
// Project: https://github.com/berrtech/react-size-reporter
// Definitions by: Mattias Martens <https://github.com/MattiasMartens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

declare const ReactSizeReporter: React.FC<{
    children: React.ReactNode;
    onSizeChange: (newDimensions: { height: number; width: number }) => void;
}>;

export default ReactSizeReporter;
