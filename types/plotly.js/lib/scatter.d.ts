import { Color } from "../";

export const moduleType: "trace";
export const name: "scatter";
export const categories: string[];
export const meta: { description: string };

export interface ScatterSelectedMarker {
    marker: Partial<{
        opacity: number;
        color: Color;
    }>;
    textfont: { color: Color };
}
