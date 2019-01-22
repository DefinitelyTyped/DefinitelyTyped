// Type definitions for badgen 2.6
// Project: https://github.com/amio/badgen
// Definitions by: m5d215 <https://github.com/m5d215>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export type ColorPresets =
    | 'green'
    | 'blue'
    | 'red'
    | 'yellow'
    | 'orange'
    | 'purple'
    | 'pink'
    | 'grey'
    | 'gray'
    | 'cyan'
    | 'black';

export interface BadgeCreationParams {
    /**
     * Text representing the subject.
     */
    subject: string;

    /**
     * Text representing the status.
     */
    status: string;

    /**
     * Color RGB or Color Name, optional.
     */
    color?: ColorPresets | string;

    /**
     * 'flat' or undefined, optional.
     */
    style?: 'flat';

    /**
     * Use icon, optional.
     */
    icon?: string;

    /**
     * Use this if icon is not square.
     * @default 13
     */
    iconWidth?: number;
}

export default function badgen(params: BadgeCreationParams): string;
