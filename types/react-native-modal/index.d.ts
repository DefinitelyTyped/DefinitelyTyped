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
     * @type {(SlidingEntrances | string)}
     * @memberof ReactNativeModalProps
     */
    animationIn?: SlidingEntrances | string;

    /**
     * Timing for the modal show animation (in ms)
     *
     * @default 300
     * @type {number}
     * @memberof ReactNativeModalProps
     */
    animationInTiming?: number;

    /**
     * Modal hide animation
     *
     * @default 'slideOutDown'
     * @type {(SlidingExits | string)}
     * @memberof ReactNativeModalProps
     */
    animationOut?: SlidingExits | string;

    /**
     * Timing for the modal hide animation (in ms)
     *
     * @default 300
     * @type {number}
     * @memberof ReactNativeModalProps
     */
    animationOutTiming?: number;

    /**
     * Move the modal up if the keyboard is open
     *
     * @default false
     * @type {boolean}
     * @memberof ReactNativeModalProps
     */
    avoidKeyboard?: boolean;

    /**
     * The backdrop background color
     *
     * @default 'black'
     * @type {string}
     * @memberof ReactNativeModalProps
     */
    backdropColor?: string;

    /**
     * The backdrop opacity when the modal is visible
     *
     * @default 0.70
     * @type {number}
     * @memberof ReactNativeModalProps
     */
    backdropOpacity?: number;

    /**
     * The backdrop show timing (in ms)
     *
     * @default 300
     * @type {number}
     * @memberof ReactNativeModalProps
     */
    backdropTransitionInTiming?: number;

    /**
     * The backdrop hide timing (in ms)
     *
     * @default 300
     * @type {number}
     * @memberof ReactNativeModalProps
     */
    backdropTransitionOutTiming?: number;

    /**
     * The modal content
     *
     * @type {(ReactNode[] | ReactNode)}
     * @memberof ReactNativeModalProps
     */
    children: ReactNode[] | ReactNode;

    /**
     * Show the modal?
     *
     * @default false
     * @type {boolean}
     * @memberof ReactNativeModalProps
     */
    isVisible: boolean;

    /**
     * Style applied to the modal
     *
     * @default null
     * @memberof ReactNativeModalProps
     */
    style?: ViewStyle[] | ViewStyle;

    /**
     * Called when the modal is completely visible
     *
     * @default () => {}
     * @memberof ReactNativeModalProps
     */
    onModalShow?(): void;

    /**
     * Called when the modal is completely hidden
     *
     * @default () => {}
     * @memberof ReactNativeModalProps
     */
    onModalHide?(): void;

    /**
     * Called when the Android back button is pressed
     *
     * @default () => {}
     * @memberof ReactNativeModalProps
     */
    onBackButtonPress?(): void;

    /**
     * Called when the backdrop is pressed
     *
     * @default () => {}
     * @memberof ReactNativeModalProps
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
