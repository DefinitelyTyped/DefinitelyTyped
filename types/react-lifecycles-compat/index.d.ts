import * as React from "react";

export function polyfill<T extends React.ComponentType<any>>(
    Comp: T,
): T & { [K in keyof T]: T[K] };
