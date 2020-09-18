// Type definitions for rn-swipeable-panel 1.1
// Project: https://github.com/enesozturk/rn-swipeable-panel
// Definitions by: Enes Öztürk <https://github.com/enesozturk>
// Definitions: https://github.com/DefinitelyTyped/types/rn-swipeable-panel

import * as React from 'react';

export interface SwipeablePanelProps extends React.Props<SwipeablePanel> {
    /**
     * Required prop for panels actual state. Set true if you want to open panel
     */
    isActive: boolean;

    /**
     * Set true if you want to show close button
     */
    showCloseButton?: boolean;

    /**
     * Set true if you want to make full with panel
     */
    fullWidth?: boolean;

    /**
     * Set true if you want to disable black background opacity
     */
    noBackgroundOpacity?: boolean;

    /**
     * Use this prop to override panel style
     */
    style?: object;

    /**
     * Use this prop to override close button background style
     */
    closeRootStyle?: object;

    /**
     * Use this prop to override close button icon style
     */
    closeIconStyle?: object;

    /**
     * Set true if you want to close panel by touching outside
     */
    closeOnTouchOutside?: boolean;

    /**
     * Set true if you want to let panel open just large mode
     */
    onlyLarge?: boolean;

    /**
     * Set true if you want to let panel open just small mode
     */
    onlySmall?: boolean;

    /**
     * Set true if you want to open panel large by default
     */
    openLarge?: boolean;

    /**
     * Set true if you want to remove gray bar
     */
    noBar?: boolean;

    /**
     * Use this prop to override bar style
     */
    barStyle?: object;

    /**
     * Set true if you want to make toucable outside of panel
     */
    allowTouchOutside?: boolean;

    // Event Handlers

    /**
     * Required prop to keep panel's state sync with your parent components'state. Will be fired when panel is closed. See the example project.
     */
    onClose: () => void;
}

export default class SwipeablePanel extends React.Component<SwipeablePanelProps, any> {}
