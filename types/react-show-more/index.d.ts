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
