import * as React from "react";

export function defineHold(config?: HoldConfig): HoldableConfig;

export interface HoldConfig {
    /** @default 250 */
    updateEvery?: number | undefined;
    /** @default 1000 */
    holdFor?: number | undefined;
}

/** @see defineHold */
export interface HoldableConfig {
    holdProgress(callback: () => void): (updateState: (holdLength: number) => void) => () => void;
    holdComplete(callback: () => void): () => () => void;
}

export interface HoldableProps {
    /** @see defineHold */
    config?: HoldableConfig | undefined;
    onHoldProgress?(): void;
    onHoldComplete?(): void;
    onMouseDown?(): void;
    onTouchStart?(): void;
}

export class Holdable extends React.Component<HoldableProps> {
}

export interface DraggableStyle {
    translateX?: number | undefined;
    translateY?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
    bottom?: number | undefined;
}

export interface DraggableCallbackArgument extends DraggableStyle {
    dx: number;
    dy: number;
}

export type DraggableCallback = (argument: DraggableCallbackArgument) => JSX.Element;

export interface DraggableProps {
    /**
     * An object that defines the initial position of the draggable component.
     * You can pass any of the following styles to it
     * and they'll be updated and passed back out in the callback with every animation tick.
     */
    style: DraggableStyle;
    children: DraggableCallback;
}

export class Draggable extends React.Component<DraggableProps> {
}

export function defineSwipe(config?: SwipeConfig): SwipeableConfig;

export interface SwipeConfig {
    /** @default 100 */
    swipeDistance?: number | undefined;
}

/** @see defineSwipe */
export interface SwipeableConfig {
    onSwipeLeft(current: number, initial: number, callback: () => void): void;
    onSwipeRight(current: number, initial: number, callback: () => void): void;
    onSwipeUp(current: number, initial: number, callback: () => void): void;
    onSwipeDown(current: number, initial: number, callback: () => void): void;
}

export interface SwipeableProps {
    /** @see defineSwipe */
    config?: SwipeableConfig | undefined;
    onSwipeLeft?(): void;
    onSwipeRight?(): void;
    onSwipeUp?(): void;
    onSwipeDown?(): void;
    onMouseDown?(): void;
    onTouchStart?(): void;
}

export class Swipeable extends React.Component<SwipeableProps> {
}

export enum moves {
    UPLEFT,
    UP,
    UPRIGHT,
    LEFT,
    RIGHT,
    DOWNRIGHT,
    DOWN,
    DOWNLEFT,
}

export interface CustomGestureProps {
    config: moves[];
    onGesture(): void;
}

export class CustomGesture extends React.Component<CustomGestureProps> {
}
