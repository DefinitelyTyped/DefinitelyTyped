export = CssExtractor;
declare function CssExtractor(css: string): void;
declare class CssExtractor {
    constructor(css: string);
    css_: string;
    styleCache_: {
        [x: string]: string;
    };
    private extractGlobalClassStyle_;
    extractStyleFromClass(className: string): {
        [x: string]: string;
    };
    extractStylesFromClasses(classes: string[]): {
        [x: string]: string;
    };
}
