// Type definitions for react-native-modalbox 1.4
// Project: https://github.com/maxs15/react-native-modalbox#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ModalProps {
    children?: React.ReactNode;

    /**
     * Checks if the modal is open
     *
     * Default is false
     *
     */
    isOpen?: boolean | undefined;

    /**
     * Checks if the modal is disabled
     *
     * Default is false
     *
     */
    isDisabled?: boolean | undefined;

    /**
     * If the modal can be closed by pressing on the backdrop
     *
     * Default is true
     *
     */
    backdropPressToClose?: boolean | undefined;

    /**
     * If the modal can be closed by swiping
     *
     * Default is true
     *
     */
    swipeToClose?: boolean | undefined;

    /**
     * The threshold to reach in pixels to close the modal
     *
     * Default is 50
     *
     */
    swipeThreshold?: number | undefined;

    /**
     * The height in pixels of the swipeable area
     *
     * Default is the Window Height
     *
     */
    swipeArea?: number | undefined;

    /**
     * The final position of the modal.
     * Accepts top, center or bottom
     *
     * Default is center
     *
     */
    position?: 'top' | 'center' | 'bottom' | string | undefined;

    /**
     * The direction modal enters from
     *
     * Default is bottom
     *
     */
    entry?: 'top' | 'bottom' | string | undefined;

    /**
     * If a backdrop is displayed behind the modal
     *
     * Default is true
     *
     */
    backdrop?: boolean | undefined;

    /**
     * Opacity of the backdrop
     *
     * Default is 0.5
     *
     */
    backdropOpacity?: number | undefined;

    /**
     * Background color of the backdrop
     *
     * Default is black
     *
     */
    backdropColor?: string | undefined;

    /**
     * Add an element in the backdrop (a close button for example)
     *
     * Default is null
     *
     */
    backdropContent?: React.ReactNode | undefined;

    /**
     * Duration of the animation
     *
     * Default is 400ms
     *
     */
    animationDuration?: number | undefined;

    /**
     * (Android only) Close modal when receiving back button event
     *
     * Default is false
     *
     */
    backButtonClose?: boolean | undefined;

    /**
     *
     * Default is false
     */
    coverScreen?: boolean | undefined;

    /**
     * If the modal should appear open without animation upon first mount
     *
     * Default is false
     *
     */
    startOpen?: boolean | undefined;

    /**
     * This property prevent the modal to cover the ios status bar when the modal is scrolling up because the keyboard is opening
     *
     * Default is ios:22, android:0
     */
    keyboardTopOffset?: number | undefined;

    /**
     * Custom styling for the content area
     */
    style?: StyleProp<ViewStyle> | undefined;

    /**
     * Enables the hardware acceleration to animate the modal. Please note that enabling this can cause some flashes in a weird way when animating
     *
     * Default is true
     *
     */
    useNativeDriver?: boolean | undefined;

    /**
     * Event fired when the modal is closed and the animation is complete
     *
     */
    onClosed?(): void;

    /**
     * Event fired when the modal is opened and the animation is complete
     *
     */
    onOpened?(): void;

    /**
     * When the state of the swipe to close feature has changed
     * (useful to change the content of the modal, display a message for example)
     *
     *
     */
    onClosingState?(state: boolean): void;
}

export default class Modal extends React.Component<ModalProps> {
    /**
     * Open the modal
     *
     *
     */
    open(): void;

    /**
     * Close the modal
     *
     *
     */
    close(): void;
}
