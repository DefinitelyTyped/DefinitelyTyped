import * as React from "react";

import { TransitionCallbacks } from "react-overlays";
import { TransitionProps } from "react-transition-group/Transition";

import { RootCloseWrapper } from ".";
import { PortalProps } from "./Portal";

declare class Overlay extends React.Component<Overlay.OverlayProps> {}
export = Overlay;

declare namespace Overlay {
    type Placements = 'top' | 'left' | 'right' | 'bottom';

    interface OverlayRenderProps {
        show: boolean;
        placement: Placements;
        outOfBoundaries?: boolean;
        scheduleUpdate(): void;
        props: {
            ref: (popperNode: HTMLElement | null) => void;
            style: { [key: string]: string | number };
            'aria-labelledby'?: string;
        };
        arrowProps: {
            ref: (popperNode: HTMLElement | null) => void;
            style: { [key: string]: string | number };
        };
    }

    interface OverlayProps extends TransitionCallbacks, PortalProps {
        /**
         * Set the visibility of the Overlay
         */
        show?: boolean;

        /** Specify where the overlay element is positioned in relation to the target element */
        placement?: Placements;

        /**
         * Enables the Popper.js `flip` modifier, allowing the Overlay to
         * automatically adjust it's placement in case of overlap with the viewport or toggle.
         */
        flip?: boolean;

        /**
         * A render prop that returns an element to overlay and position. See
         * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
         */
        children(renderProps: OverlayRenderProps): React.ReactElement;

        /**
         * A set of popper options and props passed directly to react-popper's Popper component.
         */
        popperConfig?: object;

        /**
         * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
         */
        rootClose?: boolean;

        /**
         * Specify event for toggling overlay
         */
        rootCloseEvent?: RootCloseWrapper.RootCloseWrapperProps['event'];

        /**
         * Specify disabled for disable RootCloseWrapper
         */
        rootCloseDisabled?: boolean;

        /**
         * A Callback fired by the Overlay when it wishes to be hidden.
         *
         * __required__ when `rootClose` is `true`.
         */
        onHide?(props: PortalProps, ...args: any[]): any;

        /**
         * A `react-transition-group@2.0.0` `<Transition/>` component
         * used to animate the overlay as it changes visibility.
         */
        transition?: React.ComponentType<TransitionProps>;

        target?: React.ReactInstance | (() => React.ReactInstance);
    }
}
