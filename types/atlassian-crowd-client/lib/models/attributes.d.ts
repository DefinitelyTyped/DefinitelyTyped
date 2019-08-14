export = Attributes;
declare class Attributes {
    readonly attributes: {[name: string]: any};

    constructor(attributePairs: {[name: string]: any});
    toCrowd(stringify?: (attr: any) => string): any;
    static fromCrowd(attributesArr: ReadonlyArray<{name: string}>, parse?: (json: string) => any): Attributes;
}
