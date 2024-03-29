import { Loader, LoadingManager, Shape } from "three";

export interface FontData {
    glyphs: Record<string, { ha: number; x_min: number; x_max: number; o: string }>;
    familyName: string;
    ascender: number;
    descender: number;
    underlinePosition: number;
    underlineThickness: number;
    boundingBox: { yMin: number; xMin: number; yMax: number; xMax: number };
    resolution: number;
    original_font_information: Record<string, string>;
}

export class FontLoader extends Loader<Font> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: Font) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    parse(json: FontData): Font;
}

export class Font {
    readonly isFont: true;

    /**
     * @default 'Font'
     */
    type: string;

    data: FontData;

    constructor(data: FontData);

    generateShapes(text: string, size?: number): Shape[];
}
