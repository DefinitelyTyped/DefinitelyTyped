// Sample for how to extend Raphael with plugin

import { RaphaelAttributes, RaphaelBaseElement, RaphaelPaper, RaphaelPath, RaphaelSet } from "raphael";

declare module "raphael" {
    // Raphael.fn
    interface RaphaelPaper {
        arrow(x1: number, y1: number, x2: number, y2: number, size: number): RaphaelPath;
        myStuff: {
            arrow(flag: boolean): number;
            star(): void;
        };
        firstLevel: {
            secondLevel: {
                method(): boolean;
            }
        };
    }

    // Raphael.el
    interface RaphaelElement {
        red(): void;
        colored(r: number, g: number, b: number): this;
    }

    // RaphaelPaper.customAttributes
    interface RaphaelAttributes {
        hue: number;
        hsb: string;
    }

    // Raphael.st
    interface RaphaelSet {
        green(): void;
        colorized(r: number, g: number, b: number): this;
    }
}
