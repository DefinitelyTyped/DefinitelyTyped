// Type definitions for react-native-modal 3.1
// Project: https://github.com/react-native-community/react-native-modal
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentClass, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
export interface ReactNativeModalProps {
    /**
     * Modal show animation
     *
     * @default 'slideInUp'
     */
    animationIn?: SlidingEntrances | string;

    /**
     * Timing for the modal show animation (in ms)
     *
     * @default 300
     */
    animationInTiming?: number;

    /**
     * Modal hide animation
     *
     * @default 'slideOutDown'
     */
    animationOut?: SlidingExits | string;

    /**
     * Timing for the modal hide animation (in ms)
     *
     * @default 300
     */
    animationOutTiming?: number;

    /**
     * Move the modal up if the keyboard is open
     *
     * @default false
     */
    avoidKeyboard?: boolean;

    /**
     * The backdrop background color
     *
     * @default 'black'
     */
    backdropColor?: string;

    /**
     * The backdrop opacity when the modal is visible
     *
     * @default 0.70
     */
    backdropOpacity?: number;

    /**
     * The backdrop show timing (in ms)
     *
     * @default 300
     */
    backdropTransitionInTiming?: number;

    /**
     * The backdrop hide timing (in ms)
     *
     * @default 300
     */
    backdropTransitionOutTiming?: number;

    /**
     * The modal content
     *
     */
    children: ReactNode[] | ReactNode;

    /**
     * Show the modal?
     *
     * @default false
     */
    isVisible: boolean;

    /**
     * Style applied to the modal
     *
     * @default null
     */
    style?: ViewStyle[] | ViewStyle;

    /**
     * Called when the modal is completely visible
     *
     * @default () => {}
     */
    onModalShow?(): void;

    /**
     * Called when the modal is completely hidden
     *
     * @default () => {}
     */
    onModalHide?(): void;

    /**
     * Called when the Android back button is pressed
     *
     * @default () => {}
     */
    onBackButtonPress?(): void;

    /**
     * Called when the backdrop is pressed
     *
     * @default () => {}
     */
    onBackdropPress?(): void;
}

export interface ReactNativeModal
    extends ComponentClass<ReactNativeModalProps> {
    _close(): void;
}

declare const ReactNativeModal: ReactNativeModal;

export default ReactNativeModal;

type AttentionSeekers =
    | 'bounce'
    | 'flash'
    | 'jello'
    | 'pulse'
    | 'rotate'
    | 'shake'
    | 'swing'
    | 'rubberBand'
    | 'tada'
    | 'wobble';
type BouncingEntrances =
    | 'bounceIn'
    | 'bounceInUp'
    | 'bounceInDown'
    | 'bounceInRight'
    | 'bounceInLeft';
type BouncingExits =
    | 'bounceOut'
    | 'bounceOutUp'
    | 'bounceOutDown'
    | 'bounceOutRight'
    | 'bounceOutLeft';
type FadingEntrances =
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInUp'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeInDownBig'
    | 'fadeInUpBig'
    | 'fadeInLeftBig'
    | 'fadeInRightBig';
type FadingExits =
    | 'fadeOut'
    | 'fadeOutDown'
    | 'fadeOutUp'
    | 'fadeOutLeft'
    | 'fadeOutRight'
    | 'fadeOutDownBig'
    | 'fadeOutUpBig'
    | 'fadeOutLeftBig'
    | 'fadeOutRightBig';
type Flippers = 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY';
type LightSpeed = 'lightSpeedIn' | 'lightSpeedOut';
export type SlidingEntrances =
    | 'slideInDown'
    | 'slideInUp'
    | 'slideInLeft'
    | 'slideInRight';
export type SlidingExits =
    | 'slideOutDown'
    | 'slideOutUp'
    | 'slideOutLeft'
    | 'slideOutRight';
type ZoomingEntrances =
    | 'zoomIn'
    | 'zoomInDown'
    | 'zoomInUp'
    | 'zoomInLeft'
    | 'zoomInRight';
type ZoomingExits =
    | 'zoomOut'
    | 'zoomOutDown'
    | 'zoomOutUp'
    | 'zoomOutLeft'
    | 'zoomOutRight';

export type EntranceDefinitions =
    | BouncingEntrances
    | FadingEntrances
    | SlidingEntrances
    | ZoomingEntrances;
export type ExitDefinitions =
    | BouncingExits
    | FadingExits
    | SlidingExits
    | ZoomingExits;

export type AnimationDefinitions =
    | AttentionSeekers
    | BouncingEntrances
    | BouncingExits
    | FadingEntrances
    | FadingExits
    | Flippers
    | LightSpeed
    | SlidingEntrances
    | SlidingExits
    | ZoomingEntrances
    | ZoomingExits;
