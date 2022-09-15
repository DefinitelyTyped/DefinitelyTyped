// Type definitions for ReactCSS 1.2.0
// Project: http://reactcss.com/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react"

interface LoopableProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<any> | undefined;
    "nth-child": number
    "first-child"?: boolean | undefined
    "last-child"?: boolean | undefined
    even?: boolean | undefined
    odd?: boolean | undefined
}

interface HoverProps<T> {
    children?: React.ReactNode;
    ref?: React.LegacyRef<T> | undefined;
    hover?: boolean | undefined
}

interface Classes<T> {
    default: Partial<T>
    [scope: string]: Partial<T>
}

export type CSS = React.CSSProperties
export function hover<A>(component: React.ComponentClass<A> | React.FunctionComponent<A>): React.ComponentClass<A>
export function loop(index: number, length: number): LoopableProps
export default function reactCSS<T>(classes: Classes<T>, ...activations: Array<any>): T
