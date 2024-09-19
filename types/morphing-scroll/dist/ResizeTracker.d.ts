import React from "react";
type ResizeTrackerProps = {
    children: (width: number, height: number) => React.ReactNode;
    onResize?: (width: number, height: number) => void;
    style?: React.CSSProperties;
};
declare const ResizeTracker: React.FC<ResizeTrackerProps>;
export default ResizeTracker;
