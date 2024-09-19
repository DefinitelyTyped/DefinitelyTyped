import React from "react";
type IntersectionTrackerProps = {
    children: React.ReactNode;
    root?: Element | null;
    threshold?: number;
    rootMargin?: number[] | number;
    style?: React.CSSProperties;
    visibleContent?: boolean;
    onVisible?: () => void;
    intersectionDeley?: number;
};
declare const IntersectionTracker: React.FC<IntersectionTrackerProps>;
export default IntersectionTracker;
