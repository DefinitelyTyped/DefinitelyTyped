import { Component } from "react";

export interface ConfettiProps {
    /**
     * The number of confetti to render.
     * @default 100
     */
    confettiCount?: number;
    /**
     * The duration of the animation in milliseconds.
     * @default 30
     */
    timeout?: number;
    /**
     * Render confetti continuously until stopConfetti() is called.
     *
     * This ignores confettiCount.
     *
     * @default false
     */
    untilStopped?: boolean;
    /**
     * The duration until a confetti reaches bottom.
     */
    duration?: number;
    /**
     * Array of color strings to choose from.
     * @default ["rgb(242.2, 102, 68.8)","rgb(255, 198.9, 91.8)","rgb(122.4, 198.9, 163.2)","rgb(76.5, 193.8, 216.7)","rgb(147.9, 99.4, 140.2)"]
     */
    colors?: string[];
    /**
     * Multiplier for size of confetti (width and heigh).
     * @default 1
     */
    size?: number;
    /**
     * Multiplier for radius of confetti (border radius).
     * @default 1
     */
    bsize?: number;
}

export default class Confetti extends Component<ConfettiProps> {
    /**
     * Start the confetti animation.
     *
     * The optional callback will be called when the entire animation is complete.
     */
    startConfetti(callback?: () => void): void;
    /**
     * Stop the confetti animation.
     */
    stopConfetti(): void;
    /**
     * Remove confetti by its key.
     *
     * This function is used internally.
     */
    removeConfetti(key: number): void;
}
