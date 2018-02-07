// Type definitions for react-tooltip 3.3
// Project: https://github.com/wwayne/react-tooltip
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

declare class ReactTooltip extends React.Component<ReactTooltip.Props> { }

declare namespace ReactTooltip {
    /**
     * Hide the tooltip manually, the target is optional, if no target passed in, all existing tooltips will be hidden
     */
    function hide(target?: Element): void;

    /**
     * Rebinding all tooltips
     */
    function rebuild(): void;

    /**
     * Show specific tooltip manually
     */
    function show(target: Element): void;

    interface Offset {
        top?: number;
        right?: number;
        left?: number;
        bottom?: number;
    }

    /**
     * Adding `| string` seems strange but multiple events joined by a space are allowable, i.e. "click focus", so
     * at least using *EventMap will give developers some type hinting, but there's no way we can reliably
     * type this.
     */
    type ElementEvents = (keyof HTMLElementEventMap) | string;
    type WindowEvents = (keyof WindowEventMap) | string;

    type GetContentCallback = () => React.ReactNode;
    type GetContent = GetContentCallback | [GetContentCallback, number];

    type Place = "top" | "right" | "bottom" | "left";
    type Type = "dark" | "success" | "warning" | "error" | "info" | "light";
    type Effect = "float" | "solid";

    /**
     * Available data-* attributes to be used by a tooltip, this interface isn't used by ReactTooltip itself as any
     * data-* attribute can exist on a JSX element without type checking, but it at least be useful for developers
     * to ensure they're using attributes which ReactTooltip support
     */
    interface DataProps {
        'data-place'?: Place;
        'data-type'?: Type;
        'data-effect'?: Effect;
        'data-event'?: ElementEvents;
        'data-event-off'?: ElementEvents;
        'data-iscapture'?: boolean;
        'data-offset'?: Offset;
        'data-multiline'?: boolean;
        'data-class'?: string;
        'data-html'?: boolean;
        'data-delay-hide'?: number;
        'data-delay-show'?: number;
        'data-border'?: boolean;
        'data-tip-disable'?: boolean;
        'data-scroll-hide'?: boolean;
    }

    interface Props {
        id?: string;
        place?: Place;
        type?: Type;
        effect?: Effect;
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
