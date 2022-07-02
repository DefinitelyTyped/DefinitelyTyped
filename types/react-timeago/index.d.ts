// Type definitions for react-timeago 4.1
// Project: https://github.com/nmn/react-timeago
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
//                 Mike Martin <https://github.com/mcmar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from "react";

declare namespace ReactTimeago {
    type Unit =
        | "second"
        | "minute"
        | "hour"
        | "day"
        | "week"
        | "month"
        | "year";

    type Suffix = "ago" | "from now";

    type Formatter = (
        value: number,
        unit: Unit,
        suffix: Suffix,
        epochMiliseconds: number,
        nextFormatter?: Formatter
    ) => React.ReactNode;

    interface ReactTimeagoProps<T extends React.ComponentType | keyof JSX.IntrinsicElements = 'time'> {
        readonly live?: boolean | undefined;
        readonly minPeriod?: number | undefined;
        readonly maxPeriod?: number | undefined;
        readonly component?: T | undefined;
        readonly title?: string | undefined;
        readonly formatter?: Formatter | undefined;
        readonly date: string | number | Date;
        readonly now?: (() => number) | undefined;
    }
}

declare class ReactTimeago<
    T extends React.ComponentType | keyof JSX.IntrinsicElements
> extends React.Component<
    ReactTimeago.ReactTimeagoProps<T> & React.ComponentProps<T>
> {}

export = ReactTimeago;
