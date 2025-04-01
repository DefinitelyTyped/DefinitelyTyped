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
