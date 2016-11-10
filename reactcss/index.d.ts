// Type definitions for ReactCSS v1.0.0
// Project: http://reactcss.com/
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReactCSS {
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
}

declare module "reactcss" {
    export type LoopableProps = ReactCSS.LoopableProps
    export function hover<A>(component: React.ComponentClass<A> | React.StatelessComponent<A>): React.ComponentClass<A>
    export function loop(i: number, length: number): ReactCSS.LoopableProps
    export default function reactCSS (classes: ReactCSS.Classes, ...activations: Array<any>): any
}
