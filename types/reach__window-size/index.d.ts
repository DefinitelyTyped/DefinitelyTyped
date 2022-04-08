// Type definitions for @reach/window-size 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface WindowSizeProps {
    children: (size: { width: number; height: number }) => React.ReactNode;
}

declare const WindowSize: React.FC<WindowSizeProps>;
export default WindowSize;
