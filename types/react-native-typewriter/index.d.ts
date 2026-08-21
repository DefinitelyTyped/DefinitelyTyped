import React = require("react");
import { TextProps } from "react-native";

interface TypeWriterProps extends TextProps {
    children: React.ReactNode;

    /**
     * - `-1` - deleting
     * - `0` - no typing (animation paused)
     * - `1` - typing
     *
     * A value of 1 types text left to right until completion. A value of -1 erases text from right to left. A value of 0 stops the animation.
     * @default 0
     */
    typing: -1 | 0 | 1;

    /**
     * This flag will ensure the enclosing container's size and shape is fixed. Prevents the text from shifting around as it grows into its container.
     * @default false
     */
    fixed?: boolean;

    /**
     * The maximum delay between each typed token in milliseconds.
     * @default 100
     */
    maxDelay?: number;

    /**
     * The minimum delay between each typed token in milliseconds.
     * default 20
     */
    minDelay?: number;

    /**
     * Adds additional delay to specific characters before the next character is typed.
     *
     * @example
     * const delayMap = [
     *   // increase delay by 100ms at index 4
     *   { at: 4, delay: 100 },
     *   // increase delay by 400ms following every '.' character
     *   { at: '.', delay: 400 },
     *   // decrease delay by 200ms following every '!' character
     *   { at: /!/, delay: -200 }
     * ];
     */
    delayMap?: Array<{ at: number; delay: number }>;

    /**
     * The time in milliseconds before the first token is typed.
     * @default 200
     */
    initialDelay?: number;

    /**
     * A callback called when each token is typed or erased during the animation.
     * @param token - The token that was typed or erased.
     * @param previousVisibleCharacters - The number of characters visible before the token was typed or erased.
     */
    onTyped?(token: string, previousVisibleCharacters: number): void;

    /**
     * Called once the typing animation has completed. This callback is not called if props.typing is changed to 0 before the animation completes.
     */
    onTypingEnd?(): void;
}

declare class TypeWriter extends React.PureComponent<TypeWriterProps> {}

export default TypeWriter;
