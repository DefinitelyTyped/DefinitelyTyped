// Type definitions for ReactCSS v1.2.0
// Project: http://reactcss.com/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as React from "react"

interface LoopableProps {
    "first-child"?: boolean
    "last-child"?: boolean
    even?: boolean
    odd?: boolean
    [nthChild: string]: boolean
}

interface HoverProps {
    hover?: boolean
}

interface Classes<T> {
    default: Partial<T>
    [scope: string]: Partial<T>
}

export type CSS = React.CSSProperties
export function hover<A>(component: React.ComponentClass<A> | React.StatelessComponent<A>): React.ComponentClass<A>
export function loop(i: number, length: number): LoopableProps
export default function reactCSS<T>(classes: Classes<T>, ...activations: Array<any>): T
