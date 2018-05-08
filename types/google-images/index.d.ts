// Type definitions for google-images 2.1
// Project: https://github.com/vadimdemedes/google-images
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = GoogleImages;

declare namespace GoogleImages {
    type SearchImageSize = "icon" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "huge";
    type SearchImageType = "clipart" | "face" | "lineart" | "news" | "photo";
    type SearchDominantColor = "black" | "blue" | "brown" | "gray" | "green" | "pink" | "purple" | "teal" | "white" | "yellow";
    type SearchColorType = "color" | "gray" | "mono";
    type SearchSafe = "high" | "medium" | "off";

    interface SearchOptions {
        page?: number;
        size?: SearchImageSize;
        type?: SearchImageType;
        dominantColor?: SearchDominantColor;
        colorType?: SearchColorType;
        safe?: SearchSafe;
    }

    interface Image {
        url: string;
        type: string;
        width: number;
        height: number;
        size: number;
        thumbnail: {
            url: string,
            width: number,
            height: number
        };
    }
}

declare class GoogleImages {
    constructor(engineId: string, apiKey: string);

    search(searchTerm: string, options?: GoogleImages.SearchOptions): Promise<GoogleImages.Image[]>;
}
