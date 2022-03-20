import type { TailwindColorGroup } from './tailwind-config';

interface TailwindColors {
    inherit: string;
    current: string;
    transparent: string;
    black: string;
    white: string;
    slate: TailwindColorGroup;
    gray: TailwindColorGroup;
    zinc: TailwindColorGroup;
    neutral: TailwindColorGroup;
    stone: TailwindColorGroup;
    red: TailwindColorGroup;
    orange: TailwindColorGroup;
    amber: TailwindColorGroup;
    yellow: TailwindColorGroup;
    lime: TailwindColorGroup;
    green: TailwindColorGroup;
    emerald: TailwindColorGroup;
    teal: TailwindColorGroup;
    cyan: TailwindColorGroup;
    sky: TailwindColorGroup;
    blue: TailwindColorGroup;
    indigo: TailwindColorGroup;
    violet: TailwindColorGroup;
    purple: TailwindColorGroup;
    fuchsia: TailwindColorGroup;
    pink: TailwindColorGroup;
    rose: TailwindColorGroup;
    /**
     * @deprecated renamed to 'sky' in v2.2
     */
    lightBlue: TailwindColorGroup;
    /**
     * @deprecated renamed to 'stone' in v3.0
     */
    warmGray: TailwindColorGroup;
    /**
     * @deprecated renamed to 'neutral' in v3.0
     */
    trueGray: TailwindColorGroup;
    /**
     * @deprecated renamed to 'gray' in v3.0
     */
    coolGray: TailwindColorGroup;
    /**
     * @deprecated renamed to 'slate' in v3.0
     */
    blueGray: TailwindColorGroup;
}

declare const colors: TailwindColors;

export = colors;
