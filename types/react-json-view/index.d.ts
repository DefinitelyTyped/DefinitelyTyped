// Type definitions for react-json-view-dl 1.21
// Project: https://github.com/mac-s-g/react-json-view
// Definitions by: simPod <https://github.com/simPod>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

interface Props {
    displayObjectSize: boolean;
    enableAdd: boolean;
    enableEdit: boolean;
    name: boolean;
    src: unknown;
    theme: string;
}

declare const ReactJson: React.FC<Props>;

export default ReactJson;
