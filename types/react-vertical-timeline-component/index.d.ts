// Type definitions for react-vertical-timeline-component 2.1
// Project: https://github.com/stephane-monnot/react-vertical-timeline
// Definitions by: Stéphane Monnot <https://github.com/stephane-monnot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
}

export interface VerticalTimelineElementProps {
    id?: string;
    className?: string;
    date?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    position?: string;
    style?: React.CSSProperties;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> { }
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }
