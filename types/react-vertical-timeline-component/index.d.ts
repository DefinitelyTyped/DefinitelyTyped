// Type definitions for react-vertical-timeline-component 3.0
// Project: https://github.com/stephane-monnot/react-vertical-timeline, https://stephane-monnot.github.io/react-vertical-timeline
// Definitions by: Stéphane Monnot <https://github.com/stephane-monnot>
//                 Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface VerticalTimelineProps {
    animate?: boolean | undefined;
    className?: string | undefined;
    layout?: '1-column' | '2-columns' | undefined;
}

export interface VerticalTimelineElementProps {
    id?: string | undefined;
    className?: string | undefined;
    date?: string | undefined;
    dateClassName?: string | undefined;
    iconClassName?: string | undefined;
    iconOnClick?: (() => void) | undefined;
    iconStyle?: React.CSSProperties | undefined;
    icon?: React.ReactNode | undefined;
    intersectionObserverProps?: any;
    onTimelineElementClick?: (() => void) | undefined;
    position?: string | undefined;
    style?: React.CSSProperties | undefined;
    textClassName?: string | undefined;
    contentStyle?: React.CSSProperties | undefined;
    contentArrowStyle?: React.CSSProperties | undefined;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> { }
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }
