import React = require("react");

export type BusyIndicatorSizes = "s" | "m" | "l";

export type BusyIndicatorProps = {
    show: boolean;
    className?: string | undefined;
    localizedText?: {
        loading?: string | undefined;
    } | undefined;
    size?: BusyIndicatorSizes | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

declare const BusyIndicator: React.FunctionComponent<BusyIndicatorProps>;

export default BusyIndicator;
