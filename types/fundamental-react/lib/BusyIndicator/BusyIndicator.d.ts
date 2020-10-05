import * as React from 'react';

export type BusyIndicatorSizes = 's' | 'm' | 'l';

export type BusyIndicatorProps = {
    show: boolean;
    className?: string;
    localizedText?: {
        loading?: string;
    };
    size?: BusyIndicatorSizes;
} & React.HTMLAttributes<HTMLDivElement>;

declare const BusyIndicator: React.FunctionComponent<BusyIndicatorProps>;

export default BusyIndicator;
