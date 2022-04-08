import * as React from "react";

export type CounterProps = {
    disableStyles?: boolean;
    localizedText?: {
        counterLabel?: string;
    };
    notification?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

declare const Counter: React.FunctionComponent<CounterProps> & {displayName: "Counter"};

export default Counter;
