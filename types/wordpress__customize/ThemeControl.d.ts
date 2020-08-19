import { Control } from './Control';

export class ThemeControl extends Control {
    touchDrag: boolean;
    screenshotRendered: boolean;
    filter(terms: string | string[]): boolean;
    rerenderAsInstalled(installed: boolean): void;
}
