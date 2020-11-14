import * as React from 'react';

export type ScrollElementProps<P> = P & {
    name: string;
    id?: string;
};

export default function<P>(component: React.ComponentType<P>): React.ComponentClass<ScrollElementProps<P>>;
