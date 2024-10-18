import { Factor, Options, RhythmProperties } from "./types";
import { getFontScale, getFontUnit } from "./utils";

export default class Shevy {
    constructor(options?: Partial<Options>);

    baseFontSize: Options["baseFontSize"];
    baseFontUnit: ReturnType<typeof getFontUnit>;
    baseLineHeight: Options["baseLineHeight"];
    baseFontScale: ReturnType<typeof getFontScale>;
    addMarginBottom: Options["addMarginBottom"];
    proximity: Options["proximity"];
    proximityFactor: Options["proximityFactor"];

    h1: RhythmProperties;
    h2: RhythmProperties;
    h3: RhythmProperties;
    h4: RhythmProperties;
    h5: RhythmProperties;
    h6: RhythmProperties;

    body: Pick<RhythmProperties, Exclude<keyof RhythmProperties, "marginBottom">>;

    content: RhythmProperties;

    lineHeightSpacing(factor?: Factor): string;

    baseSpacing(factor?: Factor): string;
}
