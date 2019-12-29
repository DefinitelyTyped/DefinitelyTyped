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

    interface ReactTimeagoProps<T extends React.ComponentType> {
        readonly live?: boolean;
        readonly minPeriod?: number;
        readonly maxPeriod?: number;
        readonly component?: string | T;
        readonly title?: string;
        readonly formatter?: Formatter;
        readonly date: string | number | Date;
        readonly now?: () => number;
    }
}

declare class ReactTimeago<
    T extends React.ComponentType
> extends React.Component<
    ReactTimeago.ReactTimeagoProps<T> & React.ComponentProps<T>
> {}

export = ReactTimeago;
