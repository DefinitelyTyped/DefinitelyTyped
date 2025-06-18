import * as React from "react";

interface LoopableProps extends React.RefAttributes<any> {
    children?: React.ReactNode;
    "nth-child": number;
    "first-child"?: boolean | undefined;
    "last-child"?: boolean | undefined;
    even?: boolean | undefined;
    odd?: boolean | undefined;
}

interface HoverProps<T> extends React.RefAttributes<T> {
    children?: React.ReactNode;
    hover?: boolean | undefined;
}

interface Classes<T> {
    default: Partial<T>;
    [scope: string]: Partial<T>;
}

export type CSS = React.CSSProperties;
export function hover<A>(component: React.ComponentClass<A> | React.FunctionComponent<A>): React.ComponentClass<A>;
export function loop(index: number, length: number): LoopableProps;
export default function reactCSS<T>(classes: Classes<T>, ...activations: any[]): T;
