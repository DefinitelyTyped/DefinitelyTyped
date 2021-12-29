// Type definitions for react-sticky 6.0
// Project: https://github.com/captivationsoftware/react-sticky
// Definitions by: Matej Lednicky <http://www.thinkcreatix.com/>,
//                 Curtis Warren <https://github.com/curtisw0>,
//                 Andrew Hyndman <https://github.com/ajhyndman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export const StickyContainer: React.ComponentClass<
    React.HTMLAttributes<HTMLDivElement>
>;

export interface StickyChildArgs {
    style: React.CSSProperties;
    isSticky: boolean;
    wasSticky: boolean;
    distanceFromTop: number;
    distanceFromBottom: number;
    calculatedHeight: number;
}

export interface StickyProps {
    children: (args: StickyChildArgs) => React.ReactElement;
    relative?: boolean | undefined;
    isActive?: boolean | undefined;
    className?: string | undefined;
    style?: any;
    stickyClassName?: string | undefined;
    stickyStyle?: any;
    topOffset?: number | undefined;
    bottomOffset?: number | undefined;
    onStickyStateChange?(isSticky: boolean): void;
    disableCompensation?: boolean | undefined;
    disableHardwareAcceleration?: boolean | undefined;
}

export const Sticky: React.ComponentClass<StickyProps>;
