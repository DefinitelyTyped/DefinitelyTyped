import * as React from "react";

export interface ScrollRotateProps {
    target?: string | undefined;
    throttle?: number | undefined;
    from?: number | undefined;
    to?: number | undefined;
    method?: "px" | "perc" | undefined;
    loops?: number | undefined;
    animationDuration?: number | undefined;
    children: React.ReactNode;
}

export class ScrollRotate extends React.Component<ScrollRotateProps> {}
