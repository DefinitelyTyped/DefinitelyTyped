import type * as React from "react";

export type NodeHandle = number;

export function findNodeHandle(
    componentOrHandle:
        | null
        | number
        | React.Component<any, any>
        | React.ComponentClass<any>,
): null | NodeHandle;
