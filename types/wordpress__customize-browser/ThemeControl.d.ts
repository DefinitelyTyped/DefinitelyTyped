import { Control } from './Control';

export class ThemeControl extends Control {
    touchDrag: boolean;
    screenshotRendered: boolean;
    filter(terms: string | ReadonlyArray<string>): boolean;
    rerenderAsInstalled(installed: boolean): void;
}
