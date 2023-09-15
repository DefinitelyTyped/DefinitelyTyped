import * as React from "react";

export type CounterProps = {
    disableStyles?: boolean | undefined;
    localizedText?: {
        counterLabel?: string | undefined;
    } | undefined;
    notification?: boolean | undefined;
} & React.HTMLAttributes<HTMLSpanElement>;

declare const Counter: React.FunctionComponent<CounterProps> & { displayName: "Counter" };

export default Counter;
