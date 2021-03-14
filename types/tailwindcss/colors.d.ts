import type { TailwindColorConfig, TailwindColorGroup } from './tailwind-config';

interface TailwindColors extends TailwindColorConfig {
    rose: TailwindColorGroup;
    fuchsia: TailwindColorGroup;
    violet: TailwindColorGroup;
    lightBlue: TailwindColorGroup;
    cyan: TailwindColorGroup;
    teal: TailwindColorGroup;
    emerald: TailwindColorGroup;
    lime: TailwindColorGroup;
    amber: TailwindColorGroup;
    orange: TailwindColorGroup;
    warmGray: TailwindColorGroup;
    trueGray: TailwindColorGroup;
    coolGray: TailwindColorGroup;
    blueGray: TailwindColorGroup;
}

declare const colors: TailwindColors;

export = colors;
