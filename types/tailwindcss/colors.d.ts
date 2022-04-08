import type { TailwindColorGroup } from './tailwind-config';

interface TailwindColors {
    black: string;
    white: string;
    rose: TailwindColorGroup;
    pink: TailwindColorGroup;
    fuchsia: TailwindColorGroup;
    purple: TailwindColorGroup;
    violet: TailwindColorGroup;
    indigo: TailwindColorGroup;
    blue: TailwindColorGroup;
    lightBlue: TailwindColorGroup;
    cyan: TailwindColorGroup;
    teal: TailwindColorGroup;
    emerald: TailwindColorGroup;
    green: TailwindColorGroup;
    lime: TailwindColorGroup;
    yellow: TailwindColorGroup;
    amber: TailwindColorGroup;
    orange: TailwindColorGroup;
    red: TailwindColorGroup;
    warmGray: TailwindColorGroup;
    trueGray: TailwindColorGroup;
    gray: TailwindColorGroup;
    coolGray: TailwindColorGroup;
    blueGray: TailwindColorGroup;
}

declare const colors: TailwindColors;

export = colors;
