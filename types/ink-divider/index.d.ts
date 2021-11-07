// Type definitions for ink-divider 2.0
// Project: https://github.com/juresotosek/ink-divider#readme
// Definitions by: omjadas <https://github.com/omjadas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

interface DividerProps {
    title?: string | undefined;
    width?: number | undefined;
    padding?: number | undefined;
    titlePadding?: number | undefined;
    titleColor?: string | undefined;
    dividerChar?: string | undefined;
    dividerColor?: string | undefined;
}
declare const Divider: React.FC<DividerProps>;
export = Divider;
