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
        nextFormatter?: Formatter,
    ) => React.ReactNode;

    interface ReactTimeagoProps<T extends React.ElementType> {
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
    T extends React.ElementType<P>,
    P = React.ComponentProps<T>,
> extends React.Component<
    ReactTimeago.ReactTimeagoProps<T> & P
> {}

export = ReactTimeago;
