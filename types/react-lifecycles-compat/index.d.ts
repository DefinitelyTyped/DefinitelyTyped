import React = require("react");

export function polyfill<T extends React.ComponentType<any>>(
    Comp: T,
): T & { [K in keyof T]: T[K] };
