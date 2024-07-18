import { Color } from "../../index";

export interface ScatterSelectedMarker {
    marker: Partial<{
        opacity: number;
        color: Color;
    }>;
    textfont: { color: Color };
}
