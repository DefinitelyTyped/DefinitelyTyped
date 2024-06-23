export = CssExtractor;
declare function CssExtractor(css: string): void;
declare class CssExtractor {
    constructor(css: string);
    private css_;
    private styleCache_;
    private extractGlobalClassStyle_;
    extractStyleFromClass(className: string): {
        [x: string]: string;
    };
    extractStylesFromClasses(classes: string[]): {
        [x: string]: string;
    };
}
