// Type definitions for react-show-more 2.0
// Project: https://github.com/One-com/react-show-more
// Definitions by: Naor Torgeman <https://github.com/naortor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ReactShowMoreProps {
    lines?: number | undefined;
    more?: string | undefined;
    less?: string | undefined;
    children?: string | undefined;
    anchorClass?: string | undefined;
}

declare const ShowMore: React.ClassicComponentClass<ReactShowMoreProps>;
export default ShowMore;
