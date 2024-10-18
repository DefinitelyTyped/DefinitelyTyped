declare namespace GorillaEngine.UI {
    interface Clickable {
        interceptsMouseClicks: boolean;
        allowClicksOnChildren: boolean;
        modifiedClickAction: string;
        doubleClickAction: string;
        mouseEnterAction: string;
        mouseExitAction: string;
        clickMask: string;
        mouseCursorType:
            | "none"
            | "normal"
            | "wait"
            | "IBeam"
            | "cross hair"
            | "copying"
            | "pointing hand"
            | "dragging hand"
            | "left right resize"
            | "up down resize"
            | "up down left right resize"
            | "top edge resize"
            | "bottom edge resize"
            | "left edge resize"
            | "right edge resize"
            | "top left corner resize"
            | "top right corner resize"
            | "bottom left corner resize"
            | "bottom right corner resize";
    }
}
