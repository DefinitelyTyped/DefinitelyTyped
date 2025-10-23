import React = require("react");

export type ScrollElementProps<P> = P & {
    name: string;
    id?: string | undefined;
};

export default function<P>(component: React.ComponentType<P>): React.ComponentClass<ScrollElementProps<P>>;
