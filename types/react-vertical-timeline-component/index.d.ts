// Type definitions for react-vertical-timeline-component 3.0
// Project: https://github.com/stephane-monnot/react-vertical-timeline, https://stephane-monnot.github.io/react-vertical-timeline
// Definitions by: Stéphane Monnot <https://github.com/stephane-monnot>
//                 Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns';
}

export interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    date?: string;
    dateClassName?: string;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    intersectionObserverProps?: any;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> { }
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }
