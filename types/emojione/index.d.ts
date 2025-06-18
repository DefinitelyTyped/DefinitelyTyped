export as namespace emojione;

export let sprites: boolean;
export let imagePathPNG: string;
export let imagePathSVG: string;
export let imagePathSVGSprites: string;
export let imageType: "png" | "svg";
export let unicodeAlt: boolean;
export let ascii: boolean;
export let unicodeRegexp: string;
export let cacheBustParam: string;
export let emojioneList: {
    [key: string]: {
        unicode: string[];
        fname: string;
        uc: string;
        isCanonical: boolean;
    };
};
export function toShort(str: string): string;
export function toImage(str: string): string;
export function shortnameToImage(str: string): string;
export function unicodeToImage(str: string): string;
export function shortnameToUnicode(str: string): string;
