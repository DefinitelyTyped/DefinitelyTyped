import { Component, ReactNode } from "react";

export interface ScrollFollowRenderProps {
    onScroll: (
        args: { scrollTop: number; scrollHeight: number; clientHeight: number }
    ) => void;
    follow: boolean;
    startFollowing: () => void;
    stopFollowing: () => void;
}

export interface ScrollFollowProps {
    render: (props: ScrollFollowRenderProps) => ReactNode;
    startFollowing?: boolean;
}

export class ScrollFollow extends Component<ScrollFollowProps> {}

export default ScrollFollow;
