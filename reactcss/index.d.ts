// Type definitions for ReactCSS v1.0.0
// Project: http://reactcss.com/
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

interface Classes {
    default: any
    [scope: string]: any
}

export function hover<A>(component: React.ComponentClass<A> | React.StatelessComponent<A>): React.ComponentClass<A>
export function loop(i: number, length: number): LoopableProps
export default function reactCSS(classes: Classes, ...activations: Array<any>): any
