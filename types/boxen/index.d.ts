// Type definitions for boxen 2.1
// Project: https://github.com/sindresorhus/boxen#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { BoxDefinition, BoxNames } from 'cli-boxes';

export = boxen;

/**
 * Create boxes in the terminal
 * @param input Text inside the box.
 */
declare function boxen(input: string, options?: boxen.Options): string;

declare namespace boxen {
    interface Options {
        /**
         * Color of the box border.
         * Values: `black` `red` `green` `yellow` `blue` `magenta` `cyan` `white` `gray` or a hex value like `#ff0000`
         */
        borderColor?: string;

        /**
         * Style of the box border.
         * Can be any of the above predefined styles or an object.
         *
         * Predefined values:
         * - `single`
         * ```
         * ┌───┐
         * │foo│
         * └───┘
         * ```
         * - `double`
         * ```
         * ╔═══╗
         * ║foo║
         * ╚═══╝
         * ```
         * - `round` (`single` sides with round corners)
         * ```
         * ╭───╮
         * │foo│
         * ╰───╯
         * ```
         * - `single-double` (`single` on top and bottom, `double` on right and left)
         * ```
         * ╓───╖
         * ║foo║
         * ╙───╜
         * ```
         * - `double-single` (`double` on top and bottom, `single` on right and left)
         * ```
         * ╒═══╕
         * │foo│
         * ╘═══╛
         * ```
         * - `classic`
         * ```
         * +---+
         * |foo|
         * +---+
         * ```
         */
        borderStyle?: BoxNames | BoxDefinition;

        /**
         * Reduce opacity of the border.
         * @default false
         */
        dimBorder?: boolean;

        /**
         * Space between the text and box border.
         * When a number is specified, the left/right padding is 3 times the top/bottom to make it look nice.
         * @default 0
         */
        padding?: number | PositionOptions;

        /**
         * Space around the box.
         * When a number is specified, the left/right margin is 3 times the top/bottom to make it look nice.
         * @default 0
         */
        margin?: number | PositionOptions;

        /**
         * Float the box on the available terminal screen space.
         * @default 'left'
         */
        float?: 'right' | 'center' | 'left';

        /**
         * Color of the background.
         * Values: `black` `red` `green` `yellow` `blue` `magenta` `cyan` `white` `gray` or a hex value like `#ff0000`
         */
        backgroundColor?: string;

        /**
         * Align the text in the box based on the widest line.
         * @default 'left'
         */
        align?: 'left' | 'center' | 'right';
    }

    interface PositionOptions {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }
}
