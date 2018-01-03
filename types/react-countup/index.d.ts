// Type definitions for react-countup 3.0.2
// Project: https://github.com/glennreyes/react-countup
// Definitions by: Ivan Jiang <https://github.com/iplus26>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5.2

declare module "react-countup" {
    import * as React from "react";

    export interface ComponentProps {
        start: number
        end: number
        duration?: number
        decimals?: number
        useEasing?: boolean
        separator?: string
        decimal?: string
        prefix?: string
        suffix?: string
        className?: string
        redraw?: boolean
        onComplete?: Function
        onStart?: Function
        easingFn?: Function
        formattingFn?: Function
    }

    export default class Form extends React.Component<ComponentProps> { }
}
