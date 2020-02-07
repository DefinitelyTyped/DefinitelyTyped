export type Factor = number;

export type Scale = Factor[];

export interface FontScalePresets {
    majorSecond: Scale;
    minorThird: Scale;
    majorThird: Scale;
    perfectFourth: Scale;
    augmentedFourth: Scale;
}

export interface Options {
    baseFontSize: string;
    baseLineHeight: number;
    baseFontScale: Scale | keyof FontScalePresets;
    addMarginBottom: boolean;
    proximity: boolean;
    proximityFactor: Factor;
}

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface RhythmProperties {
    fontSize: string;
    lineHeight: number;
    marginBottom: string;
}
