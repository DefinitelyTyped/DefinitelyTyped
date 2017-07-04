// Type definitions for react-tooltip 3.3
// Project: https://github.com/wwayne/react-tooltip
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

declare class ReactTooltip extends React.Component<ReactTooltip.Props> { }

declare namespace ReactTooltip {
    interface Offset {
        top?: number;
        right?: number;
        left?: number;
        bottom?: number;
    }

    type ElementEvents = keyof HTMLElementEventMap;
    type WindowEvents = keyof WindowEventMap;

    type GetContentCallback = () => React.ReactNode;
    type GetContent = GetContentCallback | [GetContentCallback, number];

    interface Props {
        id?: string;
        place?: "top" | "right" | "bottom" | "left";
        type?: "success" | "warning" | "error" | "info" | "light";
        effect?: "float" | "solid";
        event?: ElementEvents;
        eventOff?: ElementEvents;
        globalEventOff?: WindowEvents;
        isCapture?: boolean;
        offset?: Offset;
        multiline?: boolean;
        className?: string;
        html?: boolean;
        delayHide?: number;
        delayShow?: number;
        insecure?: boolean;
        border?: boolean;
        getContent?: GetContent;
        afterShow?(): void;
        afterHide?(): void;
        disable?: boolean;
        scrollHide?: boolean;
        resizeHide?: boolean;
        wrapper?: "div" | "span";
        role?: string;
        class?: string;
        watchWindow?: boolean;
    }
}

export = ReactTooltip;
