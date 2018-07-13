// Type definitions for react-sticky 6.0
// Project: https://github.com/captivationsoftware/react-sticky
// Definitions by: Matej Lednicky <http://www.thinkcreatix.com/>, Curtis Warren <https://github.com/curtisw0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

export const StickyContainer: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>>;

export interface StickyProps {
    relative?: boolean;
    isActive?: boolean;
    className?: string;
    style?: any;
    stickyClassName?: string;
    stickyStyle?: any;
    topOffset?: number;
    bottomOffset?: number;
    onStickyStateChange?(isSticky: boolean): void;
    disableCompensation?: boolean;
    disableHardwareAcceleration?: boolean;
}

export const Sticky: React.ComponentClass<StickyProps>;
